---
name: Robinhood Stock Tokens
jurisdiction: Jersey
product_name: Stock Tokens
structure: Debt securities
chains:
- Robinhood Chain
who_can_buy: Not US, Canada, UK, Switzerland; other restrictions apply
num_assets: 190+ (Robinhood)
structure_short: Tokenised debt securities
who_can_buy_short: Non-US; excl. CA, UK, CH
last_checked: '2026-11-11'
title: Robinhood Stock Tokens
tags:
- issuers
type: issuer
chain:
- Robinhood Chain
status: live
last_updated: '2026-11-11'
description: 'In plain English: Robinhood''s stock tokens are debt securities that track a stock''s price. They give you no shareholder rights.'
---

> [!info] At a glance
> **Type:** issuer  
> **Jurisdiction:** Jersey  
> **Chain:** Robinhood Chain  
> **Status:** live  
> **Last updated:** 2026-11-11  

| Field | Value |
|---|---|
| name | Robinhood Stock Tokens |
| jurisdiction | Jersey |
| product_name | Stock Tokens |
| structure | Debt securities |
| chains | Robinhood Chain |
| who_can_buy | Not US, Canada, UK, Switzerland; other restrictions apply |
| num_assets | 190+ (Robinhood) |

*In plain English: Robinhood's stock tokens are debt securities that track a stock's price. They give you no shareholder rights.*

Stock Tokens are tokenised debt securities issued by Robinhood Assets (Jersey) Limited under a [base prospectus](https://cdn.robinhood.com/assets/robinhood/legal/rhj_base_prospectus.pdf); they give economic exposure without rights in the underlying ([docs](https://docs.robinhood.com/chain/stock-tokens/); [product page](https://robinhood.com/rhj/stocktokens/)). Separately, EU **Classic** Stock Tokens are MiFID II derivatives ([FAQ](https://robinhood.com/eu/en/support/articles/stock-tokens-faq/)).

On Robinhood Chain, trading at launch is via [[concepts/glossary#rfq|RFQ]] plus [[concepts/glossary#amm-automated-market-maker|AMMs]] and Lighter, with onchain price feeds ([Robinhood](https://docs.robinhood.com/chain/building-with-stock-tokens/)). Mainnet announcement: [Arbitrum](https://blog.arbitrum.io/robinhood-chain-mainnet/).

## Adoption
Bitwise's Q4 2026 staking report says issuer-matched DEX volume in Stock Tokens on Robinhood Chain was \$526 million in July, \$2.21 billion in August and \$11.31 billion in September, or \$14.05 billion from 1 Jul to 30 Sep 2026, and that average daily volume rose just over 22x over those three months. The chain generated \$51.11 million in fees in that first quarter. Those monthly dollar figures are in the full report, which cites Allium; they are not on Bitwise's public summary page, and they match what [CNBC](https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html) cited on 21 Oct 2026. This is third-party analysis, not a Robinhood primary disclosure ([Bitwise full report](https://s3.us-east-1.amazonaws.com/static.bitwiseinvestments.com/Research/Bitwise-Staking-Report-Q4-2026.pdf), raw/244; [summary page](https://bitwiseinvestments.com/crypto-market-insights/the-bitwise-staking-report-q4-2026), raw/107; [CNBC](https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html), raw/96). Dated volume figures for this and other venues are in [[comparisons/reported-trading-volume-by-venue|Reported trading volume by venue]].

On 14 Sep 2026 Robinhood's CEO said in-kind redemption and voting are coming for Robinhood Stock Tokens ([CoinDesk](https://www.coindesk.com/business/2026/09/14/robinhood-plans-share-redemptions-voting-rights-for-stock-tokens-after-criticism), news). The current base prospectus, dated 25 June 2026, still excludes physical delivery of the underlying: at redemption, investors receive a cash amount in the specified currency ([base prospectus](https://cdn.robinhood.com/assets/robinhood/legal/rhj_base_prospectus.pdf), FAQ 3.10). Direct issuer redemption for ordinary holders is only available in limited no-authorised-participant or issuer-notice cases, plus KYC/AML.

Since 27 Oct 2026, 11 Robinhood Stock Tokens (e.g. NVDArh) have Uniswap v4 StablePair pools against the matching [[issuers/ondo-global-markets|Ondo]] token on Robinhood Chain. Ondo notes that when Robinhood's mint and redeem window is closed, Stock Tokens keep trading onchain but supply can't expand and holders can't redeem, which can cause price gaps; the pools give an exit through Ondo's 24/7 redemption ([Ondo](https://ondo.finance/blog/ondo-stocks-live-on-robinhood-chain-and-uniswap), issuer blog).

## What this means for holders
- Robinhood Stock Tokens are tokenised debt securities from Robinhood Assets Jersey: you get economic exposure to the stock, with no rights in the underlying share ([Robinhood](https://robinhood.com/rhj/stocktokens/); [docs](https://docs.robinhood.com/chain/stock-tokens/)). Redemption is for cash only; physical delivery of the underlying is excluded ([base prospectus, 25 June 2026](https://cdn.robinhood.com/assets/robinhood/legal/rhj_base_prospectus.pdf)). Ordinary holders generally sell on the secondary market.
- In the EU, Classic Stock Tokens are a separate product: MiFID II derivative contracts with Robinhood Europe. They cannot be redeemed for shares; you sell them back to Robinhood Europe in the app for euros (0.10% FX fee, €1 minimum) ([KID, 1 July 2026](https://cdn.robinhood.com/assets/robinhood/legal/stock_tokens_kid_eu.pdf); [Robinhood EU FAQ](https://robinhood.com/eu/en/support/articles/stock-tokens-faq/)).
- Not offered to US persons ([Robinhood](https://robinhood.com/rhj/stocktokens/)).

*Reference information only, not investment advice.*

## Sources
Public originals for the facts on this page.

- <https://cdn.robinhood.com/assets/robinhood/legal/stock_tokens_kid_eu.pdf>
- <https://bitwiseinvestments.com/crypto-market-insights/the-bitwise-staking-report-q4-2026>
- <https://s3.us-east-1.amazonaws.com/static.bitwiseinvestments.com/Research/Bitwise-Staking-Report-Q4-2026.pdf>
- <https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html>
- <https://docs.robinhood.com/chain/stock-tokens/>
- <https://cdn.robinhood.com/assets/robinhood/legal/rhj_base_prospectus.pdf>
- <https://robinhood.com/rhj/stocktokens/>
- <https://robinhood.com/eu/en/support/articles/stock-tokens-faq/>
- <https://docs.robinhood.com/chain/building-with-stock-tokens/>
- <https://blog.arbitrum.io/robinhood-chain-mainnet/>
- <https://ondo.finance/blog/ondo-stocks-live-on-robinhood-chain-and-uniswap>

*Last checked 2026-11-11. Headline fields only; `unknown` means not yet verified from a source.*
