import ContatoForm from '@/components/shared/ContatoForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato | ASESP',
  description: 'Entre em contato com a ASESP — Associação dos Surdos do Estado de São Paulo.',
}

export default function ContatoPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-8">Contato</h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Informações */}
        <section aria-labelledby="info-titulo">
          <h2 id="info-titulo" className="text-xl font-semibold text-primary mb-6">
            Fale conosco
          </h2>
          <p className="text-muted-foreground mb-6">
            Entre em contato com a ASESP para dúvidas, parcerias ou suporte.
            Nossa equipe responde em até 3 dias úteis.
          </p>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-primary">Endereço</dt>
              {/* TODO: substituir pelo endereço real */}
              <dd className="text-muted-foreground">São Paulo, SP — Brasil</dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">E-mail</dt>
              {/* TODO: substituir pelo e-mail real */}
              <dd>
                <a
                  href="mailto:contato@asesp.org.br"
                  className="text-accent hover:underline"
                >
                  contato@asesp.org.br
                </a>
              </dd>
            </div>
          </dl>
        </section>

        {/* Formulário */}
        <section aria-labelledby="form-contato-titulo">
          <h2 id="form-contato-titulo" className="text-xl font-semibold text-primary mb-6">
            Envie uma mensagem
          </h2>
          <ContatoForm />
        </section>

      </div>
    </main>
  )
}
