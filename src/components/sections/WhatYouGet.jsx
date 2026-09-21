import { whatYouGet } from '../../data/academyData'
import Icon from '../ui/Icon'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

export default function WhatYouGet() {
  return (
    <Section tone="elevated">
      <SectionHeading
        kicker="What the program includes"
        title="Everything you need to go from learning to shipping."
        body="One program, one fee. Each part exists because it shows up in real development work."
      />

      <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {whatYouGet.map((f, i) => (
          <article
            key={f.title}
            className="reveal group relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift"
            style={{ transitionDelay: `${(i % 3) * 60}ms` }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-brand/8 text-brand transition-transform duration-300 group-hover:-translate-y-0.5">
              <Icon name={f.icon} className="h-[1.15rem] w-[1.15rem]" />
            </span>
            <h3 className="mt-4 text-[1rem]">{f.title}</h3>
            <p className="mt-1.5 text-[0.88rem] leading-relaxed text-body">{f.body}</p>
          </article>
        ))}

        <article className="reveal relative overflow-hidden rounded-2xl border border-violet/35 bg-violet/8 p-5">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-violet/35 bg-violet/12 text-violet">
            <Icon name="target" className="h-[1.15rem] w-[1.15rem]" />
          </span>
          <h3 className="mt-4 text-[1rem] text-violet">Paid internship opportunity</h3>
          <p className="mt-1.5 text-[0.88rem] leading-relaxed text-body">
            One per batch, for the top-performing eligible student.{' '}
            <a href="#internship" className="font-semibold text-violet underline-offset-4 hover:underline">
              See how it is selected
            </a>
          </p>
        </article>
      </div>
    </Section>
  )
}
