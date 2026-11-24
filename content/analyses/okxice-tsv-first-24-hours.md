---
title: 'OKXICE TSV''s first 24 hours: $2.55 million traded across six tokenized stocks'
question: How much traded in OKXICE's first 24 hours?
status: reviewed
author: human-curated, LLM-assisted
date: 2026-11-24
sources:
- https://www.okx.com/okxicetsv
- https://www.okx.com/en-us/learn/okxice-tsv-launch-going-live
- https://web3.okx.com/onchainos/dev-docs/market/onchaindata-tsv-reference
- https://web3.okx.com/onchainos/dev-docs/market/onchaindata-tsv-asset-list
- https://web3.okx.com/onchainos/dev-docs/market/onchaindata-tsv-transaction-list
- https://web3.okx.com/onchainos/dev-docs/market/onchaindata-tsv-daily-statistics
- https://web3.okx.com/api/v6/explorer/tsv/asset-list
- https://web3.okx.com/api/v6/explorer/tsv/transaction-list
- https://web3.okx.com/api/v6/explorer/tsv/daily-statistics
- https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.20.pdf
- https://www.oklink.com/x-layer/address/0xc58d2bf7ad7cb023760e767e9050be3f15cad686
- https://www.oklink.com/x-layer/address/0x7ff4b3acd0a9f7c3f1bcb650f00c8b7bd8d18656
- https://www.oklink.com/x-layer/address/0x985b0a4f05ffd79a6d612076272ab8b1275f8533
- https://www.oklink.com/x-layer/address/0x1f61eb055947f49dbf4ff1a532e6bd74c18123a2
- https://www.oklink.com/x-layer/address/0x0000000071727de22e5e9d8baf0edac6f37da032
- https://finance.yahoo.com/quote/COIN/
- https://finance.yahoo.com/quote/MSTR/
- https://finance.yahoo.com/quote/HOOD/
- https://finance.yahoo.com/quote/CRCL/
- https://finance.yahoo.com/quote/BTGO/
- https://finance.yahoo.com/quote/SECZ/
tags:
- analyses
last_checked: '2026-11-24'
description: In the first 24 hours after its 23 Nov 2026 noon ET launch, OKXICE recorded 3,314 trades worth about 2.55 million dollars across six tokenized stocks.
---

In the first 24 hours after its 23 Nov 2026 noon ET launch, OKXICE recorded 3,314 trades worth about 2.55 million dollars across six tokenized stocks. Sells outnumbered buys. Circle (CRCL) and Robinhood (HOOD) made up about two-thirds of the dollars, and just over half the dollar volume traded outside regular U.S. market hours. This page is a first look at that window, from the venue's public data and from public chain records. See [[platforms-venues/okxice-tsv|OKXICE TSV]] for how the venue is built.

> [!info] At a glance
> **3,314 trades**, worth about **\$2.55 million** (\$2,546,330.59), in the 24 hours from noon ET on 23 Nov 2026 to noon ET on 24 Nov.
> **Average trade:** about \$768.
> **Six stocks**, all versus USDC. CRCL and HOOD were about two-thirds of the dollars.
> **More selling than buying:** 1,948 sells vs 1,366 buys (59% of trades, 58% of dollars).
> **About 54% of the dollars** traded outside regular U.S. hours (pre-market, after hours and overnight).
> **About \$1.22 million** sat in the six pools at Monday midnight EST. That official figure is for the calendar day, not the same 24-hour window.

## How much traded in OKXICE's first 24 hours?

3,314 trades, worth \$2,546,330.59, across 60,345.96 shares, from noon ET on Monday 23 Nov 2026 to noon ET on Tuesday 24 Nov. The average trade was \$768.36. These figures are from the venue's public transaction list, pulled around 12:30 PM ET on 24 Nov 2026 ([transaction-list API](https://web3.okx.com/api/v6/explorer/tsv/transaction-list); [API docs](https://web3.okx.com/onchainos/dev-docs/market/onchaindata-tsv-transaction-list)).

[[platforms-venues/okxice-tsv|OKXICE TSV]] is OKX's tokenized-stock venue on X Layer, opened at noon ET on 23 Nov 2026 for eligible U.S. customers ([OKX launch post](https://www.okx.com/en-us/learn/okxice-tsv-launch-going-live)). Each of the six launch stocks trades against [[concepts/glossary#stablecoin|USDC]] in a [[concepts/glossary#permissioned-pool|permissioned]] [[concepts/glossary#amm-automated-market-maker|AMM]] pool built with [[concepts/glossary#uniswap-v4-hooks|Uniswap v4 hooks]]. The venue publishes its trades through a free public API with no login ([OKX landing page](https://www.okx.com/okxicetsv), [TSV API reference](https://web3.okx.com/onchainos/dev-docs/market/onchaindata-tsv-reference)).

| Metric | First 24 hours (Mon 12:00 PM – Tue 12:00 PM ET) |
|---|---|
| Trades | 3,314 |
| Buys / sells (by count) | 1,366 / 1,948 (41% / 59%) |
| Shares traded | 60,345.96 |
| Dollar volume (price × shares) | \$2,546,330.59 |
| Buy / sell dollars | \$1,059,048.73 / \$1,487,281.86 |
| Average trade | \$768.36 |
| Pool fee on every trade in this pull | 20 bps (0.2%) |

Dollar volume is our calculation (price × shares for each fill). The API gives price and share quantity, not a dollar total.

The 20 bps figure is the liquidity-pool fee shown on every fill in this pull (`feePercent` of 0.2%). The published fee schedule on [okx.com/okxicetsv](https://www.okx.com/okxicetsv) is 30 bps in total: that 0.2% pool fee plus a 0.1% OKXICE service fee, with gas waived. The service fee is not broken out on each fill.

**Outside this 24-hour window, and unexplained in the public data:**

- **Before the announced noon launch on Monday** (from 12:01 AM ET to 11:59 AM ET): 992 trades, about \$1.25 million (\$1,247,653.73). Why those trades happened before noon is **unknown**.
- **After Tuesday noon** (through about 12:30 PM ET, when we pulled the data): 176 trades, about \$106,531.

## Which tokenized stocks traded most on OKXICE?

Circle (CRCL) had the most dollar volume, about \$948,000, or 37.2% of the total. Robinhood (HOOD) was next, about \$751,000, or 29.5%. Together they were about two-thirds of the dollars. Strategy (MSTR) had the most trades, 1,097, but they were smaller.

<a href="/diagrams/analyses/okxice-first-24h-volume-by-stock-2026-11-24.png" class="tap-enlarge" title="Open full size"><img src="/diagrams/analyses/okxice-first-24h-volume-by-stock-2026-11-24-1200.webp" alt="Horizontal bar chart of dollar volume in OKXICE's first 24 hours, one bar per stock, each bar split into buys (teal) and sells (orange). CRCL $947,614.14 (37.2%), HOOD $750,687.86 (29.5%), MSTR $471,040.02 (18.5%), COIN $289,336.34 (11.4%), BTGO $79,058.38 (3.1%), SECZ $8,593.86 (0.3%). Sells are the larger part of the four biggest bars." width="1200" height="660" loading="lazy" style="width:100%;height:auto"></a>

CRCL and HOOD were about two-thirds of the dollars. Sells (orange) outweighed buys (teal) on the four largest stocks.

The six names are the Tokenized NMS Stocks listed for launch in the 20 Nov 2026 notice, each paired with USDC and tokenized by [[issuers/securitize|Securitize]] Markets: Coinbase (COIN), Securitize (SECZ), Strategy (MSTR), BitGo (BTGO), Robinhood (HOOD) and Circle (CRCL) ([OKXICE notice, 20 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.20.pdf)). The public asset list pulled with the trades still showed only those six USDC pools ([asset-list API](https://web3.okx.com/api/v6/explorer/tsv/asset-list)).

| Stock | Trades | Shares | Dollar volume | Share of $ | VWAP | Sell share of $ |
|---|---|---|---|---|---|---|
| CRCL | 789 | 18,821.36 | \$947,614.14 | 37.2% | \$50.35 | 59.2% |
| HOOD | 680 | 11,368.86 | \$750,687.86 | 29.5% | \$66.03 | 58.1% |
| MSTR | 1,097 | 5,724.37 | \$471,040.02 | 18.5% | \$82.29 | 58.8% |
| COIN | 618 | 2,718.04 | \$289,336.34 | 11.4% | \$106.45 | 58.8% |
| BTGO | 98 | 20,511.00 | \$79,058.38 | 3.1% | \$3.85 | 49.9% |
| SECZ | 32 | 1,202.32 | \$8,593.86 | 0.3% | \$7.15 | 42.7% |

VWAP is the volume-weighted average price in this window (dollar volume divided by shares). CRCL also had the largest single fill, about \$29,334. MSTR's trades were frequent but smaller (median fill about \$369, versus about \$878 for CRCL).

## How much OKXICE trading happened outside US market hours?

Just over half the dollars — about 54% — traded outside regular U.S. market hours. Regular hours (9:30 AM–4:00 PM ET) were still the single largest session, at \$1,181,270.81, or 46.4% of the window. Pre-market was 27.0%, overnight 19.4%, and after hours 7.1%.

<a href="/diagrams/analyses/okxice-first-24h-session-split-2026-11-24.png" class="tap-enlarge" title="Open full size"><img src="/diagrams/analyses/okxice-first-24h-session-split-2026-11-24-1200.webp" alt="Horizontal bar chart of dollar volume by U.S. stock-market session in OKXICE's first 24 hours. Regular hours, 9:30 AM to 4:00 PM ET: $1,181,270.81 (46.4%), 1,628 trades. Pre-market, 4:00 to 9:30 AM: $688,772.80 (27.0%), 750 trades. Overnight, 8:00 PM to 4:00 AM: $494,918.71 (19.4%), 721 trades. After hours, 4:00 to 8:00 PM: $181,368.28 (7.1%), 215 trades." width="1200" height="620" loading="lazy" style="width:100%;height:auto"></a>

Regular hours were the largest single session, but the three off-hours sessions together were about 54% of the dollars.

Because this window starts at Monday noon and ends at Tuesday noon, the regular-hours total here is Monday 12:00–4:00 PM ET plus Tuesday 9:30 AM–12:00 PM ET, not two full cash-market sessions.

| Session (ET) | Trades | Dollar volume | Share of $ |
|---|---|---|---|
| Regular hours (9:30 AM–4:00 PM) | 1,628 | \$1,181,270.81 | 46.4% |
| Pre-market (4:00–9:30 AM) | 750 | \$688,772.80 | 27.0% |
| Overnight (8:00 PM–4:00 AM) | 721 | \$494,918.71 | 19.4% |
| After hours (4:00–8:00 PM) | 215 | \$181,368.28 | 7.1% |

The busiest hour was **Tuesday 9:00–10:00 AM ET** (579 trades, \$508,309.15), which covers late pre-market and the U.S. open. The quietest was **Tuesday 2:00–3:00 AM ET** (16 trades, \$14,426.40). Monday evening also picked up around 9:00 PM ET (198 trades, \$119,857.16).

<a href="/diagrams/analyses/okxice-first-24h-hourly-volume-2026-11-24.png" class="tap-enlarge" title="Open full size"><img src="/diagrams/analyses/okxice-first-24h-hourly-volume-2026-11-24-1200.webp" alt="Bar chart of OKXICE dollar volume in each Eastern-time hour from Monday noon to Tuesday noon, 23–24 Nov 2026. Trading continues overnight. The tallest bar is Tuesday 9 to 10 AM ET at about $508,000, covering late pre-market and the U.S. open. The shortest bar is Tuesday 2 to 3 AM ET at about $14,000." width="1200" height="640" loading="lazy" style="width:100%;height:auto"></a>

Trading did not stop overnight. The Tuesday 9:00–10:00 AM bar is the peak; it straddles the U.S. cash-market open.

## Do OKXICE prices track the stock market?

In this window, the pools moved overnight with the stocks' gap down, and during regular and extended hours the median fill for the four most-traded names was within about 0–30 basis points of the matching 30-minute Yahoo Finance bar. There is no overnight reference price in that source, so a like-for-like overnight comparison is **unknown**.

All four of the most-traded stocks — COIN, MSTR, HOOD and CRCL — fell from Monday's close to Tuesday's open. Volume-weighted prices on OKXICE, compared with the Yahoo Finance daily open and close ([COIN](https://finance.yahoo.com/quote/COIN/), [MSTR](https://finance.yahoo.com/quote/MSTR/), [HOOD](https://finance.yahoo.com/quote/HOOD/), [CRCL](https://finance.yahoo.com/quote/CRCL/)):

| Stock | Mon close | Tue open | Overnight VWAP (8:00 PM–4:00 AM) | Pre-market VWAP (4:00–9:30 AM) |
|---|---|---|---|---|
| COIN | \$108.78 | \$107.49 | \$107.46 (−1.2% vs close) | \$105.93 (−1.5% vs open) |
| MSTR | \$84.40 | \$82.33 | \$82.95 (−1.7% vs close) | \$81.22 (−1.4% vs open) |
| HOOD | \$67.37 | \$65.73 | \$67.15 (−0.3% vs close) | \$65.50 (−0.3% vs open) |
| CRCL | \$51.34 | \$50.03 | \$50.88 (−0.9% vs close) | \$49.90 (−0.3% vs open) |

What this shows, and what it does not:

- **Overnight**, when the regular market is closed, OKXICE prices were already moving toward Tuesday's lower open. COIN's overnight VWAP was almost exactly the Tuesday open.
- **Pre-market** OKXICE prices were at or below the Tuesday open. They tracked the pre-market drop rather than lagging behind it.
- **During regular and extended hours**, the median fill for those four names was within about 0–30 bps of the matching 30-minute Yahoo bar. The middle 80% of fills (10th to 90th percentile) ranged from about −0.7% to +1.1%. This is a rough check: it uses 30-minute bar closes, not tick-level quotes, so part of any gap is price movement inside the bar.
- BTGO and SECZ had too few off-hours trades for a fair comparison.
- **Unknown:** Yahoo's 30-minute bars in this pull have no observations between 8:00 PM and 4:00 AM ET, so we cannot measure overnight drift against a live quote. That leg compares only to Monday's close and Tuesday's open. Yahoo prices are not official exchange prints.

## How large were the OKXICE liquidity pools after day one?

About \$1.22 million in total, according to the venue's official daily statistics for the Monday calendar day. That is a different window from the first 24 hours after noon: it includes Monday's pre-noon trades and stops at midnight EST.

<a href="/diagrams/analyses/okxice-first-24h-pool-tvl-2026-11-24.png" class="tap-enlarge" title="Open full size"><img src="/diagrams/analyses/okxice-first-24h-pool-tvl-2026-11-24-1200.webp" alt="Horizontal bar chart of official end-of-day OKXICE pool size, or TVL, on the 23 Nov 2026 EST calendar day. HOOD $353,196.82 (28.8%), CRCL $345,787.91 (28.2%), COIN $236,756.79 (19.3%), MSTR $226,966.17 (18.5%), BTGO $30,948.51 (2.5%), SECZ $30,714.48 (2.5%). Total $1,224,370.68." width="1200" height="680" loading="lazy" style="width:100%;height:auto"></a>

HOOD and CRCL also held the most liquidity at Monday midnight, about \$353,000 and \$346,000. The official total is \$1,224,370.68.

OKXICE's daily-statistics endpoint, which was still empty on the evening of 23 Nov, was populated by this 24 Nov pull ([daily-statistics API](https://web3.okx.com/api/v6/explorer/tsv/daily-statistics); [docs](https://web3.okx.com/onchainos/dev-docs/market/onchaindata-tsv-daily-statistics)). The first entry covers Monday 23 Nov, 12:00 AM to Tuesday 24 Nov, 12:00 AM, on a fixed EST (UTC−5) day with no daylight-saving shift.

| Stock | Nov 23 share volume (official) | End-of-day pool size |
|---|---|---|
| HOOD | 7,312.32 | \$353,196.82 |
| CRCL | 14,372.54 | \$345,787.91 |
| COIN | 3,013.73 | \$236,756.79 |
| MSTR | 5,601.03 | \$226,966.17 |
| BTGO | 20,729.88 | \$30,948.51 |
| SECZ | 1,820.44 | \$30,714.48 |
| **Total** | | **\$1,224,370.68** |

Our Nov 23 share volume per stock, added up from the transaction list, matches these official `dailyShareVolume` figures exactly (to rounding), so the pull did not miss fills for that calendar day. About \$2.55 million traded in the first 24 hours after noon, against about \$1.22 million of end-of-day pool size on the calendar day. Those two figures are not directly comparable, because the windows differ.

## Can you tell how many people traded on OKXICE?

No. Public chain data shows sending addresses and contracts, not the people behind them. How many distinct end users traded is **unknown**.

We looked up all 3,314 first-24-hour transactions on X Layer through the public RPC. All 3,314 receipts reported success.

- **74.9% (2,483 transactions)** were sent by one address, [`0x7ff4…8656`](https://www.oklink.com/x-layer/address/0x7ff4b3acd0a9f7c3f1bcb650f00c8b7bd8d18656), to an unlabeled contract, [`0x1f61…23a2`](https://www.oklink.com/x-layer/address/0x1f61eb055947f49dbf4ff1a532e6bd74c18123a2).
- **24.2% (802 transactions)** were sent by one address, [`0x985b…8533`](https://www.oklink.com/x-layer/address/0x985b0a4f05ffd79a6d612076272ab8b1275f8533), directly to TSVSwapRouterV1, [`0xc58d…d686`](https://www.oklink.com/x-layer/address/0xc58d2bf7ad7cb023760e767e9050be3f15cad686).
- **0.9% (29 transactions)** went to the standard ERC-4337 EntryPoint, [`0x0000…a032`](https://www.oklink.com/x-layer/address/0x0000000071727de22e5e9d8baf0edac6f37da032), sent by five bundler addresses.

The first two sending addresses account for 99.1% of the transactions. That is what the chain shows. It does not, by itself, say who the traders were, or how many of them there were.

## What is still unknown?

- **Why 992 trades, about \$1.25 million, happened before the announced noon ET launch on Monday.** The public transaction list includes them, starting at 12:01 AM ET. The reason is unknown.
- **An overnight reference price.** The Yahoo Finance 30-minute bars in this pull have no observations between 8:00 PM and 4:00 AM ET, so overnight OKXICE prices can be compared only with Monday's close and Tuesday's open, not with a live overnight quote.
- **How many distinct end users traded.** Public chain data shows a small number of sending addresses and contracts, not the people behind them.

## How was this measured?

- **Trades and assets:** OKXICE's public TSV API, pulled around 12:30 PM ET on 24 Nov 2026, under the documented limit of 2 requests per second per IP ([API reference](https://web3.okx.com/onchainos/dev-docs/market/onchaindata-tsv-reference)). We paginated the full transaction feed and also pulled each stock separately, then merged and de-duplicated by transaction hash and log index (4,482 unique fills in the full pull).
- **Completeness:** Official Nov 23 EST share volume per stock in the daily statistics matches our transaction-list totals exactly (to rounding).
- **Time zones:** Fill timestamps are second-resolution UTC times from the API, converted to U.S. Eastern Time. Sessions use Eastern clocks. The official daily-statistics day is a fixed EST (UTC−5) calendar day.
- **Prices:** Yahoo Finance daily and 30-minute data, pulled around 12:31 PM ET on 24 Nov 2026. They are not official exchange prints.
- **On-chain senders:** Public X Layer RPC records for the 3,314 first-24-hour transaction hashes, viewed on [OKLink](https://www.oklink.com/x-layer/address/0xc58d2bf7ad7cb023760e767e9050be3f15cad686).
- This is not investment advice.

## Sources
Public originals for the facts on this page.

- <https://www.oklink.com/x-layer/address/0xc58d2bf7ad7cb023760e767e9050be3f15cad686>
- <https://www.oklink.com/x-layer/address/0x7ff4b3acd0a9f7c3f1bcb650f00c8b7bd8d18656>
- <https://www.oklink.com/x-layer/address/0x985b0a4f05ffd79a6d612076272ab8b1275f8533>
- <https://www.oklink.com/x-layer/address/0x1f61eb055947f49dbf4ff1a532e6bd74c18123a2>
- <https://www.oklink.com/x-layer/address/0x0000000071727de22e5e9d8baf0edac6f37da032>
- <https://finance.yahoo.com/quote/COIN/>
- <https://finance.yahoo.com/quote/MSTR/>
- <https://finance.yahoo.com/quote/HOOD/>
- <https://finance.yahoo.com/quote/CRCL/>
- <https://finance.yahoo.com/quote/BTGO/>
- <https://finance.yahoo.com/quote/SECZ/>
