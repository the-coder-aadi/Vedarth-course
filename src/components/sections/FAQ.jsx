import { faqData } from '../../data/faqData'
import Accordion from '../ui/Accordion'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

export default function FAQ() {
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <SectionHeading
          kicker="FAQ"
          title="Questions students ask before applying."
          body="If something isn't answered here, ask the assistant or message us directly."
          className="lg:sticky lg:top-28 lg:h-fit"
        />
        <div className="reveal">
          <Accordion items={faqData} defaultOpen={0} />
        </div>
      </div>
    </Section>
  )
}
