import { useId } from 'react'
import { cn } from './cn'

const baseControl =
  'w-full rounded-xl border bg-surface/70 px-4 text-[0.95rem] text-ink placeholder:text-muted/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand/35'

function shell(error) {
  return cn(baseControl, error ? 'border-red-400/70 focus:border-red-400' : 'border-line focus:border-brand/60')
}

function Label({ htmlFor, children, optional }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 flex items-baseline gap-2 text-[0.82rem] font-semibold text-ink">
      {children}
      {optional && <span className="text-[0.72rem] font-medium text-muted">optional</span>}
    </label>
  )
}

function Error({ id, message }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-center gap-1.5 text-[0.78rem] font-medium text-red-500">
      <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
      {message}
    </p>
  )
}

export function Input({ label, error, optional, className, ...rest }) {
  const id = useId()
  return (
    <div className={className}>
      <Label htmlFor={id} optional={optional}>{label}</Label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={cn(shell(error), 'h-12')}
        {...rest}
      />
      <Error id={`${id}-err`} message={error} />
    </div>
  )
}

export function Textarea({ label, error, optional, className, rows = 4, ...rest }) {
  const id = useId()
  return (
    <div className={className}>
      <Label htmlFor={id} optional={optional}>{label}</Label>
      <textarea
        id={id}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={cn(shell(error), 'py-3 leading-relaxed')}
        {...rest}
      />
      <Error id={`${id}-err`} message={error} />
    </div>
  )
}

export function Select({ label, error, options = [], placeholder = 'Select an option', className, ...rest }) {
  const id = useId()
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <select
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          className={cn(shell(error), 'h-12 appearance-none pr-10')}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <svg viewBox="0 0 24 24" aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <Error id={`${id}-err`} message={error} />
    </div>
  )
}

export function ChoiceGroup({ label, options, value, onChange, error, columns = 2 }) {
  return (
    <fieldset>
      <legend className="mb-2 text-[0.82rem] font-semibold text-ink">{label}</legend>
      <div className={cn('grid gap-2', columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3')}>
        {options.map((o) => {
          const active = value === o
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              aria-pressed={active}
              className={cn(
                'rounded-xl border px-4 py-3 text-left text-[0.88rem] font-medium transition-all duration-200',
                active
                  ? 'border-brand/60 bg-brand/10 text-brand shadow-[0_0_0_3px_rgb(var(--c-brand)/0.08)]'
                  : 'border-line bg-surface/60 text-body hover:border-brand/35 hover:text-ink',
              )}
            >
              {o}
            </button>
          )
        })}
      </div>
      <Error message={error} />
    </fieldset>
  )
}
