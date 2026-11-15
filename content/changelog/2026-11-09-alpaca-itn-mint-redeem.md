---
title: '2026-11-09: How Alpaca''s tokenization network mints and redeems stock tokens'
date: 2026-11-09
tags:
- changelog
last_checked: '2026-11-09'
---

- Alpaca's Instant Tokenization Network docs set out a 6-step mint (AP request, issuer validation, share transfer to the issuer's Alpaca account, confirmation, token deposit, callback) and a 3-step redeem, with idempotency keys against double mints ([issuer guide](https://docs.alpaca.markets/us/docs/tokenization-guide-for-issuer); [AP guide](https://docs.alpaca.markets/us/docs/tokenization-guide-for-authorized-participant); [mint API](https://docs.alpaca.markets/us/reference/posttokenizationmintbroker)).
- New sequence diagram: [[build/trading-reference-architecture#primary-market-mint-and-redeem-broker-custodied-model|Primary market: mint and redeem]]. Issuer values in the API (binance, coinbase, ondo, st0x, xstocks) noted on [[issuers/coinbase-tokenized-stocks|Coinbase]], [[issuers/ondo-global-markets|Ondo]] and [[issuers/xstocks-backed|xStocks]].
