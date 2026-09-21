/**
 * Vedarth Assistant service.
 *
 * Today: keyword lookup over a small verified knowledge base.
 * Later: replace askAssistant() with
 *   POST /api/assistant -> RAG retrieval -> knowledge base -> LLM -> response.
 * The component layer only depends on the shape { text, sources, verified }.
 */
import { academyConfig } from '../config/academyConfig'

const { internship } = academyConfig

const FALLBACK =
  "I don't have verified information about that yet. Please contact Vedarth Academy (6263268853) directly for confirmation."

/** Verified facts only. Nothing here may be invented at answer time. */
const knowledgeBase = [
  {
    id: 'fee',
    keywords: ['fee', 'fees', 'price', 'cost', 'charge', 'kitna', 'paisa', 'rupee', 'amount'],
    source: 'Program fee',
    text: `The program fee is ${academyConfig.feeLabel} for ${academyConfig.course}. Installment support is available if you need flexibility.`,
  },
  {
    id: 'batch',
    keywords: ['batch', 'start', 'date', 'when', 'october', 'begin', 'kab', 'schedule'],
    source: 'Batch details',
    text: `The next batch starts on ${academyConfig.batchStart}. Each batch has only ${academyConfig.batchSize} students, and classes are live online.`,
  },
  {
    id: 'size',
    keywords: ['size', 'students', 'seats', 'how many', 'small batch', 'strength'],
    source: 'Batch details',
    text: `Every batch is limited to ${academyConfig.batchSize} students so there is room for live doubt solving, code reviews and individual guidance.`,
  },
  {
    id: 'internship',
    keywords: ['internship', 'intern', 'stipend', 'paid', 'opportunity', 'selection', 'top performer'],
    source: 'Internship',
    text: `Every batch of ${internship.studentsPerBatch} students includes ${internship.selectedStudents} paid internship opportunity. At the end of the program the top-performing eligible student is selected for a ${internship.durationMonths}-month paid internship with Vedarth Academy at ${internship.stipendPerMonthLabel} per month (${internship.totalStipendLabel} in total). Selection is based on coding ability, project quality, problem solving, assignments, consistency and interview performance.`,
  },
  {
    id: 'curriculum',
    keywords: ['curriculum', 'syllabus', 'topics', 'learn', 'teach', 'mern', 'react', 'node', 'mongodb', 'express', 'javascript', 'roadmap'],
    source: 'Curriculum',
    text: 'The program covers foundations, JavaScript, React, Node.js and Express, MongoDB, Generative AI integration, real-world projects, Git and GitHub, deployment, and a final evaluation round.',
  },
  {
    id: 'ai',
    keywords: ['ai', 'generative', 'gen ai', 'llm', 'model', 'artificial'],
    source: 'Generative AI',
    text: 'Generative AI is taught as something you build with. You integrate model APIs into working applications rather than studying AI only as a theory topic.',
  },
  {
    id: 'demo',
    keywords: ['demo', 'free class', 'trial', 'sample', 'try'],
    source: 'Free demo',
    text: 'One free demo class is available. It is a live session where you can see the teaching style, watch real coding and ask questions before applying.',
  },
  {
    id: 'projects',
    keywords: ['project', 'projects', 'build', 'portfolio', 'banao'],
    source: 'Projects',
    text: 'Students build practical full-stack and AI-integrated applications through the program, with project guidance and structured reviews.',
  },
  {
    id: 'eligibility',
    keywords: ['eligible', 'eligibility', 'beginner', 'who', 'suitable', 'bca', 'btech', 'mca', 'graduate', 'requirement'],
    source: 'Eligibility',
    text: 'The program is designed to support beginners while building toward practical full-stack and AI-powered development. College students, graduates and self-taught learners can apply.',
  },
  {
    id: 'installments',
    keywords: ['installment', 'emi', 'instalment', 'partial', 'flexibility', 'pay later'],
    source: 'Payment',
    text: 'Installment payment support is available for students who need additional flexibility. Contact Vedarth Academy to discuss the arrangement.',
  },
  {
    id: 'certificate',
    keywords: ['certificate', 'certification', 'proof'],
    source: 'Certificate',
    text: 'Students who successfully complete the program receive a course completion certificate.',
  },
  {
    id: 'admission',
    keywords: ['admission', 'apply', 'application', 'enroll', 'join', 'register', 'how do i'],
    source: 'Admission',
    text: `To join: explore the program, attend the free demo, then submit the application form. The team responds within ${academyConfig.responseTime}.`,
  },
  {
    id: 'mode',
    keywords: ['online', 'offline', 'live', 'recorded', 'classes', 'mode', 'location'],
    source: 'Class format',
    text: 'Classes are live and online. They are interactive sessions, not pre-recorded videos.',
  },
  {
    id: 'language',
    keywords: ['language', 'hindi', 'english', 'hinglish', 'medium', 'bhasha'],
    source: 'Language',
    text: `Sessions run in ${academyConfig.languages}.`,
  },
  {
  id: 'program',
  keywords: [
    'program',
    'course',
    'duration',
    'how long',
    'months',
    '3 months',
    'batch',
    'batch size',
    'course duration',
    'program duration',
    'how many months',
    'course details',
  ],
  source: 'Program',
  text: `The Vedarth Academy ${academyConfig.course} program is a ${academyConfig.duration} program with live, project-based classes. Each batch has up to ${academyConfig.batchSize} students, with the next batch starting on ${academyConfig.batchStart}.`,
},
]

function score(message, entry) {
  const text = message.toLowerCase()
  return entry.keywords.reduce((n, k) => (text.includes(k) ? n + k.length : n), 0)
}

/**
 * @param {string} message
 * @returns {Promise<{text: string, sources: string[], verified: boolean}>}
 */
export async function askAssistant(message) {
  await new Promise((r) => setTimeout(r, 650 + Math.random() * 500))

  const clean = (message || '').trim()
  if (!clean) return { text: FALLBACK, sources: [], verified: false }

  if (/^(hi|hii|hello|hey|namaste|namaskar)\b/i.test(clean)) {
    return {
      text: 'Namaste! Ask me about the fee, batch dates, curriculum, projects, the free demo or the internship opportunity.',
      sources: [],
      verified: true,
    }
  }

  const ranked = knowledgeBase
    .map((entry) => ({ entry, s: score(clean, entry) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)

  if (!ranked.length) return { text: FALLBACK, sources: [], verified: false }

  const top = ranked.slice(0, 2)
  return {
    text: top.map((r) => r.entry.text).join('\n\n'),
    sources: top.map((r) => r.entry.source),
    verified: true,
  }
}

export const quickPrompts = [
  'Course fee',
  'Internship details',
  'Curriculum',
  'Free demo',
  'Batch details',
  'Admission',
]

export const assistantGreeting = {
  text: 'Namaste! 👋 I can help you understand the Vedarth Academy program.',
  list: ['Curriculum', 'Fees', 'Batch dates', 'Internship', 'Projects', 'Eligibility', 'Free demo', 'Installments', 'Certificate', 'Admission'],
}
