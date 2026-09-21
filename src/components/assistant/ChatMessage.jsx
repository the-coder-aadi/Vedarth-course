import { cn } from '../ui/cn'

export default function ChatMessage({ role, text, sources = [], verified = true }) {
  const isUser = role === 'user'
  return (
    <div
      className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}
      style={{ animation: 'msgIn .35s cubic-bezier(.2,.8,.2,1)' }}
    >
      <div
        className={cn(
          'max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[0.88rem] leading-relaxed',
          isUser
            ? 'rounded-br-md bg-brand text-white'
            : cn('rounded-bl-md border bg-surface/80 text-ink', verified ? 'border-line' : 'border-amber-400/50'),
        )}
      >
        {text.split('\n\n').map((p, i) => (
          <p key={i} className={i ? 'mt-2' : undefined}>{p}</p>
        ))}
        {!isUser && sources.length > 0 && (
          <p className="mt-2 flex flex-wrap gap-1.5">
            {sources.map((s) => (
              <span key={s} className="rounded-md border border-line bg-base/60 px-2 py-0.5 text-[0.68rem] text-muted">
                {s}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  )
}
