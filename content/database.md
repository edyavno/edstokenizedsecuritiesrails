---
title: Database of tokenized-securities issuers, venues and infrastructure
description: One table of the 34 issuers, venues/exchange rules and infrastructure providers covered by this wiki, with jurisdiction, legal structure, chains and who can buy. Download as CSV or JSON.
last_checked: '2026-11-22'
---

**What it is:** one row for every issuer, venue and infrastructure page this wiki covers: 34 records in total, made up of 13 token issuers, 13 trading venues and exchange rules, and 8 infrastructure providers (price oracles, a depository pilot, an AMM standard, a transfer agent and a tokenization engine). Each row gives the jurisdiction, legal structure, chains, who can buy and the date it was last checked.

**Where the data comes from:** each row is generated from the headline fields of its source-linked wiki page. Follow the name to see the sources behind every field. `unknown` means not yet verified from a source. Generated on 2026-11-22.

**Download:** [CSV](/database.csv) · [JSON](/database.json) (full field text, CC BY 4.0).

| Name | Type | Jurisdiction | Structure | Chains | Who can buy | Checked |
|---|---|---|---|---|---|---|
| [Backpack Securities](/issuers/backpack) | Issuer | unknown | Entitlements + 1:1 tokens | Solana | Non-US eligible users | 2026-11-19 |
| [bStocks](/issuers/bstocks) | Issuer | ADGM (UAE) | Certificates over shares | BNB Smart Chain | ADGM only; not US | 2026-11-21 |
| [Coinbase Tokenized Stocks](/issuers/coinbase-tokenized-stocks) | Issuer | ADGM (UAE) | Beneficial claim, 1:1 | Base | Non-US (Reg S) | 2026-11-19 |
| [Crypto.com Tokenized Stocks](/issuers/crypto-com-tokenized-stocks) | Issuer | Cyprus | Derivative | unknown | EEA and approved regions | 2026-10-25 |
| [Dinari dShares](/issuers/dinari) | Issuer | United States | Custodial tokenized shares | Ethereum, Arbitrum One, Avalanche C-Chain +4 | US eligible + intl | 2026-11-19 |
| [Figure OPEN](/issuers/figure-open) | Issuer | United States | Blockchain-native equity | Provenance | Venue onboarding | 2026-10-25 |
| [Ondo Stocks (Ondo Global Markets)](/issuers/ondo-global-markets) | Issuer | BVI | Structured notes | Ethereum, BNB Chain, Solana | Non-US; some professional… | 2026-11-19 |
| [Reality (rANT / rTokens)](/issuers/reality) | Issuer | unknown | Tokenized stock (Reality) | unknown | Bitget eligible users | 2026-11-21 |
| [Robinhood Stock Tokens](/issuers/robinhood-stock-tokens) | Issuer | Jersey | Tokenised debt securities | Robinhood Chain | Non-US; excl. CA, UK, CH | 2026-11-20 |
| [Securitize (issuer-sponsored shares)](/issuers/securitize) | Issuer | unknown | Security entitlements + issue… | Algorand, Ethereum, Solana +1 | Issuer-specific | 2026-11-20 |
| [Superstate Opening Bell](/issuers/superstate-opening-bell) | Issuer | unknown | Issuer shares, TA record | Ethereum, Solana | KYC'd investors | 2026-11-18 |
| [WisdomTree tokenized funds](/issuers/wisdomtree) | Issuer | United States | FUNDS: tokenized '40 Act | Solana, others | Retail+inst. via apps | 2026-11-18 |
| [xStocks (Backed)](/issuers/xstocks-backed) | Issuer | Jersey | Backed tracker tokens | Solana, Ethereum, TON +3 | Non-US eligible | 2026-11-20 |
| [21X](/platforms-venues/21x) | Venue/rule | EU | DLT TSS, onchain order book | unknown (multi-chain; p… | Whitelisted participants | 2026-11-09 |
| [Bitget](/platforms-venues/bitget) | Venue/rule | unknown | Venue (CEX) | unknown | Bitget eligible users | 2026-11-21 |
| [Bullish Exchange](/platforms-venues/bullish) | Venue/rule | Gibraltar | Venue (CEX), direct shares | unknown | unknown | 2026-11-09 |
| [Bybit](/platforms-venues/bybit) | Venue/rule | unknown | Venue (CEX) | unknown | unknown | 2026-11-12 |
| [Formation Securities TSV](/platforms-venues/formation-securities) | Venue/rule | United States | TSV, permissioned AMM | Solana | Permissioned participants | 2026-11-13 |
| [Equity perps (Hyperliquid HIP-3, Ostium)](/platforms-venues/hyperliquid-equity-perps) | Venue/rule | unknown | Synthetic perps | Hyperliquid, Arbitrum | unknown | 2026-11-19 |
| [Kraken](/platforms-venues/kraken) | Venue/rule | unknown | Venue (CEX) | unknown | Non-US eligible | 2026-11-20 |
| [Nasdaq tokenized securities rule](/platforms-venues/nasdaq-tokenized-securities) | Venue/rule | United States | Same security, tokenized form | unknown | DTC pilot participants | 2026-11-09 |
| [NYSE / ICE tokenized securities](/platforms-venues/nyse-ice-tokenized-platform) | Venue/rule | United States | Exchange rule + planned venue | Settlement ledger: Aval… | unknown | 2026-11-13 |
| [OKXICE TSV](/platforms-venues/okxice-tsv) | Venue/rule | United States | TSV, permissioned AMM | XLayer | Eligible US OKX customers | 2026-11-14 |
| [Prometheum](/platforms-venues/prometheum) | Venue/rule | United States | Broker-dealer clearing + ATS | unknown | Via broker-dealers | 2026-11-09 |
| [Seturion](/platforms-venues/seturion) | Venue/rule | EU | Settlement layer (EU) | Public and selected pri… | Venues, banks, brokers | 2026-11-09 |
| [TSV LLC](/platforms-venues/tsv-llc) | Venue/rule | United States | TSV, permissioned AMM | Canton | Approved participants | 2026-11-20 |
| [Broadridge](/infrastructure/broadridge) | Infra | United States | Governance + transfer agent… | unknown | B2B | 2026-11-18 |
| [Chainlink tokenized equity feeds](/infrastructure/chainlink-equity-feeds) | Infra | unknown | Oracle / price feeds | unknown | n/a | 2026-11-20 |
| [DTCC Tokenization Service (DTS)](/infrastructure/dtcc-tokenization-pilot) | Infra | United States | Depository pilot | At launch: Canton Netwo… | DTC participants | 2026-11-18 |
| [Fairmint](/infrastructure/fairmint) | Infra | United States | Onchain transfer agent | Canton | B2B (issuers) | 2026-11-20 |
| [tZERO](/infrastructure/tzero) | Infra | United States | Transfer agent + broker-deale… | unknown | B2B | 2026-11-13 |
| [Uniswap v4 permissioned pools](/infrastructure/uniswap-permissioned-pools) | Infra | unknown | AMM hook standard | unknown | Allowlisted wallets | 2026-11-11 |
| [Vertalo](/infrastructure/vertalo) | Infra | United States | Transfer agent (B2B) | unknown | B2B | 2026-11-02 |
| [Zerohash](/infrastructure/zerohash) | Infra | unknown | Tokenization engine (B2B) | unknown | B2B | 2026-10-27 |
