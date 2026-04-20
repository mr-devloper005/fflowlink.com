import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Independent articles',
  },
  footer: {
    tagline: 'Independent articles',
  },
  hero: {
    badge: 'This week on Fflowlink',
    title: ['Reporting worth', 'sitting down with.'],
    description:
      'Fflowlink publishes explainers, field reporting, and desk notes for readers who want clarity first—then depth.',
    primaryCta: {
      label: 'Read latest posts',
      href: '/articles',
    },
    secondaryCta: {
      label: 'About Fflowlink',
      href: '/about',
    },
    searchPlaceholder: 'search articles with keywords or like this',
    focusLabel: 'Focus',
    featureCardBadge: 'Lead story',
    featureCardTitle: 'What we are publishing now',
    featureCardDescription:
      'Start with the charter on how we work, then follow the desk notes for shorter updates between long features.',
  },
  home: {
    metadata: {
      title: 'Fflowlink — reporting, explainers, and desk notes',
      description: 'Independent coverage and explainers from the Fflowlink newsroom. Updated through the week.',
      openGraphTitle: 'Fflowlink — reporting, explainers, and desk notes',
      openGraphDescription:
        'Field reporting, line edits, and the occasional manifesto on how we publish—written to be read, not skimmed.',
      keywords: ['Fflowlink', 'articles', 'reporting', 'explainers', 'newsroom', 'independent'],
    },
    introBadge: 'Newsroom',
    introTitle: 'Stories filed with care, edited for busy readers.',
    introParagraphs: [
      'We publish on a steady beat: investigations when the facts warrant them, explainers when confusion is high, and desk notes when the newsroom itself has something to say.',
      'Every piece is edited twice—once for accuracy, once for voice—so the site feels consistent even when topics jump from policy to culture to tech.',
      'Corrections run at the top of the file with a timestamp. If we get something wrong, we say so plainly and fix the record.',
    ],
    sideBadge: 'At a glance',
    sidePoints: [
      'Morning reads under fifteen minutes when you only have a coffee in hand.',
      'Weekend features when you want context, not just headlines.',
      'A search bar tuned for article keywords—type the subject you care about.',
      'A writing desk that keeps drafts, edits, and publish checks in one place.',
    ],
    primaryLink: {
      label: 'Browse articles',
      href: '/articles',
    },
    secondaryLink: {
      label: 'About the desk',
      href: '/about',
    },
  },
  cta: {
    badge: 'Start exploring',
    title: 'Move from cover stories to explainers in one calm editorial system.',
    description: 'Fflowlink keeps long-form articles and desk notes visually aligned—premium, fast, and easy to scan.',
    primaryCta: {
      label: 'Read latest posts',
      href: '/articles',
    },
    secondaryCta: {
      label: 'Contact Sales',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Browse the newest posts in this section.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles and stories',
    description: 'Long-form features, explainers, and essays on Fflowlink.',
  },
  listing: {
    title: 'Listings and discoverable pages',
    description: 'Structured listings when you need directory-grade detail.',
  },
  classified: {
    title: 'Classifieds and announcements',
    description: 'Time-sensitive posts with marketplace-forward layout.',
  },
  image: {
    title: 'Images and visual posts',
    description: 'Gallery-led stories with immersive media framing.',
  },
  profile: {
    title: 'Profiles and public pages',
    description: 'People and teams presented with editorial polish.',
  },
  sbm: {
    title: 'Curated links and saved resources',
    description: 'Research shelves and bookmark lanes tuned for density.',
  },
  pdf: {
    title: 'PDFs and downloadable resources',
    description: 'Documents and downloads with crisp metadata.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings, services, and structured pages',
    paragraphs: [
      'Explore listings, services, brands, and discoverable pages across categories. Each entry is organized to make browsing clearer and help visitors quickly understand what a post offers.',
      'Listings connect naturally with articles, images, resources, and other content types so supporting information stays easy to reach from the same platform.',
      'Browse by category to compare posts in context, discover related content, and move between formats without losing your place.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore classifieds', href: '/classifieds' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  article: {
    title: 'Articles, stories, and long-form reading',
    paragraphs: [
      'This section is for explainers, investigations, and desk notes written for readers who want context—not a headline that evaporates in a day.',
      'Pieces are edited for clarity first: short sections, honest uncertainty, and quotes that sound like real people.',
      'Browse below for recent work. When the wire is quiet, we still show representative samples so you can see how stories render on this site.',
    ],
    links: [],
  },
  classified: {
    title: 'Classifieds, offers, and timely updates',
    paragraphs: [
      'Classified posts help surface offers, notices, deals, and time-sensitive opportunities in a faster-scanning format.',
      'They work well alongside articles, listings, and profiles, making it easier to connect short-term posts with more structured content.',
      'Browse by category to find announcements quickly, then continue into related sections when you need more detail.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  image: {
    title: 'Image-led posts and visual stories',
    paragraphs: [
      'Images take the lead in this section through galleries, visual posts, and story-led content where imagery carries the experience.',
      'These posts connect with articles, listings, and other sections so visuals can act as entry points into deeper content.',
      'Browse the latest visual updates, then continue into related stories or supporting pages for more context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open classifieds', href: '/classifieds' },
    ],
  },
  profile: {
    title: 'Profiles, identities, and public pages',
    paragraphs: [
      'Profiles capture the identity behind a business, creator, brand, or project and help visitors understand who is behind the content they are exploring.',
      'These pages work as trust anchors across the site and connect naturally with stories, listings, documents, and other post types.',
      'Browse profiles to understand people and brands more clearly, then continue into related content from the same source.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'Browse images', href: '/images' },
    ],
  },
  sbm: {
    title: 'Curated links and bookmarked resources',
    paragraphs: [
      'This section collects useful links, references, tools, and saved resources in a text-first browsing format.',
      'Bookmarks stay connected to the rest of the platform, making it easier to move from a saved link into related stories, listings, or resources.',
      'Use this section to organize helpful sources and discover connected content without leaving the broader site experience.',
    ],
    links: [
      { label: 'Browse articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open PDFs', href: '/pdf' },
    ],
  },
  pdf: {
    title: 'PDFs, documents, and downloadable files',
    paragraphs: [
      'The PDF library hosts reports, guides, downloadable files, and longer-form document resources that support reading and discovery.',
      'These resources work alongside stories, listings, and profiles, helping document-style content stay connected to the rest of the platform.',
      'Browse by category to find relevant files quickly, then continue into related sections when you want more context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'See listings', href: '/listings' },
      { label: 'Explore profiles', href: '/profile' },
    ],
  },
  social: {
    title: 'Short updates and community signals',
    paragraphs: [
      'Short updates add quick signals that keep activity flowing across the platform.',
      'They work well with stories, listings, and resources by helping visitors move from brief updates into deeper content.',
      'Use these posts as lightweight entry points into the broader site experience.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View PDFs', href: '/pdf' },
    ],
  },
  comment: {
    title: 'Commentary and short responses',
    paragraphs: [
      'Shorter reactions and desk notes that sit beside reporting—styled like the rest of the site.',
      'Typography matches long-form articles so the reading experience stays consistent.',
      'Use this lane for follow-ups, clarifications, and annotated reading lists.',
    ],
    links: [
      { label: 'Read features', href: '/articles' },
      { label: 'Search the archive', href: '/search' },
      { label: 'Contact editors', href: '/contact' },
    ],
  },
  org: {
    title: 'Organizations, teams, and structured entities',
    paragraphs: [
      'Organization pages provide structured identity surfaces for teams, brands, communities, and agencies.',
      'Used with listings, stories, profiles, and resources, they help create stronger structure across the platform.',
      'Connect organization pages with related content to build a clearer and more unified site presence.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
}
