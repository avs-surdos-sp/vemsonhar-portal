import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Identidade */}
          <div>
            <p className="font-bold text-lg">ASESP</p>
            <p className="text-sm text-primary-foreground/70 mt-1">
              Associação dos Surdos do Estado de São Paulo
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-semibold text-sm mb-3">Links</p>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/sobre" className="hover:text-accent transition-colors">Sobre</Link></li>
              <li><Link href="/noticias" className="hover:text-accent transition-colors">Notícias</Link></li>
              <li><Link href="/como-se-associar" className="hover:text-accent transition-colors">Como se Associar</Link></li>
              <li><Link href="/doacoes" className="hover:text-accent transition-colors">Doações</Link></li>
              <li><Link href="/contato" className="hover:text-accent transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="font-semibold text-sm mb-3">Contato</p>
            <p className="text-sm text-primary-foreground/80">
              {/* Endereço e email serão adicionados */}
              São Paulo, SP
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} ASESP. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
