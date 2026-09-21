import { useUI } from '../../context/UIContext'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Icon from '../ui/Icon'

export default function DoubtSection() {
  const { openAssistant } = useUI()

  return (
    <section className="relative py-10 sm:py-16">
      <Container>
        <div className="reveal relative overflow-hidden rounded-3xl border border-line bg-surface/60 p-7 sm:p-10">
          <div aria-hidden="true" className="orb -right-10 -top-16 h-56 w-56 bg-violet/16" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-[1.6rem] sm:text-[2rem]">Have a doubt?</h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-body">
                Still unsure about the program, curriculum, internship or admission process? Ask the assistant for
                a quick answer, or talk to us directly.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Button size="lg" onClick={openAssistant}>
                <Icon name="spark" className="h-4 w-4" />
                Ask Vedarth Assistant
              </Button>
              <Button as="a" href="#contact" size="lg" variant="secondary">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
