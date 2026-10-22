# Guide for AI agents

Ed's Tokenized Securities Rails is a human-curated, LLM-maintained, source-linked knowledge base on tokenized securities infrastructure. This page explains how to read and cite it.

## Fast ways in
- `https://edstokenizedsecuritiesrails.com/llms.txt`: one line per page with a short summary.
- `https://edstokenizedsecuritiesrails.com/llms-full.txt`: every public page in one plain-text file.
- [Starter prompts](https://edstokenizedsecuritiesrails.com/starter-prompts): example questions this wiki can answer.

## Layout
| Folder | What it holds |
|---|---|
| `issuers/` | Companies that issue tokenized securities or stock tokens |
| `platforms-venues/` | Exchanges, trading venues and exchange rule filings |
| `infrastructure/` | Settlement, oracle, DeFi and tokenization infrastructure |
| `standards/` | Token standards (ERC-3643, ERC-1400, Token-2022, B20) |
| `concepts/` | Legal and market-structure concepts |
| `topics/` | Cross-cutting explainers (custody, settlement, regulation, ...) |
| `comparisons/` | Side-by-side comparisons of models and precedents |
| `changelog/` | Dated change entries |
| `overview` | How the pieces fit together, with a diagram |
| `database` | One table of all issuers, venues and infrastructure |

## Page conventions
- Issuer, venue and infrastructure pages start with an **At a glance** block, also in frontmatter: `type`, `jurisdiction`, `chain`, `status`, `last_updated`. Then a headline field table, a short summary, and a **Sources** section.
- `unknown` means the field has not been verified from a public source yet. Do not treat it as "no" or fill it in from elsewhere.
- Internal links are wikilinks (`[[folder/page]]`) and resolve to `https://edstokenizedsecuritiesrails.com/folder/page`.
- Every fact links inline to a public original (regulator page, filing, issuer documentation or report); each page also lists them under **Sources**.

## Freshness
Public data is published with a 30-day delay: changelog entries and new pages appear about 30 days after they are recorded. Check `last_updated` on each page, and confirm time-sensitive facts against the linked source.

## How to cite
Cite the page URL and its `last_updated` date, for example: "Ed's Tokenized Securities Rails, *Dinari dShares*, https://edstokenizedsecuritiesrails.com/issuers/dinari (last updated 2026-10-17)". For a specific fact, prefer citing the original source linked on the page.

## Licence
Content is CC BY-NC 4.0: free to use and share with attribution, not for commercial use. Reference information only; not investment advice.
