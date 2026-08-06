import { Metadata } from 'next'
import Link from 'next/link'
import { Layers, Handshake, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projetos | ASESP',
  description:
    'Conheça os projetos, núcleos e parcerias institucionais da ASESP em prol da comunidade surda.',
}

const sections = [
  {
    href: '/projetos/nucleos',
    icon: Layers,
    label: 'Ação social',
    title: 'Núcleos e Projetos',
    desc: 'Idosos, mulheres, jovens, cursos de Libras e eventos culturais — ações para todas as fases da vida surda.',
    color: '#F7931E',
    badge: '2 núcleos',
  },
  {
    href: '/projetos/parceiros',
    icon: Handshake,
    label: 'Institucional',
    title: 'Parcerias Institucionais',
    desc: 'Governo, educação, organizações sociais e empresas que caminham ao lado da ASESP.',
    color: '#14387F',
    badge: 'Ver parceiros',
  },
]

export default function ProjetosHubPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-12 px-4 text-center" style={{ background: 'linear-gradient(135deg, #14387F 0%, #061B45 100%)' }}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
          Projetos
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Conheça as iniciativas e parcerias que fortalecem a ASESP.
        </p>
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
                  className="group flex flex-col h-full bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                    style={{ background: s.color }}
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
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
                  <h2 className="text-xl font-extrabold text-[#14387F] mb-3 tracking-tight group-hover:text-[#1565C0] transition-colors">
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
          className="mt-16 rounded-2xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #F7931E, #C27215)' }}
          aria-labelledby="cta-projetos"
        >
          <h2 id="cta-projetos" className="text-2xl font-extrabold text-white mb-3">
            Apoie as nossas iniciativas
          </h2>
          <p className="text-white/80 mb-7 max-w-md mx-auto text-base leading-relaxed">
            Sua doação financia encontros, cursos e eventos que transformam vidas na comunidade surda.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/doacoes"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#F7931E] text-sm font-bold px-6 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30"
            >
              💙 Fazer uma doação
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
