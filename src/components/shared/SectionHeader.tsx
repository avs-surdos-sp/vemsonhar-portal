interface SectionHeaderProps {
  label: string
  title: string
  headingId?: string
  description?: string
  labelColor?: string
  titleColor?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  label,
  title,
  headingId,
  description,
  labelColor = '#F26522',
  titleColor = '#1B3A6B',
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <p className="section-label mb-3" style={{ color: labelColor }}>
        {label}
      </p>
      <h2
        id={headingId}
        className="text-3xl font-extrabold tracking-tight"
        style={{ color: titleColor }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed mt-4">
          {description}
        </p>
      )}
    </div>
  )
}
