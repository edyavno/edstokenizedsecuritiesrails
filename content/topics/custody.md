---
title: Custody
tags:
- topics
last_checked: 2026-11-13
sources:
- https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live
- https://zerion.io/blog/best-tokenized-stock-platforms/
- https://fensory.com/best/tokenized-stocks-platforms
- https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers
- https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
- https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html
- https://zerohash.com/industries/brokerages
- https://docs.ondo.finance/ondo-stocks/legal-and-regulatory
- https://docs.xstocks.fi/docs/frequently-asked-questions
- https://support.kraken.com/articles/xstocks-faq
- https://robinhood.com/eu/en/support/articles/stock-tokens-faq/
- https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks
- https://www.payward.com/press-release/xstocks-uk-eu-equities
- https://www.sec.gov/comments/S7-2026-30/s7202630-1119921-3984266.pdf
- https://www.youtube.com/watch?v=c8VAgn88uqs
description: Who holds the real share, and who controls the token, differs by model. This page shows who keeps what.
---

*In plain English: Who holds the real share, and who controls the token, differs by model. This page shows who keeps what.*

Who holds the real share, and who holds the keys, differs by model (see [[overview|the overview]]).

## Who holds the shares behind most tokens

For tokens that are claims on real shares, those shares sit with a custodian or broker-dealer named in that product's documents — or, in some cases, the documents only say a regulated custodian and do not name the firm. Alpaca is named below only where a document retrieved for this update says so. Issuer-sponsored tokens do not use this pattern: the transfer agent keeps the company's register.

| Issuer or product | Who holds the backing shares, per the documents | Notes |
|---|---|---|
| [[issuers/coinbase-tokenized-stocks\|Coinbase]] tokenized stocks | Alpaca, in a bankruptcy-remote structure | Already recorded on the issuer page from Coinbase/Base and Alpaca ITN sources. |
| [[issuers/ondo-global-markets\|Ondo Stocks]] | A regulated custodial broker-dealer, not named on the legal page; Ankura Trust Company acts as security agent | The legal page says the notes are backed 1:1 (plus a buffer) by underlying securities "held via a regulated custodial broker-dealer (and cash in transit)" ([Ondo legal](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory)). Alpaca Markets appears on Ondo's partner list; that list is not, by itself, a statement that Alpaca is the custodian of the backing shares. |
| [[issuers/xstocks-backed\|xStocks]] | Company statements differ | Kraken's FAQ, last updated 11 Nov 2026, says underlying shares are held by Alpaca Securities LLC, with InCore Bank as a secondary custodian ([Kraken FAQ](https://support.kraken.com/articles/xstocks-faq)). The official xStocks FAQ still says "regulated custodians" without naming them ([xStocks FAQ](https://docs.xstocks.fi/docs/frequently-asked-questions)). Payward's 11 Nov 2026 release says GTN handles global execution and custody of the traditional assets that underpin each token, in the context of a Payward Services partnership ([Payward](https://www.payward.com/press-release/xstocks-uk-eu-equities)). These statements are recorded side by side, not reconciled here. |
| [[issuers/robinhood-stock-tokens\|Robinhood]] | A US-based custody partner or US-licensed institution, not named in the documents cited here | Jersey Stock Tokens: "US-based custody partner (name: unknown)," already on the issuer page. EU Classic Stock Tokens: "The underlying assets are held securely by a US-licensed institution," unnamed ([Classic FAQ](https://robinhood.com/eu/en/support/articles/stock-tokens-faq/)). |
| [[issuers/backpack\|Backpack Securities]] | RQD Clearing, LLC and Atomic Vault Securities, LLC | Already recorded on the issuer page. |
| [[issuers/dinari\|Dinari]] | Qualified custody, firm not named on the issuer page | Already recorded; this pass did not find a named custodian in newly retrieved issuer docs. |
| [[issuers/securitize\|Securitize]] Stocks | RQD Clearing has been described as having a role in clearing, custody and settlement | That wording is already on the issuer page, attributed to CoinDesk via an RQD repost, not to a Securitize prospectus retrieved here. |
| [[issuers/superstate-opening-bell\|Superstate]] / issuer-sponsored shares | Not a third-party custodian of a wrapper | The token is the entry on the company's transfer-agent register. |

Third-party market-share figures that attribute most backing shares to a single broker were not included: a RWA Foundation or Token Terminal percentage was not verified against a methodology write-up in this pass.

In a 15 Oct 2026 interview on NYSE Live, Alpaca's co-founder and CEO, Yoshi Yokokawa — not NYSE staff — described the firm as providing traditional-finance clearing and custody of the underlying stocks that are minted into tokens, and cited a clearing-broker license and DTC membership as part of that role. That is Alpaca's own description, from auto-generated captions of the interview, not a substitute for the product documents in the table above ([NYSE Live](https://www.youtube.com/watch?v=c8VAgn88uqs)).

## Backed (third-party) models
Backed models hold the underlying shares with a [[concepts/glossary#custodian|custodian]] or broker-dealer ([[issuers/ondo-global-markets|Ondo]]: US broker-dealers; Dinari: registered US broker-dealer; Coinbase: bankruptcy-remote structure) ([Zerion](https://zerion.io/blog/best-tokenized-stock-platforms/), secondary; [Fensory](https://fensory.com/best/tokenized-stocks-platforms), secondary). SEC staff note that holders of third-party tokens may face risks, such as the third party's bankruptcy, that holders of the underlying share would not ([SEC staff statement, 28 Jan 2026](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities)).

## Issuer-sponsored models
These replace custody with a transfer-agent register: the token is the ownership record (see [[issuers/securitize|Securitize]], [[issuers/superstate-opening-bell|Superstate]]).

Where that register, or a component of it, sits on a public chain the transfer agent does not control, recordkeeping controls become a custody issue as well as a regulatory one. Metrika's 3 Nov 2026 comment letter on the SEC transfer agent proposal (File S7-2026-30) is advocacy, not law; it asks the SEC to treat network risk as a material risk under Rule 17ad-12, to treat exclusive control as covering the token's privileged functions and the off-chain address-to-holder mapping, to treat an item as posted when it reaches the agent's documented finality standard, and to reconcile supply across networks against the control book ([Metrika letter](https://www.sec.gov/comments/S7-2026-30/s7202630-1119921-3984266.pdf)). The incident figures in that letter are Metrika's monitoring data.

## DTC tokenized entitlements
Tokens are backed 1:1 by securities held at [[concepts/glossary#dtc|DTC]], and DTC keeps the official books and records ([[infrastructure/dtcc-tokenization-pilot|DTCC Tokenization Service]]; [DTCC tear sheet](https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html)). The service went live on 28 Oct 2026, delivering tokens to participants' wallets of choice ([DTCC](https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live)).

## Broker-dealer custody of tokens
SEC staff will not object to a broker-dealer treating itself as having "physical possession" of a crypto asset security under Rule 15c3-3(b)(1) if conditions are met, chiefly control of the private keys and safeguards against their theft or loss ([SEC staff statement, 17 Dec 2025](https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers)). This is a staff statement, not a rule.

## Vendors
[[infrastructure/zerohash|Zerohash]] markets a tokenization engine to brokerages ([Zerohash](https://zerohash.com/industries/brokerages)).

## What this means for holders
- With a [[concepts/glossary#wrapper|wrapper]], your protection depends on the issuer's [[concepts/glossary#custodian|custodian]] and whether the structure is [[concepts/glossary#bankruptcy-remote|bankruptcy-remote]].
- Platform custody and token custody are separate questions: a venue can list a token without holding it (e.g. [[platforms-venues/okxice-tsv|OKXICE]]).

## What if the issuer, custodian or my wallet has a problem?

It depends on the structure, and the product documents are the source, not this page. This is reference information, not legal advice or a prediction of what would happen in a default.

- **Issuer-sponsored tokens.** The token is the entry on the company's official register. A lost key may be recoverable if the transfer agent can re-verify the holder, as already described for the Fairmint / CNTN example on the [[build/trading-reference-architecture#issuer-sponsored-register-permissions-and-recovery|reference architecture]].
- **Bankruptcy-remote wrappers.** Some third-party products describe a bankruptcy-remote SPV, segregated custody, and a security agent. The official xStocks FAQ describes collateral in segregated accounts under a three-party structure (issuer, custodians, and an independent security agent) and says that if the issuer defaults, the security agent may assume control and distribute proceeds per the prospectus ([xStocks FAQ](https://docs.xstocks.fi/docs/frequently-asked-questions)). Ondo describes a bankruptcy-remote SPV, overcollateralization, a first-priority security interest held by a third-party security agent, and daily attestations ([Ondo overview](https://docs.ondo.finance/ondo-stocks/overview) and [legal](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory)). Kraken's FAQ says the SPV structure is designed so that if Kraken or Backed goes bankrupt, users can still claim the underlying value of their assets directly with Alpaca ([Kraken FAQ](https://support.kraken.com/articles/xstocks-faq)). Those are the firms' descriptions.
- **Staff risk note.** SEC staff have said that holders of third-party tokens "may be exposed to risks with respect to the third party, such as bankruptcy, to which a holder of the underlying security would not necessarily be exposed" ([SEC staff statement, 28 Jan 2026](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities)).
- **Issuer freeze or blocking powers, only where documented.** Coinbase's B20 docs say policies can allowlist or block transfers (a blocked transfer reverts), that specific contract functions can be paused, and that a Coinbase onchain oracle registry can pause a feed so that it holds the last known value; mint and redeem can also be paused offchain during a corporate action without pausing the token onchain ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks)). This page does not attribute a general freeze power to issuers whose documents are not cited for it.
- **Wallet or venue problems.** If you hold the token in a self-custodial wallet, control of the wallet is separate from who holds the backing shares. A venue can list a token without holding it. Recovery after a lost or compromised wallet depends on the product: an issuer-sponsored transfer agent may have a documented recovery path; a freely transferable wrapper may not.

*Reference information only, not investment advice. This page is not a prediction of recovery in a default.*

## Sources
Public originals for the facts on this page.

- <https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live>
- <https://zerion.io/blog/best-tokenized-stock-platforms/>
- <https://fensory.com/best/tokenized-stocks-platforms>
- <https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers>
- <https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities>
- <https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html>
- <https://zerohash.com/industries/brokerages>
- <https://docs.ondo.finance/ondo-stocks/legal-and-regulatory>
- <https://docs.xstocks.fi/docs/frequently-asked-questions>
- <https://support.kraken.com/articles/xstocks-faq>
- <https://robinhood.com/eu/en/support/articles/stock-tokens-faq/>
- <https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks>
- <https://www.payward.com/press-release/xstocks-uk-eu-equities>
- <https://www.sec.gov/comments/S7-2026-30/s7202630-1119921-3984266.pdf>
- <https://www.youtube.com/watch?v=c8VAgn88uqs>
