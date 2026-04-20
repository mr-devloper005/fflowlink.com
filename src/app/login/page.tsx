import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { LoginForm } from '@/components/auth/login-form'
import { getLoginPageConfig } from '@/config/auth-pages'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { LOGIN_PAGE_OVERRIDE_ENABLED, LoginPageOverride } from '@/overrides/login-page'

export default function LoginPage() {
  if (LOGIN_PAGE_OVERRIDE_ENABLED) {
    return <LoginPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getLoginPageConfig(productKind)
  const Icon = config.icon

  return (
    <div className={`min-h-screen ${config.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <div className={`rounded-[2rem] p-8 ${config.side}`}>
            <Icon className={`h-8 w-8 ${config.iconClass}`} />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 grid gap-3">
              {config.bullets.map((item) => (
                <div key={item} className={`rounded-2xl px-4 py-3.5 text-sm leading-snug ${config.bullet}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-8 ${config.panel}`}>
            <LoginForm
              inputClassName={config.input}
              buttonClassName={config.action}
              mutedClassName={config.muted}
              eyebrowClassName={config.eyebrow}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
