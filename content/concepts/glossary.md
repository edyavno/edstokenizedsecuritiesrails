---
title: Glossary
type: concept
description: Plain-English definitions of the jargon used on this wiki, from allowlist to wrapper.
tags:
- concepts
last_checked: '2026-10-28'
sources:
- https://www.federalregister.gov/documents/2026/10/05/2026-20301/self-regulatory-organizations-the-depository-trust-company-notice-of-filing-of-proposed-rule-change
- https://www.sec.gov/comments/SR-DTC-2026-012/srdtc2026012-1108719-3924407.pdf
- https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html
- https://www.bullish.com/us/news-insights/leading-market-infrastructure-firms-form-coalition-to-advance-issuer-sponsored-tokenized-securities
- https://app.rwa.xyz/treasuries
- https://blog.base.org/tokenized-stocks
- https://business.cch.com/srd/34-106402091726.pdf
- https://communications.dtcc.com/rs/669-QIL-921/images/DTCC%20Tokenization%20Service%20At-a-Glance.pdf
- https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks
- https://docs.chain.link/data-feeds/tokenized-equity-feeds
- https://docs.ondo.finance/ondo-stocks/legal-and-regulatory
- https://docs.ondo.finance/ondo-stocks/overview
- https://docs.robinhood.com/chain/building-with-stock-tokens/
- https://docs.xstocks.fi/developers/multipliers
- https://eips.ethereum.org/EIPS/eip-3643
- https://github.com/SecurityTokenStandard/EIP-Spec/blob/master/eip/eip-1400.md
- https://investors.figure.com/news-releases/news-release-details/figure-announces-chain-public-equity-network-open-running
- https://ir.wisdomtree.com/news-events/press-releases/detail/777/wisdomtree-to-launch-247-trading-and-instant-settlement
- https://robinhood.com/eu/en/support/articles/stock-tokens-faq/
- https://solana.com/docs/tokens/extensions
- https://solana.com/docs/tokens/extensions/transfer-hook
- https://www.adgm.com/globalassets/market-disclosure/content/prospectus/btech-holdings-prospectus----11-june---nvidia-bstocks_06_11_2026_16-44-54.pdf
- https://www.bankofengland.co.uk/financial-stability/digital-securities-sandbox
- https://www.bis.org/cpmi/publ/d225.htm
- https://www.bis.org/publ/arpdf/ar2025e3.htm
- https://www.broadridge.com/press-release/2025/broadridge-distributed-ledger-repo-platform-november
- https://www.coinbase.com/tokenize
- https://www.esma.europa.eu/sites/default/files/2025-06/ESMA75-117376770-460_Report_on_the_functioning_and_review_of_the_DLTR_-_Art.14.pdf
- https://www.finma.ch/en/authorisation/fintech/dlt-handelssystem/
- https://www.fsb.org/uploads/P221024-2.pdf
- https://www.iosco.org/library/pubdocs/pdf/IOSCOPD809.pdf
- https://www.prnewswire.com/news-releases/backeds-xstocks-go-live-today-on-bybit-kraken-and-solana-defi-302494374.html
- https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf
- https://www.sec.gov/files/tm/no-action/dtc-nal-121125.pdf
- https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
- https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers
- https://www.weforum.org/publications/asset-tokenization-in-financial-markets-the-next-generation-of-value-exchange/
- https://developers.uniswap.org/docs/protocols/v4-hooks/permissioned-pools/architecture
- https://docs.erc3643.org/erc-3643/smart-contracts-library/onchain-identities/identity-registry
- https://www.okx.com/cdn/assets/files/2610/798CC1267CB56FB2.pdf
- https://www.tokenizedstockvenue.com/notice.html
- https://llmstxt.org/
- https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf
- https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html
---

*In plain English: short definitions of the terms this wiki uses, A to Z. Each one links to a source and to the pages that go deeper.*

New to all of this? Start with the [[overview|overview]], then come back here when a word trips you up. Reference information only, not investment advice.

Jump to: [A](#a) · [B](#b) · [C](#c) · [D](#d) · [E](#e) · [F](#f) · [H](#h) · [I](#i) · [K](#k) · [L](#l) · [M](#m) · [N](#n) · [O](#o) · [P](#p) · [R](#r) · [S](#s) · [T](#t) · [U](#u) · [W](#w)

## A

### Admin keys
Keys that control privileged token functions, such as pausing, freezing a wallet, forcing a transfer or upgrading the contract. Who holds them, and how they are protected, is a core custody and governance question. ([EIP-3643](https://eips.ethereum.org/EIPS/eip-3643))

*Related:* [[standards/erc-3643|ERC-3643 (T-REX)]] · [[build/trading-reference-architecture|Reference architecture for trading]]

### Allowlist
A list of approved wallet addresses. A permissioned token only moves to wallets on the list, which is how identity checks are enforced onchain. ([EIP-3643](https://eips.ethereum.org/EIPS/eip-3643))

*Related:* [[standards/erc-3643|ERC-3643 (T-REX)]] · [[topics/who-can-buy|Who can buy]]

### AMM (automated market maker)
An onchain pool, also called a liquidity pool: a smart contract that holds two assets and sets prices by a formula, so traders swap against the pool instead of being matched with a buyer or seller. ([BIS CPMI](https://www.bis.org/cpmi/publ/d225.htm))

*Related:* [[infrastructure/uniswap-permissioned-pools|Uniswap v4 permissioned pools]] · [[concepts/innovation-exemption|Innovation Exemption and the onchain-venue (TSV) model]] · [[platforms-venues/okxice-tsv|OKXICE TSV]]

### Atomic settlement
Both sides of a trade settle in one indivisible step: either everything moves or nothing does. Atomic DvP is the common case. ([BIS](https://www.bis.org/publ/arpdf/ar2025e3.htm))

*Related:* [[topics/settlement-and-matching|Settlement & matching]]

### ATS
An alternative trading system: an SEC-regulated venue run by a broker-dealer that matches orders but is not a full stock exchange. ([Figure](https://investors.figure.com/news-releases/news-release-details/figure-announces-chain-public-equity-network-open-running))

*Related:* [[issuers/figure-open|Figure OPEN]]

### Authorized Participant
A large firm, usually a market maker, allowed to create (mint) and redeem tokens directly with the issuer. Ordinary holders buy and sell on the market instead. ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks))

*Related:* [[standards/b20|Coinbase B20]] · [[issuers/coinbase-tokenized-stocks|Coinbase Tokenized Stocks]]

## B

### B20
The token standard on Base that Coinbase's tokenized stocks use. ([Base](https://blog.base.org/tokenized-stocks))

*Related:* [[standards/b20|Coinbase B20]]

### Bankruptcy-remote
Set up so that if the parent company fails, its creditors cannot reach the assets held for token holders. ([Coinbase](https://www.coinbase.com/tokenize))

*Related:* [[topics/custody|Custody]]

### Base
A layer 2 blockchain built on Ethereum and run by Coinbase. ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks))

*Related:* [[standards/b20|Coinbase B20]] · [[issuers/coinbase-tokenized-stocks|Coinbase Tokenized Stocks]]

### Broker-dealer
A firm registered with the SEC to buy and sell securities for customers (broker) or for itself (dealer). Most people buy stocks through one. ([Ondo docs](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory))

*Related:* [[topics/custody|Custody]]

## C

### Canton
A permissioned blockchain network built for financial institutions, with privacy between parties. TSV LLC plans to run its tokenized stock venue on Canton ([TSV LLC](https://www.tokenizedstockvenue.com/notice.html)), and DTCC's Tokenization Service runs on it, with CIP-56 as the token standard ([DTCC tear sheet](https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html)).

*Related:* [[concepts/innovation-exemption|Innovation Exemption]]

### CIP-56
The token standard DTCC's Tokenization Service uses on the Canton Network (it uses ERC-20 on its private Besu network). ([DTCC tear sheet](https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html))

*Related:* [[infrastructure/dtcc-tokenization-pilot|DTCC Tokenization Service]]

### CCP
A central counterparty, or clearinghouse. It steps between buyer and seller so each side faces it instead of each other, and nets trades to reduce how much cash and stock must move. ([FSB 2024](https://www.fsb.org/uploads/P221024-2.pdf))

*Related:* [[topics/settlement-and-matching|Settlement & matching]]

### Cede & Co.
DTC's nominee. For most US shares held through brokers, it is the holder on the company's register. ([Securitize letter](https://www.sec.gov/comments/SR-DTC-2026-012/srdtc2026012-1108719-3924407.pdf))

*Related:* [[infrastructure/dtcc-tokenization-pilot|DTCC / DTC tokenization pilot]] · [[concepts/glossary#street-name|Street name]]

### Compliance hook
Code that runs on every token transfer or swap and can block it if a rule fails, such as an unverified receiver. Examples: the ERC-3643 compliance contract, Solana transfer hooks and Uniswap v4 permissioned-pool hooks. ([EIP-3643](https://eips.ethereum.org/EIPS/eip-3643); [Uniswap](https://developers.uniswap.org/docs/protocols/v4-hooks/permissioned-pools/architecture))

*Related:* [[build/trading-reference-architecture|Reference architecture for trading]] · [[standards/erc-3643|ERC-3643]]

### Composability
Tokens on the same chain can plug into other apps, for example being posted as loan collateral, without special integration work. ([WEF 2025](https://www.weforum.org/publications/asset-tokenization-in-financial-markets-the-next-generation-of-value-exchange/))

*Related:* [[overview|Tokenized securities: how it fits together]]

### Corporate action
An event the issuer causes that changes what a shareholder holds or gets: dividends, splits, mergers, votes. Wrapped stock tokens often handle them with a multiplier. ([xStocks](https://docs.xstocks.fi/developers/multipliers))

*Related:* [[build/trading-reference-architecture|Reference architecture for trading]]

### CSD
A central securities depository: the institution that holds securities centrally and records who owns them at the top level. In the US that is DTC. ([FSB 2024](https://www.fsb.org/uploads/P221024-2.pdf))

*Related:* [[infrastructure/dtcc-tokenization-pilot|DTCC / DTC tokenization pilot]]

### CUSIP
The 9-character ID code for a US security, like a serial number for a stock or bond. DTC-tokenized securities keep the same CUSIP as the book-entry security. ([SEC Nasdaq approval](https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf); [DTCC tear sheet](https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html))

*Related:* [[concepts/post-trade-reg-nms-model|Post-trade / Reg NMS-inside model]]

### Custodial wrapper
A token backed one-for-one by a real share held at a custodian. You own a claim on that share, not the share itself. ([SEC staff statement](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities))

*Related:* [[concepts/legal-taxonomy|Legal taxonomy of tokenized securities]] · [[topics/legal-structures|Legal structures]]

### Custodian
A regulated firm that holds assets for someone else. For wrapped tokens, the custodian holds the real shares behind the tokens. ([IOSCO](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD809.pdf))

*Related:* [[topics/custody|Custody]]

## D

### Digital Securities Sandbox
A UK Bank of England and FCA sandbox, running until January 2029, where firms can issue, trade and settle securities, native or tokenised, on new technology. ([Bank of England](https://www.bankofengland.co.uk/financial-stability/digital-securities-sandbox))

*Related:* [[topics/rules-by-jurisdiction|Rules by jurisdiction]]

### Direct Registration System (DRS)
DTC's system for moving shares between its nominee [[concepts/glossary#cede-co|Cede & Co.]] and the holder's own name on the issuer's books, kept by the [[concepts/glossary#transfer-agent|transfer agent]]. DTC has proposed cutting its processing "from days to minutes". ([SEC notice](https://www.federalregister.gov/documents/2026/10/05/2026-20301/self-regulatory-organizations-the-depository-trust-company-notice-of-filing-of-proposed-rule-change))

*Related:* [[infrastructure/dtcc-tokenization-pilot|DTCC / DTC tokenization pilot]] · [[issuers/securitize|Securitize]]

### DLT
Distributed ledger technology: a shared database copied across many computers. Blockchains are one type. ([IOSCO](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD809.pdf))

*Related:* [[overview|Tokenized securities: how it fits together]]

### DLT Pilot Regime
An EU framework that lets approved market infrastructures trade and settle tokenized securities on DLT with some rules relaxed. ([ESMA](https://www.esma.europa.eu/sites/default/files/2025-06/ESMA75-117376770-460_Report_on_the_functioning_and_review_of_the_DLTR_-_Art.14.pdf))

*Related:* [[topics/rules-by-jurisdiction|Rules by jurisdiction]] · [[concepts/international|International regimes]]

### DTC
The Depository Trust Company, the US central securities depository. It runs a tokenization pilot under an SEC no-action letter. ([SEC Nasdaq approval](https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf))

*Related:* [[infrastructure/dtcc-tokenization-pilot|DTCC / DTC tokenization pilot]]

### DTCC
The Depository Trust & Clearing Corporation, parent of DTC. It provides clearing and settlement for most US stock trades. ([DTCC](https://communications.dtcc.com/rs/669-QIL-921/images/DTCC%20Tokenization%20Service%20At-a-Glance.pdf))

*Related:* [[infrastructure/dtcc-tokenization-pilot|DTCC / DTC tokenization pilot]]

### DWAC
Deposit/Withdrawal at Custodian: a DTC process for moving shares in and out of DTC through the transfer agent. Securitize asked DTC to modernize it alongside DRS. ([Securitize letter](https://www.sec.gov/comments/SR-DTC-2026-012/srdtc2026012-1108719-3924407.pdf))

*Related:* [[concepts/glossary#direct-registration-system-drs|Direct Registration System (DRS)]]

### DvP
Delivery versus payment: the security is delivered only if the payment is made. Onchain, both legs can move in one transaction (atomic DvP). ([BIS](https://www.bis.org/publ/arpdf/ar2025e3.htm))

*Related:* [[topics/settlement-and-matching|Settlement & matching]]

## E

### Entitlement token
A token that is a [[concepts/glossary#security-entitlement|security entitlement]] to a share held by a broker or custodian, backed 1:1. Securitize's version is a convertible entitlement token (CET): when the company adopts issuer-sponsored tokenization, holders can convert it into a share recorded on the company's register. ([Securitize](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html))

*Related:* [[issuers/securitize|Securitize]] · [[concepts/issuer-sponsored-token-coalition|Issuer Sponsored Token Coalition]]

### ERC-1400
A draft Ethereum standard suite for security tokens, with transfer checks, documents and forced transfers. ([Spec](https://github.com/SecurityTokenStandard/EIP-Spec/blob/master/eip/eip-1400.md))

*Related:* [[standards/erc-1400|ERC-1400 / ERC-1410]]

### ERC-20
The basic Ethereum token standard. Most tokens, including many stock tokens, follow it or extend it. ([Ondo docs](https://docs.ondo.finance/ondo-stocks/overview))

*Related:* [[concepts/token-primitives|Token primitives]]

### ERC-3643
An Ethereum standard for permissioned tokens: a transfer only goes through if both wallets pass identity and compliance checks. ([EIP-3643](https://eips.ethereum.org/EIPS/eip-3643))

*Related:* [[standards/erc-3643|ERC-3643 (T-REX)]]

### ETF
An exchange-traded fund: a fund whose shares trade on an exchange like a stock. ([PR Newswire](https://www.prnewswire.com/news-releases/backeds-xstocks-go-live-today-on-bybit-kraken-and-solana-defi-302494374.html))

*Related:* [[issuers/xstocks-backed|xStocks (Backed)]]

### Ethereum
A public blockchain that runs smart contracts. Many token standards (ERC-20, ERC-3643) were written for it. ([EIP-3643](https://eips.ethereum.org/EIPS/eip-3643))

*Related:* [[concepts/token-primitives|Token primitives]]

### Exemptive relief
Permission from the SEC to do something an existing rule would otherwise forbid, usually with conditions. ([WisdomTree](https://ir.wisdomtree.com/news-events/press-releases/detail/777/wisdomtree-to-launch-247-trading-and-instant-settlement))

*Related:* [[issuers/wisdomtree|WisdomTree tokenized funds]] · [[topics/regulation|Regulation]]

## F

### FINMA
Switzerland's financial market regulator. It licenses DLT trading facilities under the DLT Act in force since 1 August 2021. ([FINMA](https://www.finma.ch/en/authorisation/fintech/dlt-handelssystem/))

*Related:* [[topics/rules-by-jurisdiction|Rules by jurisdiction]]

### FSRA (ADGM)
The Financial Services Regulatory Authority of Abu Dhabi Global Market, a financial free zone in the UAE. bStocks are admitted to its Official List. ([ADGM prospectus](https://www.adgm.com/globalassets/market-disclosure/content/prospectus/btech-holdings-prospectus----11-june---nvidia-bstocks_06_11_2026_16-44-54.pdf))

*Related:* [[issuers/bstocks|bStocks]] · [[topics/rules-by-jurisdiction|Rules by jurisdiction]]

## H

### Halt
A pause in trading a stock, ordered by the primary exchange or a regulator. TSVs must stop trading a token while its stock is halted. ([SEC order](https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf))

*Related:* [[concepts/innovation-exemption|Innovation Exemption]] · [[build/trading-reference-architecture|Reference architecture for trading]]

### Hybrid matching
Trades are matched off chain (for example on an order book) and then settled on chain, instead of being priced and settled by an onchain pool in one step.

*Related:* [[build/trading-reference-architecture|Reference architecture for trading]]

## I

### Identity registry
The ERC-3643 contract that records which wallets belong to verified investors; a transfer only succeeds if the receiver is verified. ([ERC-3643 docs](https://docs.erc3643.org/erc-3643/smart-contracts-library/onchain-identities/identity-registry))

*Related:* [[standards/erc-3643|ERC-3643]]

### Innovation Exemption
A temporary, conditional SEC order from 17 Sep 2026 that lets approved onchain venues (TSVs) trade tokenized US stocks. ([SEC order](https://business.cch.com/srd/34-106402091726.pdf))

*Related:* [[concepts/innovation-exemption|Innovation Exemption and the onchain-venue (TSV) model]]

### Issuer-sponsored token
A tokenized share that the issuing company itself sponsors, tied directly to its official shareholder register so holders keep ownership rights, votes and corporate-action entitlements. ([Bullish](https://www.bullish.com/us/news-insights/leading-market-infrastructure-firms-form-coalition-to-advance-issuer-sponsored-tokenized-securities))

*Related:* [[concepts/issuer-sponsored-token-coalition|Issuer Sponsored Token Coalition]] · [[topics/legal-structures|Legal structures]]

## K

### KYC
Know your customer: identity checks a firm must run before letting you open an account or hold certain assets. ([FSB 2024](https://www.fsb.org/uploads/P221024-2.pdf))

*Related:* [[topics/who-can-buy|Who can buy]]

## L

### Layer 2
A blockchain that runs on top of another (usually Ethereum) to make transactions cheaper and faster. Base is one. Also written L2. ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks))

*Related:* [[standards/b20|Coinbase B20]]

### llms.txt
A plain-text index of a website written for AI models: one line per page with a short summary. This wiki publishes one at [/llms.txt](/llms.txt). ([llmstxt.org](https://llmstxt.org/))

*Related:* [[build/index|Build with this wiki]]

## M

### MiCA
The EU's Markets in Crypto-Assets Regulation. It covers crypto-assets that are not financial instruments, so tokenized shares usually fall under MiFID II instead.

*Related:* [[concepts/international|International regimes]] · [[topics/rules-by-jurisdiction|Rules by jurisdiction]]

### MiFID II
The EU's main law for investment firms and trading venues. Tokenized shares and derivatives such as Robinhood's EU stock tokens are covered by it. ([Robinhood EU FAQ](https://robinhood.com/eu/en/support/articles/stock-tokens-faq/))

*Related:* [[issuers/robinhood-stock-tokens|Robinhood Stock Tokens]] · [[topics/rules-by-jurisdiction|Rules by jurisdiction]]

### Mint
To create new tokens. For backed stock tokens, tokens are minted when the matching shares are bought and put in custody. ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks))

*Related:* [[standards/b20|Coinbase B20]]

### Money market fund
A fund that invests in very short-term, low-risk debt such as Treasury bills. Many of the largest tokenized products are money market funds. ([IOSCO](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD809.pdf))

*Related:* [[issuers/wisdomtree|WisdomTree tokenized funds]] · [[comparisons/buidl-precedent|BUIDL (adjacent fund precedent)]]

### Multiplier
A number that converts one token into shares of the underlying stock. It changes after splits or reinvested dividends so token balances stay the same while each token is worth more or fewer shares. Also called rebasing. ([xStocks docs](https://docs.xstocks.fi/developers/multipliers))

*Related:* [[topics/corporate-actions-and-dividends|Corporate actions & dividends]]

## N

### Native token
A token that is the security itself: the token balance is the official register of who owns it. ([SEC staff statement](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities))

*Related:* [[concepts/legal-taxonomy|Legal taxonomy of tokenized securities]] · [[overview|Tokenized securities: how it fits together]]

### Netting
Adding up all of a firm's trades and settling only the difference. It cuts how much cash and stock must move, but needs a central party and time. ([FSB 2024](https://www.fsb.org/uploads/P221024-2.pdf))

*Related:* [[topics/settlement-and-matching|Settlement & matching]]

### NMS stock
A stock listed on a US national exchange and covered by Reg NMS, the rules that tie US stock markets together. ([SEC Nasdaq approval](https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf))

*Related:* [[concepts/post-trade-reg-nms-model|Post-trade / Reg NMS-inside model]]

### No-action letter
A letter from SEC staff saying they will not recommend enforcement if a firm does a specific thing under stated conditions. It is not a rule change. ([SEC DTC no-action letter](https://www.sec.gov/files/tm/no-action/dtc-nal-121125.pdf))

*Related:* [[infrastructure/dtcc-tokenization-pilot|DTCC / DTC tokenization pilot]] · [[topics/regulation|Regulation]]

## O

### Onchain / offchain
Onchain means recorded and executed on the blockchain itself; offchain means handled in an ordinary system, such as a firm's database or matching engine, and possibly settled onchain later. ([BIS](https://www.bis.org/publ/arpdf/ar2025e3.htm))

*Related:* [[build/trading-reference-architecture|Reference architecture for trading]]

### Oracle
A service that feeds outside data into a blockchain so smart contracts can use it. For tokenized stocks that means a reference price plus market status (open, closed or halted), so a venue can stop trading when the primary market stops. ([Chainlink](https://docs.chain.link/data-feeds/tokenized-equity-feeds))

*Related:* [[infrastructure/chainlink-equity-feeds|Chainlink tokenized equity feeds]] · [[build/trading-reference-architecture|Reference architecture for trading]]

## P

### Permissioned network
A blockchain where only approved operators run nodes and only approved parties join, unlike a public chain. Examples: Canton, and the Besu-based network DTCC uses for its Tokenization Service. ([DTCC](https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html))

*Related:* [[build/trading-reference-architecture|Reference architecture for trading]]

### Permissioned pool
An AMM pool that only allowlisted wallets can trade in; a hook checks eligibility on every swap. It is the model the SEC's Innovation Exemption covers for TSVs. ([Uniswap](https://developers.uniswap.org/docs/protocols/v4-hooks/permissioned-pools/architecture))

*Related:* [[concepts/innovation-exemption|Innovation Exemption]] · [[build/trading-reference-architecture|Reference architecture for trading]]

### Prefunding
Putting the full cash and the full securities in place before a trade, because atomic settlement leaves no time to borrow or net. It costs liquidity. ([FSB 2024](https://www.fsb.org/uploads/P221024-2.pdf))

*Related:* [[topics/settlement-and-matching|Settlement & matching]]

## R

### Reconciliation
Regularly checking that two records agree, for example that tokens in circulation match the real shares held, or that the share register matches the chain. ([SEC staff statement](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities))

*Related:* [[build/trading-reference-architecture|Reference architecture for trading]]

### Redeem
To hand tokens back to the issuer in exchange for the underlying asset or its cash value. Usually limited to eligible holders or Authorized Participants. ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks))

*Related:* [[topics/legal-structures|Legal structures]]

### Reg NMS
Regulation National Market System: SEC rules that link US stock exchanges, including best-price and order-protection rules. ([SEC Nasdaq approval](https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf))

*Related:* [[concepts/post-trade-reg-nms-model|Post-trade / Reg NMS-inside model]]

### Registrar
The firm or system that keeps the official list of who owns a security. In the US this is usually the transfer agent.

*Related:* [[topics/legal-structures|Legal structures]] · [[concepts/legal-taxonomy|Legal taxonomy of tokenized securities]]

### Repo
A repurchase agreement: a short-term loan where one side sells bonds and agrees to buy them back later at a slightly higher price. ([Broadridge](https://www.broadridge.com/press-release/2025/broadridge-distributed-ledger-repo-platform-november))

*Related:* [[overview|Tokenized securities: how it fits together]]

### RFQ
Request for quote: you ask one or more dealers for a price and trade at the quote you accept, instead of using a public order book. ([Robinhood](https://docs.robinhood.com/chain/building-with-stock-tokens/))

*Related:* [[topics/settlement-and-matching|Settlement & matching]]

### Rule 15c3-3
The SEC customer protection rule. It requires broker-dealers to keep customers' securities in their possession or control and separate from the firm's own. ([SEC staff statement](https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers))

*Related:* [[topics/custody|Custody]]

### RWA
Real-world asset: a traditional asset such as a bond, fund or stock represented as a token. ([rwa.xyz](https://app.rwa.xyz/treasuries))

*Related:* [[overview|Tokenized securities: how it fits together]]

## S

### Security entitlement
The legal right, under UCC Article 8, of someone who holds a security through a broker or custodian rather than directly on the company's register. Securitize Stocks are security entitlements backed 1:1 by shares. ([Securitize](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html))

*Related:* [[issuers/securitize|Securitize]] · [[topics/legal-structures|Legal structures]]

### Settlement finality
The point at which a transfer can no longer be reversed and ownership has legally changed. ([BIS](https://www.bis.org/publ/arpdf/ar2025e3.htm))

*Related:* [[topics/settlement-and-matching|Settlement & matching]]

### Slippage
The gap between the price you expect and the price you actually get, which grows when an order book is thin. Coinbase research flags it as higher for tokenized stocks than for the underlying shares, especially outside market hours. ([Coinbase Institutional](https://www.coinbase.com/institutional/research-insights/research/market-intelligence/major-trends-in-tokenization))

*Related:* [[topics/settlement-and-matching|Settlement and matching]] · [[issuers/coinbase-tokenized-stocks|Coinbase Tokenized Stocks]]

### Smart contract
A program stored on a blockchain that runs automatically when its conditions are met, for example a swap that only completes if both sides pay. ([IOSCO](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD809.pdf))

*Related:* [[concepts/token-primitives|Token primitives]]

### Solana
A public blockchain known for fast, low-cost transactions. Its Token-2022 program supports compliance features. ([Solana](https://solana.com/docs/tokens/extensions))

*Related:* [[standards/solana-token-2022|Solana Token-2022 extensions]]

### Soulbound token
A non-transferable token tied to one wallet, used as an access credential. OKXICE's venue notice uses soulbound tokens to control who can trade. ([OKXICE notice](https://www.okx.com/cdn/assets/files/2610/798CC1267CB56FB2.pdf))

*Related:* [[platforms-venues/okxice-tsv|OKXICE TSV]]

### SPV
A special purpose vehicle: a company set up only to hold certain assets or issue certain securities, kept separate from its parent. ([Ondo docs](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory))

*Related:* [[topics/legal-structures|Legal structures]] · [[issuers/ondo-global-markets|Ondo Global Markets (Ondo Stocks)]]

### Stablecoin
A token designed to keep a steady value, usually one US dollar, backed by cash and short-term government debt. ([WEF 2025](https://www.weforum.org/publications/asset-tokenization-in-financial-markets-the-next-generation-of-value-exchange/))

*Related:* [[topics/settlement-and-matching|Settlement & matching]]

### Street name
Holding shares through a broker, with DTC's nominee [[concepts/glossary#cede-co|Cede & Co.]] as the holder on the company's register instead of the investor. ([Securitize letter](https://www.sec.gov/comments/SR-DTC-2026-012/srdtc2026012-1108719-3924407.pdf))

*Related:* [[concepts/glossary#direct-registration-system-drs|Direct Registration System (DRS)]] · [[topics/legal-structures|Legal structures]]

### Synthetic wrapper
A token that is a separate security, such as a note or swap, that tracks a stock's price. It may not be backed one-for-one by real shares. ([SEC staff statement](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities))

*Related:* [[concepts/legal-taxonomy|Legal taxonomy of tokenized securities]] · [[topics/legal-structures|Legal structures]]

## T

### T+1
Trade date plus one business day: the current US settlement cycle for most stock trades. ([FSB 2024](https://www.fsb.org/uploads/P221024-2.pdf))

*Related:* [[topics/settlement-and-matching|Settlement & matching]]

### Token-2022
Solana's newer token program, with add-ons such as transfer hooks and frozen-by-default accounts that support permissioned tokens. ([Solana](https://solana.com/docs/tokens/extensions))

*Related:* [[standards/solana-token-2022|Solana Token-2022 extensions]]

### Tokenized deposit
A bank deposit represented as a token. It is a claim on a regulated bank, unlike a stablecoin. ([WEF 2025](https://www.weforum.org/publications/asset-tokenization-in-financial-markets-the-next-generation-of-value-exchange/))

*Related:* [[topics/settlement-and-matching|Settlement & matching]]

### Transfer agent
The firm a company appoints to keep its official register of shareholders and record transfers. ([IOSCO](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD809.pdf))

*Related:* [[topics/custody|Custody]] · [[issuers/superstate-opening-bell|Superstate Opening Bell]] · [[infrastructure/vertalo|Vertalo]]

### Transfer hook
Code that runs automatically on every token transfer, for example to check the receiving wallet is allowed. ([Solana](https://solana.com/docs/tokens/extensions/transfer-hook))

*Related:* [[standards/solana-token-2022|Solana Token-2022 extensions]]

### TSV
Tokenized Securities Venue: an onchain venue approved under the SEC's Innovation Exemption to trade tokenized US stocks. ([SEC order](https://business.cch.com/srd/34-106402091726.pdf))

*Related:* [[concepts/innovation-exemption|Innovation Exemption and the onchain-venue (TSV) model]] · [[platforms-venues/okxice-tsv|OKXICE TSV]]

## U

### Unified ledger
A BIS proposal for one programmable platform holding tokenised central bank reserves, commercial bank money and government bonds, so payments and securities settle together. ([BIS](https://www.bis.org/publ/arpdf/ar2025e3.htm))

*Related:* [[build/trading-reference-architecture|Reference architecture for trading]]

### Uniswap v4 hooks
Add-on code that a Uniswap v4 pool calls before or after swaps; used to build permissioned pools that check an allowlist. ([Uniswap](https://developers.uniswap.org/docs/protocols/v4-hooks/permissioned-pools/architecture))

*Related:* [[concepts/innovation-exemption|Innovation Exemption]] · [[build/trading-reference-architecture|Reference architecture for trading]]

## W

### Wallet
Software or hardware that holds the keys controlling tokens. A custodial wallet is run by a firm; a self-custody wallet is run by you.

*Related:* [[topics/custody|Custody]]

### Wholesale CBDC
Central bank money in token form, used only between banks and financial firms for settlement, not by the public. ([BIS](https://www.bis.org/publ/arpdf/ar2025e3.htm))

*Related:* [[concepts/international|International regimes]]

### Wrapper
A token that represents a share held by someone else, rather than being the share itself. See custodial wrapper and synthetic wrapper. ([SEC staff statement](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities))

*Related:* [[concepts/legal-taxonomy|Legal taxonomy of tokenized securities]] · [[overview|Tokenized securities: how it fits together]]

## Sources
Public originals for the facts on this page.

- <https://www.federalregister.gov/documents/2026/10/05/2026-20301/self-regulatory-organizations-the-depository-trust-company-notice-of-filing-of-proposed-rule-change>
- <https://www.sec.gov/comments/SR-DTC-2026-012/srdtc2026012-1108719-3924407.pdf>
- <https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html>
- <https://www.bullish.com/us/news-insights/leading-market-infrastructure-firms-form-coalition-to-advance-issuer-sponsored-tokenized-securities>
- <https://app.rwa.xyz/treasuries>
- <https://blog.base.org/tokenized-stocks>
- <https://business.cch.com/srd/34-106402091726.pdf>
- <https://communications.dtcc.com/rs/669-QIL-921/images/DTCC%20Tokenization%20Service%20At-a-Glance.pdf>
- <https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks>
- <https://docs.chain.link/data-feeds/tokenized-equity-feeds>
- <https://docs.ondo.finance/ondo-stocks/legal-and-regulatory>
- <https://docs.ondo.finance/ondo-stocks/overview>
- <https://docs.robinhood.com/chain/building-with-stock-tokens/>
- <https://docs.xstocks.fi/developers/multipliers>
- <https://eips.ethereum.org/EIPS/eip-3643>
- <https://github.com/SecurityTokenStandard/EIP-Spec/blob/master/eip/eip-1400.md>
- <https://investors.figure.com/news-releases/news-release-details/figure-announces-chain-public-equity-network-open-running>
- <https://ir.wisdomtree.com/news-events/press-releases/detail/777/wisdomtree-to-launch-247-trading-and-instant-settlement>
- <https://robinhood.com/eu/en/support/articles/stock-tokens-faq/>
- <https://solana.com/docs/tokens/extensions>
- <https://solana.com/docs/tokens/extensions/transfer-hook>
- <https://www.adgm.com/globalassets/market-disclosure/content/prospectus/btech-holdings-prospectus----11-june---nvidia-bstocks_06_11_2026_16-44-54.pdf>
- <https://www.bankofengland.co.uk/financial-stability/digital-securities-sandbox>
- <https://www.bis.org/cpmi/publ/d225.htm>
- <https://www.bis.org/publ/arpdf/ar2025e3.htm>
- <https://www.broadridge.com/press-release/2025/broadridge-distributed-ledger-repo-platform-november>
- <https://www.coinbase.com/tokenize>
- <https://www.esma.europa.eu/sites/default/files/2025-06/ESMA75-117376770-460_Report_on_the_functioning_and_review_of_the_DLTR_-_Art.14.pdf>
- <https://www.finma.ch/en/authorisation/fintech/dlt-handelssystem/>
- <https://www.fsb.org/uploads/P221024-2.pdf>
- <https://www.iosco.org/library/pubdocs/pdf/IOSCOPD809.pdf>
- <https://www.prnewswire.com/news-releases/backeds-xstocks-go-live-today-on-bybit-kraken-and-solana-defi-302494374.html>
- <https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf>
- <https://www.sec.gov/files/tm/no-action/dtc-nal-121125.pdf>
- <https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities>
- <https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers>
- <https://www.weforum.org/publications/asset-tokenization-in-financial-markets-the-next-generation-of-value-exchange/>
- <https://developers.uniswap.org/docs/protocols/v4-hooks/permissioned-pools/architecture>
- <https://docs.erc3643.org/erc-3643/smart-contracts-library/onchain-identities/identity-registry>
- <https://www.tokenizedstockvenue.com/notice.html>
- <https://llmstxt.org/>
- <https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf>
- <https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html>
