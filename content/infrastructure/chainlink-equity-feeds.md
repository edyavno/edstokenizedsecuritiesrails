---
name: Chainlink tokenized equity feeds
jurisdiction: unknown
product_name: Tokenized Equity Feeds; Data Streams
structure: Oracle
chains: unknown
who_can_buy: n/a
num_assets: unknown
structure_short: Oracle / price feeds
who_can_buy_short: n/a
last_checked: '2026-11-20'
title: Chainlink tokenized equity feeds
tags:
- infrastructure
type: infrastructure
chain: unknown
status: live
last_updated: '2026-11-20'
description: Chainlink supplies stock prices to blockchains so apps can value stock tokens, including outside market hours.
---

> [!info] At a glance
> **Type:** infrastructure  
> **Jurisdiction:** unknown  
> **Chain:** unknown  
> **Status:** live  
> **Last updated:** 2026-11-20  

| Field | Value |
|---|---|
| name | Chainlink tokenized equity feeds |
| jurisdiction | unknown |
| product_name | Tokenized Equity Feeds; Data Streams |
| structure | Oracle |
| chains | unknown |
| who_can_buy | n/a |
| num_assets | unknown |

*In plain English: Chainlink supplies stock prices to blockchains so apps can value stock tokens, including outside market hours.*

Feeds combine the underlying 24/5 equity price with the issuer's [[concepts/glossary#multiplier|multiplier]] and respect issuer-controlled oracle pauses; issuer-specific pages exist for Coinbase [[concepts/glossary#b20|B20]] and Robinhood ([Chainlink](https://docs.chain.link/data-feeds/tokenized-equity-feeds)).

Data Streams price regular, extended and overnight sessions with market-status flags and staleness checks ([Chainlink](https://docs.chain.link/data-streams/rwa-streams/24-5-us-equities-user-guide)). For splits: pause the feed, stage the new multiplier, unpause; the issuer coordinates timing and Chainlink provides no corporate-action calendar ([Chainlink](https://docs.chain.link/data-streams/tokenized-asset-streams/handling-stock-splits)).

In an 11 Nov 2026 comment letter on the [[concepts/innovation-exemption|Innovation Exemption]], Chainlink Labs proposed FAQs and nonbinding principles on comparable TSV trade reports, corporate-action reconciliation across systems, and how TSVs should assess external data used for pricing and controls. Chainlink is a vendor of these services; the letter is advocacy, not a product specification ([Chainlink Labs](https://www.sec.gov/comments/4-927/4927-1133160-4036827.pdf)).

Separately, on 19 Nov 2026 Chainlink said UBS used the Chainlink Runtime Environment (CRE) in a production pilot to automate lifecycle servicing for a tokenized structured note on Ethereum, including real-time visibility of coupon entitlements, barrier proximity and product status. This is a structured note, not a stock-token price feed. Settlement using UBS digital money is described as future automation, not a live feature ([Chainlink / PR Newswire](https://www.prnewswire.com/news-releases/chainlink-develops-blockchain-solution-with-ubs-for-the-2-trillion-global-structured-products-market-302944470.html)).

## Sources
Public originals for the facts on this page.

- <https://docs.chain.link/data-feeds/tokenized-equity-feeds>
- <https://docs.chain.link/data-streams/rwa-streams/24-5-us-equities-user-guide>
- <https://docs.chain.link/data-streams/tokenized-asset-streams/handling-stock-splits>
- <https://www.sec.gov/comments/4-927/4927-1133160-4036827.pdf>
- <https://www.prnewswire.com/news-releases/chainlink-develops-blockchain-solution-with-ubs-for-the-2-trillion-global-structured-products-market-302944470.html>

*Last checked 2026-11-20. Headline fields only; `unknown` means not yet verified from a source.*
