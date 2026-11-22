---
title: Settlement & matching
tags:
- topics
last_checked: '2026-11-18'
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
- https://docs.ondo.finance/ondo-stocks/off-hours-trading
- https://www.dbs.com/newsroom/DBS_and_Kinexys_by_JP_Morgan_launch_industry_first_247_interoperability_solution_for_cross_border_tokenised_deposit_transfers
- https://x.com/solana/status/2122284580405236216
- https://learn.anchorage.com/09.30.26_ZLUSD-Stablecoin-Attestation-Report-signed.pdf
- https://www.anchorage.com/platform/zlusd-reserve-attestations
- https://www.zelle.com/press-releases/zelle-heads-to-india-unveils-zelleusdsm-stablecoin-other-markets
- https://www.broadridge.com/press-release/2026/broadridge-to-enable-institutional-trading-of-dtcc-tokenized-securities
- https://www.federalreserve.gov/newsevents/speech/waller20261117a.htm
- https://www.sifma.org/wp-content/uploads/2026/11/Digital-Cash-White-Paper-SIFMA-and-Deloitte.pdf
- https://www.mas.gov.sg/-/media/mas-media-library/development/fintech/project-simbolon/project-simbolon-insights-note.pdf
- https://www.mas.gov.sg/news/media-releases/2026/mas-and-deutsche-bundesbank-advance-cross-border-digital-asset-settlement-connectivity
description: How tokenized stock trades get matched and settled, and how that differs from today's next-day settlement.
---

*In plain English: How tokenized stock trades get matched and settled, and how that differs from today's next-day settlement.*

Tokenized stocks trade and settle in several ways (see [[overview|the overview]]).

## Where do tokenized stocks trade?
On centralized exchanges, onchain DEXs, permissioned Tokenized Securities Venues, ATSs and national exchanges, each with a different settlement model.
- **Centralized exchanges** list tokens: Kraken trades most xStocks 24/5, with 10 trading 24/7 on Kraken Pro; withdrawn tokens can trade 24/7 on DEXs ([Kraken FAQ](https://support.kraken.com/articles/xstocks-faq)).
- **Onchain DEXs**: [[concepts/glossary#wrapper|wrapped]] tokens trade permissionlessly in DeFi pools.
- **Tokenized Securities Venues** run permissioned [[concepts/glossary#amm-automated-market-maker|AMM]] pools under the [[concepts/innovation-exemption|Innovation Exemption]]. Conditions include symbol and volume caps, a 30-day issuer objection window, and trading halts in step with the primary market ([SEC order 34-106402](https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf)). See [[platforms-venues/okxice-tsv|OKXICE TSV]] and [[infrastructure/uniswap-permissioned-pools|Uniswap permissioned pools]].
- **[[concepts/glossary#ats|ATS]]**: Figure's blockchain stock settles on Provenance in YLDS ([Figure 424(b)(4)](https://www.sec.gov/Archives/edgar/data/2064124/000162828026008786/figure-blockchain424b4.htm)); see [[issuers/figure-open|Figure OPEN]].
- **National exchanges** trade tokenized and traditional shares on one order book with equal priority, settled through [[concepts/glossary#dtc|DTC]] ([[platforms-venues/nasdaq-tokenized-securities|Nasdaq]]; [SEC](https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf)).

## Post-trade
DTC's Tokenization Service went live on 28 Oct 2026 with 20 signed participants ([DTCC](https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live)). It converts book-entry positions into tokens and back, targeting 15 minutes or less ([DTCC tear sheet](https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html)). DTC's participant notice says conversion orders run Monday to Friday, 2 a.m.-6 p.m. ET, and tokens then move 24/7 between allowed listed [[concepts/glossary#wallet|wallets]] on supported networks ([DTC notice DAS-001](https://files.dtcc.com/download/assets/DAS-001/8a31d732d2d311f1a30ef632b7f70f6d)). On-chain netting and digital cash are on the 2027+ roadmap.

The first named trading and financing stack on top of DTC's tokens was announced on 17 Nov 2026: Talos quotes over its RFQ network, Marex finances as prime broker, and [[infrastructure/broadridge|Broadridge]]'s DLX orchestrates atomic onchain settlement while keeping books and records in sync. It starts with financing tokenized U.S. Treasuries outside market hours and has no stated go-live date ([Broadridge](https://www.broadridge.com/press-release/2026/broadridge-to-enable-institutional-trading-of-dtcc-tokenized-securities)).

In Europe, the ESM settled a €1bn DLT bond through the Eurosystem's Pontes platform on 26 Oct 2026, with the bond on Clearstream's D7 and the cash leg in central bank money in T2 ([Deutsche Börse release](https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/ESM-is-first-European-supranational-issuer-to-settle-DLT-based-bond-issuance-on-Eurosystem-s-Pontes-platform-with-Bundesbank-and-Clearstream-5660764)).

On 16 Nov 2026 DBS and Kinexys by J.P. Morgan launched a commercially ready interoperability solution for instant USD transfers between blockchain-based accounts in the United States and Singapore, including on weekends. This is the cash leg, not a tokenized security: it connects DBS Token Services with Kinexys's account-based permissioned [[concepts/glossary#tokenized-deposit|tokenized-deposit]] network (its Blockchain Deposit Account network). The DBS release says the solution "leverages Partior for settlement orchestration," and that the two banks "are founding shareholders of Partior, a global distributed ledger technology market infrastructure for clearing and settlement." Ant International is the inaugural client. The launch operationalises an interoperability framework the two banks announced in November 2025. Transfers on the Kinexys Blockchain Deposit Account network are described as 24/7/365 and same-day; moving funds between traditional demand-deposit accounts and Blockchain Deposit Accounts still has a three-hour downtime every Saturday from 3–6 p.m. ET, with an enhancement under development ([DBS release](https://www.dbs.com/newsroom/DBS_and_Kinexys_by_JP_Morgan_launch_industry_first_247_interoperability_solution_for_cross_border_tokenised_deposit_transfers)).

On 16 Nov 2026 Zelle demonstrated a confidential transfer of $1.25 million in ZelleUSD (ZLUSD) on stage at Solana Breakpoint, between demo banks labeled Bank Alpha and Bank Beta. The official @solana video of the demo is marked "Solana devnet" and describes "an encrypted transfer where the amount is hidden from the public chain." This is a [[concepts/glossary#stablecoin|stablecoin]] cash-leg example, not a tokenized deposit or a tokenized security. Anchorage Digital's ZLUSD attestation page states that "ZLUSD is a dollar-pegged stablecoin issued for Zelle® by Anchorage Digital Bank, N.A., redeemable 1:1 for U.S. Dollars and designed for payments, transfers, and conversions." Anchorage's 30 Sep 2026 ZLUSD Reserve Report records total ZLUSD redeemable tokens outstanding of 85,151 and states that "Blockchain Solana refers to the smart contract running on Solana at 7NNkMtGACBbwJdMRYD2KchTKm2xBwnsb4bT7YSfRUWZ4." Early Warning Services, the network operator of Zelle, unveiled ZelleUSD on 11 June 2026 to "support future international payment capabilities in other markets." In the same release it said India would be the first country where U.S. consumers can use Zelle to send money overseas, and that "Initial availability is expected before the end of this year." That release does not say the India corridor uses ZelleUSD, and no consumer or mainnet launch date has been given ([Zelle release](https://www.zelle.com/press-releases/zelle-heads-to-india-unveils-zelleusdsm-stablecoin-other-markets), [Anchorage ZLUSD attestations](https://www.anchorage.com/platform/zlusd-reserve-attestations), [30 Sep 2026 ZLUSD Reserve Report](https://learn.anchorage.com/09.30.26_ZLUSD-Stablecoin-Attestation-Report-signed.pdf), [@solana](https://x.com/solana/status/2122284580405236216)).

Atomic settlement is not the only model regulators expect. Fed Governor Christopher Waller said on 17 Nov 2026 that market participants "cautioned against viewing it as the only settlement model for tokenized markets," and that "net settlement and batch settlement, where only net amounts need to be funded, will remain useful when saving liquidity is a priority, as in high-volume capital market activity." He also said central bank money "need not be used in every transaction," but its presence at the foundation is essential, and that assets moving across networks "must maintain legal identity, ownership rights, economic terms, compliance obligations, corporate-action treatment, and access to liquidity" ([Federal Reserve](https://www.federalreserve.gov/newsevents/speech/waller20261117a.htm)).

On the cash leg, a 16 Nov 2026 SIFMA and Deloitte white paper built from discussions with 17 institutions says the question for payment stablecoins and tokenized deposits "is not which would 'win,'" but where each fits. It names atomic [[concepts/glossary#dvp|DvP]], intraday repo, collateral mobility, margining and corporate-action processing as near-term uses, and lists open needs: interoperability, standards, and regulatory treatment such as HQLA eligibility and accounting. Participants disagreed on whether a defined "settlement day" survives in a 24/7 market ([SIFMA and Deloitte](https://www.sifma.org/wp-content/uploads/2026/11/Digital-Cash-White-Paper-SIFMA-and-Deloitte.pdf)). This is an industry view, not regulation.

Cross-ledger atomic settlement without a shared ledger has been tested between central banks. In Project Simbolon (16 Nov 2026), the Monetary Authority of Singapore and the Deutsche Bundesbank, with DBS, Deutsche Bank and Partior, ran euro/Singapore-dollar payment-versus-payment across their two wholesale CBDC test ledgers. Tokens were locked in escrow on both ledgers; zero-knowledge proofs showed each lock was final; then "a single settlement decision was recorded and proven to each ledger," releasing both. The note says proof generation took most of the settlement time and that legal finality still depends on each central bank's rules. It is a proof of concept in test environments ([MAS insights note](https://www.mas.gov.sg/-/media/mas-media-library/development/fintech/project-simbolon/project-simbolon-insights-note.pdf); [MAS release](https://www.mas.gov.sg/news/media-releases/2026/mas-and-deutsche-bundesbank-advance-cross-border-digital-asset-settlement-connectivity)).

Central banks are weighing how to link token platforms to their payment systems. The Reserve Bank of Australia's Sep 2026 consultation lays out three [[concepts/glossary#dvp|DvP]] models: lock the asset, then pay in the central bank system (used by Australia's Austraclear and CHESS today); lock the central bank money, then move the asset (used in property settlement); or lock both through a synchronisation operator (as the Bank of England and Bundesbank have considered). It picks none ([RBA consultation paper](https://www.rba.gov.au/payments-and-infrastructure/tokenised-money/the-role-of-rits-in-supporting-settlement-in-a-tokenised-ecosystem/pdf/the-role-of-rits-in-supporting-settlement-in-a-tokenised-ecosystem.pdf)).

## Can tokenized assets be used as collateral at a clearing house?
The Bank of England's 29 Oct 2026 consultation says UK [[concepts/glossary#ccp|CCPs]] can already accept tokenised forms of eligible collateral (cash, bonds and other instruments, gold) under existing rules. Its draft expectations cover liquidity, valuation and interoperability, settlement finality, credit and concentration risk, operational resilience, and custody. Liquidity must be judged separately from the underlying asset, since trading hours and conversion can affect a forced sale. It also asks about wider collateral such as stablecoins and tokenised money market funds. Closes 12 Feb 2027 ([Bank of England CP](https://www.bankofengland.co.uk/paper/2026/cp/supervisory-expectations-for-ccps-seeking-to-accept-tokenised-collateral)).

## How liquid are tokenized stocks?
Coinbase Institutional's research team noted that tokenized-stock order books remain thin, with [[concepts/glossary#slippage|slippage]] and volatility significantly higher than in the underlying equity, especially post-market or under stress. It also flagged [[concepts/glossary#oracle|oracle]] errors or lags as a risk to token/collateral equivalence ([Coinbase Institutional](https://www.coinbase.com/institutional/research-insights/research/market-intelligence/major-trends-in-tokenization), 10 Jan 2026).

## What prices a stock token when the market is closed?

There is no single official off-hours price. Secondary-market prices are whatever buyers and sellers agree, including when the cash market is shut. Official oracles and issuer mint/redeem windows often follow the underlying market's sessions and can go stale, pause, or use a different method off-hours.

- **Oracle market-status flags.** For traditional-market assets, Chainlink Data Streams include a `marketStatus` flag in price reports and tell developers to treat that flag, not the report's timestamps, as the signal for whether the market is open. The flag "is provided for referential purposes only," and developers must assess market status themselves. On 24/5 US Equities streams the values (Eastern Time) are: 0 Unknown; 1 Pre-market (4:00am–9:30am Monday–Friday); 2 Regular hours (9:30am–4:00pm); 3 Post-market (4:00pm–8:00pm); 4 Overnight (8:00pm–4:00am Sunday evening–Friday morning); 5 Closed (weekends, holidays, or unexpected closures; about 8:00pm Friday–8:00pm Sunday). 24/7 US Equities streams keep updating while `marketStatus` is 5, switching to an off-hours price derived from perpetual futures markets ([Chainlink Data Streams](https://docs.chain.link/data-streams/rwa-streams/24-5-us-equities-user-guide)).
- **Staleness and pauses.** Chainlink also tells developers to implement staleness checks for when reports stop arriving. Coinbase tokenized-equity feeds on Base "run 24/5, hold the last close on weekends and holidays, and freeze during corporate actions." Off-hours, `updatedAt` stops advancing while the contract stays callable. The Base docs say: "Always read `updatedAt` and apply staleness bounds before relying on the price; never settle or liquidate against a frozen feed." A Coinbase onchain oracle registry can also pause a feed so it holds the last known value ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks)).
- **Issuer mint and redeem windows.** xStocks issuance and redemption by minters and redeemers "are limited to business days when the US market is open, normally 24/5," while tokens "can be traded on secondary markets 24/7" ([xStocks FAQ](https://docs.xstocks.fi/docs/frequently-asked-questions)). Ondo's platform is generally open 8:05pm ET Sunday through 7:59pm ET Friday, in Pre-Market, Core, Post-Market and Overnight sessions, with a separate Off-Hours session for weekends, holidays and early-close days on Ethereum, BNB Chain and Solana. As of a 16 Nov 2026 snapshot, 32 assets were enabled; buys and sells are still quoted, minted and redeemed instantly, each asset has its own dynamic Off-Hours limit, and quotes can be declined at the limit ([Ondo Off-Hours](https://docs.ondo.finance/ondo-stocks/off-hours-trading)). Off-Hours quotes use the same proprietary method, "bid-ask spreads can be wider," size is subject to conservative limits, and "the price of a token may diverge more significantly from the value the underlying security will have when its primary market next reopens" ([Ondo market hours](https://docs.ondo.finance/ondo-stocks/market-hours-and-trading-availability) and [pricing](https://docs.ondo.finance/ondo-stocks/token-and-quote-pricing)). Ondo's 27 Oct 2026 blog, already cited on the Robinhood issuer page, notes that a Stock Token mint/redeem window can close while onchain trading continues, which can open a price gap ([Ondo](https://ondo.finance/blog/ondo-stocks-live-on-robinhood-chain-and-uniswap)).
- **Collateral liquidation when the underlying is closed.** Lending markets can still liquidate a position while the cash equity market is shut. Kamino's isolated Backpack Market was described, in a 4 Nov 2026 Business Wire release already on the Backpack page, as carrying liquidation risk even when the underlying market is closed ([Business Wire](https://www.businesswire.com/news/home/20261104930970/en/Kamino-and-Backpack-Securities-Expand-Credit-for-Tokenized-U.S.-Equities)). The Base docs' warning not to settle or liquidate against a frozen feed is the vendor's guidance for integrators, not a statement that every protocol follows it ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks)).
- **How much trading happens off-hours.** The IMF's October 2026 Global Financial Stability Report found that more than 50% of trading in a sample of tokenized equities occurred outside regular US market hours ([IMF GFSR Oct 2026, ch. 3](https://www.imf.org/-/media/files/publications/gfsr/2026/october/english/ch3.pdf)). That is context for why off-hours pricing matters, not a pricing method.

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
- <https://docs.ondo.finance/ondo-stocks/off-hours-trading>
- <https://www.dbs.com/newsroom/DBS_and_Kinexys_by_JP_Morgan_launch_industry_first_247_interoperability_solution_for_cross_border_tokenised_deposit_transfers>
- <https://learn.anchorage.com/09.30.26_ZLUSD-Stablecoin-Attestation-Report-signed.pdf>
- <https://www.anchorage.com/platform/zlusd-reserve-attestations>
- <https://www.zelle.com/press-releases/zelle-heads-to-india-unveils-zelleusdsm-stablecoin-other-markets>
- <https://www.broadridge.com/press-release/2026/broadridge-to-enable-institutional-trading-of-dtcc-tokenized-securities>
- <https://www.federalreserve.gov/newsevents/speech/waller20261117a.htm>
- <https://www.sifma.org/wp-content/uploads/2026/11/Digital-Cash-White-Paper-SIFMA-and-Deloitte.pdf>
- <https://www.mas.gov.sg/-/media/mas-media-library/development/fintech/project-simbolon/project-simbolon-insights-note.pdf>
- <https://www.mas.gov.sg/news/media-releases/2026/mas-and-deutsche-bundesbank-advance-cross-border-digital-asset-settlement-connectivity>
