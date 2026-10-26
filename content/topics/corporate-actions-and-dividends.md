---
title: Corporate actions & dividends
tags:
- topics
last_checked: 2026-10-25
sources:
- https://zerion.io/blog/best-tokenized-stock-platforms/
- https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks
- https://docs.xstocks.fi/docs/dividends-and-stock-splits
- https://support.kraken.com/articles/xstocks-faq
- https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html
- https://www.sec.gov/Archives/edgar/data/1821534/000114036121012255/nt10013846x18_253g2.htm
- https://dataspanapi.wisdomtree.com/pdr/documents/WEBSITE_FUND_DETAILS/WDT/US/EN-US/WTGXX_3/
description: 'In plain English: How dividends, stock splits and votes reach you depends on how the token is built. This page compares the approaches.'
---

*In plain English: How dividends, stock splits and votes reach you depends on how the token is built. This page compares the approaches.*

How a dividend or split reaches a token holder depends on the model (see [[overview|the overview]]).

## Multiplier (rebasing) model
[[concepts/glossary#wrapper|Wrapped]] tokens usually reinvest dividends and raise a multiplier rather than pay cash.
- **xStocks**: dividends are reinvested net of withholding; splits and reverse splits scale the multiplier ([xStocks docs](https://docs.xstocks.fi/docs/dividends-and-stock-splits)). Kraken computes the change as the net dividend (after 30% US withholding) divided by the prior close, and updates it around 8 p.m. EST the day before the ex-date ([Kraken FAQ](https://support.kraken.com/articles/xstocks-faq)). Holders get no voting rights.
- **Coinbase on Base ([[standards/b20|B20]])**: cash dividends are converted to shares and reflected in the multiplier (e.g. 1.02 means one token [[concepts/glossary#redeem|redeems]] for 1.02 shares). Scheduled updates give advance onchain notice via ERC-8056 ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks)).
- Robinhood also uses multipliers that reflect reinvested dividends ([Zerion](https://zerion.io/blog/best-tokenized-stock-platforms/), secondary).

## Issuer-sponsored and fund tokens
The token is the share, so corporate actions follow the register (Superstate). Exodus's tokens carry no economic rights of their own; those attach to the Class A share ([Exodus offering circular](https://www.sec.gov/Archives/edgar/data/1821534/000114036121012255/nt10013846x18_253g2.htm)). WisdomTree's WTGXX accrues income daily and pays monthly in cash or [[concepts/glossary#stablecoin|stablecoin]], or reinvests it ([WisdomTree FAQ](https://dataspanapi.wisdomtree.com/pdr/documents/WEBSITE_FUND_DETAILS/WDT/US/EN-US/WTGXX_3/)).

## DTC
At launch, [[concepts/glossary#dtc|DTC]] pays Treasury distributions in fiat to participants' traditional accounts. Equity and [[concepts/glossary#etf|ETF]] corporate actions on tokens are on the 2027+ roadmap ([DTCC tear sheet](https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html)).

## Sources
Public originals for the facts on this page.

- <https://zerion.io/blog/best-tokenized-stock-platforms/>
- <https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks>
- <https://docs.xstocks.fi/docs/dividends-and-stock-splits>
- <https://support.kraken.com/articles/xstocks-faq>
- <https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html>
- <https://www.sec.gov/Archives/edgar/data/1821534/000114036121012255/nt10013846x18_253g2.htm>
- <https://dataspanapi.wisdomtree.com/pdr/documents/WEBSITE_FUND_DETAILS/WDT/US/EN-US/WTGXX_3/>
