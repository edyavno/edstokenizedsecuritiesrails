---
name: Coinbase Tokenized Stocks
jurisdiction: Abu Dhabi Global Market (FSRA-authorized, per Coinbase via Zerion)
product_name: B20 stock tokens
structure: Beneficial claim on backing shares
chains:
- Base
who_can_buy: Eligible jurisdictions outside the US; offered under Regulation S
num_assets: 58 prospectuses listed on coinbase.com/tokenize (2026-10-17)
structure_short: Beneficial claim, 1:1
who_can_buy_short: Non-US (Reg S)
last_checked: '2026-10-17'
title: Coinbase Tokenized Stocks
tags:
- issuers
type: issuer
chain:
- Base
status: live
last_updated: '2026-10-17'
description: 'In plain English: Coinbase''s stock tokens on Base are each backed by a real share held in custody.'
---

> [!info] At a glance
> **Type:** issuer  
> **Jurisdiction:** Abu Dhabi Global Market (FSRA-authorized, per Coinbase via Zerion)  
> **Chain:** Base  
> **Status:** live  
> **Last updated:** 2026-10-17  

| Field | Value |
|---|---|
| name | Coinbase Tokenized Stocks |
| jurisdiction | Abu Dhabi Global Market (FSRA-authorized, per Coinbase via Zerion) |
| product_name | B20 stock tokens |
| structure | Beneficial claim on backing shares |
| chains | Base |
| who_can_buy | Eligible jurisdictions outside the US; offered under Regulation S |
| num_assets | 58 prospectuses listed on coinbase.com/tokenize (2026-10-17) |

*In plain English: Coinbase's stock tokens on Base are each backed by a real share held in custody.*

Each [[concepts/glossary#b20|B20]] token on Base is a beneficial claim on a real share in [[concepts/glossary#bankruptcy-remote|bankruptcy-remote]] custody ([Coinbase](https://www.coinbase.com/tokenize); [Base](https://www.base.org/stocks)). Coinbase holds an [[concepts/glossary#fsra-adgm|FSRA]] permission in ADGM ([ADGM](https://www.adgm.com/media/announcements/coinbase-establishes-its-tokenization-hub-in-abu-dhabi-with-financial-services-permission-from-the-financial-services-regulatory-authority)).

A public read-only API publishes records, [[concepts/glossary#multiplier|multipliers]] and prospectuses ([Base docs](https://docs.base.org/sdks/tokenized-stocks/overview)).

[[concepts/glossary#authorized-participant|Authorized participants]] (institutional market makers) buy the shares, which go to Alpaca, a regulated broker and [[concepts/glossary#custodian|custodian]] ([Base](https://blog.base.org/tokenized-stocks); [CoinDesk](https://www.coindesk.com/business/2026/08/24/coinbase-debuts-tokenized-stocks-on-base-network-joining-race-to-bring-equities-on-blockchain), news). Token format: [[standards/b20|B20]].

Since 25 Sep 2026, seven Coinbase tokenized stocks (AAPLc, AMZNc, GOOGLc, METAc, MSFTc, NVDAc, TSLAc) can be posted as collateral to borrow USDC on Aave V4 on Base ([Aave](https://www.aave.com/blog/coinbase-tokenized-stocks)).

John D'Agostino, head of strategy at Coinbase Institutional, said the initial offering covers about seven stocks and is planned to grow to 2,000 (a stated plan, not a launched figure) ([TheStreet via Yahoo Finance](https://finance.yahoo.com/markets/crypto/articles/tokenized-stocks-turn-share-collateral-165759306.html), news, 27 Oct 2026).

## Coinbase research view (Jan 2026)
Coinbase Institutional's research team wrote that tokenized public equities were still under \$1B, versus about \$28B for tokenized Treasuries and private credit ([Coinbase Institutional, Major Trends in Tokenization](https://www.coinbase.com/institutional/research-insights/research/market-intelligence/major-trends-in-tokenization), 10 Jan 2026). It flagged three risks:
- **Market depth:** order books for tokenized stocks remain thin; [[concepts/glossary#slippage|slippage]] and volatility can be significantly higher than in the underlying stock, especially post-market or under stress.
- **[[concepts/glossary#oracle|Oracle]] risk:** off-chain prices must be brought onchain; errors, lags or manipulation can break the equivalence between token and underlying collateral.
- **Regulatory fragmentation:** jurisdictions differ on who can own what and how secondary transfers work.

The note says that if freely transferable designs are permitted, tokenized stocks could serve as collateral in lending markets; otherwise, with thin books, extended hours don't yet offset lower depth and higher friction ([Coinbase Institutional](https://www.coinbase.com/institutional/research-insights/research/market-intelligence/major-trends-in-tokenization)).

## What this means for holders
- A B20 stock token is a beneficial claim on a share held in [[concepts/glossary#bankruptcy-remote|bankruptcy-remote]] custody, not a share on the company's register ([Coinbase](https://www.coinbase.com/tokenize); [Base](https://www.base.org/stocks)).
- Offered outside the US only; dividends are reinvested through a [[concepts/glossary#multiplier|multiplier]] ([Base](https://www.base.org/stocks)).
- [[concepts/glossary#redeem|Redemption]] terms are set in the issuer documents; check them before relying on redemption ([Base docs](https://docs.base.org/sdks/tokenized-stocks/overview)).

*Reference information only, not investment advice.*

## Sources
Public originals for the facts on this page.

- <https://www.coinbase.com/tokenize>
- <https://www.base.org/stocks>
- <https://www.adgm.com/media/announcements/coinbase-establishes-its-tokenization-hub-in-abu-dhabi-with-financial-services-permission-from-the-financial-services-regulatory-authority>
- <https://docs.base.org/sdks/tokenized-stocks/overview>
- <https://blog.base.org/tokenized-stocks>
- <https://www.coindesk.com/business/2026/08/24/coinbase-debuts-tokenized-stocks-on-base-network-joining-race-to-bring-equities-on-blockchain>
- <https://www.coinbase.com/institutional/research-insights/research/market-intelligence/major-trends-in-tokenization>
- <https://finance.yahoo.com/markets/crypto/articles/tokenized-stocks-turn-share-collateral-165759306.html>

*Last checked 2026-10-17. Headline fields only; `unknown` means not yet verified from a source.*
