import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { stagger, fadeIn } from '../../utils/animations'

// FlowDiagram — vertical node pipeline using Arch Linux color palette
// Usage:
//   const nodes: FlowNodeDef[] = [
//     { id: 'a', label: 'Step One',   sublabel: 'description', color: 'cyan',  icon: <YourIcon /> },
//     { id: 'b', label: 'Step Two',   sublabel: 'description', color: 'blue',  edgeLabel: 'via HTTP' },
//     { id: 'c', label: 'Step Three', sublabel: 'description', color: 'slate' },
//   ]
//   <FlowDiagram nodes={nodes} />
type NodeColor = 'cyan' | 'blue' | 'slate' | 'arch' | 'neutral'

export interface FlowNodeDef {
  id: string
  label: string
  sublabel?: string
  icon?: ReactNode
  color?: NodeColor
  badge?: string
  edgeLabel?: string
}

interface Props {
  nodes: FlowNodeDef[]
  animate?: boolean
  compact?: boolean
}

const palette: Record<NodeColor, { border: string; bg: string; accent: string; iconBg: string }> = {
  arch:    { border: '#1794D1', bg: '#ecf2f5', accent: '#1794D1', iconBg: '#1794D122' },
  cyan:    { border: '#1794D1', bg: '#ecf2f5', accent: '#1794D1', iconBg: '#1794D122' },
  blue:    { border: '#08c',    bg: '#e4eeff', accent: '#08c',    iconBg: '#08c22' },
  slate:   { border: '#333',    bg: '#eeeeee', accent: '#333',    iconBg: '#33322' },
  neutral: { border: '#bcd',    bg: '#ffffff', accent: '#666',    iconBg: '#eee' },
}

interface ConnectorProps {
  label?: string
  fromColor: string
  toColor: string
  compact: boolean
}

function Connector({ label, fromColor, toColor, compact }: ConnectorProps) {
  const h = compact ? 28 : 36
  return (
    <div className="relative flex items-stretch" style={{ height: h }}>
      <div className="absolute left-0 right-0 flex flex-col items-center" style={{ height: h }}>
        <div
          style={{
            width: 1.5,
            height: h - 7,
            background: `linear-gradient(to bottom, ${fromColor}88, ${toColor}aa)`,
          }}
        />
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" style={{ flexShrink: 0 }}>
          <path
            d="M1 1 L5 6 L9 1"
            stroke={`${toColor}cc`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {label && (
        <div
          className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap"
          style={{ left: 'calc(50% + 14px)' }}
        >
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10,
              color: '#999',
              letterSpacing: '0.02em',
              fontWeight: 600,
            }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  )
}

export default function FlowDiagram({ nodes, animate = true, compact = false }: Props) {
  const Wrapper = animate ? motion.div : 'div'
  const Item = animate ? motion.div : 'div'
  const py = compact ? 'py-2 px-3' : 'py-3 px-4'
  const iconSize = compact ? 'w-8 h-8' : 'w-9 h-9'

  return (
    <Wrapper
      {...(animate
        ? { variants: stagger, initial: 'hidden', animate: 'visible' }
        : {})}
      className="flex flex-col"
    >
      {nodes.map((node, i) => {
        const c = palette[node.color || 'neutral']
        const nextNode = nodes[i + 1]
        const nextC = nextNode ? palette[nextNode.color || 'neutral'] : null

        return (
          <div key={node.id}>
            <Item
              {...(animate ? { variants: fadeIn } : {})}
              className={`flex items-center gap-3 rounded-sm shadow-sm border ${py}`}
              style={{
                background: c.bg,
                borderColor: '#bcd',
                borderLeft: `3px solid ${c.border}`,
              }}
            >
              {node.icon && (
                <div
                  className={`${iconSize} rounded-sm flex items-center justify-center flex-shrink-0 border`}
                  style={{ background: '#fff', color: c.accent, borderColor: '#bcd' }}
                >
                  {node.icon}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div
                  className="text-sm font-bold text-[#333] leading-tight"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {node.label}
                </div>
                {node.sublabel && (
                  <div
                    className="text-[11px] mt-0.5 leading-tight"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      color: c.accent,
                      fontWeight: 600,
                    }}
                  >
                    {node.sublabel}
                  </div>
                )}
              </div>
              {node.badge && (
                <span
                  className="flex-shrink-0 text-[10px] px-2 py-0.5 rounded-sm border font-bold"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    background: '#fff',
                    color: c.accent,
                    borderColor: '#bcd',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {node.badge}
                </span>
              )}
            </Item>
            {nextC && (
              <Connector
                label={node.edgeLabel}
                fromColor={c.border}
                toColor={nextC.border}
                compact={compact}
              />
            )}
          </div>
        )
      })}
    </Wrapper>
  )
}
