'use client'

import { MapPin, Users, CalendarCheck2, Building2 } from 'lucide-react'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'
import SectionHeader from '@/components/shared/SectionHeader'

const numeros = [
  { valor: 30, suffix: '+', label: 'Anos de atuação', icon: CalendarCheck2, color: '#F26522' },
  { valor: 500, suffix: '+', label: 'Associados ativos', icon: Users, color: '#00B4D8' },
  { valor: 100, suffix: '+', label: 'Eventos realizados', icon: Building2, color: '#F26522' },
  { valor: 15, suffix: '+', label: 'Municípios atendidos', icon: MapPin, color: '#00B4D8' },
]

export default function ImpactoSection() {
  const { ref, counters } = useAnimatedCounter(
    numeros.map((n) => n.valor),
    { duration: 1600, steps: 50 }
  )

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
        <SectionHeader
          label="Em números"
          title="Nosso Impacto"
          headingId="impacto-titulo"
          labelColor="#00B4D8"
          titleColor="white"
          className="mb-14"
        />

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
