interface Props {
  onPrev: () => void
  onNext: () => void
  canPrev: boolean
  canNext: boolean
}

export default function NavArrows({ onPrev, onNext, canPrev, canNext }: Props) {
  const base = [
    'fixed top-1/2 -translate-y-1/2 z-50',
    'w-11 h-11 rounded-sm shadow-sm',
    'flex items-center justify-center',
    'text-xl select-none',
    'transition-all duration-200',
  ].join(' ')

  const active = 'cursor-pointer hover:scale-105 active:scale-95'
  const disabled = 'cursor-default opacity-20 pointer-events-none'

  return (
    <>
      <button
        onClick={onPrev}
        className={`${base} left-6 ${canPrev ? active : disabled}`}
        style={{
          background: 'var(--color-bg-darker)',
          border: '1px solid var(--color-arch-border)',
          color: canPrev ? 'var(--color-primary)' : '#ccc',
        }}
        onMouseEnter={e => {
          if (canPrev) {
            ;(e.currentTarget as HTMLElement).style.background = 'var(--color-arch-box)'
            ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)'
          }
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLElement).style.background = 'var(--color-bg-darker)'
          ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-arch-border)'
        }}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        onClick={onNext}
        className={`${base} right-6 ${canNext ? active : disabled}`}
        style={{
          background: 'var(--color-bg-darker)',
          border: '1px solid var(--color-arch-border)',
          color: canNext ? 'var(--color-primary)' : '#ccc',
        }}
        onMouseEnter={e => {
          if (canNext) {
            ;(e.currentTarget as HTMLElement).style.background = 'var(--color-arch-box)'
            ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)'
          }
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLElement).style.background = 'var(--color-bg-darker)'
          ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-arch-border)'
        }}
        aria-label="Next slide"
      >
        ›
      </button>
    </>
  )
}
