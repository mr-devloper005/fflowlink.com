import type { LucideIcon } from 'lucide-react'
import { Bookmark, Building2, FileText, Image as ImageIcon } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import type { ProductKind } from '@/design/factory/get-product-kind'

export type AuthPageSideConfig = {
  shell: string
  panel: string
  side: string
  muted: string
  eyebrow: string
  action: string
  input: string
  bullet: string
  icon: LucideIcon
  iconClass: string
  title: string
  body: string
  bullets: string[]
}

export function getLoginPageConfig(kind: ProductKind): AuthPageSideConfig {
  if (kind === 'directory') {
    return {
      shell: 'bg-[#f8fbff] text-slate-950',
      panel: 'border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]',
      side: 'border border-slate-200 bg-slate-50/90',
      muted: 'text-slate-600',
      eyebrow: 'text-slate-500',
      action: 'bg-slate-950 text-white hover:bg-slate-800',
      input:
        'border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200',
      icon: Building2,
      iconClass: 'text-slate-700',
      title: 'Access your business dashboard',
      body: 'Manage listings, verification details, contact info, and local discovery from one place.',
      bullets: [
        'Structured listings with clear contact paths',
        'Verification and media in a single workflow',
        'Search-friendly layout matched to your brand',
      ],
      bullet: 'border border-slate-200 bg-white text-slate-800',
    }
  }
  if (kind === 'editorial') {
    return {
      shell:
        'bg-[radial-gradient(ellipse_80%_50%_at_0%_-10%,rgba(3,174,210,0.12),transparent_45%),linear-gradient(180deg,#f8fdff_0%,#ffffff_55%,#fffdf6_100%)] text-slate-900',
      panel: 'border border-cyan-500/15 bg-white/95 shadow-[0_18px_50px_rgba(10,22,40,0.07)]',
      side:
        'border border-cyan-500/12 bg-[linear-gradient(145deg,rgba(248,222,34,0.14),rgba(255,255,255,0.92))] shadow-[0_12px_40px_rgba(10,22,40,0.04)]',
      muted: 'text-slate-600',
      eyebrow: 'text-slate-500',
      action: 'bg-[#03AED2] text-white shadow-[0_10px_28px_rgba(3,174,210,0.25)] hover:brightness-95',
      input:
        'border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#03AED2] focus:outline-none focus:ring-2 focus:ring-[#03AED2]/20',
      icon: FileText,
      iconClass: 'text-[#03AED2]',
      title: `Sign in to ${SITE_CONFIG.name}`,
      body: 'Pick up where you left off—saved reading, drafts, and account preferences use the same calm layout as the rest of the site.',
      bullets: [
        'Long-form articles and desk notes in one account',
        'Bookmark and revisit pieces without losing context',
        'Write and review with typography tuned for reading',
      ],
      bullet: 'border border-cyan-500/20 bg-white/90 text-slate-800 shadow-sm',
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-[linear-gradient(180deg,#07101f_0%,#0b1a2e_100%)] text-white',
      panel: 'border border-white/10 bg-white/6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]',
      side: 'border border-white/10 bg-white/5',
      muted: 'text-slate-300',
      eyebrow: 'text-slate-400',
      action: 'bg-[#8df0c8] text-[#07111f] hover:bg-[#77dfb8]',
      input:
        'border border-white/15 bg-white/5 text-white placeholder:text-slate-400 focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20',
      icon: ImageIcon,
      iconClass: 'text-cyan-300',
      title: 'Enter your creator workspace',
      body: 'Open your gallery, profile, and publishing tools in a layout built for visuals first.',
      bullets: [
        'Portfolio-ready grids and full-bleed imagery',
        'Profile and posts share one visual language',
        'Fast uploads with previews that match the live site',
      ],
      bullet: 'border border-white/12 bg-white/5 text-slate-100',
    }
  }
  return {
    shell: 'bg-[linear-gradient(180deg,#faf7f4_0%,#ffffff_100%)] text-[#261811]',
    panel: 'border border-[#ddcdbd] bg-[#fffaf8] shadow-[0_18px_50px_rgba(38,24,17,0.06)]',
    side: 'border border-[#e8dbce] bg-[#f3e8db]/80',
    muted: 'text-[#71574a]',
    eyebrow: 'text-[#71574a]',
    action: 'bg-[#D12052] text-white hover:brightness-95',
    input:
      'border border-[#ddcdbd] bg-white text-[#261811] placeholder:text-[#8a7268] focus:border-[#D12052]/50 focus:outline-none focus:ring-2 focus:ring-[#D12052]/15',
    icon: Bookmark,
    iconClass: 'text-[#D12052]',
    title: 'Open your curated collections',
    body: 'Save links, add notes, and organize shelves with a quieter interface than a generic social feed.',
    bullets: [
      'Collections you can share or keep private',
      'Notes beside every saved link',
      'Search that respects how you labeled things',
    ],
    bullet: 'border border-[#ddcdbd] bg-white/90 text-[#261811]',
  }
}

export function getRegisterPageConfig(kind: ProductKind): AuthPageSideConfig {
  if (kind === 'directory') {
    return {
      shell: 'bg-[#f8fbff] text-slate-950',
      panel: 'border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]',
      side: 'border border-slate-200 bg-slate-50/90',
      muted: 'text-slate-600',
      eyebrow: 'text-slate-500',
      action: 'bg-slate-950 text-white hover:bg-slate-800',
      input:
        'border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200',
      bullet: 'border border-slate-200 bg-white text-slate-800',
      icon: Building2,
      iconClass: 'text-slate-700',
      title: 'Create a business-ready account',
      body: 'List services, manage locations, and turn on trust signals with a workflow built for directories.',
      bullets: [
        'Business profile, hours, and media in one flow',
        'Categories that match how people actually search',
        'Optional upgrades as you grow listings',
      ],
    }
  }
  if (kind === 'editorial') {
    return {
      shell:
        'bg-[radial-gradient(ellipse_80%_50%_at_0%_-10%,rgba(3,174,210,0.12),transparent_45%),linear-gradient(180deg,#f8fdff_0%,#ffffff_55%,#fffdf6_100%)] text-slate-900',
      panel: 'border border-cyan-500/15 bg-white/95 shadow-[0_18px_50px_rgba(10,22,40,0.07)]',
      side:
        'border border-cyan-500/12 bg-[linear-gradient(145deg,rgba(248,222,34,0.14),rgba(255,255,255,0.92))] shadow-[0_12px_40px_rgba(10,22,40,0.04)]',
      muted: 'text-slate-600',
      eyebrow: 'text-slate-500',
      action: 'bg-[#03AED2] text-white shadow-[0_10px_28px_rgba(3,174,210,0.25)] hover:brightness-95',
      input:
        'border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#03AED2] focus:outline-none focus:ring-2 focus:ring-[#03AED2]/20',
      bullet: 'border border-cyan-500/20 bg-white/90 text-slate-800 shadow-sm',
      icon: FileText,
      iconClass: 'text-[#03AED2]',
      title: `Join ${SITE_CONFIG.name}`,
      body: 'Create a free account to save drafts (demo), sync preferences, and keep the articles and desk notes you care about in one place.',
      bullets: [
        'Reading-first layout—not a generic admin skin',
        'Optional focus: essays, explainers, or short desk notes',
        'Same typography and spacing as published stories',
      ],
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-[linear-gradient(180deg,#07101f_0%,#0b1a2e_100%)] text-white',
      panel: 'border border-white/10 bg-white/6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]',
      side: 'border border-white/10 bg-white/5',
      muted: 'text-slate-300',
      eyebrow: 'text-slate-400',
      action: 'bg-[#8df0c8] text-[#07111f] hover:bg-[#77dfb8]',
      input:
        'border border-white/15 bg-white/5 text-white placeholder:text-slate-400 focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20',
      bullet: 'border border-white/12 bg-white/5 text-slate-100',
      icon: ImageIcon,
      iconClass: 'text-cyan-300',
      title: 'Set up your creator profile',
      body: 'Gallery publishing, identity surfaces, and discovery tuned for visual work—not a one-size feed.',
      bullets: [
        'Hero imagery and grids that match your brand',
        'Profile and posts stay visually consistent',
        'Lightweight onboarding so you can ship faster',
      ],
    }
  }
  return {
    shell: 'bg-[linear-gradient(180deg,#faf7f4_0%,#ffffff_100%)] text-[#261811]',
    panel: 'border border-[#ddcdbd] bg-[#fffaf8] shadow-[0_18px_50px_rgba(38,24,17,0.06)]',
    side: 'border border-[#e8dbce] bg-[#f3e8db]/80',
    muted: 'text-[#71574a]',
    eyebrow: 'text-[#71574a]',
    action: 'bg-[#D12052] text-white hover:brightness-95',
    input:
      'border border-[#ddcdbd] bg-white text-[#261811] placeholder:text-[#8a7268] focus:border-[#D12052]/50 focus:outline-none focus:ring-2 focus:ring-[#D12052]/15',
    bullet: 'border border-[#ddcdbd] bg-white/90 text-[#261811]',
    icon: Bookmark,
    iconClass: 'text-[#D12052]',
    title: 'Create a curator account',
    body: 'Save references, write shelf notes, and share collections without fighting a noisy social timeline.',
    bullets: [
      'Private shelves or shareable lists',
      'Context next to every link you save',
      'Fast search across your own library',
    ],
  }
}
