import { FullSlug } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"
import { PUBLIC_LAUNCH, SITE_URL } from "../../launch"

// Emits robots.txt, Cloudflare Pages _headers and _redirects from the launch switch (quartz/launch.ts).
export const LaunchFiles: QuartzEmitterPlugin = () => ({
  name: "LaunchFiles",
  async *emit(ctx) {
    const robots = PUBLIC_LAUNCH
      ? `# Public: all crawlers, including AI crawlers, are allowed.\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
      : `# Private preview: no indexing until launch (quartz/launch.ts).\nUser-agent: *\nDisallow: /\n`
    yield write({ ctx, slug: "robots" as FullSlug, ext: ".txt", content: robots })
    const headers = PUBLIC_LAUNCH ? "" : "/*\n  X-Robots-Tag: noindex, nofollow\n"
    yield write({ ctx, slug: "_headers" as FullSlug, ext: "", content: headers })
    // Cloudflare Pages redirects for moved pages (starter prompts merged into one page, 2026-10-30)
    const redirects = [
      "/starter-prompts/coding-agents /starter-prompts#prompts-for-coding-agents 301",
      "/starter-prompts/coding-agents.html /starter-prompts#prompts-for-coding-agents 301",
      "/starter-prompts/index /starter-prompts 301",
      "/starter-prompts/ /starter-prompts 301",
    ].join("\n") + "\n"
    yield write({ ctx, slug: "_redirects" as FullSlug, ext: "", content: redirects })
  },
  async *partialEmit() {},
})
