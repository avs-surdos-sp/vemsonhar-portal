import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative -mt-16 min-h-screen flex items-center overflow-hidden bg-white"
      aria-labelledby="hero-titulo"
    >
      {/* ── Decorative background elements ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">

        {/* Large orange arc — top right */}
        <div
          className="absolute -top-40 -right-40 w-170 h-170 rounded-full"
          style={{
            background: 'radial-gradient(circle at 60% 40%, rgba(242,101,34,0.13) 0%, rgba(242,101,34,0.04) 55%, transparent 75%)',
          }}
        />

        {/* Navy soft glow — bottom left */}
        <div
          className="absolute -bottom-24 -left-24 w-105 h-105 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(27,58,107,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Thin orange vertical bar */}
        <div
          className="absolute top-[20%] right-[5%] w-0.75 h-45 rounded-full opacity-30"
          style={{ background: 'linear-gradient(to bottom, transparent, #F7931E 40%, transparent)' }}
        />

        {/* Thin cyan horizontal bar */}
        <div
          className="absolute bottom-[30%] left-[5%] w-25 h-0.5 rounded-full opacity-25"
          style={{ background: 'linear-gradient(to right, transparent, #0069B4, transparent)' }}
        />

        {/* Dot grid — subtle */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #14387F 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Orange circle outline — right side mid */}
        <div
          className="absolute top-[35%] right-[12%] w-32 h-32 rounded-full border-[1.5px] border-[#F7931E]/15"
        />
        <div
          className="absolute top-[38%] right-[14%] w-20 h-20 rounded-full border-[1.5px] border-[#0069B4]/12"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <div>

            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 mb-7 anim-hidden animate-fade-in-up">
              <span
                className="hero-badge inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border"
                style={{
                  color: '#14387F',
                  borderColor: 'rgba(27,58,107,0.15)',
                  background: 'rgba(27,58,107,0.05)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F7931E] animate-pulse" />
                Associação de Surdos do Estado de SP
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-titulo"
              className="text-4xl lg:text-[3.2rem] xl:text-[3.8rem] font-extrabold text-[#14387F] leading-[1.08] mb-6 tracking-tight anim-hidden animate-fade-in-up delay-100"
            >
              Sonhando junto<br />
              com a{' '}
              <span className="gradient-text">Comunidade<br />Surda</span>{' '}
              paulista
            </h1>

            {/* Orange divider */}
            <div className="w-16 h-1 rounded-full bg-[#F7931E] mb-6 anim-hidden animate-fade-in-up delay-150" />

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg anim-hidden animate-fade-in-up delay-200">
              Há mais de 9 anos construindo pontes de inclusão, dignidade e
              pertencimento para a comunidade surda de São Paulo e região.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12 anim-hidden animate-fade-in-up delay-300">
              <Button
                asChild
                size="lg"
                className="font-bold px-8 rounded-full text-white shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #F7931E, #C27215)' }}
              >
                <Link href="/doacoes">
                  💙 Faça uma Doação
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hc-donation-btn font-semibold px-8 rounded-full border-[#14387F]/30 text-[#14387F] hover:bg-[#14387F] hover:text-white hover:border-[#14387F] transition-all duration-200"
              >
                <Link href="/sobre">Conheça a ASESP</Link>
              </Button>
            </div>

          </div>

          {/* Right column — card */}
          <div className="relative anim-hidden animate-fade-in-up delay-200">

            {/* Main card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100"
              style={{ boxShadow: '0 20px 60px rgba(27,58,107,0.10), 0 4px 16px rgba(0,0,0,0.06)' }}>

              {/* Card header with gradient bg */}
              <div
                className="relative flex flex-col items-center justify-center min-h-65 text-center p-8"
                style={{ background: 'linear-gradient(135deg, rgba(27,58,107,0.04) 0%, rgba(242,101,34,0.06) 100%)' }}
              >
                {/* Decorative ring */}
                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <div className="w-50 h-50 rounded-full border border-[#F7931E]/10" />
                </div>

                {/* Play button */}
                <button
                  className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer animate-float"
                  style={{
                    background: 'linear-gradient(135deg, #F7931E, #C27215)',
                    boxShadow: '0 8px 24px rgba(242,101,34,0.4)',
                  }}
                  aria-label="Reproduzir apresentação em Libras"
                >
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="white" className="ml-1" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="absolute inset-0 rounded-full border-2 border-[#F7931E]/40 animate-pulse-ring" aria-hidden="true" />
                </button>

                <p className="relative z-10 text-[#14387F] font-bold text-lg mt-5">Apresentação em Libras</p>
                <p className="relative z-10 text-gray-400 text-sm mt-1">Conheça a ASESP em Libras</p>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#F7931E" />
              <stop offset="50%"  stopColor="#0069B4" />
              <stop offset="100%" stopColor="#F7931E" />
            </linearGradient>
          </defs>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="url(#waveGradient)" />
        </svg>
      </div>
    </section>
  )
}
