---
name: OKXICE TSV
jurisdiction: United States (TSV Exemption)
product_name: Tokenized Securities Venue
structure: Permissioned AMM (Uniswap v4 hook)
chains: XLayer
who_can_buy: Eligible U.S.-based OKX Inc. customers who complete identity verification, activate a CeDeFi Wallet and complete OKX Inc. onboarding; access is subject to geographic and other eligibility requirements, and uses soulbound tokens per the TSV notice
num_assets: 6 Tokenized NMS Stocks at launch (COIN, SECZ, MSTR, BTGO, HOOD, CRCL), each paired with USDC; 113 assets confirmed for a rolling rollout (OKX, 23 Nov 2026)
structure_short: TSV, permissioned AMM
who_can_buy_short: Eligible US OKX customers
last_checked: '2026-11-24'
title: OKXICE TSV
tags:
- platforms-venues
type: venue
chain: XLayer
status: Live; launched 2026-11-23 at noon ET, per OKX
last_updated: '2026-11-24'
description: OKXICE is the first onchain venue to publish plans under the SEC's Innovation Exemption, using Uniswap pools.
---

> [!info] At a glance
> **Type:** venue  
> **Jurisdiction:** United States (TSV Exemption)  
> **Chain:** XLayer  
> **Status:** Live; launched 2026-11-23 at noon ET, per OKX  
> **Last updated:** 2026-11-24  

| Field | Value |
|---|---|
| name | OKXICE TSV |
| jurisdiction | United States (TSV Exemption) |
| product_name | Tokenized Securities Venue |
| structure | Permissioned AMM (Uniswap v4 hook) |
| chains | XLayer |
| who_can_buy | Eligible U.S.-based OKX Inc. customers who complete identity verification, activate a CeDeFi Wallet and complete OKX Inc. onboarding; access is subject to geographic and other eligibility requirements, and uses soulbound tokens per the TSV notice |
| num_assets | 6 Tokenized NMS Stocks at launch (COIN, SECZ, MSTR, BTGO, HOOD, CRCL), each paired with USDC; 113 assets confirmed for a rolling rollout (OKX, 23 Nov 2026) |

*In plain English: OKXICE is the first onchain venue to publish plans under the SEC's Innovation Exemption, using Uniswap pools. OKX said trading for eligible U.S. customers opened at noon ET on 23 November 2026.*

The first public [[concepts/glossary#tsv|TSV]] notice under the [[concepts/innovation-exemption|Innovation Exemption]], dated 4 Oct 2026 ([OKXICE notice](https://www.okx.com/cdn/assets/files/2610/798CC1267CB56FB2.pdf)). Design per the notice: Uniswap v4 pools with an OKXICE TSV hook, access via soulbound tokens, pairs against USDC/USDG/USDT, no order book and no custody; it describes admin-key governance.

The notice lists 63 symbols for 62 companies, since Alphabet has two share classes (GOOG and GOOGL) (counted from the [OKXICE notice, 4 Oct](https://www.okx.com/cdn/assets/files/2610/798CC1267CB56FB2.pdf)). Cerebras is not among them; OKXICE's own notices list it as an objector (see below). Coverage: [Ledger Insights](https://www.ledgerinsights.com/ice-okx-venture-plans-trading-of-tokenized-us-stocks-via-uniswap-pools/), [Crypto Briefing](https://cryptobriefing.com/okx-ice-uniswap-v4-hooks-tokenized-stocks/) (news).

## When did OKXICE TSV launch?
On 23 Nov 2026 OKX said that, starting at noon ET that day, eligible U.S. customers can trade available assets around the clock on OKXICE TSV, in the TSV tab of the OKX app. The venue has confirmed 113 assets, including stocks, ETFs and ETPs, which will become available on a rolling basis beginning that day. Confirmed issuers and asset managers are Better.com, BitGo, Circle, Coinbase, Direxion, eToro, Fidelity Investments, Robinhood, Securitize, Strategy, Strive and Vida Global ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch-going-live)). Compared with OKX's 11 Nov announcement, the newly named names in that list are eToro, Fidelity Investments, Strive and Vida Global. The earlier post had said more than 70 assets were expected to be listed, including 59 Direxion ETFs, and that Strategy would also list its preferred stocks ([OKX, 11 Nov](https://www.okx.com/en-us/learn/okxice-tsv-launch)). The 23 Nov post does not say that all 113 assets are available at the open, and it does not name the day-one tickers.

The 20 Nov 2026 public notice says that at launch the venue makes available six Tokenized NMS Stocks, each paired with USDC and each tokenized by Securitize Markets, LLC: Coinbase Global (COIN), Securitize (SECZ), Strategy (MSTR), BitGo (BTGO), Robinhood (HOOD) and Circle (CRCL) ([OKXICE notice, 20 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.20.pdf)). This page has not independently confirmed later additions past those six.

[[issuers/securitize|Securitize]] provides the tokenization infrastructure. Each token is a security entitlement backed one-to-one by an underlying share, with applicable shareholder rights and economic benefits, including dividends, voting rights and corporate actions. Trading takes place through automated market maker liquidity pools on Uniswap v4, built on X Layer. Customers hold the tokens in self-custodial wallets; the venue does not hold customer assets or private keys. Access is limited to eligible U.S.-based OKX Inc. customers who complete identity verification, activate a CeDeFi Wallet and complete OKX Inc. onboarding, and is subject to geographic and other eligibility requirements. The venue's smart contracts restrict trading and liquidity provision to eligible wallets ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch-going-live)). The same post's footer says the venue is offered by OKXICE LLC under a temporary SEC exemption, that the NYSE does not operate or oversee it, and that it is not a registered exchange or broker-dealer and is not approved by the SEC.

A 13 Nov 2026 Securitize article says Convertible Entitlement Tokens (CETs) are "the mechanism we're using to support the OKXICE TSV launch," and that the same infrastructure can enable "both stocks and ETFs to trade through the same CET infrastructure" ([Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed)). That is Securitize's description of its tokenizer role.

As of the 5 Nov 2026 notice, Coinbase Global, Robinhood Markets, Circle Internet Group, Strategy Inc., Securitize Corp. and BitGo Holdings already appeared on OKXICE's 4 Oct list of Tokenized NMS Stocks to be made available for trading, and none of them was among the 67 issuers listed as objectors ([OKXICE notice, 4 Oct](https://www.okx.com/cdn/assets/files/2610/798CC1267CB56FB2.pdf); [OKXICE notice, 5 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.05.pdf)). Better.com and the 59 Direxion ETFs named in the 11 Nov announcement were not on that 4 Oct list. A spokesperson had said not all of the announced assets would be available at the start ([CoinDesk](https://www.coindesk.com/business/2026/11/10/okxice-to-debut-tokenized-stock-trading-with-strategy-coinbase-circle-this-month)).

CoinDesk described OKXICE as set to be the second venue to start under the Innovation Exemption, following Canton-based TSV LLC earlier in November ([CoinDesk](https://www.coindesk.com/business/2026/11/10/okxice-to-debut-tokenized-stock-trading-with-strategy-coinbase-circle-this-month)). That ranking is CoinDesk's.

A Reuters item, captured via [Investing.com](https://www.investing.com/news/stock-market-news/okxice-to-launch-247-trading-in-tokenized-us-securities-5018819) syndication because the [original Reuters URL](https://www.reuters.com/legal/government/okxice-launch-247-trading-tokenized-us-securities-2026-11-11/) returned HTTP 401 (paywalled) on 11 Nov 2026, also reports the 23 Nov launch.

## How is OKXICE TSV built on X Layer?
The 20 Nov 2026 notice says the venue's smart contracts are deployed on XLayer, a public permissionless blockchain, at these addresses:

- TSVRegistryV1 (`0x5bd7ea82642b49ebdfc3fbc0e656941c165392ea`) registers Tokenized NMS Stocks, AMM liquidity pools and participant permissions.
- TSVSwapRouterV1 (`0xc58d2bf7ad7cb023760e767e9050be3f15cad686`) is the entry point through which trades are submitted to the pools.
- TSVVolumeLedgerV1 (`0x9b43d49b1a6d41aa22ac788442eb5cb5bbc543c5`) records the daily volume limit and cumulative trading volume for each Tokenized NMS Stock.
- TSVLPManagerV1 (`0x9418a8ccb8170814d27c7f3db99e1b9f8c4a7b76`) manages liquidity positions, including non-transferable records of liquidity provided.
- TSVHookV1, the OKXICE TSV Hook (`0xf151416e74d6b4ae00197e8d8e4f4765283b3fff`), verifies that a wallet holds a valid soulbound token before every trade and liquidity action, enforces the trading rules, and checks each trade against the applicable volume limit.
- PermissionsAdapterFactory (`0x4c750656fca58da2a2e0402bd1ab0b39d134bdba`) creates and validates the permission adapters through which Tokenized NMS Stock is held in the pools under the tokenizer's transfer restrictions.
- An SBT contract (`0x2d7b601Fb9a54F62E7257B19F18BE315D2d76f9c`) issues and revokes the soulbound tokens used for permissioning.
- The AMM pools are created in Uniswap v4's PoolManager (`0x360e68faccca8ca495c1b759fd9eee466db9fb32`), which the notice describes as third-party contracts that do not belong to OKXICE TSV.

A wallet holding a valid soulbound token may interact with the TSV contracts directly or through a custom integration. Third-party contracts cannot integrate unless they are whitelisted; the notice says OKXICE TSV does not currently support aggregators, solvers or relayers. Administrator keys are managed by OKX Technology Inc.: critical functions require a multi-signature transaction, and day-to-day functions use a single administrator key. Prior to commencing operations, the contracts were audited internally by OKX Technology Inc. and externally by Certified Kernel Tech LLC, an independent third-party security firm. Changes and upgrades are reviewed and audited internally by OKX Technology Inc. before deployment ([OKXICE notice, 20 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.20.pdf)).


## Where can you see OKXICE TSV trading data?
OKXICE TSV makes transaction data freely and publicly available, in machine-readable form, at [okx.com/okxicetsv](https://www.okx.com/okxicetsv). The 20 Nov 2026 notice says that data covers all transactions during the preceding 30 days and is updated within 10 minutes of each transaction. For each trade it includes the symbol of the Tokenized NMS Stock and of the paired payment stablecoin, the USD price, the size, the UTC timestamp and the direction of the trade. The venue also publishes the smart contract address of each AMM liquidity pool, the daily share volume of each asset pair, and the end-of-day size of each pool ([OKXICE notice, 20 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.20.pdf)).

Official API documentation is in the [OKX OnchainOS TSV data reference](https://web3.okx.com/onchainos/dev-docs/market/onchaindata-tsv-reference), which is linked from that page as "API Docs". The reference describes three open GET endpoints that require no login, API key or signature, with a limit of 2 requests per second per IP:

- **asset-list** returns the supported TSV assets, up to 300 entries in one response, including each stock token's address and symbol, the payment asset symbol, and the Uniswap v4 pool ID.
- **transaction-list** returns trades from the last 30 days, including the USD execution price, the executed share quantity, the UTC confirmation time, the buy or sell direction, and the pool fee.
- **daily-statistics** is documented as returning daily executed share volume and each pool's end-of-day size.

A query of those public endpoints on the evening of 23 Nov 2026 ET returned the six launch pools (BTGO, MSTR, HOOD, COIN, CRCL and SECZ, each paired with USDC), with stock token addresses and Uniswap v4 pool IDs, and trade fills that listed a 0.2% liquidity-pool fee. The documented transaction fields, and the fills returned that evening, do not include trader wallet addresses. The daily-statistics endpoint was still returning an empty list at that time. The separate 0.1% OKXICE service fee is not broken out on each fill.

The fee schedule on [okx.com/okxicetsv](https://www.okx.com/okxicetsv) lists a current total trading fee of 30 bps (0.30%): a 0.2% liquidity pool fee and a 0.1% OKXICE service fee. The same page says OKXICE waives gas fees for users.

## How much traded in OKXICE's first 24 hours?
In the first 24 hours after the noon ET launch on 23 Nov 2026 (through noon ET on 24 Nov), the six launch USDC pools recorded 3,314 trades worth about \$2.55 million. Just over half of that dollar volume traded outside regular U.S. market hours. The full breakdown, including prices and pool sizes, is in [[analyses/okxice-tsv-first-24-hours|OKXICE TSV's first 24 hours]]. Figures are from the venue's public TSV API, pulled around 12:30 PM ET on 24 Nov 2026 ([transaction-list](https://web3.okx.com/api/v6/explorer/tsv/transaction-list), [daily-statistics](https://web3.okx.com/api/v6/explorer/tsv/daily-statistics)). The same 24 Nov pull found that the daily-statistics feed, which had been empty the evening before, was now populated, and that the asset list still showed only the same six launch USDC pools ([asset-list](https://web3.okx.com/api/v6/explorer/tsv/asset-list)).

## Which issuers have objected to OKXICE trading their stock?
OKXICE's public notice of 20 Nov 2026 still lists **67** issuers that objected (Alphabet counted once), the same count and names as the 5 Nov notice ([OKXICE notice, 20 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.20.pdf); [OKXICE notice, 5 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.05.pdf)). The 5 Nov notice listed **67** issuers, up from 50 on 30 Oct. The 17 additions include Amazon, Apple, Tesla, Netflix, Meta, Palantir, S&P Global, KLA, Super Micro, Nebius, Boeing, ServiceNow, Lam Research, Home Depot, GE Vernova and SpaceX. That notice itself gave no trading start date ([OKXICE notice, 5 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.05.pdf)). The same notice describes the venue as Uniswap v4 pools on XLayer, a public blockchain, with 24/7 operation planned ([OKXICE notice, 5 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.05.pdf)). An OKX announcement of 11 Nov set a beginning date of 23 Nov 2026; OKX later said the venue opened at noon ET that day (see [[#when-did-okxice-tsv-launch|When did OKXICE TSV launch?]]).

CoinDesk tallied objections from 56 of the 62 companies on the original list, which differs from the 67 objectors on the 5 Nov notice; CoinDesk also reported that total objections reached 67, including companies outside that initial selection ([CoinDesk](https://www.coindesk.com/business/2026/11/10/okxice-to-debut-tokenized-stock-trading-with-strategy-coinbase-circle-this-month)). This page keeps the notice's count of 67.

Applied Optoelectronics is the one issuer in this record to have given an on-the-record reason. A spokesperson previously told Fortune that the framework's potential impact on the stock's pricing, liquidity and volatility remained unclear, and that the company was concerned investors might mistakenly believe it sponsored or endorsed the offering: "At this stage, we don't see a clear benefit to AOI or our shareholders that justifies these uncertainties" ([Fortune](https://fortune.com/2026/11/05/apple-home-depot-list-objectors-tokenized-stock-plan-nyse-owner/), 5 Nov 2026). Fortune's own objector counts in that article differ from the 5 Nov notice and are not used here.

OKXICE's public notice of 30 Oct 2026 lists **50** issuers that objected, up from 38 on 28 Oct. New since 28 Oct: CrowdStrike, Corning, Micron, IREN, USA Rare Earth, Bloom Energy, NIKE, NVIDIA, Palo Alto Networks, Costco, Reddit and Hewlett Packard Enterprise. That notice also gave no trading start date ([OKXICE notice, 30 Oct](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.10.30.pdf)).

OKXICE's public notice of 28 Oct 2026 lists **38** issuers that objected, up from 22 on 23 Oct. New since 23 Oct: IBM, IonQ, Oracle, Intel, JPMorgan, AMD, Applied Materials, Coca-Cola, Adobe, Dell, Sandisk, Eli Lilly, Carnival, Arcos Dorados, Walmart and Cigna. That notice also gave no trading start date ([OKXICE notice, 28 Oct](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.10.28.pdf)).

OKXICE's public notice of 23 Oct 2026 lists **22** issuers that objected: Cerebras (CBRS), AppLovin, Applied Digital, Rocket Lab, CoreWeave, Verizon, Applied Optoelectronics, Broadcom, UnitedHealth, Goldman Sachs, Microsoft, Qualcomm, Caterpillar, McDonald's, Western Digital, Alphabet (GOOG/GOOGL), Arm, Wells Fargo, Moderna, Cisco, Intuit and Marvell ([OKXICE notice, 23 Oct](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.10.23.pdf)).

The first 16 were already on its 19 Oct notice; Arm, Wells Fargo, Moderna, Cisco, Intuit and Marvell are new ([OKXICE notice, 19 Oct](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.10.19.pdf)). Wells Fargo and Arm were not on the 4 Oct list, so not every objection removes a listed stock ([OKXICE notice, 4 Oct](https://www.okx.com/cdn/assets/files/2610/798CC1267CB56FB2.pdf); [OKXICE notice, 23 Oct](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.10.23.pdf)). CNBC's 21 Oct count of 16 matches the 19 Oct notice ([CNBC](https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html), news).

Cerebras appears as an objector even though it was not among the 63 symbols in the 4 Oct notice; neither notice says why (possibly an objection filed ahead of a listing; unverified). Under the [[concepts/innovation-exemption|Innovation Exemption]] the venue must notify each issuer and wait 30 days after receipt before trading ([CNBC](https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html)). Per Nasdaq's issuer FAQ, objections go directly to the venue that sent the notice and count only for that venue; there is no blanket opt-out across all TSVs ([Nasdaq FAQ](https://www.nasdaq.com/docs/listings/faq-sec-innovation-exemption)).

## ICE investment in OKX (March 2026)
On 5 Mar 2026, before the TSV notices, Intercontinental Exchange announced a strategic relationship and a minority investment in OKX at a stated \$25 billion valuation, with the terms undisclosed, and said ICE would have a board seat on OKX's board. ICE said the minority position was not expected to have a material impact on its 2026 financial results or capital return plans ([ICE](https://ir.theice.com/press/news-details/2026/ICE-Makes-Investment-in-OKX-Establishing-Strategic-Relationship/)). That investment is separate from the 50/50 OKXICE LLC joint venture that operates this venue, which is described in later OKXICE notices (see [[#which-issuers-have-objected-to-okxice-trading-their-stock|Which issuers have objected?]]). The same March release also mentions, subject to regulatory approval, OKX providing access to ICE's U.S. futures and NYSE tokenized equities markets; that is NYSE's separate issuer-sponsored platform, not this TSV ([[platforms-venues/nyse-ice-tokenized-platform|NYSE / ICE tokenized platform]]).

## What this means for holders
- OKXICE is a [[concepts/glossary#tsv|TSV]] under the [[concepts/glossary#innovation-exemption|Innovation Exemption]]: access is controlled through non-transferable access tokens, and trading pairs are [[concepts/glossary#stablecoin|stablecoins]]. The first notice named USDC, USDG and USDT ([OKXICE notice, 4 Oct](https://www.okx.com/cdn/assets/files/2610/798CC1267CB56FB2.pdf)); the 20 Nov notice gives USDC and USDG as examples, and the six stocks available at launch are each paired with USDC ([OKXICE notice, 20 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.20.pdf)). The 23 Nov announcement limits access to eligible U.S.-based OKX Inc. customers who complete identity verification, activate a CeDeFi Wallet and complete OKX Inc. onboarding ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch-going-live)).
- Customers hold the tokens in self-custodial wallets; the venue does not hold their assets or private keys ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch-going-live)).
- Each token is described as a security entitlement backed one-to-one by an underlying share, with applicable shareholder rights including dividends, voting and corporate actions ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch-going-live)).
- Trade data for the preceding 30 days is published freely in machine-readable form at [okx.com/okxicetsv](https://www.okx.com/okxicetsv), and through a no-login public API documented in the [OKX OnchainOS TSV data reference](https://web3.okx.com/onchainos/dev-docs/market/onchaindata-tsv-reference) ([OKXICE notice, 20 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.20.pdf)).
- In the first 24 hours after the noon ET launch, the six launch pools recorded 3,314 trades worth about \$2.55 million, with just over half of that dollar volume outside regular U.S. market hours. See [[analyses/okxice-tsv-first-24-hours|OKXICE TSV's first 24 hours]].
- Issuers can object to third-party tokens of their stock: 67 had objected as of the 20 Nov 2026 notice, the same count as on 5 Nov, which can keep those stocks off the venue ([OKXICE notice, 20 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.20.pdf)).

*Reference information only, not investment advice.*

## Sources
Public originals for the facts on this page.

- <https://didalabs.com/tokenized-stock-objection/>
- <https://www.ledgerinsights.com/ice-okx-venture-plans-trading-of-tokenized-us-stocks-via-uniswap-pools/>
- <https://cryptobriefing.com/okx-ice-uniswap-v4-hooks-tokenized-stocks/>
- <https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html>
- <https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf>
- <https://www.nasdaq.com/docs/listings/faq-sec-innovation-exemption>
- <https://www.coindesk.com/business/2026/11/10/okxice-to-debut-tokenized-stock-trading-with-strategy-coinbase-circle-this-month>
- <https://www.investing.com/news/stock-market-news/okxice-to-launch-247-trading-in-tokenized-us-securities-5018819>
- <https://decrypt.co/383040/okx-ice-tokenized-stock-venue-sets-launch-crypto-companies-big-tech-opts-out>
- <https://fortune.com/2026/11/05/apple-home-depot-list-objectors-tokenized-stock-plan-nyse-owner/>
- <https://ir.theice.com/press/news-details/2026/ICE-Makes-Investment-in-OKX-Establishing-Strategic-Relationship/>
- <https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed>

*Last checked 2026-11-24. Headline fields only; `unknown` means not yet verified from a source.*
