import { useEffect, useState } from 'react'

const codeLines = [
  [['const ', 'kw'], ['plan', 'fn'], [' = ', 'op'], ['await ', 'kw'], ['ai', 'fn'], ['.generate({', 'op']],
  [['  prompt', 'prop'], [': ', 'op'], ['"Plan my week from these notes"', 'str'], [',', 'op']],
  [['  context', 'prop'], [': ', 'op'], ['tasks', 'fn'], [',', 'op']],
  [['})', 'op']],
  [['', 'op']],
  [['await ', 'kw'], ['db', 'fn'], ['.plans.', 'op'], ['insertOne', 'fn'], ['(plan)', 'op']],
]

const tone = {
  kw: 'text-violet',
  fn: 'text-brand',
  str: 'text-emerald-500 dark:text-emerald-400',
  prop: 'text-ink',
  op: 'text-muted',
}

export default function HeroVisual() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setStep(3)
      return
    }
    const id = setInterval(() => setStep((s) => (s + 1) % 4), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
      <div className="orb -right-10 -top-12 h-56 w-56 bg-brand/25 animate-drift" aria-hidden="true" />
      <div className="orb -bottom-16 -left-10 h-56 w-56 bg-violet/22 animate-drift" aria-hidden="true" style={{ animationDelay: '-6s' }} />

      {/* Editor surface */}
      <div className="glass relative rounded-3xl p-4 shadow-lift sm:p-5">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 truncate font-mono text-[0.72rem] text-muted">server/routes/plan.js</span>
          <span className="ml-auto hidden rounded-md border border-line px-2 py-0.5 font-mono text-[0.66rem] text-muted sm:inline">
            main
          </span>
        </div>

        <pre className="mt-3 overflow-x-auto font-mono text-[0.72rem] leading-6 sm:text-[0.8rem]">
          <code>
            {codeLines.map((line, i) => (
              <div key={i} className="flex gap-3">
                <span className="w-4 shrink-0 select-none text-right text-muted/50">{i + 1}</span>
                <span className="whitespace-pre">
                  {line.map(([t, k], j) => (
                    <span key={j} className={tone[k]}>{t}</span>
                  ))}
                  {i === codeLines.length - 1 && (
                    <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-brand animate-caret" />
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface/60 p-3">
            <p className="text-[0.68rem] font-semibold text-muted">API</p>
            <p className="mt-1 font-mono text-[0.72rem] text-ink">POST /api/plan</p>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="font-mono text-[0.68rem] text-body">200 · 412ms</span>
            </div>
          </div>
          <div className="rounded-xl border border-line bg-surface/60 p-3">
            <p className="text-[0.68rem] font-semibold text-muted">Database</p>
            <p className="mt-1 font-mono text-[0.72rem] text-ink">plans · 1 inserted</p>
            <div className="mt-2 flex gap-1" aria-hidden="true">
              {[70, 40, 90, 55, 30, 65].map((h, i) => (
                <span key={i} className="w-1.5 rounded-sm bg-brand/35" style={{ height: `${h * 0.18}rem`, alignSelf: 'flex-end' }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating AI card */}
      <div className="glass absolute -bottom-8 -left-2 w-[15rem] rounded-2xl p-3.5 shadow-lift animate-float sm:-left-8 sm:w-[17rem]">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-lg bg-gradient-to-br from-brand to-violet text-white">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
              <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.2l-1.8-5.6L4.5 10.8 10.2 9 12 3.5Z" />
            </svg>
          </span>
          <p className="text-[0.75rem] font-semibold text-ink">AI response</p>
          <span className="ml-auto font-mono text-[0.62rem] text-muted">stream</span>
        </div>
        <div className="mt-2.5 space-y-1.5" aria-hidden="true">
          {[100, 82, 64].map((w, i) => (
            <span
              key={i}
              className="block h-1.5 rounded-full bg-brand/25 transition-all duration-700"
              style={{ width: `${step > i ? w : 12}%` }}
            />
          ))}
        </div>
        <p className="mt-3 text-[0.72rem] leading-relaxed text-body">
          {step > 2 ? 'Three focus blocks scheduled for Monday.' : 'Generating your plan…'}
        </p>
      </div>

      {/* Deploy pill */}
      <div className="glass absolute -right-1 -top-5 flex items-center gap-2 rounded-full px-3.5 py-2 shadow-soft sm:-right-6">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70 animate-pulseRing" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-[0.68rem] font-medium text-ink">deployed · live</span>
      </div>
    </div>
  )
}
