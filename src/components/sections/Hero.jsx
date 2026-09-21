import { academyConfig } from '../../config/academyConfig'
import { useUI } from '../../context/UIContext'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Container from '../ui/Container'
import HeroVisual from './HeroVisual'
import JourneyRail from './JourneyRail'

export default function Hero() {
  const { openApplication } = useUI()

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-36 lg:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-veil opacity-60" />
      <div aria-hidden="true" className="orb left-[-10%] top-[-6rem] h-[26rem] w-[26rem] bg-brand/14 animate-drift" />
      <div aria-hidden="true" className="orb right-[-8%] top-[8rem] h-[24rem] w-[24rem] bg-violet/12 animate-drift" style={{ animationDelay: '-9s' }} />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 xl:gap-16">
          <div>
            <div className="flex flex-wrap gap-2 opacity-0" style={{ animation: 'heroIn .7s .05s cubic-bezier(.2,.8,.2,1) forwards' }}>
              <Badge label="Next batch" value={academyConfig.batchStart} />
              <Badge label="Seats" value={`Only ${academyConfig.batchSize} students`} tone="violet" />
              <Badge label="Format" value="Live online" tone="neutral" />
            </div>

            <h1
              className="mt-6 text-[2.15rem] leading-[1.08] sm:text-[3rem] lg:text-[3.6rem] xl:text-[4rem] opacity-0"
              style={{ animation: 'heroIn .8s .15s cubic-bezier(.2,.8,.2,1) forwards' }}
            >
              Learn. Build. Prove.
              <br />
              <span className="text-gradient">Earn the opportunity.</span>
            </h1>

            <p
              className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-body sm:text-[1.15rem] opacity-0"
              style={{ animation: 'heroIn .8s .25s cubic-bezier(.2,.8,.2,1) forwards' }}
            >
              Master the MERN stack and Generative AI through live, practical, project-based classes.
              Build real applications, strengthen your development skills, and compete for a paid
              internship opportunity inside your {academyConfig.batchSize}-student batch.
            </p>

            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center opacity-0"
              style={{ animation: 'heroIn .8s .35s cubic-bezier(.2,.8,.2,1) forwards' }}
            >
              <Button size="lg" arrow onClick={() => openApplication('batch')}>
                Apply for batch
              </Button>
              <Button as="a" href="#demo" size="lg" variant="secondary">
                Attend free demo
              </Button>
            </div>

            <div
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.88rem] text-body opacity-0"
              style={{ animation: 'heroIn .8s .45s cubic-bezier(.2,.8,.2,1) forwards' }}
            >
              <span className="font-semibold text-ink">{academyConfig.feeLabel}</span>
              <span aria-hidden="true" className="h-3 w-px bg-line" />
              <span>3 Months duration</span>
              <span aria-hidden="true" className="h-3 w-px bg-line" />
              <span>Installment support available</span>
            </div>
          </div>

          <div className="min-w-0 opacity-0" style={{ animation: 'heroIn 1s .35s cubic-bezier(.2,.8,.2,1) forwards' }}>
            <HeroVisual />
          </div>
        </div>

        <div
          className="mt-20 rounded-2xl border border-line bg-surface/50 p-4 opacity-0 sm:mt-24 sm:p-5"
          style={{ animation: 'heroIn .8s .6s cubic-bezier(.2,.8,.2,1) forwards' }}
        >
          <p className="mb-3 text-[0.78rem] font-semibold text-muted">How the batch works</p>
          <JourneyRail compact />
        </div>
      </Container>

      <style>{`@keyframes heroIn { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }`}</style>
    </section>
  )
}
