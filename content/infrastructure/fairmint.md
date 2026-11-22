---
name: Fairmint
jurisdiction: United States
product_name: Onchain Transfer Agent services; Open Cap Table Protocol (OCP)
structure: Transfer agent keeping the official onchain shareholder register (issuer-sponsored shares)
chains: Canton
who_can_buy: unknown
num_assets: unknown
structure_short: Onchain transfer agent
who_can_buy_short: B2B (issuers)
last_checked: '2026-11-20'
title: Fairmint
tags:
- infrastructure
type: infrastructure
chain: Canton
status: Transfer agent for tokenized CNTN; first trades 4 Nov 2026
last_updated: '2026-11-20'
description: 'Fairmint is a transfer agent: the firm that keeps a company''s official list of shareholders.'
---

> [!info] At a glance
> **Type:** infrastructure  
> **Jurisdiction:** United States  
> **Chain:** Canton  
> **Status:** Transfer agent for tokenized CNTN; first trades 4 Nov 2026  
> **Last updated:** 2026-11-20  

| Field | Value |
|---|---|
| name | Fairmint |
| jurisdiction | United States |
| product_name | Onchain Transfer Agent services; Open Cap Table Protocol (OCP) |
| structure | Transfer agent keeping the official onchain shareholder register (issuer-sponsored shares) |
| chains | Canton |
| who_can_buy | unknown |
| num_assets | unknown |

*In plain English: Fairmint is a transfer agent: the firm that keeps a company's official list of shareholders. For Canton Strategic Holdings (CNTN), it keeps that list onchain, so the token is recorded on the company's own register.*

Fairmint TA LLC (formerly Fair FP LLC) is an SEC-registered [[concepts/glossary#transfer-agent|transfer agent]], file no. 084-06901, and a subsidiary of Fairmint, Inc. ([CNTN release](https://www.prnewswire.com/news-releases/first-trades-of-tokenized-us-equity-under-sec-innovation-exemption-executed-on-the-canton-network-302929795.html)). Its own letter says it has been registered since 15 Dec 2023 ([Fairmint letter](https://www.sec.gov/comments/S7-2026-30/s7202630-1120639-3987647.pdf)); this wiki has not checked the SEC's register independently.

## Role in the CNTN trades (4 Nov 2026)
- Fairmint issued CNTN's [[concepts/glossary#issuer-sponsored-token|issuer-sponsored]] tokenized shares for the company, keeps the official onchain ownership record on [[concepts/glossary#canton|Canton]], operates the [[concepts/glossary#allowlist|allow list]] of verified holders and wallets, and applies the company's transfer controls ([CNTN release](https://www.prnewswire.com/news-releases/first-trades-of-tokenized-us-equity-under-sec-innovation-exemption-executed-on-the-canton-network-302929795.html)).
- It is not the venue. TSV LLC runs the venue, using the Tradecraft [[concepts/glossary#amm-automated-market-maker|AMM]] protocol ([Fairmint](https://www.fairmint.com/blog/fairmint-brings-public-equity-onchain-with-canton-strategic-holdings/)). See [[platforms-venues/tsv-llc|TSV LLC]].
- Fairmint describes its model as different from a wrapper: "the onchain record is the official ownership record. It is not a mirror of a separate offchain database" ([Fairmint](https://www.fairmint.com/blog/what-issuer-sponsored-tokenized-stock-looks-like-cntn-selects-fairmint/), Fairmint's description).

## Fairmint TSV (announced plans, Nov 2026)
On 20 Nov 2026 Fairmint announced plans for Fairmint TSV LLC, a wholly owned subsidiary, to operate a tokenized securities venue for automated market makers trading issuer-sponsored shares recorded by Fairmint TA LLC ([GlobeNewswire](https://www.globenewswire.com/news-release/2026/11/20/3407521/0/en/fairmint-announces-plans-for-fairmint-tsv-a-venue-connecting-amms-to-issuer-sponsored-tokenized-shares-with-tradecraft-as-first-amm.html)). This is an announced plan, not a live venue.

- The shares would be authorized by the issuer and recorded by Fairmint TA, an SEC-registered transfer agent (file no. 084-06901), so each holder appears on the issuer's register. Venue activities would be separate from Fairmint TA's transfer-agent services ([GlobeNewswire](https://www.globenewswire.com/news-release/2026/11/20/3407521/0/en/fairmint-announces-plans-for-fairmint-tsv-a-venue-connecting-amms-to-issuer-sponsored-tokenized-shares-with-tradecraft-as-first-amm.html)).
- Trading would start on [[concepts/glossary#canton|Canton]], with Ethereum planned next. Tradecraft, developed by Obsidian Software LLC, would be the first AMM; the release says Tradecraft's technology already powers the existing [[platforms-venues/tsv-llc|TSV LLC]] venue ([GlobeNewswire](https://www.globenewswire.com/news-release/2026/11/20/3407521/0/en/fairmint-announces-plans-for-fairmint-tsv-a-venue-connecting-amms-to-issuer-sponsored-tokenized-shares-with-tradecraft-as-first-amm.html)).
- Fairmint TSV LLC intends to operate under the SEC [[concepts/innovation-exemption|Innovation Exemption]] (Release No. 34-106402). It has not begun trading, and launch is subject to the exemption's requirements, including the required public notice, as well as final agreements and operational readiness. Initial securities, eligible participants and the launch date will be announced when finalized ([GlobeNewswire](https://www.globenewswire.com/news-release/2026/11/20/3407521/0/en/fairmint-announces-plans-for-fairmint-tsv-a-venue-connecting-amms-to-issuer-sponsored-tokenized-shares-with-tradecraft-as-first-amm.html)). Fairmint's own post describes it as "a proposed venue under the SEC's temporary Innovation Exemption" that "is not registered with or approved by the SEC and has not begun operating" ([Fairmint on X](https://x.com/fairmint/status/2123827910301700373)).
- As of 2:59 PM ET on 20 Nov 2026, Fairmint TSV does not appear on the SEC's list of persons that have submitted written notice of intent to operate as a TSV. That list names TSV LLC (23 Sep 2026), OKXICE TSV (4 Oct 2026), Kephas Corporation d/b/a Perpetuals.com (14 Oct 2026) and Formation Securities LLC (9 Nov 2026) ([SEC](https://www.sec.gov/about/divisions-offices/division-trading-markets/innovation-exemption)).

## How the register works (Fairmint's own description)
- Holders are registered shareholders on the official register, not beneficial owners through a broker-dealer, per Fairmint's CEO ([Joris Delanoue on X](https://x.com/Joris_DLN/status/2117932047511539849), attributed).
- If a holder loses their wallet key, "the transfer agent can verify it's you & restore your shares", per the CEO ([Joris Delanoue on X](https://x.com/Joris_DLN/status/2116483159587992022), attributed).
- A company can move its existing register onchain without issuing new shares; Fairmint says it reconciles the existing record and handles the handover from the current transfer agent ([Fairmint on X](https://x.com/fairmint/status/2118818224124911923), attributed).
- Fairmint says it uses Canton because selective disclosure lets each authorized party see only the relevant records ([Fairmint on X](https://x.com/fairmint/status/2119475051497918475), attributed).
- Worked example with the permissions and recovery path: [[build/trading-reference-architecture#issuer-sponsored-register-permissions-and-recovery|Reference architecture]].

## Proposal to the SEC (not law)
On 3 Nov 2026 Fairmint asked the SEC, in its transfer agent rules comment letter, to define "exclusive control" by function, to let co-transfer agents keep the record for tokenized positions across several venues under one recordkeeping agent, and to allow transfers to be registered once payment settles ([Fairmint letter](https://www.sec.gov/comments/S7-2026-30/s7202630-1120639-3987647.pdf)). **Proposed by Fairmint, not current law or production.** Summary: [[build/trading-reference-architecture#proposed-by-fairmint-not-current-law-or-production|Reference architecture]].

By contrast, Metrika's letter on the same proposal focuses on a master securityholder file kept on a public chain the transfer agent does not control, and asks the SEC to treat exclusive control as covering the token's privileged functions (issue, cancel, freeze, force-transfer) and the off-chain address-to-holder mapping ([Metrika letter](https://www.sec.gov/comments/S7-2026-30/s7202630-1119921-3984266.pdf)). Comment letters are advocacy, not law.

## Developer tooling
Fairmint publishes the Open Cap Table Protocol. Its Canton SDK quickstart authorizes an issuer party with the OCP Factory, creates the issuer and cap table in one transaction, and reads it back as Open Cap Format data on a local Canton sandbox ([OCP quickstart](https://opencaptableprotocol.org/sdk/canton/quickstart/)). This is register tooling, not a trading API. On 9 Nov 2026 the [SDK repository](https://github.com/Fairmint/ocp-canton-sdk) and [contracts repository](https://github.com/fairmint/open-captable-protocol-daml) showed an Apache-2.0 licence; check before reuse.

## Interests
Fairmint's CEO Joris Delanoue was elected General Director of the Canton Foundation in Dec 2025 ([Fairmint](https://www.fairmint.com/press/fairmint-ceo-joris-delanoue-elected-general-director-of-the-canton-foundation/)), so its Canton commentary comes from an interested party.

## What this means for holders
- On CNTN, the token is recorded on the company's own register by its transfer agent, per the company and Fairmint ([CNTN release](https://www.prnewswire.com/news-releases/first-trades-of-tokenized-us-equity-under-sec-innovation-exemption-executed-on-the-canton-network-302929795.html)).
- Only holders whose identity and wallet Fairmint has verified and approved can hold or trade ([CNTN release](https://www.prnewswire.com/news-releases/first-trades-of-tokenized-us-equity-under-sec-innovation-exemption-executed-on-the-canton-network-302929795.html)).
- Key recovery through the transfer agent is Fairmint's stated approach, not a guarantee this wiki has tested ([Joris Delanoue on X](https://x.com/Joris_DLN/status/2116483159587992022)).
- Reference information only, not investment advice.

## Sources
Public originals for the facts on this page.

- <https://www.prnewswire.com/news-releases/first-trades-of-tokenized-us-equity-under-sec-innovation-exemption-executed-on-the-canton-network-302929795.html>
- <https://www.fairmint.com/blog/fairmint-brings-public-equity-onchain-with-canton-strategic-holdings/>
- <https://www.fairmint.com/blog/what-issuer-sponsored-tokenized-stock-looks-like-cntn-selects-fairmint/>
- <https://www.sec.gov/comments/S7-2026-30/s7202630-1120639-3987647.pdf>
- <https://opencaptableprotocol.org/sdk/canton/quickstart/>
- <https://www.fairmint.com/press/fairmint-ceo-joris-delanoue-elected-general-director-of-the-canton-foundation/>
- <https://www.sec.gov/comments/S7-2026-30/s7202630-1119921-3984266.pdf>
- <https://www.globenewswire.com/news-release/2026/11/20/3407521/0/en/fairmint-announces-plans-for-fairmint-tsv-a-venue-connecting-amms-to-issuer-sponsored-tokenized-shares-with-tradecraft-as-first-amm.html>
- <https://www.sec.gov/about/divisions-offices/division-trading-markets/innovation-exemption>

*Last checked 2026-11-20. Headline fields only; `unknown` means not yet verified from a source.*
