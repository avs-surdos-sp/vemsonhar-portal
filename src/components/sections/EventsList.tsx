'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import EventCard, { type Evento } from './EventCard'

const JANELA = 3 // eventos visíveis simultaneamente
const FOLGA_ALTURA = 24 // px de respiro no fim do viewport

export default function EventsList({ eventos }: { eventos: Evento[] }) {
  const total = eventos.length
  const excedeJanela = total > JANELA
  const ultimoSnapValido = Math.max(0, total - JANELA)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: 'y',
    align: 'start',
    slidesToScroll: 1,
    containScroll: false,
    loop: false,
    watchDrag: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  const podeVoltar = selectedIndex > 0
  const podeAvancar = selectedIndex < ultimoSnapValido

  const scrollPrev = useCallback(() => {
    if (!emblaApi || !podeVoltar) return
    emblaApi.scrollTo(selectedIndex - 1)
  }, [emblaApi, selectedIndex, podeVoltar])

  const scrollNext = useCallback(() => {
    if (!emblaApi || !podeAvancar) return
    emblaApi.scrollTo(selectedIndex + 1)
  }, [emblaApi, selectedIndex, podeAvancar])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    onSelect()
  }, [emblaApi])

  /* ── Altura dinâmica do viewport = 3 primeiros cards ── */
  const slidesRef = useRef<(HTMLDivElement | null)[]>([])
  const [viewportHeight, setViewportHeight] = useState<number | null>(null)

  useLayoutEffect(() => {
    if (!excedeJanela) return
    function measure() {
      const heights = slidesRef.current
        .slice(0, JANELA)
        .map((el) => el?.offsetHeight ?? 0)
      const totalH = heights.reduce((a, b) => a + b, 0)
      setViewportHeight(totalH + FOLGA_ALTURA)
    }
    measure()
    const ro = new ResizeObserver(measure)
    slidesRef.current.forEach((el) => el && ro.observe(el))
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [excedeJanela, eventos])

  /* Sem carrossel se cabe todos na janela */
  if (!excedeJanela) {
    return (
      <div>
        {eventos.map((e, i) => (
          <EventCard
            key={e._id || e.titulo}
            evento={e}
            isLast={i === eventos.length - 1}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Viewport Embla vertical */}
      <div
        ref={emblaRef}
        className="overflow-hidden"
        style={viewportHeight ? { height: `${viewportHeight}px` } : undefined}
      >
        <div className="flex flex-col">
          {eventos.map((e, i) => (
            <div
              key={e._id || e.titulo}
              ref={(el) => {
                slidesRef.current[i] = el
              }}
              className="min-h-0 px-1 pt-1"
              style={{ flex: '0 0 auto' }}
            >
              <EventCard evento={e} isLast={i === eventos.length - 1} />
            </div>
          ))}
        </div>
      </div>

      {/* Navegação — chevron up (volta) + chevron down (avança) */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!podeVoltar}
          aria-label="Voltar atividade"
          className="w-12 h-12 rounded-full bg-[#0069B4] hover:bg-[#14387F] shadow-md hover:shadow-lg text-white flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#0069B4] disabled:hover:shadow-md"
        >
          <ChevronUp size={24} strokeWidth={2.5} />
        </button>

        <button
          type="button"
          onClick={scrollNext}
          disabled={!podeAvancar}
          aria-label="Avançar atividade"
          className="w-12 h-12 rounded-full bg-[#0069B4] hover:bg-[#14387F] shadow-md hover:shadow-lg text-white flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#0069B4] disabled:hover:shadow-md"
        >
          <ChevronDown size={24} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}
