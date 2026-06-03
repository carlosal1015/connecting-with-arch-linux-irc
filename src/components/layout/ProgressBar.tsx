interface Props {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: Props) {
  const progress = ((current + 1) / total) * 100

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[4px]"
      style={{ background: '#eee' }}
    >
      <div
        className="h-full transition-all duration-500 ease-out"
        style={{
          width: `${progress}%`,
          background: 'var(--color-primary)',
          borderBottom: '1px solid var(--color-primary-alt)',
        }}
      />
    </div>
  )
}
