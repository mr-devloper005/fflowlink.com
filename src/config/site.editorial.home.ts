import type { SitePost } from '@/lib/site-connector'

/**
 * Homepage editorial content (Fflowlink)
 * ==============================
 * Edit this file to change the hero cover, Short reads column, and the tabbed article feed
 * when the API returns no posts.
 *
 * - Set `preferApiPostsWhenAvailable` to `false` if you always want this file to drive the
 *   cover story and feed—even when the CMS returns articles.
 * - Each `href` must match a page you publish (typically `/articles/your-slug`).
 * - Replace titles, summaries, authors, dates, tags, and optional `image` URLs with your own.
 */

export type EditorialHomeArticle = {
  href: string
  title: string
  summary: string
  image?: string
  author?: string
  publishedAt?: string
  /** Small label above the title in Short reads (defaults to “Notebook” in the UI) */
  tag?: string
}

export const SITE_EDITORIAL_HOME = {
  /**
   * When true: first API article becomes the cover when present; tabbed feed uses API posts when any exist.
   * When false: cover and feed always come from this config file.
   */
  preferApiPostsWhenAvailable: true,

  cover: {
    href: '/articles/fflowlink-editorial-charter',
    title: 'The Fflowlink editorial charter',
    summary:
      'What we cover, how we check facts, and how we keep every story readable on phones, desks, and late-night scrolls alike.',
    image: '/placeholder.svg?height=900&width=1400',
    author: 'Fflowlink desk',
    publishedAt: '2026-03-18',
    tag: 'Cover',
  } satisfies EditorialHomeArticle,

  shortReads: [
    {
      href: '/articles/line-edits-that-save-a-draft',
      title: 'Line edits that save a draft',
      summary: 'Twelve small fixes—from lead clarity to verb choice—that turn a rough file into something you can ship.',
      author: 'Anaya Ruiz',
      publishedAt: '2026-03-22',
      tag: 'Notebook',
    },
    {
      href: '/articles/reporting-without-the-noise',
      title: 'Reporting without the noise',
      summary: 'How we trim side facts, keep quotes honest, and still leave room for human voice.',
      author: 'Jordan Malik',
      publishedAt: '2026-03-25',
      tag: 'Notebook',
    },
    {
      href: '/articles/publishing-checklist-2026',
      title: 'Our 2026 publishing checklist',
      summary: 'Accessibility, image rights, headline tests, and the last pass before we hit publish.',
      author: 'Fflowlink desk',
      publishedAt: '2026-04-02',
      tag: 'Notebook',
    },
    {
      href: '/articles/readers-ask-frequency-over-flash',
      title: 'Readers ask for frequency over flash',
      summary: 'What inbox replies taught us about cadence, depth, and when to pause the schedule.',
      author: 'Mira Chen',
      publishedAt: '2026-04-06',
      tag: 'Notebook',
    },
  ] as const satisfies readonly EditorialHomeArticle[],

  /** Shown in Featured / Trending / Recent when the feed API returns zero posts */
  feedFallback: [
    {
      href: '/articles/fflowlink-editorial-charter',
      title: 'The Fflowlink editorial charter',
      summary:
        'What we cover, how we check facts, and how we keep every story readable on phones, desks, and late-night scrolls alike.',
      author: 'Fflowlink desk',
      publishedAt: '2026-03-18',
      tag: 'Feature',
    },
    {
      href: '/articles/line-edits-that-save-a-draft',
      title: 'Line edits that save a draft',
      summary: 'Twelve small fixes that turn a rough file into something you can ship.',
      author: 'Anaya Ruiz',
      publishedAt: '2026-03-22',
    },
    {
      href: '/articles/reporting-without-the-noise',
      title: 'Reporting without the noise',
      summary: 'Trimming side facts while keeping quotes honest and voice intact.',
      author: 'Jordan Malik',
      publishedAt: '2026-03-25',
    },
    {
      href: '/articles/publishing-checklist-2026',
      title: 'Our 2026 publishing checklist',
      summary: 'Accessibility, rights, headline tests, and the last pass before publish.',
      author: 'Fflowlink desk',
      publishedAt: '2026-04-02',
    },
    {
      href: '/articles/readers-ask-frequency-over-flash',
      title: 'Readers ask for frequency over flash',
      summary: 'Cadence, depth, and when to pause the schedule—straight from reader mail.',
      author: 'Mira Chen',
      publishedAt: '2026-04-06',
    },
  ] as const satisfies readonly EditorialHomeArticle[],
} as const

function slugFromArticleHref(href: string, fallback: string) {
  const articlesIdx = href.indexOf('/articles/')
  if (articlesIdx >= 0) {
    const rest = href.slice(articlesIdx + '/articles/'.length).split('/')[0]
    if (rest) return rest
  }
  const tail = href.split('/').filter(Boolean).pop()
  return tail || fallback
}

/** Build a `SitePost` for homepage components that expect API-shaped posts */
export function editorialHomeArticleToSitePost(article: EditorialHomeArticle, stableId: string): SitePost {
  const slug = slugFromArticleHref(article.href, stableId)
  return {
    id: stableId,
    slug,
    title: article.title,
    summary: article.summary,
    authorName: article.author ?? null,
    publishedAt: article.publishedAt ?? null,
    tags: article.tag ? [article.tag] : [],
    media: article.image ? [{ url: article.image }] : [],
  }
}
