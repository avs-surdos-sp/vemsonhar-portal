'use server'

import { supabase } from '@/lib/supabase'

export async function inscreverNewsletter(email: string) {
  const { error } = await supabase
    .from('newsletter')
    .insert([{ email }])

  if (error?.code === '23505') {
    return { sucesso: false, erro: 'Este e-mail já está cadastrado.' }
  }

  if (error) {
    return { sucesso: false, erro: 'Erro ao cadastrar. Tente novamente.' }
  }

  return { sucesso: true }
}
