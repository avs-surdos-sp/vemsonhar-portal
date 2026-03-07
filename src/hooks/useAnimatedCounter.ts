'use client'

import { useState, useEffect, useRef } from 'react'

interface Options {
  duration?: number
  steps?: number
  threshold?: number
}

/**
 * Animates numeric counters when the referenced element enters the viewport.
 * @param targets - Array of target values (one per counter)
 * @param options - duration (ms), steps (animation frames), threshold (0-1)
 * @returns ref to attach to the container element, and current counter values
 */
export function useAnimatedCounter(targets: number[], options: Options = {}) {
  const ref = useRef<HTMLDListElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState(targets.map(() => 0))
  const { duration = 1800, steps = 60, threshold = 0.3 } = options

  // Capture targets on first render — they are always static
  const targetsRef = useRef(targets)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  useEffect(() => {
    if (!isVisible) return
    const t = targetsRef.current
    const intervalMs = duration / steps
    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters(t.map((target) => Math.min(Math.round((target * step) / steps), target)))
      if (step >= steps) clearInterval(timer)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [isVisible, duration, steps])

  return { ref, counters }
}
