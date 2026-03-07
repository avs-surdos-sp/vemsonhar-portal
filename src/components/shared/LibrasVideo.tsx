'use client'

import { useState } from 'react'
import { Hand, PlayCircle, X } from 'lucide-react'

interface LibrasVideoProps {
  /** YouTube video ID. Se omitido, exibe o placeholder "em breve". */
  videoId?: string
  title?: string
}

export default function LibrasVideo({
  videoId,
  title = 'Conteúdo desta página em Libras',
}: LibrasVideoProps) {
  const [expanded, setExpanded] = useState(false)

  /* ── Placeholder (sem vídeo ainda) ─────────────────────────────────────── */
  if (!videoId) {
    return (
      <div
        className="inline-flex items-center gap-2 mt-5 px-3.5 py-1.5 rounded-full
                   bg-white/5 border border-white/10 text-white/35 text-xs select-none"
        role="note"
        aria-label="Vídeo em Libras desta página em breve"
      >
        <Hand size={13} aria-hidden="true" />
        <span>Vídeo em Libras — em breve</span>
      </div>
    )
  }

  /* ── Com vídeo disponível ───────────────────────────────────────────────── */
  return (
    <div className="mt-5 flex flex-col items-center">
      {!expanded ? (
        <button
          onClick={() => setExpanded(true)}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     bg-white/10 border border-white/20 text-white/80 text-xs font-medium
                     hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-white/50 transition-colors cursor-pointer"
          aria-label={`Assistir: ${title}`}
        >
          <PlayCircle size={13} aria-hidden="true" />
          <span>Assistir em Libras</span>
        </button>
      ) : (
        <div className="w-full max-w-sm">
          <div className="flex items-center justify-between mb-2 px-1">
            <p className="text-white/60 text-xs">{title}</p>
            <button
              onClick={() => setExpanded(false)}
              className="text-white/40 hover:text-white/80 transition-colors
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
              aria-label="Fechar vídeo em Libras"
            >
              <X size={14} aria-hidden="true" />
            </button>
          </div>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              aria-label={title}
            />
          </div>
        </div>
      )}
    </div>
  )
}
