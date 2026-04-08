import { Metadata } from 'next'
import Link from 'next/link'
import { Layers, Handshake, ArrowRight } from 'lucide-react'
import LibrasVideo from '@/components/shared/LibrasVideo'

export const metadata: Metadata = {
  title: 'Projetos | ASESP',
  description:
    'Conheça os projetos, núcleos e parcerias institucionais da ASESP em prol da comunidade surda paulista.',
}

const sections = [
  {
    href: '/projects/nucleos',
    icon: Layers,
    label: 'Ação social',
    title: 'Núcleos e Projetos',
    desc: 'Idosos, mulheres, jovens, cursos de Libras e eventos culturais — ações para todas as fases da vida surda.',
    color: '#F26522',
    badge: '6 núcleos',
  },
  {
    href: '/partners',
    icon: Handshake,
    label: 'Institucional',
    title: 'Parcerias Institucionais',
    desc: 'Governo, educação, organizações sociais e empresas que caminham ao lado da ASESP.',
    color: '#1B3A6B',
    badge: 'Ver parceiros',
  },
]

export default function ProjetosHubPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #F26522, transparent)' }}
          />
          <div
            className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #00B4D8, transparent)' }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <Layers size={15} className="text-[#F26522]" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium">O que fazemos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Projetos
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Conheça as iniciativas e parcerias da ASESP que fortalecem a comunidade surda paulista.
          </p>
          <LibrasVideo title="Projetos da ASESP em Libras" />
        </div>
      </section>

      {/* Cards de navegação */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ul className="grid sm:grid-cols-2 gap-6 list-none">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                    style={{ background: s.color }}
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${s.color}15` }}
                    >
                      <Icon size={22} style={{ color: s.color }} />
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: `${s.color}12`, color: s.color }}
                    >
                      {s.badge}
                    </span>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: s.color }}>
                    {s.label}
                  </p>
                  <h2 className="text-xl font-extrabold text-[#1B3A6B] mb-3 tracking-tight group-hover:text-[#1565C0] transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {s.desc}
                  </p>

                  <div
                    className="flex items-center gap-1.5 mt-5 font-semibold text-sm group-hover:gap-2.5 transition-all duration-200"
                    style={{ color: s.color }}
                  >
                    Acessar
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <section
          className="mt-16 rounded-3xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #F26522, #d4501a)' }}
          aria-labelledby="cta-projetos"
        >
          <h2 id="cta-projetos" className="text-2xl font-extrabold text-white mb-3">
            Apoie as nossas iniciativas
          </h2>
          <p className="text-white/80 mb-7 max-w-md mx-auto text-base leading-relaxed">
            Sua doação financia encontros, cursos e eventos que transformam vidas na comunidade surda paulista.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/doacoes"
              className="bg-white text-[#F26522] font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all"
            >
              💙 Fazer uma doação
            </Link>
            <Link
              href="/como-se-associar"
              className="bg-white/15 border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/25 transition-colors"
            >
              🤟 Seja Associado
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
