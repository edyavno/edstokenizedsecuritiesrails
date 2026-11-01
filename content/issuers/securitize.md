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
who_can_buy: unknown
num_assets: 12 companies at launch (CoinDesk)
structure_short: Security entitlements + issuer shares
who_can_buy_short: Issuer-specific
last_checked: '2026-10-28'
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
last_updated: '2026-10-28'
description: 'In plain English: Securitize acts as transfer agent and tokenization platform for funds and companies that issue tokens.'
---

> [!info] At a glance
> **Type:** issuer  
> **Jurisdiction:** unknown  
> **Chain:** Algorand (Exodus), Ethereum (per Zerion, secondary), Solana (per Zerion, secondary), Avalanche (per Zerion, secondary)  
> **Status:** live (Securitize Stocks launched 2026-10-08)  
> **Last updated:** 2026-10-28  

| Field | Value |
|---|---|
| name | Securitize (issuer-sponsored shares) |
| jurisdiction | unknown |
| product_name | Securitize Stocks; issuer-sponsored tokenized shares |
| structure | Securitize Stocks: UCC Article 8 security entitlements, 1:1 backed, via Securitize's broker-dealer; also issuer-sponsored shares |
| chains | Algorand (Exodus), Ethereum (per Zerion, secondary), Solana (per Zerion, secondary), Avalanche (per Zerion, secondary) |
| who_can_buy | unknown |
| num_assets | 12 companies at launch (CoinDesk) |

*In plain English: Securitize acts as transfer agent and tokenization platform for funds and companies that issue tokens.*

Example: Exodus Class A common stock tokens on Algorand, with Securitize as [[concepts/glossary#transfer-agent|transfer agent]] ([PR Newswire](https://www.prnewswire.com/news-releases/exodus-issues-security-token-on-algorand-expanding-access-to-the-growing-digital-security-ecosystem-301304582.html)); trading began on Securitize Markets in March 2022 ([Securitize](https://securitize.io/press-releases/exodus-begins-trading-on-securitize-markets)).

## Securitize Stocks (8 Oct 2026)
Launched stocks as UCC Article 8 security entitlements, 1:1 backed, on [[concepts/glossary#solana|Solana]], settled in USDC, through Securitize's [[concepts/glossary#broker-dealer|broker-dealer]]; Jump makes markets on the PropAMM; conversion to direct registration where available; NYSE and OKXICE venues planned ([PR Newswire](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html); [RQD](https://rqdclearing.com/securitize-launches-global-onchain-trading-of-u-s-stocks-with-security-entitlements/)). The structure is called a convertible [[concepts/glossary#entitlement-token|entitlement token]] (CET). Securitize says it is open to eligible investors in the US, EU and other permitted jurisdictions, the backing shares will not be lent out, and lending and collateral use on markets like Aave is planned ([PR Newswire](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html)). CoinDesk reported 12 companies at launch ([CoinDesk](https://www.coindesk.com/business/2026/10/08/securitize-brings-apple-nvidia-and-tesla-to-solana-with-nyse-trading-in-the-works), news).

## What this means for holders
- Securitize Stocks are UCC Article 8 security entitlements backed 1:1, held through Securitize's broker-dealer, on Solana and settled in USDC ([PR Newswire](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html)).
- Where available, holders can convert to direct registration, i.e. hold the share on the company's register ([PR Newswire](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html)).
- Eligible investors in the US, EU and other permitted jurisdictions, subject to local rules ([PR Newswire](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html)).
- The shares backing the tokens are not lent out ([PR Newswire](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html)).

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

- <https://www.federalregister.gov/documents/2026/10/05/2026-20301/self-regulatory-organizations-the-depository-trust-company-notice-of-filing-of-proposed-rule-change>
- <https://www.sec.gov/comments/SR-DTC-2026-012/srdtc2026012-1108719-3924407.pdf>
- <https://www.prnewswire.com/news-releases/exodus-issues-security-token-on-algorand-expanding-access-to-the-growing-digital-security-ecosystem-301304582.html>
- <https://securitize.io/press-releases/exodus-begins-trading-on-securitize-markets>
- <https://zerion.io/blog/best-tokenized-stock-platforms/>
- <https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html>
- <https://rqdclearing.com/securitize-launches-global-onchain-trading-of-u-s-stocks-with-security-entitlements/>
- <https://www.coindesk.com/business/2026/10/08/securitize-brings-apple-nvidia-and-tesla-to-solana-with-nyse-trading-in-the-works>

*Last checked 2026-10-28. Headline fields only; `unknown` means not yet verified from a source.*
