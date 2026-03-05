interface Props {
  params: Promise<{ slug: string }>
}

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params

  return (
    <main>
      <h1>Notícia: {slug}</h1>
    </main>
  )
}
