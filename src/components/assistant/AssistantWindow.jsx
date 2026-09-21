import { useEffect, useRef, useState } from 'react'
import { askAssistant, assistantGreeting, quickPrompts } from '../../services/assistantService'
import { useUI } from '../../context/UIContext'
import Icon from '../ui/Icon'
import ChatMessage from './ChatMessage'
import QuickPrompts from './QuickPrompts'

const greeting = {
  id: 'greeting',
  role: 'assistant',
  verified: true,
  text: `${assistantGreeting.text}\n\nAsk me about: ${assistantGreeting.list.join(' · ')}`,
}

export default function AssistantWindow() {
  const { assistantOpen, closeAssistant } = useUI()
  const [messages, setMessages] = useState([greeting])
  const [input, setInput] = useState('')
  const [state, setState] = useState('idle') // idle | thinking | error
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (assistantOpen) setTimeout(() => inputRef.current?.focus(), 120)
  }, [assistantOpen])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, state])

  useEffect(() => {
    if (!assistantOpen) return
    const onKey = (e) => e.key === 'Escape' && closeAssistant()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [assistantOpen, closeAssistant])

  const send = async (raw) => {
    const text = (raw ?? input).trim()
    if (!text || state === 'thinking') return
    setMessages((m) => [...m, { id: `u-${Date.now()}`, role: 'user', text }])
    setInput('')
    setState('thinking')
    try {
      const res = await askAssistant(text)
      setMessages((m) => [...m, { id: `a-${Date.now()}`, role: 'assistant', ...res }])
      setState('idle')
    } catch {
      setState('error')
    }
  }

  if (!assistantOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Vedarth Assistant"
      className="fixed inset-0 z-[75] flex flex-col border-line bg-base shadow-lift sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[min(34rem,calc(100vh-4rem))] sm:w-[24rem] sm:rounded-3xl sm:border"
      style={{
        animation: 'assistantIn .32s cubic-bezier(.2,.8,.2,1)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <header className="flex items-start gap-3 border-b border-line px-4 py-3.5" style={{ paddingTop: 'max(0.875rem, env(safe-area-inset-top))' }}>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-violet text-white">
          <Icon name="spark" className="h-4 w-4" strokeWidth={1.8} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[0.95rem] font-bold leading-tight text-ink">Vedarth Assistant</p>
          <p className="truncate text-[0.74rem] text-muted">Your guide to the Vedarth Academy program</p>
          <p className="mt-1 flex items-center gap-1.5 text-[0.7rem] font-medium text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Online
          </p>
        </div>
        <button
          type="button"
          onClick={closeAssistant}
          aria-label="Close assistant"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-body transition-colors hover:text-ink"
        >
          <Icon name="close" className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
      </header>

      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((m) => (
          <ChatMessage key={m.id} {...m} />
        ))}

        {state === 'thinking' && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-line bg-surface/80 px-3.5 py-3">
              <span className="text-[0.78rem] text-muted">Thinking</span>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  style={{ animation: `dot 1.2s ${i * 0.15}s infinite ease-in-out` }}
                />
              ))}
            </div>
          </div>
        )}

        {state === 'error' && (
          <div className="flex justify-start">
            <p role="alert" className="max-w-[85%] rounded-2xl rounded-bl-md border border-red-400/50 bg-red-500/8 px-3.5 py-2.5 text-[0.85rem] text-red-500">
              Something went wrong. Please try again.
            </p>
          </div>
        )}
      </div>

      <div className="border-t border-line px-4 py-3">
        {messages.length <= 1 && (
          <div className="mb-3">
            <QuickPrompts prompts={quickPrompts} onPick={send} disabled={state === 'thinking'} />
          </div>
        )}
        <form
          onSubmit={(e) => { e.preventDefault(); send() }}
          className="flex items-center gap-2 rounded-2xl border border-line bg-surface/70 py-1.5 pl-3.5 pr-1.5 focus-within:border-brand/50"
        >
          <label htmlFor="assistant-input" className="sr-only">Message Vedarth Assistant</label>
          <input
            id="assistant-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about fees, batch, internship…"
            className="min-w-0 flex-1 bg-transparent py-2 text-[0.88rem] text-ink placeholder:text-muted focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim() || state === 'thinking'}
            aria-label="Send message"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand text-white transition-all duration-200 hover:bg-brand/90 disabled:opacity-40"
          >
            <Icon name="send" className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </form>
        <p className="mt-2 text-center text-[0.68rem] text-muted">
          Answers come from verified program information only.
        </p>
      </div>

      <style>{`
        @keyframes assistantIn { from { opacity: 0; transform: translateY(16px) scale(.98) } to { opacity: 1; transform: none } }
        @keyframes msgIn { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }
        @keyframes dot { 0%,80%,100% { transform: translateY(0); opacity: .4 } 40% { transform: translateY(-3px); opacity: 1 } }
      `}</style>
    </div>
  )
}
