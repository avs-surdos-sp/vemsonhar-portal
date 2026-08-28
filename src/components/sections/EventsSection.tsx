import { Calendar, Clock } from 'lucide-react'
import { sanityClient } from '@/lib/sanity'
import EventsList from './EventsList'
import { type Evento } from './EventCard'

const QUERY = `
  *[_type == "evento" && ativo == true && data >= $today] | order(data asc) [0...10] {
    _id, titulo, data, dataFim, horaInicio, local, descricao
  }
`

export default async function EventsSection() {
  const today = new Date().toISOString().split('T')[0]

  const eventos = await sanityClient
    .fetch<Evento[]>(QUERY, { today }, { next: { revalidate: 60 } })
    .catch(() => [] as Evento[])

  return (
    <section className="py-20 px-4 bg-[#F5F7FA]" aria-labelledby="eventos-titulo">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10">
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
            Próximas atividades
          </h2>
        </div>

        {/* Timeline */}
        {eventos.length > 0 ? (
          <EventsList eventos={eventos} />
        ) : (
          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white px-6 py-8 shadow-sm">
            <Clock size={22} className="text-[#F7931E] shrink-0" aria-hidden="true" />
            <p className="text-gray-600 text-base">Em breve divulgaremos as próximas atividades da ASESP.</p>
          </div>
        )}

      </div>
    </section>
  )
}
