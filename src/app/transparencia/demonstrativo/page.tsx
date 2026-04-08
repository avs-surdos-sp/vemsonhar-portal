import { Metadata } from 'next'
import Link from 'next/link'
import { BarChart2, ArrowLeft } from 'lucide-react'
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
      {/* Hero */}
      <section
        className="py-16 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
      >
        <div className="relative max-w-4xl mx-auto">
          <Link href="/transparencia"
            className="inline-flex items-center gap-2 text-white/60 text-sm mb-6 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Transparência
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <BarChart2 size={20} className="text-[#00B4D8]" aria-hidden="true" />
            <p className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest">Finanças</p>
          </div>
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
              <h2 className="font-bold text-[#1B3A6B] text-sm uppercase tracking-wide">Receitas</h2>
            </div>
            <ul className="divide-y divide-gray-50 list-none">
              {demo.receitas.map((r) => (
                <li key={r.categoria} className="flex items-center justify-between px-6 py-4">
                  <span className="text-gray-600 text-sm">{r.categoria}</span>
                  <span className="font-bold text-[#1B3A6B] text-sm">{r.valor}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Despesas */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-[#fef2ec]">
              <h2 className="font-bold text-[#F26522] text-sm uppercase tracking-wide">Despesas</h2>
            </div>
            <ul className="divide-y divide-gray-50 list-none">
              {demo.despesas.map((d) => (
                <li key={d.categoria} className="flex items-center justify-between px-6 py-4">
                  <span className="text-gray-600 text-sm">{d.categoria}</span>
                  <span className="font-bold text-[#F26522] text-sm">{d.valor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6 text-center">
          {demo.observacao ?? 'Valores consolidados disponíveis nos relatórios anuais aprovados em Assembleia.'}
        </p>

        <div className="mt-10 text-center">
          <Link href="/transparencia"
            className="inline-flex items-center gap-2 text-[#1B3A6B] font-semibold text-sm hover:underline">
            <ArrowLeft size={14} /> Voltar para Transparência
          </Link>
        </div>
      </div>
    </main>
  )
}
