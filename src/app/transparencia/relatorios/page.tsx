import { Metadata } from 'next'
import { Download, ExternalLink } from 'lucide-react'
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
      {/* Page Header */}
      <section className="py-12 px-4" style={{ background: 'linear-gradient(135deg, #14387F 0%, #061B45 100%)' }}>
        <div className="max-w-4xl mx-auto">
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
              <div className="flex items-center gap-5 min-w-0">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-white text-sm"
                  style={{ background: '#14387F' }}>
                  {r.ano}
                </div>
                <div className="min-w-0">
                  <h2 className="font-bold text-[#14387F] text-base">{r.titulo}</h2>
                  {r.descricao && <p className="text-gray-600 text-sm mt-1">{r.descricao}</p>}
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-end gap-2">
                {r.arquivo?.url ? (
                  <a href={r.arquivo.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-white bg-[#14387F] rounded-full px-4 py-2 hover:bg-[#061B45] transition-all duration-200"
                    aria-label={`Baixar ${r.titulo}`}>
                    <Download size={14} aria-hidden="true" /> Baixar PDF
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm font-medium text-gray-400 border border-gray-200 rounded-full px-4 py-2">
                    <ExternalLink size={14} aria-hidden="true" /> Em breve
                  </span>
                )}
                {r.badge && (
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white bg-[#0069B4]">
                    {r.badge}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <p className="text-xs text-gray-400 mt-6 text-center">
          * PDFs disponibilizados após aprovação em Assembleia Geral.
        </p>
      </div>
    </main>
  )
}
