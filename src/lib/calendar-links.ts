export type EventoCalendario = {
  titulo: string
  data: string      // YYYY-MM-DD
  dataFim?: string  // YYYY-MM-DD
  horaInicio?: string
  local?: string
  descricao?: string
}

function toDateStamp(iso: string) {
  return iso.replace(/-/g, '')
}

function parseHoraStart(hora?: string) {
  if (!hora) return null
  const m = hora.match(/(\d{1,2}):(\d{2})/)
  if (!m) return null
  const [, h, mm] = m
  return `${h.padStart(2, '0')}${mm}00`
}

function parseHoraEnd(hora?: string) {
  if (!hora) return null
  const parts = hora.match(/(\d{1,2}):(\d{2}).*?(\d{1,2}):(\d{2})/)
  if (!parts) return null
  const [, , , h, mm] = parts
  return `${h.padStart(2, '0')}${mm}00`
}

/** Horário de término padrão: 1 hora após o início (formato HHMMSS). */
function umaHoraDepois(startTime: string) {
  const horaFim = String(parseInt(startTime.slice(0, 2), 10) + 1).padStart(2, '0')
  return `${horaFim}${startTime.slice(2)}`
}

/**
 * Gera o intervalo `YYYYMMDDTHHMMSS/YYYYMMDDTHHMMSS` no formato Google Calendar.
 * Usa data/dataFim + horários quando disponíveis; senão, evento de dia inteiro.
 */
function buildDatesRange(e: EventoCalendario) {
  const startDay = toDateStamp(e.data)
  const endDay = toDateStamp(e.dataFim || e.data)
  const startTime = parseHoraStart(e.horaInicio)
  const endTime = parseHoraEnd(e.horaInicio)

  if (startTime) {
    const end = endTime || umaHoraDepois(startTime)
    return `${startDay}T${startTime}/${endDay}T${end}`
  }

  // Dia inteiro — Google exige data+1 no fim
  const [y, m, d] = (e.dataFim || e.data).split('-').map(Number)
  const nextDay = new Date(Date.UTC(y, (m ?? 1) - 1, (d ?? 1) + 1))
  const endAllDay = `${nextDay.getUTCFullYear()}${String(nextDay.getUTCMonth() + 1).padStart(2, '0')}${String(nextDay.getUTCDate()).padStart(2, '0')}`
  return `${startDay}/${endAllDay}`
}

export function getGoogleCalendarUrl(e: EventoCalendario): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: e.titulo,
    dates: buildDatesRange(e),
    location: e.local ?? '',
    details: e.descricao ?? '',
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function getOutlookCalendarUrl(e: EventoCalendario): string {
  function toIso(dateIso: string, hora: string | null) {
    if (!hora) return `${dateIso}T00:00:00`
    return `${dateIso}T${hora.slice(0, 2)}:${hora.slice(2, 4)}:00`
  }
  const startTime = parseHoraStart(e.horaInicio)
  const endTime = parseHoraEnd(e.horaInicio)

  const startdt = toIso(e.data, startTime)
  const endBase = e.dataFim || e.data
  const enddt = toIso(endBase, endTime || startTime)

  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: e.titulo,
    startdt,
    enddt,
    location: e.local ?? '',
    body: e.descricao ?? '',
  })
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`
}

/**
 * Gera o conteúdo de um arquivo .ics (Apple Calendar / iCal padrão).
 * O client faz download usando Blob.
 */
export function getIcsContent(e: EventoCalendario): string {
  const startTime = parseHoraStart(e.horaInicio)
  const endTime = parseHoraEnd(e.horaInicio)
  const startDay = toDateStamp(e.data)
  const endDay = toDateStamp(e.dataFim || e.data)

  const dtstart = startTime ? `${startDay}T${startTime}` : startDay
  const dtend = startTime
    ? `${endDay}T${endTime || umaHoraDepois(startTime)}`
    : endDay

  const escape = (s: string) => s.replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n')
  const uid = `${startDay}-${Math.random().toString(36).slice(2, 10)}@asesp`

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ASESP//Site Institucional//PT',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${startDay}T000000Z`,
    startTime ? `DTSTART:${dtstart}` : `DTSTART;VALUE=DATE:${dtstart}`,
    startTime ? `DTEND:${dtend}` : `DTEND;VALUE=DATE:${dtend}`,
    `SUMMARY:${escape(e.titulo)}`,
    e.local ? `LOCATION:${escape(e.local)}` : '',
    e.descricao ? `DESCRIPTION:${escape(e.descricao)}` : '',
    'END:VEVENT',
    'END:VCALENDAR',
  ]
    .filter(Boolean)
    .join('\r\n')
}
