import { cn } from './cn'

export default function SectionHeading({ kicker, title, body, align = 'left', className }) {
  const centered = align === 'center'
  return (
    <div className={cn('reveal max-w-2xl', centered && 'mx-auto text-center', className)}>
      {kicker && (
        <p className={cn('mb-3 flex items-center gap-2 text-sm font-semibold text-brand', centered && 'justify-center')}>
          <span aria-hidden="true" className="h-px w-6 bg-brand/50" />
          {kicker}
        </p>
      )}
      <h2 className="text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {body && <p className="mt-4 text-[0.98rem] leading-relaxed text-body sm:text-lg">{body}</p>}
    </div>
  )
}
