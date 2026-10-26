---
title: Ed’s Tokenized Securities Rails
description: A human-curated, LLM-maintained, source-linked knowledge base on tokenized securities infrastructure.
---

A human-curated, LLM-maintained, source-linked knowledge base on **tokenized securities infrastructure**: issuers, legal structures, custody, chains, venues, settlement and regulation. Every fact links to a source; unverified fields say `unknown`.

## New to tokenization?
Here is the life of a token in four steps, and how a real (native) share differs from a wrapper. Read the full [[overview|overview]].

<a href="/overview" style="display:block;background:none;padding:0"><picture>
<source media="(max-width: 700px)" srcset="/diagrams/overview-mobile.svg">
<img src="/diagrams/overview-desktop.svg" alt="How tokenized securities work in four steps: issue, approve buyers, trade and settle, pay holders; plus native vs wrapper. See the overview page for a text version" style="width:100%;height:auto">
</picture></a>

*[See the detailed version](/overview#the-full-picture)*

## Why tokenize securities?
Today, buying a stock or bond goes through a chain of brokers, [[concepts/glossary#custodian|custodians]] and [[concepts/glossary#ccp|clearinghouses]]. Each one keeps its own records and has to reconcile them with the others, which is why settlement takes days and markets close at night. A token puts the asset and its ownership record on one shared ledger, so:

- **Cash and asset swap in one step.** Both sides settle together or not at all ([ECB](https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260826~3641116314.en.html)).
- **Markets don't need to close.** Trades could clear in seconds, 24/7 ([BlackRock](https://www.blackrock.com/corporate/investor-relations/2025-larry-fink-annual-chairmans-letter)).
- **Assets plug into other things.** Tokenized Treasuries can already be posted as collateral for futures and swaps ([CFTC](https://www.cftc.gov/PressRoom/PressReleases/9146-25)).
- **More people get access.** You can own fractions, from anywhere.

It's already real for big institutions, though two common numbers measure different things. About \$368B of repo trades *settle every day* on Broadridge's blockchain platform: that is a daily flow, with the same cash and bonds lent and repaid over and over ([Broadridge](https://www.broadridge.com/press-release/2025/broadridge-distributed-ledger-repo-platform-november)).

Tokenized Treasuries *held* on blockchains total about \$14.5B as of Oct 2026: that is a stock of assets, like an account balance ([rwa.xyz](https://app.rwa.xyz/treasuries)). Most tokenized assets so far are bonds and [[concepts/glossary#money-market-fund|money market funds]] ([IOSCO](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD809.pdf)).

Many stock tokens are wrappers: a third party holds the real share and gives you a token that tracks it, usually without a vote ([[overview#native-vs-wrapped|native vs wrapper]]).


## Explore the wiki
- **Look up a company:** [[database|Issuer & platform database]] (21 entities)
- **See what changed:** [[whats-changed|What changed, week by week]] · [[topics/rules-by-jurisdiction|Rules by jurisdiction]]
- **Understand the concepts:** [[concepts/glossary|Glossary]] · [[concepts/legal-taxonomy|Legal taxonomy]] · [[concepts/token-primitives|Token primitives]] · [[concepts/post-trade-reg-nms-model|Post-trade (Reg NMS) model]] · [[concepts/innovation-exemption|Innovation Exemption (TSVs)]] · [[concepts/international|International]]
- **Compare models and standards:** [[comparisons/implementations-by-model|Implementations by model]] · [[standards/erc-3643|ERC-3643]] · [[standards/erc-1400|ERC-1400]] · [[standards/solana-token-2022|Token-2022]] · [[standards/b20|B20]]
- **Use it with an AI agent:** [[agents|Guide for AI agents]] · [[starter-prompts|Starter prompts]] · [llms.txt](/llms.txt) · [llms-full.txt](/llms-full.txt)
- **Dig into a topic:** [[topics/legal-structures|Legal structures]] · [[topics/custody|Custody]] · [[topics/settlement-and-matching|Settlement & matching]] · [[topics/regulation|Regulation]] · [[topics/corporate-actions-and-dividends|Corporate actions & dividends]] · [[topics/who-can-buy|Who can buy]]

## Latest changes
- [2026-10-17: Vault seeded with 15 entities](/changelog/2026-10-17-vault)
- [2026-10-14: Perpetuals.com files a TSV notice](/changelog/2026-10-14-perpetuals-notice)
- [2026-10-09: EU Council agrees key elements of the market integration package](/changelog/2026-10-09-eu-council-dlt-pilot)
- [2026-10-08: Securitize launches tokenized US stocks on Solana](/changelog/2026-10-08-securitize-stocks)
- [2026-10-07: Ondo tokenized stocks reach EEA investors via Assetera](/changelog/2026-10-07-assetera-ondo)

See [[whats-changed|What changed]] by week, or the full [[changelog/index|changelog]].

## Get the weekly email
A free weekly email on what changed in tokenized securities. [[subscribe|Subscribe]].

*Reference information only. Not investment advice.*
