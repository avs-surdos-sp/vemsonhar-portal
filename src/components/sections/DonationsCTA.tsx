import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function DonationsCTA() {
  return (
    <section
      className="py-12 px-4"
      aria-labelledby="doacoes-cta-titulo"
      style={{ background: 'linear-gradient(135deg, #14387F 0%, #061B45 100%)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Texto */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#F7931E]/20 flex items-center justify-center shrink-0">
            <Heart size={22} className="text-[#F7931E]" fill="currentColor" />
          </div>
          <div>
            <h2 id="doacoes-cta-titulo" className="text-white font-extrabold text-lg leading-snug">
              Apoie a ASESP
            </h2>
            <p className="text-white/60 text-sm mt-0.5">
              Sua contribuição fortalece a ASESP.
            </p>
          </div>
        </div>

        {/* Botão */}
        <Link
          href="/doacoes"
          className="group inline-flex items-center gap-2 bg-[#14387F] border-2 border-white text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-white hover:text-black hover:-translate-y-0.5 hover:shadow-lg shrink-0"
        >
          <Heart
            size={15}
            fill="currentColor"
            className="text-white group-hover:text-red-500 transition-colors duration-200"
          />
          Apoie a ASESP
        </Link>

      </div>
    </section>
  )
}
