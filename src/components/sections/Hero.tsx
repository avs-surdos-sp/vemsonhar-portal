import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowDown, Users, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative -mt-16 min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 55%, #1a3a6e 100%)' }}
      aria-labelledby="hero-titulo"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Large top-right glow */}
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(0,180,216,0.15) 0%, transparent 70%)' }}
        />
        {/* Bottom-left glow */}
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(242,101,34,0.15) 0%, transparent 70%)' }}
        />
        {/* Vertical accent line */}
        <div
          className="absolute top-1/4 right-[8%] w-[2px] h-[160px] opacity-40"
          style={{ background: 'linear-gradient(to bottom, transparent, #00B4D8, transparent)' }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 border border-[#00B4D8]/40 bg-[#00B4D8]/10 anim-hidden animate-fade-in-up"
            >
              <span
                className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse-ring"
                aria-hidden="true"
              />
              <span className="text-[#00B4D8] text-xs font-semibold tracking-widest uppercase">
                Associação dos Surdos do Estado de SP
              </span>
            </div>

            <h1
              id="hero-titulo"
              className="text-4xl lg:text-[3.2rem] xl:text-[3.6rem] font-extrabold text-white leading-[1.1] mb-6 tracking-tight anim-hidden animate-fade-in-up delay-100"
            >
              Sonhando junto com a{' '}
              <span
                className="gradient-text"
              >
                Comunidade Surda
              </span>{' '}
              paulista
            </h1>

            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-lg anim-hidden animate-fade-in-up delay-200">
              Há mais de 12 anos construindo pontes de inclusão, dignidade e
              pertencimento para a comunidade surda de São Paulo e região.
            </p>

            <div className="flex flex-wrap gap-4 anim-hidden animate-fade-in-up delay-300">
              <Button
                asChild
                size="lg"
                className="font-bold px-8 rounded-full text-white shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #F26522, #e0541d)' }}
              >
                <Link href="/como-se-associar">🤟 Seja Associado</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold px-8 rounded-full border-white/30 text-white bg-white/8 hover:bg-white/15 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
              >
                <Link href="/doacoes">💙 Faça uma Doação</Link>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex items-center gap-6 mt-12 anim-hidden animate-fade-in-up delay-400">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Users size={16} className="text-[#00B4D8]" />
                <span><strong className="text-white font-bold">340+</strong> associados</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Heart size={16} className="text-[#F26522]" />
                <span><strong className="text-white font-bold">12</strong> anos de história</span>
              </div>
            </div>
          </div>

          {/* Right column — feature card */}
          <div className="relative anim-hidden animate-fade-in-up delay-200">
            {/* Main card */}
            <div className="glass-card rounded-3xl overflow-hidden p-0">
              {/* Card header */}
              <div
                className="relative p-8 flex flex-col items-center justify-center min-h-[220px] text-center"
                style={{ background: 'linear-gradient(135deg, rgba(0,180,216,0.2) 0%, rgba(27,58,107,0.4) 100%)' }}
              >
                {/* Play button */}
                <button
                  className="relative w-20 h-20 rounded-full border-2 border-[#F26522]/80 flex items-center justify-center bg-[#F26522]/20 hover:bg-[#F26522]/35 transition-all duration-300 hover:scale-105 cursor-pointer group animate-float"
                  aria-label="Reproduzir apresentação em Libras"
                >
                  <span className="sr-only">Reproduzir vídeo</span>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="white" className="ml-1" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {/* Pulse ring */}
                  <span className="absolute inset-0 rounded-full border-2 border-[#F26522]/40 animate-pulse-ring" aria-hidden="true" />
                </button>
                <p className="text-white font-bold text-lg mt-5">Apresentação em Libras</p>
                <p className="text-white/50 text-sm mt-1">Conheça a ASESP em Libras</p>
              </div>

              {/* Card body — mini stats */}
            </div>
          </div>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
