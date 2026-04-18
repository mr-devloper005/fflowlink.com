'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Sparkles } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

type LoginFormFields = {
  inputClassName: string
  buttonClassName: string
  mutedClassName: string
  eyebrowClassName: string
  /** Safe in-app path after sign-in when `?next=` is not set. */
  redirectDefault?: string
}

function LoginFormInner({
  inputClassName,
  buttonClassName,
  mutedClassName,
  eyebrowClassName,
  redirectDefault = '/',
}: LoginFormFields) {
  const { login, isLoading } = useAuth()
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
    const email = String(fd.get('email') ?? '').trim()
    const password = String(fd.get('password') ?? '')
    if (!email || !password) {
      setError('Enter your email and password.')
      return
    }
    try {
      await login(email, password)
      router.push(resolveRedirect())
      router.refresh()
    } catch {
      setError('Something went wrong. Try again.')
    }
  }

  return (
    <>
      <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${eyebrowClassName}`}>Welcome back</p>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
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
          autoComplete="current-password"
          required
          className={`h-12 rounded-xl px-4 text-sm ${inputClassName}`}
          placeholder="Password"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold disabled:pointer-events-none disabled:opacity-60 ${buttonClassName}`}
        >
          {isLoading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
      <div className={`mt-6 flex flex-wrap items-center justify-between gap-3 text-sm ${mutedClassName}`}>
        <Link href="/forgot-password" className="hover:underline">
          Forgot password?
        </Link>
        <Link href="/register" className="inline-flex items-center gap-2 font-semibold hover:underline">
          <Sparkles className="h-4 w-4 shrink-0" />
          Create account
        </Link>
      </div>
    </>
  )
}

export function LoginForm(props: LoginFormFields) {
  return (
    <Suspense fallback={<div className="mt-6 h-40 animate-pulse rounded-2xl bg-slate-100/80" aria-hidden />}>
      <LoginFormInner {...props} />
    </Suspense>
  )
}
