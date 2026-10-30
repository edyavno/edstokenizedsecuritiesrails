import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../plugins/emitters/ogImage"
import { canonicalUrl, jsonLd, robotsContent } from "./seo"
export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
    tree,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    // Url of current page
    const socialUrl =
      fileData.slug === "404" ? url.toString() : joinSegments(url.toString(), fileData.slug!)

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        <link rel="icon" href={joinSegments(baseDir, "static/favicon.ico")} sizes="48x48" />
        <link rel="icon" href={joinSegments(baseDir, "static/icon-small.svg")} type="image/svg+xml" />
        <link rel="icon" href={iconPath} type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href={joinSegments(baseDir, "static/apple-touch-icon.png")} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />
        <meta name="robots" content={robotsContent()} />
        {fileData.slug !== "404" && <link rel="canonical" href={canonicalUrl(fileData.slug!)} />}
        {fileData.slug !== "404" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: jsonLd({
                slug: fileData.slug!,
                title,
                description,
                siteName: cfg.pageTitle,
                modified: (fileData.frontmatter as any)?.last_checked,
                tree,
              }),
            }}
          />
        )}

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
        {/* annotate.js (MIT, self-hosted, patched for same-origin credentials). Loaded ONLY on non-production
            *.edstsr.pages.dev hosts (and localhost); comments sync to the preview-only Pages Function + D1. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var h=location.hostname;var ok=(/\\.edstsr\\.pages\\.dev$/.test(h))||h==="localhost"||h==="127.0.0.1";if(!ok)return;window.AnnotateConfig={project:"edstsr",theme:"auto",position:"bottom-right",accent:"#0f766e",spa:true,api:location.origin,reviewId:"edstsr-preview",pollInterval:15000};var s=document.createElement("script");s.src="${joinSegments(baseDir, "static/annotate/annotate.js")}";s.defer=true;s.setAttribute("data-persist","");document.head.appendChild(s);function sum(){fetch(location.origin+"/v1/annotate/reviews/edstsr-preview/summary",{credentials:"same-origin"}).then(function(r){return r.ok?r.json():null}).then(function(d){var o=document.getElementById("__an_sum");if(o)o.remove();if(!d||!d.pages||!d.pages.length)return;var b=document.createElement("div");b.id="__an_sum";b.style.cssText="position:fixed;left:12px;bottom:12px;z-index:2147483000;max-width:320px;font:12px/1.4 system-ui,sans-serif;background:#fff;color:#111;border:1px solid #0f766e;border-radius:8px;padding:6px 10px;box-shadow:0 2px 8px rgba(0,0,0,.15)";var t=0;d.pages.forEach(function(p){t+=p.count});b.appendChild(document.createTextNode("Review comments ("+t+"): "));d.pages.forEach(function(p,i){if(i)b.appendChild(document.createTextNode(" · "));var a=document.createElement("a");a.href=p.page;a.textContent=(p.page==="/"?"Home":p.page.replace(/^\\//,""))+" ("+p.count+")";a.style.color="#0f766e";if(location.pathname.replace(/\\/$/,"")===p.page.replace(/\\/$/,""))a.style.fontWeight="700";b.appendChild(a)});document.body.appendChild(b)}).catch(function(){})}if(document.readyState!=="loading")sum();else document.addEventListener("DOMContentLoaded",sum);document.addEventListener("nav",function(){sum();var A=window.Annotate;if(!A)return;var st=document.getElementById("__an_style");if(!st||!st.isConnected){try{A.destroy()}catch(e){}A.init(window.AnnotateConfig);return}var x=document.getElementById("__an_host");try{if(!x||!x.isConnected){A.destroy();A.init(window.AnnotateConfig)}else if(A.refresh){A.refresh()}}catch(e){console.warn("annotate",e)}})})();`,
          }}
        />
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
