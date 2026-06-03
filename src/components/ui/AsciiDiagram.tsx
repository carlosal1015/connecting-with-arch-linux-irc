// AsciiDiagram — monospaced code/diagram block with optional label and line highlight
// The highlighted line is rendered in Arch Blue (#1794D1).
//
// Usage:
//   <AsciiDiagram
//     label="terminal"
//     highlight="Success"
//     code={`$ command arg1 arg2\n  → Running...\n  → Success`}
//   />
interface Props {
  code: string
  label?: string
  highlight?: string
}

export default function AsciiDiagram({ code, label, highlight }: Props) {
  const lines = code.split('\n')

  return (
    <div
      className="rounded-sm overflow-hidden border shadow-md"
      style={{
        background: '#232323',
        borderColor: '#333',
      }}
    >
      {label && (
        <div
          className="px-4 py-2 text-[10px] uppercase font-bold border-b"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            color: '#1794D1',
            borderColor: '#333',
            background: '#1a1a1a',
            letterSpacing: '0.1em',
          }}
        >
          {label}
        </div>
      )}
      <pre
        className="px-5 py-4 text-[12.5px] leading-relaxed overflow-auto"
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          color: '#eee',
          margin: 0,
        }}
      >
        {lines.map((line, i) => {
          if (highlight && line.includes(highlight)) {
            return (
              <span key={i}>
                <span style={{ color: '#1794D1', fontWeight: 700 }}>{line}</span>
                {'\n'}
              </span>
            )
          }
          return <span key={i}>{line}{'\n'}</span>
        })}
      </pre>
    </div>
  )
}
