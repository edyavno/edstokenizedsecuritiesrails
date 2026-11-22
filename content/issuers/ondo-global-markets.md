---
name: Ondo Stocks (Ondo Global Markets)
jurisdiction: British Virgin Islands
product_name: Ondo Stocks (tokenized US stocks and ETFs)
structure: Structured notes giving economic exposure; no shareholder voting/information rights
chains:
- Ethereum
- BNB Chain
- Solana
- (select tokens transferable to HyperEVM and Robinhood Chain via bridge)
who_can_buy: Excludes US persons and other prohibited jurisdictions (including Canada and the sanctioned jurisdictions listed in Ondo docs); Brazil, the EEA, Hong Kong, Malaysia, Singapore, Switzerland (entities only) and the UK require professional or qualified status
num_assets: 452 tokenized stocks and ETFs (Ondo registry, 2026-11-10); 7 Intelligent Portfolios are a separate product
structure_short: Structured notes
who_can_buy_short: Non-US; some professional-only
last_checked: '2026-11-19'
title: Ondo Stocks (Ondo Global Markets)
tags:
- issuers
type: issuer
chain:
- Ethereum
- BNB Chain
- Solana
- (select tokens transferable to HyperEVM and Robinhood Chain via bridge)
status: unknown
last_updated: '2026-11-19'
description: 'Ondo Stocks are tokenized US stocks and ETFs: BVI structured notes for eligible non-US investors, not the shares themselves.'
---

> [!info] At a glance
> **Type:** issuer  
> **Jurisdiction:** British Virgin Islands  
> **Chain:** Ethereum, BNB Chain, Solana, (select tokens transferable to HyperEVM and Robinhood Chain via bridge)  
> **Status:** unknown  
> **Last updated:** 2026-11-19  

| Field | Value |
|---|---|
| name | Ondo Stocks (Ondo Global Markets) |
| jurisdiction | British Virgin Islands |
| product_name | Ondo Stocks (tokenized US stocks and ETFs) |
| structure | Structured notes giving economic exposure; no shareholder voting/information rights |
| chains | Ethereum, BNB Chain, Solana, (select tokens transferable to HyperEVM and Robinhood Chain via bridge) |
| who_can_buy | Excludes US persons and other prohibited jurisdictions (including Canada and the sanctioned jurisdictions listed in Ondo docs); Brazil, the EEA, Hong Kong, Malaysia, Singapore, Switzerland (entities only) and the UK require professional or qualified status |
| num_assets | 452 tokenized stocks and ETFs (Ondo registry, 2026-11-10); 7 Intelligent Portfolios are a separate product |

Ondo Stocks (previously Ondo Global Markets) are tokenized US stocks and ETFs: BVI structured notes for eligible non-US investors, not the shares themselves.

*In plain English: these tokens track US stocks and ETFs held at US brokers. You hold a note, not the share.*

Ondo tokenized stocks are structured notes issued by Ondo Global Markets (BVI) Limited, a [[concepts/glossary#bankruptcy-remote|bankruptcy-remote]] BVI [[concepts/glossary#spv|SPV]]. They are backed 1:1 plus a buffer by the corresponding US stocks or ETFs (and cash in transit) held through US custodial [[concepts/glossary#broker-dealer|broker-dealers]], with Ankura Trust Company as security agent and daily verification agent ([legal](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory); [trust and transparency](https://docs.ondo.finance/ondo-stocks/trust-and-transparency)). Tokenholder rights are governed by Swiss law under the issuer's Sales Terms. The tokens are offered under Regulation S and may not be sold to US persons or into the United States except under a registration or a valid exemption ([legal](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory)). Ondo's legal notice also says the tokens are not themselves stocks, ETFs or ADRs and do not give holders a right to receive the underlying assets ([Ondo Stocks](https://ondo.finance/ondo-stocks)).

The issuer is 90.01% owned by Flux Finance Inc. (a wholly owned subsidiary of the Ondo Foundation) and 9.99% owned by Ondo Finance Inc. ([legal](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory)). Ondo Finance is described as the technology and service provider, not the issuer ([trust and transparency](https://docs.ondo.finance/ondo-stocks/trust-and-transparency)). An EEA/EU base prospectus has been approved by the Financial Market Authority Liechtenstein (FMA), according to the same legal notice, and is published on each token page at [app.ondo.finance](https://app.ondo.finance) ([Ondo Stocks](https://ondo.finance/ondo-stocks)).

## How does minting and redemption work?

Direct [[concepts/glossary#mint|mint]] and [[concepts/glossary#redeem|redemption]] on the Ondo Stocks platform use signed quotes (IGMTokenManager). Purchases are in USDon, Ondo's 1:1 dollar stablecoin; USDC can be swapped 1:1 atomically when the swapper has liquidity. The minimum is \$1. Minting is instant and atomic; redemption to USDon is always instant, and redemption to USDC is instant if the swapper has enough USDC. Bank-wire redemption is not supported ([investing and redeeming](https://docs.ondo.finance/ondo-stocks/investing-and-redeeming); [API overview](https://docs.ondo.finance/api-reference/overview)).

A holder who redeems with Ondo receives USDon or USDC (stablecoin, not the underlying share). The tokens are structured notes, not title to the share ([investing and redeeming](https://docs.ondo.finance/ondo-stocks/investing-and-redeeming); [legal](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory); [Ondo Stocks](https://ondo.finance/ondo-stocks)).

Ondo says there are no mint or burn fees on this path. The quoted price is the price the investor pays or receives, and it may differ slightly from the price at which Ondo transacts in the underlying; any difference and any fees are retained by Ondo. Investors pay their own gas, and secondary-market venues may charge their own fees ([fees and taxes](https://docs.ondo.finance/ondo-stocks/fees-and-taxes); [overview](https://docs.ondo.finance/ondo-stocks/overview)).

Separately, "ondo" is one of the issuer values in Alpaca's Instant Tokenization Network mint API, the broker-side flow in which an authorized participant's shares move to the issuer's Alpaca account before tokens are minted ([Alpaca mint API](https://docs.alpaca.markets/us/reference/posttokenizationmintbroker); [[build/trading-reference-architecture#primary-market-mint-and-redeem-broker-custodied-model|mint and redeem, step by step]]). That shows Ondo is set up as an ITN issuer, not which broker holds its backing assets.

On 12 Nov 2026 Ondo said it had already introduced in-kind conversion between tokenized stocks and underlying shares through Alpaca's ITN, adding a primary-market route alongside cash-funded minting. Approved institutions will be able to transfer existing shares from their Alpaca account and receive corresponding Ondo Stocks; redemptions on that route return shares rather than cash ([Ondo](https://ondo.finance/blog/ondo-stocks-as-collateral-on-spout)). That institutional path is distinct from direct mint and redeem on the Ondo platform, which still pay USDon or USDC.

The same post says Spout Finance will accept Ondo Stocks on Solana as collateral when it launches on Solana, with planned terms of USDC loans up to 50% LTV and no interest charged by Spout, funded by premiums from weekly covered calls sold on the underlying shares after an in-kind redemption into Spout's Alpaca brokerage account. If those calls are exercised, borrowers can be left with fewer tokens while their loan balance stays the same. Brokerage holdings and onchain records are to be reconciled before each options cycle. Spout's launch and lending terms are planned, as described by Ondo, not live ([Ondo](https://ondo.finance/blog/ondo-stocks-as-collateral-on-spout)).

## Who can buy Ondo Stocks?

Eligible non-US investors in supported jurisdictions. In several markets, only professional or qualified buyers. Ondo Stocks are not offered to US persons, to anyone acting for a US person, or to anyone placing a buy order from the United States. Ondo also prohibits subscribers, acquirers and redeemers in Canada and in a list of sanctioned or restricted jurisdictions that includes Afghanistan, Belarus, Cuba, Iran, Libya, Myanmar, North Korea, Russia, Somalia, South Sudan, Sudan, Syria, and specified regions of Ukraine ([eligibility](https://docs.ondo.finance/ondo-stocks/eligibility); [legal](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory)).

In Brazil, the EEA, Hong Kong, Malaysia, Singapore, Switzerland and the United Kingdom, buyers must meet a professional, qualified, accredited or equivalent test. Switzerland is entities only; Ondo says the tokens are not available to individuals there. Direct mint and redeem require [[concepts/glossary#kyc|KYC]] or KYB. As of 10 Nov 2026, Ondo's onboarding page says onboarding is open to institutional participants and to retail users and individuals in supported jurisdictions ([onboarding](https://docs.ondo.finance/ondo-stocks/onboarding-and-kyc); [eligibility](https://docs.ondo.finance/ondo-stocks/eligibility)). See also [[topics/who-can-buy|Who can buy]].

## Which chains are Ondo Stocks on?

Ondo Stocks are available on [[concepts/glossary#ethereum|Ethereum]], BNB Chain and [[concepts/glossary#solana|Solana]] ([overview](https://docs.ondo.finance/ondo-stocks/overview)). The current Ondo API overview states that on-chain assets are issued as [[concepts/glossary#erc-20|ERC-20]] tokens for EVM-based chains and as SPL [[concepts/glossary#token-2022|Token-2022]] tokens on Solana ([API overview](https://docs.ondo.finance/api-reference/overview), retrieved 12 Nov 2026); the current Ondo Stocks overview and technical docs do not name the token standard. Select tokens are also transferable to HyperEVM and [[issuers/robinhood-stock-tokens|Robinhood Chain]] via bridge; Ondo says minting and redemption stay on Ethereum and BNB Chain for the Robinhood route ([overview](https://docs.ondo.finance/ondo-stocks/overview); [transferability](https://docs.ondo.finance/ondo-stocks/transferability); [Ondo blog, 27 Oct 2026](https://ondo.finance/blog/ondo-stocks-live-on-robinhood-chain-and-uniswap)). On 10 Nov 2026 Ondo said the Fidelity Center for Applied Technology (FCAT) is now a required verifier for Ondo Stocks transfers via the Ondo Bridge, with FCAT's LayerZero DVN participating alongside a quorum of verifiers: 35 Ondo Stocks to HyperEVM and all 450+ Ondo Stocks on other supported chains, in Ondo's wording (the vault already records 452 tokenized stocks and ETFs on Ondo's registry as of 10 Nov 2026). Cross-chain transfers are for eligible investors outside the United States ([Ondo blog, 10 Nov 2026](https://ondo.finance/blog/ondo-bridge-adds-fcat-as-required-verifier)).

As of 10 Nov 2026, Ondo's token registry lists 452 tokenized stocks and ETFs, plus 7 Ondo Intelligent Portfolios recorded as a separate product line ([token registry](https://docs.ondo.finance/partner-docs/tokens)). Older Ondo docs pages still say "100+"; that figure is stale and is not used here. A previous "450+" headline came from Zerion, a secondary source, and is superseded by the registry. Ondo says it currently tokenizes securities that trade on the NYSE and Nasdaq ([available assets](https://docs.ondo.finance/ondo-stocks/available-assets)).

## How are dividends and fees handled?

Dividends are reinvested, not paid out. Ondo Stocks track total return, net of withholding tax. Ondo Stocks are total-return trackers: dividends and similar income are reinvested in the underlying, net of withholding tax, so one token does not necessarily represent one share and the token price can diverge from the share price ([token and quote pricing](https://docs.ondo.finance/ondo-stocks/token-and-quote-pricing); [corporate actions](https://docs.ondo.finance/ondo-stocks/corporate-actions)). Ondo says the standard withholding rate on dividends from US companies to the BVI issuer is 30% ([fees and taxes](https://docs.ondo.finance/ondo-stocks/fees-and-taxes)). On Solana and BNB Chain, some wallets show a display [[concepts/glossary#multiplier|multiplier]]; that changes the display only, not the onchain balance ([token and quote pricing](https://docs.ondo.finance/ondo-stocks/token-and-quote-pricing)). See also [[topics/corporate-actions-and-dividends|corporate actions and dividends]].

Trading may pause around ex-dividend dates and during other corporate actions; status is published at [status.ondo.finance](https://status.ondo.finance) ([corporate actions](https://docs.ondo.finance/ondo-stocks/corporate-actions)). Holders do not get shareholder voting or information rights ([legal](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory)).

## When can Ondo Stocks be traded?

The platform is generally open from 8:05 pm ET Sunday to 7:59 pm ET Friday when US markets are open, across four sessions: pre-market, core, post-market and overnight, with the overnight session relying on the Blue Ocean ATS. A separate Off-Hours session covers weekends, market holidays and early-close days on Ethereum, BNB Chain and Solana. As of a 16 Nov 2026 snapshot of Ondo's Off-Hours docs, 32 assets were enabled (including AAPLon, NVDAon, TSLAon, SPYon, QQQon, IBITon and SPCXon); buys and sells are still quoted, minted and redeemed instantly, each asset has its own dynamic Off-Hours limit, and quotes can be declined at the limit, with spreads that may be wider. The enabled list and limits can change; current status is at [status.ondo.finance/market](https://status.ondo.finance/market) ([Ondo Off-Hours](https://docs.ondo.finance/ondo-stocks/off-hours-trading)). Trading halts outside regular hours and on NYSE holidays (except Off-Hours assets), at risk thresholds, for maintenance, and per asset during corporate actions ([market hours](https://docs.ondo.finance/ondo-stocks/market-hours-and-trading-availability)). Ondo said its tokenized stocks traded "about 10x its usual volume after the closing bell" on US election night, 4 Nov 2026 (company-reported, [Ondo on X](https://x.com/Ondo/status/2118090005071396987)). Ondo quotes are also reachable through Jito Labs' JTX RFQ terminal ([SolanaFloor](https://solanafloor.com/news/jtx-equities-discoverability-rfq-execution-1650-tokenized-stocks), Jito-affiliated outlet); see [[comparisons/trading-venue-architectures|Trading venue architectures]].

On 7 Oct 2026 Assetera, an Austrian MiFID II firm, listed 100+ Ondo tokenized stocks and ETFs for eligible investors in 30 EEA countries, widening to 450+ through Q4 2026 ([Assetera](https://www.assetera.com/media/assetera-x-ondo)). Ondo's legal notice also says certain Ondo Stocks have been admitted to trading on Nest Exchange, a Binance-operated multilateral trading facility in Abu Dhabi Global Market ([Ondo Stocks](https://ondo.finance/ondo-stocks)).

On 27 Oct 2026 Ondo put 15 Ondo Stocks on [[issuers/robinhood-stock-tokens|Robinhood Chain]] via the Ondo Bridge (minting and redemption stay on Ethereum and BNB Chain). 11 of them, including NVDAon, SPYon, TSLAon and QQQon, sit in Uniswap v4 StablePair pools against the matching Robinhood Stock Token, with dynamic LP fees when the pair drifts from its expected rate. Ondo pitches this as a weekend supply and exit route while Robinhood's mint and redeem window is closed. Ondo also says it has \$1.3B in total value locked and over 450,000 cumulative holders (issuer claims) ([Ondo](https://ondo.finance/blog/ondo-stocks-live-on-robinhood-chain-and-uniswap)).

## How do Ondo Stocks compare with other tokenized-stock products?

Ondo Stocks are a synthetic / structured-note model: the token is a BVI note giving economic exposure, not title to the share ([[concepts/legal-taxonomy|legal taxonomy]]; [[comparisons/implementations-by-model|implementations by model]]). That is a different legal wrapper from [[issuers/xstocks-backed|xStocks]] (Jersey tracker certificates), [[issuers/robinhood-stock-tokens|Robinhood Stock Tokens]] (Jersey debt securities) and [[issuers/dinari|Dinari dShares]] (broker-dealer mirror records, with a US path). Like xStocks and Robinhood, Ondo excludes US persons; Dinari is the one in this set with a US route.

As of 10 Nov 2026 Ondo's registry lists 452 tokenized stocks and ETFs, more than the 131 assets on Kraken's xStocks FAQ as of 25 Oct 2026, but those counts are from different dates and should not be treated as a live league table ([Ondo registry](https://docs.ondo.finance/partner-docs/tokens); [[issuers/xstocks-backed|xStocks]]). For venue design and hours, see [[comparisons/trading-venue-architectures|Trading venue architectures]].

## What figures are published on size and trading?

Dated, attributed volume figures for Ondo Stocks and other venues are collected in [[comparisons/reported-trading-volume-by-venue|Reported trading volume by venue]]; they are not like-for-like and are not a league table. Dated figures that are also on this page:

- On 14 Aug 2026 Ondo said Ondo Stocks had processed \$27B of cumulative trading volume since the September 2025 launch, across centralized exchanges, decentralized exchanges and primary mint/redeem activity, of which \$18B was CEX (company-reported, [Ondo PR Newswire](https://www.prnewswire.com/news-releases/ondo-stocks-surpasses-1-billion-in-value-as-ecosystem-surges-302852154.html)). An 11 May 2026 Ondo blog had an earlier \$18B cumulative total at the \$1B TVL mark ([Ondo](https://ondo.finance/blog/ondo-tokenized-stocks-surpass-one-billion-tvl)); that is not the same number as the August CEX subset.
- The IMF's October 2026 stability report put tokenized stocks at about \$2.3B in July 2026, with more than 70% from Ondo and xStocks, and said over half of tokenized-stock trading happened when US markets were closed ([IMF GFSR Oct 2026, ch. 3](https://www.imf.org/-/media/files/publications/gfsr/2026/october/english/ch3.pdf); also on the [[overview|overview]]).
- Bitquery estimated \$3.2B of tokenized stocks from six large issuers held outside issuer wallets on 31 Oct 2026; excluding exchange wallets, it put Ondo first at \$848M. That is a third-party on-chain estimate, not an issuer or regulator figure ([Bitquery](https://bitquery.io/investigations/tokenized-stocks-market-size); [[topics/who-can-buy|Who can buy]]).
- On 27 Oct 2026 Ondo claimed \$1.3B in total value locked and more than 450,000 cumulative holders (issuer claim) ([Ondo blog](https://ondo.finance/blog/ondo-stocks-live-on-robinhood-chain-and-uniswap)).
- Ondo said its tokenized stocks traded "about 10x its usual volume after the closing bell" on US election night, 4 Nov 2026 (company-reported, [Ondo on X](https://x.com/Ondo/status/2118090005071396987)).

## Anthropic IPO (legal model)
Ondo said on 6 Nov 2026 that Anthropic exposure would launch on IPO day through Ondo Stocks ([Ondo on X](https://x.com/Ondo/status/2118725675204919420)). Its 18 Nov 2026 release announced ANTon, "a token providing exposure to Anthropic stock", for "eligible investors outside the U.S.", from \$1, with zero mint fees and lowered redemption fees (network fees apply) and minting and redemption 24/7 ([Ondo release](https://www.prnewswire.co.uk/news-releases/ondo-stocks-to-launch-anton-with-247-mint-and-redeem-live-on-ipo-day-302943767.html)).

Legally ANTon is an Ondo Global Markets (BVI) Limited token, not an Anthropic share. Ondo says its tokens "are not themselves stocks, ETFs or ADRs", that it "is not a participant in Anthropic's initial public offering", and that ANTon "is not issued, sponsored, or endorsed by Anthropic" ([Ondo release](https://www.prnewswire.co.uk/news-releases/ondo-stocks-to-launch-anton-with-247-mint-and-redeem-live-on-ipo-day-302943767.html)). Anthropic's final prospectus (Form 424B4, 19 Nov 2026) lists the shares for Nasdaq under "ANT" and does not mention tokenized shares ([424B4](https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm)). Separately, Anthropic's Help Center warns that third parties selling Anthropic shares to the public through "tokenized securities" are "likely offering an investment that may have no value due to our transfer restrictions"; that page is about private-stock transfers and does not mention Ondo or the IPO ([Claude Help Center](https://support.claude.com/en/articles/13704655-unauthorized-anthropic-stock-sales-and-investment-scams)). See [[comparisons/implementations-by-model|Implementations by model]].

## What this means for holders
- You hold a structured note from a BVI [[concepts/glossary#spv|SPV]], described as [[concepts/glossary#bankruptcy-remote|bankruptcy-remote]] and overcollateralized by assets held at US [[concepts/glossary#broker-dealer|broker-dealers]] ([Ondo docs](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory)).
- Redeeming with Ondo on the direct platform path pays USDon or USDC, not the underlying share; you do not get shareholder voting or information rights ([investing and redeeming](https://docs.ondo.finance/ondo-stocks/investing-and-redeeming); [legal](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory)). Ondo also describes an institutional in-kind conversion through Alpaca's ITN that returns shares rather than cash ([Ondo](https://ondo.finance/blog/ondo-stocks-as-collateral-on-spout)).
- Not offered to US persons; some other jurisdictions require professional or qualified status; buying from Ondo requires [[concepts/glossary#kyc|KYC]] ([eligibility](https://docs.ondo.finance/ondo-stocks/eligibility); [onboarding](https://docs.ondo.finance/ondo-stocks/onboarding-and-kyc)).
- Dividends are reinvested net of withholding tax, so one token may not equal one share ([fees and taxes](https://docs.ondo.finance/ondo-stocks/fees-and-taxes); [token and quote pricing](https://docs.ondo.finance/ondo-stocks/token-and-quote-pricing)).

*Reference information only, not investment advice.*

## DTCC ecosystem
Ondo is named among the collaborators and partners in DTCC's Tokenization Service ecosystem at its 28 Oct 2026 launch ([[infrastructure/dtcc-tokenization-pilot|DTCC]]; [DTCC](https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live)).

## Sources
Public originals for the facts on this page.

- <https://docs.ondo.finance/ondo-stocks/legal-and-regulatory>
- <https://docs.ondo.finance/ondo-stocks/eligibility>
- <https://docs.ondo.finance/ondo-stocks/investing-and-redeeming>
- <https://docs.ondo.finance/ondo-stocks/trust-and-transparency>
- <https://docs.ondo.finance/ondo-stocks/overview>
- <https://docs.ondo.finance/ondo-stocks/fees-and-taxes>
- <https://docs.ondo.finance/ondo-stocks/onboarding-and-kyc>
- <https://docs.ondo.finance/partner-docs/tokens>
- <https://docs.ondo.finance/ondo-stocks/corporate-actions>
- <https://docs.ondo.finance/ondo-stocks/transferability>
- <https://docs.ondo.finance/ondo-stocks/token-and-quote-pricing>
- <https://docs.ondo.finance/ondo-stocks/available-assets>
- <https://ondo.finance/ondo-stocks>
- <https://docs.ondo.finance/ondo-stocks/market-hours-and-trading-availability>
- <https://docs.ondo.finance/api-reference/overview>
- <https://ondo.finance/blog/ondo-stocks-live-on-robinhood-chain-and-uniswap>
- <https://docs.alpaca.markets/us/reference/posttokenizationmintbroker>
- <https://www.assetera.com/media/assetera-x-ondo>
- <https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live>
- <https://www.imf.org/-/media/files/publications/gfsr/2026/october/english/ch3.pdf>
- <https://bitquery.io/investigations/tokenized-stocks-market-size>
- <https://zerion.io/blog/best-tokenized-stock-platforms/>
- <https://ondo.finance/blog/ondo-bridge-adds-fcat-as-required-verifier>
- <https://www.prnewswire.com/news-releases/ondo-stocks-surpasses-1-billion-in-value-as-ecosystem-surges-302852154.html>
- <https://ondo.finance/blog/ondo-tokenized-stocks-surpass-one-billion-tvl>
- <https://defillama.com/protocol/ondo-global-markets>
- <https://ondo.finance/blog/ondo-stocks-as-collateral-on-spout>
- <https://docs.ondo.finance/ondo-stocks/off-hours-trading>
- <https://www.prnewswire.co.uk/news-releases/ondo-stocks-to-launch-anton-with-247-mint-and-redeem-live-on-ipo-day-302943767.html>
- <https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm>
- <https://support.claude.com/en/articles/13704655-unauthorized-anthropic-stock-sales-and-investment-scams>

*Last checked 2026-11-19. Headline fields only; `unknown` means not yet verified from a source.*
