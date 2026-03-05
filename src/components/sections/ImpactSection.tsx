'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Users, CalendarCheck2, Building2 } from 'lucide-react'

const numeros = [
  { valor: 30, suffix: '+', label: 'Anos de atuação', icon: CalendarCheck2, color: '#F26522' },
  { valor: 500, suffix: '+', label: 'Associados ativos', icon: Users, color: '#00B4D8' },
  { valor: 100, suffix: '+', label: 'Eventos realizados', icon: Building2, color: '#F26522' },
  { valor: 15, suffix: '+', label: 'Municípios atendidos', icon: MapPin, color: '#00B4D8' },
]

export default function ImpactoSection() {
  const ref = useRef<HTMLDListElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState(numeros.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const duration = 1600
    const steps = 50
    const interval = duration / steps
    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters(numeros.map((n) => Math.min(Math.round((n.valor * step) / steps), n.valor)))
      if (step >= steps) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
      aria-labelledby="impacto-titulo"
    >
      {/* Decorator */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }}
        />
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #00B4D8, transparent)' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <p className="section-label text-[#00B4D8] mb-3">Em números</p>
        <h2 id="impacto-titulo" className="text-3xl font-extrabold text-white mt-2 mb-14 tracking-tight">
          Nosso Impacto
        </h2>

        <dl
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10"
        >
          {numeros.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="px-6 py-4 flex flex-col items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.color}25` }}
                >
                  <Icon size={18} style={{ color: item.color }} />
                </div>
                <dt className="text-4xl md:text-5xl font-extrabold tabular-nums" style={{ color: item.color }}>
                  {counters[i]}{item.suffix}
                </dt>
                <dd className="text-xs text-white/50 uppercase tracking-widest font-semibold">{item.label}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
