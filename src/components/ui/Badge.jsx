import { cn } from './cn'

/** Two-part badge: a quiet key and a firm value. Used for batch / seats / demo facts. */
export default function Badge({ label, value, tone = 'brand', className }) {
  const tones = {
    brand: 'border-brand/25 bg-brand/8 text-brand',
    violet: 'border-violet/25 bg-violet/8 text-violet',
    neutral: 'border-line bg-surface/70 text-body',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.72rem] font-semibold leading-none sm:text-[0.78rem]',
        tones[tone],
        className,
      )}
    >
      {label && <span className="font-medium opacity-70">{label}</span>}
      {label && <span aria-hidden="true" className="h-3 w-px bg-current opacity-25" />}
      <span>{value}</span>
    </span>
  )
}
