---
title: Trading venue architectures compared
type: comparison
description: 'How tokenized-stock venues are built, side by side: legal form of what trades, custody, matching design, settlement asset, chains, hours, KYC/allowlists, corporate actions and oracle, for 16 venues and platforms.'
tags:
- comparisons
- build
last_checked: '2026-11-13'
sources:
- https://21x.eu/smart-contracts-and-the-role-of-regulated-market-infrastructures/
- https://group.boerse-stuttgart.com/en/seturion/
- https://www.prometheum.com/trading
- https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-3-builder-deployed-perpetuals
- https://docs.ostium.com/protocol/how-ostium-works
- https://github.com/SwarmMarkets/open-dotc
- https://solanafloor.com/news/jtx-equities-discoverability-rfq-execution-1650-tokenized-stocks
- https://www.prnewswire.com/news-releases/first-trades-of-tokenized-us-equity-under-sec-innovation-exemption-executed-on-the-canton-network-302929795.html
- https://dinari.com/blog/dinari-launches-the-dinari-financial-network-an-omni-chain-orderbook-powered-by-avalanche
- https://learn.backpack.exchange/articles/what-is-backpack-securities
- https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.05.pdf
- https://www.okx.com/en-us/learn/okxice-tsv-launch
- https://www.formationsecurities.com/notice.pdf
- https://www.payward.com/press-release/xstocks-uk-eu-equities
- https://optimism.io/blog/xstocks-native-op-mainnet-ether-fi-launch
- https://www.payward.com/press-release/xstocks-dax-40
---

*In plain English: the same tokenized stock can trade in very different ways. This table shows, venue by venue, what you actually hold, who holds the share, how orders meet and what pays for them.*

Details and sources are on each linked page; the design patterns are explained with diagrams in [[build/trading-reference-architecture#how-venues-match-and-settle|How venues match and settle]]. `unknown` means no source checked yet. For the legal models behind each row, see [[comparisons/implementations-by-model|Implementations by model]].

## Matching designs at a glance
| Design | Examples | Where orders meet | Settlement |
|---|---|---|---|
| Onchain order book | [[platforms-venues/21x\|21X]] | Smart-contract order book | Same transaction, against a stablecoin |
| Offchain match, onchain settle | [[platforms-venues/seturion\|Seturion]], [[issuers/dinari\|Dinari]] | Venue or broker systems | Onchain settlement layer |
| Permissioned AMM pool | [[platforms-venues/okxice-tsv\|OKXICE TSV]], [[platforms-venues/tsv-llc\|TSV LLC]], [[platforms-venues/formation-securities\|Formation Securities]] | Pool of allowlisted liquidity | Atomic swap in the pool |
| Issuer RFQ | JTX routing to [[issuers/ondo-global-markets\|Ondo]], [[issuers/backpack\|Backpack]], [[issuers/xstocks-backed\|xStocks]] | Quote from the issuer or its market maker | Onchain swap at the quoted price |
| P2P escrow (OTC) | Swarm open dOTC | Maker offer, taker fill | Escrow contract releases both legs |
| Perps engine | [[platforms-venues/hyperliquid-equity-perps\|HIP-3, Ostium]] | Perp order book or oracle-priced pool | Stablecoin margin, no shares |
| Exchange, same book | [[platforms-venues/nasdaq-tokenized-securities\|Nasdaq]] | Existing exchange order book | DTC settlement |
| Broker-dealer ATS | [[platforms-venues/prometheum\|Prometheum]], [[issuers/securitize\|Securitize]] | Broker or ATS systems | Broker-dealer books and custody |

## Full table
| Venue / platform | Legal form of what trades | Custody | Matching | Settlement asset | Chains | Hours | KYC / allowlist | Corporate actions | Oracle |
|---|---|---|---|---|---|---|---|---|---|
| [[platforms-venues/21x\|21X]] | EU DLT financial instruments | unknown | Onchain CLOB ([21X](https://21x.eu/smart-contracts-and-the-role-of-regulated-market-infrastructures/)) | Stablecoin | unknown (pilot on private Zero) | unknown | Whitelisted wallets only | unknown | None needed (order book) |
| [[platforms-venues/seturion\|Seturion]] | Tokenized assets on connected EU venues | Participants' own wallets | Offchain at the venue ([Seturion](https://group.boerse-stuttgart.com/en/seturion/)) | Central bank money/fiat or onchain cash | Public and selected private | 24/7 settlement (per Seturion) | Via connected venues | unknown | n/a |
| [[platforms-venues/prometheum\|Prometheum]] | Tokenized and digitally native securities | Prometheum Capital (broker-dealer, 15c3-3) | ATS; does not trade against customers ([Prometheum](https://www.prometheum.com/trading)) | unknown | unknown | unknown | Broker-dealer onboarding | unknown | n/a |
| [[issuers/securitize\|Securitize Stocks]] | UCC Art. 8 entitlements | Broker-dealer / RQD Clearing | PropAMM on Solana, Jump as market maker | USDC | Solana | see page | Broker-dealer onboarding | see page | see page |
| [[issuers/xstocks-backed\|Kraken / xStocks]] | Jersey tracker certificates | see page | Exchanges and Solana DeFi | Venue-dependent | Solana, Ethereum, TON, Ink, X Layer (Payward, 11 Nov 2026); OP Mainnet native (Optimism, 12 Nov 2026) | see page | Non-US eligible persons | Multiplier | see page |
| [[issuers/robinhood-stock-tokens\|Robinhood]] | Debt securities | US custody partner | RFQ, AMMs and Lighter on Robinhood Chain | see page | Robinhood Chain | see page | Not US, Canada, UK, Switzerland | Reinvested via multiplier | see page |
| [[issuers/dinari\|Dinari]] | Custodial dShares (US: secondary ledger) | Qualified custody | Dinari Financial Network order book (Avalanche L1) ([Dinari](https://dinari.com/blog/dinari-launches-the-dinari-financial-network-an-omni-chain-orderbook-powered-by-avalanche)) | unknown | Ethereum, Arbitrum, Avalanche, Base, HyperEVM, HyperCore, Plume | see page | Broker-dealer KYC; US tokens non-transferable | Cash dividends; proxy voting via Broadridge | see page |
| [[issuers/backpack\|Backpack]] | Art. 8 entitlement plus separate 1:1 token | RQD Clearing and Atomic Vault Securities | Backpack platform; also quotes into JTX RFQ | USD | Solana | Selected names 24/7 | Backpack KYC; not US/UK/UAE/Japan/EU | Cash dividends on the entitlement | unknown |
| [[platforms-venues/hyperliquid-equity-perps\|Hyperliquid HIP-3]] | Synthetic perp | None (no shares) | HyperCore order book | Deployer's chosen quote asset (collateral) | Hyperliquid | Set by deployer (trading sessions) | unknown | None | Deployer-set (e.g. trade[XYZ] relayers, ~3 s) |
| [[platforms-venues/hyperliquid-equity-perps\|Ostium]] | Synthetic perp | None; USDC in vault | Oracle-priced, hedged offchain ([Ostium](https://docs.ostium.com/protocol/how-ostium-works)) | USDC | Arbitrum | unknown | unknown | None | In-house consensus oracle |
| Swarm open dOTC | Tokenized RWAs (SX1155) | Escrow contract during trade | P2P maker/taker offers ([GitHub](https://github.com/SwarmMarkets/open-dotc)) | Counter-asset in the offer | Ethereum, Polygon, Base, BNB Chain | unknown | Offer-level counterparty restrictions | unknown | Allowlisted price feeds |
| JTX (RFQ terminal) | Issuer tokens (Ondo, Backpack, xStocks) | Issuer's model | RFQ to issuers, swaps up to \$1M ([SolanaFloor](https://solanafloor.com/news/jtx-equities-discoverability-rfq-execution-1650-tokenized-stocks), Jito-affiliated) | unknown | Solana | Issuer-dependent (e.g. [Ondo hours](https://docs.ondo.finance/ondo-stocks/market-hours-and-trading-availability)) | Issuer-dependent | Issuer-dependent | Issuer quote |
| [[platforms-venues/okxice-tsv\|OKXICE TSV]] | Security entitlement tokens (Securitize as tokenizer), backed 1:1 ([OKX, 11 Nov 2026](https://www.okx.com/en-us/learn/okxice-tsv-launch)) | Self-custodial wallets; venue holds neither assets nor keys ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch)) | Permissioned AMM (Uniswap v4 hook) on XLayer ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch); [OKXICE notice, 5 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.05.pdf)) | USDC, USDG, USDT | XLayer | 24/7 planned; announced launch beginning 23 Nov 2026 ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch)); not yet trading as of that announcement | Eligible U.S. OKX Inc. customers: CeDeFi Wallet, identity verification and OKXICE onboarding; soulbound tokens / permissioning list ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch); [notice, 5 Nov](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.11.05.pdf)) | None at venue (tokenizer processes corporate actions, per the 5 Nov notice) | Pool price |
| [[platforms-venues/tsv-llc\|TSV LLC / Tradecraft]] | Issuer-sponsored shares (CNTN) | Register kept by [[infrastructure/fairmint\|Fairmint]] | Permissioned AMM pool on Tradecraft ([CNTN release](https://www.prnewswire.com/news-releases/first-trades-of-tokenized-us-equity-under-sec-innovation-exemption-executed-on-the-canton-network-302929795.html)) | USDC or SBC | Canton | Designed 24/7 with required stoppages | Transfer-agent-verified holders and wallets | Same rights as Nasdaq holders (issuer claim) | Pool price; Alpaca market data for caps |
| [[platforms-venues/nasdaq-tokenized-securities\|Nasdaq]] | Same security, tokenized form | DTC | Same order book, same priority | Cash via DTC | unknown | unknown | DTC Pilot eligible participants | Same as the share | n/a |
| [[platforms-venues/formation-securities\|Formation Securities]] | Tokenized NMS Stock (issuer-sponsored or third-party tokenizer) | None at venue (non-custodial) | Permissioned concentrated-liquidity AMM (licensed Orca) plus offchain router ([Formation notice](https://www.formationsecurities.com/notice.pdf)) | Non-security crypto asset or tokenized MMF | Solana | 24/7, subject to required stoppages | KYC/KYB, sanctions and wallet screening, plus tokenizer approval; Token-2022 transfer hook | Tokenizer, reviewed by the TSV; not at the venue | None for pricing (pool formula); third-party market data for halts and volume caps |

## Reading the table
- Dated, attributed trading-volume figures — which are not like-for-like and are not a league table — are in [[comparisons/reported-trading-volume-by-venue|Reported trading volume by venue]].
- **Who holds the share** matters more than the chain: the rows run from no share at all (perps), through broker or entitlement custody, to the company's own register (TSV LLC/CNTN).
- **Hours** on most onchain venues follow either the venue's own design (24/7 pools and order books) or the underlying market's sessions (e.g. Ondo's four US sessions plus an Off-Hours session for selected assets, with halts during corporate actions: [Ondo docs](https://docs.ondo.finance/ondo-stocks/market-hours-and-trading-availability)).
- Reference information only, not investment advice.

## Sources
Public originals for the facts on this page.

- <https://21x.eu/smart-contracts-and-the-role-of-regulated-market-infrastructures/>
- <https://group.boerse-stuttgart.com/en/seturion/>
- <https://www.prometheum.com/trading>
- <https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-3-builder-deployed-perpetuals>
- <https://docs.ostium.com/protocol/how-ostium-works>
- <https://github.com/SwarmMarkets/open-dotc>
- <https://solanafloor.com/news/jtx-equities-discoverability-rfq-execution-1650-tokenized-stocks>
- <https://www.prnewswire.com/news-releases/first-trades-of-tokenized-us-equity-under-sec-innovation-exemption-executed-on-the-canton-network-302929795.html>
- <https://dinari.com/blog/dinari-launches-the-dinari-financial-network-an-omni-chain-orderbook-powered-by-avalanche>
- <https://learn.backpack.exchange/articles/what-is-backpack-securities>
- <https://www.formationsecurities.com/notice.pdf>
- <https://www.payward.com/press-release/xstocks-uk-eu-equities>
- <https://optimism.io/blog/xstocks-native-op-mainnet-ether-fi-launch>
- <https://www.payward.com/press-release/xstocks-dax-40>
