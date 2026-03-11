'use client'

import { useState } from 'react'
import { MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import AddToCalendarButton from './AddToCalendarButton'

export type EventoItem = {
  titulo: string
  data: string        // YYYY-MM-DD
  horaInicio?: string
  local: string
  descricao?: string
}

const MESES = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

function parseEventoDate(iso: string) {
  const [, mes, dia] = iso.split('-')
  return { dia: String(parseInt(dia)), mes: MESES[parseInt(mes) - 1] ?? mes }
}

export default function EventosCarousel({ eventos }: { eventos: EventoItem[] }) {
  const [idx, setIdx] = useState(0)

  const evento = eventos[idx]
  const { dia, mes } = parseEventoDate(evento.data)
  const total = eventos.length
  const hasPrev = idx > 0
  const hasNext = idx < total - 1

  return (
    <div>
      {/* Card */}
      <div className="glass-card rounded-2xl p-7">
        {/* Header: date + info */}
        <div className="flex items-start gap-5">
          <div
            className="rounded-xl px-4 py-3 text-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #F26522, #e0541d)' }}
          >
            <div className="text-white text-2xl font-extrabold leading-none">{dia}</div>
            <div className="text-white/80 text-[11px] uppercase mt-0.5 font-semibold tracking-wide">{mes}</div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-xl leading-snug">{evento.titulo}</h3>
            <p className="flex items-center gap-1.5 text-white/80 text-sm mt-2">
              <MapPin size={13} className="shrink-0" />
              <span className="truncate">{evento.local}</span>
            </p>
            {evento.horaInicio && (
              <p className="flex items-center gap-1.5 text-white/60 text-sm mt-1">
                <Clock size={13} className="shrink-0" />
                {evento.horaInicio}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        {evento.descricao && (
          <p className="text-white/85 text-base leading-relaxed border-t border-white/10 pt-4 mt-4">
            {evento.descricao}
          </p>
        )}

        {/* Footer: calendar button + navigation */}
        <div className={`flex items-center gap-4 mt-5 ${total > 1 ? 'justify-between' : 'justify-left'}`}>
          <AddToCalendarButton
            titulo={evento.titulo}
            data={evento.data}
            local={evento.local}
            descricao={evento.descricao}
            horaInicio={evento.horaInicio}
          />

          {/* Nav arrows — only when more than 1 event */}
          {total > 1 && (
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIdx((i) => Math.max(0, i - 1))}
                disabled={!hasPrev}
                aria-label="Evento anterior"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 text-white/80 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150"
              >
                <ChevronLeft size={18} />
              </button>

              <span className="text-white/60 text-sm font-medium tabular-nums w-10 text-center">
                {idx + 1} / {total}
              </span>

              <button
                onClick={() => setIdx((i) => Math.min(total - 1, i + 1))}
                disabled={!hasNext}
                aria-label="Próximo evento"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 text-white/80 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dot indicators */}
      {total > 1 && (
        <div className="flex justify-center gap-2 mt-3" aria-label="Indicadores de evento">
          {eventos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Ir para evento ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx ? 'bg-[#F26522] w-6' : 'bg-white/30 w-2 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
