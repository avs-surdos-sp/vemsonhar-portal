import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, BarChart2, ClipboardList, CheckSquare, ArrowRight, ShieldCheck } from 'lucide-react'
import LibrasVideo from '@/components/shared/LibrasVideo'

export const metadata: Metadata = {
  title: 'Transparência | ASESP',
  description:
    'Prestação de contas da ASESP — relatórios anuais, demonstrativo financeiro, editais e projetos aprovados.',
}

const sections = [
  {
    href: '/transparency/relatorios',
    icon: FileText,
    label: 'Documentos',
    title: 'Relatórios Anuais',
    desc: 'Atividades realizadas, impacto social e balanço de associados de cada exercício anual.',
    color: '#1B3A6B',
    count: '3 relatórios',
  },
  {
    href: '/transparency/demonstrativo',
    icon: BarChart2,
    label: 'Finanças',
    title: 'Demonstrativo Financeiro',
    desc: 'Categorias de receitas e despesas, auditadas pelo Conselho Fiscal da ASESP.',
    color: '#1565C0',
    count: 'Simplificado',
  },
  {
    href: '/transparency/editais',
    icon: ClipboardList,
    label: 'Convênios',
    title: 'Editais e Parcerias',
    desc: 'Contratos vigentes e concluídos com secretarias, fundos culturais e institutos.',
    color: '#00B4D8',
    count: '3 editais',
  },
  {
    href: '/transparency/projetos',
    icon: CheckSquare,
    label: 'Aprovados',
    title: 'Projetos Aprovados',
    desc: 'Projetos com financiamento aprovado por órgãos públicos e privados.',
    color: '#F26522',
    count: '3 projetos',
  },
]

export default function TransparenciaPage() {
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
            style={{ background: 'radial-gradient(circle, #00B4D8, transparent)' }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <ShieldCheck size={15} className="text-[#00B4D8]" />
            <span className="text-white/80 text-sm font-medium">Prestação de contas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Transparência
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A ASESP acredita na transparência como pilar da confiança. Acesse relatórios, balanço financeiro, editais e projetos aprovados.
          </p>
          <LibrasVideo title="Transparência da ASESP em Libras" />
        </div>
      </section>

      {/* Cards de navegação */}
      <div className="max-w-5xl mx-auto px-4 py-16">
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
                      {s.count}
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

                  <div className="flex items-center gap-1.5 mt-5 font-semibold text-sm group-hover:gap-2.5 transition-all duration-200" style={{ color: s.color }}>
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
          style={{ background: 'linear-gradient(135deg, #1B3A6B, #1565C0)' }}
          aria-labelledby="cta-transparencia"
        >
          <h2 id="cta-transparencia" className="text-2xl font-extrabold text-white mb-3">
            Dúvidas sobre as contas?
          </h2>
          <p className="text-white/65 mb-7 max-w-md mx-auto text-base leading-relaxed">
            Entre em contato com a diretoria. A ASESP está comprometida com a máxima transparência para seus associados e a sociedade.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-[#F26522] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d4501a] transition-colors hover:shadow-lg"
            >
              Falar com a diretoria
            </Link>
            <Link
              href="/como-se-associar"
              className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-colors"
            >
              🤟 Seja Associado
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
