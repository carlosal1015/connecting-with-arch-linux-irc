import type { ReactNode } from 'react'

// Tag — monospaced section label with Arch Blue accent
// Usage: <Tag>01 · Section Name</Tag>
interface Props {
  children: ReactNode
  dot?: boolean
}

export default function Tag({ children, dot = true }: Props) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase mb-5"
      style={{
        fontFamily: 'var(--font-mono)',
        letterSpacing: '0.1em',
        color: '#fff',
        background: 'var(--color-primary)',
        border: '1px solid var(--color-primary-alt)',
      }}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full pulse-glow"
          style={{ background: '#fff', flexShrink: 0 }}
        />
      )}
      {children}
    </span>
  )
}
