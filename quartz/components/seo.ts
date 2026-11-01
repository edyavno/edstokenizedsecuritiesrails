// SEO/AEO structured data built from the rendered page (site-only presentation; content comes from the vault).
import { PUBLIC_LAUNCH, SITE_URL } from "../launch"

type El = { type: string; tagName?: string; children?: El[] }
const kids = (tree: any): El[] => (tree?.children ?? []) as El[]
const isEl = (n: El, ...tags: string[]) => n.type === "element" && tags.includes(n.tagName ?? "")
const toString = (n: any): string => n?.type === "text" ? n.value : (n?.children ?? []).map(toString).join("")
const clean = (s: string) => s.replace(/\s+/g, " ").trim()

export const robotsContent = () => (PUBLIC_LAUNCH ? "index,follow" : "noindex,nofollow")

export function canonicalUrl(slug: string): string {
  if (slug === "index") return `${SITE_URL}/`
  if (slug.endsWith("/index")) return `${SITE_URL}/${slug.slice(0, -"index".length)}`
  return `${SITE_URL}/${slug}`
}

// Question-style H2s ("...?") and the text that follows them become FAQPage entries.
function faq(tree: any) {
  const out: { q: string; a: string }[] = []
  const nodes = kids(tree)
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i]
    if (!isEl(n, "h2")) continue
    const q = clean(toString(n as any))
    if (!q.endsWith("?")) continue
    const parts: string[] = []
    for (let j = i + 1; j < nodes.length && !isEl(nodes[j], "h1", "h2"); j++)
      if (isEl(nodes[j], "p", "ul", "ol")) parts.push(clean(toString(nodes[j] as any)))
    const a = parts.join(" ").slice(0, 1200)
    if (a) out.push({ q, a })
  }
  return out
}

// Glossary: each H3 term plus its first paragraph.
function terms(tree: any, url: string) {
  const out: object[] = []
  const nodes = kids(tree)
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i] as any
    if (!isEl(n, "h3")) continue
    const next = nodes.slice(i + 1).find((x) => isEl(x, "p", "h2", "h3"))
    if (!next || !isEl(next, "p")) continue
    out.push({
      "@type": "DefinedTerm",
      name: clean(toString(n)),
      description: clean(toString(next as any)),
      url: `${url}#${n.properties?.id ?? ""}`,
      inDefinedTermSet: `${url}#terms`,
    })
  }
  return out
}

export function jsonLd(opts: { slug: string; title: string; description: string; siteName: string; modified?: string; tree: any }) {
  const { slug, title, description, siteName, modified, tree } = opts
  const url = canonicalUrl(slug)
  const org = { "@type": "Organization", name: siteName, url: `${SITE_URL}/`, logo: `${SITE_URL}/static/icon.png` }
  const graph: object[] = []
  if (slug === "index") {
    graph.push({ "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: siteName, url: `${SITE_URL}/`, description, inLanguage: "en", publisher: org })
    graph.push(org)
  } else {
    graph.push({
      "@type": "Article", headline: title, description, url, mainEntityOfPage: url, inLanguage: "en",
      ...(modified ? { dateModified: modified } : {}), publisher: org,
      license: "https://creativecommons.org/licenses/by/4.0/",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    })
    const crumbs = slug.replace(/\/index$/, "").split("/")
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }].concat(
        crumbs.map((c, k) => ({ "@type": "ListItem", position: k + 2, name: k === crumbs.length - 1 ? title : c, item: k === crumbs.length - 1 ? url : `${SITE_URL}/${crumbs.slice(0, k + 1).join("/")}/` })),
      ),
    })
  }
  const qa = faq(tree)
  if (qa.length) graph.push({ "@type": "FAQPage", url, mainEntity: qa.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) })
  if (slug === "concepts/glossary") {
    const t = terms(tree, url)
    if (t.length) graph.push({ "@type": "DefinedTermSet", "@id": `${url}#terms`, name: title, url, hasDefinedTerm: t })
  }
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c")
}
