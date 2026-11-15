---
name: Securitize (issuer-sponsored shares)
jurisdiction: unknown
product_name: Securitize Stocks; issuer-sponsored tokenized shares
structure: 'Securitize Stocks: UCC Article 8 security entitlements, 1:1 backed, via Securitize''s broker-dealer; also issuer-sponsored shares'
chains:
- Algorand (Exodus)
- Ethereum (per Zerion, secondary)
- Solana (per Zerion, secondary)
- Avalanche (per Zerion, secondary)
who_can_buy: Eligible investors in the United States, the European Union and other permitted jurisdictions (Securitize, 2 Nov 2026)
num_assets: 25 equities (Securitize, 2 Nov 2026); 13 added after the 8 Oct 2026 launch of 12
structure_short: Security entitlements + issuer shares
who_can_buy_short: Issuer-specific
last_checked: '2026-11-13'
title: Securitize (issuer-sponsored shares)
tags:
- issuers
type: issuer
chain:
- Algorand (Exodus)
- Ethereum (per Zerion, secondary)
- Solana (per Zerion, secondary)
- Avalanche (per Zerion, secondary)
status: live (Securitize Stocks launched 2026-10-08)
last_updated: '2026-11-13'
description: 'In plain English: Securitize acts as transfer agent and tokenization platform for funds and companies that issue tokens.'
---

> [!info] At a glance
> **Type:** issuer  
> **Jurisdiction:** unknown  
> **Chain:** Algorand (Exodus), Ethereum (per Zerion, secondary), Solana (per Zerion, secondary), Avalanche (per Zerion, secondary)  
> **Status:** live (Securitize Stocks launched 2026-10-08)  
> **Last updated:** 2026-11-13  

| Field | Value |
|---|---|
| name | Securitize (issuer-sponsored shares) |
| jurisdiction | unknown |
| product_name | Securitize Stocks; issuer-sponsored tokenized shares |
| structure | Securitize Stocks: UCC Article 8 security entitlements, 1:1 backed, via Securitize's broker-dealer; also issuer-sponsored shares |
| chains | Algorand (Exodus), Ethereum (per Zerion, secondary), Solana (per Zerion, secondary), Avalanche (per Zerion, secondary) |
| who_can_buy | Eligible investors in the United States, the European Union and other permitted jurisdictions (Securitize, 2 Nov 2026) |
| num_assets | 25 equities (Securitize, 2 Nov 2026); 13 added after the 8 Oct 2026 launch of 12 |

*In plain English: Securitize acts as transfer agent and tokenization platform for funds and companies that issue tokens.*

Example: Exodus Class A common stock tokens on Algorand, with Securitize as [[concepts/glossary#transfer-agent|transfer agent]] ([PR Newswire](https://www.prnewswire.com/news-releases/exodus-issues-security-token-on-algorand-expanding-access-to-the-growing-digital-security-ecosystem-301304582.html)); trading began on Securitize Markets in March 2022 ([Securitize](https://securitize.io/press-releases/exodus-begins-trading-on-securitize-markets)).

## Securitize Stocks (8 Oct 2026)
Launched stocks as UCC Article 8 security entitlements, 1:1 backed, on [[concepts/glossary#solana|Solana]], settled in USDC, through Securitize's [[concepts/glossary#broker-dealer|broker-dealer]]; Jump makes markets on the PropAMM; conversion to direct registration where available; an NYSE venue was planned in that launch release ([PR Newswire](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html); [RQD](https://rqdclearing.com/securitize-launches-global-onchain-trading-of-u-s-stocks-with-security-entitlements/)). The structure is called a convertible [[concepts/glossary#entitlement-token|entitlement token]] (CET). Securitize says it is open to eligible investors in the US, EU and other permitted jurisdictions, the backing shares will not be lent out, and lending and collateral use on markets like Aave is planned ([PR Newswire](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html)). CoinDesk reported 12 companies at launch ([CoinDesk](https://www.coindesk.com/business/2026/10/08/securitize-brings-apple-nvidia-and-tesla-to-solana-with-nyse-trading-in-the-works), news). A 2 Nov 2026 Securitize release says a second wave adds 13 security-entitlement tokens on Solana, bringing the total offering to 25 stocks for eligible investors in the United States, the European Union and other permitted jurisdictions. The 13 names added are Arista Networks (ANET), Flex Ltd. (FLEX), Exxon Mobil (XOM), GameStop (GME), Johnson & Johnson (JNJ), Lockheed Martin (LMT), Lumentum (LITE), Merck & Co. (MRK), Salesforce (CRM), Seagate Technology (STX), Texas Instruments (TXN), The Walt Disney Company (DIS) and Uber Technologies (UBER). The release says those join the original 12 launched in October: AAPL, MSFT, NVDA, GOOG, TSLA, META, AMZN, NFLX, CRCL, SPCX, MSTR and PLTR ([Securitize](https://investors.securitize.io/news/news-details/2026/Securitize-Expands-Onchain-U-S--Stock-Offering-to-25-Equities/default.aspx), raw/300).

On 11 Nov 2026 OKX said Securitize will provide the tokenization infrastructure for [[platforms-venues/okxice-tsv|OKXICE TSV]], with trading due to begin on 23 Nov 2026. Each token on that venue will represent a security entitlement backed one-to-one by an underlying U.S. share, with applicable shareholder rights including dividends, voting and corporate actions ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch), raw/253). That is a tokenizer role for the TSV, distinct from Securitize Stocks on Solana.

## TSV APIs and CET infrastructure (13 Nov 2026)
A 13 Nov 2026 article on Securitize's Medium publication describes infrastructure and APIs that TSV operators can integrate under the [[concepts/innovation-exemption|Innovation Exemption]] ([Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed), raw/302). Current developer documentation is at [developers.securitize.io](https://developers.securitize.io) (retrieved 13 Nov 2026, raw/303).

In that article, CET is used both as a custodial entitlement token — a [[concepts/glossary#security-entitlement|security entitlement]] to a real share held through a broker-dealer and custody structure — and, "at Securitize," as a convertible [[concepts/glossary#entitlement-token|entitlement token]], designed so a CET can later convert into an issuer-sponsored token while keeping the same onchain identity ([Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed), raw/302). The convertible structure was already described in the 8 Oct 2026 launch release above.

The article names three APIs. Current docs describe them as follows (raw/303):
- **SecId API** (called SecID in the article): investor onboarding, screening, eligibility and wallet permissioning, including a hosted onboarding option. The docs are not labelled Beta. They say Securitize can rely on a platform's existing identity verification, subject to an agreement, and still screens every investor against sanctions and PEP lists ([Securitize docs](https://developers.securitize.io/secid-api/overview), raw/303; [Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed), raw/302).
- **CET Underlying API**: authorized market makers buy and sell the underlying stocks or ETFs over an authenticated WebSocket, and Securitize mints or burns the corresponding CETs to match. The docs are not labelled Beta. The article says minting and burning happen through Securitize, outside the TSV, and that this separation matters under the Innovation Exemption, which restricts primary issuance activity on the venue ([Securitize docs](https://developers.securitize.io/cet-underlying-api/overview), raw/303; [Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed), raw/302).
- **Corporate Actions API**: event-driven information on corporate actions, dates and terms, changes, and trading restrictions such as halts, with signed webhooks, replay and a sandbox of scripted scenarios. The current overview is labelled **Beta**: the API and its webhooks are in development and subject to change, and paths, fields, enumerations and event names can change before 1.0.0 ([Securitize docs](https://developers.securitize.io/corporate-actions-api/overview), raw/303; [Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed), raw/302).

The same documentation site also has a **Stocks API**, for trading tokenized US-listed stocks, issuer-sponsored tokens and convertible entitlement tokens for investors onboarded through the SecId API. The current overview is labelled **Beta**: the endpoints are being opened to partners through the partner gateway, and paths, fields and errors can change before release. Production access requires a UI audit by Securitize Compliance of the live screens, including disclosures and market data (NBBO included) ([Securitize docs](https://developers.securitize.io/stocks-api/overview), raw/303).

On splits, the article says that on supported EVM deployments Securitize uses display [[concepts/glossary#multiplier|multipliers]] based on the ERC-8056 approach, and on [[concepts/glossary#solana|Solana]] it can use Scaled UI Amount, so the economic representation can change without liquidity providers withdrawing and recreating positions ([Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed), raw/302). Dividends and other entitlements, in the same article, are handled through Securitize's corporate-actions processing rather than described as reinvested into that multiplier.

The article says this is the mechanism Securitize is using to support the [[platforms-venues/okxice-tsv|OKXICE TSV]] launch, and the same infrastructure it is leveraging in its work supporting [[platforms-venues/formation-securities|Formation's TSV]], "enabling both stocks and ETFs to trade through the same CET infrastructure" ([Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed), raw/302). The OKX tokenizer role is already recorded from OKX's 11 Nov 2026 announcement above (raw/253). The stocks-and-ETFs wording is Securitize's description; Formation's official 9 Nov 2026 notice names only three Tokenized NMS Stocks for launch (FWDI, GLXY and EXOD) and does not mention ETFs ([[platforms-venues/formation-securities|Formation Securities]], raw/236).

The article also says the exemption requires a public notice at least 30 calendar days before operations start, and that the SEC expects the venue to be operationally ready when that notice is published. The notice period is not the build window: the integration should be ready before filing ([Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed), raw/302). The services described are subject to regulatory requirements, agreements, eligibility criteria and technical availability, and TSV operators remain responsible for the exemption conditions ([Securitize](https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed), raw/302).

## What this means for holders
- Securitize Stocks are UCC Article 8 security entitlements backed 1:1, held through Securitize's broker-dealer, on Solana and settled in USDC ([PR Newswire](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html)).
- Where available, holders can convert to direct registration, i.e. hold the share on the company's register ([PR Newswire](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html)).
- Eligible investors in the US, EU and other permitted jurisdictions, subject to local rules ([PR Newswire](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html)).
- The shares backing the tokens are not lent out ([PR Newswire](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html)).

## NYSE digital transfer agent
On 24 Mar 2026 NYSE named Securitize the first digital transfer agent eligible to mint blockchain-native securities for corporate or ETF issuers on its planned tokenized securities platform, with Securitize Markets expected to join as a broker-dealer ([ICE](https://ir.theice.com/press/news-details/2026/New-York-Stock-Exchange-and-Securitize-Agree-to-Memorandum-of-Understanding-to-Support-Tokenized-Securities/default.aspx)). By 2 Nov 2026 NYSE had five more transfer agent partners ([[platforms-venues/nyse-ice-tokenized-platform#transfer-agent-partners|NYSE / ICE]]).

*Reference information only, not investment advice.*

## DTC direct-registration comment letter (25 Oct 2026)
Securitize's issuer-sponsored tokens (ISTs) record the investor, not [[concepts/glossary#cede-co|Cede & Co.]], as the registered holder on the issuer's books ([Securitize letter](https://www.sec.gov/comments/SR-DTC-2026-012/srdtc2026012-1108719-3924407.pdf)). To turn an existing brokerage position into an IST, the shares must first leave [[concepts/glossary#dtc|DTC]] through the [[concepts/glossary#direct-registration-system-drs|Direct Registration System (DRS)]], which today can take several days ([Securitize letter](https://www.sec.gov/comments/SR-DTC-2026-012/srdtc2026012-1108719-3924407.pdf)). Securitize supports DTC's proposal to cut DRS processing "from days to minutes" ([SEC notice](https://www.federalregister.gov/documents/2026/10/05/2026-20301/self-regulatory-organizations-the-depository-trust-company-notice-of-filing-of-proposed-rule-change)) but asked the SEC for more ([Securitize letter](https://www.sec.gov/comments/SR-DTC-2026-012/srdtc2026012-1108719-3924407.pdf)):
- One instruction that burns a DTC-tokenized position and starts the DRS withdrawal, with a real-time completion message to the transfer agent ("Instant Burn-and-Notify").
- Published DRS processing targets and operating hours, reporting of actual times by stage, and the same modernization for [[concepts/glossary#dwac|DWAC]].
- A timing expectation for brokers to submit customer withdrawal requests, or letting the transfer agent start one on the investor's documented authorization.
- An equally fast path back to [[concepts/glossary#street-name|street name]].
- The tokenization link live by the commercial launch of DTCC's tokenization service, or a published timeline or follow-on filing within three months.

See [[infrastructure/dtcc-tokenization-pilot|DTCC / DTC tokenization pilot]]. Context: Brett Redfearn's [LinkedIn post](https://www.linkedin.com/pulse/time-dtc-modernization-now-brett-w-redfearn-a3tse) (28 Oct 2026, opinion).

## Sources
Public originals for the facts on this page.

- <https://ir.theice.com/press/news-details/2026/New-York-Stock-Exchange-and-Securitize-Agree-to-Memorandum-of-Understanding-to-Support-Tokenized-Securities/default.aspx>
- <https://www.federalregister.gov/documents/2026/10/05/2026-20301/self-regulatory-organizations-the-depository-trust-company-notice-of-filing-of-proposed-rule-change>
- <https://www.sec.gov/comments/SR-DTC-2026-012/srdtc2026012-1108719-3924407.pdf>
- <https://www.prnewswire.com/news-releases/exodus-issues-security-token-on-algorand-expanding-access-to-the-growing-digital-security-ecosystem-301304582.html>
- <https://securitize.io/press-releases/exodus-begins-trading-on-securitize-markets>
- <https://zerion.io/blog/best-tokenized-stock-platforms/>
- <https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html>
- <https://rqdclearing.com/securitize-launches-global-onchain-trading-of-u-s-stocks-with-security-entitlements/>
- <https://www.coindesk.com/business/2026/10/08/securitize-brings-apple-nvidia-and-tesla-to-solana-with-nyse-trading-in-the-works>
- <https://investors.securitize.io/news/news-details/2026/Securitize-Expands-Onchain-U-S--Stock-Offering-to-25-Equities/default.aspx>
- <https://medium.com/securitize/the-tsv-stack-you-bring-execution-and-liquidity-we-bring-the-stock-b2cb64c744ed>
- <https://developers.securitize.io>

*Last checked 2026-11-13. Headline fields only; `unknown` means not yet verified from a source.*
