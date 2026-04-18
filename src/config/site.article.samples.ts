import type { SitePost } from '@/lib/site-connector'

/**
 * Editorial sample articles — used when the public feed returns no article posts.
 * Each entry includes `content.type: 'article'` so task feed filters match.
 * Replace or extend this list as you ship real CMS content.
 */
export const ARTICLE_SAMPLE_POSTS: SitePost[] = [
  {
    id: 'sample-fflowlink-editorial-charter',
    slug: 'fflowlink-editorial-charter',
    title: 'The Fflowlink editorial charter',
    summary:
      'What we cover, how we check facts, and how we keep every story readable on phones, desks, and late-night scrolls alike.',
    authorName: 'Maya Okonkwo',
    publishedAt: '2026-03-18T09:00:00.000Z',
    tags: ['News', 'Desk'],
    media: [{ url: 'https://picsum.photos/seed/fflow-charter/1200/720', type: 'IMAGE' }],
    content: {
      type: 'article',
      category: 'news',
      description:
        'A short, public-facing note on how this desk works—so readers know what to expect before they dive into longer pieces.',
      body: `<p>We started Fflowlink because too many “explainers” read like they were assembled by committee: technically true, emotionally hollow, and impossible to remember a week later.</p>
<p>This charter is our promise in plain language: we prioritize clarity over cleverness, we label uncertainty instead of hiding it, and we edit for the reader who actually finishes the piece—not the one who only skims the headline.</p>
<p>When we make a mistake, we fix it in the article and say so. When a story depends on anonymous sources, we explain why we granted anonymity and what we did to corroborate the account.</p>
<p>If something here ever stops matching how we work in practice, we rewrite this page. That is the whole point.</p>`,
    },
  },
  {
    id: 'sample-line-edits-that-save-a-draft',
    slug: 'line-edits-that-save-a-draft',
    title: 'Line edits that save a draft (without killing your voice)',
    summary:
      'Twelve small fixes—from lead clarity to verb choice—that turn a rough file into something you can ship the same afternoon.',
    authorName: 'Anaya Ruiz',
    publishedAt: '2026-03-22T14:30:00.000Z',
    tags: ['Desk notes', 'Writing'],
    media: [{ url: 'https://picsum.photos/seed/fflow-lineedits/1200/720', type: 'IMAGE' }],
    content: {
      type: 'article',
      category: 'blog',
      body: `<p>I keep a sticky note on my monitor with twelve edits I run on almost every draft. None of them require talent—just patience—and they catch the problems readers complain about before we ever hit publish.</p>
<p><strong>Lead, then promise.</strong> The first screen should answer what someone will learn and why it matters now. If you are still warming up in paragraph three, the piece is already losing people.</p>
<p><strong>Swap vague intensifiers for specifics.</strong> “Very,” “really,” and “incredibly” are usually hiding a number, an example, or an admission you are not quite ready to make yet.</p>
<p><strong>Read one paragraph aloud.</strong> If you run out of breath, the sentence is doing too much. Split it. Your voice will sound more like you, not less.</p>
<p>Ship the draft after pass nine or ten, not after pass fifty. Perfection is often fear with better branding.</p>`,
    },
  },
  {
    id: 'sample-reporting-without-the-noise',
    slug: 'reporting-without-the-noise',
    title: 'Reporting without the noise',
    summary:
      'How we trim side facts, keep quotes honest, and still leave room for a human voice on the page.',
    authorName: 'Jordan Malik',
    publishedAt: '2026-03-25T11:15:00.000Z',
    tags: ['News', 'Process'],
    media: [{ url: 'https://picsum.photos/seed/fflow-reporting/1200/720', type: 'IMAGE' }],
    content: {
      type: 'article',
      category: 'news',
      body: `<p>Readers do not owe us their attention. Every extra fact in a story competes with the facts that actually move the narrative forward.</p>
<p>When I cut a paragraph I loved, I paste it into a “parking lot” doc. Most of it never comes back—and that is how I know it was decoration, not load-bearing structure.</p>
<p>Quotes should sound like a person talking, not a press release cosplaying as speech. If a quote does not reveal motive, consequence, or something only that speaker could say, paraphrase and keep moving.</p>
<p>The goal is not a sparse page for aesthetics. The goal is respect: fewer jumps, fewer jargon walls, and a story someone can retell at dinner without checking their notes.</p>`,
    },
  },
  {
    id: 'sample-publishing-checklist-2026',
    slug: 'publishing-checklist-2026',
    title: 'Our 2026 publishing checklist (the boring version that actually works)',
    summary:
      'Accessibility, image rights, headline tests, and the last pass before we hit publish—nothing cute, just the sequence we follow.',
    authorName: 'Sam Okada',
    publishedAt: '2026-04-02T08:45:00.000Z',
    tags: ['Desk notes', 'Operations'],
    media: [{ url: 'https://picsum.photos/seed/fflow-checklist/1200/720', type: 'IMAGE' }],
    content: {
      type: 'article',
      category: 'blog',
      body: `<p>Checklists are unfashionable until you miss a step and hear about it in public. Here is the sequence our desk runs before anything goes live.</p>
<p><strong>Rights and crops.</strong> Every image has a trail: who took it, who can license it, and whether the crop changes the meaning of the frame.</p>
<p><strong>Headline stress-test.</strong> We write three options, read them to someone who has not read the piece, and keep the one that survives without caveats.</p>
<p><strong>Accessibility pass.</strong> Alt text describes what a reader needs from the image, not a caption pun. Charts get a text summary. Links do not rely on color alone.</p>
<p><strong>Final read in mobile view.</strong> If the story feels long on a phone, it is long—no matter how “efficient” it looked on a 27-inch monitor.</p>`,
    },
  },
  {
    id: 'sample-readers-ask-frequency-over-flash',
    slug: 'readers-ask-frequency-over-flash',
    title: 'Readers asked for frequency over flash—so we listened',
    summary:
      'What inbox replies taught us about cadence, depth, and when to pause the schedule without vanishing.',
    authorName: 'Mira Chen',
    publishedAt: '2026-04-06T16:00:00.000Z',
    tags: ['Lifestyle', 'Reader mail'],
    media: [{ url: 'https://picsum.photos/seed/fflow-frequency/1200/720', type: 'IMAGE' }],
    content: {
      type: 'article',
      category: 'lifestyle',
      body: `<p>We asked readers what they wanted more of, expecting answers like “investigations” or “data.” Instead, the most common reply was simpler: “I like knowing when to expect you.”</p>
<p>Flashy launches spike traffic and then disappear. A predictable rhythm—fewer pieces, but on a schedule people can trust—kept open rates steadier and complaints lower.</p>
<p>We still break the rhythm when news demands it. The difference is we say so ahead of time: a one-line note at the top of the newsletter beats a mysterious two-week silence.</p>
<p>If you are building something small and independent, treat cadence like a feature. It is one of the few things you can control that readers actually feel.</p>`,
    },
  },
  {
    id: 'sample-night-edits-sunday-mailbag',
    slug: 'night-edits-sunday-mailbag',
    title: 'Sunday mailbag: the edits I make after midnight',
    summary:
      'Short answers to reader questions about ledes, deadlines, and why the best paragraph is sometimes the one you delete entirely.',
    authorName: 'Elena Varga',
    publishedAt: '2026-04-10T10:20:00.000Z',
    tags: ['Desk notes', 'Reader mail'],
    media: [{ url: 'https://picsum.photos/seed/fflow-mailbag/1200/720', type: 'IMAGE' }],
    content: {
      type: 'article',
      category: 'blog',
      body: `<p><strong>Q: Do you outline?</strong> Yes, but loosely. I need enough structure to know where the tension lives, not so much that the draft feels like filling out a form.</p>
<p><strong>Q: What do you cut first?</strong> Throat-clearing. If the first paragraph could apply to ten other stories, it belongs to none of them.</p>
<p><strong>Q: Favorite time to edit?</strong> Late Sunday, when the inbox is quiet and I can hear sentences without competing noise. Not sustainable every week—but honest.</p>
<p>Send your own questions; we rotate answers here when the week runs thin on news.</p>`,
    },
  },
]

export function getArticleSamplePostBySlug(slug: string): SitePost | null {
  return ARTICLE_SAMPLE_POSTS.find((post) => post.slug === slug) ?? null
}
