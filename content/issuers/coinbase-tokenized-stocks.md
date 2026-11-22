---
name: Coinbase Tokenized Stocks
jurisdiction: Abu Dhabi Global Market (FSRA-authorized, per Coinbase via Zerion)
product_name: B20 stock tokens
structure: Beneficial claim on backing shares
chains:
- Base
who_can_buy: Eligible jurisdictions outside the US; offered under Regulation S
num_assets: 58 prospectuses listed on coinbase.com/tokenize (2026-10-17)
structure_short: Beneficial claim, 1:1
who_can_buy_short: Non-US (Reg S)
last_checked: '2026-11-19'
title: Coinbase Tokenized Stocks
tags:
- issuers
type: issuer
chain:
- Base
status: live
last_updated: '2026-11-19'
description: Coinbase's stock tokens on Base are each backed by a real share held in custody.
---

> [!info] At a glance
> **Type:** issuer  
> **Jurisdiction:** Abu Dhabi Global Market (FSRA-authorized, per Coinbase via Zerion)  
> **Chain:** Base  
> **Status:** live  
> **Last updated:** 2026-11-19  

| Field | Value |
|---|---|
| name | Coinbase Tokenized Stocks |
| jurisdiction | Abu Dhabi Global Market (FSRA-authorized, per Coinbase via Zerion) |
| product_name | B20 stock tokens |
| structure | Beneficial claim on backing shares |
| chains | Base |
| who_can_buy | Eligible jurisdictions outside the US; offered under Regulation S |
| num_assets | 58 prospectuses listed on coinbase.com/tokenize (2026-10-17) |

*In plain English: Coinbase's stock tokens on Base are each backed by a real share held in custody.*

Each [[concepts/glossary#b20|B20]] token on Base is a beneficial claim on a real share in [[concepts/glossary#bankruptcy-remote|bankruptcy-remote]] custody ([Coinbase](https://www.coinbase.com/tokenize); [Base](https://www.base.org/stocks)). Coinbase holds an [[concepts/glossary#fsra-adgm|FSRA]] permission in ADGM ([ADGM](https://www.adgm.com/media/announcements/coinbase-establishes-its-tokenization-hub-in-abu-dhabi-with-financial-services-permission-from-the-financial-services-regulatory-authority)).

A public read-only API publishes records, [[concepts/glossary#multiplier|multipliers]] and prospectuses ([Base docs](https://docs.base.org/sdks/tokenized-stocks/overview)).

[[concepts/glossary#authorized-participant|Authorized participants]] (institutional market makers) buy the shares, which go to Alpaca, a regulated broker and [[concepts/glossary#custodian|custodian]] ([Base](https://blog.base.org/tokenized-stocks); [CoinDesk](https://www.coindesk.com/business/2026/08/24/coinbase-debuts-tokenized-stocks-on-base-network-joining-race-to-bring-equities-on-blockchain), news). Token format: [[standards/b20|B20]]. B20 tokens can point each policy scope (who may send, receive, mint or be seized) at a shared Policy Registry of allowlists and blocklists; scopes default to always-allow until they are bound, and the standard's events include seize, a freeze-style blocked burn, and pause ([Base updatePolicy](https://docs.base.org/specifications/b20/reference/interfaces/ib20/update-policy)). See [[concepts/token-primitives|token primitives]].

On Alpaca's Instant Tokenization Network (ITN), "coinbase" is one of the issuer values an authorized participant can name in a mint request; Alpaca moves the shares from the AP's account to the issuer's Alpaca account, and the issuer mints the tokens to the AP's wallet ([Alpaca mint API](https://docs.alpaca.markets/us/reference/posttokenizationmintbroker); [Alpaca issuer guide](https://docs.alpaca.markets/us/docs/tokenization-guide-for-issuer)). The API value shows Coinbase is set up as an ITN issuer; it is not by itself a statement about Coinbase's custody terms. See [[build/trading-reference-architecture#primary-market-mint-and-redeem-broker-custodied-model|mint and redeem, step by step]].

Since 25 Sep 2026, seven Coinbase tokenized stocks (AAPLc, AMZNc, GOOGLc, METAc, MSFTc, NVDAc, TSLAc) can be posted as collateral to borrow USDC on Aave V4 on Base ([Aave](https://www.aave.com/blog/coinbase-tokenized-stocks)).

John D'Agostino, head of strategy at Coinbase Institutional, said the initial offering covers about seven stocks and is planned to grow to 2,000 (a stated plan, not a launched figure) ([TheStreet via Yahoo Finance](https://finance.yahoo.com/markets/crypto/articles/tokenized-stocks-turn-share-collateral-165759306.html), news, 27 Oct 2026).

## Coinbase research view (Jan 2026)
Coinbase Institutional's research team wrote that tokenized public equities were still under \$1B, versus about \$28B for tokenized Treasuries and private credit ([Coinbase Institutional, Major Trends in Tokenization](https://www.coinbase.com/institutional/research-insights/research/market-intelligence/major-trends-in-tokenization), 10 Jan 2026). It flagged three risks:
- **Market depth:** order books for tokenized stocks remain thin; [[concepts/glossary#slippage|slippage]] and volatility can be significantly higher than in the underlying stock, especially post-market or under stress.
- **[[concepts/glossary#oracle|Oracle]] risk:** off-chain prices must be brought onchain; errors, lags or manipulation can break the equivalence between token and underlying collateral.
- **Regulatory fragmentation:** jurisdictions differ on who can own what and how secondary transfers work.

The note says that if freely transferable designs are permitted, tokenized stocks could serve as collateral in lending markets; otherwise, with thin books, extended hours don't yet offset lower depth and higher friction ([Coinbase Institutional](https://www.coinbase.com/institutional/research-insights/research/market-intelligence/major-trends-in-tokenization)).

## Coinbase's SEC comment letter (3 Nov 2026)
In its letter on the SEC's proposed transfer agent rules (File S7-2026-30), Coinbase argues that a third-party tokenizer does not become a transfer agent just by issuing tokens that reference a security; that holders should be identifiable by wallet address "without a mandatory name and physical mailing address"; and that a blockchain record can itself be the master securityholder file ([Coinbase letter](https://www.sec.gov/comments/S7-2026-30/s7202630-1119719-3983946.pdf)). This is advocacy, not law; see [[topics/regulation|Regulation]].

## Onchain Rights standard (16 Nov 2026)
On 16 Nov 2026 Coinbase and [[infrastructure/broadridge|Broadridge]] published a jointly developed open technical standard for delivering shareholder communications to wallets holding tokenized shares, and said they also submitted it as an Ethereum Improvement Proposal (EIP) for review. Broadridge also launched a supporting data oracle for aggregate evidence of distribution ([Broadridge / PR Newswire](https://www.prnewswire.com/news-releases/coinbase-and-broadridge-publish-proposed-standard-for-onchain-shareholder-communications-broadridge-launches-data-oracle-302939893.html)). The standard's site says Coinbase and Broadridge are the first authors, that standards are released under CC0, and that Ethereum comes first, "which includes EVM-compatible networks and layer 2s like Base" ([Onchain Rights](https://www.onchainrights.org/)). The FAQ says the standard announces and describes events and does not take votes or move money; onchain voting is the next phase ([Onchain Rights](https://www.onchainrights.org/)). As of 16 Nov 2026 the EIP texts and the canonical JSON schema were not yet published on the project's site ([EIP References](https://www.onchainrights.org/docs/specs/eip-references); [JSON Schema](https://www.onchainrights.org/docs/specs/json-schema)). See [[topics/corporate-actions-and-dividends|corporate actions]].

## Anthropic (ANTc)
Coinbase Onchain SPV Ltd, an ADGM company incorporated 17 June 2026, published a prospectus dated 18 Nov 2026 for "Anthropic CB Certificates (Certificates over Shares)", ticker ANTc, representing beneficial interests in Anthropic Class A shares; the offer commences 19 Nov, after Anthropic begins trading ([prospectus](https://www.adgm.com/globalassets/market-disclosure/content/prospectus/coinbase-onchain-spv-ltd---prospectus-antc---18nov2026.pdf)). The PDF's file title reads "DRAFT 17NOV2026" and ADGM disclaims responsibility for its content.
- **Entities:** Onchain Marketplace Ltd is the tokenisation entity; Alpaca Securities LLC is custodian and broker.
- **Claim:** the certificates "do not constitute direct investments in the Underlying"; the Underlying Issuer "is not involved in the offer or sale of the Securities" and does not sponsor, endorse or promote them.
- **Who can buy:** the offer is to Authorised Participants only; everyone else buys onchain or in DeFi markets and is an Unvested Holder until meeting Vesting Conditions (including AML/KYC). Not offered to US persons.
- **Rights:** "Only Vested Holders may exercise any rights", including redemption and voting. Holders have no direct voting right; the issuer may "endeavour to vote" on Vested Holders' written instructions. Holders do not receive cash dividends directly.
- **Fees:** creation fee 0.01%, redemption fee 0.05%.
The prospectus text does not name the blockchain network. Anthropic's 424B4 does not mention tokenized shares ([Anthropic 424B4](https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm)). See [[comparisons/implementations-by-model|Implementations by model]].

## What this means for holders
- A B20 stock token is a beneficial claim on a share held in [[concepts/glossary#bankruptcy-remote|bankruptcy-remote]] custody, not a share on the company's register ([Coinbase](https://www.coinbase.com/tokenize); [Base](https://www.base.org/stocks)).
- Offered outside the US only; dividends are reinvested through a [[concepts/glossary#multiplier|multiplier]] ([Base](https://www.base.org/stocks)).
- [[concepts/glossary#redeem|Redemption]] terms are set in the issuer documents; check them before relying on redemption ([Base docs](https://docs.base.org/sdks/tokenized-stocks/overview)).

*Reference information only, not investment advice.*

## Sources
Public originals for the facts on this page.

- <https://www.coinbase.com/tokenize>
- <https://www.base.org/stocks>
- <https://www.adgm.com/media/announcements/coinbase-establishes-its-tokenization-hub-in-abu-dhabi-with-financial-services-permission-from-the-financial-services-regulatory-authority>
- <https://docs.base.org/sdks/tokenized-stocks/overview>
- <https://blog.base.org/tokenized-stocks>
- <https://www.coindesk.com/business/2026/08/24/coinbase-debuts-tokenized-stocks-on-base-network-joining-race-to-bring-equities-on-blockchain>
- <https://www.coinbase.com/institutional/research-insights/research/market-intelligence/major-trends-in-tokenization>
- <https://finance.yahoo.com/markets/crypto/articles/tokenized-stocks-turn-share-collateral-165759306.html>
- <https://docs.alpaca.markets/us/docs/tokenization-guide-for-issuer>
- <https://www.sec.gov/comments/S7-2026-30/s7202630-1119719-3983946.pdf>
- <https://docs.base.org/specifications/b20/reference/interfaces/ib20/update-policy>
- <https://www.prnewswire.com/news-releases/coinbase-and-broadridge-publish-proposed-standard-for-onchain-shareholder-communications-broadridge-launches-data-oracle-302939893.html>
- <https://www.onchainrights.org/>
- <https://www.onchainrights.org/docs>
- <https://www.adgm.com/globalassets/market-disclosure/content/prospectus/coinbase-onchain-spv-ltd---prospectus-antc---18nov2026.pdf>

*Last checked 2026-11-19. Headline fields only; `unknown` means not yet verified from a source.*
