import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const UIContext = createContext(null)

export function UIProvider({ children }) {
  const [applicationOpen, setApplicationOpen] = useState(false)
  const [assistantOpen, setAssistantOpen] = useState(false)
  const [applicationIntent, setApplicationIntent] = useState('batch') // 'batch' | 'demo'

  const openApplication = useCallback((intent = 'batch') => {
    setApplicationIntent(intent)
    setApplicationOpen(true)
  }, [])

  const value = useMemo(
    () => ({
      applicationOpen,
      applicationIntent,
      openApplication,
      closeApplication: () => setApplicationOpen(false),
      assistantOpen,
      openAssistant: () => setAssistantOpen(true),
      closeAssistant: () => setAssistantOpen(false),
      toggleAssistant: () => setAssistantOpen((v) => !v),
    }),
    [applicationOpen, applicationIntent, assistantOpen, openApplication],
  )

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export function useUI() {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error('useUI must be used inside <UIProvider>')
  return ctx
}
