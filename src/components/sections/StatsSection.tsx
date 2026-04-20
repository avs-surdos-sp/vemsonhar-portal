import { Mic2, Accessibility, GraduationCap, HeartHandshake } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const pilares = [
  {
    icon: Mic2,
    color: '#1B3A6B',
    title: 'Representação',
    description: 'Voz ativa da comunidade surda junto a órgãos públicos e privados no estado de São Paulo.',
  },
  {
    icon: Accessibility,
    color: '#F26522',
    title: 'Inclusão',
    description: 'Promovendo acessibilidade em espaços educacionais, culturais e profissionais.',
  },
  {
    icon: GraduationCap,
    color: '#00B4D8',
    title: 'Educação',
    description: 'Projetos educativos e culturais em Libras para surdos de todas as idades.',
  },
  {
    icon: HeartHandshake,
    color: '#1B3A6B',
    title: 'Saúde & Bem-estar',
    description: 'Apoio, orientação e acompanhamento para surdos e suas famílias.',
  },
]

export default function StatsSection() {
  return (
    <section className="bg-white py-20 px-4" aria-label="Pilares da ASESP">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Nossa trajetória"
          title="Como atuamos"
          className="mb-14"
        />

        <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pilares.map((pilar, i) => {
            const Icon = pilar.icon
            return (
              <div
                key={pilar.title}
                className="group relative text-center p-8 rounded-2xl bg-[#F5F7FA] border border-[#eef2f8] hover:-translate-y-2 hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                  style={{ background: pilar.color }}
                  aria-hidden="true"
                />
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${pilar.color}18` }}
                  aria-hidden="true"
                >
                  <Icon size={22} style={{ color: pilar.color }} />
                </div>
                <dt className="text-xl font-extrabold text-[#1B3A6B] mb-2">{pilar.title}</dt>
                <dd className="text-[#666] text-sm leading-relaxed">{pilar.description}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
