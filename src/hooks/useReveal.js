import { useEffect } from 'react'

/** Adds .is-visible to every .reveal element once it enters the viewport. */
export function useRevealObserver() {
  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const nodes = () => Array.from(document.querySelectorAll('.reveal:not(.is-visible)'))

    if (reduced) {
      nodes().forEach((n) => n.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    nodes().forEach((n) => io.observe(n))

    const mo = new MutationObserver(() => nodes().forEach((n) => io.observe(n)))
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
