---
title: Token primitives
type: concept
tags:
- concepts
last_checked: '2026-10-17'
sources:
- https://docs.robinhood.com/chain/building-with-stock-tokens/
- https://docs.ondo.finance/ondo-stocks/overview
- https://docs.xstocks.fi/developers/multipliers
description: The building blocks used by tokenized-stock implementations.
---

The building blocks used by tokenized-stock implementations:
- **Identity-gated transfers**: [[standards/erc-3643|ERC-3643]] (identity registry + compliance), [[standards/erc-1400|ERC-1400]] (transfer validation, partitions), [[standards/solana-token-2022|Token-2022 transfer hooks]].
- **Plain ERC-20** with offchain eligibility: Robinhood Stock Tokens are standard ERC-20s ([Robinhood](https://docs.robinhood.com/chain/building-with-stock-tokens/)); Ondo uses ERC-20 on Ethereum/BNB Chain ([Ondo](https://docs.ondo.finance/ondo-stocks/overview)).
- **Multipliers for corporate actions**: build transactions in raw amounts, display raw x multiplier (xStocks, [docs](https://docs.xstocks.fi/developers/multipliers)); Solana scaled UI amount; see [[topics/corporate-actions-and-dividends|corporate actions]].
- **Permissioned AMMs**: [[infrastructure/uniswap-permissioned-pools|Uniswap v4 permissioned pools]].
- **Oracles** for a 24/5 underlying traded 24/7: [[infrastructure/chainlink-equity-feeds|Chainlink]].

## Sources
Public originals for the facts on this page.

- <https://docs.robinhood.com/chain/building-with-stock-tokens/>
- <https://docs.ondo.finance/ondo-stocks/overview>
- <https://docs.xstocks.fi/developers/multipliers>
