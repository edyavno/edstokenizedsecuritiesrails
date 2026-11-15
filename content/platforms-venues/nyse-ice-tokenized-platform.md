---
name: NYSE / ICE tokenized securities
jurisdiction: United States
product_name: SR-NYSE-2026-17; planned 24/7 platform
structure: Same security, tokenized form (DTC pilot); planned 24/7 venue
chains: 'Settlement ledger: Avalanche (for the clearing firm); issuance: multiple chains (unnamed)'
who_can_buy: unknown
num_assets: unknown
structure_short: Exchange rule + planned venue
who_can_buy_short: unknown
last_checked: '2026-11-13'
title: NYSE / ICE tokenized securities
tags:
- platforms-venues
type: venue
chain: 'Settlement ledger: Avalanche (for the clearing firm); issuance: multiple chains (unnamed)'
status: rule filed; platform in development
last_updated: '2026-11-13'
description: 'In plain English: NYSE has a rule, like Nasdaq''s, to trade tokenized versions of listed stocks through DTC''s pilot.'
---

> [!info] At a glance
> **Type:** venue  
> **Jurisdiction:** United States  
> **Chain:** Settlement ledger: Avalanche (for the clearing firm); issuance: multiple chains (unnamed)  
> **Status:** rule filed; platform in development  
> **Last updated:** 2026-11-13  

| Field | Value |
|---|---|
| name | NYSE / ICE tokenized securities |
| jurisdiction | United States |
| product_name | SR-NYSE-2026-17; planned 24/7 platform |
| structure | Same security, tokenized form (DTC pilot); planned 24/7 venue |
| chains | Settlement ledger: Avalanche (for the clearing firm); issuance: multiple chains (unnamed) |
| who_can_buy | unknown |
| num_assets | unknown |

*In plain English: NYSE has a rule, like Nasdaq's, to trade tokenized versions of listed stocks through DTC's pilot. Separately it is building a 24/7 tokenized platform whose trades are to be recorded and settled on an Avalanche-based ledger.*

NYSE filed SR-NYSE-2026-17 (Rel. 34-105260), an immediately effective rule along the lines of Nasdaq's and tied to the [[concepts/glossary#dtc|DTC]] pilot ([NYSE](https://www.nyse.com/publicdocs/nyse/markets/nyse/rule-filings/sec-approvals/2026/%28SR-NYSE-2026-17%29_34-105260.pdf)).

Separately, ICE announced on 19 Jan 2026 that NYSE is developing a platform for 24/7 trading of tokenized equities and [[concepts/glossary#etf|ETFs]] with instant settlement and [[concepts/glossary#stablecoin|stablecoin]] funding, subject to approval and DTC readiness ([ICE](https://ir.theice.com/press/news-details/2026/The-New-York-Stock-Exchange-Develops-Tokenized-Securities-Platform/)).

## Settlement ledger: Avalanche
On 9 Nov 2026 NYSE said Avalanche "will provide the core ledger technology for the clearing firm on the NYSE-affiliated tokenized securities platform", which is designed, subject to regulatory approvals, to support 24/7 trading, clearing and settlement for its subscribers ([NYSE on X](https://x.com/NYSE/status/2119812983224213903)). NYSE's advisory describes the platform as an upcoming [[concepts/glossary#ats|ATS]] and the aim as bringing clearing of tokenized equities onchain ([NYSE](https://www.prnewswire.com/news-releases/avalanche-to-support-nyses-affiliated-upcoming-digital-ats-nyse-content-update-302933387.html)); Ava Labs describes the same clearing-ledger role ([Ava Labs](https://www.avalanche.com/about/blog/wall-streets-next-chapter-is-being-built-on-avalanche)).

Avalanche is the settlement ledger, not the only chain. The venue is meant to support stocks issued on a range of blockchains, while the Avalanche-based ledger records and settles trades (news reports: [The Block](https://www.theblock.co/news/business/2026-11-09-nyse-settle-tokenized-stocks-avalanche-planned-24-7-market-436208); [CoinDesk](https://www.coindesk.com/business/2026/11/09/nyse-picks-avalanche-to-settle-tokenized-stocks-amid-wall-street-s-blockchain-race)). Trades are to be matched on NYSE's existing technology, which CoinDesk names as its Pillar trading engine (news reports: [The Block](https://www.theblock.co/news/business/2026-11-09-nyse-settle-tokenized-stocks-avalanche-planned-24-7-market-436208), citing The Wall Street Journal; [CoinDesk](https://www.coindesk.com/business/2026/11/09/nyse-picks-avalanche-to-settle-tokenized-stocks-amid-wall-street-s-blockchain-race)). NYSE's Dennis Lee said the ledger that records and settles trades needs to be fast, reliable, predictable in cost and able to control who participates ([Ava Labs](https://www.avalanche.com/about/blog/wall-streets-next-chapter-is-being-built-on-avalanche)).

The Wall Street Journal reports Avalanche will be the only chain used for settlement on the planned platform (issuance remains multi-chain) and that NYSE picked it after testing several providers, citing speed, throughput and support for a permissioned network that meets compliance rules ([WSJ](https://www.wsj.com/finance/regulation/nyse-to-settle-tokenized-stocks-on-avalanche-blockchain-038ce412)).

On 9 Nov 2026 Avalanche also published an Avalanche Originals interview with Michael Blaugrund of the New York Stock Exchange, with an official transcript on the episode page (the YouTube video was uploaded at 7:59 AM ET that day) ([Avalanche Originals](https://www.avalanche.com/originals/the-invisible-layer-of-global-financial-infrastructure/)). Blaugrund said onchain settlement and onchain post-trade are "really the unlock." He described NYSE's matching system, Pillar, as processing "millions of messages per second, with tens of microseconds in latency," and said that after the trade "the post trade systems are running on mainframes" and "we can do better now." He said the NYSE tokenized equities platform is going to allow 24/7 trading, fractional share orders, orders "on dollar terms instead of share quantity terms," and "settlement versus stablecoin," which he called attractive retail use cases. The first thing an ordinary investor would notice, he said, is that after selling a stock "they could immediately use that cash to buy another stock, to withdraw, purchase something in the real economy," an instant reuse that had until then been available only for digital assets. He said transactions on the platform must be "reliable, dependable, and regulatory compliant," and that "Avalanche checks a lot of those boxes in a way that many other protocols don't yet do."

Dennis Lee also said, in a 9 Nov statement, "At the NYSE, we're looking at how blockchain technology can expand what we offer in equities, and we're picking the right technology for each job" ([CoinDesk](https://www.coindesk.com/business/2026/11/09/nyse-picks-avalanche-to-settle-tokenized-stocks-amid-wall-street-s-blockchain-race)). In a 10 Nov Cointelegraph interview, John Nahas of Ava Labs said "The NYSE spent a year testing Avalanche" ([Cointelegraph](https://cointelegraph.com/interview/ava-labs-nyse-general-purpose-chains)). On 9 Nov he told Paul Barron that Ava Labs had been "working with the team at NYSE for over a year, give or take" ([Paul Barron](https://www.paulbarronnetwork.com/network-update/nyse-chooses-avalanche-for-tokenized-equities-interview-ava-labs-john-nahas)). That duration is Ava Labs' account. It is consistent with Charley Cooper's earlier remark to The Block in September ([The Block](https://www.theblock.co/news/business/2026-11-09-nyse-settle-tokenized-stocks-avalanche-planned-24-7-market-436208)) and with the Journal's report that NYSE tested several providers, but NYSE itself has not published a testing timeline.

On the same Paul Barron show, Nahas said "the exclusivity refers to the fact that they are building their own layer one blockchain on Avalanche" (formerly called a subnet), "powered by the Avalanche network," and that this "will be the backbone of their 24-7 ATS system." He also said "every L1 will burn a specific amount of AVAX per validator that they run," and declined to discuss NYSE-specific token operations until those come from NYSE. Official NYSE and ICE materials published as of 13 Nov 2026 describe Avalanche as the core ledger technology for the clearing firm and do not themselves call that ledger an Avalanche layer-1 or describe an exclusivity arrangement. Avalanche's NYSE page defines an Avalanche L1 in a general FAQ but does not say the NYSE platform is one ([Avalanche](https://www.avalanche.com/nyse/)). Those points are therefore recorded as Ava Labs' claims.

No technical spec has been published, and the clearing firm is not named. The Wall Street Journal reports a fourth-quarter launch target but the year is not stated ([WSJ](https://www.wsj.com/finance/regulation/nyse-to-settle-tokenized-stocks-on-avalanche-blockchain-038ce412)); NYSE and ICE have not given a launch date. Asked about timing, Nahas said he did not want to get ahead of NYSE and left it to the exchange and its regulators ([Paul Barron](https://www.paulbarronnetwork.com/network-update/nyse-chooses-avalanche-for-tokenized-equities-interview-ava-labs-john-nahas)). As of 13 Nov 2026 the platform still needs regulatory approval ([NYSE on X](https://x.com/NYSE/status/2119812983224213903)).

## Transfer agent partners
For [[concepts/glossary#issuer-sponsored-token|issuer-sponsored tokens]], the company's [[concepts/glossary#transfer-agent|transfer agent]] mints the token and keeps the official record, so NYSE is lining up approved "digital transfer agents". As of 2 Nov 2026 there are six:

- **Securitize** (24 Mar 2026): first digital transfer agent eligible to mint blockchain-native securities for corporate or ETF issuers, and design partner for NYSE's digital transfer agent standards. Securitize Markets is expected to be a broker-dealer on the platform ([ICE](https://ir.theice.com/press/news-details/2026/New-York-Stock-Exchange-and-Securitize-Agree-to-Memorandum-of-Understanding-to-Support-Tokenized-Securities/default.aspx)). See [[issuers/securitize|Securitize]].
- **tZERO** (31 Aug 2026): design partner for transfer agent and broker-dealer infrastructure, expected to be designated an approved digital transfer agent once requirements are met. ICE is also investing in tZERO and licensing its blockchain patents ([tZERO](https://www.tzero.com/news/tzero-and-ice-agree-to-collaborate-on-infrastructure-for-public-tokenized-securities-markets)). See [[infrastructure/tzero|tZERO]].
- **Broadridge, Computershare, Equiniti and Superstate** (2 Nov 2026) joined the network ([NYSE on LinkedIn](https://www.linkedin.com/posts/for-more-than-two-centuries-the-nyse-has-ugcPost-7523072207032619009-W2YY/); [Crypto Briefing](https://cryptobriefing.com/nyse-expands-tokenization-push-with-firms-serving-nearly-99-of-sp-500/)). Per NYSE, Broadridge, Computershare and Equiniti together serve nearly 5,000 listed companies, including almost 99% of the S&P 500 ([Crypto Briefing](https://cryptobriefing.com/nyse-expands-tokenization-push-with-firms-serving-nearly-99-of-sp-500/)). Equiniti is being bought by [[platforms-venues/bullish|Bullish]] and co-founded the [[concepts/issuer-sponsored-token-coalition|Issuer Sponsored Token Coalition]].

Broadridge will also run on-chain shareholder voting for the platform: governance smart contracts tie tokens to meeting agendas, voting rules and results, and holders vote through supported wallets, broker apps or ProxyVote ([Broadridge](https://www.broadridge-ir.com/news/news-details/2026/Broadridge-to-Bring-OnChain-Governance-and-Digital-Transfer-Agency-to-New-York-Stock-Exchange-Tokenized-Securities-Platform/default.aspx)). See [[infrastructure/broadridge|Broadridge]].

No release from NYSE or ICE on the 2 Nov additions was on ICE's press page as of 2 Nov 2026; the partner list comes from NYSE's own post and press coverage.

## What this means for holders
- NYSE's rule SR-NYSE-2026-17 follows Nasdaq's and is tied to the [[concepts/glossary#dtc|DTC]] pilot ([NYSE](https://www.nyse.com/publicdocs/nyse/markets/nyse/rule-filings/sec-approvals/2026/%28SR-NYSE-2026-17%29_34-105260.pdf)).
- If your company's shares are tokenized through one of NYSE's six digital transfer agents, the token is meant to carry the same votes and dividends as a regular share, and Broadridge plans to handle on-chain voting ([Broadridge](https://www.broadridge-ir.com/news/news-details/2026/Broadridge-to-Bring-OnChain-Governance-and-Digital-Transfer-Agency-to-New-York-Stock-Exchange-Tokenized-Securities-Platform/default.aspx); [Crypto Briefing](https://cryptobriefing.com/nyse-expands-tokenization-push-with-firms-serving-nearly-99-of-sp-500/)).
- The planned 24/7 tokenized platform is subject to regulatory approval, so holders cannot use it yet ([ICE](https://ir.theice.com/press/news-details/2026/The-New-York-Stock-Exchange-Develops-Tokenized-Securities-Platform/)).
- Per Blaugrund, that platform is also meant to allow fractional share orders, dollar-denominated orders, settlement versus stablecoin, and immediate reuse of sale proceeds, once it is approved ([Avalanche Originals](https://www.avalanche.com/originals/the-invisible-layer-of-global-financial-infrastructure/)).

*Reference information only, not investment advice.*

## Sources
Public originals for the facts on this page.

- <https://www.nyse.com/publicdocs/nyse/markets/nyse/rule-filings/sec-approvals/2026/%28SR-NYSE-2026-17%29_34-105260.pdf>
- <https://ir.theice.com/press/news-details/2026/The-New-York-Stock-Exchange-Develops-Tokenized-Securities-Platform/>
- <https://ir.theice.com/press/news-details/2026/New-York-Stock-Exchange-and-Securitize-Agree-to-Memorandum-of-Understanding-to-Support-Tokenized-Securities/default.aspx>
- <https://www.tzero.com/news/tzero-and-ice-agree-to-collaborate-on-infrastructure-for-public-tokenized-securities-markets>
- <https://www.broadridge-ir.com/news/news-details/2026/Broadridge-to-Bring-OnChain-Governance-and-Digital-Transfer-Agency-to-New-York-Stock-Exchange-Tokenized-Securities-Platform/default.aspx>
- <https://cryptobriefing.com/nyse-expands-tokenization-push-with-firms-serving-nearly-99-of-sp-500/>
- <https://www.prnewswire.com/news-releases/avalanche-to-support-nyses-affiliated-upcoming-digital-ats-nyse-content-update-302933387.html>
- <https://www.avalanche.com/about/blog/wall-streets-next-chapter-is-being-built-on-avalanche>
- <https://www.theblock.co/news/business/2026-11-09-nyse-settle-tokenized-stocks-avalanche-planned-24-7-market-436208>
- <https://www.coindesk.com/business/2026/11/09/nyse-picks-avalanche-to-settle-tokenized-stocks-amid-wall-street-s-blockchain-race>
- <https://www.wsj.com/finance/regulation/nyse-to-settle-tokenized-stocks-on-avalanche-blockchain-038ce412>
- <https://www.avalanche.com/originals/the-invisible-layer-of-global-financial-infrastructure/>
- <https://cointelegraph.com/interview/ava-labs-nyse-general-purpose-chains>
- <https://www.paulbarronnetwork.com/network-update/nyse-chooses-avalanche-for-tokenized-equities-interview-ava-labs-john-nahas>
- <https://www.avalanche.com/nyse/>

*Last checked 2026-11-13. Headline fields only; `unknown` means not yet verified from a source.*
