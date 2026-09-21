/**
 * Frontend service abstraction for applications.
 * Currently mocked. Replace the body of each function with a real API call
 * (e.g. POST /api/applications) without touching any component.
 */
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

export const APPLICATION_STAGES = [
  'New', 'Contacted', 'Demo Scheduled', 'Demo Attended', 'Interested', 'Enrolled',
]

const delay = (ms) => new Promise((r) => setTimeout(r, ms))

export async function submitApplication(payload) {
  try {
    const docRef = await addDoc(collection(db, 'applications'), {
      ...payload,
      status: 'New',
      submittedAt: serverTimestamp(),
    })


    return {
      ok: true,
      stage: APPLICATION_STAGES[0],
      receivedAt: new Date().toISOString(),
    }
  } catch (error) {
    console.error('Application submission failed:', error)

    throw new Error('Request failed')
  }
}

export async function requestDemoSeat(payload) {
  await delay(900)
  return { ok: true, stage: 'Demo Scheduled', payload }
}
