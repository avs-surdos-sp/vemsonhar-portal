'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { enviarContato } from '@/app/actions/contact'

const schema = z.object({
  nome:     z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email:    z.string().email('E-mail inválido'),
  assunto:  z.string().min(3, 'Assunto deve ter pelo menos 3 caracteres'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type FormData = z.infer<typeof schema>

export default function ContatoForm() {
  const [status, setStatus] = useState<'idle' | 'enviando' | 'sucesso' | 'erro'>('idle')

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { nome: '', email: '', assunto: '', mensagem: '' },
  })

  async function onSubmit(data: FormData) {
    setStatus('enviando')
    const resultado = await enviarContato(data)
    if (resultado.sucesso) {
      setStatus('sucesso')
      form.reset()
    } else {
      setStatus('erro')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
        aria-label="Formulário de contato"
        noValidate
      >
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input type="email" placeholder="seu@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="assunto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assunto</FormLabel>
              <FormControl>
                <Input placeholder="Sobre o que você quer falar?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mensagem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Escreva sua mensagem..."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {status === 'sucesso' && (
          <p role="status" className="text-sm text-green-600 font-medium">
            ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
          </p>
        )}

        {status === 'erro' && (
          <p role="alert" className="text-sm text-red-600 font-medium">
            Erro ao enviar. Tente novamente ou escreva para contato@avemsonhar.org.br.
          </p>
        )}

        <Button
          type="submit"
          disabled={status === 'enviando'}
          className="w-full bg-[#F26522] hover:bg-[#d4501a] text-white font-bold rounded-full"
          aria-busy={status === 'enviando'}
        >
          {status === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}
        </Button>
      </form>
    </Form>
  )
}
