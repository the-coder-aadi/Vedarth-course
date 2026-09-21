import { projectData } from '../../data/projectData'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import ProjectPreview from './ProjectPreview'
import { cn } from '../ui/cn'

export default function Projects() {
  return (
    <Section tone="elevated">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          kicker="Projects"
          title="You will finish the program with applications, not notes."
          body="These are the kinds of builds the program is structured around. Each one starts as an empty folder and ends on a live URL."
        />
        <p className="reveal rounded-full border border-line bg-surface/60 px-4 py-2 text-[0.78rem] font-medium text-body">
          Project previews — examples of what you build
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {projectData.map((p, i) => (
          <article
            key={p.name}
            className="reveal group flex flex-col rounded-2xl border border-line bg-surface/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift"
            style={{ transitionDelay: `${(i % 2) * 70}ms` }}
          >
            <ProjectPreview type={p.preview} accent={p.accent} />
            <h3 className="mt-5 text-[1.08rem]">{p.name}</h3>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-body">{p.blurb}</p>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <li key={t} className="rounded-md border border-line bg-base/50 px-2 py-1 font-mono text-[0.7rem] text-body">{t}</li>
              ))}
            </ul>

            <ul className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className={cn(
                    'rounded-full px-2.5 py-1 text-[0.72rem] font-medium',
                    p.accent === 'violet' ? 'bg-violet/10 text-violet' : 'bg-brand/10 text-brand',
                  )}
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-[0.8rem] text-muted">
              <span>Repository — added during the batch</span>
              <span aria-hidden="true" className="h-3 w-px bg-line" />
              <span>Live demo — after deployment</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
