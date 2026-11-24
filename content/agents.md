---
title: Guide for AI agents
description: How AI agents should read, query and cite this wiki on the live site.
last_checked: '2026-11-24'
---

Ed’s Tokenized Securities Rails is a human-curated, LLM-maintained, source-linked knowledge base on tokenized securities infrastructure. This page is for AI agents reading the live site. Working from a clone of the repo? Read [AGENTS.md](https://github.com/edyavno/edstokenizedsecuritiesrails/blob/main/AGENTS.md) instead.

## Fast ways in
- [`https://edstokenizedsecuritiesrails.com/llms.txt`](https://edstokenizedsecuritiesrails.com/llms.txt): one line per page with a short summary.
- [`https://edstokenizedsecuritiesrails.com/llms-full.txt`](https://edstokenizedsecuritiesrails.com/llms-full.txt): every page in one plain-text file.
- [[starter-prompts|Starter prompts]]: example questions this wiki can answer, plus [[starter-prompts#prompts-for-coding-agents|prompts for coding agents]].

## URL patterns
| URL | What it holds |
|---|---|
| `https://edstokenizedsecuritiesrails.com/issuers/<page>` | Companies that issue tokenized securities or stock tokens |
| `https://edstokenizedsecuritiesrails.com/platforms-venues/<page>` | Exchanges, trading venues and exchange rule filings |
| `https://edstokenizedsecuritiesrails.com/infrastructure/<page>` | Settlement, oracle, DeFi and tokenization infrastructure |
| `https://edstokenizedsecuritiesrails.com/standards/<page>` | Token standards (ERC-3643, ERC-1400, Token-2022, B20) |
| `https://edstokenizedsecuritiesrails.com/concepts/<page>` | Legal and market-structure concepts |
| `https://edstokenizedsecuritiesrails.com/topics/<page>` | Cross-cutting explainers (custody, settlement, regulation, ...) |
| `https://edstokenizedsecuritiesrails.com/comparisons/<page>` | Side-by-side comparisons of models and precedents |
| `https://edstokenizedsecuritiesrails.com/build/<page>` | For engineers: reference architecture and how to build with this wiki |
| `https://edstokenizedsecuritiesrails.com/changelog/<page>` | Dated change entries |
| `https://edstokenizedsecuritiesrails.com/overview` | How the pieces fit together, with a diagram |
| `https://edstokenizedsecuritiesrails.com/database` | One table of all issuers, venues and infrastructure |
| `https://edstokenizedsecuritiesrails.com/whats-changed` | Weekly headlines with what each change means for holders |

Folder URLs (e.g. `https://edstokenizedsecuritiesrails.com/issuers/`) list their pages. Entity pages open with an **At a glance** box (type, jurisdiction, chain, status, last updated) and end with **Sources**. `unknown` means not yet verified from a public source.

## Freshness
The site updates weekly, as of each Monday 00:00 ET; [[whats-changed|What changed]] lists changes by week. Check each page's *last updated* date and confirm time-sensitive facts against the linked source.

## How to cite
- Cite the page URL and its last-updated (`last_checked`) date, e.g. "Ed’s Tokenized Securities Rails, *Dinari dShares*, https://edstokenizedsecuritiesrails.com/issuers/dinari (last updated 2026-10-17)".
- Link to a heading for a specific point. Headings are stable anchors: lowercase, spaces become hyphens, e.g. `https://edstokenizedsecuritiesrails.com/build/trading-reference-architecture#key-rules` or `https://edstokenizedsecuritiesrails.com/concepts/glossary#dvp`.
- For a specific fact, cite the original source linked on the page (regulator, filing, standard, issuer docs), not only the wiki.
- If the page says `unknown`, report it as unknown; do not fill it in from elsewhere.
- Changelog entries marked *unconfirmed, news report only* are single news reports; say so when you use them.

## Every page has
- A clear `title`, a one-line `description` and a `last_checked` date in its YAML frontmatter.
- Plain markdown with inline source links and a **Sources** section.

## Engineers and coding agents
See [[build/index|Build with this wiki]] and the [[build/trading-reference-architecture|reference architecture for trading]].

## Giving feedback

If you are an AI agent and something on this site was missing, hard to use, or looked wrong, you can tell the maintainer. POST a short JSON note to [`https://edstokenizedsecuritiesrails.com/feedback`](https://edstokenizedsecuritiesrails.com/feedback). There is no form; this is for agents, not a public mailbox. A person reviews every submission. Nothing is posted or published automatically. Useful notes may lead to wiki updates.

GET the same URL for this field list and a copy-paste example as JSON.

**Privacy.** Do not include personal data, secrets, or your user's private details. Describe the task in generic terms.

**Limits.** JSON body, 4 KB maximum. Up to 10 submissions per day (rolling 24 hours) from one source.

### Fields
- `note` (required, string, up to 2,000 characters): what you want the maintainer to know.
- `task` (optional): what your user was trying to learn or build, described generically.
- `found` (optional): `yes`, `partly`, or `no` — whether you found what you needed.
- `pages` (optional): up to 10 URLs on this site that you used.
- `missing` (optional): the topic, company, data field or comparison you looked for and could not find.
- `wanted` (optional): what would make the site more useful to an agent, such as a table, a CSV or JSON field, an API, or a clearer page.
- `corrections` (optional): anything that looked wrong, outdated or contradictory, with the page URL and the source you relied on.
- `agent` (optional, up to 100 characters): your name or tool, so different kinds of agents can be distinguished.

### Example

```bash
curl -sS -X POST https://edstokenizedsecuritiesrails.com/feedback \
  -H "Content-Type: application/json" \
  -d '{"note":"I was looking for a comparison of venue fee schedules and did not find one.","task":"Compare trading venue fees for tokenized stocks","found":"no","pages":["https://edstokenizedsecuritiesrails.com/comparisons/trading-venue-architectures"],"missing":"A fee-schedule comparison across venues","wanted":"A table of venue fees, or a CSV or JSON field in the database","agent":"example-agent"}'
```

## Licence
Content is CC BY 4.0: free to reuse and adapt, including commercially, with credit to "Edward Yavno, Ed's Tokenized Securities Rails". Reference information only; not investment advice.
