import { Metadata } from 'next'
import Link from 'next/link'
import { ClipboardList, ArrowLeft, ExternalLink, Calendar, CheckCircle2, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Editais e Parcerias | Transparência | ASESP',
  description: 'Contratos e convênios vigentes e concluídos da ASESP com secretarias, fundos culturais e institutos.',
}

type Status = 'vigente' | 'concluido' | 'em-analise'

type Edital = {
  titulo: string
  orgao: string
  objeto: string
  periodo: string
  status: Status
  link?: string
}

const editais: Edital[] = [
  {
    titulo: 'Fomento à Cultura Surda — Edital ProAC 2023',
    orgao: 'Secretaria de Cultura e Economia Criativa do Estado de SP',
    objeto: 'Produção e circulação de espetáculos teatrais em Libras para públicos surdos e ouvintes.',
    periodo: '2023 – 2024',
    status: 'concluido',
  },
  {
    titulo: 'Convênio de Acessibilidade Cultural — SMC São Paulo',
    orgao: 'Secretaria Municipal de Cultura de São Paulo',
    objeto: 'Oferta de atividades culturais acessíveis em Libras em equipamentos públicos da cidade.',
    periodo: '2024 – 2025',
    status: 'vigente',
  },
  {
    titulo: 'Parceria Institucional — Instituto Reconstruir',
    orgao: 'Instituto Reconstruir',
    objeto: 'Desenvolvimento de cursos profissionalizantes e de formação para a comunidade surda.',
    periodo: '2025 – 2026',
    status: 'vigente',
  },
]

const statusConfig: Record<Status, { label: string; bg: string; text: string; icon: React.ElementType }> = {
  vigente:     { label: 'Vigente',     bg: '#e6f4ea', text: '#1e7e34', icon: CheckCircle2 },
  concluido:   { label: 'Concluído',   bg: '#eaeff7', text: '#1B3A6B', icon: CheckCircle2 },
  'em-analise':{ label: 'Em análise',  bg: '#fff8e1', text: '#b45309', icon: Clock },
}

export default function EditaisPage() {
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
            <ClipboardList size={20} className="text-[#00B4D8]" aria-hidden="true" />
            <p className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest">Convênios</p>
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
            Editais e Parcerias
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Contratos vigentes e concluídos firmados pela ASESP com secretarias de governo, fundos culturais e institutos parceiros.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 py-14">
        <p className="text-gray-600 text-base mb-8 max-w-2xl">
          A ASESP atua em parceria com órgãos públicos e privados para ampliar o acesso da comunidade surda à cultura, educação e oportunidades. Abaixo estão os editais e convênios formalizados.
        </p>

        <div className="flex flex-col gap-5">
          {editais.map((edital) => {
            const cfg = statusConfig[edital.status]
            const StatusIcon = cfg.icon
            return (
              <article
                key={edital.titulo}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
              >
                {/* Top accent */}
                <div className="h-1" style={{ background: '#00B4D8' }} aria-hidden="true" />

                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <h2 className="text-lg font-extrabold text-[#1B3A6B] leading-snug flex-1">
                      {edital.titulo}
                    </h2>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full shrink-0"
                      style={{ background: cfg.bg, color: cfg.text }}
                    >
                      <StatusIcon size={12} aria-hidden="true" />
                      {cfg.label}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-[#00B4D8] mb-2">{edital.orgao}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{edital.objeto}</p>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Calendar size={13} aria-hidden="true" />
                      <span>{edital.periodo}</span>
                    </div>
                    {edital.link && (
                      <a
                        href={edital.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#00B4D8] text-sm font-semibold hover:underline"
                      >
                        Ver documento
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <p className="text-xs text-gray-400 mt-8 text-center">
          Para mais informações sobre parcerias, entre em contato com a diretoria da ASESP.
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
