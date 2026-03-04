interface LibrasVideoProps {
  videoId: string
  title?: string
}

export default function LibrasVideo({ videoId, title = "Vídeo em Libras" }: LibrasVideoProps) {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        aria-label={title}
      />
    </div>
  )
}
