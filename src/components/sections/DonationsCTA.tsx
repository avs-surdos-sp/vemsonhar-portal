import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, UserPlus } from 'lucide-react'

export default function DoacoesCTA() {
  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      aria-labelledby="doacoes-cta-titulo"
      style={{ background: 'linear-gradient(135deg, #F26522 0%, #d4501a 60%, #1B3A6B 100%)' }}
    >
      {/* Decorative elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #1B3A6B 0%, transparent 70%)' }}
        />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
          <Heart className="text-white" size={30} fill="white" />
        </div>

        <p className="section-label text-white/70 mb-4">Faça a diferença</p>
        <h2
          id="doacoes-cta-titulo"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight"
        >
          Apoie a ASESP
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed mb-3">
          Sua doação fortalece a luta pelos direitos da comunidade surda paulista.
        </p>
        <p className="text-white/60 text-base mb-10">
          💡 R$ 40 alimenta 1 encontro inteiro · R$ 80 apoia 1 idoso no mês
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="font-bold px-10 bg-white text-[#1B3A6B] hover:bg-white/90 shadow-xl hover:-translate-y-0.5 transition-all duration-200 rounded-full"
          >
            <Link href="/donations" className="flex items-center gap-2">
              <Heart size={18} className="text-[#F26522]" />
              Quero Contribuir
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-semibold px-8 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-200 rounded-full backdrop-blur-sm"
          >
            <Link href="/how-to-join" className="flex items-center gap-2">
              <UserPlus size={18} />
              Seja Associado
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
