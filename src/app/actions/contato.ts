'use server'

import { supabase } from '@/lib/supabase'

interface ContatoData {
  nome: string
  email: string
  mensagem: string
}

export async function enviarContato(data: ContatoData) {
  const { error } = await supabase
    .from('contatos')
    .insert([data])

  if (error) {
    return { sucesso: false, erro: 'Erro ao enviar mensagem. Tente novamente.' }
  }

  return { sucesso: true }
}
