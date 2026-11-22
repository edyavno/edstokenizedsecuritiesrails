---
title: 'Tokenized stocks compared: xStocks vs Ondo vs Robinhood vs Dinari vs Securitize'
type: comparison
description: 'Five stock-token products side by side: what you legally hold, who can buy, what you can redeem into, chains, and the main limits, with a source on every row.'
tags:
- comparisons
last_checked: '2026-11-17'
published: '2026-11-17'
sources:
- https://docs.xstocks.fi/docs/frequently-asked-questions
- https://docs.xstocks.fi/docs/issuance-and-redemption/market-flow
- https://docs.xstocks.fi/docs/issuance-and-redemption/in-kind-flow-xport
- https://docs.xstocks.fi/developers/multipliers
- https://support.kraken.com/articles/xstocks-faq
- https://docs.ondo.finance/ondo-stocks/overview
- https://docs.ondo.finance/ondo-stocks/investing-and-redeeming
- https://docs.ondo.finance/ondo-stocks/legal-and-regulatory
- https://docs.ondo.finance/partner-docs/tokens
- https://ondo.finance/blog/ondo-stocks-as-collateral-on-spout
- https://cdn.robinhood.com/assets/robinhood/legal/rhj_base_prospectus.pdf
- https://docs.robinhood.com/chain/stock-tokens/
- https://docs.robinhood.com/chain/stock-token-apis/
- https://dinari.com/blog/dinari-launches-724-tokenized-stocks-available-to-u-s-investors-and-businesses
- https://docs.dinari.com/docs/us
- https://docs.dinari.com/docs/placing-orders
- https://www.broadridge.com/press-release/2026/broadridge-brings-proxy-voting-to-dinaris-dshares-tokenized-us-equities
- https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html
- https://investors.securitize.io/news/news-details/2026/Securitize-Expands-Onchain-U-S--Stock-Offering-to-25-Equities/default.aspx
- https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
---

*Updated 17 Nov 2026.*

A token named after Apple or Nvidia can be five very different products. Among the five compared here, only Dinari dShares and Securitize Stocks give the holder a claim on the share itself; xStocks, Ondo Stocks and Robinhood Stock Tokens are issuer debt or note-style instruments that track the price without shareholder rights. Only Dinari is open to ordinary US investors today, and only xStocks and Securitize document a route out into real shares for regular holders. The table answers the practical questions in one place, and every row links to the issuer's own documents.

| Option | Best for | Cost / fees | Key strength | Key limitation | Source |
|---|---|---|---|---|---|
| [[issuers/xstocks-backed\|xStocks]] (Backed Assets (JE) Limited, Jersey) | Eligible non-US holders who want a widely listed, self-custody token on many chains | Direct issuer redemption: $5,000 minimum, fees currently 0 | Redeem for stablecoins, or in kind into an Alpaca brokerage account via xPort | A tracker certificate: no voting or other shareholder rights; not offered in the US, Canada, the UK or Australia | [xStocks FAQ](https://docs.xstocks.fi/docs/frequently-asked-questions); [xPort](https://docs.xstocks.fi/docs/issuance-and-redemption/in-kind-flow-xport); [Kraken FAQ](https://support.kraken.com/articles/xstocks-faq) |
| [[issuers/ondo-global-markets\|Ondo Stocks]] (Ondo Global Markets (BVI) Limited) | Eligible non-US users who want the largest catalog and small tickets | Mint and redeem from $1; other fees: unknown | 452 tokenized stocks and ETFs on Ondo's registry (10 Nov 2026) | Structured notes, "not direct title" to the shares; redemption pays USDon or USDC, not a share, for ordinary users | [Ondo overview](https://docs.ondo.finance/ondo-stocks/overview); [investing and redeeming](https://docs.ondo.finance/ondo-stocks/investing-and-redeeming); [token registry](https://docs.ondo.finance/partner-docs/tokens) |
| [[issuers/robinhood-stock-tokens\|Robinhood Stock Tokens]] (Robinhood Assets (Jersey) Limited) | Non-US users already on Robinhood Chain or Robinhood Wallet | unknown | Transferable ERC-20 tokens; 190+ names | Debt securities with no rights in the underlying; cash only, physical delivery excluded; not US, Canada, UK or Switzerland | [Base prospectus, 25 June 2026](https://cdn.robinhood.com/assets/robinhood/legal/rhj_base_prospectus.pdf); [Robinhood docs](https://docs.robinhood.com/chain/stock-tokens/) |
| [[issuers/dinari\|Dinari dShares]] (Dinari Inc. and Dinari Securities LLC, US) | Eligible US investors who want tokenized US stocks bought with USDC | unknown | Open to eligible US investors since 4 Aug 2026; cash dividends; proxy voting through Broadridge | US tokens are currently non-transferable; exit is a sale for stablecoin, with no in-kind delivery found in issuer docs | [Dinari launch](https://dinari.com/blog/dinari-launches-724-tokenized-stocks-available-to-u-s-investors-and-businesses); [US docs](https://docs.dinari.com/docs/us); [Broadridge](https://www.broadridge.com/press-release/2026/broadridge-brings-proxy-voting-to-dinaris-dshares-tokenized-us-equities) |
| [[issuers/securitize\|Securitize Stocks]] (Securitize broker-dealer) | Eligible US and EU investors who want a legal entitlement to the share | unknown | UCC Article 8 security entitlement, 1:1 backed; conversion to direct registration where available | 25 equities (2 Nov 2026), a much smaller catalog | [Securitize launch](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html); [Securitize, 2 Nov 2026](https://investors.securitize.io/news/news-details/2026/Securitize-Expands-Onchain-U-S--Stock-Offering-to-25-Equities/default.aspx) |

"Best for" describes who each product is built and documented for. It is not a recommendation.

## What should you look for in a tokenized stock?

Start with the legal claim: do you hold the share, an entitlement to it, or the issuer's own debt or note that tracks it? SEC staff draw the same line between custodial tokenized securities and synthetic ones issued by a third party ([SEC staff statement, 28 Jan 2026](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities); [[concepts/legal-taxonomy|legal taxonomy]]).

Then check four things. Who may buy, because offshore products exclude US persons whatever app you reach them through ([[topics/who-can-buy|who can buy]]). What you can redeem into: a share, stablecoins, or only a sale on a market. How dividends arrive: cash, or a rising token multiplier ([[topics/corporate-actions-and-dividends|corporate actions]]). Which contract you hold, because the same ticker can belong to several issuers ([[comparisons/implementations-by-model#why-does-the-same-stock-have-several-tokens|same stock, different tokens]]).

## How did we compare them?

Each row uses only the issuer's own documents, prospectus or official release, as already recorded on this wiki's issuer pages and their raw snapshots; "unknown" means no fee or figure was found in those documents. Facts were last checked between 10 and 17 Nov 2026, as dated on each linked issuer page.

The five were chosen because they are the products readers most often ask about by name: whether a stock token is "a real share or an IOU", whether US residents can buy one, and why one stock has several tickers. Issuer-sponsored shares on a company's own register (for example [[issuers/superstate-opening-bell|Superstate Opening Bell]]) and venues such as [[platforms-venues/okxice-tsv|OKXICE TSV]] are covered in [[comparisons/implementations-by-model|Implementations compared by model]].

## What do you hold with xStocks?

You hold a tracker certificate issued by Backed Assets (JE) Limited, not the share. The xStocks FAQ says the certificates give economic exposure but "do not convey shareholder rights, such as voting rights" ([xStocks FAQ](https://docs.xstocks.fi/docs/frequently-asked-questions)).

After KYC, holders can redeem with the issuer for USDC, USDG or USDT, with a $5,000 minimum for the direct issuer flow and fees currently 0, or take shares in kind into an Alpaca brokerage account through xPort ([Market Flow](https://docs.xstocks.fi/docs/issuance-and-redemption/market-flow); [xPort](https://docs.xstocks.fi/docs/issuance-and-redemption/in-kind-flow-xport)). Most users exit on secondary markets instead.

Dividends show up through a multiplier rather than as cash ([multiplier docs](https://docs.xstocks.fi/developers/multipliers)). Kraken's FAQ listed 131 xStocks on Solana, Ethereum, TON and Ink as of 25 Oct 2026, for eligible non-US clients, and not in the US, Canada, the UK or Australia ([Kraken FAQ](https://support.kraken.com/articles/xstocks-faq)). Company counts in later releases differ; see the [[issuers/xstocks-backed|xStocks]] page.

## What do you hold with Ondo Stocks?

You hold a structured note from Ondo Global Markets (BVI) Limited, designed for economic exposure and "not direct title" to the underlying shares ([Ondo overview](https://docs.ondo.finance/ondo-stocks/overview)). Tokens use the `on` suffix, for example TSLAon.

Eligible users can mint and redeem directly with Ondo for USDon or USDC from a $1 minimum after KYC ([investing and redeeming](https://docs.ondo.finance/ondo-stocks/investing-and-redeeming)). Ondo also describes an in-kind conversion through Alpaca's ITN for approved institutions, which returns shares rather than cash ([Ondo](https://ondo.finance/blog/ondo-stocks-as-collateral-on-spout)).

US persons are excluded, and several markets, including the EEA, the UK and Singapore, require professional or qualified status ([legal and regulatory](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory)). Ondo's registry listed 452 tokenized stocks and ETFs on 10 Nov 2026 ([token registry](https://docs.ondo.finance/partner-docs/tokens)).

## What do you hold with Robinhood Stock Tokens?

You hold a debt security issued by Robinhood Assets (Jersey) Limited that gives no rights in the underlying shares ([base prospectus, 25 June 2026](https://cdn.robinhood.com/assets/robinhood/legal/rhj_base_prospectus.pdf)). The tokens are ERC-20s on Robinhood Chain, and Robinhood advertises 190+ names ([Robinhood docs](https://docs.robinhood.com/chain/stock-tokens/)).

Redemption is cash only; the prospectus excludes physical delivery of the underlying. Ordinary holders generally sell on the secondary market, because direct issuer redemption applies only in limited cases, with KYC and AML checks. They are not offered in the US, Canada, the UK or Switzerland ([Robinhood docs](https://docs.robinhood.com/chain/stock-tokens/)).

Robinhood's separate EU Classic Stock Tokens are a different product, held inside the Robinhood app; see the [[issuers/robinhood-stock-tokens|Robinhood]] page.

## What do you hold with Dinari dShares?

You hold a token backed 1:1 by a share that Dinari's broker-dealer holds in custody, and eligible US investors have been able to buy since 4 Aug 2026. Dinari launched for US investors with 724 tokenized stocks ([Dinari](https://dinari.com/blog/dinari-launches-724-tokenized-stocks-available-to-u-s-investors-and-businesses)).

To exit, you sell or burn the token for payment tokens; the custodian sells the share, and no in-kind delivery was found in Dinari's docs ([placing orders](https://docs.dinari.com/docs/placing-orders)). US dShares are currently non-transferable, and US documentation restricts DeFi use ([US docs](https://docs.dinari.com/docs/us)).

Dividends are paid in cash, with USDC support, and eligible holders can vote the underlying shares through Broadridge's proxy process ([Broadridge](https://www.broadridge.com/press-release/2026/broadridge-brings-proxy-voting-to-dinaris-dshares-tokenized-us-equities)).

## What do you hold with Securitize Stocks?

You hold a UCC Article 8 security entitlement, backed 1:1 by the share, through Securitize's broker-dealer, settled in USDC on Solana ([Securitize launch](https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html)). That is the same kind of legal interest a regular brokerage customer holds.

Where available, holders can convert to direct registration on the company's books. On 2 Nov 2026 Securitize listed 25 equities, for eligible investors in the United States, the European Union and other permitted jurisdictions ([Securitize, 2 Nov 2026](https://investors.securitize.io/news/news-details/2026/Securitize-Expands-Onchain-U-S--Stock-Offering-to-25-Equities/default.aspx)).

Securitize also tokenizes issuer-sponsored shares for participating companies, which is a different model; see the [[issuers/securitize|Securitize]] page.

## How should you choose?

Match the product to the question you care about most, then read the issuer's own terms before buying. If shareholder rights matter, only Dinari dShares and Securitize Stocks in this table document votes or an entitlement to the share. If you are a US person, the offshore products (xStocks, Ondo Stocks, Robinhood Stock Tokens) are not offered to you, even when an app or exchange shows them.

If you want a way out into real shares, xStocks (xPort, into an Alpaca account) and Securitize (direct registration, where available) document one for regular holders. If you want the widest catalog or the smallest ticket, Ondo lists the most names and starts at $1. A regular brokerage share remains the simplest way to hold a US stock.

*Reference information only, not legal, tax or investment advice.*

## Frequently asked questions

### Is a tokenized stock a real share?

Usually not. Of the five here, xStocks, Ondo Stocks and Robinhood Stock Tokens are issuer instruments that track the price without shareholder rights, while Dinari dShares and Securitize Stocks give a claim on a share held in custody ([[concepts/legal-taxonomy|legal taxonomy]]).

### Can US residents buy tokenized stocks?

Yes, but only through US-registered routes. Dinari has offered dShares to eligible US investors since 4 Aug 2026, and Securitize Stocks are available to eligible US investors; xStocks, Ondo Stocks and Robinhood Stock Tokens exclude US persons ([[topics/who-can-buy|who can buy]]).

### Can I redeem a stock token for the actual share?

Sometimes. xStocks offers in-kind delivery into an Alpaca brokerage account through xPort, and Securitize offers conversion to direct registration where available; Ondo and Robinhood redeem for stablecoins or cash for ordinary holders, and Dinari exits by selling the share for stablecoin.

### Do tokenized stocks pay dividends?

Most reinvest them. xStocks and Robinhood raise a token multiplier, Ondo reinvests net of withholding tax, and Dinari pays cash dividends with USDC support ([[topics/corporate-actions-and-dividends|corporate actions and dividends]]).

### Why does the same stock have several token tickers?

Each issuer mints its own token, so one stock can have several with different rights. Suffixes such as `x` (xStocks), `on` (Ondo) and `c` (Coinbase) are issuer conventions; identify a token by its contract address ([[comparisons/implementations-by-model#why-does-the-same-stock-have-several-tokens|same stock, different tokens]]).

## Sources

Issuer documents and releases linked in each row and section above; full field histories are on each linked issuer page.

## Sources
Public originals for the facts on this page.

- <https://docs.xstocks.fi/docs/frequently-asked-questions>
- <https://docs.xstocks.fi/docs/issuance-and-redemption/market-flow>
- <https://docs.xstocks.fi/docs/issuance-and-redemption/in-kind-flow-xport>
- <https://docs.xstocks.fi/developers/multipliers>
- <https://support.kraken.com/articles/xstocks-faq>
- <https://docs.ondo.finance/ondo-stocks/overview>
- <https://docs.ondo.finance/ondo-stocks/investing-and-redeeming>
- <https://docs.ondo.finance/ondo-stocks/legal-and-regulatory>
- <https://docs.ondo.finance/partner-docs/tokens>
- <https://ondo.finance/blog/ondo-stocks-as-collateral-on-spout>
- <https://cdn.robinhood.com/assets/robinhood/legal/rhj_base_prospectus.pdf>
- <https://docs.robinhood.com/chain/stock-tokens/>
- <https://docs.robinhood.com/chain/stock-token-apis/>
- <https://dinari.com/blog/dinari-launches-724-tokenized-stocks-available-to-u-s-investors-and-businesses>
- <https://docs.dinari.com/docs/us>
- <https://docs.dinari.com/docs/placing-orders>
- <https://www.broadridge.com/press-release/2026/broadridge-brings-proxy-voting-to-dinaris-dshares-tokenized-us-equities>
- <https://www.prnewswire.com/news-releases/securitize-launches-global-onchain-trading-of-us-stocks-with-security-entitlements-302902107.html>
- <https://investors.securitize.io/news/news-details/2026/Securitize-Expands-Onchain-U-S--Stock-Offering-to-25-Equities/default.aspx>
- <https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities>
