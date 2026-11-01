---
name: TSV LLC
jurisdiction: United States (TSV Exemption)
product_name: Tokenized Securities Venue on Canton
structure: Permissioned concentrated-liquidity AMM (Tradecraft, Uniswap v3-style)
chains: Canton
who_can_buy: Approved Canton parties verified by the issuer's transfer agent plus TSV LLC screening
num_assets: 1 named (CNTN) in notice v1.3
structure_short: TSV, permissioned AMM
who_can_buy_short: Approved participants
last_checked: '2026-10-30'
title: TSV LLC
tags:
- platforms-venues
type: venue
chain: Canton
status: TSV notice v1.3 published 2026-10-29; not yet operating
last_updated: '2026-10-30'
description: 'In plain English: TSV LLC is a planned onchain venue on Canton under the SEC''s Innovation Exemption.'
---

> [!info] At a glance
> **Type:** venue  
> **Jurisdiction:** United States (TSV Exemption)  
> **Chain:** Canton  
> **Status:** TSV notice v1.3 published 2026-10-29; not yet operating  
> **Last updated:** 2026-10-30  

| Field | Value |
|---|---|
| name | TSV LLC |
| jurisdiction | United States (TSV Exemption) |
| product_name | Tokenized Securities Venue on Canton |
| structure | Permissioned concentrated-liquidity AMM (Tradecraft, Uniswap v3-style) |
| chains | Canton |
| who_can_buy | Approved Canton parties verified by the issuer's transfer agent plus TSV LLC screening |
| num_assets | 1 named (CNTN) in notice v1.3 |

*In plain English: TSV LLC is a planned onchain venue on Canton under the SEC's Innovation Exemption. Its first stock is Canton Strategic Holdings, tokenized by the company's own transfer agent.*

TSV LLC (organized in Puerto Rico) filed the first [[concepts/glossary#tsv|TSV]] notice under the [[concepts/innovation-exemption|Innovation Exemption]] on 23 Sep 2026 ([SEC](https://www.sec.gov/about/divisions-offices/division-trading-markets/innovation-exemption), raw/117). Founders: Ali Abrar (CEO) and Ryan Trinkle ([CNTN 8-K](https://www.sec.gov/Archives/edgar/data/1861657/000149315226049196/ex99-1.htm), raw/161).

## How it works
- Permissioned [[concepts/glossary#amm-automated-market-maker|AMM]] pools on [[concepts/glossary#canton|Canton]]; at commencement a concentrated-liquidity, Uniswap v3-style design using Tradecraft software licensed from its affiliate Obsidian Software LLC. Only TSV LLC creates pools and sets their parameters ([TSV LLC notice v1.3](https://www.tokenizedstockvenue.com/notice.html), raw/160).
- Paired assets at commencement: USDC (Circle) and SBC (Brale), as issued on Canton ([TSV LLC notice v1.3](https://www.tokenizedstockvenue.com/notice.html)).
- Settlement is atomic: both sides of a trade move together or neither does ([CNTN 8-K](https://www.sec.gov/Archives/edgar/data/1861657/000149315226049196/ex99-1.htm)).
- The issuer's [[concepts/glossary#transfer-agent|transfer agent]] verifies participants and keeps the register; TSV LLC adds its own screening. Neither TSV LLC nor any affiliate trades for its own account at commencement ([TSV LLC notice v1.3](https://www.tokenizedstockvenue.com/notice.html)).
- Service providers named: IntellectEU (Canton node hosting), AWS (cloud), Alpaca (market data, also used for the volume caps), Halborn (security audit of Tradecraft) ([TSV LLC notice v1.3](https://www.tokenizedstockvenue.com/notice.html)).

## First stock: CNTN
Version 1.3 of the notice (29 Oct 2026) names tokenized Canton Strategic Holdings, Inc. (Nasdaq: CNTN) as the stock it will make available, with Fairmint TA LLC, an SEC-registered transfer agent, as transfer agent ([TSV LLC notice v1.3](https://www.tokenizedstockvenue.com/notice.html), raw/160). Shares are tokenized only voluntarily, by the issuer's transfer agent with the issuer's authorization, so this is an [[concepts/glossary#issuer-sponsored-token|issuer-sponsored token]] and the 30-day third-party objection process that has hit [[platforms-venues/okxice-tsv|OKXICE TSV]] does not apply to it ([TSV LLC notice v1.3](https://www.tokenizedstockvenue.com/notice.html)).

CNTN's press release (filed with its 8-K, 29 Oct 2026) says Fairmint will issue the tokenized shares, keep the official onchain ownership record and run compliance on every transfer; holders would get the same rights as holders of CNTN on Nasdaq; trading is expected "as early as Monday, November 2" ([CNTN 8-K](https://www.sec.gov/Archives/edgar/data/1861657/000149315226049196/ex99-1.htm), raw/161). Fairmint TA LLC's SEC transfer-agent file number is 084-06901 ([CNTN 8-K](https://www.sec.gov/Archives/edgar/data/1861657/000149315226049196/ex99-1.htm)). The notice itself still said on 29 Oct that operations had not commenced and no assets were available for trading ([TSV LLC notice v1.3](https://www.tokenizedstockvenue.com/notice.html)).

## Notice versions
- v1.0, 23 Sep 2026: initial notice. v1.1, 19 Oct: affiliate, liquidity, verification, paired assets and other changes. v1.2, 23 Oct: ledger disclosures. v1.3, 29 Oct: names CNTN and Fairmint TA LLC ([TSV LLC notice v1.3](https://www.tokenizedstockvenue.com/notice.html)). Earlier text: raw/143 (v1.2).

## What this means for holders
- Tokenized CNTN would be issued by the company's own transfer agent, and the press release says it carries the same rights as Nasdaq-held shares ([CNTN 8-K](https://www.sec.gov/Archives/edgar/data/1861657/000149315226049196/ex99-1.htm)).
- Only approved, verified participants can trade, against USDC or SBC stablecoins ([TSV LLC notice v1.3](https://www.tokenizedstockvenue.com/notice.html)).
- As of 29 Oct 2026 nothing trades yet; the start date is the company's expectation, not a confirmed launch ([TSV LLC notice v1.3](https://www.tokenizedstockvenue.com/notice.html)).
- Reference information only, not investment advice.

## Sources
Public originals for the facts on this page.

- <https://www.tokenizedstockvenue.com/notice.html>
- <https://www.sec.gov/Archives/edgar/data/1861657/000149315226049196/ex99-1.htm>
- <https://www.sec.gov/about/divisions-offices/division-trading-markets/innovation-exemption>

*Last checked 2026-10-30. Headline fields only; `unknown` means not yet verified from a source.*
