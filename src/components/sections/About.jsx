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
            title="Learning should lead to building."
            body="Vedarth Academy is built around a simple idea: learning technology should go beyond watching lessons and collecting certificates."
          />
          <p className="reveal mt-5 max-w-xl text-[0.98rem] leading-relaxed text-body">
            We focus on live classes, practical development, real-world projects, problem-solving and hands-on work.
            The goal is straightforward — help students build skills they can actually demonstrate, in a repository,
            in an interview, and on a deployed URL.
          </p>

          <div className="reveal mt-8 rounded-2xl border border-line bg-surface/60 p-6">
            <h3 className="text-[1.02rem]">What we promise</h3>
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
              No fake numbers, no borrowed testimonials. As real students complete the program, their work will speak here.
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
