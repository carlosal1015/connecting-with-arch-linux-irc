import Watermark from '../ui/Watermark'

interface Orb {
  top?: string
  left?: string
  bottom?: string
  right?: string
  size: number
  color: string
  opacity: number
  blur: number
  delay: string | number
}

const BG_ORBS: Orb[] = [
  { top: '-10%',    left: '-5%',  size: 700, color: '#1794D1', opacity: 0.04, blur: 200, delay: '0s' },
  { bottom: '-15%', right: '-8%', size: 600, color: '#bcd',     opacity: 0.15, blur: 180, delay: '-8s' },
  { top: '40%',     right: '15%', size: 450, color: '#333333', opacity: 0.02, blur: 150, delay: '-16s' },
]

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Watermark opacity={0.05} size={850} />

      {BG_ORBS.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full float-orb"
          style={{
            top: orb.top,
            left: orb.left,
            bottom: orb.bottom,
            right: orb.right,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            opacity: orb.opacity,
            filter: `blur(${orb.blur}px)`,
            animationDelay: typeof orb.delay === 'number' ? `${orb.delay}s` : orb.delay,
          }}
        />
      ))}
    </div>
  )
}
