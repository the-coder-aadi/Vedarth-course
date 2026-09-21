import { useEffect, useState } from 'react'
import Icon from '../ui/Icon'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { cn } from '../ui/cn'

const samples = [
  {
    prompt: 'Summarise these 12 support tickets into 3 themes',
    result: ['Billing confusion — 5 tickets', 'Login failures on mobile — 4 tickets', 'Feature request: export — 3 tickets'],
  },
  {
    prompt: 'Write product copy from this feature list',
    result: ['Headline drafted', 'Three benefit lines generated', 'Saved to drafts collection'],
  },
  {
    prompt: 'Turn this meeting note into tasks with owners',
    result: ['4 tasks created', 'Owners matched from team list', 'Due dates set for this week'],
  },
]

const stages = ['Your app', 'Your API route', 'Model call', 'Rendered result']

export default function GenerativeAI() {
  const [index, setIndex] = useState(0)
  const [stage, setStage] = useState(0)

  useEffect(() => {
    setStage(0)
    const timers = stages.map((_, i) => setTimeout(() => setStage(i + 1), 420 * (i + 1)))
    return () => timers.forEach(clearTimeout)
  }, [index])

  const sample = samples[index]
  const done = stage >= stages.length

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <SectionHeading
            kicker="Generative AI"
            title="Build with AI. Not just learn about it."
            body="Generative AI is already part of how software gets written and shipped. In this program you wire model calls into your own backend, handle the response, deal with failures, and render the result in a real interface."
          />
          <ul className="reveal mt-8 space-y-3">
            {[
              'Call model APIs from your own Express routes',
              'Design prompts that live inside product code',
              'Handle streaming, errors and rate limits',
              'Store and display results from your database',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-[0.92rem] text-body">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/12 text-brand">
                  <Icon name="check" className="h-3 w-3" strokeWidth={2.6} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal">
          <div className="glass rounded-3xl p-5 shadow-soft sm:p-6">
            <div className="flex flex-wrap gap-2">
              {samples.map((s, i) => (
                <button
                  key={s.prompt}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-[0.74rem] font-medium transition-all duration-200',
                    i === index ? 'border-brand/50 bg-brand/10 text-brand' : 'border-line bg-surface/60 text-body hover:text-ink',
                  )}
                >
                  Prompt {i + 1}
                </button>
              ))}
              <span className="ml-auto self-center text-[0.7rem] text-muted">Interface demo</span>
            </div>

            <div className="mt-4 rounded-2xl border border-line bg-surface/70 p-4">
              <p className="text-[0.7rem] font-semibold text-muted">User prompt</p>
              <p className="mt-1.5 text-[0.92rem] font-medium text-ink">{sample.prompt}</p>
            </div>

            <ol className="mt-4 flex items-center gap-1.5">
              {stages.map((s, i) => (
                <li key={s} className="flex flex-1 flex-col gap-1.5">
                  <span
                    className={cn(
                      'h-1 rounded-full transition-all duration-500',
                      stage > i ? 'bg-gradient-to-r from-brand to-violet' : 'bg-line',
                    )}
                  />
                  <span className={cn('text-[0.66rem] transition-colors duration-300 sm:text-[0.7rem]', stage > i ? 'text-ink' : 'text-muted')}>
                    {s}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-4 rounded-2xl border border-line bg-surface/70 p-4">
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-md bg-gradient-to-br from-brand to-violet text-white">
                  <Icon name="spark" className="h-3 w-3" strokeWidth={2} />
                </span>
                <p className="text-[0.7rem] font-semibold text-muted">Result in your app</p>
                <span className="ml-auto font-mono text-[0.66rem] text-muted">{done ? '200 OK' : 'streaming…'}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {sample.result.map((r, i) => (
                  <li
                    key={r}
                    className="flex items-center gap-2.5 rounded-lg border border-line bg-base/50 px-3 py-2 text-[0.85rem] text-ink transition-all duration-500"
                    style={{ opacity: done ? 1 : 0.25, transform: done ? 'none' : 'translateY(4px)', transitionDelay: `${i * 90}ms` }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 font-mono text-[0.72rem] text-muted">
              POST /api/generate → model → MongoDB → UI
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
