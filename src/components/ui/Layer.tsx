import type { ReactNode } from 'react'

// Layer — numbered list item with an Arch Blue accent
// Usage:
//   <Layer number="01" title="First step" color="cyan">
//     Description of the step
//   </Layer>
interface Props {
  number: string | number
  title: string
  children: ReactNode
  color?: 'cyan' | 'blue' | 'slate'
}

const colorMap = {
  cyan:  { accent: 'var(--color-primary)', bg: 'var(--color-arch-box)' },
  blue:  { accent: 'var(--color-primary-alt)',    bg: 'var(--color-bg-darkest)' },
  slate: { accent: 'var(--color-slate)',    bg: '#eeeeee' },
}

export default function Layer({ number, title, children, color = 'cyan' }: Props) {
  const c = colorMap[color]

  return (
    <div
      className="flex items-start gap-3.5 px-4 py-3.5 rounded-sm border shadow-sm"
      style={{
        borderLeft: `4px solid ${c.accent}`,
        background: 'var(--color-bg-darker)',
        borderColor: 'var(--color-arch-border)',
      }}
    >
      <div
        className="flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center mt-0.5 border"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          fontWeight: 700,
          color: c.accent,
          background: c.bg,
          borderColor: 'var(--color-arch-border)',
        }}
      >
        {number}
      </div>
      <div className="flex-1 min-w-0">
        <div
          className="text-sm font-bold text-[var(--color-slate)] mb-1"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </div>
        <div className="text-[13px] leading-relaxed text-[var(--color-gray)]">
          {children}
        </div>
      </div>
    </div>
  )
}
