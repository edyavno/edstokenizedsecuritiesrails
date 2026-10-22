---
title: Ed’s Tokenized Securities Rails
description: A human-curated, LLM-maintained, source-linked knowledge base on tokenized securities infrastructure.
---

A human-curated, LLM-maintained, source-linked knowledge base on **tokenized securities infrastructure**: issuers, legal structures, custody, chains, venues, settlement and regulation. Every fact links to a source; unverified fields say `unknown`.

## New to tokenization?
Here's how the pieces fit together: who keeps the official record, how trades settle against tokenized cash, and how native tokens differ from wrapped ones. Read the full [[overview|overview]].

<a href="/overview" style="display:block;background:none;padding:0"><picture>
<source media="(max-width: 700px)" srcset="/diagrams/overview-mobile.svg">
<img src="/diagrams/overview-desktop.svg" alt="How tokenized securities fit together (diagram); see the overview page for a text version" style="width:100%;height:auto">
</picture></a>

## Why tokenize securities?
Today, buying a stock or bond goes through a chain of brokers, custodians and clearinghouses. Each one keeps its own records and has to reconcile them with the others, which is why settlement takes days and markets close at night. A token puts the asset and its ownership record on one shared ledger, so:

- **Cash and asset swap in one step.** Both sides settle together or not at all ([ECB](https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260826~3641116314.en.html)).
- **Markets don't need to close.** Trades could clear in seconds, 24/7 ([BlackRock](https://www.blackrock.com/corporate/investor-relations/2025-larry-fink-annual-chairmans-letter)).
- **Assets plug into other things.** Tokenized Treasuries can already be posted as collateral for futures and swaps ([CFTC](https://www.cftc.gov/PressRoom/PressReleases/9146-25)).
- **More people get access.** You can own fractions, from anywhere.

It's already real in wholesale markets: about $368B of tokenized repo settles every day ([Broadridge](https://www.broadridge.com/press-release/2025/broadridge-distributed-ledger-repo-platform-november)). The catch is that it's still early and mostly bonds and money market funds, about $14.5B in tokenized Treasuries as of Oct 2026 ([rwa.xyz](https://app.rwa.xyz/treasuries)). Many stock tokens are wrappers rather than real shares, so check what you actually own.

## Explore the wiki
- **Look up a company:** [[database|Issuer & platform database]] (19 entities)
- **Understand the concepts:** [[concepts/legal-taxonomy|Legal taxonomy]] · [[concepts/token-primitives|Token primitives]] · [[concepts/post-trade-reg-nms-model|Post-trade (Reg NMS) model]] · [[concepts/innovation-exemption|Innovation Exemption (TSVs)]] · [[concepts/international|International]]
- **Compare models and standards:** [[comparisons/implementations-by-model|Implementations by model]] · [[standards/erc-3643|ERC-3643]] · [[standards/erc-1400|ERC-1400]] · [[standards/solana-token-2022|Token-2022]] · [[standards/b20|B20]]
- **Use it with an AI agent:** [[agents|Guide for AI agents]] · [[starter-prompts|Starter prompts]] · [llms.txt](/llms.txt) · [llms-full.txt](/llms-full.txt)
- **Dig into a topic:** [[topics/legal-structures|Legal structures]] · [[topics/custody|Custody]] · [[topics/settlement-and-matching|Settlement & matching]] · [[topics/regulation|Regulation]] · [[topics/corporate-actions-and-dividends|Corporate actions & dividends]] · [[topics/who-can-buy|Who can buy]]

## Latest changes
- [2026-06-16: SEC notice: 24X Exchange tokenized trading rule (SR-24X-2026-20)](/changelog/2026-06-16-sec)
- [2026-03-18: SEC approves Nasdaq tokenized securities rule](/changelog/2026-03-18-sec)
- [2026-02-24: WisdomTree announces 24x7 trading for WTGXX](/changelog/2026-02-24-wisdomtree)
- [2025-12-02: Kraken agrees to acquire Backed Finance AG](/changelog/2025-12-02-kraken)
- [2025-06-30: xStocks live on Bybit, Kraken, Solana DeFi](/changelog/2025-06-30-xstocks)

See the full [[changelog/index|changelog]].

## Get the weekly email
A free weekly email on what changed in tokenized securities. [[subscribe|Subscribe]].

*Reference information only. Not investment advice.*
