---
title: Settlement & matching
tags:
- topics
last_checked: '2026-11-12'
sources:
- https://www.bankofengland.co.uk/paper/2026/cp/supervisory-expectations-for-ccps-seeking-to-accept-tokenised-collateral
- https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live
- https://www.prnewswire.com/news-releases/backeds-xstocks-go-live-today-on-bybit-kraken-and-solana-defi-302494374.html
- https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf
- https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf
- https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html
- https://support.kraken.com/articles/xstocks-faq
- https://www.sec.gov/Archives/edgar/data/2064124/000162828026008786/figure-blockchain424b4.htm
- https://files.dtcc.com/download/assets/DAS-001/8a31d732d2d311f1a30ef632b7f70f6d
- https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/ESM-is-first-European-supranational-issuer-to-settle-DLT-based-bond-issuance-on-Eurosystem-s-Pontes-platform-with-Bundesbank-and-Clearstream-5660764
- https://www.rba.gov.au/payments-and-infrastructure/tokenised-money/the-role-of-rits-in-supporting-settlement-in-a-tokenised-ecosystem/pdf/the-role-of-rits-in-supporting-settlement-in-a-tokenised-ecosystem.pdf
- https://docs.chain.link/data-streams/rwa-streams/24-5-us-equities-user-guide
- https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks
- https://docs.xstocks.fi/docs/frequently-asked-questions
- https://docs.ondo.finance/ondo-stocks/market-hours-and-trading-availability
- https://docs.ondo.finance/ondo-stocks/token-and-quote-pricing
- https://www.imf.org/-/media/files/publications/gfsr/2026/october/english/ch3.pdf
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
DTC's Tokenization Service went live on 28 Oct 2026 with 20 signed participants ([DTCC](https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live)). It converts book-entry positions into tokens and back, targeting 15 minutes or less ([DTCC tear sheet](https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html)). DTC's participant notice says conversion orders run Monday to Friday, 2 a.m.-6 p.m. ET, and tokens then move 24/7 between allowed listed [[concepts/glossary#wallet|wallets]] on supported networks ([DTC notice DAS-001](https://files.dtcc.com/download/assets/DAS-001/8a31d732d2d311f1a30ef632b7f70f6d)). On-chain netting and digital cash are on the 2027+ roadmap.

In Europe, the ESM settled a €1bn DLT bond through the Eurosystem's Pontes platform on 26 Oct 2026, with the bond on Clearstream's D7 and the cash leg in central bank money in T2 ([Deutsche Börse release](https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/ESM-is-first-European-supranational-issuer-to-settle-DLT-based-bond-issuance-on-Eurosystem-s-Pontes-platform-with-Bundesbank-and-Clearstream-5660764)).

Central banks are weighing how to link token platforms to their payment systems. The Reserve Bank of Australia's Sep 2026 consultation lays out three [[concepts/glossary#dvp|DvP]] models: lock the asset, then pay in the central bank system (used by Australia's Austraclear and CHESS today); lock the central bank money, then move the asset (used in property settlement); or lock both through a synchronisation operator (as the Bank of England and Bundesbank have considered). It picks none ([RBA consultation paper](https://www.rba.gov.au/payments-and-infrastructure/tokenised-money/the-role-of-rits-in-supporting-settlement-in-a-tokenised-ecosystem/pdf/the-role-of-rits-in-supporting-settlement-in-a-tokenised-ecosystem.pdf)).

## Collateral and clearing
The Bank of England's 29 Oct 2026 consultation says UK [[concepts/glossary#ccp|CCPs]] can already accept tokenised forms of eligible collateral (cash, bonds and other instruments, gold) under existing rules. Its draft expectations cover liquidity, valuation and interoperability, settlement finality, credit and concentration risk, operational resilience, and custody. Liquidity must be judged separately from the underlying asset, since trading hours and conversion can affect a forced sale. It also asks about wider collateral such as stablecoins and tokenised money market funds. Closes 12 Feb 2027 ([Bank of England CP](https://www.bankofengland.co.uk/paper/2026/cp/supervisory-expectations-for-ccps-seeking-to-accept-tokenised-collateral)).

## Liquidity and price risk
Coinbase Institutional's research team noted that tokenized-stock order books remain thin, with [[concepts/glossary#slippage|slippage]] and volatility significantly higher than in the underlying equity, especially post-market or under stress. It also flagged [[concepts/glossary#oracle|oracle]] errors or lags as a risk to token/collateral equivalence ([Coinbase Institutional](https://www.coinbase.com/institutional/research-insights/research/market-intelligence/major-trends-in-tokenization), 10 Jan 2026).

## What prices a stock token when the market is closed?

There is no single official off-hours price. Secondary-market prices are whatever buyers and sellers agree, including when the cash market is shut. Official oracles and issuer mint/redeem windows often follow the underlying market's sessions and can go stale, pause, or use a different method off-hours.

- **Oracle market-status flags.** For traditional-market assets, Chainlink Data Streams include a `marketStatus` flag in price reports and tell developers to treat that flag, not the report's timestamps, as the signal for whether the market is open. The flag "is provided for referential purposes only," and developers must assess market status themselves. On 24/5 US Equities streams the values (Eastern Time) are: 0 Unknown; 1 Pre-market (4:00am–9:30am Monday–Friday); 2 Regular hours (9:30am–4:00pm); 3 Post-market (4:00pm–8:00pm); 4 Overnight (8:00pm–4:00am Sunday evening–Friday morning); 5 Closed (weekends, holidays, or unexpected closures; about 8:00pm Friday–8:00pm Sunday). 24/7 US Equities streams keep updating while `marketStatus` is 5, switching to an off-hours price derived from perpetual futures markets ([Chainlink Data Streams](https://docs.chain.link/data-streams/rwa-streams/24-5-us-equities-user-guide), raw/265).
- **Staleness and pauses.** Chainlink also tells developers to implement staleness checks for when reports stop arriving. Coinbase tokenized-equity feeds on Base "run 24/5, hold the last close on weekends and holidays, and freeze during corporate actions." Off-hours, `updatedAt` stops advancing while the contract stays callable. The Base docs say: "Always read `updatedAt` and apply staleness bounds before relying on the price; never settle or liquidate against a frozen feed." A Coinbase onchain oracle registry can also pause a feed so it holds the last known value ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks), raw/264).
- **Issuer mint and redeem windows.** xStocks issuance and redemption by minters and redeemers "are limited to business days when the US market is open, normally 24/5," while tokens "can be traded on secondary markets 24/7" ([xStocks FAQ](https://docs.xstocks.fi/docs/frequently-asked-questions), raw/260). Ondo's platform is generally open 8:05pm ET Sunday through 7:59pm ET Friday, in Pre-Market, Core, Post-Market and Overnight sessions, with a separate Off-Hours session for a select set of assets on weekends and US market holidays. Off-Hours quotes use the same proprietary method, "bid-ask spreads can be wider," size is subject to conservative limits, and "the price of a token may diverge more significantly from the value the underlying security will have when its primary market next reopens" ([Ondo market hours](https://docs.ondo.finance/ondo-stocks/market-hours-and-trading-availability) and [pricing](https://docs.ondo.finance/ondo-stocks/token-and-quote-pricing), raw/263). Ondo's 27 Oct 2026 blog, already cited on the Robinhood issuer page, notes that a Stock Token mint/redeem window can close while onchain trading continues, which can open a price gap (raw/157).
- **Collateral liquidation when the underlying is closed.** Lending markets can still liquidate a position while the cash equity market is shut. Kamino's isolated Backpack Market was described, in a 4 Nov 2026 Business Wire release already on the Backpack page, as carrying liquidation risk even when the underlying market is closed (raw/197). The Base docs' warning not to settle or liquidate against a frozen feed is the vendor's guidance for integrators, not a statement that every protocol follows it (raw/264).
- **How much trading happens off-hours.** The IMF's October 2026 Global Financial Stability Report found that more than 50% of trading in a sample of tokenized equities occurred outside regular US market hours ([IMF GFSR Oct 2026, ch. 3](https://www.imf.org/-/media/files/publications/gfsr/2026/october/english/ch3.pdf), raw/164). That is context for why off-hours pricing matters, not a pricing method.

See also the off-hours oracle and collateral pattern on the [[build/trading-reference-architecture#off-hours-pricing-and-collateral|reference architecture]].

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
- <https://files.dtcc.com/download/assets/DAS-001/8a31d732d2d311f1a30ef632b7f70f6d>
- <https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/ESM-is-first-European-supranational-issuer-to-settle-DLT-based-bond-issuance-on-Eurosystem-s-Pontes-platform-with-Bundesbank-and-Clearstream-5660764>
- <https://www.rba.gov.au/payments-and-infrastructure/tokenised-money/the-role-of-rits-in-supporting-settlement-in-a-tokenised-ecosystem/pdf/the-role-of-rits-in-supporting-settlement-in-a-tokenised-ecosystem.pdf>
- <https://docs.chain.link/data-streams/rwa-streams/24-5-us-equities-user-guide>
- <https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks>
- <https://docs.xstocks.fi/docs/frequently-asked-questions>
- <https://docs.ondo.finance/ondo-stocks/market-hours-and-trading-availability>
- <https://docs.ondo.finance/ondo-stocks/token-and-quote-pricing>
- <https://www.imf.org/-/media/files/publications/gfsr/2026/october/english/ch3.pdf>
