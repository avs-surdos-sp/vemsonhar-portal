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
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { registrarDoacao } from '@/app/actions/doacoes'

const schema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  valor_pretendido: z.string().optional(),
})

type FormData = z.infer<typeof schema>

// TODO: substituir pela chave PIX real da ASESP
const CHAVE_PIX = 'pix@asesp.org.br'

export default function DoacaoForm() {
  const [status, setStatus] = useState<'idle' | 'enviando' | 'sucesso' | 'erro'>('idle')

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { nome: '', email: '', valor_pretendido: '' },
  })

  async function onSubmit(data: FormData) {
    setStatus('enviando')
    const resultado = await registrarDoacao({
      ...data,
      valor_pretendido: data.valor_pretendido ? parseFloat(data.valor_pretendido) : undefined,
    })
    if (resultado.sucesso) {
      setStatus('sucesso')
      form.reset()
    } else {
      setStatus('erro')
    }
  }

  if (status === 'sucesso') {
    return (
      <div
        role="status"
        className="rounded-lg border border-green-200 bg-green-50 p-6 space-y-4"
      >
        <p className="text-green-700 font-semibold text-lg">
          ✓ Registro recebido! Obrigado pelo apoio.
        </p>
        <p className="text-sm text-muted-foreground">
          Para concluir sua doação, realize o pagamento via PIX:
        </p>
        <div className="bg-white rounded-md border p-4 space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Chave PIX</p>
          <p className="font-mono font-semibold text-primary">{CHAVE_PIX}</p>
        </div>
        <p className="text-xs text-muted-foreground">
          Após o pagamento, envie o comprovante para o e-mail institucional da ASESP.
        </p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        aria-label="Formulário de doação"
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
          name="valor_pretendido"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor pretendido (opcional)</FormLabel>
              {/* Preset buttons */}
              <div className="flex flex-wrap gap-2 mb-2">
                {['20', '50', '100', '400'].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => field.onChange(v)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-150 ${
                      field.value === v
                        ? 'bg-[#F26522] text-white border-[#F26522]'
                        : 'bg-white text-[#1B3A6B] border-gray-200 hover:border-[#F26522] hover:text-[#F26522]'
                    }`}
                  >
                    R$ {v}
                  </button>
                ))}
              </div>
              <FormControl>
                <Input
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="Ou digite outro valor"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {status === 'erro' && (
          <p role="alert" className="text-sm text-destructive font-medium">
            Erro ao registrar. Tente novamente.
          </p>
        )}

        <Button
          type="submit"
          disabled={status === 'enviando'}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          aria-busy={status === 'enviando'}
        >
          {status === 'enviando' ? 'Registrando...' : 'Quero Doar'}
        </Button>
      </form>
    </Form>
  )
}
