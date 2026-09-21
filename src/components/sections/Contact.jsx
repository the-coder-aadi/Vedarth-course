import { academyConfig, contactConfig } from '../../config/academyConfig'
import { useUI } from '../../context/UIContext'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'

const channels = [
  {
    name: 'WhatsApp',
    icon: 'whatsapp',
    value: contactConfig.whatsapp,
    note: 'Fastest for quick questions',
    href: contactConfig.whatsappUrl,
  },
  {
    name: 'Email',
    icon: 'mail',
    value: contactConfig.email,
    note: 'For detailed queries',
    href: `mailto:${contactConfig.email}`,
  },
  {
    name: 'Phone',
    icon: 'phone',
    value: contactConfig.phone,
    note: 'Call during working hours',
    href: `tel:${contactConfig.phone}`,
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    value: contactConfig.instagram,
    note: 'Updates and batch news',
    href: contactConfig.instagram,
  },
  {
    name: 'YouTube',
    icon: 'youtube',
    value: contactConfig.youtube,
    note: 'Sessions and walkthroughs',
    href: contactConfig.youtube,
  },
]

export default function Contact() {
  const { openApplication } = useUI()

  return (
    <Section id="contact" tone="elevated">
      <div className="grid min-w-0 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

        {/* Left */}
        <div className="min-w-0">
          <SectionHeading
            kicker="Contact"
            title="Talk to us before you apply."
            body={`Ask anything about the curriculum, the batch, or the internship. We reply within ${academyConfig.responseTime}.`}
          />

          <div className="reveal mt-8 rounded-2xl border border-line bg-surface/60 p-5 sm:p-6">
            <h3 className="text-[1rem]">Ready to start?</h3>

            <p className="mt-1.5 text-[0.88rem] text-body">
              The {academyConfig.batchStart} batch has {academyConfig.batchSize} seats.
            </p>

            <div className="mt-5 flex min-w-0 flex-col gap-3 sm:flex-row">
              <Button
                arrow
                onClick={() => openApplication('batch')}
              >
                Apply for batch
              </Button>

              <Button
                as="a"
                href={contactConfig.whatsappUrl}
                variant="secondary"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Contact on WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <ul className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
          {channels.map((c, i) => (
            <li
              key={c.name}
              className="reveal min-w-0"
              style={{
                transitionDelay: `${(i % 2) * 60}ms`,
              }}
            >
              <a
                href={c.href}
                className="
                  flex min-w-0 w-full items-start gap-3
                  overflow-hidden
                  rounded-2xl border border-line
                  bg-surface/60
                  p-4
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-brand/40
                  hover:shadow-soft
                  sm:p-5
                "
              >
                {/* Icon */}
                <span
                  className="
                    grid h-9 w-9 shrink-0
                    place-items-center
                    rounded-xl
                    border border-line
                    bg-brand/8
                    text-brand
                    sm:h-10 sm:w-10
                  "
                >
                  <Icon
                    name={c.icon}
                    className="h-4 w-4 sm:h-[1.1rem] sm:w-[1.1rem]"
                  />
                </span>

                {/* Content */}
                <div className="min-w-0 flex-1 overflow-hidden">
                  <p className="truncate text-[0.9rem] font-semibold text-ink sm:text-[0.95rem]">
                    {c.name}
                  </p>

                  <p
                    className="
                      mt-0.5
                      min-w-0
                      overflow-hidden
                      text-ellipsis
                      whitespace-nowrap
                      font-mono
                      text-[0.68rem]
                      text-body
                      sm:text-[0.76rem]
                    "
                    title={String(c.value)}
                  >
                    {c.value}
                  </p>

                  <p className="mt-1 truncate text-[0.72rem] text-muted sm:text-[0.8rem]">
                    {c.note}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </Section>
  )
}