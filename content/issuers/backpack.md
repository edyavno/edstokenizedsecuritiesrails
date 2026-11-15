---
name: Backpack Securities
jurisdiction: unknown
product_name: Backpack Securities stocks and tokenized securities
structure: NY UCC Article 8 security entitlements; selected names also tokenized 1:1 on Solana as separate instruments
chains: Solana
who_can_buy: Eligible verified Backpack users in supported regions; not US, UK, UAE, Japan or Backpack EU
num_assets: unknown
structure_short: Entitlements + 1:1 tokens
who_can_buy_short: Non-US eligible users
last_checked: '2026-11-09'
title: Backpack Securities
tags:
- issuers
type: issuer
chain: Solana
status: Live; tokens accepted as Kamino collateral from 4 Nov 2026
last_updated: '2026-11-09'
description: 'In plain English: on Backpack you own a real share through a brokerage-style entitlement.'
---

> [!info] At a glance
> **Type:** issuer  
> **Jurisdiction:** unknown  
> **Chain:** Solana  
> **Status:** Live; tokens accepted as Kamino collateral from 4 Nov 2026  
> **Last updated:** 2026-11-09  

| Field | Value |
|---|---|
| name | Backpack Securities |
| jurisdiction | unknown |
| product_name | Backpack Securities stocks and tokenized securities |
| structure | NY UCC Article 8 security entitlements; selected names also tokenized 1:1 on Solana as separate instruments |
| chains | Solana |
| who_can_buy | Eligible verified Backpack users in supported regions; not US, UK, UAE, Japan or Backpack EU |
| num_assets | unknown |

*In plain English: on Backpack you own a real share through a brokerage-style entitlement. You can also turn selected stocks into a separate 1:1 token on Solana and back again.*

Backpack Securities holds customers' US stocks and ETFs as [[concepts/glossary#security-entitlement|security entitlements]] under New York UCC Article 8, with cash dividends, corporate actions and ACATS/DTCC transfers ([Backpack](https://learn.backpack.exchange/articles/what-is-backpack-securities)). The underlying holdings are cleared and custodied by RQD Clearing, LLC and Atomic Vault Securities, LLC, per Backpack Securities ([Business Wire](https://www.businesswire.com/news/home/20261104930970/en/Kamino-and-Backpack-Securities-Expand-Credit-for-Tokenized-U.S.-Equities)).

## Two instruments
- **Entitlement:** what you own when you buy a stock in the Backpack account ([Backpack](https://learn.backpack.exchange/articles/what-is-backpack-securities)).
- **Token:** selected stocks can be tokenized 1:1 on [[concepts/glossary#solana|Solana]] (with Sunrise) and redeemed 1:1 by depositing the token back to a Backpack account. Backpack says the tokens "are distinct instruments from the security entitlement itself" ([Backpack](https://learn.backpack.exchange/articles/what-is-backpack-securities)).
- Selected equities trade 24/7, including weekends and holidays, with USD settlement; off-hours liquidity may differ ([Backpack](https://learn.backpack.exchange/articles/what-is-backpack-securities)).

## Where the tokens are used
- **Collateral:** since 4 Nov 2026 the tokens (starting with MU, SKHY, SPCX and SNDK) can back USDC loans in an isolated Backpack Market on Kamino, with liquidation risk even when the underlying market is closed ([Business Wire](https://www.businesswire.com/news/home/20261104930970/en/Kamino-and-Backpack-Securities-Expand-Credit-for-Tokenized-U.S.-Equities)).
- **RFQ quotes:** Backpack is named among the issuers quoting into JTX's request-for-quote swaps on Solana ([SolanaFloor](https://solanafloor.com/news/jtx-equities-discoverability-rfq-execution-1650-tokenized-stocks), Jito-affiliated outlet).

Compare with SPV-note and wrapper models in [[comparisons/implementations-by-model|Implementations by model]] and [[comparisons/trading-venue-architectures|Trading venue architectures]].

## What this means for holders
- In the account you hold an Article 8 entitlement; the onchain token is a separate instrument redeemable 1:1 ([Backpack](https://learn.backpack.exchange/articles/what-is-backpack-securities)).
- Not available in the US, UK, UAE, Japan or Backpack EU ([Backpack](https://learn.backpack.exchange/articles/what-is-backpack-securities)).
- Borrowing against the token on Kamino can lead to liquidation, including when US markets are shut ([Business Wire](https://www.businesswire.com/news/home/20261104930970/en/Kamino-and-Backpack-Securities-Expand-Credit-for-Tokenized-U.S.-Equities)).
- Reference information only, not investment advice.

## Sources
Public originals for the facts on this page.

- <https://learn.backpack.exchange/articles/what-is-backpack-securities>
- <https://www.businesswire.com/news/home/20261104930970/en/Kamino-and-Backpack-Securities-Expand-Credit-for-Tokenized-U.S.-Equities>
- <https://solanafloor.com/news/jtx-equities-discoverability-rfq-execution-1650-tokenized-stocks>

*Last checked 2026-11-09. Headline fields only; `unknown` means not yet verified from a source.*
