---
title: '2026-11-23: OKXICE TSV public data API'
date: 2026-11-23
tags:
- changelog
holders: OKXICE TSV publishes free, machine-readable trade data and a no-login public API. The published fee schedule is 30 bps. See [[platforms-venues/okxice-tsv|OKXICE TSV]].
last_checked: '2026-11-23'
---

- [[platforms-venues/okxice-tsv|OKXICE TSV]]: Official API documentation for the venue's public market data is in the [OKX OnchainOS TSV data reference](https://web3.okx.com/onchainos/dev-docs/market/onchaindata-tsv-reference), linked as "API Docs" from [okx.com/okxicetsv](https://www.okx.com/okxicetsv). The reference describes three open GET endpoints (asset-list, transaction-list and daily-statistics) that require no login, API key or signature, with a 2 requests-per-second limit per IP. The 20 Nov 2026 notice already said the venue would publish 30-day, machine-readable trade data, updated within 10 minutes, at that same page ([OKXICE notice, 20 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.20.pdf)). A 23 Nov 2026 evening ET query of the public API returned the six launch USDC pools and trade fills with a 0.2% liquidity-pool fee; trader wallet addresses are omitted, daily-statistics was still empty, and the 0.1% OKXICE service fee is not broken out per fill. The fee schedule on [okx.com/okxicetsv](https://www.okx.com/okxicetsv) lists a total trading fee of 30 bps (0.30%): a 0.2% liquidity pool fee plus a 0.1% OKXICE service fee, and says OKXICE waives gas fees for users.
