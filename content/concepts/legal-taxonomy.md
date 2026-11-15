---
title: Legal taxonomy of tokenized securities
type: concept
tags:
- concepts
last_checked: '2026-11-12'
sources:
- https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
- https://www.sidley.com/en/insights/newsupdates/2026/01/sec-staff-unveils-a-playbook-for-tokenized-securities
- https://www.jonesday.com/en/insights/2026/02/sec-staff-provides-its-views-on-taxonomies-associated-with-tokenized-securities
- https://www.sec.gov/rules-regulations/staff-guidance/trading-markets-frequently-asked-questions/frequently-asked-questions-relating-crypto-asset-activities-distributed-ledger-technology
- https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers
- https://www.sidley.com/en/insights/newsupdates/2025/12/sec-issues-further-crypto-asset-security-guidance-addresses-broker-dealer-physical-possession
- https://www.prnewswire.com/news-releases/kimber-digital-securities-becomes-a-registered-broker-dealer-bringing-real-us-securities-onchain-302935166.html
- https://docs.xstocks.fi/docs/frequently-asked-questions
- https://support.kraken.com/articles/xstocks-faq
- https://docs.ondo.finance/ondo-stocks/legal-and-regulatory
- https://docs.ondo.finance/ondo-stocks/overview
- https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks
- https://robinhood.com/eu/en/support/articles/stock-tokens-faq/
description: 'In plain English: The SEC sorts tokenized stocks into a few legal types. This page explains each one, because the type decides what you actually own.'
---

*In plain English: The SEC sorts tokenized stocks into a few legal types. This page explains each one, because the type decides what you actually own.*

The SEC staff statement of 28 Jan 2026 ([SEC](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities)) is the vocabulary used throughout this wiki:
- **Issuer-sponsored tokenization**: the issuer (or its agent) integrates [[concepts/glossary#dlt|DLT]] into its securityholder records; the onchain record is, or feeds, the master securityholder file. Examples: [[issuers/superstate-opening-bell|Superstate Opening Bell]], [[issuers/securitize|Securitize]] transfer-agent issuances.
- **Third-party tokenization**, split into:
  - **Custodial / security entitlement**: a third party holds the security and the token evidences an entitlement (e.g. UCC Article 8). Examples: Securitize Stocks, Coinbase [[concepts/glossary#b20|B20]], [[concepts/glossary#dtc|DTC]] Tokenized Entitlements ([[concepts/post-trade-reg-nms-model|post-trade model]]). Kimber Digital Securities has described a planned token that would record a customer's security entitlement against the broker-dealer, with a matching entitlement at DTC (company release, 10 Nov 2026; the release says these capabilities are under development) ([PR Newswire](https://www.prnewswire.com/news-releases/kimber-digital-securities-becomes-a-registered-broker-dealer-bringing-real-us-securities-onchain-302935166.html)).
  - **Synthetic / linked**: the token is a separate security (e.g. a note) or security-based swap referencing the stock. Examples: [[issuers/ondo-global-markets|Ondo Stocks]] (notes), Robinhood Stock Tokens (debt securities), bStocks (certificates).
- Format does not change legal obligations ([SEC](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities); analysis: [Sidley](https://www.sidley.com/en/insights/newsupdates/2026/01/sec-staff-unveils-a-playbook-for-tokenized-securities), [Jones Day](https://www.jonesday.com/en/insights/2026/02/sec-staff-provides-its-views-on-taxonomies-associated-with-tokenized-securities)).

## Broker-dealer custody
[[concepts/glossary#rule-15c3-3|Rule 15c3-3]] possession-and-control applies to crypto asset securities. The 2020 special-purpose [[concepts/glossary#broker-dealer|broker-dealer]] statement is not mandatory ([SEC TM FAQ](https://www.sec.gov/rules-regulations/staff-guidance/trading-markets-frequently-asked-questions/frequently-asked-questions-relating-crypto-asset-activities-distributed-ledger-technology)). The 17 Dec 2025 TM statement describes how a broker-dealer establishes physical possession. It covers:
- the ability to transfer the asset
- private-key protections
- network risk assessment
- contingency plans

Sources: [SEC](https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers); [Sidley](https://www.sidley.com/en/insights/newsupdates/2025/12/sec-issues-further-crypto-asset-security-guidance-addresses-broker-dealer-physical-possession).

## Is a stock token a real share?

It depends on how the token is built. Some tokens *are* the share itself, recorded on the company's official register. Many widely traded tokens are not: they are a claim, certificate, note, or other instrument that references a share held somewhere else.

The SEC staff's 28 Jan 2026 statement sorts tokenized securities into issuer-sponsored tokens, where the onchain record is or feeds the issuer's official register, and third-party tokens. A third-party token may be a custodial security entitlement or a separate ("synthetic") instrument such as a note. The staff says the format does not change legal obligations, and a third-party token "may or may not confer upon the holder of the crypto asset any rights as a holder of the underlying security" ([SEC staff statement](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities), raw/11).

Examples from issuer documents, not a complete list:

- [[issuers/xstocks-backed|xStocks]] are tracker certificates. They give economic exposure to the underlying equity and do not convey shareholder rights such as voting ([xStocks FAQ](https://docs.xstocks.fi/docs/frequently-asked-questions), raw/260). Kraken's distribution FAQ puts it more strongly: holding an xStock "is not the same as buying a share of the underlying company" and does not carry voting rights or a legal claim to the company's shares or residual assets ([Kraken FAQ](https://support.kraken.com/articles/xstocks-faq), last updated 11 Nov 2026, raw/261).
- [[issuers/ondo-global-markets|Ondo Stocks]] are structured notes (debt instruments) issued by a bankruptcy-remote SPV. They are designed to give economic exposure, "not direct title" to the underlying assets, and no shareholder voting, statutory information, or other shareholder rights from the underlying issuer ([Ondo legal](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory) and [overview](https://docs.ondo.finance/ondo-stocks/overview), raw/262).
- [[issuers/coinbase-tokenized-stocks|Coinbase]] tokenized stocks on Base are described as a beneficial claim on a real share held in bankruptcy-remote custody, not a share recorded on the company's register ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks), raw/264; see also the implementations table).
- [[issuers/robinhood-stock-tokens|Robinhood]] products differ by program. Jersey Stock Tokens are debt securities and give no rights in the underlying shares, as already recorded on the issuer page. EU Classic Stock Tokens are a derivatives contract with Robinhood Europe: the FAQ says "you do not own the underlying stock" and "will not have certain shareholder rights like voting" ([Classic FAQ](https://robinhood.com/eu/en/support/articles/stock-tokens-faq/), raw/266).

Issuer-sponsored tokens, where the token *is* the registered share, are listed on the implementations table. For a side-by-side of models, what a holder can redeem into, and a four-model lens, see [[comparisons/implementations-by-model]]. This is reference information, not legal advice.

See also [[comparisons/implementations-by-model|implementations compared by model]].

## Sources
Public originals for the facts on this page.

- <https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities>
- <https://www.sidley.com/en/insights/newsupdates/2026/01/sec-staff-unveils-a-playbook-for-tokenized-securities>
- <https://www.jonesday.com/en/insights/2026/02/sec-staff-provides-its-views-on-taxonomies-associated-with-tokenized-securities>
- <https://www.sec.gov/rules-regulations/staff-guidance/trading-markets-frequently-asked-questions/frequently-asked-questions-relating-crypto-asset-activities-distributed-ledger-technology>
- <https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers>
- <https://www.sidley.com/en/insights/newsupdates/2025/12/sec-issues-further-crypto-asset-security-guidance-addresses-broker-dealer-physical-possession>
- <https://www.prnewswire.com/news-releases/kimber-digital-securities-becomes-a-registered-broker-dealer-bringing-real-us-securities-onchain-302935166.html>
- <https://docs.xstocks.fi/docs/frequently-asked-questions>
- <https://support.kraken.com/articles/xstocks-faq>
- <https://docs.ondo.finance/ondo-stocks/legal-and-regulatory>
- <https://docs.ondo.finance/ondo-stocks/overview>
- <https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks>
- <https://robinhood.com/eu/en/support/articles/stock-tokens-faq/>
