---
name: Equity perps (Hyperliquid HIP-3, Ostium)
jurisdiction: unknown
product_name: HIP-3 builder-deployed perpetuals (e.g. trade[XYZ] 'xyz'); Ostium perpetual instruments
structure: Synthetic perpetual futures on equities and indices; no share custody
chains:
- Hyperliquid (HyperCore)
- Arbitrum (Ostium)
who_can_buy: unknown
num_assets: unknown
structure_short: Synthetic perps
who_can_buy_short: unknown
last_checked: '2026-11-11'
title: Equity perps (Hyperliquid HIP-3, Ostium)
tags:
- platforms-venues
type: venue
chain:
- Hyperliquid (HyperCore)
- Arbitrum (Ostium)
status: Live (docs read 9 Nov 2026)
last_updated: '2026-11-11'
description: 'In plain English: these are bets on a stock or index price, settled in stablecoins. You never own the share, and no one holds a share for you.'
---

> [!info] At a glance
> **Type:** venue  
> **Jurisdiction:** unknown  
> **Chain:** Hyperliquid (HyperCore), Arbitrum (Ostium)  
> **Status:** Live (docs read 9 Nov 2026)  
> **Last updated:** 2026-11-11  

| Field | Value |
|---|---|
| name | Equity perps (Hyperliquid HIP-3, Ostium) |
| jurisdiction | unknown |
| product_name | HIP-3 builder-deployed perpetuals (e.g. trade[XYZ] 'xyz'); Ostium perpetual instruments |
| structure | Synthetic perpetual futures on equities and indices; no share custody |
| chains | Hyperliquid (HyperCore), Arbitrum (Ostium) |
| who_can_buy | unknown |
| num_assets | unknown |

*In plain English: these are bets on a stock or index price, settled in stablecoins. You never own the share, and no one holds a share for you.*

Perpetual futures ("perps") give price exposure without any share behind them: a [[concepts/glossary#synthetic-wrapper|synthetic]] model in the [[concepts/legal-taxonomy|legal taxonomy]]. Two onchain designs:

## Hyperliquid HIP-3
- Builders deploy their own perp markets on HyperCore. The deployer defines the market (including the [[concepts/glossary#oracle|oracle]]) and operates it: it sets oracle prices and leverage limits and can settle the market with `haltTrading` ([Hyperliquid docs](https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-3-builder-deployed-perpetuals)).
- HyperCore supplies the order book, margining and liquidation. Deployers must stake 500k HYPE on mainnet, and validators can slash that stake for malicious or irregular operation ([Hyperliquid docs](https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-3-builder-deployed-perpetuals)).
- Example: trade[XYZ]'s `xyz` deployment sets listings, oracle sources, leverage and trading sessions; HyperCore runs matching, margin, liquidations, funding and settlement onchain; trade[XYZ] relayers publish oracle and mark prices about every three seconds ([trade[XYZ] docs](https://docs.trade.xyz/architecture)).

## Ostium
- Perps on stocks, ETFs, indices, commodities, FX and crypto that settle in USDC on Arbitrum ([Ostium docs](https://docs.ostium.com/protocol/how-ostium-works)).
- Ostium's in-house consensus oracle has several publishers pull market feeds and sign prices, which are fetched when a trader opens a position ([Ostium docs](https://docs.ostium.com/protocol/how-ostium-works)).
- Directional flow is hedged offchain with institutional partners. A daily settlement run moves USDC between the onchain vault and the offchain hedging book ([Ostium docs](https://docs.ostium.com/protocol/how-ostium-works)).

## Off-hours demand (attributed)
Around the US election results (4-5 Nov 2026), analyst Tom Wan reported that the trade[XYZ] S&P 500 perp on Hyperliquid did \$458M of volume overnight, 5.7x a normal night ([Tom Wan on X](https://x.com/tomwanhh/status/2118301097131418094), third-party figure, unverified). For tokenized stocks, Ondo said Ondo Stocks traded "about 10x its usual volume after the closing bell" on election night ([Ondo on X](https://x.com/Ondo/status/2118090005071396987), company-reported).

See [[build/trading-reference-architecture#how-venues-match-and-settle|How venues match and settle]] and [[comparisons/trading-venue-architectures|Trading venue architectures]]. Dated, attributed volume figures for trade[XYZ] and other equity perps — which are notional and not comparable to spot tokenized-stock volume — are in [[comparisons/reported-trading-volume-by-venue#synthetic-equity-perps-not-spot-tokens|Reported trading volume by venue]].

## What this means for holders
- A perp position is a contract on price, not a share: no shareholder vote and no redemption into stock ([Hyperliquid docs](https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-3-builder-deployed-perpetuals); [Ostium docs](https://docs.ostium.com/protocol/how-ostium-works)).
- Prices come from the deployer's or protocol's oracle, not from the stock exchange directly ([Hyperliquid docs](https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-3-builder-deployed-perpetuals); [Ostium docs](https://docs.ostium.com/protocol/how-ostium-works)).
- Reference information only, not investment advice.

## Sources
Public originals for the facts on this page.

- <https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-3-builder-deployed-perpetuals>
- <https://docs.trade.xyz/architecture>
- <https://docs.ostium.com/protocol/how-ostium-works>
- <https://s3.us-east-1.amazonaws.com/static.bitwiseinvestments.com/Research/Bitwise-Staking-Report-Q4-2026.pdf>

*Last checked 2026-11-11. Headline fields only; `unknown` means not yet verified from a source.*
