---
title: Build with this wiki
type: build
description: How engineers and their AI coding agents can use this wiki as a design reference for tokenized-stock trading systems, starting with the trading reference architecture.
tags:
- build
last_checked: '2026-10-25'
sources:
- https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf
- https://eips.ethereum.org/EIPS/eip-3643
- https://docs.base.org/upgrades/beryl/b20
---

*In plain English: this section is for software engineers and architects. It explains how tokenized-stock trading systems are put together, and how to point an AI coding agent at this wiki so its designs cite real rules and standards.*

## Point your coding agent at the wiki
- **[llms.txt](/llms.txt)**: one line per page with a short summary. Give this to the agent first so it can pick pages.
- **[llms-full.txt](/llms-full.txt)**: every public page in one plain-text file, for agents that can hold it in context.
- **[Guide for AI agents](/agents)**: URL patterns, freshness and how to cite.
- **Raw markdown**: every page is a plain markdown file under `content/` in the site repo, with YAML frontmatter (`title`, `description`, `last_checked`, `sources`). An agent with a local copy can grep it, e.g. `rg -i "transfer policy" content/`.

## What we expect for citations
- Cite the wiki page URL and its `last_checked` date, and link to a heading where you can (headings are stable anchors, e.g. `/build/trading-reference-architecture#rules-that-must-always-hold`).
- For a regulatory or standard requirement, cite the original source linked on the page (the SEC order, the EIP, the vendor docs), not just the wiki.
- If a page says `unknown` or a fact is not on the wiki, say so rather than guess.
- Pages update weekly. Check the source before relying on anything time-sensitive.

## Start here: reference architecture
[[build/trading-reference-architecture|Reference architecture for trading tokenized securities]]: one trade's lifecycle on tokenized rails (onboarding and allowlisting, onchain or hybrid matching, compliance-hook checks, atomic DvP, register sync, oracle and halt controls), the components, the key design decisions and the rules that must always hold.

It describes patterns from public documents only. It is a design reference, not legal advice or a certified architecture.

## Starter prompts for engineers
- "Using /build/trading-reference-architecture and /concepts/innovation-exemption, list the conditions a permissioned onchain pool for US stock tokens must meet, and which component enforces each. Cite the SEC order."
- "Compare onchain and hybrid matching for my tokenized-stock venue using /build/trading-reference-architecture. Cite the pages behind each trade-off."
- "Review my settlement flow against the rules that must always hold on /build/trading-reference-architecture. Flag any way one leg could settle without the other."
- "Using /standards/erc-3643 and /standards/b20, explain where the transfer check runs in each and what that means for my integration."

## Coming next
Deeper pages are planned: token contracts and compliance hooks; mint, redeem and supply reconciliation; onchain venues; atomic settlement; corporate actions onchain; pricing, oracles and halts; wallets, custody and keys; interoperability; standards for developers; invariants and test scenarios; a page of prompts for coding agents; and published data schemas.

## Related
[[overview|Overview]] · [[topics/settlement-and-matching|Settlement & matching]] · [[concepts/token-primitives|Token primitives]] · [[concepts/glossary|Glossary]]

## Sources
Public originals for the facts on this page.

- <https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf>
- <https://eips.ethereum.org/EIPS/eip-3643>
- <https://docs.base.org/upgrades/beryl/b20>
