import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img class="page-title-logo" src={`${baseDir}/static/icon.svg`} alt="" width="40" height="40" />
        <span>{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
.page-title a {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.page-title-logo {
  width: 40px;
  height: 40px;
  flex: none;
  margin: 0;
}
@media (max-width: 800px) {
  .page-title, .page-title a { font-size: 1.15rem !important; line-height: 1.2; }
  .page-title-logo { width: 32px; height: 32px; }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
