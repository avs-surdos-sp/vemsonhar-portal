import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Download, ArrowLeft, ExternalLink } from 'lucide-react'
import { sanityClient } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Relatórios Anuais | Transparência | ASESP',
  description: 'Relatórios anuais da ASESP — atividades realizadas, impacto social e balanço de associados.',
}

export const revalidate = 60

interface Relatorio {
  _id: string
  titulo: string
  ano: string
  descricao?: string
  badge?: string
  arquivo?: { url: string }
}

// Fallback estático — usado enquanto o CMS não tem dados cadastrados
const fallback: Relatorio[] = [
  { _id: 'f-2024', ano: '2024', titulo: 'Relatório Anual 2024', descricao: 'Atividades realizadas, impacto social, balanço de associados e eventos do exercício.', badge: 'Mais recente' },
  { _id: 'f-2023', ano: '2023', titulo: 'Relatório Anual 2023', descricao: 'Consolidação dos projetos, crescimento dos núcleos e parcerias institucionais.' },
  { _id: 'f-2022', ano: '2022', titulo: 'Relatório Anual 2022', descricao: 'Retomada das atividades presenciais pós-pandemia e expansão da base de associados.' },
]

const QUERY = `*[_type == "relatorio" && ativo == true] | order(ano desc) {
  _id, titulo, ano, descricao, badge,
  "arquivo": arquivo.asset->{ url }
}`

export default async function RelatoriosPage() {
  const sanityData: Relatorio[] = await sanityClient.fetch(QUERY)
  const relatorios = sanityData.length > 0 ? sanityData : fallback

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
            <FileText size={20} className="text-[#00B4D8]" aria-hidden="true" />
            <p className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest">Documentos</p>
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">Relatórios Anuais</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Documentos com prestação de contas detalhada das atividades, impacto social e uso dos recursos em cada exercício.
          </p>
        </div>
      </section>

      {/* Lista */}
      <div className="max-w-4xl mx-auto px-4 py-14">
        <ul className="space-y-4 list-none">
          {relatorios.map((r) => (
            <li key={r._id}
              className="flex items-center justify-between gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-white text-sm"
                  style={{ background: '#1B3A6B' }}>
                  {r.ano}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="font-bold text-[#1B3A6B] text-base">{r.titulo}</h2>
                    {r.badge && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white bg-[#00B4D8]">
                        {r.badge}
                      </span>
                    )}
                  </div>
                  {r.descricao && <p className="text-gray-600 text-sm">{r.descricao}</p>}
                </div>
              </div>

              {r.arquivo?.url ? (
                <a href={r.arquivo.url} target="_blank" rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-2 text-sm font-bold text-white bg-[#1B3A6B] rounded-full px-4 py-2 hover:bg-[#0d2347] transition-all duration-200"
                  aria-label={`Baixar ${r.titulo}`}>
                  <Download size={14} aria-hidden="true" /> Baixar PDF
                </a>
              ) : (
                <span className="shrink-0 flex items-center gap-2 text-sm font-medium text-gray-400 border border-gray-200 rounded-full px-4 py-2">
                  <ExternalLink size={14} aria-hidden="true" /> Em breve
                </span>
              )}
            </li>
          ))}
        </ul>

        <p className="text-xs text-gray-400 mt-6 text-center">
          * PDFs disponibilizados após aprovação em Assembleia Geral.
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
