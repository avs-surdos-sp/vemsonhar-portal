'use client'

import { useState, useRef, useEffect } from 'react'
import { CalendarDays, ChevronDown } from 'lucide-react'

interface Props {
  titulo: string
  data: string        // YYYY-MM-DD
  local: string
  descricao?: string
  horaInicio?: string // "HH:MM"
}

function buildGoogleUrl({ titulo, data, local, descricao, horaInicio }: Props) {
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
  const [ano, mes, dia] = data.split('-')

  let dates: string
  if (horaInicio) {
    // Evento com horário — duração padrão de 2 horas
    const [h, m] = horaInicio.split(':').map(Number)
    const start = `${ano}${mes}${dia}T${String(h).padStart(2,'0')}${String(m).padStart(2,'0')}00`
    const endH = (h + 2) % 24
    const end   = `${ano}${mes}${dia}T${String(endH).padStart(2,'0')}${String(m).padStart(2,'0')}00`
    dates = `${start}/${end}`
  } else {
    // Evento de dia inteiro
    const nextDay = new Date(`${data}T12:00:00`)
    nextDay.setDate(nextDay.getDate() + 1)
    const nd = nextDay.toISOString().split('T')[0].replace(/-/g, '')
    dates = `${ano}${mes}${dia}/${nd}`
  }

  const params = new URLSearchParams({
    text: titulo,
    dates,
    location: local,
    details: descricao ?? '',
  })
  return `${base}&${params.toString()}`
}

function buildOutlookUrl({ titulo, data, local, descricao, horaInicio }: Props) {
  const base = 'https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent'

  let startdt = data
  let enddt = data
  if (horaInicio) {
    const [h, m] = horaInicio.split(':').map(Number)
    const endH = (h + 2) % 24
    startdt = `${data}T${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:00`
    enddt   = `${data}T${String(endH).padStart(2,'0')}:${String(m).padStart(2,'0')}:00`
  }

  const params = new URLSearchParams({
    subject: titulo,
    startdt,
    enddt,
    body: descricao ?? '',
    location: local,
  })
  return `${base}&${params.toString()}`
}

export default function AddToCalendarButton(props: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Fecha ao clicar fora
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className="inline-flex items-center gap-2 bg-[#F26522] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#d4501a] transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 select-none"
      >
        <CalendarDays size={15} />
        Adicionar ao calendário
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 top-[calc(100%+8px)] z-50 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[220px]"
          role="menu"
        >
          {/* Google Calendar */}
          <a
            href={buildGoogleUrl(props)}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
          >
            {/* Google logo SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/>
              <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"/>
              <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"/>
              <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/>
            </svg>
            Google Calendar
          </a>

          <div className="border-t border-gray-100" />

          {/* Outlook */}
          <a
            href={buildOutlookUrl(props)}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
          >
            {/* Outlook logo SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="1" y="5" width="13" height="14" rx="2" fill="#0078D4"/>
              <path d="M7 9a3 3 0 100 6 3 3 0 000-6z" fill="white"/>
              <path d="M14 8h6.5A1.5 1.5 0 0122 9.5v9a1.5 1.5 0 01-1.5 1.5H14V8z" fill="#28A8E8"/>
              <path d="M14 8l8 5-8 5V8z" fill="#0078D4" opacity="0.4"/>
            </svg>
            Outlook
          </a>
        </div>
      )}
    </div>
  )
}
