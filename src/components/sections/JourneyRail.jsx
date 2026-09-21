import { internshipJourney } from '../../data/academyData'
import { cn } from '../ui/cn'

/**
 * The five-student → one-internship path.
 * `compact` renders the hero strip; the default renders the full internship diagram.
 */
export default function JourneyRail({ compact = false, className }) {
  if (compact) {
    return (
      <ol className={cn('flex flex-wrap items-center gap-x-2.5 gap-y-2', className)}>
        {internshipJourney.map((s, i) => (
          <li key={s.label} className="flex items-center gap-2.5">
            <span
              className={cn(
                'rounded-full border px-3 py-1.5 text-[0.72rem] font-semibold transition-colors',
                i === internshipJourney.length - 1
                  ? 'border-violet/40 bg-violet/10 text-violet'
                  : 'border-line bg-surface/60 text-body',
              )}
            >
              {s.label}
            </span>
            {i < internshipJourney.length - 1 && (
              <svg viewBox="0 0 12 8" className="h-2 w-3 text-muted/60" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M1 4h9m-3-3 3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    )
  }

  return (
    <ol className={cn('relative space-y-3', className)}>
      <span aria-hidden="true" className="absolute left-[1.15rem] top-6 bottom-6 w-px bg-gradient-to-b from-brand/50 via-brand/25 to-violet/60" />
      {internshipJourney.map((s, i) => {
        const last = i === internshipJourney.length - 1
        return (
          <li key={s.label} className="reveal relative flex items-start gap-4" style={{ transitionDelay: `${i * 70}ms` }}>
            <span
              className={cn(
                'relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border text-[0.75rem] font-bold',
                last ? 'border-violet/50 bg-violet text-white shadow-[0_0_0_6px_rgb(var(--c-violet)/0.12)]' : 'border-line bg-surface text-brand',
              )}
            >
              {last ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m5 12.5 4.5 4.5L19 7" />
                </svg>
              ) : (
                i + 1
              )}
            </span>
            <div
              className={cn(
                'flex-1 rounded-xl border px-4 py-3',
                last ? 'border-violet/35 bg-violet/8' : 'border-line bg-surface/55',
              )}
            >
              <p className={cn('text-[0.95rem] font-semibold', last ? 'text-violet' : 'text-ink')}>{s.label}</p>
              <p className="mt-0.5 text-[0.82rem] text-body">{s.note}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
