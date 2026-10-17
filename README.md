# Ed's Tokenized Securities Rails

An LLM-maintained, source-linked wiki on **tokenized securities infrastructure**: issuers, legal structures, custody, chains, venues, settlement and regulation. Every fact links to a source; unverified fields say `unknown`.

Site: https://edstokenizedsecuritiesrails.com · Machine-readable index: [`content/llms.txt`](content/llms.txt)

## How it works
`content/` is generated from a private source-of-truth vault by a publish script. Public pages carry headline fields and readable summaries; changes appear with a delay. Do not edit `content/` by hand.

Built with [Quartz v4](https://quartz.jzhao.xyz). Build: `npm ci && npx quartz build` (Node >= 22); output in `public/`.

## License
- Content (`content/`): [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) — see `LICENSE-CONTENT`.
- Code (Quartz and site config): MIT — see `LICENSE.txt`.

Reference information only. Not investment advice.
