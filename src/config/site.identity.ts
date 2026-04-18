export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'fjkb3lw2rs',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Fflowlink',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Independent articles & desk notes',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Fflowlink is an independent editorial desk: explainers, investigations, and short notes for readers who want the full picture.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'fflowlink.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fflowlink.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const

