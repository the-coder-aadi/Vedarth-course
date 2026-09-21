import { useState } from 'react'
import { academyConfig } from '../../config/academyConfig'
import { evaluationCriteria } from '../../data/academyData'
import { useUI } from '../../context/UIContext'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import { cn } from '../ui/cn'
import JourneyRail from './JourneyRail'

const { internship } = academyConfig

const facts = [
  { label: 'Duration', value: `${internship.durationMonths} months` },
  { label: 'Stipend', value: `${internship.stipendPerMonthLabel} / month` },
  { label: 'Total stipend', value: internship.totalStipendLabel },
  { label: 'Selection', value: `1 of ${internship.studentsPerBatch} students` },
]

export default function Internship() {
  const { openApplication } = useUI()
  const [showCriteria, setShowCriteria] = useState(false)

  return (
    <section id="internship" className="relative overflow-hidden py-12 sm:py-20 lg:py-28">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/5 to-transparent" />
      <div aria-hidden="true" className="orb left-1/2 top-10 h-[24rem] w-[38rem] -translate-x-1/2 bg-violet/14 animate-drift" />

      <Container className="relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/8 px-3.5 py-1.5 text-[0.76rem] font-semibold text-violet">
            <Icon name="target" className="h-3.5 w-3.5" />
            The opportunity
          </p>
          <h2 className="text-[1.9rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3.1rem]">
            One batch. Five students.
            <br />
            One paid internship opportunity.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-body sm:text-lg">
            At the end of the program, the top-performing eligible student of the batch is selected for a{' '}
            {internship.durationMonths}-month paid internship with {academyConfig.name}. It is earned through
            performance — and if you are that student and complete the selection process, the internship is yours.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className="reveal rounded-2xl border border-line bg-surface/65 px-5 py-5 text-center"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <p className="text-[0.78rem] font-semibold text-muted">{f.label}</p>
              <p className="mt-1.5 text-[1.35rem] font-extrabold tracking-tight text-ink">{f.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
            <h3 className="text-[1.15rem]">How the batch reaches the internship</h3>
            <JourneyRail className="mt-6" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="reveal rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setShowCriteria((v) => !v)}
                aria-expanded={showCriteria}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <h3 className="text-[1.15rem]">How is the internship student selected?</h3>
                <span className={cn('grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-muted transition-transform duration-300', showCriteria && 'rotate-45 border-brand/40 text-brand')}>
                  <Icon name="plus" className="h-3.5 w-3.5" strokeWidth={2.2} />
                </span>
              </button>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-body">
                Six criteria, weighed together at the end of the program.
              </p>
              <div className={cn('grid transition-all duration-400', showCriteria ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                <div className="overflow-hidden">
                  <ul className="mt-4 space-y-2">
                    {evaluationCriteria.map((c, i) => (
                      <li key={c} className="flex items-center gap-3 rounded-xl border border-line bg-base/50 px-3.5 py-2.5 text-[0.88rem] text-ink">
                        <span className="font-mono text-[0.7rem] text-muted">{String(i + 1).padStart(2, '0')}</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-xl border border-violet/30 bg-violet/8 px-4 py-3 text-[0.85rem] leading-relaxed text-body">
                    Every batch provides one paid internship opportunity to its top-performing eligible student.
                    Not every student receives an internship, and we do not claim otherwise.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal rounded-3xl border border-violet/35 bg-violet/8 p-6 sm:p-8">
              <p className="text-[1.05rem] font-semibold leading-snug text-ink">
                Invest in skills. Earn the opportunity.
              </p>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-body">
                Don't just complete a course. Build the skills to earn the opportunity.
              </p>
              <Button className="mt-5 w-full sm:w-auto" size="lg" arrow onClick={() => openApplication('batch')}>
                Apply for the batch
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
