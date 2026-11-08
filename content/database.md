---
title: Database of tokenized-securities issuers, venues and infrastructure
description: One table of the 25 issuers, venues/exchange rules and infrastructure providers covered by this wiki, with jurisdiction, legal structure, chains and who can buy. Download as CSV or JSON.
last_checked: '2026-11-02'
---

**What it is:** one row for every issuer, venue and infrastructure page this wiki covers: 25 records in total, made up of 11 token issuers, 7 trading venues and exchange rules, and 7 infrastructure providers (price oracles, a depository pilot, an AMM standard, a transfer agent and a tokenization engine). Each row gives the jurisdiction, legal structure, chains, who can buy and the date it was last checked.

**Where the data comes from:** each row is generated from the headline fields of its source-linked wiki page. Follow the name to see the sources behind every field. `unknown` means not yet verified from a source. Generated on 2026-11-02.

**Download:** [CSV](/database.csv) · [JSON](/database.json) (full field text, CC BY 4.0).

| Name | Type | Jurisdiction | Structure | Chains | Who can buy | Checked |
|---|---|---|---|---|---|---|
| [bStocks](/issuers/bstocks) | Issuer | ADGM (UAE) | Certificates over shares | BNB Smart Chain | ADGM only; not US | 2026-10-17 |
| [Coinbase Tokenized Stocks](/issuers/coinbase-tokenized-stocks) | Issuer | ADGM (UAE) | Beneficial claim, 1:1 | Base | Non-US (Reg S) | 2026-10-17 |
| [Crypto.com Tokenized Stocks](/issuers/crypto-com-tokenized-stocks) | Issuer | Cyprus | Derivative | unknown | EEA and approved regions | 2026-10-25 |
| [Dinari dShares](/issuers/dinari) | Issuer | United States | Custodial tokenized shares | Ethereum, Avalanche, Arbitrum +1 | US eligible + intl | 2026-10-17 |
| [Figure OPEN](/issuers/figure-open) | Issuer | United States | Blockchain-native equity | Provenance | Venue onboarding | 2026-10-25 |
| [Ondo Global Markets (Ondo Stocks)](/issuers/ondo-global-markets) | Issuer | BVI | Structured notes | Ethereum, BNB Chain, Solana | Non-US eligible, KYC | 2026-10-29 |
| [Robinhood Stock Tokens](/issuers/robinhood-stock-tokens) | Issuer | Jersey | Tokenised debt securities | Robinhood Chain | Non-US; excl. CA, UK, CH | 2026-10-29 |
| [Securitize (issuer-sponsored shares)](/issuers/securitize) | Issuer | unknown | Security entitlements + issue… | Algorand, Ethereum, Solana +1 | Issuer-specific | 2026-10-28 |
| [Superstate Opening Bell](/issuers/superstate-opening-bell) | Issuer | unknown | Issuer shares, TA record | Ethereum, Solana | KYC'd investors | 2026-10-17 |
| [WisdomTree tokenized funds](/issuers/wisdomtree) | Issuer | United States | FUNDS: tokenized '40 Act | Solana, others | Retail+inst. via apps | 2026-10-17 |
| [xStocks (Backed)](/issuers/xstocks-backed) | Issuer | Jersey | Backed tracker tokens | Solana, Ethereum, TON +1 | Non-US eligible | 2026-10-25 |
| [Bullish Exchange](/platforms-venues/bullish) | Venue/rule | Gibraltar | Venue (CEX), direct shares | unknown | unknown | 2026-10-30 |
| [Bybit](/platforms-venues/bybit) | Venue/rule | unknown | Venue (CEX) | unknown | unknown | 2026-10-17 |
| [Kraken](/platforms-venues/kraken) | Venue/rule | unknown | Venue (CEX) | unknown | Non-US eligible | 2026-10-25 |
| [Nasdaq tokenized securities rule](/platforms-venues/nasdaq-tokenized-securities) | Venue/rule | United States | Same security, tokenized form | unknown | DTC pilot participants | 2026-10-17 |
| [NYSE / ICE tokenized securities](/platforms-venues/nyse-ice-tokenized-platform) | Venue/rule | United States | Exchange rule + planned venue | unknown | unknown | 2026-11-02 |
| [OKXICE TSV](/platforms-venues/okxice-tsv) | Venue/rule | United States | TSV, permissioned AMM | unknown | SBT-gated | 2026-10-31 |
| [TSV LLC](/platforms-venues/tsv-llc) | Venue/rule | United States | TSV, permissioned AMM | Canton | Approved participants | 2026-10-30 |
| [Broadridge](/infrastructure/broadridge) | Infra | United States | Governance + transfer agent… | unknown | B2B | 2026-11-02 |
| [Chainlink tokenized equity feeds](/infrastructure/chainlink-equity-feeds) | Infra | unknown | Oracle / price feeds | unknown | n/a | 2026-10-17 |
| [DTCC Tokenization Service (DTS)](/infrastructure/dtcc-tokenization-pilot) | Infra | United States | Depository pilot | At launch: Canton Netwo… | DTC participants | 2026-11-02 |
| [tZERO](/infrastructure/tzero) | Infra | United States | Transfer agent + broker-deale… | unknown | B2B | 2026-11-02 |
| [Uniswap v4 permissioned pools](/infrastructure/uniswap-permissioned-pools) | Infra | unknown | AMM hook standard | unknown | Allowlisted wallets | 2026-10-17 |
| [Vertalo](/infrastructure/vertalo) | Infra | United States | Transfer agent (B2B) | unknown | B2B | 2026-11-02 |
| [Zerohash](/infrastructure/zerohash) | Infra | unknown | Tokenization engine (B2B) | unknown | B2B | 2026-10-27 |
