import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Users, Heart, ArrowRight } from 'lucide-react'

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
          className="absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 60% 40%, rgba(242,101,34,0.13) 0%, rgba(242,101,34,0.04) 55%, transparent 75%)',
          }}
        />

        {/* Navy soft glow — bottom left */}
        <div
          className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(27,58,107,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Thin orange vertical bar */}
        <div
          className="absolute top-[20%] right-[5%] w-[3px] h-[180px] rounded-full opacity-30"
          style={{ background: 'linear-gradient(to bottom, transparent, #F26522 40%, transparent)' }}
        />

        {/* Thin cyan horizontal bar */}
        <div
          className="absolute bottom-[30%] left-[5%] w-[100px] h-[2px] rounded-full opacity-25"
          style={{ background: 'linear-gradient(to right, transparent, #00B4D8, transparent)' }}
        />

        {/* Dot grid — subtle */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #1B3A6B 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Orange circle outline — right side mid */}
        <div
          className="absolute top-[35%] right-[12%] w-32 h-32 rounded-full border-[1.5px] border-[#F26522]/15"
        />
        <div
          className="absolute top-[38%] right-[14%] w-20 h-20 rounded-full border-[1.5px] border-[#00B4D8]/12"
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
                  color: '#1B3A6B',
                  borderColor: 'rgba(27,58,107,0.15)',
                  background: 'rgba(27,58,107,0.05)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F26522] animate-pulse" />
                Associação dos Surdos do Estado de SP
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-titulo"
              className="text-4xl lg:text-[3.2rem] xl:text-[3.8rem] font-extrabold text-[#1B3A6B] leading-[1.08] mb-6 tracking-tight anim-hidden animate-fade-in-up delay-100"
            >
              Sonhando junto<br />
              com a{' '}
              <span className="gradient-text">Comunidade<br />Surda</span>{' '}
              paulista
            </h1>

            {/* Orange divider */}
            <div className="w-16 h-1 rounded-full bg-[#F26522] mb-6 anim-hidden animate-fade-in-up delay-150" />

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg anim-hidden animate-fade-in-up delay-200">
              Há mais de 12 anos construindo pontes de inclusão, dignidade e
              pertencimento para a comunidade surda de São Paulo e região.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12 anim-hidden animate-fade-in-up delay-300">
              <Button
                asChild
                size="lg"
                className="font-bold px-8 rounded-full text-white shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #F26522, #d4501a)' }}
              >
                <Link href="/como-se-associar">
                  🤟 Seja Associado
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hc-donation-btn font-semibold px-8 rounded-full border-[#1B3A6B]/30 text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white hover:border-[#1B3A6B] transition-all duration-200"
              >
                <Link href="/doacoes">💙 Faça uma Doação</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-7 anim-hidden animate-fade-in-up delay-400">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#00B4D8]/10 flex items-center justify-center">
                  <Users size={16} className="text-[#00B4D8]" />
                </div>
                <div>
                  <p className="text-[#1B3A6B] font-extrabold text-base leading-none">340+</p>
                  <p className="text-gray-400 text-xs mt-0.5">associados</p>
                </div>
              </div>
              <div className="w-px h-8" style={{ background: 'rgba(0,0,0,0.08)' }} />
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#F26522]/10 flex items-center justify-center">
                  <Heart size={16} className="text-[#F26522]" />
                </div>
                <div>
                  <p className="text-[#1B3A6B] font-extrabold text-base leading-none">12</p>
                  <p className="text-gray-400 text-xs mt-0.5">anos de história</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — card */}
          <div className="relative anim-hidden animate-fade-in-up delay-200">

            {/* Main card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100"
              style={{ boxShadow: '0 20px 60px rgba(27,58,107,0.10), 0 4px 16px rgba(0,0,0,0.06)' }}>

              {/* Card header with gradient bg */}
              <div
                className="relative flex flex-col items-center justify-center min-h-[260px] text-center p-8"
                style={{ background: 'linear-gradient(135deg, rgba(27,58,107,0.04) 0%, rgba(242,101,34,0.06) 100%)' }}
              >
                {/* Decorative ring */}
                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <div className="w-[200px] h-[200px] rounded-full border border-[#F26522]/10" />
                </div>

                {/* Play button */}
                <button
                  className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer animate-float"
                  style={{
                    background: 'linear-gradient(135deg, #F26522, #d4501a)',
                    boxShadow: '0 8px 24px rgba(242,101,34,0.4)',
                  }}
                  aria-label="Reproduzir apresentação em Libras"
                >
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="white" className="ml-1" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="absolute inset-0 rounded-full border-2 border-[#F26522]/40 animate-pulse-ring" aria-hidden="true" />
                </button>

                <p className="relative z-10 text-[#1B3A6B] font-bold text-lg mt-5">Apresentação em Libras</p>
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
              <stop offset="0%"   stopColor="#F26522" />
              <stop offset="50%"  stopColor="#00B4D8" />
              <stop offset="100%" stopColor="#F26522" />
            </linearGradient>
          </defs>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="url(#waveGradient)" />
        </svg>
      </div>
    </section>
  )
}
