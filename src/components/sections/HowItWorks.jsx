import { howItWorks } from '../../data/academyData'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

export default function HowItWorks() {
  return (
    <Section tone="elevated">
      <SectionHeading
        kicker="Admission"
        title="How you join a batch."
        body="Five steps, no sales calls in between."
        align="center"
      />

      <ol className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
        <span aria-hidden="true" className="absolute left-0 right-0 top-[2.15rem] hidden h-px bg-gradient-to-r from-brand/10 via-brand/40 to-violet/40 lg:block" />
        {howItWorks.map((s, i) => (
          <li
            key={s.step}
            className="reveal relative rounded-2xl border border-line bg-surface/65 p-5"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full border border-line bg-base font-mono text-[0.72rem] font-semibold text-brand">
              {s.step}
            </span>
            <h3 className="mt-4 text-[0.98rem]">{s.title}</h3>
            <p className="mt-1.5 text-[0.86rem] leading-relaxed text-body">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
