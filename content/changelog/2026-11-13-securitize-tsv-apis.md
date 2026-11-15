---
title: '2026-11-13: Securitize describes TSV APIs, dual CET wording, and Formation support'
date: 2026-11-13
tags:
- changelog
last_checked: '2026-11-13'
---

- A 13 Nov 2026 article on Securitize's Medium publication describes APIs that [[concepts/glossary#tsv|TSV]] operators can integrate for investor onboarding and permissioning (SecId), market-maker inventory (CET Underlying), and corporate actions, and points to current developer documentation at [developers.securitize.io](https://developers.securitize.io) ([Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed), raw/302, raw/303). The same site also documents a Stocks API. The Corporate Actions API and the Stocks API are labelled Beta in the current docs; the Corporate Actions API is in development and subject to change before 1.0.0, and the Stocks API's paths, fields and errors can change before release.
- In that article, CET is used both as a custodial entitlement token and, at Securitize, as a convertible entitlement token. Minting and burning of inventory happen through Securitize, outside the venue. On supported EVM deployments the article describes display multipliers based on ERC-8056 for splits, and Scaled UI Amount on Solana.
- Securitize says this is the mechanism it is using to support the [[platforms-venues/okxice-tsv|OKXICE TSV]] launch, and the same infrastructure it is leveraging in its work supporting [[platforms-venues/formation-securities|Formation's TSV]], including for stocks and ETFs. The stocks-and-ETFs wording is Securitize's; Formation's official 9 Nov 2026 notice still names only FWDI, GLXY and EXOD and does not mention ETFs.
- The article's 30-day notice discussion is recorded with its own caveat: the SEC expects a venue to be operationally ready when the notice is published, so the notice period is not the build window.
