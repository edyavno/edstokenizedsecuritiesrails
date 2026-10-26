---
title: Settlement & matching
tags:
- topics
last_checked: 2026-10-25
sources:
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
- **Tokenized Securities Venues** run permissioned [[concepts/glossary#amm|AMM]] pools under the [[concepts/innovation-exemption|Innovation Exemption]]. Conditions include symbol and volume caps, a 30-day issuer objection window, and trading halts in step with the primary market ([SEC order 34-106402](https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf)). See [[platforms-venues/okxice-tsv|OKXICE TSV]] and [[infrastructure/uniswap-permissioned-pools|Uniswap permissioned pools]].
- **[[concepts/glossary#ats|ATS]]**: Figure's blockchain stock settles on Provenance in YLDS ([Figure 424(b)(4)](https://www.sec.gov/Archives/edgar/data/2064124/000162828026008786/figure-blockchain424b4.htm)); see [[issuers/figure-open|Figure OPEN]].
- **National exchanges** trade tokenized and traditional shares on one order book with equal priority, settled through [[concepts/glossary#dtc|DTC]] ([[platforms-venues/nasdaq-tokenized-securities|Nasdaq]]; [SEC](https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf)).

## Post-trade
DTC's Tokenization Service converts book-entry positions into tokens and back, 2 a.m.-6 p.m. ET on business days, targeting 15 minutes or less. Tokens then move peer-to-peer 24/7 between registered [[concepts/glossary#wallet|wallets]] ([DTCC tear sheet](https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html)). On-chain netting and digital cash are on the 2027+ roadmap.

## Sources
Public originals for the facts on this page.

- <https://www.prnewswire.com/news-releases/backeds-xstocks-go-live-today-on-bybit-kraken-and-solana-defi-302494374.html>
- <https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf>
- <https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf>
- <https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html>
- <https://support.kraken.com/articles/xstocks-faq>
- <https://www.sec.gov/Archives/edgar/data/2064124/000162828026008786/figure-blockchain424b4.htm>
