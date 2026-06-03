import type { SlideConfig } from '../../data/slides'

interface Props {
  current: number
  total: number
  slides: SlideConfig[]
  onJump: (index: number) => void
}

export default function NavDots({ current, total, slides, onJump }: Props) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 items-center px-4 py-2 rounded-sm border shadow-sm" style={{ background: 'var(--color-bg-darker)', borderColor: 'var(--color-arch-border)' }}>
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onJump(i)}
          title={slides[i]?.label}
          className="h-2 rounded-sm transition-all duration-300 cursor-pointer"
          style={{
            width: i === current ? '24px' : '8px',
            background: i === current ? 'var(--color-primary)' : '#eee',
            border: i === current ? '1px solid var(--color-primary-alt)' : '1px solid #ddd',
          }}
          onMouseEnter={e => {
            if (i !== current) {
              ;(e.currentTarget as HTMLElement).style.background = 'var(--color-bg-darkest)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)'
            }
          }}
          onMouseLeave={e => {
            if (i !== current) {
              ;(e.currentTarget as HTMLElement).style.background = '#eee'
              ;(e.currentTarget as HTMLElement).style.borderColor = '#ddd'
            }
          }}
          aria-label={`Go to ${slides[i]?.label}`}
        />
      ))}
    </div>
  )
}
