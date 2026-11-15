---
name: Uniswap v4 permissioned pools
jurisdiction: unknown
product_name: PermissionedHooks
structure: Permissioned AMM hook
chains: unknown
who_can_buy: Allowlisted addresses (issuer-defined)
num_assets: unknown
structure_short: AMM hook standard
who_can_buy_short: Allowlisted wallets
last_checked: '2026-11-11'
title: Uniswap v4 permissioned pools
tags:
- infrastructure
type: infrastructure
chain: unknown
status: unknown
last_updated: '2026-11-11'
description: 'In plain English: Uniswap''s permissioned pools let only approved wallets trade a token, so regulated assets can use onchain pools.'
---

> [!info] At a glance
> **Type:** infrastructure  
> **Jurisdiction:** unknown  
> **Chain:** unknown  
> **Status:** unknown  
> **Last updated:** 2026-11-11  

| Field | Value |
|---|---|
| name | Uniswap v4 permissioned pools |
| jurisdiction | unknown |
| product_name | PermissionedHooks |
| structure | Permissioned AMM hook |
| chains | unknown |
| who_can_buy | Allowlisted addresses (issuer-defined) |
| num_assets | unknown |

*In plain English: Uniswap's permissioned pools let only approved wallets trade a token, so regulated assets can use onchain pools.*

An open-source Uniswap v4 hook standard for compliant trading of tokenized [[concepts/glossary#rwa|RWAs]] and equities; issuer [[concepts/glossary#allowlist|allowlists]] are enforced on every swap and liquidity [[concepts/glossary#mint|mint]] ([Uniswap](https://blog.uniswap.org/introducing-permissioned-pools-on-uniswap-v4)).

A Permissions Adapter holds the real asset and issues a virtual token to PoolManager; PermissionedHooks checks an IAllowlistChecker ([architecture](https://developers.uniswap.org/docs/protocols/v4-hooks/permissioned-pools/architecture); [source](https://github.com/Uniswap/v4-hooks-public/blob/main/src/permissioned-pools/PermissionedHooks.sol)).

It is the [[concepts/glossary#amm-automated-market-maker|AMM]] primitive used by the first [[concepts/glossary#tsv|TSV]] notice ([[platforms-venues/okxice-tsv|OKXICE]]).

On 10 Nov 2026 Uniswap Labs published a post on how it reads [[concepts/innovation-exemption|Innovation Exemption]] TSV conditions (fee disclosure, access controls, symbol and volume caps, and trading halts) as mappable to Uniswap v4 hooks and the Permissioned Pools hook, and on correlated pairs such as a stock against SPY. The post is Uniswap's framing, not a TSV notice; it says Uniswap Labs does not operate, control, or have a role in the operation of any tokenized securities venue. Vendor metrics in the same post, attributed as such: more than $20 billion in stock tokens traded on the Uniswap Protocol to date, and, since August, more than 40 tokenized stocks and ETFs with SPY pools on Robinhood Chain, with over $900 million in volume across 130,000 wallets ([Uniswap](https://blog.uniswap.org/building-a-tokenized-securities-venue-on-uniswap), raw/241).

On 5 Nov 2026 Groma opened a permissioned GRO/USDC pool on Base through Uniswap's permissioned pool infrastructure, letting verified investors buy and redeem GromaCoin, an equity stake in a residential real-estate trust, directly with the trust at NAV ([Groma](https://groma.substack.com/p/bringing-real-estate-to-uniswap-introducing), raw/209). It is a real-estate token, not a listed stock. Venue designs compared: [[build/trading-reference-architecture#how-venues-match-and-settle|How venues match and settle]].

## Sources
Public originals for the facts on this page.

- <https://blog.uniswap.org/introducing-permissioned-pools-on-uniswap-v4>
- <https://developers.uniswap.org/docs/protocols/v4-hooks/permissioned-pools/architecture>
- <https://github.com/Uniswap/v4-hooks-public/blob/main/src/permissioned-pools/PermissionedHooks.sol>
- <https://groma.substack.com/p/bringing-real-estate-to-uniswap-introducing>
- <https://blog.uniswap.org/building-a-tokenized-securities-venue-on-uniswap>

*Last checked 2026-11-11. Headline fields only; `unknown` means not yet verified from a source.*
