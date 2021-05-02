from brownie import chain
from math import sqrt
import pytest


UNISWAP_V3_CORE = "Uniswap/uniswap-v3-core@1.0.0-rc.2"


@pytest.fixture
def gov(accounts):
    yield accounts[0]


@pytest.fixture
def user(accounts):
    yield accounts[1]


@pytest.fixture
def recipient(accounts):
    yield accounts[2]


@pytest.fixture
def users(gov, user, recipient):
    yield [gov, user, recipient]


@pytest.fixture
def router(Router, gov):
    yield gov.deploy(Router)


@pytest.fixture
def helper(TestHelper, gov):
    yield gov.deploy(TestHelper)


@pytest.fixture
def pool(MockToken, router, pm, gov, users):
    UniswapV3Core = pm(UNISWAP_V3_CORE)

    tokenA = gov.deploy(MockToken, "name A", "symbol A", 18)
    tokenB = gov.deploy(MockToken, "name B", "symbol B", 18)
    fee = 3000

    factory = gov.deploy(UniswapV3Core.UniswapV3Factory)
    tx = factory.createPool(tokenA, tokenB, fee, {"from": gov})
    pool = UniswapV3Core.interface.IUniswapV3Pool(tx.return_value)
    token0 = MockToken.at(pool.token0())
    token1 = MockToken.at(pool.token1())

    # initialize price to 100
    price = int(sqrt(100) * (1 << 96))
    pool.initialize(price, {"from": gov})

    for u in users:
        token0.mint(u, 100e18, {"from": gov})
        token1.mint(u, 10000e18, {"from": gov})
        token0.approve(router, 100e18, {"from": u})
        token1.approve(router, 10000e18, {"from": u})

    # add some liquidity over whole range
    max_tick = 887272 // 60 * 60
    router.mint(pool, -max_tick, max_tick, 1e16, {"from": gov})
    yield pool


@pytest.fixture
def tokens(MockToken, pool):
    return MockToken.at(pool.token0()), MockToken.at(pool.token1())


@pytest.fixture
def vault(PassiveRebalanceVault, pool, router, tokens, gov, users):
    vault = gov.deploy(
        PassiveRebalanceVault, pool, 2400, 1200, 600, 23 * 60 * 60, 100e18
    )

    for u in users:
        tokens[0].approve(vault, 100e18, {"from": u})
        tokens[1].approve(vault, 10000e18, {"from": u})

    yield vault


@pytest.fixture
def vaultAfterPriceMove(vault, pool, router, gov):

    # Mint and move price to simulate existing activity
    vault.mint(1e17, 1e19, gov, {"from": gov})
    prevTick = pool.slot0()[1] // 60 * 60
    router.swap(pool, True, 1e16, {"from": gov})

    # Check price did indeed move
    tick = pool.slot0()[1] // 60 * 60
    assert tick != prevTick

    # Refresh vault
    vault.rebalance({"from": gov})

    # Fast-forward 24 hours to avoid cooldown
    chain.sleep(24 * 60 * 60)

    yield vault


@pytest.fixture
def vaultAfterPriceDown(vault, pool, router, gov):

    # Mint and move price to simulate existing activity
    vault.mint(1e17, 1e19, gov, {"from": gov})
    router.swap(pool, True, 1e18, {"from": gov})  # True means swap token0 -> token1

    # Refresh vault
    vault.rebalance({"from": gov})

    # Check vault holds only token0
    total0, total1 = vault.getTotalAmounts()
    assert total0 > 0
    assert total1 == 0

    # Fast-forward 24 hours to avoid cooldown
    chain.sleep(24 * 60 * 60)

    yield vault


@pytest.fixture
def vaultAfterPriceUp(vault, pool, router, gov):

    # Mint and move price to simulate existing activity
    vault.mint(1e17, 1e19, gov, {"from": gov})
    router.swap(pool, False, 1e20, {"from": gov})  # False means swap token1 -> token0

    # Refresh vault
    vault.rebalance({"from": gov})

    # Check vault holds only token0
    total0, total1 = vault.getTotalAmounts()
    assert total0 == 0
    assert total1 > 0

    # Fast-forward 24 hours to avoid cooldown
    chain.sleep(24 * 60 * 60)

    yield vault


@pytest.fixture
def getPositions(pool, helper):
    def f(vault):
        (b0, b1) = vault.baseRange()
        (r0, r1) = vault.skewRange()
        bkey = helper.computePositionKey(vault, b0, b1)
        rkey = helper.computePositionKey(vault, r0, r1)
        return pool.positions(bkey), pool.positions(rkey)

    yield f


@pytest.fixture
def debug(pool, tokens, helper):
    def f(vault):
        (b0, b1) = vault.baseRange()
        (r0, r1) = vault.skewRange()
        bkey = helper.computePositionKey(vault, b0, b1)
        rkey = helper.computePositionKey(vault, r0, r1)
        print(f"Passive position:    {pool.positions(bkey)}")
        print(f"Rebalance position:  {pool.positions(rkey)}")
        print(f"Spare balance 0:  {tokens[0].balanceOf(vault)}")
        print(f"Spare balance 1:  {tokens[1].balanceOf(vault)}")

    yield f
