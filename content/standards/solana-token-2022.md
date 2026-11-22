---
title: Solana Token-2022 extensions
type: standard
tags:
- standards
last_checked: '2026-11-12'
sources:
- https://solana.com/docs/tokens/extensions
- https://solana.com/docs/tokens/extensions/transfer-hook
- https://solana.com/docs/tokens/extensions/scaled-ui-amount
- https://docs.ondo.finance/ondo-stocks/overview
- https://docs.ondo.finance/api-reference/overview
description: Token-2022 is Solana's token program with optional add-ons that tokenized stocks use for compliance and splits.
---

*In plain English: Token-2022 is Solana's token program with optional add-ons that tokenized stocks use for compliance and splits.*

Token-2022 adds extensions including transfer hook, permanent delegate, default account state, scaled UI amount and metadata ([Solana](https://solana.com/docs/tokens/extensions)).
- **Transfer hook**: a custom program runs on every transfer; ExtraAccountMetaList resolves extra accounts. This is Solana's equivalent of identity-gated compliance checks ([Solana](https://solana.com/docs/tokens/extensions/transfer-hook)).
- **Scaled UI amount**: a [[concepts/glossary#multiplier|multiplier]] changes the displayed balance without changing raw balances; used for splits and reinvested dividends ([Solana](https://solana.com/docs/tokens/extensions/scaled-ui-amount)).
Ondo Stocks are available on Solana, and some wallets show a display [[concepts/glossary#multiplier|multiplier]] there ([Ondo overview](https://docs.ondo.finance/ondo-stocks/overview)). The current Ondo API overview states that Ondo Stocks on Solana are issued as SPL Token-2022 tokens ([Ondo API overview](https://docs.ondo.finance/api-reference/overview), retrieved 12 Nov 2026); the current Ondo Stocks overview and technical docs do not name the token standard.

## Sources
Public originals for the facts on this page.

- <https://solana.com/docs/tokens/extensions>
- <https://solana.com/docs/tokens/extensions/transfer-hook>
- <https://solana.com/docs/tokens/extensions/scaled-ui-amount>
- <https://docs.ondo.finance/ondo-stocks/overview>
- <https://docs.ondo.finance/api-reference/overview>
