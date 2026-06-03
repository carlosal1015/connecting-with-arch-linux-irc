import type { ReactNode } from 'react'

// Arch Linux color variants
type Variant = 'glass' | 'cyan' | 'blue' | 'slate' | 'arch'

interface Props {
  children: ReactNode
  variant?: Variant
  className?: string
  padding?: string
}

const variantStyles: Record<Variant, { bg: string; border: string; topBorder?: string }> = {
  glass: { bg: 'rgba(255,255,255,0.8)',  border: 'var(--color-arch-border)' },
  arch:  { bg: 'var(--color-bg-darker)', border: 'var(--color-arch-border)', topBorder: 'var(--color-primary)' },
  cyan:  { bg: 'var(--color-arch-box)',    border: 'var(--color-arch-border)', topBorder: 'var(--color-primary)' },
  blue:  { bg: 'var(--color-bg-darkest)', border: '#99c', topBorder: 'var(--color-primary-alt)' },
  slate: { bg: '#eeeeee',                border: '#ccc', topBorder: 'var(--color-slate)' },
}

export default function Card({
  children,
  variant = 'glass',
  className = '',
  padding = 'p-6',
}: Props) {
  const s = variantStyles[variant]
  return (
    <div
      className={`rounded-sm shadow-sm ${padding} ${className}`}
      style={{
        background: s.bg,
        border: `1px solid ${s.border}`,
        borderTop: s.topBorder ? `3px solid ${s.topBorder}` : `1px solid ${s.border}`,
      }}
    >
      {children}
    </div>
  )
}
