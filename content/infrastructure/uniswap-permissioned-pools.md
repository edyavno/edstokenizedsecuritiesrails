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
last_checked: '2026-10-17'
title: Uniswap v4 permissioned pools
tags:
- infrastructure
type: infrastructure
chain: unknown
status: unknown
last_updated: '2026-10-17'
description: 'In plain English: Uniswap''s permissioned pools let only approved wallets trade a token, so regulated assets can use onchain pools.'
---

> [!info] At a glance
> **Type:** infrastructure  
> **Jurisdiction:** unknown  
> **Chain:** unknown  
> **Status:** unknown  
> **Last updated:** 2026-10-17  

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

## Sources
Public originals for the facts on this page.

- <https://blog.uniswap.org/introducing-permissioned-pools-on-uniswap-v4>
- <https://developers.uniswap.org/docs/protocols/v4-hooks/permissioned-pools/architecture>
- <https://github.com/Uniswap/v4-hooks-public/blob/main/src/permissioned-pools/PermissionedHooks.sol>

*Last checked 2026-10-17. Headline fields only; `unknown` means not yet verified from a source.*
