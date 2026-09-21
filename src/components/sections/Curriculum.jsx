import { useEffect, useRef, useState } from 'react'
import { curriculumData } from '../../data/curriculumData'
import Icon from '../ui/Icon'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { cn } from '../ui/cn'

export default function Curriculum() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const listRef = useRef(null)

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    const onScroll = () => {
      const r = el.getBoundingClientRect()
      const total = r.height + window.innerHeight * 0.5
      const seen = window.innerHeight * 0.75 - r.top
      setProgress(Math.min(1, Math.max(0, seen / total)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <Section id="curriculum">
      <SectionHeading
        kicker="Curriculum"
        title="From foundations to AI-powered full-stack development."
        body="Ten stages, taught in order. Each one builds on the code you wrote in the last."
      />

      <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-12">
        <ol ref={listRef} className="relative pl-10 sm:pl-12">
          <span aria-hidden="true" className="absolute left-[1.05rem] top-3 bottom-3 w-px bg-line sm:left-[1.3rem]" />
          <span
            aria-hidden="true"
            className="absolute left-[1.05rem] top-3 w-px origin-top bg-gradient-to-b from-brand to-violet transition-[height] duration-200 sm:left-[1.3rem]"
            style={{ height: `calc(${progress * 100}% - 1.5rem)` }}
          />
          {curriculumData.map((c, i) => {
            const open = active === i
            return (
              <li key={c.id} className="reveal relative pb-3" style={{ transitionDelay: `${(i % 4) * 50}ms` }}>
                <span
                  className={cn(
                    'absolute -left-10 top-4 grid h-8 w-8 place-items-center rounded-full border font-mono text-[0.68rem] font-medium transition-all duration-300 sm:-left-12 sm:h-9 sm:w-9 sm:text-[0.72rem]',
                    open ? 'border-brand bg-brand text-white' : 'border-line bg-base text-muted',
                  )}
                >
                  {c.id}
                </span>
                <button
                  type="button"
                  onClick={() => setActive(open ? -1 : i)}
                  aria-expanded={open}
                  className={cn(
                    'w-full rounded-2xl border px-5 py-4 text-left transition-all duration-300',
                    open ? 'border-brand/45 bg-surface shadow-soft' : 'border-line bg-surface/50 hover:border-brand/30',
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[1.02rem]">{c.title}</h3>
                      <p className="mt-1 text-[0.88rem] leading-relaxed text-body">{c.summary}</p>
                    </div>
                    <Icon
                      name="chevron"
                      className={cn('mt-1 h-4 w-4 shrink-0 text-muted transition-transform duration-300', open && 'rotate-180 text-brand')}
                      strokeWidth={2}
                    />
                  </div>
                  <div className={cn('grid transition-all duration-300', open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                    <div className="overflow-hidden">
                      <ul className="mt-3 flex flex-wrap gap-2 pt-1">
                        {c.points.map((p) => (
                          <li key={p} className="rounded-full border border-line bg-base/60 px-3 py-1 text-[0.76rem] text-body">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              </li>
            )
          })}
        </ol>

        <aside className="reveal lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-2xl border border-line bg-surface/60 p-6">
            <h3 className="text-[1.05rem]">Technologies you will work with</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git', 'GitHub', 'Deployment', 'Generative AI'].map((t) => (
                <li key={t} className="rounded-lg border border-line bg-base/60 px-3 py-1.5 font-mono text-[0.76rem] text-ink">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-5 text-[0.86rem] leading-relaxed text-body">
              Sessions run in Hindi, Hinglish or English depending on what the batch is comfortable with.
              Every stage ends with an assignment reviewed in the next class.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  )
}
