import { academyConfig } from '../../config/academyConfig'
import { useCountUp } from '../../hooks/useCountUp'
import Container from '../ui/Container'

function Stat({ value, display, prefix = '', label, note }) {
  const { ref, value: n } = useCountUp(value)
  return (
    <div className="min-w-[8.5rem] flex-1 snap-start rounded-2xl border border-line bg-surface/55 px-5 py-5">
      <p ref={ref} className="text-[1.3rem] font-extrabold tracking-tight text-ink sm:text-[1.9rem]">
        {display ?? `${prefix}${n.toLocaleString('en-IN')}`}
      </p>
      <p className="mt-1 text-[0.86rem] font-semibold text-ink/85">{label}</p>
      <p className="mt-0.5 text-[0.78rem] text-muted">{note}</p>
    </div>
  )
}

export default function KeyFacts() {
  const facts = [
    { value: academyConfig.batchSize, label: 'Students per batch', note: 'Small batch, live' },
    { value: academyConfig.fee, prefix: '₹', label: 'Program fee', note: 'No hidden add-ons' },
    { display: academyConfig.batchStartShort, label: 'Next batch starts', note: 'Applications open' },
    { value: 1, label: 'Free demo class', note: 'Before you decide' },
    { value: 1, label: 'Paid internship', note: 'Per batch, top performer' },
  ]

  return (
    <div className="relative">
      <Container>
       <div className="reveal -mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {facts.map((f, index) => (
  <div
    key={f.label}
    className={index === facts.length - 1 ? 'col-span-2 sm:col-span-1' : ''}
  >
    <Stat {...f} />
  </div>
))}
        </div>
      </Container>
    </div>
  )
}
