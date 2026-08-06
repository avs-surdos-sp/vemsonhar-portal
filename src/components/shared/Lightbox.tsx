'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

export type GaleriaFoto = {
  _key: string
  asset: { _ref: string }
  alt?: string
  legenda?: string
}

type Props = {
  fotos: GaleriaFoto[]
}

export default function Lightbox({ fotos }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isOpen = openIndex !== null

  const open = (i: number) => setOpenIndex(i)
  const close = useCallback(() => setOpenIndex(null), [])

  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + fotos.length) % fotos.length))
  }, [fotos.length])

  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % fotos.length))
  }, [fotos.length])

  /* ── Atalhos de teclado e bloqueio de scroll ─────────────────────────── */
  useEffect(() => {
    if (!isOpen) return

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }

    document.addEventListener('keydown', handleKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close, prev, next])

  const fotoAtual = openIndex !== null ? fotos[openIndex] : null

  return (
    <>
      {/* Grid de miniaturas */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 list-none">
        {fotos.map((foto, i) => (
          <li key={foto._key}>
            <button
              type="button"
              onClick={() => open(i)}
              className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0069B4] focus-visible:ring-offset-2 rounded-xl"
              aria-label={`Abrir foto ${i + 1} de ${fotos.length}${foto.alt ? ` — ${foto.alt}` : ''}`}
            >
              <figure className="overflow-hidden rounded-xl bg-gray-100 aspect-square relative cursor-zoom-in">
                <Image
                  src={urlFor(foto).width(600).height(600).fit('crop').url()}
                  alt={foto.alt ?? 'Foto da galeria'}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                />
              </figure>
              {foto.legenda && (
                <figcaption className="text-xs text-gray-500 mt-2 leading-snug">
                  {foto.legenda}
                </figcaption>
              )}
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox overlay */}
      {isOpen && fotoAtual && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria em tela cheia"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={close}
        >
          {/* Botão fechar */}
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-colors z-10"
          >
            <X size={22} />
          </button>

          {/* Contador */}
          <span className="absolute top-5 left-5 text-white/80 text-sm font-semibold px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            {openIndex! + 1} / {fotos.length}
          </span>

          {/* Botão anterior */}
          {fotos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Foto anterior"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          {/* Botão próximo */}
          {fotos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Próxima foto"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight size={26} />
            </button>
          )}

          {/* Imagem + legenda — para de propagar o click para não fechar */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-[90vw] max-w-[1200px] h-[75vh] max-h-[800px]">
              <Image
                src={urlFor(fotoAtual).width(1800).fit('max').url()}
                alt={fotoAtual.alt ?? 'Foto da galeria'}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            {fotoAtual.legenda && (
              <p className="text-white/85 text-sm sm:text-base text-center mt-4 max-w-2xl px-4 leading-relaxed">
                {fotoAtual.legenda}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
