import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Em breve | ASESP',
  robots: { index: false, follow: false },
}

export default function EmBreve() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
    >
      {/* Glow decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #F26522, transparent)' }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #00B4D8, transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-md">
        {/* Logo */}
        <Image
          src="/logo-avs.svg"
          alt="ASESP — Associação dos Surdos do Estado de São Paulo"
          width={180}
          height={70}
          className="mx-auto mb-10 brightness-0 invert"
          priority
        />

        {/* Ícone mãos */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl"
          style={{ background: 'rgba(242,101,34,0.15)', border: '1.5px solid rgba(242,101,34,0.3)' }}
          aria-hidden="true"
        >
          🤟
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Em breve
        </h1>

        <div className="w-12 h-1 rounded-full bg-[#F26522] mx-auto mb-6" aria-hidden="true" />

        <p className="text-white/60 text-base leading-relaxed">
          Estamos preparando algo especial para a comunidade surda paulista.
          Em breve nosso portal estará disponível.
        </p>

        <p className="mt-8 text-white/30 text-sm">
          © {new Date().getFullYear()} ASESP — Todos os direitos reservados.
        </p>
      </div>
    </main>
  )
}
