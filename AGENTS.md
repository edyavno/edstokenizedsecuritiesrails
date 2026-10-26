# AGENTS.md: working with this repo

Ed’s Tokenized Securities Rails is a human-curated, LLM-maintained, source-linked knowledge base on tokenized securities infrastructure. This file is for an AI agent that has cloned the repo. Reading the live site instead? See https://edstokenizedsecuritiesrails.com/agents.

## Where the wiki lives
**All wiki content is Markdown under `content/`.** That folder is the whole knowledge base.

| Path | What it holds |
|---|---|
| `content/issuers/` | Companies that issue tokenized securities or stock tokens |
| `content/platforms-venues/` | Exchanges, trading venues and exchange rule filings |
| `content/infrastructure/` | Settlement, oracle, DeFi and tokenization infrastructure |
| `content/standards/` | Token standards (ERC-3643, ERC-1400, Token-2022, B20) |
| `content/concepts/` | Legal and market-structure concepts |
| `content/topics/` | Cross-cutting explainers (custody, settlement, regulation, ...) |
| `content/comparisons/` | Side-by-side comparisons of models and precedents |
| `content/changelog/` | Dated change entries |
| `content/index.md` | Homepage |
| `content/overview.md` | How the pieces fit together, with a diagram (`content/diagrams/`) |
| `content/database.md` | One table of all issuers, venues and infrastructure |
| `content/whats-changed.md` | Weekly headlines with what each change means for holders |
| `content/starter-prompts.md` | Example questions |
| `content/llms.txt` | One line per page with a short summary |
| `content/llms-full.txt` | Every page in one plain-text file |

Everything else (`quartz/`, `quartz.config.ts`, `quartz.layout.ts`, `package.json`, `node_modules/`, `public/`, `docs/`) is the Quartz static-site engine that renders `content/` into the website. You can ignore it.

## Working with the wiki locally
- Start with `content/llms.txt` to see every page and its summary, or load `content/llms-full.txt` to get everything at once.
- Search with grep or ripgrep, e.g. `rg -i "transfer agent" content/`, then read the matching files.
- Follow `[[wikilinks]]`: `[[issuers/dinari]]` or `[[issuers/dinari|Dinari]]` means `content/issuers/dinari.md`.
- Read the YAML frontmatter. Entity pages (issuers, venues, infrastructure) carry `type`, `jurisdiction`, `chain`, `status`, `last_updated` plus headline fields such as `product_name`, `structure`, `who_can_buy`, `num_assets`. Every page has `title` and `description`.
- Treat `unknown` as unverified: the fact has not been confirmed from a public source yet. Do not read it as "no" or fill it in from elsewhere.

## Page conventions
- Entity pages start with an **At a glance** box (the same fields as the frontmatter), then a headline field table, a short summary, and a **Sources** section.
- Every fact links inline to a public original (regulator page, filing, issuer documentation or report); each page also lists them under **Sources**.

## Freshness
The site updates weekly: it carries content as of the most recent Monday 00:00 ET, so changelog entries and new pages appear within about a week of being recorded. `content/whats-changed.md` lists changes by week. Check `last_updated`, and confirm time-sensitive facts against the linked source.

## How to cite
Cite the page URL (`https://edstokenizedsecuritiesrails.com/` + the path under `content/` without `.md`) and its `last_updated` date, e.g. "Ed’s Tokenized Securities Rails, *Dinari dShares*, https://edstokenizedsecuritiesrails.com/issuers/dinari (last updated 2026-10-17)". For a specific fact, prefer the original source linked on the page.

## Licence
Content is CC BY-NC 4.0: free to use and share with attribution, not for commercial use. Reference information only; not investment advice. Content: `LICENSE-CONTENT`. Code (Quartz and site config): MIT, `LICENSE.txt`.

## Example questions
See `content/starter-prompts.md` (https://edstokenizedsecuritiesrails.com/starter-prompts).
