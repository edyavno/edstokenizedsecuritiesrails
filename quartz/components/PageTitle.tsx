import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = (cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title).replace(/'/g, "\u2019")
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img class="page-title-logo" src={`${baseDir}/static/icon.svg`} alt="" width="72" height="72" />
        <span class="page-title-name">{title}</span>
        <span class="page-title-sub">human-curated, LLM-maintained</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  font-family: var(--titleFont);
}
.page-title a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.25rem;
  color: var(--dark);
}
.page-title-logo { width: 72px; height: 72px; flex: none; margin: 0 0 0.35rem 0; }
.page-title-name { font-size: 1.35rem; font-weight: 700; line-height: 1.15; }
.page-title-sub { font-size: 0.8rem; font-weight: 400; color: var(--darkgray); opacity: 0.8; font-family: var(--bodyFont); }
@media (max-width: 800px) {
  .page-title { min-width: 0; flex: 0 1 auto; }
  .page-title a { gap: 0.1rem; }
  .page-title-logo { width: 40px; height: 40px; margin-bottom: 0.15rem; }
  .page-title-name { font-size: 0.9rem; line-height: 1.1; white-space: normal; max-width: 8.5rem; }
  .page-title-sub { font-size: 0.6rem; white-space: nowrap; }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
