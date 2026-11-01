---
title: Custody
tags:
- topics
last_checked: 2026-10-28
sources:
- https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live
- https://zerion.io/blog/best-tokenized-stock-platforms/
- https://fensory.com/best/tokenized-stocks-platforms
- https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers
- https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
- https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html
- https://zerohash.com/industries/brokerages
description: 'In plain English: Who holds the real share, and who controls the token, differs by model. This page shows who keeps what.'
---

*In plain English: Who holds the real share, and who controls the token, differs by model. This page shows who keeps what.*

Who holds the real share, and who holds the keys, differs by model (see [[overview|the overview]]).

## Backed (third-party) models
Backed models hold the underlying shares with a [[concepts/glossary#custodian|custodian]] or broker-dealer (Ondo: US broker-dealers; Dinari: registered US broker-dealer; Coinbase: bankruptcy-remote structure) ([Zerion](https://zerion.io/blog/best-tokenized-stock-platforms/), secondary; [Fensory](https://fensory.com/best/tokenized-stocks-platforms), secondary). SEC staff note that holders of third-party tokens may face risks, such as the third party's bankruptcy, that holders of the underlying share would not ([SEC staff statement, 28 Jan 2026](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities)).

## Issuer-sponsored models
These replace custody with a transfer-agent register: the token is the ownership record (see [[issuers/securitize|Securitize]], [[issuers/superstate-opening-bell|Superstate]]).

## DTC tokenized entitlements
Tokens are backed 1:1 by securities held at [[concepts/glossary#dtc|DTC]], and DTC keeps the official books and records ([[infrastructure/dtcc-tokenization-pilot|DTCC Tokenization Service]]; [DTCC tear sheet](https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html)). The service went live on 28 Oct 2026, delivering tokens to participants' wallets of choice ([DTCC](https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live)).

## Broker-dealer custody of tokens
SEC staff will not object to a broker-dealer treating itself as having "physical possession" of a crypto asset security under Rule 15c3-3(b)(1) if conditions are met, chiefly control of the private keys and safeguards against their theft or loss ([SEC staff statement, 17 Dec 2025](https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers)). This is a staff statement, not a rule.

## Vendors
[[infrastructure/zerohash|Zerohash]] markets a tokenization engine to brokerages ([Zerohash](https://zerohash.com/industries/brokerages)).

## What this means for holders
- With a [[concepts/glossary#wrapper|wrapper]], your protection depends on the issuer's [[concepts/glossary#custodian|custodian]] and whether the structure is [[concepts/glossary#bankruptcy-remote|bankruptcy-remote]].
- Platform custody and token custody are separate questions: a venue can list a token without holding it (e.g. [[platforms-venues/okxice-tsv|OKXICE]]).

*Reference information only, not investment advice.*

## Sources
Public originals for the facts on this page.

- <https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live>
- <https://zerion.io/blog/best-tokenized-stock-platforms/>
- <https://fensory.com/best/tokenized-stocks-platforms>
- <https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers>
- <https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities>
- <https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html>
- <https://zerohash.com/industries/brokerages>
