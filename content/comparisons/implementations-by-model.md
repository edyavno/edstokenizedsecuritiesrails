---
title: Implementations compared by model
type: comparison
tags:
- comparisons
last_checked: '2026-11-13'
sources:
- https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
- https://www.kraken.com/ipo/anthropic
- https://docs.dinari.com/docs/us
- https://docs.xstocks.fi/docs/frequently-asked-questions
- https://docs.xstocks.fi/docs/issuance-and-redemption/market-flow
- https://docs.xstocks.fi/docs/issuance-and-redemption/in-kind-flow-xport
- https://cdn.robinhood.com/assets/robinhood/legal/rhj_base_prospectus.pdf
- https://cdn.robinhood.com/assets/robinhood/legal/stock_tokens_kid_eu.pdf
- https://robinhood.com/eu/en/support/articles/stock-tokens-faq/
- https://docs.dinari.com/docs/placing-orders
- https://dinari.com/dshares
- https://docs.ondo.finance/ondo-stocks/investing-and-redeeming
- https://docs.ondo.finance/ondo-stocks/legal-and-regulatory
- https://www.linkedin.com/posts/sytaylor_there-are-4-models-of-stock-tokens-each-share-7526006201432686592-ntwC
- https://lnkd.in/p/duAUZtYs
- https://docs.xstocks.fi/developers/multipliers
- https://support.kraken.com/articles/xstocks-faq
- https://communications.dtcc.com/rs/669-QIL-921/images/DTCC%20Tokenization%20Service%20At-a-Glance.pdf
- https://www.sec.gov/files/tm/no-action/dtc-nal-121125.pdf
- https://www.prnewswire.com/news-releases/kimber-digital-securities-becomes-a-registered-broker-dealer-bringing-real-us-securities-onchain-302935166.html
- https://www.formationsecurities.com/notice.pdf
- https://www.okx.com/en-us/learn/okxice-tsv-launch
- https://docs.ondo.finance/ondo-stocks/overview
- https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks
- https://api.coinbase.com/v1/tokenized-stocks
- https://docs.robinhood.com/chain/stock-token-apis/
- https://learn.backpack.exchange/blog/tokenized-nvidia-nvda
- https://ondo.finance/blog/ondo-stocks-as-collateral-on-spout
description: 'In plain English: A side-by-side table of tokenized stock projects, grouped by legal model, including what a holder can redeem the token into.'
---

*In plain English: A side-by-side table of tokenized stock projects, grouped by legal model, including what a holder can redeem the token into.*

Classification follows the [[concepts/legal-taxonomy|SEC staff taxonomy]]. Details and sources are on each linked page. Jersey Stock Tokens and EU Classic Stock Tokens are different products (both are on the Robinhood page). Cells for Coinbase, Backpack, bStocks, DTC and the venues use existing vault sources; this pass did not re-open those issuer redemption docs.

| Implementation | Model | Key mechanism | What can you redeem into? |
|---|---|---|---|
| [[issuers/superstate-opening-bell\|Superstate Opening Bell]] | Issuer-sponsored | SEC-registered transfer agent; onchain cap table | The token is the share on the company's own register (SEC-registered transfer agent); a native share, not a wrapper ([Galaxy](https://www.galaxy.com/newsroom/galaxy-superstate-launch-glxy-tokenized-public-shares)). No separate cash-or-share redeem. |
| [[issuers/securitize\|Securitize (issuer shares)]] | Issuer-sponsored | Transfer agent book entry | The investor, not Cede & Co., is the registered holder on the issuer's books ([Securitize letter](https://www.sec.gov/comments/SR-DTC-2026-012/srdtc2026012-1108719-3924407.pdf)). |
| [[infrastructure/fairmint\|CNTN via Fairmint]] | Issuer-sponsored | SEC-registered transfer agent keeps the official onchain register on Canton; trades on [[platforms-venues/tsv-llc\|TSV LLC]] | The token is recorded on the company's own register by its SEC-registered transfer agent ([CNTN release](https://www.prnewswire.com/news-releases/first-trades-of-tokenized-us-equity-under-sec-innovation-exemption-executed-on-the-canton-network-302929795.html)). |
| [[issuers/securitize\|Securitize Stocks]] | Custodial entitlement | UCC Art. 8 via broker-dealer; Solana PropAMM | UCC Article 8 entitlement; where available, holders can convert to direct registration ([PR Newswire](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html)). |
| [[issuers/coinbase-tokenized-stocks\|Coinbase B20]] | Custodial claim | Beneficial claim; Alpaca custody | Redemption rights only for Vested Holders, per the prospectus (see the [[issuers/coinbase-tokenized-stocks\|Coinbase]] page). |
| [[issuers/dinari\|Dinari dShares]] | Broker-dealer mirror record | Tokens mirror off-chain brokerage books | Sell/burn for payment tokens (stablecoin proceeds); the custodian sells the share. No in-kind delivery found in issuer docs ([placing orders](https://docs.dinari.com/docs/placing-orders); [dShares](https://dinari.com/dshares)). KYC required. US tokens are currently non-transferable ([US docs](https://docs.dinari.com/docs/us)). |
| [[issuers/backpack\|Backpack Securities]] | Custodial entitlement + token | Art. 8 entitlement at the broker; separate 1:1 Solana token | 1:1 into the underlying entitlement by depositing the token to a Backpack account ([Backpack](https://learn.backpack.exchange/articles/what-is-backpack-securities)). |
| [[infrastructure/dtcc-tokenization-pilot\|DTC Tokenized Entitlements]] | Custodial entitlement (post-trade) | DTC participants; NAL | Conversion orders via UI/API, Monday–Friday 2 a.m.–6 p.m. ET, targeting 15 minutes or less ([DTCC At-a-Glance](https://communications.dtcc.com/rs/669-QIL-921/images/DTCC%20Tokenization%20Service%20At-a-Glance.pdf)). |
| [[issuers/ondo-global-markets\|Ondo Stocks]] | Synthetic / note | BVI SPV notes; economic exposure | Direct platform redeem with Ondo for USDon or USDC; notes, not title to the share ([investing and redeeming](https://docs.ondo.finance/ondo-stocks/investing-and-redeeming); [legal](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory)). $1 minimum; KYC. Ondo also says approved institutions can use an in-kind conversion through Alpaca's ITN that returns shares rather than cash ([Ondo](https://ondo.finance/blog/ondo-stocks-as-collateral-on-spout), raw/292). |
| [[issuers/robinhood-stock-tokens\|Robinhood Stock Tokens]] | Synthetic / debt security | Jersey issuer; no rights in underlying | Jersey Stock Tokens: cash only; the prospectus excludes physical delivery of the underlying ([base prospectus, 25 June 2026](https://cdn.robinhood.com/assets/robinhood/legal/rhj_base_prospectus.pdf)). Ordinary holders generally sell on the secondary market; direct issuer redemption only in limited no-AP or issuer-notice cases, plus KYC/AML. EU Classic Stock Tokens (separate product): cannot redeem for shares; sell back to Robinhood Europe in the app for EUR (0.10% FX fee, €1 minimum) ([KID, 1 July 2026](https://cdn.robinhood.com/assets/robinhood/legal/stock_tokens_kid_eu.pdf); [EU FAQ](https://robinhood.com/eu/en/support/articles/stock-tokens-faq/)). |
| [[issuers/bstocks\|bStocks]] | Synthetic / certificate | ADGM certificates over shares | 1:1 conversion between supported stock holdings and bStocks (per Binance announcement, via Zerion) ([Binance](https://www.binance.com/my-MM/square/post/332985202800018)). |
| [[issuers/xstocks-backed\|xStocks]] | Backed tracker | Jersey issuer; multiplier | After KYC, redeem with the issuer for USDC, USDG or USDT ($5,000 minimum stated for direct issuer flow; fees currently 0) or in-kind shares into an Alpaca brokerage account via xPort ([FAQ](https://docs.xstocks.fi/docs/frequently-asked-questions); [Market Flow](https://docs.xstocks.fi/docs/issuance-and-redemption/market-flow); [xPort](https://docs.xstocks.fi/docs/issuance-and-redemption/in-kind-flow-xport)). Tracker certificates, not shareholder rights. Most users exit on secondary markets. |
| [[platforms-venues/hyperliquid-equity-perps\|Equity perps (HIP-3, Ostium)]] | Synthetic derivative | Perpetual futures; cash margin, no share held | N/A — cash-settled perpetual; no share held ([Ostium](https://docs.ostium.com/protocol/how-ostium-works); [[platforms-venues/hyperliquid-equity-perps\|equity perps]]). |
| [[platforms-venues/okxice-tsv\|OKXICE TSV]] | Venue (TSV) | Permissioned [[concepts/glossary#amm-automated-market-maker\|AMM]] under the Innovation Exemption; announced launch beginning 23 Nov 2026 ([OKX](https://www.okx.com/en-us/learn/okxice-tsv-launch)) | N/A (venue). |
| [[platforms-venues/formation-securities\|Formation Securities]] | Venue (TSV, notice filed; not yet trading) | Permissioned Orca AMM on Solana under the Innovation Exemption ([Formation notice](https://www.formationsecurities.com/notice.pdf)) | N/A (venue). |
| [[concepts/post-trade-reg-nms-model\|Nasdaq / NYSE]] | Venue (exchange) | Same book, DTC settlement | N/A (exchange; DTC settlement). |

## Same stock, different tokens

The same listed stock can have more than one token, issued by different firms, with different legal rights. Display tickers often use a suffix, but that is an issuer convention, not a single standard, and onchain metadata can change. Identify a token by its contract address, not by the ticker alone. See [[concepts/glossary#ticker-suffix|ticker suffix]] ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks), raw/264; [Backpack listings](https://learn.backpack.exchange/blog/tokenized-nvidia-nvda), raw/267). Examples below use widely cited large-cap names already on this wiki. This is not a complete token list, and a suffix is not documented here unless an official page or official API retrieved on 12 Nov 2026 showed it.

| Pattern | Example | Issuer | Typical chains | What you hold |
|---|---|---|---|---|
| Suffix `x` | NVDAx, TSLAx | [[issuers/xstocks-backed\|xStocks]] (Backed) | Solana, Ethereum, TON, Ink | A tracker certificate: economic exposure, not shareholder rights ([Kraken FAQ](https://support.kraken.com/articles/xstocks-faq), raw/261; [xStocks FAQ](https://docs.xstocks.fi/docs/frequently-asked-questions), raw/260). The `x` ending is used throughout Kraken's FAQ; the official issuer FAQ does not itself define a suffix rule. |
| Suffix `on` | TSLAon | [[issuers/ondo-global-markets\|Ondo Stocks]] | Ethereum, BNB Chain, Solana | A structured note, designed for economic exposure, "not direct title" to the underlying assets ([Ondo overview](https://docs.ondo.finance/ondo-stocks/overview), raw/262). Ondo documents the `on` suffix as official ("onchain or Ondo"). |
| Suffix `c` | TSLAc, NVDAc | [[issuers/coinbase-tokenized-stocks\|Coinbase]] | Base | A beneficial claim on a share held in bankruptcy-remote custody, not a share on the company's register ([Base docs](https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks), raw/264). Every symbol in Coinbase's public tokenized-stocks API list retrieved on 12 Nov 2026 ended in `c` (338 tokens; raw/264). |
| Often `rh` onchain; official API uses the bare ticker | NVDArh (onchain display); API example AAPL | [[issuers/robinhood-stock-tokens\|Robinhood]] Stock Tokens | Robinhood Chain | Jersey Stock Tokens are debt securities and give no rights in the underlying shares, as already recorded on the issuer page. The official Stock Token API uses the underlying ticker with no suffix ([Stock Token APIs](https://docs.robinhood.com/chain/stock-token-apis/), raw/266). Onchain display symbols such as NVDArh are attributed to Ondo's 27 Oct 2026 blog (raw/157), not to that API page. |
| No suffix | $NVDA (token name "Nvidia - Backpack Securities") | [[issuers/backpack\|Backpack Securities]] | Solana | An Article 8 entitlement plus a 1:1 token, as already recorded on the issuer page. Listings use the cash-equity ticker and tell readers to check the token name and address ([Backpack](https://learn.backpack.exchange/blog/tokenized-nvidia-nvda), raw/267). |

Suffixes for other issuers on the table above (including Dinari, bStocks and Securitize) are not listed here because official docs retrieved for this update did not define one.

How the broker-backed and issuer-sponsored models differ in practice (where the share sits, who creates supply, lost keys): [[build/trading-reference-architecture#broker-backed-vs-issuer-sponsored-register|Broker-backed vs issuer-sponsored register]]. How each venue matches and settles: [[comparisons/trading-venue-architectures|Trading venue architectures]].

Kimber Digital Securities LLC, a Plume affiliate, said on 10 Nov 2026 that it is now an SEC-registered broker-dealer and a FINRA member. It plans tokens that would record a customer's security entitlement against the broker-dealer, with the firm holding a matching entitlement at DTC; it describes this as the same legal interest investors hold today and "not a wrapper," and says investors could use ACATS to move portfolios between offchain and onchain formats. The release states that access to DTC tokenized entitlements and related capabilities is under development and may not yet be available; it does not give a launch date ([PR Newswire](https://www.prnewswire.com/news-releases/kimber-digital-securities-becomes-a-registered-broker-dealer-bringing-real-us-securities-onchain-302935166.html), raw/239).

## Four ways a stock token can be built

The table above is grouped by the [[concepts/legal-taxonomy|SEC staff taxonomy]]. [Simon Taylor](https://www.linkedin.com/posts/sytaylor_there-are-4-models-of-stock-tokens-each-share-7526006201432686592-ntwC) has described a reader-friendly lens with four models, each trading off shareholder rights, innovation and backward compatibility (LinkedIn post, retrieved 10 Nov 2026; short link: [lnkd.in/p/duAUZtYs](https://lnkd.in/p/duAUZtYs)). The mapping here is to rows this page already tracks. It is his framing, not a legal classification or this wiki's opinion.

**Wrapped.** His example is [[issuers/xstocks-backed|xStocks]]: a custodian holds the real share, the issuer (Backed) issues a token, and the holder does not get shareholder rights. Trade-off, in his words: this maximizes innovation and can work with any stock, at the cost of those rights. On this page, [[issuers/backpack|Backpack]]-style products sit nearby in that lens, though the table's legal grouping treats them as a custodial entitlement plus a separate token.

**Pooled.** His example is [[platforms-venues/okxice-tsv|OKXICE]]: a venue tokenizes real shares, and approved traders trade against a liquidity pool. Trade-off, in his telling: the design aims to be innovative, backward compatible and to preserve shareholder rights; under the Innovation Exemption, issuers can object to their stock being traded that way.

**Mirrored.** His example is [[infrastructure/dtcc-tokenization-pilot|DTC Tokenized Entitlements]]: the original stock is immobilized, and the depository issues a token in its place. Trade-off, in his words: this maximizes backward compatibility and preserves shareholder rights, and trades off a lot of innovation.

**Natively issued.** His examples include [[issuers/superstate-opening-bell|Superstate]] (and Figure). On this table, [[infrastructure/fairmint|CNTN via Fairmint]] and [[issuers/securitize|Securitize issuer-sponsored shares]] are the other issuer-sponsored rows, where the token is the share on the company's own register. Trade-off, in his words: this maximizes innovation and rights, and gives up backward compatibility.

The wrapped and mirrored rows also differ in the claim a holder has. In a wrapped token such as [[issuers/xstocks-backed|xStocks]], a third-party issuer, Backed Assets (JE) Limited, issues a tracker certificate: the holder has that certificate, not the share itself, and it does not convey shareholder rights; the official issuer FAQ says the underlying stock is held by regulated custodians, without naming the firm ([xStocks FAQ](https://docs.xstocks.fi/docs/frequently-asked-questions), raw/260; [xStocks multiplier docs](https://docs.xstocks.fi/developers/multipliers)). Kraken's FAQ, last updated 11 Nov 2026, names Alpaca Securities LLC as the custodian of the underlying shares and InCore Bank as a secondary custodian; Payward's 11 Nov 2026 release says GTN handles global execution and custody of the traditional assets that underpin each token. Those are separate company statements, recorded side by side on the [[issuers/xstocks-backed|xStocks]] page ([Kraken FAQ](https://support.kraken.com/articles/xstocks-faq), raw/261; [Payward](https://www.payward.com/press-release/xstocks-uk-eu-equities), raw/243). In [[infrastructure/dtcc-tokenization-pilot|DTC Tokenized Entitlements]], securities are held at DTC and official books and records remain with DTC; on a participant's instruction, DTC mints and delivers a token representing that participant's security entitlement to the held position ([DTCC At-a-Glance](https://communications.dtcc.com/rs/669-QIL-921/images/DTCC%20Tokenization%20Service%20At-a-Glance.pdf); [SEC no-action letter](https://www.sec.gov/files/tm/no-action/dtc-nal-121125.pdf)). Under the [[concepts/legal-taxonomy|SEC staff taxonomy]], that is a custodial security entitlement (for example, under UCC Article 8), so the token evidences an interest in the position at DTC rather than a separate instrument of a third-party issuer; the staff has also noted that holders of third-party-sponsored tokens may be exposed to risks with respect to that third party, such as bankruptcy, that a holder of the underlying security would not necessarily face ([SEC staff statement, 28 Jan 2026](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities)).

*Reference information only, not legal or investment advice.*

**Same IPO, three legal models (Anthropic, Nov 2026):** Ondo offers a structured note, Dinari a custodial dShare (in the US a secondary ledger, currently non-transferable) and Kraken an xStocks tracker (ANTx, not for US clients); none is an issuer-sponsored share, and Anthropic's amended S-1 does not mention tokenized shares ([Ondo](https://x.com/Ondo/status/2118725675204919420); [Dinari docs](https://docs.dinari.com/docs/us); [Kraken](https://www.kraken.com/ipo/anthropic); [S-1/A](https://www.sec.gov/Archives/edgar/data/2130357/000162828026068676/anthropicpbc-sx1ax1.htm)).

## Sources
Public originals for the facts on this page.

- <https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities>
- <https://www.kraken.com/ipo/anthropic>
- <https://docs.dinari.com/docs/us>
- <https://docs.xstocks.fi/docs/frequently-asked-questions>
- <https://docs.xstocks.fi/docs/issuance-and-redemption/market-flow>
- <https://docs.xstocks.fi/docs/issuance-and-redemption/in-kind-flow-xport>
- <https://cdn.robinhood.com/assets/robinhood/legal/rhj_base_prospectus.pdf>
- <https://cdn.robinhood.com/assets/robinhood/legal/stock_tokens_kid_eu.pdf>
- <https://robinhood.com/eu/en/support/articles/stock-tokens-faq/>
- <https://docs.dinari.com/docs/placing-orders>
- <https://dinari.com/dshares>
- <https://docs.ondo.finance/ondo-stocks/investing-and-redeeming>
- <https://docs.ondo.finance/ondo-stocks/legal-and-regulatory>
- <https://lnkd.in/p/duAUZtYs>
- <https://docs.xstocks.fi/developers/multipliers>
- <https://support.kraken.com/articles/xstocks-faq>
- <https://communications.dtcc.com/rs/669-QIL-921/images/DTCC%20Tokenization%20Service%20At-a-Glance.pdf>
- <https://www.sec.gov/files/tm/no-action/dtc-nal-121125.pdf>
- <https://www.prnewswire.com/news-releases/kimber-digital-securities-becomes-a-registered-broker-dealer-bringing-real-us-securities-onchain-302935166.html>
- <https://www.formationsecurities.com/notice.pdf>
- <https://docs.ondo.finance/ondo-stocks/overview>
- <https://docs.base.org/build-on-base/integrate-defi/list-tokenized-stocks>
- <https://api.coinbase.com/v1/tokenized-stocks>
- <https://docs.robinhood.com/chain/stock-token-apis/>
- <https://learn.backpack.exchange/blog/tokenized-nvidia-nvda>
- <https://ondo.finance/blog/ondo-stocks-as-collateral-on-spout>
