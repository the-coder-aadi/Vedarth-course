import { useEffect, useRef } from 'react'
import { useScrollLock } from '../../hooks/useScrollLock'
import Icon from './Icon'
import { cn } from './cn'

export default function Modal({ open, onClose, labelledBy, children, className }) {
  const panelRef = useRef(null)
  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab') return
      const focusables = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables?.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    const t = setTimeout(() => panelRef.current?.focus(), 30)
    return () => { document.removeEventListener('keydown', onKey); clearTimeout(t) }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-[rgb(var(--c-shadow)/0.55)] backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
        style={{ animation: 'fadeIn .25s ease-out' }}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={cn(
          'relative z-10 flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl border border-line bg-base shadow-lift sm:max-w-2xl sm:rounded-3xl',
          className,
        )}
        style={{ animation: 'panelIn .35s cubic-bezier(.2,.8,.2,1)' }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/80 text-body transition-colors hover:text-ink"
        >
          <Icon name="close" className="h-4 w-4" strokeWidth={2} />
        </button>
        {children}
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes panelIn { from { opacity: 0; transform: translateY(24px) scale(.98) } to { opacity: 1; transform: none } }
      `}</style>
    </div>
  )
}
