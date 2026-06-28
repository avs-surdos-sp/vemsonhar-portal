import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react'
import { sanityClient } from '@/lib/sanity'

// ─── Types ────────────────────────────────────────────────────────────────────

type Evento = {
  _id?: string
  titulo: string
  data: string        // YYYY-MM-DD
  horaInicio?: string
  local: string
  descricao?: string
}

const MESES = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

function parseDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return {
    dia: String(d).padStart(2, '0'),
    mes: MESES[(m ?? 1) - 1],
    ano: y,
  }
}

const QUERY = `
  *[_type == "evento" && ativo == true && data >= $today] | order(data asc) [0...4] {
    _id, titulo, data, horaInicio, local, descricao
  }
`

// ─── Component ────────────────────────────────────────────────────────────────

export default async function EventsSection() {
  const today = new Date().toISOString().split('T')[0]

  const eventos = await sanityClient
    .fetch<Evento[]>(QUERY, { today }, { next: { revalidate: 60 } })
    .catch(() => [] as Evento[])

  return (
    <section className="py-20 px-4 bg-[#F5F7FA]" aria-labelledby="eventos-titulo">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Calendar size={16} className="text-[#F7931E]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#F7931E]">
                Agenda
              </span>
            </div>
            <h2
              id="eventos-titulo"
              className="text-2xl sm:text-3xl font-extrabold text-[#14387F] tracking-tight"
            >
              Próximos eventos
            </h2>
          </div>
        </div>

        {/* Lista de eventos */}
        {eventos.length > 0 ? (
          <ul className="grid sm:grid-cols-2 gap-4 list-none">
            {eventos.map((e) => {
              const d = parseDate(e.data)
              return (
                <li
                  key={e._id || e.titulo}
                  className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="flex items-stretch">
                    {/* Bloco de data */}
                    <div
                      className="shrink-0 w-24 sm:w-28 flex flex-col items-center justify-center text-center text-white px-3 py-5"
                      style={{ background: 'linear-gradient(135deg, #14387F 0%, #061B45 100%)' }}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#F7931E] mb-1">
                        {d.mes}
                      </p>
                      <p className="text-4xl font-extrabold leading-none">
                        {d.dia}
                      </p>
                      <p className="text-[11px] text-white/60 mt-1">{d.ano}</p>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 p-5 min-w-0">
                      <h3 className="font-extrabold text-[#14387F] text-base leading-snug mb-2 group-hover:text-[#F7931E] transition-colors line-clamp-2">
                        {e.titulo}
                      </h3>
                      <div className="space-y-1.5 text-xs text-gray-600">
                        {e.horaInicio && (
                          <div className="flex items-center gap-1.5">
                            <Clock size={13} className="text-[#0069B4] shrink-0" aria-hidden="true" />
                            <span>{e.horaInicio}</span>
                          </div>
                        )}
                        <div className="flex items-start gap-1.5">
                          <MapPin size={13} className="text-[#0069B4] shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="leading-snug line-clamp-2">{e.local}</span>
                        </div>
                      </div>
                      {e.descricao && (
                        <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-2">
                          {e.descricao}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        ) : (
          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white px-6 py-8 shadow-sm">
            <Clock size={22} className="text-[#F7931E] shrink-0" aria-hidden="true" />
            <p className="text-gray-600 text-base">Em breve divulgaremos os próximos eventos da ASESP.</p>
          </div>
        )}

      </div>
    </section>
  )
}
