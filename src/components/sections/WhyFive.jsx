import { smallBatchBenefits } from '../../data/academyData'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

export default function WhyFive() {
  return (
    <Section id="program">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <SectionHeading
            kicker="Why only 5 students"
            title="A room small enough for your questions to matter."
            body="This is not a recorded course where hundreds of people watch the same video. Vedarth Academy runs on live learning, real-time doubt solving, project feedback and individual guidance — which only works when the batch stays small."
          />
          <div className="reveal mt-8 inline-flex items-center gap-3 rounded-2xl border border-line bg-surface/55 px-5 py-4">
            <div className="flex -space-x-1.5" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-base bg-gradient-to-br from-brand/70 to-violet/70"
                  style={{ opacity: 1 - i * 0.12 }}
                />
              ))}
            </div>
            <p className="text-[0.88rem] text-body">
              <span className="font-semibold text-ink">Five learners per batch.</span> Every session can adapt to where you actually are.
            </p>
          </div>
        </div>

        <ul className="space-y-3">
          {smallBatchBenefits.map((b, i) => (
            <li
              key={b.title}
              className="reveal group flex gap-4 rounded-2xl border border-line bg-surface/55 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-soft"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line bg-brand/8 text-[0.78rem] font-bold text-brand transition-colors group-hover:border-brand/40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-[1rem]">{b.title}</h3>
                <p className="mt-1 text-[0.9rem] leading-relaxed text-body">{b.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
