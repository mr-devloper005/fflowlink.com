'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Clock, TrendingUp, Wand2 } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import type { SitePost } from '@/lib/site-connector'
import { cn } from '@/lib/utils'

type TabKey = 'featured' | 'trending' | 'recent'

function stripText(html?: string | null) {
  return (html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function excerpt(post: SitePost, max = 160) {
  const raw = stripText(post.summary || (typeof post.content === 'object' && post.content && (post.content as { description?: string }).description) || '')
  if (raw.length <= max) return raw || 'A calm reading note accompanies this piece.'
  return `${raw.slice(0, max).trimEnd()}…`
}

function pickImage(post: SitePost) {
  const media = Array.isArray(post.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const images = Array.isArray(content.images) ? content.images.filter((u): u is string => typeof u === 'string') : []
  return mediaUrl || images[0] || '/placeholder.svg?height=640&width=960'
}

const tabs: { key: TabKey; label: string; icon: typeof Wand2 }[] = [
  { key: 'featured', label: 'Featured', icon: Wand2 },
  { key: 'trending', label: 'Trending', icon: TrendingUp },
  { key: 'recent', label: 'Recent', icon: Clock },
]

export function ArticleFeedTabs({ posts }: { posts: SitePost[] }) {
  const [tab, setTab] = useState<TabKey>('featured')

  const slices = useMemo(() => {
    const copy = [...posts]
    return {
      featured: copy.slice(0, 5),
      trending: copy.length > 1 ? [...copy].reverse().slice(0, 5) : copy,
      recent: copy.slice(-5).reverse(),
    }
  }, [posts])

  const active = slices[tab].length ? slices[tab] : posts.slice(0, 5)

  return (
    <div className="paper-panel motion-reveal rounded-[1.75rem] p-1 sm:p-2">
      <div className="flex flex-wrap gap-1 border-b border-cyan-500/10 px-2 pb-2 pt-1 sm:px-4 sm:pt-2">
        {tabs.map((item) => {
          const Icon = item.icon
          const selected = tab === item.key
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setTab(item.key)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors',
                selected
                  ? 'bg-[#03AED2] text-white shadow-[0_6px_20px_rgba(3,174,210,0.25)]'
                  : 'text-slate-500 hover:bg-cyan-500/10 hover:text-slate-800',
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {item.label}
            </button>
          )
        })}
      </div>

      <div className="flex flex-col gap-3 p-2 sm:p-4">
        {active.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-cyan-500/20 px-4 py-10 text-center text-sm text-slate-500">Fresh stories will appear here soon.</p>
        ) : (
          active.map((post) => (
            <Link
              key={`${tab}-${post.id}`}
              href={`/articles/${post.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-transparent p-3 transition hover:border-cyan-500/15 hover:bg-white/80 sm:flex-row sm:items-stretch sm:gap-6 sm:p-4"
            >
              <div className="min-w-0 flex-1 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#03AED2]/20 to-[#D12052]/15 text-[11px] font-bold text-slate-700">
                    {(post.authorName || 'F').slice(0, 1).toUpperCase()}
                  </span>
                  <span className="font-medium text-slate-700">{post.authorName || 'Editorial desk'}</span>
                </div>
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-[#03AED2] transition group-hover:text-[#D12052] sm:text-xl">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{excerpt(post)}</p>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-500">
                  {post.tags?.[0] ? (
                    <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">{post.tags[0]}</span>
                  ) : null}
                  {post.publishedAt ? (
                    <time className="text-slate-400" dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </time>
                  ) : null}
                </div>
              </div>
              <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:h-auto sm:w-[min(38%,280px)] sm:min-h-[140px]">
                <ContentImage src={pickImage(post)} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent opacity-70" />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
