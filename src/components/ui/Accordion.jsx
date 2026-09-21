import { useState } from 'react'
import Icon from './Icon'
import { cn } from './cn'

export default function Accordion({ items, defaultOpen = null }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface/55">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-brand/5 sm:px-6 sm:py-5"
              >
                <span className={cn('text-[0.98rem] font-semibold transition-colors sm:text-[1.05rem]', isOpen ? 'text-brand' : 'text-ink')}>
                  {item.q}
                </span>
                <span
                  className={cn(
                    'grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300',
                    isOpen ? 'rotate-180 border-brand/40 bg-brand/10 text-brand' : 'border-line text-muted',
                  )}
                >
                  <Icon name="chevron" className="h-3.5 w-3.5" strokeWidth={2.2} />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              className={cn('grid transition-all duration-300 ease-out', isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[0.93rem] leading-relaxed text-body sm:px-6 sm:pb-6 sm:text-[1rem]">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
