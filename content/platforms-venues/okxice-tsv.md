---
name: OKXICE TSV
jurisdiction: United States (TSV Exemption)
product_name: Tokenized Securities Venue
structure: Permissioned AMM (Uniswap v4 hook)
chains: XLayer
who_can_buy: Eligible U.S.-based OKX Inc. customers who have activated a CeDeFi Wallet, completed identity verification and completed onboarding with OKXICE; access also uses soulbound tokens per the TSV notice
num_assets: More than 70 assets expected to be listed (OKX, 11 Nov 2026)
structure_short: TSV, permissioned AMM
who_can_buy_short: Eligible US OKX customers
last_checked: '2026-11-14'
title: OKXICE TSV
tags:
- platforms-venues
type: venue
chain: XLayer
status: Announced launch beginning 2026-11-23
last_updated: '2026-11-14'
description: OKXICE is the first onchain venue to publish plans under the SEC's Innovation Exemption, using Uniswap pools.
---

> [!info] At a glance
> **Type:** venue  
> **Jurisdiction:** United States (TSV Exemption)  
> **Chain:** XLayer  
> **Status:** Announced launch beginning 2026-11-23  
> **Last updated:** 2026-11-14  

| Field | Value |
|---|---|
| name | OKXICE TSV |
| jurisdiction | United States (TSV Exemption) |
| product_name | Tokenized Securities Venue |
| structure | Permissioned AMM (Uniswap v4 hook) |
| chains | XLayer |
| who_can_buy | Eligible U.S.-based OKX Inc. customers who have activated a CeDeFi Wallet, completed identity verification and completed onboarding with OKXICE; access also uses soulbound tokens per the TSV notice |
| num_assets | More than 70 assets expected to be listed (OKX, 11 Nov 2026) |

*In plain English: OKXICE is the first onchain venue to publish plans under the SEC's Innovation Exemption, using Uniswap pools. OKX has announced that trading for eligible U.S. customers is due to begin on 23 November 2026.*

The first public [[concepts/glossary#tsv|TSV]] notice under the [[concepts/innovation-exemption|Innovation Exemption]], dated 4 Oct 2026 ([OKXICE notice](https://www.okx.com/cdn/assets/files/2610/798CC1267CB56FB2.pdf)). Design per the notice: Uniswap v4 pools with an OKXICE TSV hook, access via soulbound tokens, pairs against USDC/USDG/USDT, no order book and no custody; it describes admin-key governance.

The notice lists 63 symbols for 62 companies, since Alphabet has two share classes (GOOG and GOOGL) (counted from the [OKXICE notice, 4 Oct](https://www.okx.com/cdn/assets/files/2610/798CC1267CB56FB2.pdf)). Cerebras is not among them; OKXICE's own notices list it as an objector (see below). Coverage: [Ledger Insights](https://www.ledgerinsights.com/ice-okx-venture-plans-trading-of-tokenized-us-stocks-via-uniswap-pools/), [Crypto Briefing](https://cryptobriefing.com/okx-ice-uniswap-v4-hooks-tokenized-stocks/) (news).

## When does OKXICE TSV launch?
On 11 Nov 2026 OKX published an announcement that, beginning 23 Nov 2026, eligible U.S. customers will be able to trade digital securities around the clock through the OKXICE Tokenized Securities Venue, directly in the OKX app. More than 70 assets are expected to be listed, including securities from Better.com, BitGo, Circle, Coinbase, Robinhood, Securitize and Strategy, as well as 59 Direxion ETFs; Strategy will also list its preferred stocks ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch)). A spokesperson said not all of those assets will be available at the start ([CoinDesk](https://www.coindesk.com/business/2026/11/10/okxice-to-debut-tokenized-stock-trading-with-strategy-coinbase-circle-this-month)). The official post does not give a clock time on 23 Nov.

[[issuers/securitize|Securitize]] will provide the tokenization infrastructure. Each token will represent a security entitlement backed one-to-one by an underlying U.S. share, with applicable shareholder rights and economic benefits, including dividends, voting rights and participation in corporate actions. A 13 Nov 2026 Securitize article says Convertible Entitlement Tokens (CETs) are "the mechanism we're using to support the OKXICE TSV launch," and that the same infrastructure can enable "both stocks and ETFs to trade through the same CET infrastructure" ([Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed)). That is Securitize's description of its tokenizer role. Trading will take place through automated market maker liquidity pools built on Uniswap v4 on X Layer. Customers will hold the tokens in self-custodial wallets; the venue will hold neither their assets nor their private keys. Access is limited to eligible U.S.-based OKX Inc. customers who have activated a CeDeFi Wallet and completed onboarding with OKXICE; it requires identity verification and is subject to geographic and other eligibility requirements. The venue's smart contracts restrict trading and liquidity provision to eligible wallets ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch)). The same announcement's footer says the venue is offered by OKXICE LLC under a temporary SEC exemption, is not a registered exchange or broker-dealer, and is not approved by the SEC.

As of the 5 Nov 2026 notice, Coinbase Global, Robinhood Markets, Circle Internet Group, Strategy Inc., Securitize Corp. and BitGo Holdings appear on OKXICE's 4 Oct list of Tokenized NMS Stocks to be made available for trading, and none of them is among the 67 issuers listed as objectors ([OKXICE notice, 4 Oct](https://www.okx.com/cdn/assets/files/2610/798CC1267CB56FB2.pdf); [OKXICE notice, 5 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.05.pdf)). Better.com and the 59 Direxion ETFs named in the 11 Nov announcement were not on that 4 Oct list.

CoinDesk described OKXICE as set to be the second venue to start under the Innovation Exemption, following Canton-based TSV LLC earlier in November ([CoinDesk](https://www.coindesk.com/business/2026/11/10/okxice-to-debut-tokenized-stock-trading-with-strategy-coinbase-circle-this-month)). That ranking is CoinDesk's.

A Reuters item, captured via [Investing.com](https://www.investing.com/news/stock-market-news/okxice-to-launch-247-trading-in-tokenized-us-securities-5018819) syndication because the [original Reuters URL](https://www.reuters.com/legal/government/okxice-launch-247-trading-tokenized-us-securities-2026-11-11/) returned HTTP 401 (paywalled) on 11 Nov 2026, also reports the 23 Nov launch.

## Which issuers have objected to OKXICE trading their stock?
OKXICE's public notice of 5 Nov 2026 lists **67** issuers that objected (Alphabet counted once), up from 50 on 30 Oct. The 17 additions include Amazon, Apple, Tesla, Netflix, Meta, Palantir, S&P Global, KLA, Super Micro, Nebius, Boeing, ServiceNow, Lam Research, Home Depot, GE Vernova and SpaceX. That notice itself gave no trading start date ([OKXICE notice, 5 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.05.pdf)). The same notice describes the venue as Uniswap v4 pools on XLayer, a public blockchain, with 24/7 operation planned ([OKXICE notice, 5 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.05.pdf)). A later OKX announcement of 11 Nov set a beginning date of 23 Nov 2026 (see [[#when-does-okxice-tsv-launch|When does OKXICE TSV launch?]]).

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
- OKXICE is a [[concepts/glossary#tsv|TSV]] under the [[concepts/glossary#innovation-exemption|Innovation Exemption]]: access is controlled through non-transferable access tokens, and trading pairs are [[concepts/glossary#stablecoin|stablecoins]] (USDC, USDG, USDT) ([OKX](https://www.okx.com/cdn/assets/files/2610/798CC1267CB56FB2.pdf)). The 11 Nov announcement limits access at launch to eligible U.S.-based OKX Inc. customers who have activated a CeDeFi Wallet, completed identity verification and completed onboarding with OKXICE ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch)).
- Customers hold the tokens in self-custodial wallets; the venue does not hold their assets or private keys ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch)).
- Each token is described as a security entitlement backed one-to-one by an underlying U.S. share, with applicable shareholder rights including dividends, voting and corporate actions ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch)).
- Issuers can object to third-party tokens of their stock: 67 had objected by 5 Nov 2026, which can keep those stocks off the venue ([OKXICE notice](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.05.pdf)).

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

*Last checked 2026-11-14. Headline fields only; `unknown` means not yet verified from a source.*
