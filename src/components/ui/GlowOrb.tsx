import type { CSSProperties } from 'react'

// GlowOrb — ambient background blur circle using Arch palette
// Place behind slide content for depth. Wrap parent in position:relative.
// Example: <GlowOrb color="blue" size="lg" opacity={0.04} style={{ top: '-15%', right: '-8%' }} />
interface Props {
  color?: 'blue' | 'slate' | 'border' | 'cyan'
  size?: 'sm' | 'md' | 'lg'
  opacity?: number
  style?: CSSProperties
  className?: string
  delay?: number
}

// Arch brand color map for orbs
const colorMap = {
  blue:   '#1794D1',
  slate:  '#333333',
  border: '#bcd',
  cyan:   '#00BFFF',
}

const sizeMap = {
  sm: { dim: 300, blur: 100 },
  md: { dim: 460, blur: 150 },
  lg: { dim: 700, blur: 200 },
}

export default function GlowOrb({
  color = 'blue',
  size = 'md',
  opacity = 0.04,
  style,
  className = '',
  delay = 0,
}: Props) {
  const c = colorMap[color]
  const s = sizeMap[size]

  return (
    <div
      className={`absolute pointer-events-none rounded-full float-orb ${className}`}
      style={{
        width: `${s.dim}px`,
        height: `${s.dim}px`,
        background: c,
        opacity,
        filter: `blur(${s.blur}px)`,
        animationDelay: `${delay}s`,
        ...style,
      }}
    />
  )
}
