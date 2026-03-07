'use client'

import { useState, useEffect } from 'react'

type FontSize = 'normal' | 'large' | 'xlarge'

const FONT_LABELS: Record<FontSize, { aria: string; display: string; size: string }> = {
  normal: { aria: 'Texto tamanho normal',      display: 'A', size: 'text-[10px]' },
  large:  { aria: 'Texto tamanho grande',       display: 'A', size: 'text-xs'    },
  xlarge: { aria: 'Texto tamanho muito grande', display: 'A', size: 'text-sm'    },
}

export default function AccessibilityBar() {
  const [highContrast, setHighContrast] = useState(false)
  const [fontSize, setFontSize]         = useState<FontSize>('normal')

  /* ── Restore preferences on mount ─────────────────────────────────────── */
  useEffect(() => {
    const hc = localStorage.getItem('avs-hc') === '1'
    const fs = (localStorage.getItem('avs-fs') as FontSize) ?? 'normal'

    if (hc) {
      document.documentElement.setAttribute('data-hc', '1')
      setHighContrast(true)
    }
    if (fs !== 'normal') {
      document.documentElement.setAttribute('data-fs', fs)
      setFontSize(fs)
    }
  }, [])

  /* ── Handlers ──────────────────────────────────────────────────────────── */
  const toggleContrast = () => {
    const next = !highContrast
    setHighContrast(next)
    if (next) {
      document.documentElement.setAttribute('data-hc', '1')
      localStorage.setItem('avs-hc', '1')
    } else {
      document.documentElement.removeAttribute('data-hc')
      localStorage.setItem('avs-hc', '0')
    }
  }

  const changeFontSize = (size: FontSize) => {
    setFontSize(size)
    if (size === 'normal') {
      document.documentElement.removeAttribute('data-fs')
    } else {
      document.documentElement.setAttribute('data-fs', size)
    }
    localStorage.setItem('avs-fs', size)
  }

  /* ── Render ────────────────────────────────────────────────────────────── */
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-9 flex items-center px-4"
      style={{ background: '#0a1c38', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      role="navigation"
      aria-label="Barra de acessibilidade"
    >
      {/* ── Skip link (visível apenas no foco — WCAG 2.4.1) ─────────────── */}
      <a
        href="#main-content"
        className="
          sr-only
          focus:not-sr-only focus:absolute focus:top-1 focus:left-4 focus:z-[70]
          focus:bg-[#F26522] focus:text-white focus:px-3 focus:py-1
          focus:rounded focus:text-xs focus:font-bold focus:outline-none
        "
      >
        Ir para o conteúdo
      </a>

      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
        {/* Label visível em telas maiores */}
        <span className="hidden sm:block text-white/35 text-[10px] uppercase tracking-widest select-none">
          Acessibilidade
        </span>

        <div className="flex items-center gap-2 ml-auto">

          {/* ── Tamanho de texto ──────────────────────────────────────── */}
          <div
            className="flex items-center gap-0.5"
            role="group"
            aria-label="Tamanho do texto"
          >
            {(Object.entries(FONT_LABELS) as [FontSize, typeof FONT_LABELS[FontSize]][]).map(
              ([key, { aria, display, size }]) => {
                const active = fontSize === key
                return (
                  <button
                    key={key}
                    onClick={() => changeFontSize(key)}
                    aria-label={aria}
                    aria-pressed={active}
                    className={`
                      ${size} font-bold px-1.5 py-0.5 rounded leading-none transition-colors
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8]
                      ${active
                        ? 'bg-[#00B4D8] text-white'
                        : 'text-white/45 hover:text-white hover:bg-white/10'}
                    `}
                  >
                    {display}
                  </button>
                )
              }
            )}
          </div>

          {/* Divisor */}
          <div className="w-px h-4 bg-white/15" aria-hidden="true" />

          {/* ── Alto contraste ────────────────────────────────────────── */}
          <button
            onClick={toggleContrast}
            aria-pressed={highContrast}
            aria-label={highContrast ? 'Desativar alto contraste' : 'Ativar alto contraste'}
            className={`
              flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded
              transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8]
              ${highContrast
                ? 'bg-yellow-400 text-black'
                : 'text-white/50 hover:text-white hover:bg-white/10'}
            `}
          >
            {/* Circle half-filled icon */}
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" fill="currentColor">
              <path d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1zm0 1v8a4 4 0 0 1 0-8z"/>
            </svg>
            <span className="hidden sm:inline">Alto contraste</span>
          </button>
        </div>
      </div>
    </div>
  )
}
