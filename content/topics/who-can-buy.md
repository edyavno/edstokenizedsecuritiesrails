---
title: Who can buy
tags:
- topics
last_checked: 2026-11-18
sources:
- https://zerion.io/blog/best-tokenized-stock-platforms/
- https://fensory.com/best/tokenized-stocks-platforms
- https://support.kraken.com/articles/xstocks-faq
- https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf
- https://dataspanapi.wisdomtree.com/pdr/documents/WEBSITE_FUND_DETAILS/WDT/US/EN-US/WTGXX_3/
- https://www.sec.gov/Archives/edgar/data/1821534/000114036121012255/nt10013846x18_253g2.htm
- https://bitquery.io/investigations/tokenized-stocks-market-size
- https://docs.xstocks.fi/docs/frequently-asked-questions
- https://docs.ondo.finance/ondo-stocks/legal-and-regulatory
- https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks
- https://www.youtube.com/watch?v=c8VAgn88uqs
- https://www.sec.gov/comments/S7-2026-32/4927-1134705-4042498.pdf
- https://www.youtube.com/watch?v=mwAidpXpJJ4
- https://www.alsobrooks.senate.gov/wp-content/uploads/2026/11/Alsobrooks_Warner_Cortez_Masto_Gallego_SEC_Innovation_Exemption_Tokenization_Letter_11-12-2026_@_02-10_PM.pdf
- https://www.iosco.org/library/pubdocs/pdf/IOSCOPD832.pdf
description: Whether you can buy a given stock token depends on where you live and how the token is structured.
---

*In plain English: Whether you can buy a given stock token depends on where you live and how the token is structured.*

Who can hold a tokenized stock depends on the structure (see [[overview|the overview]] and [[topics/legal-structures|legal structures]]).

## Can US persons buy offshore wrapped tokens?
Most offshore products exclude US persons ([[issuers/xstocks-backed|xStocks]], [[issuers/ondo-global-markets|Ondo]], Coinbase, Robinhood) ([Zerion](https://zerion.io/blog/best-tokenized-stock-platforms/), secondary; [Fensory](https://fensory.com/best/tokenized-stocks-platforms), secondary). [[issuers/xstocks-backed|xStocks]] are offered to eligible non-US clients in 110+ countries and are not available in the US, Canada, the UK or Australia ([Kraken FAQ](https://support.kraken.com/articles/xstocks-faq)).

In a 16 Nov 2026 livestream, SEC Trading and Markets Director Jamie Selway, speaking for himself, said US investors accessing synthetic stock tokens on offshore venues is "not compliant" and that action could be taken ([Unchained livestream at 1:04:11](https://www.youtube.com/watch?v=mwAidpXpJJ4&t=3851s)). Separately, four senators' 13 Nov 2026 letter notes that the Innovation Exemption permissions access to trading but does not require token-level transfer restrictions, so a token bought by a verified buyer could later move to an unverified wallet ([letter](https://www.alsobrooks.senate.gov/wp-content/uploads/2026/11/Alsobrooks_Warner_Cortez_Masto_Gallego_SEC_Innovation_Exemption_Tokenization_Letter_11-12-2026_@_02-10_PM.pdf); see [[concepts/innovation-exemption|Innovation Exemption]]).

**Market size estimates.** Blockchain data firm Bitquery estimates \$3.2B of tokenized stocks from six large issuers were held outside issuer wallets on 31 Oct 2026, up from \$585M at end-2025. Binance's bStocks were about 41% (\$1.31B), most of it in Binance's own wallets; excluding exchange wallets, [[issuers/ondo-global-markets|Ondo]] led at \$848M. Counting tokens minted but not sold would give \$48.7B, which Bitquery excludes. This is Bitquery's on-chain estimate, not an issuer or regulator figure ([Bitquery](https://bitquery.io/investigations/tokenized-stocks-market-size)).

IOSCO's 2026 monitoring report, citing RWA.xyz, puts tokenized equities and equity-linked products at \$1.7B on 30 Jun 2026, up from \$330M on 1 Jul 2025, with Ondo and xStocks the two largest platforms ([IOSCO 2026](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD832.pdf), p. 34). Different trackers count different products, so these figures are not directly comparable.

Separately, in a 15 Oct 2026 interview on NYSE Live, Alpaca's co-founder and CEO, Yoshi Yokokawa, put US equities tokenized as SPV-wrapped tokens at about \$3.5B, against an approximately \$86T US equity market cap, which he said was less than one basis point. That is his estimate as of mid-October 2026, quoted from auto-generated captions of the interview, not a verified market figure, and it is a different scope and date from Bitquery's 31 Oct estimate. Yokokawa is Alpaca's CEO, not NYSE staff ([NYSE Live](https://www.youtube.com/watch?v=c8VAgn88uqs)).


## Does being able to open an app or a website mean I am eligible?

No. Being able to reach a site, an app, or an onchain pool — including through a VPN — does not confer eligibility. Issuer terms still restrict who may buy or hold the token.

- [[issuers/xstocks-backed|xStocks]] are "not marketed, offered, or solicited in the United States" ([xStocks FAQ](https://docs.xstocks.fi/docs/frequently-asked-questions)). Kraken's FAQ says they "are not accessible in the US (or to US persons), Canada, UK, or Australia" ([Kraken FAQ](https://support.kraken.com/articles/xstocks-faq), last updated 11 Nov 2026).
- [[issuers/ondo-global-markets|Ondo Stocks]] are offered only under Regulation S to persons located outside the United States who are not "US persons" as defined in Rule 902, are not acting for the account or benefit of any US person, and are not originating a buy order in the United States. The tokens may not be resold to any US person or into the United States unless a registration or exemption applies and the Sales Terms are followed ([Ondo legal](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory)).
- Coinbase tokenized stocks "are only available to persons in eligible jurisdictions outside of the U.S." ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks)).
- [[issuers/robinhood-stock-tokens|Robinhood Stock Tokens]] are recorded on the issuer page as not offered to US persons, with further country exclusions listed there from the issuer's documents.

This is reference information about those published terms, not legal advice, and not a description of how to get around them.

## How can US investors buy tokenized stocks?
Through a US broker-dealer, through issuer-sponsored shares behind KYC and a transfer-agent whitelist, or as an approved participant on a permissioned Tokenized Securities Venue.
- [[concepts/glossary#broker-dealer|Broker-dealer]] model: [[issuers/dinari|Dinari]] documents a US broker-dealer route.
- Issuer-sponsored shares can admit eligible US investors, usually behind KYC and a transfer-agent whitelist. Exodus token holders can only trade with holders who passed the [[concepts/glossary#transfer-agent|transfer agent]]'s AML/KYC and were whitelisted ([Exodus offering circular](https://www.sec.gov/Archives/edgar/data/1821534/000114036121012255/nt10013846x18_253g2.htm)). WisdomTree's WTGXX allows transfers only between verified, whitelisted [[concepts/glossary#wallet|wallets]] ([WisdomTree FAQ](https://dataspanapi.wisdomtree.com/pdr/documents/WEBSITE_FUND_DETAILS/WDT/US/EN-US/WTGXX_3/)).
- Tokenized Securities Venues under the [[concepts/innovation-exemption|Innovation Exemption]] are permissioned: access is limited to approved participants ([SEC order 34-106402](https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf)). Securitize's 12 Nov 2026 comment letter argues that a pool allowlist only screens at the point of trade, so a verified buyer can withdraw to a self-hosted wallet and send the token to a sanctioned person; it asks the SEC to require permissioning in the token itself, with freeze, burn and reissue as the fallback ([Securitize](https://www.sec.gov/comments/S7-2026-32/4927-1134705-4042498.pdf)). That is advocacy, not a change to the order.

## What this means for holders
- Most offshore tokens ([[issuers/xstocks-backed|xStocks]], [[issuers/ondo-global-markets|Ondo]], Robinhood, Coinbase, bStocks) exclude US persons; check the issuer page for the exact country list.
- US routes run through registered firms: Dinari as [[concepts/glossary#broker-dealer|broker-dealer]], Superstate as [[concepts/glossary#transfer-agent|transfer agent]] for native shares, or exchange-listed tokenized shares via the [[concepts/glossary#dtc|DTC]] pilot.
- Where you can buy is a property of the issuer and the platform together: see [[topics/rules-by-jurisdiction|Rules by jurisdiction]].

*Reference information only, not investment advice.*

## Sources
Public originals for the facts on this page.

- <https://zerion.io/blog/best-tokenized-stock-platforms/>
- <https://fensory.com/best/tokenized-stocks-platforms>
- <https://support.kraken.com/articles/xstocks-faq>
- <https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf>
- <https://dataspanapi.wisdomtree.com/pdr/documents/WEBSITE_FUND_DETAILS/WDT/US/EN-US/WTGXX_3/>
- <https://www.sec.gov/Archives/edgar/data/1821534/000114036121012255/nt10013846x18_253g2.htm>
- <https://bitquery.io/investigations/tokenized-stocks-market-size>
- <https://docs.xstocks.fi/docs/frequently-asked-questions>
- <https://docs.ondo.finance/ondo-stocks/legal-and-regulatory>
- <https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks>
- <https://www.youtube.com/watch?v=c8VAgn88uqs>
- <https://www.sec.gov/comments/S7-2026-32/4927-1134705-4042498.pdf>
- <https://www.youtube.com/watch?v=mwAidpXpJJ4>
- <https://www.alsobrooks.senate.gov/wp-content/uploads/2026/11/Alsobrooks_Warner_Cortez_Masto_Gallego_SEC_Innovation_Exemption_Tokenization_Letter_11-12-2026_@_02-10_PM.pdf>
- <https://www.iosco.org/library/pubdocs/pdf/IOSCOPD832.pdf>
