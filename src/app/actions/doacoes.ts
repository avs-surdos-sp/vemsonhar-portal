'use server'

import { supabase } from '@/lib/supabase'

interface DoacaoData {
  nome: string
  email: string
  valor_pretendido?: number
}

export async function registrarDoacao(data: DoacaoData) {
  const { error } = await supabase
    .from('doacoes')
    .insert([data])

  if (error) {
    return { sucesso: false, erro: 'Erro ao registrar doação. Tente novamente.' }
  }

  return { sucesso: true }
}
