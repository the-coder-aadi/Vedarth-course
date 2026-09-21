import { useMemo, useState } from 'react'
import { academyConfig } from '../../config/academyConfig'
import { submitApplication } from '../../services/applicationService'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import { ChoiceGroup, Input, Select, Textarea } from '../ui/Field'
import { cn } from '../ui/cn'
import SuccessState from './SuccessState'
import { validateStep } from './validation'

const steps = ['Personal', 'Education', 'Technical', 'Goals', 'Review']

const initialForm = {
  fullName: '', mobile: '', whatsapp: '', email: '', city: '', state: '',
  status: '', schoolName: '', schoolClass: '', collegeName: '', degree: '', branch: '',
  yearSemester: '', graduationYear: '',
  level: '', jsExperience: '', projectsBuilt: '',
  goal: '', timing: '',
}

export default function ApplicationForm({ intent = 'batch', onClose }) {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | error | success
  const [result, setResult] = useState(null)

  const set = (k) => (e) => {
    const value = e?.target ? e.target.value : e
    setForm((f) => ({ ...f, [k]: value }))
    setErrors((prev) => (prev[k] ? { ...prev, [k]: '' } : prev))
  }

  const goNext = () => {
    const e = validateStep(step, form)
    setErrors(e)
    if (Object.keys(e).length) return
    setStep((s) => Math.min(s + 1, steps.length - 1))
  }

  const goBack = () => setStep((s) => Math.max(0, s - 1))

  const submit = async () => {
    setStatus('submitting')
    try {
      const res = await submitApplication({ ...form, intent, course: academyConfig.course })
      setResult(res)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const summary = useMemo(
    () => [
      ['Course', academyConfig.course],
      ['Start date', academyConfig.batchStart],
      ['Batch size', `${academyConfig.batchSize} students`],
      ['Fee', academyConfig.feeLabel],
      ['Free demo', 'Yes — 1 class'],
      ['Installment support', 'Available'],
      ['Internship', `1 paid internship opportunity per batch for the top-performing eligible student`],
    ],
    [],
  )

  if (status === 'success') return <SuccessState onClose={onClose} />

  return (
    <>
      <div className="border-b border-line px-6 pb-4 pt-6 sm:px-8">
        <h2 id="application-title" className="pr-10 text-[1.15rem] sm:text-[1.3rem]">
          {intent === 'demo' ? 'Book your free demo class' : 'Apply for the batch'}
        </h2>
        <p className="mt-1 text-[0.85rem] text-body">
          {academyConfig.course} · {academyConfig.batchStart} · {academyConfig.batchSize} students
        </p>

        <ol className="mt-4 flex items-center gap-1.5">
          {steps.map((s, i) => (
            <li key={s} className="flex flex-1 flex-col gap-1.5">
              <span className={cn('h-1 rounded-full transition-colors duration-300', i <= step ? 'bg-brand' : 'bg-line')} />
              <span className={cn('text-[0.66rem] font-medium transition-colors sm:text-[0.72rem]', i === step ? 'text-ink' : 'text-muted')}>
                {s}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
        {step === 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Full name" value={form.fullName} onChange={set('fullName')} error={errors.fullName} placeholder="Your name" autoComplete="name" className="sm:col-span-2" />
            <Input label="Mobile number" inputMode="tel" value={form.mobile} onChange={set('mobile')} error={errors.mobile} placeholder="10-digit number" autoComplete="tel" />
            <Input label="WhatsApp number" inputMode="tel" value={form.whatsapp} onChange={set('whatsapp')} error={errors.whatsapp} placeholder="10-digit number" />
            <Input label="Email" type="email" value={form.email} onChange={set('email')} error={errors.email} placeholder="you@example.com" autoComplete="email" className="sm:col-span-2" />
            <Input label="City" value={form.city} onChange={set('city')} error={errors.city} placeholder="Indore" />
            <Input label="State" value={form.state} onChange={set('state')} error={errors.state} placeholder="Madhya Pradesh" />
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-5">
            <ChoiceGroup
              label="Current status"
              options={['School student', 'College student', 'Graduate', 'Working professional', 'Currently not studying']}
              value={form.status}
              onChange={set('status')}
              error={errors.status}
            />

            {form.status === 'School student' && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="School name" value={form.schoolName} onChange={set('schoolName')} error={errors.schoolName} />
                <Input label="Class" value={form.schoolClass} onChange={set('schoolClass')} error={errors.schoolClass} placeholder="e.g. 12th" />
              </div>
            )}

            {form.status === 'College student' && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="College name" value={form.collegeName} onChange={set('collegeName')} error={errors.collegeName} className="sm:col-span-2" />
                <Input label="Degree" value={form.degree} onChange={set('degree')} error={errors.degree} placeholder="BCA / BTech / MCA" />
                <Input label="Branch" value={form.branch} onChange={set('branch')} error={errors.branch} placeholder="CS / IT" />
                <Input label="Year or semester" value={form.yearSemester} onChange={set('yearSemester')} error={errors.yearSemester} placeholder="e.g. 3rd year" className="sm:col-span-2" />
              </div>
            )}

            {form.status === 'Graduate' && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Degree" value={form.degree} onChange={set('degree')} error={errors.degree} />
                <Input label="College" value={form.collegeName} onChange={set('collegeName')} error={errors.collegeName} />
                <Input label="Graduation year" inputMode="numeric" value={form.graduationYear} onChange={set('graduationYear')} error={errors.graduationYear} placeholder="2025" />
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-5">
            <ChoiceGroup
              label="Current programming level"
              options={['Beginner', 'Basic', 'Intermediate', 'Advanced']}
              value={form.level}
              onChange={set('level')}
              error={errors.level}
            />
            <Select
              label="JavaScript experience"
              options={['None yet', 'Less than 6 months', '6–12 months', 'More than a year']}
              value={form.jsExperience}
              onChange={set('jsExperience')}
              error={errors.jsExperience}
            />
            <Select
              label="Projects built so far"
              options={['None yet', '1–2 small projects', '3–5 projects', 'More than 5']}
              value={form.projectsBuilt}
              onChange={set('projectsBuilt')}
              error={errors.projectsBuilt}
            />
          
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-5">
            <Textarea
              label="What do you want to achieve?"
              value={form.goal}
              onChange={set('goal')}
              error={errors.goal}
              placeholder="e.g. build a full-stack project I can show in interviews"
            />
            <Select
              label="Preferred class timing"
              options={['Morning (9–11 AM)', 'Evening (7–9 PM)']}
              value={form.timing}
              onChange={set('timing')}
              error={errors.timing}
            />
           
          </div>
        )}

        {step === 4 && (
          <div>
            <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface/55">
              {summary.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-6 sm:px-5">
                  <dt className="w-40 shrink-0 text-[0.8rem] font-semibold text-muted">{k}</dt>
                  <dd className="text-[0.9rem] leading-snug text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-4 rounded-2xl border border-line bg-base/50 p-4">
              <p className="text-[0.8rem] font-semibold text-muted">Your details</p>
              <p className="mt-1.5 text-[0.9rem] text-ink">{form.fullName} · {form.city}, {form.state}</p>
              <p className="mt-0.5 text-[0.85rem] text-body">{form.email} · {form.mobile}</p>
              <p className="mt-0.5 text-[0.85rem] text-body">{form.status} · {form.level} level</p>
            </div>

            {status === 'error' && (
              <p role="alert" className="mt-4 flex items-start gap-2 rounded-xl border border-red-400/50 bg-red-500/8 px-4 py-3 text-[0.87rem] text-red-500">
                <Icon name="bolt" className="mt-0.5 h-4 w-4 shrink-0" />
                Something went wrong sending your application. Check your connection and try again.
              </p>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 border-t border-line bg-base/80 px-6 py-4 backdrop-blur sm:px-8">
        {step > 0 ? (
          <Button variant="quiet" onClick={goBack} disabled={status === 'submitting'}>Back</Button>
        ) : (
          <span className="text-[0.8rem] text-muted">Step {step + 1} of {steps.length}</span>
        )}

        <div className="ml-auto">
          {step < steps.length - 1 ? (
            <Button onClick={goNext} arrow>Continue</Button>
          ) : (
            <Button onClick={submit} disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                <>
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Submitting…
                </>
              ) : (
                'Submit application'
              )}
            </Button>
          )}
        </div>
      </div>
    </>
  )
}
