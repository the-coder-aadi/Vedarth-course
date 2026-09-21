import { cn } from '../ui/cn'

/** Abstract CSS mock UIs — no screenshots, no stock imagery. */
export default function ProjectPreview({ type, accent = 'brand' }) {
  const bar = accent === 'violet' ? 'bg-violet' : 'bg-brand'

  const frames = {
    dashboard: (
      <div className="flex h-full gap-2">
        <div className="hidden w-1/4 flex-col gap-1.5 rounded-lg bg-base/60 p-2 sm:flex">
          {[1, 0.7, 0.85, 0.5].map((w, i) => (
            <span key={i} className={cn('h-1.5 rounded-full', i === 0 ? bar : 'bg-line')} style={{ width: `${w * 100}%` }} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 rounded-lg bg-base/60 p-2">
                <span className={cn('block h-1.5 w-8 rounded-full', i === 0 ? bar : 'bg-line')} />
                <span className="mt-1.5 block h-3 w-10 rounded bg-line/70" />
              </div>
            ))}
          </div>
          <div className="flex-1 rounded-lg bg-base/60 p-2">
            <div className="flex h-full items-end gap-1.5">
              {[35, 60, 45, 80, 55, 70, 40].map((h, i) => (
                <span key={i} className={cn('flex-1 rounded-sm', i === 3 ? bar : 'bg-line')} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    board: (
      <div className="grid h-full grid-cols-3 gap-2">
        {[3, 2, 1].map((n, c) => (
          <div key={c} className="flex flex-col gap-1.5 rounded-lg bg-base/60 p-2">
            <span className={cn('h-1.5 w-8 rounded-full', c === 1 ? bar : 'bg-line')} />
            {Array.from({ length: n }).map((_, i) => (
              <span key={i} className="block rounded bg-surface/80 p-1.5">
                <span className="block h-1.5 w-full rounded bg-line" />
                <span className="mt-1 block h-1.5 w-2/3 rounded bg-line/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    ),
    editor: (
      <div className="flex h-full flex-col gap-2">
        <div className="rounded-lg bg-base/60 p-2">
          <span className={cn('block h-1.5 w-12 rounded-full', bar)} />
          <span className="mt-1.5 block h-1.5 w-full rounded bg-line" />
        </div>
        <div className="flex-1 rounded-lg bg-base/60 p-2">
          {[100, 92, 78, 96, 60].map((w, i) => (
            <span key={i} className="mb-1.5 block h-1.5 rounded bg-line" style={{ width: `${w}%`, opacity: 1 - i * 0.12 }} />
          ))}
          <span className={cn('mt-1 block h-1.5 w-1/3 rounded', bar)} />
        </div>
      </div>
    ),
    analytics: (
      <div className="flex h-full flex-col gap-2">
        <div className="flex gap-2">
          <span className="h-8 w-8 rounded-full bg-line" />
          <div className="flex-1 space-y-1.5 pt-1">
            <span className="block h-1.5 w-1/3 rounded bg-line" />
            <span className={cn('block h-1.5 w-1/5 rounded', bar)} />
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden rounded-lg bg-base/60">
          <svg viewBox="0 0 120 50" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
            <path d="M0 40 L20 30 L40 34 L60 18 L80 24 L100 10 L120 16" fill="none"
              stroke={accent === 'violet' ? 'rgb(var(--c-violet))' : 'rgb(var(--c-brand))'} strokeWidth="1.5" />
            <path d="M0 40 L20 30 L40 34 L60 18 L80 24 L100 10 L120 16 L120 50 L0 50 Z"
              fill={accent === 'violet' ? 'rgb(var(--c-violet)/0.12)' : 'rgb(var(--c-brand)/0.12)'} />
          </svg>
        </div>
      </div>
    ),
  }

  return (
    <div className="h-36 rounded-xl border border-line bg-elevated/60 p-3 sm:h-40" aria-hidden="true">
      {frames[type] ?? frames.dashboard}
    </div>
  )
}
