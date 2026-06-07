'use client'

import { useEffect, useRef } from 'react'

/**
 * useReveal — attaches an IntersectionObserver that adds the
 * `visible` class to the returned ref when it enters the viewport.
 * Pair with the `.reveal` CSS class in globals.css.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return ref
}
