import { academyConfig } from '../../config/academyConfig'
import { useUI } from '../../context/UIContext'
import Button from '../ui/Button'
import Container from '../ui/Container'

const facts = [
  { label: 'Next batch', value: academyConfig.batchStart },
  { label: 'Fee', value: academyConfig.feeLabel },
  { label: 'Students', value: `Only ${academyConfig.batchSize}` },
  { label: 'Demo', value: 'Free' },
  { label: 'Internship', value: '1 paid opportunity / batch' },
]

export default function FinalCTA() {
  const { openApplication } = useUI()

  return (
    <section className="relative overflow-hidden py-8 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="orb left-1/2 top-0 h-[22rem] w-[40rem] -translate-x-1/2 bg-brand/14 animate-drift" />
      <Container className="relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-[1.9rem] leading-[1.14] sm:text-[2.5rem] lg:text-[3rem]">
            Ready to build something real?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-body sm:text-lg">
            Join a focused {academyConfig.batchSize}-student batch and start your journey into {academyConfig.course}.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" arrow onClick={() => openApplication('batch')}>Apply for batch</Button>
            <Button as="a" href="#demo" size="lg" variant="secondary">Attend free demo</Button>
          </div>
        </div>

        <dl className="reveal mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {facts.map((f) => (
            <div key={f.label} className="rounded-2xl border border-line bg-surface/60 px-4 py-4 text-center">
              <dt className="text-[0.74rem] font-semibold text-muted">{f.label}</dt>
              <dd className="mt-1 text-[0.95rem] font-bold leading-snug text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
