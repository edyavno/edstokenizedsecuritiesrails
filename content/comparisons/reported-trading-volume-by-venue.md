---
title: Tokenized stock trading volume by venue (reported figures)
type: comparison
description: Published trading-volume figures for tokenized stocks, by venue and issuer, each dated and sourced. Not like-for-like and not a league table.
tags:
- comparisons
last_checked: '2026-11-18'
sources:
- https://s3.us-east-1.amazonaws.com/static.bitwiseinvestments.com/Research/Bitwise-Staking-Report-Q4-2026.pdf
- https://bitwiseinvestments.com/crypto-market-insights/the-bitwise-staking-report-q4-2026
- https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html
- https://www.payward.com/press-release/xstocks-surpasses-1-billion-aum
- https://www.payward.com/press-release/xstocks-uk-eu-equities
- https://blog.kraken.com/product/xstocks/25-billion-in-total-transaction-volume
- https://www.prnewswire.com/news-releases/ondo-stocks-surpasses-1-billion-in-value-as-ecosystem-surges-302852154.html
- https://ondo.finance/blog/ondo-tokenized-stocks-surpass-one-billion-tvl
- https://backpack.exchange/tokenized-stocks
- https://www.allium.so/reports/most-robinhood-chain-stock-trading-is-outside-nyse-hours
- https://investors.securitize.io/news/news-details/2026/Securitize-Reports-Third-Quarter-2026-Results/default.aspx
- https://defillama.com/protocol/ondo-global-markets
- https://www.imf.org/-/media/files/publications/gfsr/2026/october/english/ch3.pdf
- https://x.com/Ondo/status/2118090005071396987
- https://x.com/tomwanhh/status/2118301097131418094
- https://www.okx.com/en-us/learn/okxice-tsv-launch
- https://www.theblock.co/news/business/2026-11-17-alpaca-says-tokenization-network-tops-10-billion-minting-redemption-volume-442667
---

*In plain English: some venues publish trading volume, but the numbers are not like-for-like and this is not a league table.*

The figures below come from different dates, different product types and different methods. A cumulative total since launch is not a monthly total. DEX-only onchain volume is not the same as a company total that also counts centralized-exchange trading and mint or redemption. Value held (AUM, TVL, or market size) is not volume: the same tokens can change hands many times. Company-reported totals are the issuer's or venue's own claims; third-party analysis (for example Bitwise citing Allium) is not a primary disclosure by the venue; the IMF chapter is an official report but gives market size and trading patterns, not a venue volume table. Synthetic equity perpetuals are listed in a separate section because they are cash-settled contracts, often leveraged, with no share behind the trade.

How venues are built, rather than how much they have reported trading, is in [[comparisons/trading-venue-architectures|Trading venue architectures]].

## What tokenized-stock trading volumes have been published, and by which venues?

Published figures are not like-for-like and are not a league table. The largest dated spot or tokenized-stock prints found are these. [[issuers/robinhood-stock-tokens|Robinhood]] Chain Stock Tokens had \$14.05 billion of issuer-matched DEX volume from 1 Jul to 30 Sep 2026, according to Bitwise's Q4 2026 staking report (Allium data), including \$526 million in July, \$2.21 billion in August and \$11.31 billion in September. Payward said [[issuers/xstocks-backed|xStocks]] cumulative transaction volume across centralized and decentralized venues plus mint and redemption had passed \$45 billion as of 28 Oct 2026 (restated 11 Nov). [[issuers/ondo-global-markets|Ondo]] said Ondo Stocks had processed \$27 billion of cumulative volume across those same kinds of activity as of 14 Aug 2026. [[issuers/backpack|Backpack]] published \$5.3 billion-plus of onchain volume from 12 Jun to 18 Oct 2026, citing Blockworks and Birdeye. Many venues on this wiki have not published a volume series. Synthetic equity perps are listed separately.

| Venue or issuer | Metric | Figure | Period | Source | Source type | Caveat |
|---|---|---|---|---|---|---|
| [[issuers/robinhood-stock-tokens\|Robinhood Chain / Stock Tokens]] | Issuer-matched DEX volume | \$526M (Jul); \$2.21B (Aug); \$11.31B (Sep); \$14.05B Q3 total | 1 Jul–30 Sep 2026 | [Bitwise Q4 2026 Staking Report](https://s3.us-east-1.amazonaws.com/static.bitwiseinvestments.com/Research/Bitwise-Staking-Report-Q4-2026.pdf) pp. 48, 52, citing Allium ([Bitwise Q4 2026 Staking Report](https://s3.us-east-1.amazonaws.com/static.bitwiseinvestments.com/Research/Bitwise-Staking-Report-Q4-2026.pdf)); summary page ([Bitwise](https://bitwiseinvestments.com/crypto-market-insights/the-bitwise-staking-report-q4-2026)). [CNBC](https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html) (21 Oct) cited the same monthly totals. | Third-party analysis (Allium onchain data in a Bitwise report). Verified in the full report. Not a Robinhood primary disclosure. | DEX turnover on Robinhood Chain, not brokerage volume and not value held. Bitwise also gives average daily volume of \$17.0M / \$71.4M / \$377.1M (just over 22x from July to September) and says the priced circulating value was only \$27.9M / \$79.9M / \$160.8M, so the same tokens changed hands often. Pons pools that use Stock Tokens as a reserve are part of the DEX story. An [Allium brief, 11 Sep 2026](https://www.allium.so/reports/most-robinhood-chain-stock-trading-is-outside-nyse-hours) shows that a broad "any pool with a stock token" 30-day total was almost twice a stock-versus-stablecoin-or-ETH measure over a window ending 9 Sep; Bitwise says "issuer-matched" / "priced DEX turnover" but the PDF does not spell out that filter. |
| [[issuers/xstocks-backed\|xStocks]] (ecosystem, not Kraken-only) | Cumulative transaction volume (CEX + DEX + mint/redemption) | Past \$45B | As of 28 Oct 2026; restated 11 Nov 2026 | [Payward, 28 Oct](https://www.payward.com/press-release/xstocks-surpasses-1-billion-aum); [Payward, 11 Nov](https://www.payward.com/press-release/xstocks-uk-eu-equities). The 28 Oct release is the first of these two to state the \$45B mark. | Company-reported | Not a Kraken-only total and not a dated period volume. Earlier company marks: \$25B+ by 19 Feb 2026 ([Kraken blog](https://blog.kraken.com/product/xstocks/25-billion-in-total-transaction-volume)), then defined as CEX + DEX + mint/redemption, of which \$3.5B+ onchain; \$38B as of 18 Aug 2026 ([Kraken](https://blog.kraken.com/product/equities/announcing-us-listed-stock-trading-for-eea-customers)). The \$1.1B AUM in the October and November releases is value held, not volume. |
| [[issuers/ondo-global-markets\|Ondo Stocks]] (issuer, multi-venue) | Cumulative trading volume (CEX + DEX + primary mint/redeem) | \$27B; of which \$18B CEX | As of 14 Aug 2026, since the Sep 2025 launch | [Ondo PR Newswire, 14 Aug 2026](https://www.prnewswire.com/news-releases/ondo-stocks-surpasses-1-billion-in-value-as-ecosystem-surges-302852154.html) | Company-reported | No later official cumulative total was found (Ondo's 27 Oct 2026 blog updates TVL, not this volume total). An Assetera note of 7 Oct 2026 ([Assetera](https://www.assetera.com/media/assetera-x-ondo)) repeats the \$27B figure and should not be treated as a fresh October official print. Ondo's 11 May 2026 blog ([Ondo](https://ondo.finance/blog/ondo-tokenized-stocks-surpass-one-billion-tvl)) had an \$18B cumulative total at the \$1B TVL mark; that earlier overall total is not the same number as the August release's \$18B CEX subset. |
| [[issuers/backpack\|Backpack]] | Cumulative onchain volume | \$5.3B+ | 12 Jun–18 Oct 2026 | [Backpack tokenized-stocks page](https://backpack.exchange/tokenized-stocks), citing Blockworks and Birdeye; figures rounded | Company-published, third-party data | Onchain only. Complements Bitwise's Solana DEX split in the context rows below, which uses a different window and method. |
| [[platforms-venues/bybit\|Bybit]] | Venue xStocks / tokenized-stock volume | Not published | — | No official Bybit aggregate found | — | Lists xStocks; no venue total located. |
| [[platforms-venues/21x\|21X]] | — | Not published | — | — | — | — |
| [[platforms-venues/seturion\|Seturion]] | — | Not published | — | — | — | — |
| [[platforms-venues/prometheum\|Prometheum]] | — | Not published | — | — | — | — |
| [[issuers/securitize\|Securitize Stocks]] | Venue trading volume | Not published | Launched 8 Oct 2026, after Q3 | [Securitize Q3 2026 results, 9 Nov](https://investors.securitize.io/news/news-details/2026/Securitize-Reports-Third-Quarter-2026-Results/default.aspx) | — | Do not use the \$4.3B "Aggregate Transaction Volume" figure as trading volume; see [[#what-we-left-out-and-why|What we left out and why]]. |
| [[issuers/dinari\|Dinari]] | Venue-wide volume | Not published | — | Partner case studies only; no venue total found | — | — |
| JTX | — | Not published | — | — | — | — |
| [[platforms-venues/okxice-tsv\|OKXICE TSV]] | — | Not published | Announced launch beginning 23 Nov 2026; not yet trading as of the 11 Nov announcement | [OKX, 11 Nov 2026](https://www.okx.com/en-us/learn/okxice-tsv-launch); public notices; no volume series found | — | — |
| [[platforms-venues/tsv-llc\|TSV LLC / Tradecraft]] | — | Not published | First CNTN trades announced | Official notices and the CNTN release; no ongoing volume series found | — | — |
| [[platforms-venues/formation-securities\|Formation Securities]] | — | Not published | Not yet a live volume series | Notice only | — | — |
| [[platforms-venues/nasdaq-tokenized-securities\|Nasdaq]] (NETs) | — | Not published | Expected Q2 2027 | — | — | Not live. |
| [[platforms-venues/nyse-ice-tokenized-platform\|NYSE-affiliated platform]] | — | Not published | Subject to approvals | — | — | Not live. |
| [[platforms-venues/bullish\|Bullish Exchange]] | Tokenized BLSH | Not published | First trades 12 Aug 2026 | Company launch materials confirm trades, not a total | — | — |

A dated third-party onchain snapshot, not an official Ondo total: [DefiLlama](https://defillama.com/protocol/ondo-global-markets) showed \$9.622 billion of cumulative DEX volume for Ondo Global Markets when retrieved at about 9:29 AM ET on 11 Nov 2026, using Ethereum and BNB Chain TradeExecuted events plus Solana mint/redeem routed through Jupiter, with \$547.35 million in the prior 30 days. That is a narrower measure than Ondo's \$27 billion CEX+DEX+mint/redeem figure from mid-August, and the dashboard will move.

### Context (not venue totals)

These rows help interpret the table. They should not be added into a ranking.

| Context | Metric | Figure | Period | Source | Source type | Caveat |
|---|---|---|---|---|---|---|
| Solana tokenized-equity DEX (all issuers on that chain) | DEX volume | \$6.93B in Q3, up 45% from \$4.77B in Q2; September alone \$4.28B | Q3 2026 | Bitwise report p. 35, Allium ([Bitwise Q4 2026 Staking Report](https://s3.us-east-1.amazonaws.com/static.bitwiseinvestments.com/Research/Bitwise-Staking-Report-Q4-2026.pdf)) | Third-party analysis | Solana DEX only. Bitwise says xStocks accounted for about 50% of that Q3 DEX volume and Backpack about 44%, even though xStocks held about 77% of circulating supply and Backpack about 4%. About 39% of the quarter's Solana DEX volume was during regular US market hours. |
| IMF GFSR Oct 2026, ch. 3 | Market size, not volume; off-hours share | Tokenized stocks about \$2.3B in July 2026; more than 70% Ondo and xStocks; more than 50% of trading outside regular US hours; about 80% of trades smaller than one share | Size as of 31 Jul 2026; trading patterns from a sample of five names on 11 venues | [IMF GFSR Oct 2026, ch. 3](https://www.imf.org/-/media/files/publications/gfsr/2026/october/english/ch3.pdf) | Official | The \$2.3B is value outstanding, not volume. The IMF did not publish a venue volume table. The empirical sample had about \$345M of market value. |
| Alpaca Instant Tokenization Network (mint/redeem layer, incl. xStocks) | Cumulative minting and redemption, not trading | More than \$10B | Cumulative, just over a year to 17 Nov 2026 | [The Block](https://www.theblock.co/news/business/2026-11-17-alpaca-says-tokenization-network-tops-10-billion-minting-redemption-volume-442667) | Company claim via news | Alpaca co-founder Hitoshi Harada's own figure. It excludes secondary-market trades, which he said were much larger. Not venue volume; do not add to the table. |
| Ondo, election night | Relative volume | "About 10x its usual volume after the closing bell" | 4 Nov 2026 | [Ondo on X](https://x.com/Ondo/status/2118090005071396987), already noted on the [[issuers/ondo-global-markets|Ondo]] page | Company-reported | No absolute dollar figure. |

## Synthetic equity perps (not spot tokens)

These are cash-settled perpetual futures on a stock or index price. No share is held, and notionals are often leveraged, so they are not comparable to spot tokenized-stock volume and are not added to the figures above. See [[platforms-venues/hyperliquid-equity-perps|Equity perps (Hyperliquid HIP-3, Ostium)]].

| Venue | Metric | Figure | Period | Source | Source type | Caveat |
|---|---|---|---|---|---|---|
| trade[XYZ] on Hyperliquid HIP-3 | HIP-3 deployer volume (all XYZ markets) | \$258.84B, 98.9% of HIP-3 | Q3 2026 | Bitwise report p. 42, Allium ([Bitwise Q4 2026 Staking Report](https://s3.us-east-1.amazonaws.com/static.bitwiseinvestments.com/Research/Bitwise-Staking-Report-Q4-2026.pdf)) | Third-party analysis | All XYZ markets (equities, indices, commodities, FX and others), not equity-only. |
| Five largest equity-related HIP-3 markets | Combined Q3 volume | \$121.8B (46.6% of all HIP-3) | Q3 2026 | Bitwise report p. 42 ([Bitwise Q4 2026 Staking Report](https://s3.us-east-1.amazonaws.com/static.bitwiseinvestments.com/Research/Bitwise-Staking-Report-Q4-2026.pdf)) | Third-party analysis | Includes index perps (XYZ100 \$23.48B, SP500 \$19.95B) and single-name perps (SKHX \$38.78B, SNDK \$21.90B, MU \$17.72B). Crude oil is among the six largest HIP-3 markets by volume in the same table but is not equity. |
| Hyperliquid (platform-wide) | Non-crypto share of perps volume | 36.5% | Q3 2026 | Bitwise summary page and full report ([Bitwise](https://bitwiseinvestments.com/crypto-market-insights/the-bitwise-staking-report-q4-2026), [Bitwise Q4 2026 Staking Report](https://s3.us-east-1.amazonaws.com/static.bitwiseinvestments.com/Research/Bitwise-Staking-Report-Q4-2026.pdf)) | Third-party analysis | Includes commodities, not only stocks. Do not treat as tokenized-stock volume. |
| trade[XYZ] S&P 500 perp | Overnight session volume | \$458M, 5.7x a normal night | 4–5 Nov 2026 | [Tom Wan on X](https://x.com/tomwanhh/status/2118301097131418094), already noted on the [[platforms-venues/hyperliquid-equity-perps|Hyperliquid]] page | Third-party, unverified | Single session; remains unverified against a primary venue disclosure. |
| [[platforms-venues/hyperliquid-equity-perps\|Ostium]] | Venue-published equity-perp volume | Not published | — | Live third-party dashboards exist; no dated, equity-only official Ostium total was used | — | — |

## What we left out and why

- **Securitize's \$4.3 billion "Aggregate Transaction Volume" for Q3 2026** is defined in the 9 Nov 2026 earnings release as investments, redemptions, dividends and cross-chain movements of assets issued on Securitize's platform, not venue trading volume. The same footnote revised the Q2 2026 figure to \$4.4 billion from a previously reported \$5.3 billion. Securitize Stocks launched on 8 Oct 2026, after the quarter closed ([Securitize Q3 2026 results, 9 Nov](https://investors.securitize.io/news/news-details/2026/Securitize-Reports-Third-Quarter-2026-Results/default.aspx)).
- **An undated "\$47B+" transaction-volume figure on xstocks.fi**, seen on 11 Nov 2026, is not used. Dated Payward releases still said cumulative volume had passed \$45 billion as of 28 Oct and restated that mark on 11 Nov ([Payward, 28 Oct](https://www.payward.com/press-release/xstocks-surpasses-1-billion-aum), [Payward](https://www.payward.com/press-release/xstocks-uk-eu-equities)).
- **24-hour venue rankings that mix stock perps, index perps and spot tokenized stocks** (for example aggregator pages that put leveraged perp notional next to spot xStocks) are not used as wiki voice.
- **Live, undated dashboard prints** are not used as current official totals, other than the dated DefiLlama Ondo snapshot above ([DefiLlama](https://defillama.com/protocol/ondo-global-markets)). rwa.xyz monthly *transfer* volume, even if captured, would not be the same as trading volume.
- **Value held is not volume:** IMF tokenized-stock market size of about \$2.3B ([IMF GFSR Oct 2026, ch. 3](https://www.imf.org/-/media/files/publications/gfsr/2026/october/english/ch3.pdf)), Payward xStocks AUM, Ondo TVL, Bitquery holdings estimates, rwa.xyz tokenized Treasuries, and Broadridge's tokenized-repo daily settlement flow are all out of scope for this table.
- **No Kraken-only volume** was found; Payward's xStocks totals cover the wider framework.
- **No summed ranking of spot tokens plus equity perps** is given, because the units are not comparable.

*Reference information only, not legal or investment advice.*

## Sources
Public originals for the facts on this page.

- <https://s3.us-east-1.amazonaws.com/static.bitwiseinvestments.com/Research/Bitwise-Staking-Report-Q4-2026.pdf>
- <https://bitwiseinvestments.com/crypto-market-insights/the-bitwise-staking-report-q4-2026>
- <https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html>
- <https://www.payward.com/press-release/xstocks-surpasses-1-billion-aum>
- <https://www.payward.com/press-release/xstocks-uk-eu-equities>
- <https://blog.kraken.com/product/xstocks/25-billion-in-total-transaction-volume>
- <https://www.prnewswire.com/news-releases/ondo-stocks-surpasses-1-billion-in-value-as-ecosystem-surges-302852154.html>
- <https://ondo.finance/blog/ondo-tokenized-stocks-surpass-one-billion-tvl>
- <https://backpack.exchange/tokenized-stocks>
- <https://www.allium.so/reports/most-robinhood-chain-stock-trading-is-outside-nyse-hours>
- <https://investors.securitize.io/news/news-details/2026/Securitize-Reports-Third-Quarter-2026-Results/default.aspx>
- <https://defillama.com/protocol/ondo-global-markets>
- <https://www.imf.org/-/media/files/publications/gfsr/2026/october/english/ch3.pdf>
- <https://www.theblock.co/news/business/2026-11-17-alpaca-says-tokenization-network-tops-10-billion-minting-redemption-volume-442667>
