import { academyConfig, contactConfig } from '../../config/academyConfig'
import { navLinks } from '../../data/academyData'
import { useUI } from '../../context/UIContext'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import Logo from './Logo'

const socials = [
  { name: 'WhatsApp', icon: 'whatsapp', href: contactConfig.whatsappUrl },
  { name: 'Instagram', icon: 'instagram', href: contactConfig.instagram },
  { name: 'YouTube', icon: 'youtube', href: contactConfig.youtube },
  { name: 'Email', icon: 'mail', href: `mailto:${contactConfig.email}`},
]

export default function Footer() {
  const { openApplication } = useUI()
  return (
    <footer className="relative overflow-hidden border-t border-line bg-elevated/70">
      <div className="orb -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 bg-brand/12" aria-hidden="true" />
      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="text-lg font-extrabold tracking-tight text-ink">{academyConfig.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-[1.05rem] font-semibold leading-snug text-ink">
              {academyConfig.tagline}
            </p>
            <p className="mt-3 max-w-sm text-[0.9rem] leading-relaxed text-body">
              A live, small-batch program in {academyConfig.course}. Next batch begins {academyConfig.batchStart}.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[0.82rem] font-semibold text-ink">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[0.9rem] text-body transition-colors hover:text-brand">{l.label}</a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => openApplication('batch')}
                  className="text-[0.9rem] font-semibold text-brand transition-colors hover:text-violet"
                >
                  Apply
                </button>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.82rem] font-semibold text-ink">Reach us</h2>
            <ul className="mt-4 space-y-2.5 text-[0.9rem] text-body">
              <li>{contactConfig.email}</li>
              <li>{contactConfig.phone}</li>
            </ul>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface/60 text-body transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand"
                >
                  <Icon name={s.icon} className="h-[1.125rem] w-[1.125rem]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-[0.82rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {academyConfig.name}. All rights reserved.</p>
          <p>Live online · Small batch · {academyConfig.languages}</p>
        </div>
      </Container>
    </footer>
  )
}
