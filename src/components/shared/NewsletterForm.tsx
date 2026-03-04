'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { inscreverNewsletter } from '@/app/actions/newsletter'

const schema = z.object({
  email: z.string().email('E-mail inválido'),
})

type FormData = z.infer<typeof schema>

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'enviando' | 'sucesso' | 'erro'>('idle')
  const [erro, setErro] = useState('')

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
  })

  async function onSubmit(data: FormData) {
    setStatus('enviando')
    const resultado = await inscreverNewsletter(data.email)
    if (resultado.sucesso) {
      setStatus('sucesso')
      form.reset()
    } else {
      setErro(resultado.erro ?? 'Erro ao cadastrar.')
      setStatus('erro')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row gap-3"
        aria-label="Formulário de inscrição na newsletter"
        noValidate
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  aria-label="Seu e-mail para newsletter"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={status === 'enviando'}
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
          aria-busy={status === 'enviando'}
        >
          {status === 'enviando' ? 'Inscrevendo...' : 'Inscrever-se'}
        </Button>
      </form>

      {status === 'sucesso' && (
        <p role="status" className="text-sm text-green-600 font-medium mt-2">
          ✓ Inscrição realizada com sucesso!
        </p>
      )}

      {status === 'erro' && (
        <p role="alert" className="text-sm text-destructive font-medium mt-2">
          {erro}
        </p>
      )}
    </Form>
  )
}
