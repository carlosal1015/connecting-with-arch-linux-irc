import { motion } from 'motion/react'
import { fadeIn, fadeInLeft, fadeInRight, scaleIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import GlowOrb from '../ui/GlowOrb'

// ─────────────────────────────────────────────────────────────────────────────
// PHILOSOPHY SLIDE
// ─────────────────────────────────────────────────────────────────────────────

const principles = [
  {
    variant: 'blue' as const,
    badge: { label: 'Técnica', color: 'blue' as const },
    title: 'Principio KISS',
    description: 'Simplicidad, Modernidad, Pragmatismo, Centrado en los usuarios y versatilidad. "Keep It Simple, Stupid".',
    points: ['Sin parches innecesarios', 'Elegancia en el código', 'Responsabilidad total'],
    accentColor: '#1794D1',
  },
  {
    variant: 'cyan' as const,
    badge: { label: 'Comunidad', color: 'cyan' as const },
    title: 'La Wiki y AUR',
    description: 'Documentación viva y el repositorio de la comunidad (+80k).',
    points: ['Arch Wiki: La referencia', 'AUR: Software libre', 'Gobernanza via RFC'],
    accentColor: '#00BFFF',
  },
  {
    variant: 'slate' as const,
    badge: { label: 'Academia', color: 'slate' as const },
    title: 'Ecosistema global',
    description: 'Proyectos masivos impulsados por la comunidad y universidades.',
    points: [
      <>
        <a href="https://github.com/arch4edu" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1794D1]">arch4edu</a> (Tsinghua University)
      </>,
      <>
        <a href="https://www.archlinuxcn.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1794D1]">Arch Linux CN</a> & <a href="https://blackarch.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1794D1]">BlackArch</a>
      </>,
      <>
        <a href="https://bioarchlinux.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1794D1]">BioArchLinux</a> & <a href="https://wiki.archlinux.org/title/ROS" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1794D1]">ROS on Arch Linux</a>
      </>,
      <>
        <a href="https://archlinuxarm.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1794D1]">Arch Linux ARM</a> & <a href="https://archriscv.felixc.at/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1794D1]">ArchRISCV</a>
      </>
    ],
    accentColor: '#7A9BB5',
  },
]

export default function Slide03Philosophy() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="cyan"  size="md" opacity={0.05} style={{ top: '-5%', left: '-4%' }} />
      <GlowOrb color="slate" size="sm" opacity={0.06} style={{ bottom: '-8%', right: '-5%' }} delay={-7} />

      <motion.div
        className="w-full max-w-[1100px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>02 · Filosofía Arch Linux</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[44px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Simplicidad y <span className="gradient-text">responsabilidad</span>
        </motion.h2>

        <div className="grid grid-cols-3 gap-5 mb-8">
          {principles.map((card, i) => {
            const variant = i === 0 ? fadeInLeft : i === principles.length - 1 ? fadeInRight : fadeIn
            return (
              <motion.div key={card.title} variants={variant}>
                <Card variant={card.variant} className="h-full flex flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <Badge variant={card.badge.color}>{card.badge.label}</Badge>
                  </div>
                  <div
                    className="text-lg font-bold text-[#333]"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {card.title}
                  </div>
                  <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(51,51,51,0.7)' }}>
                    {card.description}
                  </p>
                  <ul className="flex flex-col gap-2 mt-auto">
                    {card.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-[14px]"
                        style={{ color: 'rgba(51,51,51,0.8)' }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: card.accentColor }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          variants={scaleIn}
          className="rounded-xl p-5 flex items-center gap-4"
          style={{ background: 'rgba(51,51,51,0.03)', border: '1px solid rgba(51,51,51,0.1)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2" style={{ flexShrink: 0 }}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <div className="flex flex-col gap-1">
            <p className="text-[16px]" style={{ color: 'rgba(51,51,51,0.7)' }}>
              Las decisiones se toman mediante <strong className="text-[#333]">RFCs (Request for Comments)</strong>, una forma para que los colaboradores propongan, diseñen y discutan nuevas características y cambios en la dirección del proyecto.
            </p>
            <a href="https://rfc.archlinux.page" target="_blank" rel="noopener noreferrer" className="text-[13px] font-mono text-[#1794D1] hover:underline">Fuente: https://rfc.archlinux.page</a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
