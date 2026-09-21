/** Mock course service. Swap for GET /api/course and GET /api/faq later. */
import { academyConfig } from '../config/academyConfig'
import { curriculumData } from '../data/curriculumData'
import { faqData } from '../data/faqData'

const delay = (ms) => new Promise((r) => setTimeout(r, ms))

export async function getCourse() {
  await delay(200)
  return { ...academyConfig, curriculum: curriculumData }
}

export async function getFaq() {
  await delay(200)
  return faqData
}
