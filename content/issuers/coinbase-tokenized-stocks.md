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

*Last checked 2026-10-17. Headline fields only; `unknown` means not yet verified from a source.*
