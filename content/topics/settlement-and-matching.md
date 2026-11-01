---
title: Settlement & matching
tags:
- topics
last_checked: 2026-10-31
sources:
- https://www.bankofengland.co.uk/paper/2026/cp/supervisory-expectations-for-ccps-seeking-to-accept-tokenised-collateral
- https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live
- https://www.prnewswire.com/news-releases/backeds-xstocks-go-live-today-on-bybit-kraken-and-solana-defi-302494374.html
- https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf
- https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf
- https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html
- https://support.kraken.com/articles/xstocks-faq
- https://www.sec.gov/Archives/edgar/data/2064124/000162828026008786/figure-blockchain424b4.htm
description: 'In plain English: How tokenized stock trades get matched and settled, and how that differs from today''s next-day settlement.'
---

*In plain English: How tokenized stock trades get matched and settled, and how that differs from today's next-day settlement.*

Tokenized stocks trade and settle in several ways (see [[overview|the overview]]).

## Venue models
- **Centralized exchanges** list tokens: Kraken trades most xStocks 24/5, with 10 trading 24/7 on Kraken Pro; withdrawn tokens can trade 24/7 on DEXs ([Kraken FAQ](https://support.kraken.com/articles/xstocks-faq)).
- **Onchain DEXs**: [[concepts/glossary#wrapper|wrapped]] tokens trade permissionlessly in DeFi pools.
- **Tokenized Securities Venues** run permissioned [[concepts/glossary#amm-automated-market-maker|AMM]] pools under the [[concepts/innovation-exemption|Innovation Exemption]]. Conditions include symbol and volume caps, a 30-day issuer objection window, and trading halts in step with the primary market ([SEC order 34-106402](https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf)). See [[platforms-venues/okxice-tsv|OKXICE TSV]] and [[infrastructure/uniswap-permissioned-pools|Uniswap permissioned pools]].
- **[[concepts/glossary#ats|ATS]]**: Figure's blockchain stock settles on Provenance in YLDS ([Figure 424(b)(4)](https://www.sec.gov/Archives/edgar/data/2064124/000162828026008786/figure-blockchain424b4.htm)); see [[issuers/figure-open|Figure OPEN]].
- **National exchanges** trade tokenized and traditional shares on one order book with equal priority, settled through [[concepts/glossary#dtc|DTC]] ([[platforms-venues/nasdaq-tokenized-securities|Nasdaq]]; [SEC](https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf)).

## Post-trade
DTC's Tokenization Service went live on 28 Oct 2026 with 20 signed participants ([DTCC](https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live)). It converts book-entry positions into tokens and back, 2 a.m.-6 p.m. ET on business days, targeting 15 minutes or less. Tokens then move peer-to-peer 24/7 between registered [[concepts/glossary#wallet|wallets]] ([DTCC tear sheet](https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html)). On-chain netting and digital cash are on the 2027+ roadmap.

## Collateral and clearing
The Bank of England's 29 Oct 2026 consultation says UK [[concepts/glossary#ccp|CCPs]] can already accept tokenised forms of eligible collateral (cash, bonds and other instruments, gold) under existing rules. Its draft expectations cover liquidity, valuation and interoperability, settlement finality, credit and concentration risk, operational resilience, and custody. Liquidity must be judged separately from the underlying asset, since trading hours and conversion can affect a forced sale. It also asks about wider collateral such as stablecoins and tokenised money market funds. Closes 12 Feb 2027 ([Bank of England CP](https://www.bankofengland.co.uk/paper/2026/cp/supervisory-expectations-for-ccps-seeking-to-accept-tokenised-collateral)).

## Liquidity and price risk
Coinbase Institutional's research team noted that tokenized-stock order books remain thin, with [[concepts/glossary#slippage|slippage]] and volatility significantly higher than in the underlying equity, especially post-market or under stress. It also flagged [[concepts/glossary#oracle|oracle]] errors or lags as a risk to token/collateral equivalence ([Coinbase Institutional](https://www.coinbase.com/institutional/research-insights/research/market-intelligence/major-trends-in-tokenization), 10 Jan 2026).

## Sources
Public originals for the facts on this page.

- <https://www.bankofengland.co.uk/paper/2026/cp/supervisory-expectations-for-ccps-seeking-to-accept-tokenised-collateral>
- <https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live>
- <https://www.prnewswire.com/news-releases/backeds-xstocks-go-live-today-on-bybit-kraken-and-solana-defi-302494374.html>
- <https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf>
- <https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf>
- <https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html>
- <https://support.kraken.com/articles/xstocks-faq>
- <https://www.sec.gov/Archives/edgar/data/2064124/000162828026008786/figure-blockchain424b4.htm>
