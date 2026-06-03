import type { ReactNode } from 'react'

// Arch Linux color variants
type Variant = 'cyan' | 'blue' | 'slate' | 'arch' | 'yellow' | 'neutral'

interface Props {
  children: ReactNode
  variant?: Variant
}

const variants: Record<Variant, { bg: string; color: string; border: string }> = {
  arch:    { bg: 'var(--color-primary)', color: '#fff', border: 'var(--color-primary)' },
  cyan:    { bg: 'var(--color-arch-box)', color: 'var(--color-primary)', border: 'var(--color-arch-border)' },
  blue:    { bg: 'var(--color-bg-darkest)', color: 'var(--color-primary-alt)', border: '#99c' },
  slate:   { bg: '#eeeeee', color: 'var(--color-slate)', border: '#ccc' },
  yellow:  { bg: '#ffd', color: '#660', border: '#bdb' },
  neutral: { bg: '#fff', color: 'var(--color-gray)', border: '#ddd' },
}

export default function Badge({ children, variant = 'cyan' }: Props) {
  const v = variants[variant]
  return (
    <span
      className="inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded-sm whitespace-nowrap border"
      style={{ background: v.bg, color: v.color, borderColor: v.border }}
    >
      {children}
    </span>
  )
}
