import { academyConfig } from '../../config/academyConfig'
import { pricingIncludes } from '../../data/academyData'
import { useUI } from '../../context/UIContext'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

export default function Pricing() {
  const { openApplication } = useUI()

  return (
    <Section id="pricing">
      <SectionHeading
        kicker="Fee"
        title="One program. One fee. Nothing held back."
        body="Everything listed below is part of the program — there is no premium tier and no upsell later."
        align="center"
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal relative overflow-hidden rounded-3xl border border-brand/30 bg-surface/70 p-6 shadow-soft sm:p-8">
          <div aria-hidden="true" className="orb -right-16 -top-16 h-48 w-48 bg-brand/18" />
          <div className="relative">
            <p className="text-[0.8rem] font-semibold text-brand">{academyConfig.course}</p>
            <div className="mt-3 flex items-end gap-3">
              <span className="text-[2.8rem] font-extrabold leading-none tracking-tight text-ink sm:text-[3.2rem]">
                {academyConfig.feeLabel}
              </span>
              <span className="pb-1.5 text-[0.88rem] text-body">complete program</span>
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-base/50 px-4 py-3">
                <p className="text-[0.74rem] text-muted">Next batch</p>
                <p className="mt-0.5 text-[0.92rem] font-semibold text-ink">{academyConfig.batchStart}</p>
              </div>
              <div className="rounded-xl border border-line bg-base/50 px-4 py-3">
                <p className="text-[0.74rem] text-muted">Batch size</p>
                <p className="mt-0.5 text-[0.92rem] font-semibold text-ink">{academyConfig.batchSize} students</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-xl border border-violet/30 bg-violet/8 px-4 py-3">
              <Icon name="spark" className="h-4 w-4 text-violet" />
              <p className="text-[0.88rem] font-semibold text-ink">1 free demo class before you decide</p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" arrow className="sm:flex-1" onClick={() => openApplication('batch')}>
                Apply for batch
              </Button>
              <Button as="a" href="#demo" size="lg" variant="secondary" className="sm:flex-1">
                Attend free demo
              </Button>
            </div>
          </div>
        </div>

        <div className="reveal rounded-3xl border border-line bg-surface/55 p-6 sm:p-8">
          <h3 className="text-[1.05rem]">What the fee covers</h3>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {pricingIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.88rem] leading-snug text-body">
                <span className="mt-0.5 grid h-[1.125rem] w-[1.125rem] shrink-0 place-items-center rounded-full bg-brand/12 text-brand">
                  <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="reveal mx-auto mt-4 flex max-w-5xl flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-elevated/60 p-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-[1.05rem]">Need payment flexibility?</h3>
          <p className="mt-1.5 max-w-xl text-[0.9rem] leading-relaxed text-body">
            Installment payment support is available for students who need it. Ask us and we will walk you through the options.
          </p>
        </div>
        <Button as="a" href="#contact" variant="secondary" className="shrink-0">
          Ask about installments
        </Button>
      </div>
    </Section>
  )
}
