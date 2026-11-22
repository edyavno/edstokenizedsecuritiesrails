---
title: Token primitives
type: concept
tags:
- concepts
last_checked: '2026-11-18'
sources:
- https://docs.robinhood.com/chain/building-with-stock-tokens/
- https://docs.ondo.finance/ondo-stocks/overview
- https://docs.ondo.finance/api-reference/overview
- https://docs.xstocks.fi/developers/multipliers
- https://docs.base.org/specifications/b20/reference/interfaces/ib20/update-policy
- https://docs.base.org/specifications/b20/reference/events
- https://www.sec.gov/comments/S7-2026-32/4927-1134705-4042498.pdf
- https://www.onchainrights.org/docs
- https://www.prnewswire.com/news-releases/coinbase-and-broadridge-publish-proposed-standard-for-onchain-shareholder-communications-broadridge-launches-data-oracle-302939893.html
- https://www.sec.gov/Archives/edgar/data/205007/000110465926117813/tm2627770d1_485bpos.htm
description: The basic technical building blocks that tokenized stocks are made of, and which projects use which.
---

*In plain English: The basic technical building blocks that tokenized stocks are made of, and which projects use which.*

The building blocks used by tokenized-stock implementations:
- **Identity-gated transfers**: [[standards/erc-3643|ERC-3643]] (identity registry + compliance), [[standards/erc-1400|ERC-1400]] (transfer validation, partitions), [[standards/solana-token-2022|Token-2022 transfer hooks]].
- **Plain ERC-20** with offchain eligibility: Robinhood Stock Tokens are standard ERC-20s ([Robinhood](https://docs.robinhood.com/chain/building-with-stock-tokens/)). Ondo Stocks are available on Ethereum, BNB Chain and Solana, and some wallets show a display [[concepts/glossary#multiplier|multiplier]] on Solana and BNB ([Ondo overview](https://docs.ondo.finance/ondo-stocks/overview)). The current Ondo API overview states that on-chain assets are issued as ERC-20 tokens for EVM-based chains and as SPL Token-2022 tokens on Solana ([Ondo API overview](https://docs.ondo.finance/api-reference/overview), retrieved 12 Nov 2026); the current Ondo Stocks overview and technical docs do not name the token standard.
- **[[concepts/glossary#multiplier|Multipliers]] for corporate actions**: build transactions in raw amounts, display raw x multiplier (xStocks, [docs](https://docs.xstocks.fi/developers/multipliers)); [[concepts/glossary#solana|Solana]] scaled UI amount; see [[topics/corporate-actions-and-dividends|corporate actions]].
- **Permissioned [[concepts/glossary#amm-automated-market-maker|AMMs]]**: [[infrastructure/uniswap-permissioned-pools|Uniswap v4 permissioned pools]].
- **Shared policy registries**: [[standards/b20|B20]] tokens on Base point each policy scope (transfer sender, receiver and executor, mint receiver, seize-exempt and seize receiver) at a shared Policy Registry of allowlists and blocklists, so one list update applies to every token using it. Every scope defaults to `ALWAYS_ALLOW` until it is bound. The events include `seizeWithMemo`, a deprecated freeze-style `burnBlocked`, pause, a supply cap, and bytes32 memos for reconciliation ([Base updatePolicy](https://docs.base.org/specifications/b20/reference/interfaces/ib20/update-policy); [events](https://docs.base.org/specifications/b20/reference/events)). That is a shared registry of lists, in contrast to [[standards/erc-3643|ERC-3643]], where identity and compliance checks sit in the token's own registries. It also contrasts with Securitize's 12 Nov 2026 comment letter, which asks the SEC to require permissioning in the token itself rather than only in a pool allowlist, with freeze, burn and reissue as the fallback ([Securitize](https://www.sec.gov/comments/S7-2026-32/4927-1134705-4042498.pdf)).

- **Official register split between chain and offchain identity**: in Invesco's IROXX fund, the Ethereum token records plus Superstate's offchain register mapping wallets to holder identity together form the official shareholder register, with allowlisted wallets, freeze, and burn and re-mint for lost keys ([IROXX prospectus](https://www.sec.gov/Archives/edgar/data/205007/000110465926117813/tm2627770d1_485bpos.htm); see [[issuers/superstate-opening-bell|Superstate]]).
- **[[concepts/glossary#oracle|Oracles]]** for a 24/5 underlying traded 24/7: [[infrastructure/chainlink-equity-feeds|Chainlink]].
- **Onchain corporate-action announcements**: a 16 Nov 2026 proposed open standard from Coinbase and [[infrastructure/broadridge|Broadridge]] (Onchain Rights) defines how a token contract can emit a structured announcement — an identifier, a short description and a URI — and link it to a JSON corporate-action document. The document format "uses corporate action vocabulary from ISO 15022 and ISO 20022, with type names from the Broadridge BRx data model." The specs "communicate the action" and "do not establish legal rights, calculate a particular holder's entitlement, determine eligibility, or submit votes and elections." As of 16 Nov 2026 the EIP texts and the canonical schema were listed as not yet published ([Onchain Rights docs](https://www.onchainrights.org/docs); [Broadridge / PR Newswire](https://www.prnewswire.com/news-releases/coinbase-and-broadridge-publish-proposed-standard-for-onchain-shareholder-communications-broadridge-launches-data-oracle-302939893.html)). See [[topics/corporate-actions-and-dividends|corporate actions]].

## Sources
Public originals for the facts on this page.

- <https://docs.robinhood.com/chain/building-with-stock-tokens/>
- <https://docs.ondo.finance/ondo-stocks/overview>
- <https://docs.ondo.finance/api-reference/overview>
- <https://docs.xstocks.fi/developers/multipliers>
- <https://docs.base.org/specifications/b20/reference/interfaces/ib20/update-policy>
- <https://docs.base.org/specifications/b20/reference/events>
- <https://www.sec.gov/comments/S7-2026-32/4927-1134705-4042498.pdf>
- <https://www.onchainrights.org/docs>
- <https://www.prnewswire.com/news-releases/coinbase-and-broadridge-publish-proposed-standard-for-onchain-shareholder-communications-broadridge-launches-data-oracle-302939893.html>
- <https://www.sec.gov/Archives/edgar/data/205007/000110465926117813/tm2627770d1_485bpos.htm>
