---
title: Corporate actions & dividends
tags:
- topics
last_checked: '2026-11-20'
sources:
- https://zerion.io/blog/best-tokenized-stock-platforms/
- https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks
- https://docs.xstocks.fi/docs/dividends-and-stock-splits
- https://support.kraken.com/articles/xstocks-faq
- https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html
- https://www.sec.gov/Archives/edgar/data/1821534/000114036121012255/nt10013846x18_253g2.htm
- https://dataspanapi.wisdomtree.com/pdr/documents/WEBSITE_FUND_DETAILS/WDT/US/EN-US/WTGXX_3/
- https://www.bullish.com/us/news-insights/issuer-sponsored-token-coalition-gains-momentum-as-qrt-vertalo-and-zerohash-join
- https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed
- https://www.sec.gov/comments/4-927/4927-1133160-4036827.pdf
- https://www.prnewswire.com/news-releases/coinbase-and-broadridge-publish-proposed-standard-for-onchain-shareholder-communications-broadridge-launches-data-oracle-302939893.html
- https://www.onchainrights.org/
- https://www.onchainrights.org/docs
- https://www.iosco.org/library/pubdocs/pdf/IOSCOPD832.pdf
- https://www.prnewswire.com/news-releases/chainlink-develops-blockchain-solution-with-ubs-for-the-2-trillion-global-structured-products-market-302944470.html
- https://bitquery.io/investigations/securitize-apple-dividend-onchain
- https://x.com/carlosdomingo/status/2123822462194643349
description: How dividends, stock splits and votes reach you depends on how the token is built. This page compares the approaches.
---

*In plain English: How dividends, stock splits and votes reach you depends on how the token is built. This page compares the approaches.*

How a dividend or split reaches a token holder depends on the model (see [[overview|the overview]]).

## Multiplier (rebasing) model
[[concepts/glossary#wrapper|Wrapped]] tokens usually reinvest dividends and raise a multiplier rather than pay cash.
- **xStocks**: dividends are reinvested net of withholding; splits and reverse splits scale the multiplier ([xStocks docs](https://docs.xstocks.fi/docs/dividends-and-stock-splits)). Kraken computes the change as the net dividend (after 30% US withholding) divided by the prior close, and updates it around 8 p.m. EST the day before the ex-date ([Kraken FAQ](https://support.kraken.com/articles/xstocks-faq)). Holders get no voting rights.
- **Coinbase on Base ([[standards/b20|B20]])**: cash dividends are converted to shares and reflected in the multiplier (e.g. 1.02 means one token [[concepts/glossary#redeem|redeems]] for 1.02 shares). Scheduled updates give advance onchain notice via ERC-8056 ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks)).
- Robinhood also uses multipliers that reflect reinvested dividends ([Zerion](https://zerion.io/blog/best-tokenized-stock-platforms/), secondary).


## Entitlement tokens
- **Securitize CETs**: a 13 Nov 2026 Securitize article says that, on supported EVM deployments, it uses display [[concepts/glossary#multiplier|multipliers]] based on the ERC-8056 approach for splits, and Scaled UI Amount on [[concepts/glossary#solana|Solana]], so the economic representation can change without liquidity providers withdrawing and recreating positions. Dividends and other entitlements, in the same article, are handled by Securitize's corporate-actions processing rather than described as reinvested into the multiplier ([Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed)).

## Securitize Apple dividend (16 Nov 2026)
On 16 Nov 2026, Apple's pay date, [[issuers/securitize|Securitize]] paid Apple's \$0.27 cash dividend in USDC on Solana to holders of its Securitize Stocks Apple token. Securitize described this as its first onchain dividend on a tokenized public stock ([Carlos Domingo on X](https://x.com/carlosdomingo/status/2123822462194643349)). A Securitize payment notice states the dividend per CET as \$0.27.

Bitquery, which traced the Solana transfers (figures verified 17 Nov 2026), reported a total of \$43.14 paid in four transfers to 20 wallets, with about 93% (\$40.03) going to the market maker's inventory wallet and \$3.11 shared by 19 outside wallets. Bitquery said the amounts matched Apple's rate to the cent, that some payments were 15% or 30% short — consistent, in its reading, with US withholding on foreign holders — and that a buyer on the ex-dividend date received nothing. Apple's record date was 12 Nov 2026 ([Bitquery](https://bitquery.io/investigations/securitize-apple-dividend-onchain)).

## Issuer-sponsored and fund tokens
The token is the share, so corporate actions follow the register (Superstate). Exodus's tokens carry no economic rights of their own; those attach to the Class A share ([Exodus offering circular](https://www.sec.gov/Archives/edgar/data/1821534/000114036121012255/nt10013846x18_253g2.htm)). WisdomTree's WTGXX accrues income daily and pays monthly in cash or [[concepts/glossary#stablecoin|stablecoin]], or reinvests it ([WisdomTree FAQ](https://dataspanapi.wisdomtree.com/pdr/documents/WEBSITE_FUND_DETAILS/WDT/US/EN-US/WTGXX_3/)).

[[infrastructure/vertalo|Vertalo]], a [[concepts/glossary#transfer-agent|transfer agent]] in the [[concepts/issuer-sponsored-token-coalition|Issuer Sponsored Token Coalition]], says [[concepts/glossary#issuer-sponsored-token|issuer-sponsored tokens]] work because the shareholder records and the token agree, and that agreement drives corporate actions ([Bullish](https://www.bullish.com/us/news-insights/issuer-sponsored-token-coalition-gains-momentum-as-qrt-vertalo-and-zerohash-join)).

## DTC
At launch, [[concepts/glossary#dtc|DTC]] pays Treasury distributions in fiat to participants' traditional accounts. Equity and [[concepts/glossary#etf|ETF]] corporate actions on tokens are on the 2027+ roadmap ([DTCC tear sheet](https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html)).

IOSCO's 2026 monitoring report finds that corporate actions on tokenized shares still "rely on traditional operational processes," with plans to add smart-contract features such as converting cash dividends into stablecoins or tokenized deposits; it quotes DTC's no-action materials describing that option for later versions of the service ([IOSCO 2026](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD832.pdf), p. 44).

Chainlink Labs' 11 Nov 2026 comment letter on the [[concepts/innovation-exemption|Innovation Exemption]] proposes principles for how a TSV should give equivalent rights effect across systems: retain verifiable evidence of issuer-notice receipt; reconcile event data across systems, including record dates, differences in finality, and transfers in progress at a cutoff, under rules approved by the party responsible for the authoritative entitlement record; and name in the Notice who maintains that record and who makes issuer communications available. Chainlink is a vendor of corporate-action infrastructure of the kind the letter discusses, and the letter is advocacy, not a Commission requirement ([Chainlink Labs](https://www.sec.gov/comments/4-927/4927-1133160-4036827.pdf)).
On 19 Nov 2026 Chainlink said UBS used the Chainlink Runtime Environment (CRE) in a production pilot to run lifecycle servicing for a tokenized structured note on Ethereum, including real-time visibility of coupon entitlements, barrier proximity and product status. This is a structured note, not a stock. Settlement using UBS digital money is described as future automation, not a live feature ([Chainlink / PR Newswire](https://www.prnewswire.com/news-releases/chainlink-develops-blockchain-solution-with-ubs-for-the-2-trillion-global-structured-products-market-302944470.html)).


## A proposed open notice standard (16 Nov 2026)
On 16 Nov 2026 Coinbase and [[infrastructure/broadridge|Broadridge]] published a proposed open standard, Onchain Rights, for delivering shareholder communications (notices and corporate actions) to wallets holding tokenized shares, and said they also submitted it as an Ethereum Improvement Proposal (EIP) for review. Broadridge also launched a data oracle designed to give participating firms aggregate evidence that communications were distributed ([Broadridge / PR Newswire](https://www.prnewswire.com/news-releases/coinbase-and-broadridge-publish-proposed-standard-for-onchain-shareholder-communications-broadridge-launches-data-oracle-302939893.html)). The announcement builds on Broadridge's existing ProxyVote-in-wallet work, including the 5 Nov 2026 [[issuers/dinari|Dinari]] dShares integration ([Broadridge](https://www.broadridge.com/press-release/2026/broadridge-brings-proxy-voting-to-dinaris-dshares-tokenized-us-equities)).

The standard's docs describe an onchain announcement — an identifier, a short description and a link to a JSON corporate-action document — which can optionally group related token changes in the same transaction. The overview states that the specifications "communicate the action" and "do not establish legal rights, calculate a particular holder's entitlement, determine eligibility, or submit votes and elections." The document format "uses corporate action vocabulary from ISO 15022 and ISO 20022, with type names from the Broadridge BRx data model" ([Onchain Rights docs](https://www.onchainrights.org/docs)). The FAQ says the standard "announces and describes events" and "doesn't take votes or move money"; "Onchain voting is the next phase" ([Onchain Rights](https://www.onchainrights.org/)). As of 16 Nov 2026, the project's EIP References page lists both "Onchain Announcements" and "Corporate Action Announcement Content" as "Coming soon," and the canonical JSON schema is marked "Publication pending" ([EIP References](https://www.onchainrights.org/docs/specs/eip-references); [JSON Schema](https://www.onchainrights.org/docs/specs/json-schema)).

This is a communications layer, not an entitlement engine. It sits alongside, rather than replacing, the reconciliation questions in Chainlink Labs' 11 Nov 2026 letter ([Chainlink Labs](https://www.sec.gov/comments/4-927/4927-1133160-4036827.pdf)), which asked how a TSV should retain evidence of issuer-notice receipt, reconcile record dates and transfers in progress, and name who maintains the authoritative entitlement record. Implementation of the Coinbase and Broadridge standard "will depend on the applicable share structure, intermediaries and legal requirements" ([Broadridge / PR Newswire](https://www.prnewswire.com/news-releases/coinbase-and-broadridge-publish-proposed-standard-for-onchain-shareholder-communications-broadridge-launches-data-oracle-302939893.html)). See also [[issuers/coinbase-tokenized-stocks|Coinbase tokenized stocks]] and [[concepts/token-primitives|token primitives]].

## What this means for holders
- Wrapped tokens often reflect dividends and splits through a [[concepts/glossary#multiplier|multiplier]] instead of cash; native shares and DTC-based tokens follow the normal share's corporate actions.
- Voting rights usually stay with the [[concepts/glossary#custodian|custodian]] or issuer for wrapped tokens; check each issuer page.
- A 16 Nov 2026 proposed standard aims to deliver the same structured shareholder notice to any wallet, broker or custodian that can read it; the standard itself does not create legal rights, calculate a holder's entitlement, or submit votes ([Onchain Rights docs](https://www.onchainrights.org/docs)).
- Where a field says `unknown`, the sources so far do not say how that issuer handles it.

*Reference information only, not investment advice.*

## Sources
Public originals for the facts on this page.

- <https://zerion.io/blog/best-tokenized-stock-platforms/>
- <https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks>
- <https://docs.xstocks.fi/docs/dividends-and-stock-splits>
- <https://support.kraken.com/articles/xstocks-faq>
- <https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html>
- <https://www.sec.gov/Archives/edgar/data/1821534/000114036121012255/nt10013846x18_253g2.htm>
- <https://dataspanapi.wisdomtree.com/pdr/documents/WEBSITE_FUND_DETAILS/WDT/US/EN-US/WTGXX_3/>
- <https://www.bullish.com/us/news-insights/issuer-sponsored-token-coalition-gains-momentum-as-qrt-vertalo-and-zerohash-join>
- <https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed>
- <https://www.sec.gov/comments/4-927/4927-1133160-4036827.pdf>
- <https://www.prnewswire.com/news-releases/coinbase-and-broadridge-publish-proposed-standard-for-onchain-shareholder-communications-broadridge-launches-data-oracle-302939893.html>
- <https://www.onchainrights.org/>
- <https://www.onchainrights.org/docs>
- <https://www.iosco.org/library/pubdocs/pdf/IOSCOPD832.pdf>
- <https://www.prnewswire.com/news-releases/chainlink-develops-blockchain-solution-with-ubs-for-the-2-trillion-global-structured-products-market-302944470.html>
- <https://bitquery.io/investigations/securitize-apple-dividend-onchain>
