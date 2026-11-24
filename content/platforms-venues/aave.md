---
name: Aave
jurisdiction: unknown
product_name: Aave V4 Equities Hub on Base; Aave Horizon RWA market on Ethereum
structure: Non-custodial lending protocol; Equities Hub is an isolated V4 liquidity hub for tokenized-equity collateral; Horizon is a separate, licensed Aave Labs instance forked from V3.3 for permissioned RWA collateral
chains:
- Base (Equities Hub)
- Ethereum (Horizon)
who_can_buy: Equities Hub access is limited to users in eligible jurisdictions outside the U.S., per Aave Labs; Horizon RWA collateral is limited to issuer-allowlisted qualified users, while stablecoin supply is permissionless
num_assets: Eight Coinbase B20 tokens treated as live Equities Hub reserves in LlamaRisk's 23 Nov 2026 collateral-factor ARFC (the original seven plus SPCXc); Horizon's live collateral set is not fully inventoried from the sources in this ingest
structure_short: Lending protocol (Equities Hub + Horizon)
who_can_buy_short: Equities Hub, eligible non-US; Horizon collateral, issuer-allowlisted
last_checked: '2026-11-23'
title: Aave
tags:
- platforms-venues
type: venue
chain:
- Base (Equities Hub)
- Ethereum (Horizon)
status: Equities Hub live on Base from 25 Sep 2026, per Aave Labs; Horizon live on Ethereum from 26 Aug 2025, per Aave Labs. Several 2026 listing and parameter items below are open proposals, not executed changes.
last_updated: '2026-11-23'
description: Aave runs a Base lending market where some Coinbase stock tokens can be posted as collateral to borrow USDC, and a separate Ethereum market, Horizon, where…
---

> [!info] At a glance
> **Type:** venue  
> **Jurisdiction:** unknown  
> **Chain:** Base (Equities Hub), Ethereum (Horizon)  
> **Status:** Equities Hub live on Base from 25 Sep 2026, per Aave Labs; Horizon live on Ethereum from 26 Aug 2025, per Aave Labs. Several 2026 listing and parameter items below are open proposals, not executed changes.  
> **Last updated:** 2026-11-23  

| Field | Value |
|---|---|
| name | Aave |
| jurisdiction | unknown |
| product_name | Aave V4 Equities Hub on Base; Aave Horizon RWA market on Ethereum |
| structure | Non-custodial lending protocol; Equities Hub is an isolated V4 liquidity hub for tokenized-equity collateral; Horizon is a separate, licensed Aave Labs instance forked from V3.3 for permissioned RWA collateral |
| chains | Base (Equities Hub), Ethereum (Horizon) |
| who_can_buy | Equities Hub access is limited to users in eligible jurisdictions outside the U.S., per Aave Labs; Horizon RWA collateral is limited to issuer-allowlisted qualified users, while stablecoin supply is permissionless |
| num_assets | Eight Coinbase B20 tokens treated as live Equities Hub reserves in LlamaRisk's 23 Nov 2026 collateral-factor ARFC (the original seven plus SPCXc); Horizon's live collateral set is not fully inventoried from the sources in this ingest |

*In plain English: Aave runs a Base lending market where some Coinbase stock tokens can be posted as collateral to borrow USDC, and a separate Ethereum market, Horizon, where allowlisted holders of tokenized funds and other RWAs can borrow stablecoins. Official Aave sources reviewed on 23 Nov 2026 do not list Securitize stock tokens, xStocks, Backpack or Ondo equities as Aave collateral.*

Aave is a non-custodial lending protocol. This page covers two Aave markets that touch tokenized securities: the V4 Equities Hub on Base, which lists [[issuers/coinbase-tokenized-stocks|Coinbase tokenized stocks]], and [[#aave-horizon|Aave Horizon]] on Ethereum, a permissioned RWA market. It is not a complete guide to Aave.

## Equities Hub on Base

Aave Labs said the official Aave V4 deployment on Base, including the Equities Hub, was approved and activated on 25 Sep 2026 ([Aave Labs 180-day report](https://governance.aave.com/t/aave-labs-180-day-report/26342); [Aave](https://aave.com/blog/coinbase-tokenized-stocks)). "Access is limited to users in eligible jurisdictions outside the U.S." ([Aave Labs 180-day report](https://governance.aave.com/t/aave-labs-180-day-report/26342)). The 25 Sep launch post names seven collateral tokens — AAPLc, AMZNc, GOOGLc, METAc, MSFTc, NVDAc and TSLAc — used to borrow USDC, and says they are offered under Regulation S only to eligible non-U.S. persons in permitted jurisdictions ([Aave](https://aave.com/blog/coinbase-tokenized-stocks)).

The market is a dedicated Equities Hub, isolated from other Aave markets on Base. USDC suppliers to the hub explicitly opt into lending against tokenized-equity collateral. The hub has one USDC reserve and two spokes: the Mag-7 Spoke, where users can post any combination of the listed equity tokens as collateral and borrow USDC, each token keeping its own collateral factor; and a supply-only Tokenized USDC Spoke. The equities are collateral-only at launch: they cannot be borrowed, and equity-against-equity positions are not enabled ([ARFC, Deploy Aave V4 on Base](https://governance.aave.com/t/arfc-deploy-aave-v4-on-base/25427); [Aave](https://aave.com/blog/coinbase-tokenized-stocks)).

Pricing uses Chainlink 24/5 tokenized-equity feeds, which Aave says publish from Sunday 20:00 ET to Friday 20:00 ET and hold the last published price over weekends and U.S. market holidays. During that window, Aave says collateral values do not change and a position's health factor can fall only through interest accrual. The market itself stays open 24/7, except that a reserve is paused during corporate actions such as stock splits until the token multiplier is updated ([Aave](https://aave.com/blog/coinbase-tokenized-stocks)). The 3 Aug 2026 deployment ARFC, updated 21 Sep 2026, called this 24/5 setup an intermediate step and said Chainlink was expected to bring 24/7 feeds, after which parameters might be revisited so liquidations could run through the weekend. Whether those 24/7 feeds are in production is not stated in the sources reviewed on 23 Nov 2026 ([ARFC, Deploy Aave V4 on Base](https://governance.aave.com/t/arfc-deploy-aave-v4-on-base/25427)).

LlamaRisk's pre-listing assessment of the seven launch tokens says secondary-market buyers, including a liquidator that seizes tokens, hold them as unvested holders: they have economic exposure and can transfer the token, but no redemption right until they complete the issuer's vesting process. LlamaRisk says there is no separate onboarding path for a liquidator or a lending contract, so the redemption route should be treated as available only to parties that already hold the right ([Coinbase B20 Equities on Base Assessments](https://governance.aave.com/t/coinbase-b20-equities-on-base-assessments/25690)).

In its 2 Nov 2026 October update, Aave Labs said that on Base "the market for loans backed by tokenized stocks crossed $9M in deposits and approached $4M in loans" ([Aave Labs October 2026 update](https://governance.aave.com/t/al-development-update-october-2026/25979)). Those figures are Aave Labs' and are not independently verified here.

### SPCXc

SPCXc is Coinbase's B20 tokenized form of SpaceX Class A shares, on the same Base stack as the original seven tokens, according to LlamaRisk ([Direct-to-AIP, SPCXc](https://governance.aave.com/t/direct-to-aip-asset-listing-spcxc-to-the-aave-v4-equities-hub-on-base/25850)). The opening Aave Labs motivation in that same thread calls SPCXc "issued by Base" and says SpaceX trades on Nasdaq under the same ticker; that wording conflicts with LlamaRisk's description and is not used elsewhere on this page.

Aave Labs posted a Direct-to-AIP listing on 15 Oct 2026, 9:36 AM ET. LlamaRisk supported onboarding with a 55% collateral factor, a 6.5% maximum liquidation bonus, 1,000 bps of collateral risk, and an add cap of 37,000 SPCXc. On 27 Oct 2026, 10:41 AM ET, Aave Labs said AIP #537 had been re-created and that voting would start in less than an hour ([Direct-to-AIP, SPCXc](https://governance.aave.com/t/direct-to-aip-asset-listing-spcxc-to-the-aave-v4-equities-hub-on-base/25850)). The exact onchain execution date is not stated in the sources reviewed.

LlamaRisk's 23 Nov 2026, 10:00 AM ET collateral-factor ARFC lists SPCXc as a current Equities Hub reserve with a 55% collateral factor, which is the official-forum evidence used here that SPCXc is already live on the hub. That ARFC is itself an open proposal, described below ([ARFC, collateral-factor update](https://governance.aave.com/t/arfc-collateral-factor-update-for-coinbase-tokenized-equities-on-base/26482)).

Aave Labs' 23 Oct 2026 technical assessment, posted 29 Oct 2026, 10:00 AM ET, found SPCXc technically eligible for listing. It describes SPCXc as a Base-native B20 precompile rather than a conventional verified Solidity contract, subject to an issuer blocklist, with no onchain timelock on administrative actions, and with a share-per-token multiplier an operator can change immediately. The dedicated Chainlink feed is 24/5; Aave Labs recorded weekend gaps of 49.14 hours and a longest gap of 52.47 hours in the prior month, said Chainlink classified the feed's pricing risk as high, and said work toward 24/7 availability was in progress. Redemption is restricted to six authorized addresses, so Aave Labs says a liquidator would need to exit through onchain liquidity. There is no onchain proof of reserves ([SPCXc technical assessment](https://governance.aave.com/t/tokenized-space-exploration-technologies-corp-shares-spcxc-on-aave-base-assessments/25943)).

### Open proposals as of 23 Nov 2026

These items are proposals on the official Aave forum. They are not stated as executed.

On 18 Nov 2026, 3:58 PM ET, LlamaRisk proposed adding six further Coinbase tokens — NFLXc, ORCLc, PLTRc, AMDc, NOWc and MSTRc — as collateral-only on the Mag-7 Spoke, priced on the same Chainlink 24/5 total-return template, with collateral factors from 65% (NFLXc) down to 47% (MSTRc) and $5 million add caps each ([ARFC, expand Coinbase tokenized equities](https://governance.aave.com/t/arfc-expand-coinbase-tokenized-equities-on-base/26441)).

On 23 Nov 2026, 3:26 AM ET, LlamaRisk added an addendum to that same ARFC proposing to list Anthropic (ANTc) as well, collateral-only, at a 45% collateral factor, a 6.5% maximum liquidation bonus, 10% collateral risk, and a $5.00 million add cap (51,456 tokens). LlamaRisk says ANT had one session of its own trading history, so the factor is set below stand-in estimates, and it lists further early share releases starting 15 Dec 2026. A lender reply on 23 Nov 2026, 2:38 PM ET, asked to hold ANTc until after the 15 Dec release and first earnings, or to stage a smaller cap and an earlier review if it lists sooner. The addendum says the ANTc and MSTRc price feeds are live and that the other five proposed feeds were not yet deployed as of that post ([ARFC, expand Coinbase tokenized equities](https://governance.aave.com/t/arfc-expand-coinbase-tokenized-equities-on-base/26441)). See [[issuers/coinbase-tokenized-stocks#anthropic-antc|Coinbase ANTc]] and [[analyses/anthropic-ipo-tokenized-stock-use-case|the Anthropic use case]].

On 23 Nov 2026, 10:00 AM ET, LlamaRisk proposed lowering six of eight live collateral factors on the hub, and stated the current factors as: MSFTc 79%, AAPLc 78%, GOOGLc 76%, AMZNc 73%, NVDAc 70%, METAc 65%, TSLAc 65%, and SPCXc 55%. The proposal would move MSFTc, AAPLc, GOOGLc, AMZNc and NVDAc to 65%, and SPCXc to 53%; METAc and TSLAc would stay at 65%. In Aave V4, LlamaRisk says the collateral factor is both the borrowing limit and the liquidation threshold, sized for a 24/5 off-hours fall into the next regular open, plus a 0.5% feed-deviation allowance, the maximum liquidation bonus, and interest over the longest market closure (92 hours 35 minutes). LlamaRisk says the update would not liquidate existing positions. This ARFC is not stated as executed; the current figures above are LlamaRisk's as of that post, not confirmed onchain here ([ARFC, collateral-factor update](https://governance.aave.com/t/arfc-collateral-factor-update-for-coinbase-tokenized-equities-on-base/26482)).

## Aave Horizon

Aave Labs launched Horizon on 26 Aug 2025 as a lending market on Ethereum, built on Aave Protocol version 3.3, where qualified users borrow stablecoins against issuer-permissioned real-world assets. Launch collateral came from Superstate (USTB, USCC) and Centrifuge (JRTSY, JAAA). Anyone may supply USDC, RLUSD or GHO; RWA aTokens are non-transferable; issuers control whitelisting, KYC and asset management. Partners named at launch included Securitize, VanEck, Chainlink and LlamaRisk ([Aave](https://aave.com/blog/horizon-launch)). Official docs describe Horizon as a licensed, separate Aave Labs instance: only issuer-allowlisted holders can supply RWA collateral, that collateral cannot be borrowed, and only those suppliers can borrow the permissionless stablecoins. Chainlink DON bounds, configured with LlamaRisk, reject NAV updates outside set ranges and keep the last valid price; an emergency multisig can then freeze new exposure. Issuers can migrate a whole position to a new wallet, for example if keys are lost, and can prevent a user from increasing a borrow ([Aave Horizon docs](https://aave.com/docs/aave-v3/horizon)).

A 24 Feb 2026 Aave Labs post says Horizon lets qualified investors borrow stablecoins against "tokenized securities or tokenized real-world assets," and that partners can let qualified users borrow against RWAs, "including tokenized stocks and ETFs as they are added." That is a stated design, not a statement that those stocks or ETFs are already listed ([Aave](https://aave.com/blog/horizon-built-for-institutions)). From 14 Aug 2026, Aave Labs said new Horizon assets go through standard DAO governance rather than the earlier delegated listing model ([Horizon onboarding process](https://governance.aave.com/t/update-on-aave-horizon-asset-onboarding-process/25481)).

On 18 Aug 2026, Securitize proposed onboarding HINC, the tokenized share class of the Neuberger Securitize High Income Tokenized Fund, as supply-only Horizon collateral. HINC is a permissioned Securitize DS Protocol fund token, not a Securitize Stocks entitlement token. LlamaRisk's 15 Sep 2026 assessment supported listing, with proposed parameters including 55% LTV, 67% liquidation threshold and an 8% liquidation bonus, and said two pre-activation conditions remained (a timelock on the token's `MASTER` upgrade role, and formal liquidator SLAs) ([HINC ARFC](https://governance.aave.com/t/arfc-onboard-hinc-neuberger-securitize-high-income-tokenized-fund-to-aave-horizon/25500)). Aave Labs' 2 Nov 2026 October update said the community approved HINC and mWIN through Snapshot votes ([Aave Labs October 2026 update](https://governance.aave.com/t/al-development-update-october-2026/25979)). Whether HINC was subsequently activated on Horizon is not stated in the sources reviewed.

Official Aave blog, docs and governance sources reviewed on 23 Nov 2026 do not list [[issuers/securitize|Securitize]] stock entitlement tokens, [[issuers/xstocks-backed|xStocks]], [[issuers/backpack|Backpack]] or [[issuers/ondo-global-markets|Ondo]] equities as Aave collateral. Securitize's own stock-token launch materials still describe lending on markets like Aave as planned; see the Securitize page.

## Securities-finance blueprint (June 2026)

On 29 Jun 2026, before the Equities Hub launched, Aave Labs published a research post on how V4 hubs and spokes could host securities-backed lending, repo and securities lending, including a possible higher-risk equities hub and permissioned or jurisdiction-scoped venues that enforce KYC and eligible-asset rules while still drawing on shared liquidity. That post is a proposed market structure, not a description of a live product ([Aave](https://aave.com/blog/rebuilding-securities-finance-v4)).

## What this means for holders

- Some Coinbase B20 tokens can already be posted as collateral to borrow USDC on the Equities Hub, if the holder is in an eligible non-U.S. jurisdiction. The tokens themselves are not borrowable on that market ([Aave](https://aave.com/blog/coinbase-tokenized-stocks); [Aave Labs 180-day report](https://governance.aave.com/t/aave-labs-180-day-report/26342)).
- Weekend and holiday prices are held at the last Chainlink 24/5 print, so a gap at the reopen can move a position's health in one step ([Aave](https://aave.com/blog/coinbase-tokenized-stocks)).
- A liquidator that seizes Coinbase B20 tokens is, in LlamaRisk's assessment, an unvested holder and may not be able to redeem until vesting is completed ([B20 assessments](https://governance.aave.com/t/coinbase-b20-equities-on-base-assessments/25690)).
- Proposed additions, including ANTc, and proposed collateral-factor cuts were not stated as executed as of 23 Nov 2026.

*Reference information only, not investment advice.*

## Sources
Public originals for the facts on this page.

- <https://aave.com/blog/coinbase-tokenized-stocks>
- <https://governance.aave.com/t/arfc-deploy-aave-v4-on-base/25427>
- <https://governance.aave.com/t/coinbase-b20-equities-on-base-assessments/25690>
- <https://governance.aave.com/t/direct-to-aip-asset-listing-spcxc-to-the-aave-v4-equities-hub-on-base/25850>
- <https://governance.aave.com/t/tokenized-space-exploration-technologies-corp-shares-spcxc-on-aave-base-assessments/25943>
- <https://governance.aave.com/t/arfc-expand-coinbase-tokenized-equities-on-base/26441>
- <https://governance.aave.com/t/arfc-collateral-factor-update-for-coinbase-tokenized-equities-on-base/26482>
- <https://aave.com/blog/horizon-launch>
- <https://aave.com/blog/horizon-built-for-institutions>
- <https://aave.com/docs/aave-v3/horizon>
- <https://aave.com/blog/rebuilding-securities-finance-v4>
- <https://governance.aave.com/t/update-on-aave-horizon-asset-onboarding-process/25481>
- <https://governance.aave.com/t/arfc-onboard-hinc-neuberger-securitize-high-income-tokenized-fund-to-aave-horizon/25500>
- <https://governance.aave.com/t/al-development-update-october-2026/25979>
- <https://governance.aave.com/t/aave-labs-180-day-report/26342>

*Last checked 2026-11-23. Headline fields only; `unknown` means not yet verified from a source.*
