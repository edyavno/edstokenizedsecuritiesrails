---
title: Innovation Exemption and the onchain-venue (TSV) model
type: concept
tags:
- concepts
last_checked: '2026-10-30'
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
- https://www.bullish.com/us/news-insights/leading-market-infrastructure-firms-form-coalition-to-advance-issuer-sponsored-tokenized-securities
- https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.10.28.pdf
- https://bettermarkets.org/wp-content/uploads/2026/10/Better-Markets-Comment-Letter-SEC-Innovation-Exemption.pdf
- https://www.nasdaq.com/docs/listings/faq-sec-innovation-exemption
- https://www.sifma.org/wp-content/uploads/2026/10/SIFMA-Innovation-Exemption-Initial-Letter-10-19-2026.pdf
- https://www.tokenizedstockvenue.com/notice.html
- https://www.sec.gov/Archives/edgar/data/1861657/000149315226049196/ex99-1.htm
- https://www.sec.gov/comments/4-927/4927-1106380-3893468.pdf
- https://www.sec.gov/comments/4-927/4927-1107499-3908312.pdf
- https://www.sec.gov/comments/4-927/4927-1096319-3852226.pdf
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

## TSV notices
The SEC lists three TSV notices: TSV LLC (23 Sep 2026), OKXICE TSV (4 Oct 2026) and Kephas Corporation d/b/a Perpetuals.com (14 Oct 2026) ([SEC](https://www.sec.gov/about/divisions-offices/division-trading-markets/innovation-exemption)). None had started trading by 25 Oct 2026 per their notices and the SEC page. TSV LLC revised its notice on 19 Oct (v1.1) and 23 Oct 2026 (v1.2): it will run on Canton with USDC and SBC as paired assets at commencement, and the issuer's transfer agent handles participant verification and minting ([TSV LLC](https://www.tokenizedstockvenue.com/notice.html)). Version 1.3 (29 Oct 2026) names its first stock, tokenized Canton Strategic Holdings (Nasdaq: CNTN), with Fairmint TA LLC as transfer agent; because the issuer's own transfer agent tokenizes the shares with the issuer's authorization, the third-party objection window does not apply ([TSV LLC notice v1.3](https://www.tokenizedstockvenue.com/notice.html), raw/160). CNTN's 8-K press release says trading is expected as early as 2 Nov 2026 ([CNTN 8-K](https://www.sec.gov/Archives/edgar/data/1861657/000149315226049196/ex99-1.htm), raw/161). See [[platforms-venues/tsv-llc|TSV LLC]].

## Issuer objection
For third-party tokens, the issuer gets notice and can object during the 30-day window ([SEC order](https://business.cch.com/srd/34-106402091726.pdf)). Explainer applied to the first notice: [Dida Labs](https://didalabs.com/tokenized-stock-objection/) (analysis). First test: by 21 Oct 2026, 16 issuers, including Goldman Sachs, Microsoft, Alphabet and McDonald's, had objected to OKXICE listings ([CNBC](https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html), news). By OKXICE's 28 Oct notice the count was 38, including JPMorgan, Coca-Cola, Walmart and Eli Lilly ([OKXICE notice, 28 Oct](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.10.28.pdf)); by its 30 Oct notice it was 50, adding NVIDIA, Costco, Micron and NIKE among others ([OKXICE notice, 30 Oct](https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.10.30.pdf)).

How the opt-out works for issuers, per Nasdaq's FAQ ([Nasdaq](https://www.nasdaq.com/docs/listings/faq-sec-innovation-exemption), last updated 29 Sep 2026): the TSV must send notice to the address of the issuer's principal executive offices on its Exchange Act reports; the issuer has 30 calendar days from receipt to object; the objection goes directly to that venue, and Nasdaq can't file it for them. Notices and [[concepts/glossary#opt-out-issuer-objection|opt-outs]] are per TSV, with no blanket opt-out. Nasdaq says it intends to opt Nasdaq, Inc. out of TSVs, and warns that TSVs don't have to show best prices or report trades until 10 minutes after they happen.

The contrast CNBC draws: offshore volume is mostly perps and [[concepts/glossary#wrapper|wrapped]] tokens that never needed issuer permission, while the US path gives issuers a say ([CNBC](https://www.cnbc.com/2026/10/21/tokenized-stocks-us-companies-object.html)). See [[platforms-venues/okxice-tsv]].

## Industry response
A week after the order, Bullish and Equiniti formed the [[concepts/issuer-sponsored-token-coalition|Issuer Sponsored Token Coalition]], citing the requirement that venues verify a token gives holders the same rights as the traditional share ([Bullish](https://www.bullish.com/us/news-insights/leading-market-infrastructure-firms-form-coalition-to-advance-issuer-sponsored-tokenized-securities)).

## Comment file (4-927)
Better Markets, an investor advocacy nonprofit, filed a 13-page letter on 22 Oct 2026. It calls TSVs and the dealer exemption the largest rewrite of secondary equity trading rules since [[concepts/glossary#reg-nms|Reg NMS]], argues such changes need APA notice-and-comment rulemaking (with cost-benefit analysis) rather than an order, and urges the SEC to withdraw or rescind the order. It also asks that third-party tokens require the issuer's affirmative consent instead of an opt-out ([Better Markets](https://bettermarkets.org/wp-content/uploads/2026/10/Better-Markets-Comment-Letter-SEC-Innovation-Exemption.pdf), raw/155).

SIFMA, the broker-dealer and asset manager trade group, filed an initial letter on 19 Oct 2026 (signed by CEO Kenneth Bentsen). Unlike Better Markets it does not ask for withdrawal; it asks the SEC to amend the order and answer operational questions. Its asks: trading of third-party tokens only with the issuer's affirmative consent (opt-in); failing that, an official SEC- or FINRA-run portal listing TSVs, their notices and issuer elections, a 90-day objection period from confirmed receipt, and a single universal issuer opt-out; and the right to object at any time, even after trading starts. It also asks about surveillance (CAT, ISG), volume limits across venues, beneficial ownership and corporate actions, and says it would support the SEC giving venues more time before they begin operating ([SIFMA](https://www.sifma.org/wp-content/uploads/2026/10/SIFMA-Innovation-Exemption-Initial-Letter-10-19-2026.pdf), raw/158).

Solana Policy Institute filed the first clearly supportive letter on 22 Oct 2026 (signed by CEO Miller Whitehouse-Levine and General Counsel Patrick Wilson). It commends the order and makes one ask: define "public, permissionless distributed ledger" with a functional, control-based test, drawing on the Senate draft of the Clarity Act. Its five factors: open-source code; anyone can read and submit transactions without individual authorization; pre-set, transparent protocol rules; no person or group with persistent or exclusive power to order or validate transactions, decide inclusion, control finality or change the rules; and no unilateral power to censor or grant preferential treatment. It also asks that disclosed, temporary incident responses (such as a network pause or emergency patch) not disqualify a ledger. SIFMA asked for a similar definition ([Solana Policy Institute](https://www.sec.gov/comments/4-927/4927-1106380-3893468.pdf), raw/159).

Katya Malinova (McMaster) and Andreas Park (Toronto), market-structure academics, filed on 23 Oct 2026 against the volume caps. Their argument: arbitrage trades that keep pool prices in line with the main market count toward the cap, so the cap limits the very thing that fixes price gaps; and capping volume caps the fee income that pays liquidity providers, so costs rise. In their model the lowest attainable trading cost scales with 1/√s for a cap at share s of market volume: about 20 times at the 0.25 percent cap and about 6 times at 2.5 percent. They ask the SEC to remove the caps, or set them per stock, and to study AMM effects on market quality ([Malinova and Park](https://www.sec.gov/comments/4-927/4927-1107499-3908312.pdf), raw/162).

DeFi Education Fund (16 Oct 2026) also welcomed the order, but notes it covers only intermediated, permissioned venues and asks for rulemaking with safe harbors for developers of decentralized exchanges and their user interfaces ([DeFi Education Fund](https://www.sec.gov/comments/4-927/4927-1096319-3852226.pdf)).

## Stablecoin legs
TSV pools pair against payment [[concepts/glossary#stablecoin|stablecoins]]; the GENIUS Act (S.1582, P.L. 119-27) defines permitted payment stablecoins and 1:1 reserves ([GENIUS Act](https://www.congress.gov/119/bills/s1582/BILLS-119s1582enr.htm)). The Act takes effect on 18 Jan 2027; the OCC's final rule for issuers under its jurisdiction takes effect the same day ([OCC](https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-50.html); [Federal Register](https://www.federalregister.gov/documents/2026/10/23/2026-21706/implementing-the-guiding-and-establishing-national-innovation-for-us-stablecoins-act-for-the), FR Doc. 2026-21706).

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
- <https://www.bullish.com/us/news-insights/leading-market-infrastructure-firms-form-coalition-to-advance-issuer-sponsored-tokenized-securities>
- <https://bettermarkets.org/wp-content/uploads/2026/10/Better-Markets-Comment-Letter-SEC-Innovation-Exemption.pdf>
- <https://www.nasdaq.com/docs/listings/faq-sec-innovation-exemption>
- <https://www.sifma.org/wp-content/uploads/2026/10/SIFMA-Innovation-Exemption-Initial-Letter-10-19-2026.pdf>
- <https://www.tokenizedstockvenue.com/notice.html>
- <https://www.sec.gov/Archives/edgar/data/1861657/000149315226049196/ex99-1.htm>
- <https://www.sec.gov/comments/4-927/4927-1106380-3893468.pdf>
- <https://www.sec.gov/comments/4-927/4927-1107499-3908312.pdf>
- <https://www.sec.gov/comments/4-927/4927-1096319-3852226.pdf>
