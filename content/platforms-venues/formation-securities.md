---
name: Formation Securities TSV
jurisdiction: United States (TSV Exemption)
product_name: Formation Securities Tokenized Securities Venue
structure: Permissioned concentrated-liquidity AMM (licensed Orca) plus licensed Orca router, on Solana
chains: Solana
who_can_buy: Permissioned retail and institutional participants after KYC/KYB, sanctions, AML/CFT and wallet screening; tokenizer approval also required to hold tokens
num_assets: 3 named for launch (EXOD, FWDI, GLXY); not yet trading
structure_short: TSV, permissioned AMM
who_can_buy_short: Permissioned participants
last_checked: '2026-11-13'
title: Formation Securities TSV
tags:
- platforms-venues
type: venue
chain: Solana
status: TSV notice published 2026-11-09; trading not commenced as of that notice
last_updated: '2026-11-13'
description: Formation Securities has filed to run a US onchain stock venue on Solana under the SEC's Innovation Exemption.
---

> [!info] At a glance
> **Type:** venue  
> **Jurisdiction:** United States (TSV Exemption)  
> **Chain:** Solana  
> **Status:** TSV notice published 2026-11-09; trading not commenced as of that notice  
> **Last updated:** 2026-11-13  

| Field | Value |
|---|---|
| name | Formation Securities TSV |
| jurisdiction | United States (TSV Exemption) |
| product_name | Formation Securities Tokenized Securities Venue |
| structure | Permissioned concentrated-liquidity AMM (licensed Orca) plus licensed Orca router, on Solana |
| chains | Solana |
| who_can_buy | Permissioned retail and institutional participants after KYC/KYB, sanctions, AML/CFT and wallet screening; tokenizer approval also required to hold tokens |
| num_assets | 3 named for launch (EXOD, FWDI, GLXY); not yet trading |

*In plain English: Formation Securities has filed to run a US onchain stock venue on Solana under the SEC's Innovation Exemption. Trading had not started as of its 9 Nov 2026 notice, which describes permissioned Orca liquidity pools.*

[[concepts/glossary#tsv|TSV]] notice by Formation Securities LLC, a Delaware limited liability company and wholly owned subsidiary of Valcrest, Inc., dated 9 Nov 2026, under the [[concepts/innovation-exemption|Innovation Exemption]] ([Formation notice](https://www.formationsecurities.com/notice.pdf)). The SEC lists it as the fourth written notice of intent to operate as a TSV, with a 9 Nov 2026 submission date ([SEC](https://www.sec.gov/about/divisions-offices/division-trading-markets/innovation-exemption)). Inclusion on that list does not mean the person meets the TSV definition or the exemption conditions ([SEC](https://www.sec.gov/about/divisions-offices/division-trading-markets/innovation-exemption)). Neither Formation nor the TSV is registered with the SEC in any capacity for the activities performed under the TSV Exemption, and the SEC has not passed upon the merits or accuracy of the notice ([Formation notice](https://www.formationsecurities.com/notice.pdf)).

## How it works
- Permissioned [[concepts/glossary#amm-automated-market-maker|AMM]] liquidity pools on [[concepts/glossary#solana|Solana]], using licensed versions of the permissioned concentrated-liquidity AMM ("Orca AMM") smart contracts developed by Orca Management Company S.A., together with a licensed version of Orca's router (the "Formation Router"). Only the TSV may create those pools, and only wallets permissioned by the TSV may trade or provide liquidity ([Formation notice](https://www.formationsecurities.com/notice.pdf)).
- The TSV will not operate an order book, hold or take custody of participants' assets or private keys, extend credit, or conduct primary offerings. The interface is non-custodial: a participant connects a wallet it or its custodian controls ([Formation notice](https://www.formationsecurities.com/notice.pdf)).
- Each pair is one Tokenized NMS Stock against a non-security crypto asset or a tokenized money market fund. Trades settle atomically on Solana, or neither leg moves ([Formation notice](https://www.formationsecurities.com/notice.pdf)).
- Wallet and transfer restrictions are enforced with Solana Token Extensions (Token-2022) transfer hooks. Prices in the pools come from a concentrated-liquidity formula; the notice says the TSV's smart contracts do not use pricing oracles. The Formation Router is an offchain route-selection service; quotes are expected to refresh after about 15 seconds ([Formation notice](https://www.formationsecurities.com/notice.pdf)).
- Hours are 24 hours a day, seven days a week, subject to trading stoppages. The TSV will pause trading when the underlying NMS stock is halted or suspended on its primary listing exchange, including Limit Up-Limit Down pauses, and when required by the exemption's volume caps. During a stoppage, liquidity providers may withdraw liquidity but may not deposit or reposition it ([Formation notice](https://www.formationsecurities.com/notice.pdf)).
- Tokenized NMS Stock may be tokenized by or on behalf of the issuer or by an unaffiliated third-party tokenizer. For third-party tokens, the TSV will give the required issuer notice and will not start trading until the notice period has elapsed without a timely objection. Before admission, the TSV will review evidence that the token provides the same rights and privileges as traditional NMS stock of the equivalent class. Neither the TSV nor any affiliate issues or tokenizes the stocks traded on it. As of the 9 Nov 2026 notice, the TSV had not received a Notice of Issuer Objection ([Formation notice](https://www.formationsecurities.com/notice.pdf)).
- The notice says the TSV does not intend to be the exclusive trading venue for any Tokenized NMS Stock ([Formation notice](https://www.formationsecurities.com/notice.pdf)).
- Service providers named in the notice include Predicate (identity verification), TRM Labs (wallet screening), Orca (AMM and router), Solidus Labs (market surveillance) and Sec3 (smart-contract audit), plus cloud and Solana infrastructure providers ([Formation notice](https://www.formationsecurities.com/notice.pdf)).

## Named launch stocks and company-release plans
The 9 Nov 2026 notice says the TSV intends to make the following Tokenized NMS Stocks available upon launch: Forward Industries, Inc. (FWDI), Galaxy Digital Inc. (GLXY) and Exodus Movement, Inc. (EXOD). It will update the notice before adding any further stock or paired asset. The notice does not say trading has started and does not give a launch date ([Formation notice](https://www.formationsecurities.com/notice.pdf)).

A company press release the same day, not the official notice, says trading is expected to begin in early 2027; Superstate and Securitize are expected to make tokenized shares available; and verified investors are expected to be able to access the venue through the Formation platform and additional channels including Alpaca, Passage by CoinList, Anchorage Digital Bank, N.A., BitGo Bank & Trust, National Association, Fireblocks, Jito's JTX, Solflare and Squads ([PR Newswire](https://www.prnewswire.com/news-releases/formation-securities-notifies-sec-of-intent-to-operate-first-tokenized-securities-venue-on-solana-302932902.html)). Those are company plans, subject to the release's forward-looking-statements caveat. The release's headline calls this the first TSV on Solana; that "first" wording is the company's, not the official notice or the SEC list.

A 13 Nov 2026 Securitize article says Securitize is leveraging the same CET infrastructure in its work supporting Formation's TSV, "enabling both stocks and ETFs to trade through the same CET infrastructure" ([Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed)). That is Securitize's description. Formation's official 9 Nov 2026 notice names only three Tokenized NMS Stocks for launch (FWDI, GLXY and EXOD) and does not mention ETFs ([Formation notice](https://www.formationsecurities.com/notice.pdf)).

How other TSV designs compare: [[comparisons/trading-venue-architectures|Trading venue architectures]]. The exemption itself: [[concepts/innovation-exemption|Innovation Exemption]].

## What this means for holders
- This is a planned venue, not a tokenizer. As of the 9 Nov 2026 notice, trading had not commenced ([Formation notice](https://www.formationsecurities.com/notice.pdf)).
- Only permissioned, screened wallets can trade, and a tokenizer must also approve a wallet before it can hold that tokenizer's Tokenized NMS Stock ([Formation notice](https://www.formationsecurities.com/notice.pdf)).
- The TSV itself does not hold customer assets or keys, and it does not issue the tokens ([Formation notice](https://www.formationsecurities.com/notice.pdf)).
- Reference information only, not investment advice.

## Sources
Public originals for the facts on this page.

- <https://www.formationsecurities.com/notice.pdf>
- <https://www.sec.gov/about/divisions-offices/division-trading-markets/innovation-exemption>
- <https://www.prnewswire.com/news-releases/formation-securities-notifies-sec-of-intent-to-operate-first-tokenized-securities-venue-on-solana-302932902.html>
- <https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed>

*Last checked 2026-11-13. Headline fields only; `unknown` means not yet verified from a source.*
