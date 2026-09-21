import { demoIncludes } from '../../data/academyData'
import { useUI } from '../../context/UIContext'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

export default function FreeDemo() {
  const { openApplication } = useUI()

  return (
    <Section id="demo" tone="elevated">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        {/* Left Content */}
        <div>
          <SectionHeading
            kicker="Free demo"
            title="Not sure if it's for you? Sit in first."
            body="Attend one free live demo class before deciding anything. Experience how the sessions work, how concepts are explained, and how you can interact directly during the class."
          />

          <ul className="reveal mt-8 grid gap-2.5 sm:grid-cols-2">
            {demoIncludes.map((d) => (
              <li
                key={d}
                className="flex items-start gap-2.5 rounded-xl border border-line bg-surface/60 px-4 py-3 text-[0.88rem] text-body"
              >
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand/12 text-brand">
                  <Icon
                    name="check"
                    className="h-2.5 w-2.5"
                    strokeWidth={3}
                  />
                </span>

                {d}
              </li>
            ))}
          </ul>

          <div className="reveal mt-8">
            <Button
              size="lg"
              arrow
              onClick={() => openApplication('demo')}
            >
              Attend free demo
            </Button>
          </div>
        </div>

        {/* Image Preview */}
        <div className="reveal">
          <div className="group relative w-full overflow-hidden rounded-3xl border border-line bg-surface/60 p-1.5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
            <div className="relative h-[320px] overflow-hidden rounded-[1.4rem] bg-elevated sm:h-[380px] lg:h-[400px]">
              {/* Replace this URL with your real Vedarth Academy classroom image */}
              <img
                src="tutor.png"
                alt="Live learning environment at Vedarth Academy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Subtle overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"
              />

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-white/75">
                  Vedarth Academy
                </p>

                <h3 className="mt-1 sm:mt-1.5 text-md font-semibold text-white sm:text-xl">
                  Live Classes. Personal Guidance.
                </h3>

                <p className="mt-1 text-sm text-white/80">
                  Learn, build and solve problems together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}