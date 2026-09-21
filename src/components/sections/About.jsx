import { academyConfig } from '../../config/academyConfig'
import { promises } from '../../data/academyData'
import Icon from '../ui/Icon'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <Section id="about" tone="elevated">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
        <div>
        <SectionHeading
  kicker={`About ${academyConfig.name}`}
  title="Learn MERN Stack & Generative AI by Building Real Projects."
  body="Vedarth Academy is a live, project-based learning academy focused on MERN Stack development and Generative AI. Learn by building real applications, solving practical problems, and developing skills you can demonstrate in your portfolio and interviews."
/>
      <p className="reveal mt-5 max-w-xl text-[0.98rem] leading-relaxed text-body">
  Our live online classes combine MERN Stack development, Generative AI, practical coding,
  real-world projects, problem-solving, GitHub workflows, and deployment. Students learn by
  building applications they can demonstrate through their portfolio, interviews, and deployed projects.
</p>

          <div className="reveal mt-8 rounded-2xl border border-line bg-surface/60 p-6">
           <h3 className="text-[1.02rem]">What You Get at Vedarth Academy</h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[0.88rem] text-body">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand/12 text-brand">
                    <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
        <p className="mt-5 border-t border-line pt-4 text-[0.84rem] text-muted">
  We focus on real learning, practical work, and outcomes that students can demonstrate through their projects and skills.
</p>

          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-sm">
          <div aria-hidden="true" className="orb inset-6 bg-brand/15 animate-drift" />
        <div className="glass relative grid h-[340px] place-items-center rounded-3xl p-8 shadow-soft sm:h-[360px]">
            <img
        src="/logo.png"
        alt="Vedarth Academy"
        className="h-54 w-54 -translate-y-5 object-contain"
      />
            <p className="absolute bottom-7 left-0 right-0 text-center text-[0.82rem] font-semibold text-body">
              Many paths in. One outcome you can show.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
