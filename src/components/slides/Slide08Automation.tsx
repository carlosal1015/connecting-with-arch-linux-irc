import { motion } from 'motion/react'
import { fadeIn, scaleIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import Card from '../ui/Card'
import GlowOrb from '../ui/GlowOrb'

// ─────────────────────────────────────────────────────────────────────────────
// AUTOMATION SLIDE
// ─────────────────────────────────────────────────────────────────────────────

const tools = [
  {
    title: 'Monitoreo upstream',
    desc: 'Uso de nvchecker y aur-out-of-date para detectar nuevas versiones.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Ecosistema global',
    desc: 'Validación en repology.org, libraries.io y newreleases.io.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'CI/CD Avanzado',
    desc: 'Pipeline Cactus: Detector -> Scheduler -> Builder -> Publisher.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <path d="M6 10v4M18 10v4" />
      </svg>
    ),
  },
]

export default function Slide08Automation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="cyan"  size="md" opacity={0.05} style={{ top: '-5%', right: '-5%' }} />
      <GlowOrb color="blue"  size="sm" opacity={0.06} style={{ bottom: '-8%', left: '-4%' }} delay={-5} />

      <motion.div
        className="w-full max-w-[1000px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>07 · Mantenimiento Moderno</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[48px] text-[#333] mb-10 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Automatización y <span className="gradient-text">escalabilidad</span>
        </motion.h2>

        <div className="grid grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <motion.div key={i} variants={scaleIn}>
              <Card variant="arch" className="p-8 flex flex-col items-center text-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">
                  {tool.icon}
                </div>
                <h3 className="font-bold text-xl text-[#333]">{tool.title}</h3>
                <p className="text-[16px] text-gray-500 leading-relaxed">{tool.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
