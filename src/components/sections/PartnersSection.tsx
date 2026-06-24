import Link from 'next/link'
import { ArrowRight, Handshake } from 'lucide-react'

// ─── Dados — substitua com os parceiros reais e logos ────────────────────────

const parceiros = [
  { nome: 'Prefeitura de São Paulo',     sigla: 'PMSP',  cor: '#14387F' },
  { nome: 'Secretaria de Saúde SP',      sigla: 'SESSP', cor: '#0069B4' },
  { nome: 'Feneis',                      sigla: 'FENEIS',cor: '#F7931E' },
  { nome: 'Instituto Mão a Mão',         sigla: 'IMM',   cor: '#14387F' },
  { nome: 'Ministério da Educação',      sigla: 'MEC',   cor: '#0069B4' },
  { nome: 'Associação dos Surdos de SP', sigla: 'ASSP',  cor: '#F7931E' },
]

// ─────────────────────────────────────────────────────────────────────────────

export default function PartnersSection() {
  return (
    <section className="py-20 px-4 bg-[#F5F7FA]" aria-labelledby="parceiros-titulo">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Handshake size={16} className="text-[#F7931E]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#F7931E]">
                Parcerias
              </span>
            </div>
            <h2
              id="parceiros-titulo"
              className="text-2xl sm:text-3xl font-extrabold text-[#14387F] tracking-tight"
            >
              Parceiros Institucionais
            </h2>
          </div>
          <Link
            href="/projetos/parceiros"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#14387F] hover:text-[#F7931E] transition-colors group shrink-0"
          >
            Ver todos
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid de logos */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 list-none">
          {parceiros.map((p) => (
            <li key={p.sigla}>
              <div className="h-24 rounded-2xl flex flex-col items-center justify-center gap-1.5 px-3 hover:-translate-y-1 transition-all duration-300">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-xs text-white"
                  style={{ background: p.cor }}
                  aria-hidden="true"
                >
                  {p.sigla.slice(0, 3)}
                </div>
                <p className="text-[11px] font-semibold text-gray-500 text-center leading-tight line-clamp-2">
                  {p.nome}
                </p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
