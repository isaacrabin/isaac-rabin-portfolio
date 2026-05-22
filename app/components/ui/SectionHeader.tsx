import Reveal from '@/app/components/animations/Reveal'

interface SectionHeaderProps {
  tag: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <Reveal>
        <p className="text-accent uppercase tracking-[3px] text-sm font-semibold mb-3">
          {tag}
        </p>
      </Reveal>
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-extrabold gradient-text mb-4">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal>
          <p className="text-text3 max-w-2xl mx-auto">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
