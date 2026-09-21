import { cn } from './cn'
import Icon from './Icon'

const variants = {
  primary:
    'bg-brand text-white shadow-[0_10px_30px_-10px_rgb(var(--c-brand)/0.8)] hover:bg-brand/90 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgb(var(--c-brand)/0.9)]',
  secondary:
    'glass text-ink hover:-translate-y-0.5 hover:border-brand/45 hover:shadow-soft',
  ghost: 'text-ink/85 hover:text-brand hover:bg-brand/8',
  quiet: 'hairline bg-surface/60 text-body hover:text-ink hover:border-brand/40',
}

const sizes = {
  sm: 'h-9 px-4 text-[0.82rem]',
  md: 'h-11 px-5 text-[0.9rem]',
  lg: 'h-12 px-6 text-[0.95rem] sm:h-[3.25rem] sm:px-7',
}

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  arrow = false,
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        'group inline-flex select-none items-center justify-center gap-2 rounded-full font-semibold',
        'transition-all duration-300 ease-out active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
      {arrow && (
        <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
      )}
    </Tag>
  )
}
