---
title: Legal taxonomy of tokenized securities
type: concept
tags:
- concepts
last_checked: '2026-10-17'
sources:
- https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
- https://www.sidley.com/en/insights/newsupdates/2026/01/sec-staff-unveils-a-playbook-for-tokenized-securities
- https://www.jonesday.com/en/insights/2026/02/sec-staff-provides-its-views-on-taxonomies-associated-with-tokenized-securities
- https://www.sec.gov/rules-regulations/staff-guidance/trading-markets-frequently-asked-questions/frequently-asked-questions-relating-crypto-asset-activities-distributed-ledger-technology
- https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers
- https://www.sidley.com/en/insights/newsupdates/2025/12/sec-issues-further-crypto-asset-security-guidance-addresses-broker-dealer-physical-possession
---

The SEC staff statement of 28 Jan 2026 ([SEC](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities)) is the vocabulary used throughout this wiki:
- **Issuer-sponsored tokenization**: the issuer (or its agent) integrates DLT into its securityholder records; the onchain record is, or feeds, the master securityholder file. Examples: [[issuers/superstate-opening-bell|Superstate Opening Bell]], [[issuers/securitize|Securitize]] transfer-agent issuances.
- **Third-party tokenization**, split into:
  - **Custodial / security entitlement**: a third party holds the security and the token evidences an entitlement (e.g. UCC Article 8). Examples: Securitize Stocks, Coinbase B20, DTC Tokenized Entitlements ([[concepts/post-trade-reg-nms-model|post-trade model]]).
  - **Synthetic / linked**: the token is a separate security (e.g. a note) or security-based swap referencing the stock. Examples: Ondo Stocks (notes), Robinhood Stock Tokens (debt securities), bStocks (certificates).
- Format does not change legal obligations ([SEC](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities); analysis: [Sidley](https://www.sidley.com/en/insights/newsupdates/2026/01/sec-staff-unveils-a-playbook-for-tokenized-securities), [Jones Day](https://www.jonesday.com/en/insights/2026/02/sec-staff-provides-its-views-on-taxonomies-associated-with-tokenized-securities)).

## Broker-dealer custody
Rule 15c3-3 possession-and-control applies to crypto asset securities; the 2020 special-purpose broker-dealer statement is not mandatory ([SEC TM FAQ](https://www.sec.gov/rules-regulations/staff-guidance/trading-markets-frequently-asked-questions/frequently-asked-questions-relating-crypto-asset-activities-distributed-ledger-technology)). The 17 Dec 2025 TM statement describes how a broker-dealer establishes physical possession: ability to transfer, private-key protections, network risk assessment, contingency plans ([SEC](https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers); [Sidley](https://www.sidley.com/en/insights/newsupdates/2025/12/sec-issues-further-crypto-asset-security-guidance-addresses-broker-dealer-physical-possession)).

See also [[comparisons/implementations-by-model|implementations compared by model]].

## Sources
- https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
- https://www.sidley.com/en/insights/newsupdates/2026/01/sec-staff-unveils-a-playbook-for-tokenized-securities
- https://www.jonesday.com/en/insights/2026/02/sec-staff-provides-its-views-on-taxonomies-associated-with-tokenized-securities
- https://www.sec.gov/rules-regulations/staff-guidance/trading-markets-frequently-asked-questions/frequently-asked-questions-relating-crypto-asset-activities-distributed-ledger-technology
- https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers
- https://www.sidley.com/en/insights/newsupdates/2025/12/sec-issues-further-crypto-asset-security-guidance-addresses-broker-dealer-physical-possession
