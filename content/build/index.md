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

*In plain English: for software engineers, architects and their AI coding agents. An overview for now; pages will be added as the roadmap ships.*

## Start here
[[build/trading-reference-architecture|Reference architecture for trading tokenized securities]]: how one trade flows on tokenized rails, from [[concepts/glossary#allowlist|allowlisting]] through [[concepts/glossary#atomic-settlement|atomic settlement]] to the register. Built from public documents; a design reference, not legal advice.

## Point your coding agent here
- [llms.txt](/llms.txt) ([[concepts/glossary#llmstxt|what's that?]]) for a page index, [llms-full.txt](/llms-full.txt) for everything in one file, and the [guide for AI agents](/agents) for how to cite.
- Ask it to cite the wiki page and the original source (SEC order, EIP), and to say "unknown" rather than guess.

## Starter prompts
- "Using /build/trading-reference-architecture, review my settlement flow and flag any way one leg could settle without the other."
- "Compare onchain and hybrid matching for my venue using /build/trading-reference-architecture. Cite the sources."

## Related
[[overview|Overview]] · [[topics/settlement-and-matching|Settlement & matching]] · [[concepts/token-primitives|Token primitives]] · [[concepts/glossary|Glossary]]

## Sources
Public originals for the facts on this page.

- <https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf>
- <https://eips.ethereum.org/EIPS/eip-3643>
- <https://docs.base.org/upgrades/beryl/b20>
