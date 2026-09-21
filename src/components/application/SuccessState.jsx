import { academyConfig, contactConfig } from '../../config/academyConfig'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

export default function SuccessState({ reference, onClose }) {
  return (
    <div className="px-6 py-10 text-center sm:px-10 sm:py-12">
      <div className="relative mx-auto grid h-20 w-20 place-items-center">
        <span aria-hidden="true" className="absolute inset-0 rounded-full bg-brand/15 animate-pulseRing" />
        <span className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand to-violet text-white">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.6} />
        </span>
      </div>

      <h2 className="mt-6 text-[1.5rem] sm:text-[1.85rem]">Application received 🎉</h2>
      <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-body">
        Thank you for applying to {academyConfig.name}. Our team will contact you within{' '}
        {academyConfig.responseTime} — please keep your phone and WhatsApp available.
      </p>

      {reference && (
        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2 font-mono text-[0.8rem] text-body">
          Reference <span className="font-semibold text-ink">{reference}</span>
        </p>
      )}

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button as="a" href={contactConfig.whatsappUrl} variant="secondary" onClick={onClose}>
          <Icon name="whatsapp" className="h-4 w-4" />
          Contact on WhatsApp
        </Button>
        <Button onClick={onClose}>Back to the site</Button>
      </div>
    </div>
  )
}
