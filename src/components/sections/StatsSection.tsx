'use client'

import { Users, Handshake, CalendarCheck, Trophy } from 'lucide-react'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'
import SectionHeader from '@/components/shared/SectionHeader'

const stats = [
  { target: 340, label: 'Associados ativos', icon: Users, color: '#1B3A6B', suffix: '+' },
  { target: 120, label: 'Idosos atendidos', icon: Handshake, color: '#F26522', suffix: '+' },
  { target: 85, label: 'Eventos realizados', icon: CalendarCheck, color: '#00B4D8', suffix: '+' },
  { target: 12, label: 'Anos de história', icon: Trophy, color: '#1B3A6B', suffix: '' },
]

export default function StatsSection() {
  const { ref, counters } = useAnimatedCounter(stats.map((s) => s.target))

  return (
    <section className="bg-white py-20 px-4" aria-label="Números da ASESP">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Nossa trajetória"
          title="Impacto em números"
          className="mb-14"
        />

        <dl ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="group relative text-center p-8 rounded-2xl bg-[#F5F7FA] border border-[#eef2f8] hover:-translate-y-2 hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden"
                style={{
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                  style={{ background: stat.color }}
                  aria-hidden="true"
                />
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${stat.color}18` }}
                  aria-hidden="true"
                >
                  <Icon size={22} style={{ color: stat.color }} />
                </div>
                <dt className="text-5xl font-extrabold text-[#1B3A6B] tabular-nums">
                  {counters[i]}{stat.suffix}
                </dt>
                <dd className="text-[#666] text-sm mt-2 font-medium">{stat.label}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
