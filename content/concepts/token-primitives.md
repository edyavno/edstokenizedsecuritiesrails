---
title: Token primitives
type: concept
tags:
- concepts
last_checked: '2026-11-12'
sources:
- https://docs.robinhood.com/chain/building-with-stock-tokens/
- https://docs.ondo.finance/ondo-stocks/overview
- https://docs.ondo.finance/api-reference/overview
- https://docs.xstocks.fi/developers/multipliers
description: 'In plain English: The basic technical building blocks that tokenized stocks are made of, and which projects use which.'
---

*In plain English: The basic technical building blocks that tokenized stocks are made of, and which projects use which.*

The building blocks used by tokenized-stock implementations:
- **Identity-gated transfers**: [[standards/erc-3643|ERC-3643]] (identity registry + compliance), [[standards/erc-1400|ERC-1400]] (transfer validation, partitions), [[standards/solana-token-2022|Token-2022 transfer hooks]].
- **Plain ERC-20** with offchain eligibility: Robinhood Stock Tokens are standard ERC-20s ([Robinhood](https://docs.robinhood.com/chain/building-with-stock-tokens/)). Ondo Stocks are available on Ethereum, BNB Chain and Solana, and some wallets show a display [[concepts/glossary#multiplier|multiplier]] on Solana and BNB ([Ondo overview](https://docs.ondo.finance/ondo-stocks/overview)). The current Ondo API overview states that on-chain assets are issued as ERC-20 tokens for EVM-based chains and as SPL Token-2022 tokens on Solana ([Ondo API overview](https://docs.ondo.finance/api-reference/overview), retrieved 12 Nov 2026, raw/290); the current Ondo Stocks overview and technical docs do not name the token standard.
- **[[concepts/glossary#multiplier|Multipliers]] for corporate actions**: build transactions in raw amounts, display raw x multiplier (xStocks, [docs](https://docs.xstocks.fi/developers/multipliers)); [[concepts/glossary#solana|Solana]] scaled UI amount; see [[topics/corporate-actions-and-dividends|corporate actions]].
- **Permissioned [[concepts/glossary#amm-automated-market-maker|AMMs]]**: [[infrastructure/uniswap-permissioned-pools|Uniswap v4 permissioned pools]].
- **[[concepts/glossary#oracle|Oracles]]** for a 24/5 underlying traded 24/7: [[infrastructure/chainlink-equity-feeds|Chainlink]].

## Sources
Public originals for the facts on this page.

- <https://docs.robinhood.com/chain/building-with-stock-tokens/>
- <https://docs.ondo.finance/ondo-stocks/overview>
- <https://docs.ondo.finance/api-reference/overview>
- <https://docs.xstocks.fi/developers/multipliers>
