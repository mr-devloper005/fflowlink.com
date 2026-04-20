import Link from 'next/link'
import { ArrowRight, Building2, FileText, Image as ImageIcon, LayoutGrid, Tag, User } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { TaskListClient } from '@/components/tasks/task-list-client'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG, getTaskConfig, type TaskKey } from '@/lib/site-config'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'
import { taskIntroCopy } from '@/config/site.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { TASK_LIST_PAGE_OVERRIDE_ENABLED, TaskListPageOverride } from '@/overrides/task-list-page'

const taskIcons: Record<TaskKey, any> = {
  listing: Building2,
  article: FileText,
  image: ImageIcon,
  profile: User,
  classified: Tag,
  sbm: LayoutGrid,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
}

const variantShells = {
  'listing-directory': 'bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_24%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]',
  'listing-showcase': 'bg-[linear-gradient(180deg,#ffffff_0%,#f4f9ff_100%)]',
  'article-editorial': 'bg-[radial-gradient(ellipse_80%_50%_at_0%_-10%,rgba(3,174,210,0.12),transparent_45%),linear-gradient(180deg,#f8fdff_0%,#ffffff_55%)]',
  'article-journal': 'bg-[linear-gradient(180deg,#fffdf9_0%,#f2fbfd_100%)]',
  'comment-editorial': 'bg-[radial-gradient(ellipse_70%_45%_at_100%_0%,rgba(209,32,82,0.08),transparent_42%),linear-gradient(180deg,#fff9fb_0%,#f6fdff_100%)]',
  'image-masonry': 'bg-[linear-gradient(180deg,#09101d_0%,#111c2f_100%)] text-white',
  'image-portfolio': 'bg-[linear-gradient(180deg,#051018_0%,#0f2233_100%)] text-white',
  'profile-creator': 'bg-[linear-gradient(180deg,#0a1120_0%,#101c34_100%)] text-white',
  'profile-business': 'bg-[radial-gradient(circle_at_top_right,rgba(3,174,210,0.1),transparent_35%),linear-gradient(180deg,#ffffff_0%,#f3f8fb_100%)]',
  'classified-bulletin': 'bg-[linear-gradient(180deg,#fff8f2_0%,#ffffff_100%)]',
  'classified-market': 'bg-[linear-gradient(135deg,#fffdf6_0%,#fff4ec_45%,#ffffff_100%)]',
  'sbm-curation': 'bg-[linear-gradient(180deg,#f7fbfc_0%,#ffffff_100%)]',
  'sbm-library': 'bg-[linear-gradient(180deg,#f3f7fa_0%,#fafdff_100%)]',
} as const

export async function TaskListPage({ task, category }: { task: TaskKey; category?: string }) {
  if (TASK_LIST_PAGE_OVERRIDE_ENABLED) {
    return await TaskListPageOverride({ task, category })
  }

  const taskConfig = getTaskConfig(task)
  const posts = await fetchTaskPosts(task, 30)
  const normalizedCategory = category ? normalizeCategory(category) : 'all'
  const intro = taskIntroCopy[task]
  const baseUrl = SITE_CONFIG.baseUrl.replace(/\/$/, '')
  const schemaItems = posts.slice(0, 10).map((post, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${baseUrl}${taskConfig?.route || '/posts'}/${post.slug}`,
    name: post.title,
  }))
  const { recipe } = getFactoryState()
  const layoutKey = recipe.taskLayouts[task as keyof typeof recipe.taskLayouts] || `${task}-${task === 'listing' ? 'directory' : 'editorial'}`
  const shellClass = variantShells[layoutKey as keyof typeof variantShells] || 'bg-background'
  const Icon = taskIcons[task] || LayoutGrid

  const isDark = ['image-masonry', 'image-portfolio', 'profile-creator'].includes(layoutKey)
  const ui = isDark
    ? {
        muted: 'text-slate-300',
        panel: 'border border-white/10 bg-white/6',
        soft: 'border border-white/10 bg-white/5',
        input: 'border-white/10 bg-white/6 text-white',
        button: 'bg-white text-slate-950 hover:bg-slate-200',
      }
    : layoutKey.startsWith('article') || layoutKey.startsWith('comment') || layoutKey.startsWith('sbm')
      ? {
          muted: 'text-slate-600',
          panel: 'border border-cyan-500/15 bg-white/95 shadow-[0_18px_50px_rgba(10,22,40,0.06)]',
          soft: 'border border-[#F8DE22]/40 bg-[linear-gradient(145deg,rgba(248,222,34,0.14),white)]',
          input: 'border border-slate-200 bg-white text-slate-900',
          button: 'bg-[#03AED2] text-white hover:brightness-95',
        }
      : {
          muted: 'text-slate-600',
          panel: 'border border-slate-200 bg-white',
          soft: 'border border-slate-200 bg-slate-50',
          input: 'border border-slate-200 bg-white text-slate-950',
          button: 'bg-slate-950 text-white hover:bg-slate-800',
        }

  return (
    <div className={`min-h-screen ${shellClass}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {task === 'listing' ? (
          <SchemaJsonLd
            data={[
              {
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                name: 'Business Directory Listings',
                itemListElement: schemaItems,
              },
              {
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                name: SITE_CONFIG.name,
                url: `${baseUrl}/listings`,
                areaServed: 'Worldwide',
              },
            ]}
          />
        ) : null}
        {task === 'article' || task === 'classified' ? (
          <SchemaJsonLd
            data={{
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: `${taskConfig?.label || task} | ${SITE_CONFIG.name}`,
              url: `${baseUrl}${taskConfig?.route || ''}`,
              hasPart: schemaItems,
            }}
          />
        ) : null}

        {layoutKey === 'listing-directory' || layoutKey === 'listing-showcase' ? (
          <section className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className={`rounded-[2rem] p-7 shadow-[0_24px_70px_rgba(15,23,42,0.07)] ${ui.panel}`}>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] opacity-70"><Icon className="h-4 w-4" /> {taskConfig?.label || task}</div>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-foreground">{taskConfig?.description || 'Latest posts'}</h1>
              <p className={`mt-4 max-w-2xl text-sm leading-7 ${ui.muted}`}>Built with a cleaner scan rhythm, stronger metadata grouping, and a structure designed for business discovery rather than editorial reading.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={taskConfig?.route || '#'} className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${ui.button}`}>Explore results <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/search" className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${ui.soft}`}>Open search</Link>
              </div>
            </div>
            <form className={`grid gap-3 rounded-[2rem] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] ${ui.soft}`} action={taskConfig?.route || '#'}>
              <div>
                <label className={`text-xs uppercase tracking-[0.2em] ${ui.muted}`}>Category</label>
                <select name="category" defaultValue={normalizedCategory} className={`mt-2 h-11 w-full rounded-xl px-3 text-sm ${ui.input}`}>
                  <option value="all">All categories</option>
                  {CATEGORY_OPTIONS.map((item) => (
                    <option key={item.slug} value={item.slug}>{item.name}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className={`h-11 rounded-xl text-sm font-medium ${ui.button}`}>Apply filters</button>
            </form>
          </section>
        ) : null}

        {layoutKey === 'article-editorial' || layoutKey === 'article-journal' || layoutKey === 'comment-editorial' ? (
          <section className={`mb-12 grid gap-8 lg:items-start ${task === 'comment' ? 'lg:grid-cols-[0.95fr_1.05fr]' : 'lg:grid-cols-[1.1fr_0.9fr]'}`}>
            <div>
              <p className={`text-xs uppercase tracking-[0.3em] ${ui.muted}`}>{taskConfig?.label || task}</p>
              <h1 className="mt-3 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground">{taskConfig?.description || 'Latest posts'}</h1>
              <p className={`mt-5 max-w-2xl text-sm leading-8 ${ui.muted}`}>
                {task === 'comment'
                  ? 'Threaded voices sit beside the reporting—built for reactions that stay readable and close to the story.'
                  : 'This reading surface uses slower pacing, expressive type, and generous rhythm so long-form work feels authored—not templated.'}
              </p>
            </div>
            <div className={`rounded-[2rem] p-6 ${ui.panel}`}>
              <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${ui.muted}`}>{task === 'comment' ? 'Conversation filter' : 'Reading note'}</p>
              <p className={`mt-4 text-sm leading-7 ${ui.muted}`}>
                {task === 'comment'
                  ? 'Filter by category to move across discussion lanes while keeping the tone editorial, not noisy.'
                  : 'Use category filters to jump between topics without collapsing the page into the same repeated card rhythm used by other task types.'}
              </p>
              <form className="mt-5 flex items-center gap-3" action={taskConfig?.route || '#'}>
                <select name="category" defaultValue={normalizedCategory} className={`h-11 flex-1 rounded-xl px-3 text-sm ${ui.input}`}>
                  <option value="all">All categories</option>
                  {CATEGORY_OPTIONS.map((item) => (
                    <option key={item.slug} value={item.slug}>{item.name}</option>
                  ))}
                </select>
                <button type="submit" className={`h-11 rounded-xl px-4 text-sm font-medium ${ui.button}`}>Apply</button>
              </form>
            </div>
          </section>
        ) : null}

        {layoutKey === 'image-masonry' || layoutKey === 'image-portfolio' ? (
          <section className="mb-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${ui.soft}`}>
                <Icon className="h-3.5 w-3.5" /> Visual feed
              </div>
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em]">{taskConfig?.description || 'Latest posts'}</h1>
              <p className={`mt-5 max-w-2xl text-sm leading-8 ${ui.muted}`}>
                A gallery-forward rhythm: wider tiles, deeper blacks, and cyan sparks so imagery reads as the hero—not an accessory.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`min-h-[220px] rounded-[2rem] border border-cyan-400/15 ${ui.panel}`} />
              <div className={`min-h-[220px] rounded-[2rem] border border-white/10 ${ui.soft}`} />
              <div className={`col-span-2 min-h-[120px] rounded-[2rem] border border-[#F8DE22]/25 ${ui.panel}`} />
            </div>
          </section>
        ) : null}

        {layoutKey === 'profile-creator' || layoutKey === 'profile-business' ? (
          <section className={`mb-12 rounded-[2.2rem] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.1)] ${ui.panel}`}>
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className={`min-h-[240px] rounded-[2rem] border border-cyan-500/10 ${ui.soft}`} />
              <div>
                <p className={`text-xs uppercase tracking-[0.3em] ${ui.muted}`}>{taskConfig?.label || task}</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-foreground">People and teams, framed like mastheads—not business cards.</h1>
                <p className={`mt-5 max-w-2xl text-sm leading-8 ${ui.muted}`}>
                  Portraits lead, proof points follow, and the list below keeps a cooler, directory-style cadence than article pages.
                </p>
              </div>
            </div>
          </section>
        ) : null}

        {layoutKey === 'classified-bulletin' || layoutKey === 'classified-market' ? (
          <section className="mb-12 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className={`rounded-[1.8rem] p-6 ${ui.panel}`}>
              <p className={`text-xs uppercase tracking-[0.3em] ${ui.muted}`}>{taskConfig?.label || task}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-foreground">Bright notices, sharp deadlines, and a marketplace pulse.</h1>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {['Scan-first tiles', 'Price & location forward', 'Amber urgency accents'].map((item) => (
                <div key={item} className={`rounded-[1.5rem] border border-[#F45B26]/15 p-5 ${ui.soft}`}>
                  <p className="text-sm font-semibold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {layoutKey === 'sbm-curation' || layoutKey === 'sbm-library' ? (
          <section className="mb-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className={`text-xs uppercase tracking-[0.3em] ${ui.muted}`}>{taskConfig?.label || task}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-foreground">A research shelf: links, context, and quiet density.</h1>
              <p className={`mt-5 max-w-2xl text-sm leading-8 ${ui.muted}`}>
                Collections stay text-forward with tight metadata—distinct from article romance or classified urgency.
              </p>
            </div>
            <div className={`rounded-[2rem] p-6 ${ui.panel}`}>
              <p className={`text-xs uppercase tracking-[0.24em] ${ui.muted}`}>Collection filter</p>
              <form className="mt-4 flex items-center gap-3" action={taskConfig?.route || '#'}>
                <select name="category" defaultValue={normalizedCategory} className={`h-11 flex-1 rounded-xl px-3 text-sm ${ui.input}`}>
                  <option value="all">All categories</option>
                  {CATEGORY_OPTIONS.map((item) => (
                    <option key={item.slug} value={item.slug}>{item.name}</option>
                  ))}
                </select>
                <button type="submit" className={`h-11 rounded-xl px-4 text-sm font-medium ${ui.button}`}>Apply</button>
              </form>
            </div>
          </section>
        ) : null}

        {intro ? (
          <section className={`mb-12 rounded-[2rem] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8 ${ui.panel}`}>
            <h2 className="text-2xl font-semibold text-foreground">{intro.title}</h2>
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={`mt-4 text-sm leading-7 ${ui.muted}`}>{paragraph}</p>
            ))}
            {intro.links.length ? (
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                {intro.links.map((link) => (
                  <a key={link.href} href={link.href} className="font-semibold text-foreground hover:underline">{link.label}</a>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        <TaskListClient
          task={task}
          initialPosts={posts}
          category={normalizedCategory}
          gridClassName={
            task === 'article' || task === 'comment'
              ? 'mx-auto flex max-w-4xl flex-col gap-7'
              : task === 'listing'
                ? 'grid gap-6 sm:grid-cols-2 xl:grid-cols-3'
                : task === 'classified'
                  ? 'grid gap-4 sm:grid-cols-2 lg:grid-cols-4'
                  : task === 'image'
                    ? 'grid gap-4 sm:grid-cols-2 md:grid-cols-3'
                    : task === 'profile'
                      ? 'grid gap-8 lg:grid-cols-2'
                      : task === 'sbm'
                        ? 'grid gap-5 md:grid-cols-2'
                        : task === 'pdf'
                          ? 'grid gap-5 sm:grid-cols-2 lg:grid-cols-4'
                          : 'grid gap-6 sm:grid-cols-2 lg:grid-cols-4'
          }
        />
      </main>
      <Footer />
    </div>
  )
}
