export const metadata = {
  title: 'ASESP CMS',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: '#101010' }}>
      {children}
    </div>
  )
}
