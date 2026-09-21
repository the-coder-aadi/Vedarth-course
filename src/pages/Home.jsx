import About from '../components/sections/About'
import Audience from '../components/sections/Audience'
import Contact from '../components/sections/Contact'
import Curriculum from '../components/sections/Curriculum'
import DoubtSection from '../components/sections/DoubtSection'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'
import FreeDemo from '../components/sections/FreeDemo'
import GenerativeAI from '../components/sections/GenerativeAI'
import Hero from '../components/sections/Hero'
import HowItWorks from '../components/sections/HowItWorks'
import Internship from '../components/sections/Internship'
import KeyFacts from '../components/sections/KeyFacts'
import Pricing from '../components/sections/Pricing'
import Projects from '../components/sections/Projects'
import WhatYouGet from '../components/sections/WhatYouGet'
import WhyFive from '../components/sections/WhyFive'

export default function Home() {
  return (
    <main>
      <Hero />
      <KeyFacts />
      <WhyFive />
      <WhatYouGet />
      <Curriculum />
      <Projects />
      <GenerativeAI />
      <Internship />
      <HowItWorks />
      <Pricing />
      <FreeDemo />
      <Audience />
      <About />
      <FAQ />
      <FinalCTA />
      <DoubtSection />
      <Contact />
    </main>
  )
}
