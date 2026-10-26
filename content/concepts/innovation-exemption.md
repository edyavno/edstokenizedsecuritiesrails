---
title: Innovation Exemption and the onchain-venue (TSV) model
type: concept
tags:
- concepts
last_checked: '2026-10-23'
sources:
- https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html
- https://business.cch.com/srd/34-106402091726.pdf
- https://business.cch.com/srd/SECgov_SECIssuesInnovationExemptiontoFacilitatetheTradingofTokenizedNMSStockandRequestforComment091726.pdf
- https://business.cch.com/srd/SECgov_StatementontheInnovationExemption_ABridgeTowardDurableRulemaking091726.pdf
- https://www.skadden.com/insights/publications/2026/09/sec-innovation-exemption-establishes
- https://www.davispolk.com/insights/client-update/sec-s-innovation-exemption-opens-path-tokenized-stock-trading
- https://www.wilmerhale.com/en/insights/client-alerts/20261005-the-innovation-exemption-arrives-sec-clears-a-conditional-path-for-onchain-trading-of-tokenized-nms-stocks
- https://didalabs.com/tokenized-stock-objection/
- https://www.congress.gov/119/bills/s1582/BILLS-119s1582enr.htm
description: 'In plain English: The SEC now lets a few approved onchain venues trade tokens of US stocks, for a limited time and under conditions.'
---

*In plain English: The SEC now lets a few approved onchain venues trade tokens of US stocks, for a limited time and under conditions. This page explains how that works and who objects.*

On 17 Sep 2026 the SEC issued an order (Rel. 34-106402, File 4-927) granting temporary, conditional section 36(a)(1) relief ([SEC order](https://business.cch.com/srd/34-106402091726.pdf); [press release](https://business.cch.com/srd/SECgov_SECIssuesInnovationExemptiontoFacilitatetheTradingofTokenizedNMSStockandRequestforComment091726.pdf)):
- **Tokenized Securities Venues (TSVs)** operating permissioned [[concepts/glossary#amm-automated-market-maker|AMM]] liquidity pools are exempt from the definition of "exchange".
- **Covered Firm** liquidity providers are exempt from the definition of "dealer".
- **Conditions** include U.S. person and OFAC compliance, a 30-day public notice, issuer notice and objection for third-party tokens, same rights as the underlying, public auditable [[concepts/glossary#smart-contract|smart contracts]] on a permissionless ledger, and synchronized halts ([SEC order](https://business.cch.com/srd/34-106402091726.pdf)).
- **Caps**: Tier 1 cannot exceed 75 symbols and 0.25 percent of prior-month average daily share volume; Tier 2 cannot exceed 250 symbols and 2.5 percent ([SEC order](https://business.cch.com/srd/34-106402091726.pdf); [Skadden](https://www.skadden.com/insights/publications/2026/09/sec-innovation-exemption-establishes)).
- Synthetics are excluded; the order expires five years after publication ([SEC order](https://business.cch.com/srd/34-106402091726.pdf)).

Chairman Atkins framed it as a bridge to durable rulemaking ([statement](https://business.cch.com/srd/SECgov_StatementontheInnovationExemption_ABridgeTowardDurableRulemaking091726.pdf)). Law-firm analyses: [Skadden](https://www.skadden.com/insights/publications/2026/09/sec-innovation-exemption-establishes), [Davis Polk](https://www.davispolk.com/insights/client-update/sec-s-innovation-exemption-opens-path-tokenized-stock-trading), [WilmerHale](https://www.wilmerhale.com/en/insights/client-alerts/20261005-the-innovation-exemption-arrives-sec-clears-a-conditional-path-for-onchain-trading-of-tokenized-nms-stocks).

## Issuer objection
For third-party tokens, the issuer gets notice and can object during the 30-day window ([SEC order](https://business.cch.com/srd/34-106402091726.pdf)). Explainer applied to the first notice: [Dida Labs](https://didalabs.com/tokenized-stock-objection/) (analysis). First test: by 21 Oct 2026, 16 issuers, including Goldman Sachs, Microsoft, Alphabet and McDonald's, had objected to OKXICE listings ([CNBC](https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html), news).

The contrast CNBC draws: offshore volume is mostly perps and [[concepts/glossary#wrapper|wrapped]] tokens that never needed issuer permission, while the US path gives issuers a say ([CNBC](https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html)). See [[platforms-venues/okxice-tsv]].

## Stablecoin legs
TSV pools pair against payment [[concepts/glossary#stablecoin|stablecoins]]; the GENIUS Act (S.1582, P.L. 119-27) defines permitted payment stablecoins and 1:1 reserves ([GENIUS Act](https://www.congress.gov/119/bills/s1582/BILLS-119s1582enr.htm)).

First notice: [[platforms-venues/okxice-tsv|OKXICE TSV]]. Primitive: [[infrastructure/uniswap-permissioned-pools|Uniswap permissioned pools]].

## Sources
Public originals for the facts on this page.

- <https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html>
- <https://business.cch.com/srd/34-106402091726.pdf>
- <https://business.cch.com/srd/SECgov_SECIssuesInnovationExemptiontoFacilitatetheTradingofTokenizedNMSStockandRequestforComment091726.pdf>
- <https://business.cch.com/srd/SECgov_StatementontheInnovationExemption_ABridgeTowardDurableRulemaking091726.pdf>
- <https://www.skadden.com/insights/publications/2026/09/sec-innovation-exemption-establishes>
- <https://www.davispolk.com/insights/client-update/sec-s-innovation-exemption-opens-path-tokenized-stock-trading>
- <https://www.wilmerhale.com/en/insights/client-alerts/20261005-the-innovation-exemption-arrives-sec-clears-a-conditional-path-for-onchain-trading-of-tokenized-nms-stocks>
- <https://didalabs.com/tokenized-stock-objection/>
- <https://www.congress.gov/119/bills/s1582/BILLS-119s1582enr.htm>
