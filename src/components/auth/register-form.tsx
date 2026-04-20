'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Sparkles } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

type RegisterFormFields = {
  inputClassName: string
  buttonClassName: string
  mutedClassName: string
  eyebrowClassName: string
  redirectDefault?: string
}

function RegisterFormInner({
  inputClassName,
  buttonClassName,
  mutedClassName,
  eyebrowClassName,
  redirectDefault = '/',
}: RegisterFormFields) {
  const { signup, isLoading } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)

  const resolveRedirect = () => {
    const raw = searchParams.get('next')
    if (raw && raw.startsWith('/') && !raw.startsWith('//')) return raw
    return redirectDefault
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const password = String(fd.get('password') ?? '')
    const bioHint = String(fd.get('bioHint') ?? '').trim()
    if (!name || !email || !password) {
      setError('Name, email, and password are required.')
      return
    }
    try {
      await signup(name, email, password, bioHint ? { bio: bioHint } : undefined)
      router.push(resolveRedirect())
      router.refresh()
    } catch {
      setError('Something went wrong. Try again.')
    }
  }

  return (
    <>
      <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${eyebrowClassName}`}>Create account</p>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
        <input
          name="name"
          type="text"
          autoComplete="name"
          required
          className={`h-12 rounded-xl px-4 text-sm ${inputClassName}`}
          placeholder="Full name"
        />
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className={`h-12 rounded-xl px-4 text-sm ${inputClassName}`}
          placeholder="Email address"
        />
        <input
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={6}
          className={`h-12 rounded-xl px-4 text-sm ${inputClassName}`}
          placeholder="Password (6+ characters)"
        />
        <input
          name="bioHint"
          type="text"
          autoComplete="off"
          className={`h-12 rounded-xl px-4 text-sm ${inputClassName}`}
          placeholder="What do you write about? (optional)"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold disabled:pointer-events-none disabled:opacity-60 ${buttonClassName}`}
        >
          {isLoading ? 'Creating account…' : 'Create account'}
        </button>
      </form>
      <div className={`mt-6 flex flex-wrap items-center justify-between gap-3 text-sm ${mutedClassName}`}>
        <span>Already have an account?</span>
        <Link href="/login" className="inline-flex items-center gap-2 font-semibold hover:underline">
          <Sparkles className="h-4 w-4 shrink-0" />
          Sign in
        </Link>
      </div>
    </>
  )
}

export function RegisterForm(props: RegisterFormFields) {
  return (
    <Suspense fallback={<div className="mt-6 h-52 animate-pulse rounded-2xl bg-slate-100/80" aria-hidden />}>
      <RegisterFormInner {...props} />
    </Suspense>
  )
}
