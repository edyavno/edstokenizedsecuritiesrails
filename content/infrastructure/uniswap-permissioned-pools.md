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
---

| Field | Value |
|---|---|
| name | Uniswap v4 permissioned pools |
| jurisdiction | unknown |
| product_name | PermissionedHooks |
| structure | Permissioned AMM hook |
| chains | unknown |
| who_can_buy | Allowlisted addresses (issuer-defined) |
| num_assets | unknown |

An open-source Uniswap v4 hook standard for compliant trading of tokenized RWAs and equities; issuer allowlists are enforced on every swap and liquidity mint ([Uniswap](https://blog.uniswap.org/introducing-permissioned-pools-on-uniswap-v4)). A Permissions Adapter holds the real asset and issues a virtual token to PoolManager; PermissionedHooks checks an IAllowlistChecker ([architecture](https://developers.uniswap.org/docs/protocols/v4-hooks/permissioned-pools/architecture); [source](https://github.com/Uniswap/v4-hooks-public/blob/main/src/permissioned-pools/PermissionedHooks.sol)). It is the AMM primitive used by the first TSV notice ([[platforms-venues/okxice-tsv|OKXICE]]).

## Sources
- https://blog.uniswap.org/introducing-permissioned-pools-on-uniswap-v4
- https://developers.uniswap.org/docs/protocols/v4-hooks/permissioned-pools/architecture
- https://github.com/Uniswap/v4-hooks-public/blob/main/src/permissioned-pools/PermissionedHooks.sol

*Last checked 2026-10-17. Headline fields only.*
