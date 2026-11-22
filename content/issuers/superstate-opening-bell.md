---
name: Superstate Opening Bell
jurisdiction: unknown
product_name: Tokenized company shares (e.g. GLXY)
structure: Actual company shares (e.g. Galaxy Class A common)
chains:
- Ethereum
- Solana
who_can_buy: KYC-verified investors in self-custody wallets
num_assets: 3 on RWA.xyz
structure_short: Issuer shares, TA record
who_can_buy_short: KYC'd investors
last_checked: '2026-11-18'
title: Superstate Opening Bell
tags:
- issuers
type: issuer
chain:
- Ethereum
- Solana
status: live
last_updated: '2026-11-18'
description: Superstate's Opening Bell puts real company shares on a blockchain, with Superstate keeping the official shareholder register.
---

> [!info] At a glance
> **Type:** issuer  
> **Jurisdiction:** unknown  
> **Chain:** Ethereum, Solana  
> **Status:** live  
> **Last updated:** 2026-11-18  

| Field | Value |
|---|---|
| name | Superstate Opening Bell |
| jurisdiction | unknown |
| product_name | Tokenized company shares (e.g. GLXY) |
| structure | Actual company shares (e.g. Galaxy Class A common) |
| chains | Ethereum, Solana |
| who_can_buy | KYC-verified investors in self-custody wallets |
| num_assets | 3 on RWA.xyz |

*In plain English: Superstate's Opening Bell puts real company shares on a blockchain, with Superstate keeping the official shareholder register.*

Galaxy (GLXY) Class A common stock is tokenized on [[concepts/glossary#solana|Solana]] via Opening Bell; Superstate, an SEC-registered [[concepts/glossary#transfer-agent|transfer agent]], updates ownership records ([Galaxy](https://www.galaxy.com/newsroom/galaxy-superstate-launch-glxy-tokenized-public-shares); [Superstate docs](https://docs.superstate.com/investors/tokenized-equities)).

Superstate acts as SEC-registered transfer agent and keeps the cap table onchain ([Superstate](https://www.superstate.com/opening-bell)). Galaxy's research describes [[concepts/glossary#allowlist|allowlisted]] self-custody and transfer-agent mechanics ([Galaxy](https://www.galaxy.com/insights/research/tokenized-glxy)); launch exhibit on EDGAR ([SEC](https://www.sec.gov/Archives/edgar/data/1859392/000185939225000052/galaxyxsuperstateoblaunchf.htm)).

## FundOS: a registered fund's official register (Nov 2026)
Superstate's FundOS platform now also runs a registered fund. Invesco's Stablecoin Reserves Onchain Fund (IROXX), a Rule 2a-7 government money market fund launched 17 Nov 2026 and aimed at stablecoin reserves, is the first publicly registered fund on FundOS ([Invesco](https://www.prnewswire.com/news-releases/invesco-launches-the-invesco-stablecoin-reserves-onchain-fund-bringing-invescos-established-liquidity-management-onchain-302941734.html)). It is a fund, not a stock, but its prospectus spells out the register design ([IROXX prospectus, 485BPOS](https://www.sec.gov/Archives/edgar/data/205007/000110465926117813/tm2627770d1_485bpos.htm)):
- Superstate, as sub-transfer agent, keeps the official record. The Ethereum token records "together with an off-chain register associating wallet addresses with shareholder personal identifying information, will constitute the official shareholder register."
- Only wallets on an allowlist can hold shares. Superstate's smart contracts enforce transfer restrictions, can freeze shares, and can burn and re-mint them if a holder loses control of the wallet.
- Orders must reach Superstate by 5:00 p.m. ET for that day's NAV; purchases in USDC go through a third-party intermediary, and holders pay gas for their own transactions.

## Exposure on Solana (announced 16 Nov 2026)
Superstate, Formation (described in the release as "Formation by Orca") and Corda announced Exposure, which the release calls the official Solana RWA Launchpad. It is a design, not a live product: as of the release, no Exposure Token was live, and the first was "expected to go live in the coming weeks" ([Superstate](https://superstate.com/newsroom/superstate-formation-and-corda-join-forces-to-launch-exposure-the-official-solana-rwa-launchpad)).
- **Permissioned at the edges.** Third-party issuers mint each Exposure Token against tokenized real-world assets, at launch funds tokenized with Superstate. Only authorized non-US persons can mint and burn ([Superstate](https://superstate.com/newsroom/superstate-formation-and-corda-join-forces-to-launch-exposure-the-official-solana-rwa-launchpad); [Exposure](https://exposuretokens.com/)).
- **Open in the middle.** Once minted, Exposure Tokens "are permissionless": they can trade on Solana DEXs and be used in lending markets, vaults and Earn products ([Exposure](https://exposuretokens.com/)).
- **What a holder has.** The disclaimer says holders "have no claim on any backed asset, on the issuer, or on Superstate," and tokens "may trade at prices that differ from the value of any backed asset." Superstate says it is only a technology provider here and does not act as transfer agent for Exposure Tokens ([Superstate](https://superstate.com/newsroom/superstate-formation-and-corda-join-forces-to-launch-exposure-the-official-solana-rwa-launchpad)).

## What this means for holders
- Tokenized GLXY is the actual Class A share recorded by Superstate as SEC-registered [[concepts/glossary#transfer-agent|transfer agent]]: a [[concepts/glossary#native-token|native token]], not a [[concepts/glossary#wrapper|wrapper]] ([Galaxy](https://www.galaxy.com/newsroom/galaxy-superstate-launch-glxy-tokenized-public-shares)).
- You need [[concepts/glossary#kyc|KYC]] and a self-custody [[concepts/glossary#wallet|wallet]] ([Superstate docs](https://docs.superstate.com/investors/tokenized-equities)).

*Reference information only, not investment advice.*

## Sources
Public originals for the facts on this page.

- <https://www.galaxy.com/newsroom/galaxy-superstate-launch-glxy-tokenized-public-shares>
- <https://investor.galaxy.com/ir-resources/tokenized-glxy-shares>
- <https://docs.superstate.com/investors/tokenized-equities>
- <https://app.rwa.xyz/stocks>
- <https://zerion.io/blog/best-tokenized-stock-platforms/>
- <https://www.superstate.com/opening-bell>
- <https://www.galaxy.com/insights/research/tokenized-glxy>
- <https://www.sec.gov/Archives/edgar/data/1859392/000185939225000052/galaxyxsuperstateoblaunchf.htm>
- <https://www.prnewswire.com/news-releases/invesco-launches-the-invesco-stablecoin-reserves-onchain-fund-bringing-invescos-established-liquidity-management-onchain-302941734.html>
- <https://www.sec.gov/Archives/edgar/data/205007/000110465926117813/tm2627770d1_485bpos.htm>
- <https://superstate.com/newsroom/superstate-formation-and-corda-join-forces-to-launch-exposure-the-official-solana-rwa-launchpad>
- <https://exposuretokens.com/>

*Last checked 2026-11-18. Headline fields only; `unknown` means not yet verified from a source.*
