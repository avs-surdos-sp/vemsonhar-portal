'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

// ─── Slides ───────────────────────────────────────────────────────────────────

type Slide = {
  badge: string
  title: string
  text?: string
  cta?: { href: string; label: string }
  bg: string
}

const slides: Slide[] = [
  {
    badge: 'Associação de Surdos do Estado de SP',
    title: 'Bem-vindo ao nosso site institucional!',
    bg: 'linear-gradient(135deg, #14387F 0%, #061B45 60%, #14387F 100%)',
  },
  {
    badge: 'Nossa história',
    title: 'Conheça a história da fundação da ASESP',
    cta: { href: '/sobre', label: 'Conheça a ASESP' },
    bg: 'linear-gradient(135deg, #0069B4 0%, #14387F 70%, #061B45 100%)',
  },
  {
    badge: 'Faça a diferença',
    title: 'Quer fazer parte e ajudar com doações?',
    text: 'Venha ajudar a fazer a diferença!',
    cta: { href: '/doacoes', label: 'Doe Agora' },
    bg: 'linear-gradient(135deg, #F7931E 0%, #C27215 60%, #14387F 100%)',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="relative -mt-16 overflow-hidden" aria-roledescription="carousel" aria-label="Destaques da ASESP">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} de ${slides.length}`}
              className="flex-[0_0_100%] min-w-0 relative"
              style={{ background: slide.bg }}
            >
              {/* Decorative elements */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div
                  className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-15"
                  style={{ background: 'radial-gradient(circle, #F7931E 0%, transparent 65%)' }}
                />
                <div
                  className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full opacity-10"
                  style={{ background: 'radial-gradient(circle, #0069B4 0%, transparent 65%)' }}
                />
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
              </div>

              {/* Slide content */}
              <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center pt-40 pb-32 min-h-[560px] flex flex-col items-center justify-center">
                <span className="text-sm font-bold uppercase tracking-widest text-white/90 mb-7">
                  {slide.badge}
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight max-w-3xl">
                  {slide.title}
                </h2>

                <div
                  className="w-16 h-1 rounded-full mb-7"
                  style={{ background: 'linear-gradient(90deg, #F7931E, #0069B4)' }}
                  aria-hidden="true"
                />

                {slide.text && (
                  <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
                    {slide.text}
                  </p>
                )}

                {slide.cta && (
                  <Link
                    href={slide.cta.href}
                    className="inline-flex items-center gap-2 font-bold text-base px-8 py-3.5 rounded-full bg-white text-black hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    {slide.cta.label}
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Setas */}
      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-colors z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-colors z-10"
        aria-label="Próximo slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            aria-current={selectedIndex === i}
            className={`h-2 rounded-full transition-all duration-300 ${
              selectedIndex === i
                ? 'w-8 bg-[#F7931E]'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
