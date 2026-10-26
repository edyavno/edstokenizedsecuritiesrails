---
title: Reference architecture for trading tokenized securities
type: build
description: 'End-to-end reference architecture for trading tokenized stocks on tokenized rails: onboarding and allowlisting, onchain or hybrid matching, compliance hooks, atomic DvP, register sync, and oracle and halt controls.'
tags:
- build
last_checked: '2026-10-25'
sources:
- https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf
- https://developers.uniswap.org/docs/protocols/v4-hooks/permissioned-pools/architecture
- https://www.okx.com/cdn/assets/files/2610/798CC1267CB56FB2.pdf
- https://www.tokenizedstockvenue.com/notice.html
- https://eips.ethereum.org/EIPS/eip-3643
- https://www.bis.org/publ/arpdf/ar2025e3.htm
- https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html
- https://docs.chain.link/data-feeds/tokenized-equity-feeds
- https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf
---

*In plain English: an overview of how a tokenized-stock trading system fits together, from letting an investor in, through the trade, to updating the official record. Deeper pages on each part will be added as the roadmap ships.*

## End-to-end components
```mermaid
flowchart LR
    subgraph Access["1 · Access"]
      KYC["KYC /<br/>onboarding"] --> REG["Identity registry<br/>/ allowlist"]
      WAL["Wallets<br/>and keys"]
    end
    subgraph Trading["2 · Trading"]
      VEN["Onchain venue:<br/>permissioned pool"]
      HYB["Hybrid:<br/>offchain match"]
      ORA["Oracle and<br/>halt controller"]
    end
    subgraph Asset["3 · Asset"]
      TOK["Token contract<br/>+ compliance hook"]
      CASH["Cash token: stablecoin<br/>or tokenized deposit"]
    end
    subgraph Records["4 · Records"]
      MR["Mint / redeem<br/>+ reconciliation"]
      TA["Transfer agent / register<br/>or custodian"]
      CA["Corporate actions:<br/>multiplier"]
    end
    WAL --> VEN
    WAL --> HYB
    ORA --> VEN
    VEN --> TOK
    HYB --> TOK
    TOK --> REG
    VEN --> CASH
    TOK --> TA
    MR --> TOK
    MR --> TA
    CA --> TOK
    CA --> ORA
    classDef access fill:#dbeafe,stroke:#2563eb,color:#1e3a8a
    classDef trading fill:#fef3c7,stroke:#d97706,color:#78350f
    classDef asset fill:#dcfce7,stroke:#16a34a,color:#14532d
    classDef records fill:#ede9fe,stroke:#7c3aed,color:#4c1d95
    class KYC,REG,WAL access
    class VEN,HYB,ORA trading
    class TOK,CASH asset
    class MR,TA,CA records
    style Access fill:#eff6ff,stroke:#2563eb
    style Trading fill:#fffbeb,stroke:#d97706
    style Asset fill:#f0fdf4,stroke:#16a34a
    style Records fill:#f5f3ff,stroke:#7c3aed
```
Terms: [[concepts/glossary#kyc|KYC]] · [[concepts/glossary#allowlist|allowlist]] · [[concepts/glossary#wallet|wallets]] · [[concepts/glossary#admin-keys|keys]] · [[concepts/glossary#permissioned-pool|permissioned pool]] · [[concepts/glossary#hybrid-matching|hybrid matching]] · [[concepts/glossary#onchain--offchain|offchain]] · [[concepts/glossary#oracle|oracle]] · [[concepts/glossary#halt|halt]] · [[concepts/glossary#compliance-hook|compliance hook]] · [[concepts/glossary#stablecoin|stablecoin]] · [[concepts/glossary#tokenized-deposit|tokenized deposit]] · [[concepts/glossary#mint|mint]] · [[concepts/glossary#redeem|redeem]] · [[concepts/glossary#reconciliation|reconciliation]] · [[concepts/glossary#transfer-agent|transfer agent]] · [[concepts/glossary#custodian|custodian]] · [[concepts/glossary#corporate-action|corporate actions]] · [[concepts/glossary#multiplier|multiplier]]

Colors: **blue** = access, **amber** = trading, **green** = asset and cash, **purple** = records.

## One trade, end to end
```mermaid
sequenceDiagram
    autonumber
    participant I as Investor<br/>wallet
    participant K as KYC /<br/>registry
    participant O as Oracle +<br/>halt control
    participant V as Venue: pool<br/>or matcher
    participant T as Stock token<br/>+ compliance
    participant C as Cash<br/>token
    participant R as Transfer<br/>agent
    rect rgb(219, 234, 254)
    Note over I,K: Onboard
    I->>K: onboard
    K-->>I: wallet allowlisted
    end
    rect rgb(254, 243, 199)
    Note over I,O: Order and pre-trade checks
    I->>V: order or swap
    V->>O: symbol open?<br/>price fresh?
    O-->>V: open / halted
    end
    alt halted or stale
        V-->>I: reject
    else open
        rect rgb(220, 252, 231)
        Note over V,C: Settle: atomic DvP, both legs or neither
        V->>T: canTransfer<br/>(seller, buyer)?
        T->>K: both verified?
        K-->>T: yes
        V->>T: deliver stock token
        V->>C: deliver cash
        end
        rect rgb(237, 233, 254)
        Note over T,R: Record
        T-->>R: transfer event
        Note over R: update<br/>register,<br/>reconcile
        end
    end
```
Terms: [[concepts/glossary#dvp|DvP]] · [[concepts/glossary#atomic-settlement|atomic settlement]] · [[concepts/glossary#oracle|oracle]] · [[concepts/glossary#halt|halted]] · [[concepts/glossary#compliance-hook|compliance]] · [[concepts/glossary#transfer-agent|transfer agent]] · [[concepts/glossary#reconciliation|reconcile]]

Phases: **blue** = onboard, **amber** = order and checks, **green** = atomic settlement, **purple** = record. Same colors as the component map above.

## Components
| Component | What it does |
|---|---|
| Token contract + [[concepts/glossary#compliance-hook|compliance hook]] | Only eligible wallets can hold or receive |
| [[concepts/glossary#mint|Mint]] / [[concepts/glossary#redeem|redeem]] + [[concepts/glossary#reconciliation|reconciliation]] | Supply matches real shares |
| Venue ([[concepts/glossary#permissioned-pool|permissioned pool]] or [[concepts/glossary#hybrid-matching|hybrid]]) | Matches and settles trades |
| [[concepts/glossary#oracle|Oracle]] + [[concepts/glossary#halt|halt]] control | Fresh prices; stop when the stock is halted |
| [[concepts/glossary#transfer-agent|Transfer agent]] / register | The official record stays in sync with the chain |

## Key rules
1. Only allowlisted wallets ever receive the stock token ([ERC-3643](https://eips.ethereum.org/EIPS/eip-3643)).
2. Both legs of a trade settle or neither does ([[concepts/glossary#atomic-settlement|atomic settlement]]).
3. No trading while the primary exchange has the stock halted ([SEC order](https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf)).

> [!note] vs traditional trading infrastructure
> Traditional trading uses broker order routing, exchange order books or RFQ, CCP netting and T+1 settlement at DTC, with eligibility enforced by brokers and the transfer agent. Tokenized rails move eligibility into the token, settle atomically and run 24/7. See [[topics/settlement-and-matching|Settlement & matching]] and [[concepts/post-trade-reg-nms-model|Post-trade (Reg NMS) model]].

## Sources
Public originals for the facts on this page.

- <https://www.sec.gov/files/rules/exorders/2026/34-106402.pdf>
- <https://developers.uniswap.org/docs/protocols/v4-hooks/permissioned-pools/architecture>
- <https://www.tokenizedstockvenue.com/notice.html>
- <https://eips.ethereum.org/EIPS/eip-3643>
- <https://www.bis.org/publ/arpdf/ar2025e3.htm>
- <https://dtcclearning.com/documents/dtcc-digital-assets/digital-asset-solutions/tokenization-service/5699-dtcc-tokenization-service-product-tear-sheet-and-high-level-roadmap/file.html>
- <https://docs.chain.link/data-feeds/tokenized-equity-feeds>
- <https://www.sec.gov/files/rules/sro/nasdaq/2026/34-105047.pdf>
