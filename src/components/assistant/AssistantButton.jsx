import { useUI } from '../../context/UIContext'
import Icon from '../ui/Icon'

export default function AssistantButton() {
  const { assistantOpen, openAssistant } = useUI()
  if (assistantOpen) return null

  return (
    <button
      type="button"
      onClick={openAssistant}
      aria-label="Ask Vedarth Assistant"
      className="group fixed bottom-4 right-4 z-[70] flex items-center gap-2.5 rounded-full border border-line bg-base/90 py-2.5 pl-2.5 pr-3.5 shadow-lift backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/45 sm:bottom-6 sm:right-6 sm:pr-5"
    >
      <span className="relative grid h-6 w-6 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-violet text-white">
        <span aria-hidden="true" className="absolute inset-0 rounded-full bg-brand/40 animate-pulseRing" />
        <Icon name="spark" className="relative h-3 sm:h-4 w-3 sm:w-4" strokeWidth={1.8} />
      </span>
      <span className="text-left">
        <span className="block text-[0.82rem] sm:text-[0.86rem] font-semibold leading-tight text-ink">Ask Vedarth</span>
        <span className="hidden text-[0.7rem] leading-tight text-muted sm:block">Fees, batch, internship</span>
      </span>
      <span className="hidden rounded-md border border-brand/30 bg-brand/10 px-1.5 py-0.5 text-[0.6rem] font-bold tracking-wide text-brand sm:block">
        AI
      </span>
    </button>
  )
}
