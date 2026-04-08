import { Metadata } from 'next'
import Link from 'next/link'
import { CheckSquare, ArrowLeft, ExternalLink, Building2, Tag } from 'lucide-react'
import { sanityClient } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Projetos Aprovados | Transparência | ASESP',
  description: 'Projetos da ASESP com financiamento aprovado por órgãos públicos e privados.',
}

export const revalidate = 60

interface ProjetoAprovado {
  _id: string
  titulo: string
  financiador: string
  categoria: string
  descricao: string
  ano: string
  link?: string
}

// Fallback estático
const fallback: ProjetoAprovado[] = [
  {
    _id: 'f-1',
    titulo: 'Teatro em Libras: Narrativas Surdas',
    financiador: 'Fundo Municipal de Cultura de São Paulo',
    categoria: 'Cultura',
    descricao: 'Produção de três espetáculos teatrais protagonizados por atores surdos, com circulação em equipamentos culturais da cidade de São Paulo e região metropolitana.',
    ano: '2023',
  },
  {
    _id: 'f-2',
    titulo: 'Formação Profissional para a Comunidade Surda',
    financiador: 'Secretaria Estadual de Desenvolvimento Social',
    categoria: 'Educação',
    descricao: 'Oferta de cursos profissionalizantes em tecnologia da informação, design gráfico e artesanato para jovens e adultos surdos residentes na Grande São Paulo.',
    ano: '2024',
  },
  {
    _id: 'f-3',
    titulo: 'AVS Inclui: Acessibilidade em Eventos Culturais',
    financiador: 'ProAC Expresso — Secretaria de Cultura e Economia Criativa de SP',
    categoria: 'Acessibilidade',
    descricao: 'Produção e distribuição de conteúdo em Libras sobre eventos culturais e artísticos do estado, promovendo a inclusão e o acesso à cultura para a comunidade surda.',
    ano: '2024',
  },
]

const categoriaColors: Record<string, { bg: string; text: string }> = {
  Cultura:        { bg: '#eef2ff', text: '#4338ca' },
  Educação:       { bg: '#e6f4ea', text: '#1e7e34' },
  Acessibilidade: { bg: '#fff3e6', text: '#b45309' },
  Saúde:          { bg: '#fce7f3', text: '#be185d' },
  Esporte:        { bg: '#ecfdf5', text: '#065f46' },
}

const QUERY = `*[_type == "projetoAprovado" && ativo == true] | order(ano desc) {
  _id, titulo, financiador, categoria, descricao, ano, link
}`

export default async function ProjetosAprovadosPage() {
  const sanityData: ProjetoAprovado[] = await sanityClient.fetch(QUERY)
  const projetos = sanityData.length > 0 ? sanityData : fallback

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
            <CheckSquare size={20} className="text-[#F26522]" aria-hidden="true" />
            <p className="text-[#F26522] text-xs font-bold uppercase tracking-widest">Aprovados</p>
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">Projetos Aprovados</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Projetos da ASESP com financiamento aprovado por órgãos públicos e privados, com impacto direto na comunidade surda.
          </p>
        </div>
      </section>

      {/* Lista */}
      <div className="max-w-4xl mx-auto px-4 py-14">
        <p className="text-gray-600 text-base mb-8 max-w-2xl">
          A ASESP submete projetos a editais públicos e privados para ampliar seu impacto social. Veja abaixo os projetos que receberam financiamento aprovado.
        </p>

        <div className="flex flex-col gap-6">
          {projetos.map((projeto, i) => {
            const catColor = categoriaColors[projeto.categoria] ?? { bg: '#f3f4f6', text: '#374151' }
            return (
              <article key={projeto._id}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="h-1" style={{ background: '#F26522' }} aria-hidden="true" />
                <div className="p-6">
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold text-white shrink-0 mt-0.5"
                      style={{ background: 'linear-gradient(135deg, #F26522, #e0541d)' }}
                      aria-hidden="true">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full"
                          style={{ background: catColor.bg, color: catColor.text }}>
                          <Tag size={10} aria-hidden="true" /> {projeto.categoria}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">{projeto.ano}</span>
                      </div>
                      <h2 className="text-lg font-extrabold text-[#1B3A6B] leading-snug">{projeto.titulo}</h2>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 text-sm text-gray-500 mb-3 pl-11">
                    <Building2 size={14} className="text-[#F26522] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-medium">{projeto.financiador}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed pl-11 mb-4">{projeto.descricao}</p>

                  {projeto.link && (
                    <div className="pl-11">
                      <a href={projeto.link} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#F26522] text-sm font-semibold hover:underline">
                        Ver projeto completo <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        <p className="text-xs text-gray-400 mt-8 text-center">
          Para mais informações, consulte os relatórios anuais ou entre em contato com a diretoria.
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
