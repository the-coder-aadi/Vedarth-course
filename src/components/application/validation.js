export const required = (v) => (String(v ?? '').trim() ? '' : 'This field is required')

export const emailRule = (v) =>
  required(v) || (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email address')

export const phoneRule = (v) => {
  const base = required(v)
  if (base) return base
  const digits = v.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 13 ? '' : 'Enter a valid 10-digit mobile number'
}

export const urlRule = (v) => {
  if (!String(v ?? '').trim()) return ''
  return /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/.test(v.trim()) ? '' : 'Enter a valid URL'
}

export const yearRule = (v) => {
  const base = required(v)
  if (base) return base
  const n = Number(v)
  return Number.isInteger(n) && n >= 1980 && n <= 2035 ? '' : 'Enter a year between 1980 and 2035'
}

/** Returns an { field: message } object containing only the fields that failed. */
export function validateStep(step, form) {
  const e = {}
  const set = (k, msg) => { if (msg) e[k] = msg }

  if (step === 0) {
    set('fullName', required(form.fullName))
    set('mobile', phoneRule(form.mobile))
    set('whatsapp', phoneRule(form.whatsapp))
    set('email', emailRule(form.email))
    set('city', required(form.city))
    set('state', required(form.state))
  }

  if (step === 1) {
    set('status', required(form.status))
    if (form.status === 'School student') {
      set('schoolName', required(form.schoolName))
      set('schoolClass', required(form.schoolClass))
    }
    if (form.status === 'College student') {
      set('collegeName', required(form.collegeName))
      set('degree', required(form.degree))
      set('branch', required(form.branch))
      set('yearSemester', required(form.yearSemester))
    }
    if (form.status === 'Graduate') {
      set('degree', required(form.degree))
      set('collegeName', required(form.collegeName))
      set('graduationYear', yearRule(form.graduationYear))
    }
  }

if (step === 2) {
  set('level', required(form.level))
  set('jsExperience', required(form.jsExperience))
  set('projectsBuilt', required(form.projectsBuilt))
}

if (step === 3) {
  set('goal', required(form.goal))
  set('timing', required(form.timing))
}

  return e
}
