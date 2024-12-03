import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "avcton/avcton.github.io",
        repoId: "R_kgDOME1DnA",
        category: "Site Comments",
        categoryId: "DIC_kwDOME1DnM4CgHjp",
        mapping: "pathname",
        themeUrl: "themes",
        inputPosition: "top",
        reactionsEnabled: true,
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      // Linkedin: "https://www.linkedin.com/in/avcton/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ hideOnRoot: true }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({ folderClickBehavior: "link" })),
    Component.DesktopOnly(Component.RecentNotes({ title: "Recent Note", limit: 1 })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({ folderClickBehavior: "link" })),
    Component.DesktopOnly(Component.RecentNotes({ title: "Recent Note", limit: 1 })),
  ],
  right: [],
}