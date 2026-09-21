import { useEffect, useState } from 'react'
import { academyConfig } from '../../config/academyConfig'
import { navLinks } from '../../data/academyData'
import { useUI } from '../../context/UIContext'
import { useScrollLock } from '../../hooks/useScrollLock'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import { cn } from '../ui/cn'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openApplication } = useUI()
  useScrollLock(menuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-line/80 bg-base/80 backdrop-blur-xl' : 'border-b border-transparent',
      )}
    >
      <Container>
        <nav aria-label="Main" className={cn('flex items-center justify-between transition-all duration-300', scrolled ? 'h-14 sm:h-16' : 'h-20')}>
          <a href="#home" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <Logo className={cn('transition-all duration-300', scrolled ? 'h-9 w-9' : 'h-10 w-10')} />
            <span className="text-[1.02rem] font-extrabold tracking-tight text-ink sm:text-[1.1rem]">
              {academyConfig.name}
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative rounded-lg px-3 py-2 text-[0.88rem] font-medium text-body transition-colors hover:text-ink"
                >
                  <span className="relative">
                    {l.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand transition-all duration-300 hover:w-full" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <Button size="sm" className="hidden sm:inline-flex" onClick={() => openApplication('batch')}>
              Apply now
            </Button>
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/70 text-ink lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} className="h-[1.125rem] w-[1.125rem]" strokeWidth={2} />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-line bg-base/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 ease-out lg:hidden',
          menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <Container className="py-5">
          <ul className="space-y-1">
            {navLinks.map((l, i) => (
              <li
                key={l.href}
                style={{ transitionDelay: `${menuOpen ? i * 35 : 0}ms` }}
                className={cn('transition-all duration-300', menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0')}
              >
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-[1rem] font-semibold text-ink transition-colors hover:bg-brand/8"
                >
                  {l.label}
                  <Icon name="arrow" className="h-4 w-4 text-muted" />
                </a>
              </li>
            ))}
          </ul>
          <Button
            className="mt-4 w-full"
            size="lg"
            arrow
            onClick={() => { setMenuOpen(false); openApplication('batch') }}
          >
            Apply for batch
          </Button>
        </Container>
      </div>
    </header>
  )
}
