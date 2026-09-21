import ApplicationModal from './components/application/ApplicationModal'
import AssistantButton from './components/assistant/AssistantButton'
import AssistantWindow from './components/assistant/AssistantWindow'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ScrollProgress from './components/layout/ScrollProgress'
import { UIProvider } from './context/UIContext'
import { useRevealObserver } from './hooks/useReveal'
import { useTheme } from './hooks/useTheme'
import Home from './pages/Home'

export default function App() {
  const { theme, toggle } = useTheme()
  useRevealObserver()

  return (
    <UIProvider>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <Home />
      <Footer />
      <AssistantButton />
      <AssistantWindow />
      <ApplicationModal />
    </UIProvider>
  )
}
