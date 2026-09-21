import { cn } from './cn'

export default function GlassCard({ as: Tag = 'div', hover = false, className, children, ...rest }) {
  return (
    <Tag
      className={cn(
        'glass rounded-2xl shadow-soft',
        hover &&
          'transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
