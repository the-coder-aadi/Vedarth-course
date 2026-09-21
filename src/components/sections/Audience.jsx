import { audience } from '../../data/academyData'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

export default function Audience() {
  return (
    <Section>
      <SectionHeading
        kicker="Who it's for"
        title="Built for students who want to actually build."
        body="If you can commit to live classes and assignments, the starting point matters less than the consistency."
      />
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {audience.map((a, i) => (
          <li
            key={a.title}
            className="reveal group rounded-2xl border border-line bg-surface/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-soft"
            style={{ transitionDelay: `${(i % 4) * 55}ms` }}
          >
            <h3 className="text-[0.98rem]">{a.title}</h3>
            <p className="mt-1.5 text-[0.86rem] leading-relaxed text-body">{a.note}</p>
          </li>
        ))}
      </ul>
      <p className="reveal mt-6 text-[0.85rem] text-muted">
        We do not make job or placement guarantees. What we offer is live training, real projects and one paid internship opportunity per batch.
      </p>
    </Section>
  )
}
