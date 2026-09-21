import Container from './Container'
import { cn } from './cn'

export default function Section({ id, className, containerClassName, children, tone }) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-12 sm:py-16 lg:py-20',
        tone === 'elevated' && 'bg-elevated/60',
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
