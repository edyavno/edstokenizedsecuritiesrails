---
title: Implementations compared by model
type: comparison
tags:
- comparisons
last_checked: '2026-10-17'
sources:
- https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
description: 'In plain English: A side-by-side table of tokenized stock projects, grouped by legal model.'
---

*In plain English: A side-by-side table of tokenized stock projects, grouped by legal model.*

Classification follows the [[concepts/legal-taxonomy|SEC staff taxonomy]]. Details and sources are on each linked page.

| Implementation | Model | Key mechanism |
|---|---|---|
| [[issuers/superstate-opening-bell\|Superstate Opening Bell]] | Issuer-sponsored | SEC-registered transfer agent; onchain cap table |
| [[issuers/securitize\|Securitize (issuer shares)]] | Issuer-sponsored | Transfer agent book entry |
| [[issuers/securitize\|Securitize Stocks]] | Custodial entitlement | UCC Art. 8 via broker-dealer; Solana PropAMM |
| [[issuers/coinbase-tokenized-stocks\|Coinbase B20]] | Custodial claim | Beneficial claim; Alpaca custody |
| [[issuers/dinari\|Dinari dShares]] | Broker-dealer mirror record | Tokens mirror off-chain brokerage books |
| [[infrastructure/dtcc-tokenization-pilot\|DTC Tokenized Entitlements]] | Custodial entitlement (post-trade) | DTC participants; NAL |
| [[issuers/ondo-global-markets\|Ondo Stocks]] | Synthetic / note | BVI SPV notes; economic exposure |
| [[issuers/robinhood-stock-tokens\|Robinhood Stock Tokens]] | Synthetic / debt security | Jersey issuer; no rights in underlying |
| [[issuers/bstocks\|bStocks]] | Synthetic / certificate | ADGM certificates over shares |
| [[issuers/xstocks-backed\|xStocks]] | Backed tracker | Jersey issuer; multiplier |
| [[platforms-venues/okxice-tsv\|OKXICE TSV]] | Venue (TSV) | Permissioned [[concepts/glossary#amm-automated-market-maker\|AMM]] under Innovation Exemption |
| [[concepts/post-trade-reg-nms-model\|Nasdaq / NYSE]] | Venue (exchange) | Same book, DTC settlement |

## Sources
Public originals for the facts on this page.

- <https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities>
