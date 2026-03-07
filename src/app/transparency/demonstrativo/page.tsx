import { Metadata } from 'next'
import Link from 'next/link'
import { BarChart2, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Demonstrativo Financeiro | Transparência | ASESP',
  description: 'Demonstrativo financeiro simplificado da ASESP — receitas e despesas auditadas pelo Conselho Fiscal.',
}

const financeiro = [
  { categoria: 'Mensalidades de associados',   valor: 'R$ —', tipo: 'Receita' },
  { categoria: 'Doações e contribuições',       valor: 'R$ —', tipo: 'Receita' },
  { categoria: 'Projetos e editais aprovados',  valor: 'R$ —', tipo: 'Receita' },
  { categoria: 'Patrocínios institucionais',    valor: 'R$ —', tipo: 'Receita' },
  { categoria: 'Núcleos e projetos sociais',    valor: 'R$ —', tipo: 'Despesa' },
  { categoria: 'Eventos e atividades culturais',valor: 'R$ —', tipo: 'Despesa' },
  { categoria: 'Custos administrativos',        valor: 'R$ —', tipo: 'Despesa' },
  { categoria: 'Cursos e formação',             valor: 'R$ —', tipo: 'Despesa' },
]

export default function DemonstrativoPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
      >
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/transparency"
            className="inline-flex items-center gap-2 text-white/60 text-sm mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Transparência
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <BarChart2 size={20} className="text-[#00B4D8]" aria-hidden="true" />
            <p className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest">Finanças</p>
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
            Demonstrativo Financeiro
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
              {financeiro.filter(f => f.tipo === 'Receita').map((f) => (
                <li key={f.categoria} className="flex items-center justify-between px-6 py-4">
                  <span className="text-gray-600 text-sm">{f.categoria}</span>
                  <span className="font-bold text-[#1B3A6B] text-sm">{f.valor}</span>
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
              {financeiro.filter(f => f.tipo === 'Despesa').map((f) => (
                <li key={f.categoria} className="flex items-center justify-between px-6 py-4">
                  <span className="text-gray-600 text-sm">{f.categoria}</span>
                  <span className="font-bold text-[#F26522] text-sm">{f.valor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6 text-center">
          Valores consolidados disponíveis nos relatórios anuais aprovados em Assembleia.
        </p>

        <div className="mt-10 text-center">
          <Link
            href="/transparency"
            className="inline-flex items-center gap-2 text-[#1B3A6B] font-semibold text-sm hover:underline"
          >
            <ArrowLeft size={14} />
            Voltar para Transparência
          </Link>
        </div>
      </div>
    </main>
  )
}
