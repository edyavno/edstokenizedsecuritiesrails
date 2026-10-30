---
title: Starter prompts
description: 'Copy-paste prompts for AI assistants: research questions answerable from this wiki, then prompts for AI coding agents building tokenized-securities systems.'
type: hub
tags:
- build
last_checked: '2026-10-30'
sources:
- https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf
- https://eips.ethereum.org/EIPS/eip-3643
---

Copy a prompt into your AI assistant. Research prompts come first; [[#prompts-for-coding-agents|prompts for coding agents]] are further down.

## Research prompts
Each one is answerable from this wiki alone.

**Building software?** Jump to [[#prompts-for-coding-agents|Prompts for coding agents]].

### Start every session with
```text
Read https://edstokenizedsecuritiesrails.com/llms-full.txt (or clone the site repo). Cite page URLs and last-updated dates, and say "unknown" rather than guess.
```

### Structures and rights
```text
Which issuers offer native shares on the issuer's register, and which offer wrapped or derivative tokens? Cite the page for each.
```

```text
Compare bStocks, xStocks and Robinhood Stock Tokens by legal structure, jurisdiction and who can buy.
```

```text
What rights does a holder of a Dinari dShare have compared with a Superstate Opening Bell holder?
```

### Venues and settlement
```text
How does Nasdaq's approved tokenized securities rule keep tokenized and traditional shares on the same order book?
```

```text
What does the DTC no-action letter allow, and which venue rules reference the DTC pilot?
```

```text
Summarize the OKXICE TSV design under the Innovation Exemption: access, pairs and custody.
```

### Standards and infrastructure
```text
Compare ERC-3643, ERC-1400 and Solana Token-2022 on how they enforce transfer restrictions.
```

```text
How do Chainlink tokenized equity feeds handle stock splits and multipliers?
```

```text
How do Uniswap v4 permissioned pools enforce issuer allowlists?
```

### Regulation and markets
```text
Which entities are US-regulated versus offered only outside the US? Build a table with jurisdiction and status.
```

```text
What does the SEC staff statement on tokenized securities say about issuer-sponsored versus third-party tokens?
```

```text
How are dividends and corporate actions handled across issuers? Note any that are `unknown`.
```

### Tips
- Ask the agent to cite page URLs and `last_checked` dates, and to say `unknown` rather than guess.
- The site updates weekly; check the linked sources for anything time-sensitive.

## Prompts for coding agents
Copy-paste prompts for AI coding agents building tokenized-securities systems. Each tells the agent to cite pages of this wiki. See also [[build/index|Build with this wiki]].
*In plain English: ready-made prompts for AI coding agents. Each tells the agent to read this wiki first and cite the pages it relies on. A design reference, not legal advice.*

### Start every session with
```text
Read https://edstokenizedsecuritiesrails.com/llms.txt and /build/ before answering. Cite wiki page URLs with headings and last-updated dates, cite the original source for any rule, and say "unknown" rather than guess.
```

### Design
**Permissioned onchain pool under the SEC exemption**
```text
Design a permissioned AMM pool for tokenized US stocks that meets the SEC Innovation Exemption venue conditions (credentialed participants, issuer notice and objection, public contracts, halt mirroring, tier caps). Use /concepts/innovation-exemption and /build/trading-reference-architecture. For each condition, name the component that enforces it and cite the SEC order.
```

**End-to-end trading system**
```text
Using /build/trading-reference-architecture, propose an architecture for [my use case]. Choose onchain vs hybrid matching, the cash leg, native vs wrapper and the chain, and justify each choice with cited pages.
```


### Implement
**ERC-3643 compliance module**
```text
Add an ERC-3643 compliance module that limits [rule, e.g. holders per country]. Follow /standards/erc-3643. Implement canTransfer, transferred, created and destroyed, and write property tests for key rule 1 (only allowlisted wallets receive the token) in /build/trading-reference-architecture#key-rules.
```

**Multiplier handling**
```text
Make my integration multiplier-safe for stock tokens. Use /topics/corporate-actions-and-dividends: store raw amounts, display raw x multiplier, and handle scheduled updates. Add a test that a split does not change any holder's economic position.
```

**Halt controller**
```text
Implement a halt controller that pauses a pool when the primary exchange halts a symbol. Use /build/trading-reference-architecture#key-rules (rule 3) and cite the SEC order's stoppage-of-trading condition.
```


### Review
**Settlement flow review**
```text
Review this settlement flow against /topics/settlement-and-matching and /build/trading-reference-architecture#key-rules. List every way a leg could settle without the other, and what prefunding it needs.
```

**Mint/redeem review**
```text
Review my mint and redeem service against /build/trading-reference-architecture (mint/redeem and reconciliation). Check that token supply matches the real shares held on every chain I deploy to.
```

**Key risk review**
```text
List every admin key in my design and what it can do, using /topics/custody and /standards/erc-3643. Flag any single key that can move investor tokens.
```
