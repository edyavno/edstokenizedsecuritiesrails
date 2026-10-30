---
title: Ed’s Tokenized Securities Rails
description: 'Tokenized securities, explained with sources: a human-curated, LLM-maintained wiki on issuers, legal structures, custody, venues, settlement and regulation.'
type: home
last_checked: '2026-10-30'
---

# Tokenized securities, explained with sources.

A human-curated, LLM-maintained, source-linked knowledge base on **tokenized securities infrastructure**: issuers, legal structures, custody, chains, venues, settlement and regulation. Every fact links to a source; unverified fields say `unknown`.

- [Start with the overview](/overview)
- [Try a starter prompt](/starter-prompts/)
- [Browse the database](/database)

## What is this wiki?
A reference on how stocks and bonds move onto blockchains: who issues the tokens, what you legally own, where they trade, how they settle and which rules apply. It's reference information, updated weekly. What it isn't: a broker or investment advice.

[![How tokenized securities work in four steps: issue, approve buyers, trade and settle, pay holders. Opens the overview](/diagrams/overview-desktop.svg)](/overview)

*How it fits together, in one picture: [[overview|see the overview]].*

## Who is this for?
- **Investors:** what a stock token really gives you, who can buy, the risks. Start with the [[overview|overview]] and the [[concepts/glossary|glossary]].
- **Capital-markets people:** how issuance, trading, settlement and custody map to the rails you know. Start with [[topics/settlement-and-matching|Settlement & matching]].
- **Crypto people:** the securities rules, issuers and venues behind tokenized stocks. Start with [[topics/rules-by-jurisdiction|Rules by jurisdiction]].
- **Software engineers and architects:** a design reference for building these systems, especially trading, with your AI coding agents. Start with [[build/index|Build with this wiki]].
- **AI agents:** machine-readable via [llms.txt](/llms.txt) ([[concepts/glossary#llmstxt|what's that?]]) and the [[agents|guide for AI agents]], with sources on every fact and stable page anchors.

## Why tokenize securities?
- **Cash and asset swap in one step.** Both sides settle together or not at all ([ECB](https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260826~3641116314.en.html)).
- **Markets don't need to close.** Trades could clear in seconds, 24/7 ([BlackRock](https://www.blackrock.com/corporate/investor-relations/2025-larry-fink-annual-chairmans-letter)).
- **Assets plug into other things,** such as collateral for futures and swaps ([CFTC](https://www.cftc.gov/PressRoom/PressReleases/9146-25)).
- **It's already real:** about \$368B of repo settles daily on Broadridge's platform ([Broadridge](https://www.broadridge.com/press-release/2025/broadridge-distributed-ledger-repo-platform-november)), and about \$14.5B of tokenized Treasuries are held onchain ([rwa.xyz](https://app.rwa.xyz/treasuries)).

The full case, and the catches, are in [[overview#why-tokenize-securities|the overview]].

## Try it with your AI
Point your AI assistant at this wiki and paste a prompt. More in [[starter-prompts/index|Starter prompts]].

```text
Read https://edstokenizedsecuritiesrails.com/llms-full.txt. Cite page URLs and say "unknown" rather than guess. Compare bStocks, xStocks and Robinhood Stock Tokens by legal structure, jurisdiction and who can buy.
```

```text
Read https://edstokenizedsecuritiesrails.com/llms-full.txt. Cite page URLs and say "unknown" rather than guess. How does Nasdaq's approved tokenized securities rule keep tokenized and traditional shares on the same order book?
```

```text
Read https://edstokenizedsecuritiesrails.com/llms-full.txt. Cite page URLs and say "unknown" rather than guess. Using /build/trading-reference-architecture, review my settlement flow and flag any way one leg could settle without the other.
```

## How to use this wiki
- **New to this?** [[overview|Overview]] → [[concepts/glossary|Glossary]] → [[topics/who-can-buy|Who can buy]]
- **Looking up a company?** [[database|Issuer & platform database]] (22 entities)
- **Following the rules?** [[topics/rules-by-jurisdiction|Rules by jurisdiction]] · [[concepts/innovation-exemption|Innovation Exemption (TSVs)]] · [[whats-changed|What changed, week by week]]
- **Building something?** [[build/index|Build with this wiki]] · [[build/trading-reference-architecture|Reference architecture for trading]]
- **Using an AI agent?** [[starter-prompts/index|Starter prompts]] · [[starter-prompts/coding-agents|Prompts for coding agents]] · [[agents|Guide for AI agents]] · [llms.txt](/llms.txt) · [llms-full.txt](/llms-full.txt)
- **Going deeper?** Concepts: [[concepts/legal-taxonomy|Legal taxonomy]] · [[concepts/token-primitives|Token primitives]] · [[concepts/post-trade-reg-nms-model|Post-trade (Reg NMS) model]] · [[concepts/international|International]]. Standards: [[comparisons/implementations-by-model|Implementations by model]] · [[standards/erc-3643|ERC-3643]] · [[standards/erc-1400|ERC-1400]] · [[standards/solana-token-2022|Token-2022]] · [[standards/b20|B20]]. Topics: [[topics/legal-structures|Legal structures]] · [[topics/custody|Custody]] · [[topics/settlement-and-matching|Settlement & matching]] · [[topics/regulation|Regulation]] · [[topics/corporate-actions-and-dividends|Corporate actions & dividends]]

## Latest changes
- [2026-10-30: New front page and a starter-prompts hub](/changelog/2026-10-30-front-page-and-starter-prompts)
- [2026-10-29: SIFMA's comment letter on the Innovation Exemption](/changelog/2026-10-29-sifma-comment-letter)
- [2026-10-29: Ondo Stocks live on Robinhood Chain](/changelog/2026-10-29-ondo-stocks-robinhood-chain)
- [2026-10-29: OKXICE objections reach 38; how issuer opt-outs work; Better Markets letter](/changelog/2026-10-29-okxice-38-objectors-opt-out)
- [2026-10-28: DTCC Tokenization Service goes live](/changelog/2026-10-28-dtcc-tokenization-service-live)

See [[whats-changed|What changed]] by week, or the full [[changelog/index|changelog]].

## Get the weekly email
A free weekly email on what changed in tokenized securities. [[subscribe|Subscribe]].

*Reference information only. Not investment advice.*
