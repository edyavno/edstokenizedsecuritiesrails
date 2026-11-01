---
name: Ondo Global Markets (Ondo Stocks)
jurisdiction: British Virgin Islands
product_name: Ondo stock/ETF tokens
structure: Structured notes giving economic exposure; no shareholder voting/information rights
chains:
- Ethereum
- BNB Chain
- Solana
who_can_buy: Excludes US persons and several jurisdictions; some require qualified/professional status
num_assets: 450+ advertised (per Zerion)
structure_short: Structured notes
who_can_buy_short: Non-US eligible, KYC
last_checked: '2026-10-29'
title: Ondo Global Markets (Ondo Stocks)
tags:
- issuers
type: issuer
chain:
- Ethereum
- BNB Chain
- Solana
status: unknown
last_updated: '2026-10-29'
description: 'In plain English: Ondo''s stock tokens are notes that track US stocks, backed by shares held at US brokers. They are not the shares themselves.'
---

> [!info] At a glance
> **Type:** issuer  
> **Jurisdiction:** British Virgin Islands  
> **Chain:** Ethereum, BNB Chain, Solana  
> **Status:** unknown  
> **Last updated:** 2026-10-29  

| Field | Value |
|---|---|
| name | Ondo Global Markets (Ondo Stocks) |
| jurisdiction | British Virgin Islands |
| product_name | Ondo stock/ETF tokens |
| structure | Structured notes giving economic exposure; no shareholder voting/information rights |
| chains | Ethereum, BNB Chain, Solana |
| who_can_buy | Excludes US persons and several jurisdictions; some require qualified/professional status |
| num_assets | 450+ advertised (per Zerion) |

*In plain English: Ondo's stock tokens are notes that track US stocks, backed by shares held at US brokers. They are not the shares themselves.*

Ondo stock tokens are structured notes issued by Ondo Global Markets (BVI) Limited, backed 1:1 plus a buffer by securities held through US custodial [[concepts/glossary#broker-dealer|broker-dealers]] ([Ondo docs](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory); [trust & transparency](https://docs.ondo.finance/ondo-stocks/trust-and-transparency)).

Eligibility: [Ondo docs](https://docs.ondo.finance/ondo-stocks/eligibility). [[concepts/glossary#redeem|Redemption]]: [Ondo docs](https://docs.ondo.finance/ondo-stocks/investing-and-redeeming). Asset count (450+) is from Zerion (secondary).

The issuer is a [[concepts/glossary#bankruptcy-remote|bankruptcy-remote]] BVI [[concepts/glossary#spv|SPV]]; assets are held at U.S. broker-dealers, overcollateralized, with Ankura as security agent ([Ondo](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory)). Tokens are [[concepts/glossary#erc-20|ERC-20]] on [[concepts/glossary#ethereum|Ethereum]] and BNB Chain and [[concepts/glossary#token-2022|Token-2022]] on [[concepts/glossary#solana|Solana]] ([Ondo](https://docs.ondo.finance/ondo-stocks/overview)).

[[concepts/glossary#mint|Mint]] and redeem use signed quotes through IGMTokenManager ([Ondo API](https://docs.ondo.finance/api-reference/overview)).

On 7 Oct 2026 Assetera, an Austrian MiFID II firm, listed 100+ Ondo tokenized stocks and ETFs for eligible investors in 30 EEA countries, widening to 450+ through Q4 2026 ([Assetera](https://www.assetera.com/media/assetera-x-ondo)).

On 27 Oct 2026 Ondo put 15 Ondo Stocks on [[issuers/robinhood-stock-tokens|Robinhood Chain]] via the Ondo Bridge (minting and redemption stay on Ethereum and BNB Chain). 11 of them, including NVDAon, SPYon, TSLAon and QQQon, sit in Uniswap v4 StablePair pools against the matching Robinhood Stock Token, with dynamic LP fees when the pair drifts from its expected rate. Ondo pitches this as a weekend supply and exit route while Robinhood's mint and redeem window is closed. Ondo also says it has \$1.3B in total value locked and over 450,000 cumulative holders (issuer claims) ([Ondo](https://ondo.finance/blog/ondo-stocks-live-on-robinhood-chain-and-uniswap)).

## What this means for holders
- You hold a structured note from a BVI [[concepts/glossary#spv|SPV]], described as [[concepts/glossary#bankruptcy-remote|bankruptcy-remote]] and overcollateralized by assets held at US [[concepts/glossary#broker-dealer|broker-dealers]] ([Ondo docs](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory)).
- Not offered to US persons; buying requires [[concepts/glossary#kyc|KYC]] ([eligibility](https://docs.ondo.finance/ondo-stocks/eligibility)).
- How minting and [[concepts/glossary#redeem|redemption]] work is set out in [Ondo's docs](https://docs.ondo.finance/ondo-stocks/investing-and-redeeming).

*Reference information only, not investment advice.*

## DTCC ecosystem
Ondo is named among the collaborators and partners in DTCC's Tokenization Service ecosystem at its 28 Oct 2026 launch ([[infrastructure/dtcc-tokenization-pilot|DTCC]]; [DTCC](https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live)).

## Sources
Public originals for the facts on this page.

- <https://docs.ondo.finance/ondo-stocks/legal-and-regulatory>
- <https://docs.ondo.finance/ondo-stocks/eligibility>
- <https://docs.ondo.finance/ondo-stocks/investing-and-redeeming>
- <https://docs.ondo.finance/ondo-stocks/trust-and-transparency>
- <https://zerion.io/blog/best-tokenized-stock-platforms/>
- <https://docs.ondo.finance/ondo-stocks/overview>
- <https://docs.ondo.finance/api-reference/overview>
- <https://ondo.finance/blog/ondo-stocks-live-on-robinhood-chain-and-uniswap>

*Last checked 2026-10-29. Headline fields only; `unknown` means not yet verified from a source.*
