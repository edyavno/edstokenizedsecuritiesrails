---
name: Broadridge
jurisdiction: United States
product_name: On-chain governance, digital transfer agency, DLX / Distributed Ledger Repo
structure: Proxy voting, transfer agency and tokenization infrastructure
chains: unknown
who_can_buy: unknown
num_assets: unknown
structure_short: Governance + transfer agent (B2B)
who_can_buy_short: B2B
last_checked: '2026-11-18'
title: Broadridge
tags:
- infrastructure
type: infrastructure
chain: unknown
status: NYSE partner announced 2 Nov 2026; platform awaiting approval
last_updated: '2026-11-18'
description: Broadridge runs most shareholder voting in the US, and plans to let holders of tokenized NYSE shares vote from their wallets.
---

> [!info] At a glance
> **Type:** infrastructure  
> **Jurisdiction:** United States  
> **Chain:** unknown  
> **Status:** NYSE partner announced 2 Nov 2026; platform awaiting approval  
> **Last updated:** 2026-11-18  

| Field | Value |
|---|---|
| name | Broadridge |
| jurisdiction | United States |
| product_name | On-chain governance, digital transfer agency, DLX / Distributed Ledger Repo |
| structure | Proxy voting, transfer agency and tokenization infrastructure |
| chains | unknown |
| who_can_buy | unknown |
| num_assets | unknown |

*In plain English: Broadridge runs most shareholder voting in the US, and plans to let holders of tokenized NYSE shares vote from their wallets.*

On 2 Nov 2026 Broadridge said it will bring on-chain shareholder governance and digital [[concepts/glossary#transfer-agent|transfer agency]] to NYSE's tokenized securities platform once it launches after regulatory approval ([Broadridge](https://www.broadridge-ir.com/news/news-details/2026/Broadridge-to-Bring-OnChain-Governance-and-Digital-Transfer-Agency-to-New-York-Stock-Exchange-Tokenized-Securities-Platform/default.aspx)).

- **Voting:** governance smart contracts link tokens to meeting agendas, voting rules and verifiable results. Proxy materials go out and wallets are checked against verified voting entitlements. Holders vote through supported wallets, broker apps or ProxyVote ([Broadridge](https://www.broadridge-ir.com/news/news-details/2026/Broadridge-to-Bring-OnChain-Governance-and-Digital-Transfer-Agency-to-New-York-Stock-Exchange-Tokenized-Securities-Platform/default.aspx)).
- **Transfer agency:** NYSE-listed issuers can tokenize their stock through Broadridge's digital transfer agency, alongside its traditional transfer agency and proxy services ([Broadridge](https://www.broadridge-ir.com/news/news-details/2026/Broadridge-to-Bring-OnChain-Governance-and-Digital-Transfer-Agency-to-New-York-Stock-Exchange-Tokenized-Securities-Platform/default.aspx)).
- **Scope:** Broadridge says its governance platform serves issuer-listed tokens, synthetic securities issued outside the US, and third-party tokenized shares in the US ([Broadridge](https://www.broadridge-ir.com/news/news-details/2026/Broadridge-to-Bring-OnChain-Governance-and-Digital-Transfer-Agency-to-New-York-Stock-Exchange-Tokenized-Securities-Platform/default.aspx)).
- **DLX and DLR:** DLX is its tokenization platform. Its Distributed Ledger Repo settles over \$360B a day, by Broadridge's count ([Broadridge](https://www.broadridge-ir.com/news/news-details/2026/Broadridge-to-Bring-OnChain-Governance-and-Digital-Transfer-Agency-to-New-York-Stock-Exchange-Tokenized-Securities-Platform/default.aspx)).

**Dinari dShares (5 Nov 2026):** Broadridge brought proxy voting to [[issuers/dinari|Dinari]]'s custodial dShares: eligible holders vote the underlying shares through Broadridge's proxy infrastructure, and their votes are counted in the formal shareholder vote alongside traditional shareholders ([Broadridge](https://www.broadridge.com/press-release/2026/broadridge-brings-proxy-voting-to-dinaris-dshares-tokenized-us-equities)). Wallet login to vote directly is a future step. Broadridge calls its onchain proxy voting "the first platform in the U.S. to support all models of tokenization, including custodial tokenized securities and issuer-sponsored tokens" (Broadridge's claim, not independently checked). Comparison of voting paths: [[build/trading-reference-architecture#holder-rights-and-compliance-controls|Holder rights and compliance controls]].

**Onchain Rights standard (16 Nov 2026):** Coinbase and Broadridge published a jointly developed open technical standard for delivering shareholder communications directly to wallets holding tokenized shares, and said the standard was also submitted as an Ethereum Improvement Proposal (EIP) for review. In parallel, Broadridge launched a data oracle "designed to help participating firms demonstrate, in aggregate, the distribution of shareholder communications" ([Broadridge / PR Newswire](https://www.prnewswire.com/news-releases/coinbase-and-broadridge-publish-proposed-standard-for-onchain-shareholder-communications-broadridge-launches-data-oracle-302939893.html)). The announcement "builds on Broadridge's existing onchain governance capabilities, which integrate ProxyVote into digital wallets so investors can receive materials, confirm holdings and submit votes," including the 5 Nov 2026 Dinari integration above ([Broadridge](https://www.broadridge.com/press-release/2026/broadridge-brings-proxy-voting-to-dinaris-dshares-tokenized-us-equities)). Implementation "will depend on the applicable share structure, intermediaries and legal requirements" ([Broadridge / PR Newswire](https://www.prnewswire.com/news-releases/coinbase-and-broadridge-publish-proposed-standard-for-onchain-shareholder-communications-broadridge-launches-data-oracle-302939893.html)).

The standard's own site, Onchain Rights, describes two building blocks: Onchain Announcements, which let a token contract publish a structured notice, and a Corporate Action Schema for the linked document. The overview says the specifications "communicate the action" and "do not establish legal rights, calculate a particular holder's entitlement, determine eligibility, or submit votes and elections." The document format "uses corporate action vocabulary from ISO 15022 and ISO 20022, with type names from the Broadridge BRx data model" ([Onchain Rights docs](https://www.onchainrights.org/docs)). The FAQ says the standard "announces and describes events" and "doesn't take votes or move money"; "Onchain voting is the next phase" ([Onchain Rights](https://www.onchainrights.org/)). As of a 16 Nov 2026 snapshot, the project's EIP References page lists both "Onchain Announcements" and "Corporate Action Announcement Content" as "Coming soon," and the canonical JSON schema is marked "Publication pending" ([EIP References](https://www.onchainrights.org/docs/specs/eip-references); [JSON Schema](https://www.onchainrights.org/docs/specs/json-schema)). See [[topics/corporate-actions-and-dividends|corporate actions]] and [[issuers/coinbase-tokenized-stocks|Coinbase tokenized stocks]].

**Financing DTCC-tokenized Treasuries with Talos and Marex (17 Nov 2026):** Talos, Marex and Broadridge announced a collaboration to let institutions trade and finance tokenized securities, and move collateral, outside traditional market hours, on top of the [[infrastructure/dtcc-tokenization-pilot|DTCC Tokenization Service]]. The initial focus is financing tokenized U.S. Treasuries ([Broadridge](https://www.broadridge.com/press-release/2026/broadridge-to-enable-institutional-trading-of-dtcc-tokenized-securities)). The roles, per the release:
- **Execution:** Talos connects trading counterparties through its request-for-quote (RFQ) network.
- **Financing:** Marex acts as prime broker to clients financing tokenized Treasuries, through the same prime brokerage relationship they already use.
- **Settlement:** Talos integrates with DLX, Broadridge's "always-on, multi-asset digital operating system for tokenized finance," whose settlement orchestrator is to settle atomically onchain and connect that activity to books and records, interest calculations and P&L reporting.

This is an announced workflow, not a launched service; the release gives no go-live date. In it Broadridge says it processes "more than \$350 billion in tokenized repo daily," a different figure from the \$360B quoted on 2 Nov above; both are Broadridge's own counts.

It is one of six NYSE transfer agent partners as of 2 Nov 2026 ([[platforms-venues/nyse-ice-tokenized-platform#transfer-agent-partners|NYSE / ICE]]).

*Reference information only, not investment advice.*

## Sources
Public originals for the facts on this page.

- <https://www.broadridge-ir.com/news/news-details/2026/Broadridge-to-Bring-OnChain-Governance-and-Digital-Transfer-Agency-to-New-York-Stock-Exchange-Tokenized-Securities-Platform/default.aspx>
- <https://cryptobriefing.com/nyse-expands-tokenization-push-with-firms-serving-nearly-99-of-sp-500/>
- <https://www.broadridge.com/press-release/2026/broadridge-brings-proxy-voting-to-dinaris-dshares-tokenized-us-equities>
- <https://www.prnewswire.com/news-releases/coinbase-and-broadridge-publish-proposed-standard-for-onchain-shareholder-communications-broadridge-launches-data-oracle-302939893.html>
- <https://www.broadridge-ir.com/news/news-details/2026/Coinbase-and-Broadridge-Publish-Proposed-Standard-for-Onchain-Shareholder-Communications-Broadridge-Launches-Data-Oracle/default.aspx>
- <https://www.onchainrights.org/>
- <https://www.onchainrights.org/docs>
- <https://www.broadridge.com/press-release/2026/broadridge-to-enable-institutional-trading-of-dtcc-tokenized-securities>

*Last checked 2026-11-18. Headline fields only; `unknown` means not yet verified from a source.*
