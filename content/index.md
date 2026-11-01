---
title: Ed’s Tokenized Securities Rails
description: A human-curated, LLM-maintained wiki on issuers, legal structures, custody, venues, settlement and regulation.
type: home
last_checked: '2026-11-01'
---

# Ed’s Tokenized Securities Rails

A human-curated, LLM-maintained, source-linked knowledge base on **tokenized securities infrastructure**

Issuers, legal structures, custody, chains, venues, settlement and regulation. Every fact links to a source; unverified fields say `unknown`.

- [Start with the overview](/overview)
- [Try a starter prompt](/starter-prompts)
- [Browse issuers, venues & infrastructure](/database)

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
Point your AI assistant at this wiki and paste a prompt. More in [[starter-prompts|Starter prompts]].

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
- **Looking up a company?** [[database|Issuer & platform database]] (23 entities)
- **Following the rules?** [[topics/rules-by-jurisdiction|Rules by jurisdiction]] · [[concepts/innovation-exemption|Innovation Exemption (TSVs)]] · [[whats-changed|What changed, week by week]]
- **Building something?** [[build/index|Build with this wiki]] · [[build/trading-reference-architecture|Reference architecture for trading]]
- **Using an AI agent?** [[starter-prompts|Starter prompts]] · [[starter-prompts#prompts-for-coding-agents|Prompts for coding agents]] · [[agents|Guide for AI agents]] · [llms.txt](/llms.txt) · [llms-full.txt](/llms-full.txt)
- **Going deeper?** Concepts: [[concepts/legal-taxonomy|Legal taxonomy]] · [[concepts/token-primitives|Token primitives]] · [[concepts/post-trade-reg-nms-model|Post-trade (Reg NMS) model]] · [[concepts/international|International]]. Standards: [[comparisons/implementations-by-model|Implementations by model]] · [[standards/erc-3643|ERC-3643]] · [[standards/erc-1400|ERC-1400]] · [[standards/solana-token-2022|Token-2022]] · [[standards/b20|B20]]. Topics: [[topics/legal-structures|Legal structures]] · [[topics/custody|Custody]] · [[topics/settlement-and-matching|Settlement & matching]] · [[topics/regulation|Regulation]] · [[topics/corporate-actions-and-dividends|Corporate actions & dividends]]

## Latest changes
- [2026-10-31: IMF publishes the first official data on tokenized-stock trading](/changelog/2026-10-31-imf-gfsr-scaling-tokenization)
- [2026-10-31: DTCC firm counts clarified](/changelog/2026-10-31-dtcc-firm-counts)
- [2026-10-31: Bank of England consults on tokenised collateral at clearing houses](/changelog/2026-10-31-boe-tokenised-collateral-ccps)
- [2026-10-30: All starter prompts on one page; database downloads](/changelog/2026-10-30-one-prompts-page-and-database-downloads)
- [2026-10-30: 50 companies now object to OKXICE stock tokens](/changelog/2026-10-30-okxice-50-objectors)

See [[whats-changed|What changed]] by week, or the full [[changelog/index|changelog]].

## Get the weekly email
A free weekly email on what changed in tokenized securities.

<form class="signup-form signup-compact" method="post" action="/v1/subscribe" data-signup>
  <p class="signup-help">Only your email is required.</p>
  <div class="signup-row signup-row-wide">
    <div class="signup-field"><label for="signup-email-home">Email <span class="signup-req">(required)</span></label>
    <input id="signup-email-home" type="email" name="email" required maxlength="254" autocomplete="email" placeholder="you@example.com"></div>
    <div class="signup-field"><label for="signup-name-home">Name <span class="signup-opt">(optional)</span></label>
    <input id="signup-name-home" type="text" name="name" maxlength="100" autocomplete="name"></div>
    <div class="signup-field"><label for="signup-role-home">Role <span class="signup-opt">(optional)</span></label>
    <select id="signup-role-home" name="role">
      <option value="" selected></option>
      <option>Investor</option>
      <option>Builder/developer</option>
      <option>Issuer</option>
      <option>Policy/legal</option>
      <option>Just curious</option>
      <option>Other</option>
    </select></div>
    <button type="submit">Subscribe</button>
  </div>
  <div class="signup-hp" aria-hidden="true"><label>Leave this empty <input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
  <input type="hidden" name="source" value="/">
  <p class="signup-consent">We only use your address for this email and never share it. More on the <a href="/subscribe" class="internal">Subscribe</a> page.</p>
  <p class="signup-msg" role="status" aria-live="polite"></p>
</form>

*Reference information only. Not investment advice.*
