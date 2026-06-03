interface Props {
  current: number
  total: number
}

export default function SlideCounter({ current, total }: Props) {
  return (
    <div
      className="fixed bottom-[26px] right-8 z-50 text-[11px] tabular-nums font-bold"
      style={{
        fontFamily: 'var(--font-mono)',
        color: 'var(--color-gray)',
        background: 'var(--color-arch-box)',
        padding: '2px 8px',
        border: '1px solid var(--color-arch-border)',
        borderRadius: '2px',
      }}
    >
      {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
  )
}
