import { Metadata } from 'next'
import { sanityClient } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Demonstrativo Financeiro | Transparência | ASESP',
  description: 'Demonstrativo financeiro simplificado da ASESP — receitas e despesas auditadas pelo Conselho Fiscal.',
}

export const revalidate = 60

interface LinhaFinanceira { categoria: string; valor: string }
interface Demonstrativo {
  _id: string
  ano: string
  receitas: LinhaFinanceira[]
  despesas: LinhaFinanceira[]
  observacao?: string
}

// Fallback estático com categorias, sem valores (preenchidos no CMS)
const fallback: Demonstrativo = {
  _id: 'fallback',
  ano: new Date().getFullYear().toString(),
  receitas: [
    { categoria: 'Mensalidades de associados',   valor: 'R$ —' },
    { categoria: 'Doações e contribuições',       valor: 'R$ —' },
    { categoria: 'Projetos e editais aprovados',  valor: 'R$ —' },
    { categoria: 'Patrocínios institucionais',    valor: 'R$ —' },
  ],
  despesas: [
    { categoria: 'Núcleos e projetos sociais',     valor: 'R$ —' },
    { categoria: 'Eventos e atividades culturais', valor: 'R$ —' },
    { categoria: 'Custos administrativos',         valor: 'R$ —' },
    { categoria: 'Cursos e formação',              valor: 'R$ —' },
  ],
}

const QUERY = `*[_type == "demonstrativo" && ativo == true] | order(ano desc)[0] {
  _id, ano, receitas, despesas, observacao
}`

export default async function DemonstrativoPage() {
  const sanityData: Demonstrativo | null = await sanityClient.fetch(QUERY)
  const demo = sanityData ?? fallback

  return (
    <main>
      {/* Page Header */}
      <section className="py-12 px-4" style={{ background: 'linear-gradient(135deg, #14387F 0%, #061B45 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
            Demonstrativo Financeiro
            <span className="ml-3 text-2xl font-bold text-white/50">{demo.ano}</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Categorias de receitas e despesas da ASESP, auditadas pelo Conselho Fiscal e aprovadas em Assembleia Geral.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 py-14">
        <p className="text-gray-600 text-base mb-8 max-w-2xl">
          Os valores detalhados constam nos relatórios anuais. Abaixo apresentamos as categorias consolidadas de entradas e saídas do exercício.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Receitas */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-[#eaeff7]">
              <h2 className="font-bold text-[#14387F] text-sm uppercase tracking-wide">Receitas</h2>
            </div>
            <ul className="divide-y divide-gray-50 list-none">
              {demo.receitas.map((r) => (
                <li key={r.categoria} className="flex items-center justify-between px-6 py-4">
                  <span className="text-gray-600 text-sm">{r.categoria}</span>
                  <span className="font-bold text-[#14387F] text-sm">{r.valor}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Despesas */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-[#fef2ec]">
              <h2 className="font-bold text-[#F7931E] text-sm uppercase tracking-wide">Despesas</h2>
            </div>
            <ul className="divide-y divide-gray-50 list-none">
              {demo.despesas.map((d) => (
                <li key={d.categoria} className="flex items-center justify-between px-6 py-4">
                  <span className="text-gray-600 text-sm">{d.categoria}</span>
                  <span className="font-bold text-[#F7931E] text-sm">{d.valor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6 text-center">
          {demo.observacao ?? 'Valores consolidados disponíveis nos relatórios anuais aprovados em Assembleia.'}
        </p>
      </div>
    </main>
  )
}
