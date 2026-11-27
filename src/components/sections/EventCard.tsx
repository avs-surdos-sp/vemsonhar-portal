'use client'

import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Clock, MapPin, Calendar, ChevronDown } from 'lucide-react'
import {
  getGoogleCalendarUrl,
  getOutlookCalendarUrl,
  getIcsContent,
  type EventoCalendario,
} from '@/lib/calendar-links'

export type Evento = EventoCalendario & { _id?: string }

const MESES = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

function parseDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return {
    dia: String(d).padStart(2, '0'),
    mes: MESES[(m ?? 1) - 1] ?? '',
    ano: y ?? 0,
    mesNumero: m ?? 1,
  }
}

function formatDateRange(inicio: string, fim?: string) {
  const a = parseDate(inicio)
  if (!fim || fim === inicio) return `${a.dia} de ${a.mes} de ${a.ano}`
  const b = parseDate(fim)
  if (a.ano === b.ano && a.mes === b.mes) {
    return `${a.dia} a ${b.dia} de ${a.mes} de ${a.ano}`
  }
  if (a.ano === b.ano) {
    return `${a.dia} de ${a.mes} a ${b.dia} de ${b.mes} de ${b.ano}`
  }
  return `${a.dia}/${a.mesNumero}/${a.ano} a ${b.dia}/${b.mesNumero}/${b.ano}`
}

function downloadIcs(evento: Evento) {
  const content = getIcsContent(evento)
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${evento.titulo.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.ics`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

// ─── Ícones das plataformas de calendário ─────────────────────────────────────

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

function OutlookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#0078D4" d="M21.6 4H10.4c-.22 0-.4.18-.4.4V6H2.4c-.22 0-.4.18-.4.4v11.2c0 .22.18.4.4.4h7.6v1.6c0 .22.18.4.4.4h11.2c.22 0 .4-.18.4-.4V4.4c0-.22-.18-.4-.4-.4z" />
      <path fill="#fff" d="M6 8.5c-1.66 0-3 1.57-3 3.5s1.34 3.5 3 3.5 3-1.57 3-3.5-1.34-3.5-3-3.5zm0 5.5c-.83 0-1.5-.9-1.5-2s.67-2 1.5-2 1.5.9 1.5 2-.67 2-1.5 2z" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

// ─── Componente ───────────────────────────────────────────────────────────────

type Props = {
  evento: Evento
  isLast?: boolean
}

function EventCard({ evento, isLast = false }: Props) {
  const [expandido, setExpandido] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [truncavel, setTruncavel] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const [menuPos, setMenuPos] = useState<{ top: number; left: number } | null>(null)

  const d = parseDate(evento.data)
  const temDescricao = !!(evento.descricao && evento.descricao.length > 0)

  /* Mede se a descrição está realmente cortada (altura real > altura visível na versão de 2 linhas) */
  useEffect(() => {
    const el = descRef.current
    if (!el) return
    const medir = () => {
      // só mede no estado colapsado (2 linhas); quando expandido mantém o valor
      if (expandido) return
      setTruncavel(el.scrollHeight > el.clientHeight + 1)
    }
    const raf = requestAnimationFrame(medir)
    const ro = new ResizeObserver(medir)
    ro.observe(el)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [evento.descricao, expandido])

  const fecharCalendario = useCallback(() => setShowCalendar(false), [])

  /* Calcula a posição do menu abaixo do botão (portal escapa do overflow do carrossel) */
  const atualizarPosicao = useCallback(() => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (rect) setMenuPos({ top: rect.bottom + 8, left: rect.left })
  }, [])

  /* Abre/fecha o menu; ao abrir, calcula a posição a partir do botão */
  const toggleCalendario = useCallback(() => {
    setShowCalendar((aberto) => {
      if (!aberto) atualizarPosicao()
      return !aberto
    })
  }, [atualizarPosicao])

  /* Enquanto aberto, reposiciona o menu ao rolar/redimensionar */
  useEffect(() => {
    if (!showCalendar) return
    window.addEventListener('scroll', atualizarPosicao, true)
    window.addEventListener('resize', atualizarPosicao)
    return () => {
      window.removeEventListener('scroll', atualizarPosicao, true)
      window.removeEventListener('resize', atualizarPosicao)
    }
  }, [showCalendar, atualizarPosicao])

  /* Fecha ao clicar fora (botão + menu) ou apertar ESC */
  useEffect(() => {
    if (!showCalendar) return
    function onPointerDown(e: MouseEvent) {
      const alvo = e.target as Node
      if (
        !buttonRef.current?.contains(alvo) &&
        !menuRef.current?.contains(alvo)
      ) {
        fecharCalendario()
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') fecharCalendario()
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [showCalendar, fecharCalendario])

  return (
    <div className={`flex gap-4 sm:gap-6 group ${isLast ? '' : 'pb-6'}`}>
      {/* ─── Rail vertical: cápsula de data + conector ─── */}
      <div className="flex flex-col items-center shrink-0">
        {/* Cápsula de data */}
        <div
          className="relative z-10 w-20 sm:w-24 shrink-0 rounded-xl text-white flex flex-col items-center justify-center py-3.5 shadow-md"
          style={{ background: 'linear-gradient(135deg, #14387F 0%, #061B45 100%)' }}
          aria-hidden="true"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#F7931E] leading-none">
            {d.mes}
          </span>
          <span className="text-4xl sm:text-5xl font-extrabold leading-none mt-1.5">
            {d.dia}
          </span>
          <span className="text-xs text-white/70 mt-1.5 leading-none">{d.ano}</span>
        </div>

        {/* Conector: linha vertical + chevron indicando próximo evento */}
        {!isLast && (
          <div className="relative flex-1 w-full flex items-center justify-center min-h-[64px]">
            <div className="absolute top-0 bottom-0 w-px bg-gray-300" aria-hidden="true" />
            <ChevronDown
              size={36}
              strokeWidth={2.5}
              className="relative z-10 text-[#0069B4] bg-[#F5F7FA] rounded-full p-1.5 shadow-sm"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {/* ─── Card do evento ─── */}
      <article className="flex-1 min-w-0 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#F7931E] transition-all duration-300 p-5 sm:p-6">
        {/* Título + chevron de expandir */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-extrabold text-[#14387F] text-lg sm:text-xl leading-snug group-hover:text-[#F7931E] transition-colors flex-1">
            {evento.titulo}
          </h3>
          {truncavel && (
            <button
              type="button"
              onClick={() => setExpandido((v) => !v)}
              aria-expanded={expandido}
              aria-label={expandido ? 'Recolher detalhes' : 'Ver mais detalhes'}
              className="shrink-0 w-9 h-9 rounded-full bg-[#EAF0FA] hover:bg-[#0069B4] hover:text-white text-[#0069B4] flex items-center justify-center transition-colors"
            >
              <ChevronDown
                size={20}
                strokeWidth={2.5}
                className={`transition-transform duration-300 ${expandido ? 'rotate-180' : ''}`}
              />
            </button>
          )}
        </div>

        {/* Metadados (data range, hora, local) */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-700 mb-3">
          {evento.dataFim && evento.dataFim !== evento.data && (
            <div className="flex items-center gap-1.5">
              <Calendar size={15} className="text-[#0069B4] shrink-0" aria-hidden="true" />
              <span className="font-medium">{formatDateRange(evento.data, evento.dataFim)}</span>
            </div>
          )}
          {evento.horaInicio && (
            <div className="flex items-center gap-1.5">
              <Clock size={15} className="text-[#0069B4] shrink-0" aria-hidden="true" />
              <span>{evento.horaInicio}</span>
            </div>
          )}
          {evento.local && (
            <div className="flex items-center gap-1.5 min-w-0">
              <MapPin size={15} className="text-[#0069B4] shrink-0" aria-hidden="true" />
              <span className="truncate">{evento.local}</span>
            </div>
          )}
        </div>

        {/* Descrição — colapsada (2 linhas) ou expandida */}
        {temDescricao && (
          <p
            ref={descRef}
            className={`text-sm sm:text-base text-gray-600 leading-relaxed mb-4 whitespace-pre-line ${
              expandido ? '' : 'line-clamp-2'
            }`}
          >
            {evento.descricao}
          </p>
        )}

        {/* Ações */}
        <div className="inline-block">
          <button
            ref={buttonRef}
            type="button"
            onClick={toggleCalendario}
            aria-haspopup="true"
            aria-expanded={showCalendar}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F7931E] hover:text-[#14387F] transition-colors"
          >
            <Calendar size={14} />
            Adicionar ao calendário
            <ChevronDown size={14} className={`transition-transform ${showCalendar ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </article>

      {/* Menu de calendário — via portal, escapa do overflow do carrossel */}
      {showCalendar && menuPos && createPortal(
        <div
          ref={menuRef}
          role="menu"
          className="fixed w-56 rounded-xl bg-white border border-gray-100 shadow-xl z-[100] overflow-hidden"
          style={{ top: menuPos.top, left: menuPos.left }}
        >
          <a
            href={getGoogleCalendarUrl(evento)}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#F5F7FA] transition-colors"
            onClick={fecharCalendario}
          >
            <GoogleIcon />
            Google Calendar
          </a>
          <a
            href={getOutlookCalendarUrl(evento)}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#F5F7FA] transition-colors border-t border-gray-100"
            onClick={fecharCalendario}
          >
            <OutlookIcon />
            Outlook
          </a>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              downloadIcs(evento)
              fecharCalendario()
            }}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#F5F7FA] transition-colors border-t border-gray-100"
          >
            <AppleIcon />
            Apple Calendar
          </button>
        </div>,
        document.body
      )}
    </div>
  )
}

export default memo(EventCard)
