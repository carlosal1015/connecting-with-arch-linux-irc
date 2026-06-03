import { motion } from 'motion/react'
import { fadeIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import Layer from '../ui/Layer'

// ─────────────────────────────────────────────────────────────────────────────
// AGENDA SLIDE
// ─────────────────────────────────────────────────────────────────────────────

const agenda = [
  {
    number: '01',
    title: 'Filosofía de Arch Linux, estadísticas y su terminología',
    description: 'La distribución, el principio KISS, Arch Linux en números y su documentación (10 min).',
    color: 'blue' as const,
  },
  {
    number: '02',
    title: 'Anatomía de un repositorio de paquete en AUR',
    description: 'PKGBUILD, .SRCINFO, .nvchecker.toml y estructura del PKGBUILD (5 min).',
    color: 'cyan' as const,
  },
  {
    number: '03',
    title: 'Flujo Profesional',
    description: 'Chroot limpio, pkgctl y validación con namcap (10 min).',
    color: 'slate' as const,
  },
  {
    number: '04',
    title: 'Automatización y Comunidad',
    description: 'Mantenimiento moderno, IRC y ética (5 min).',
    color: 'blue' as const,
  },
]

export default function Slide02Agenda() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="blue"  size="md" opacity={0.05} style={{ top: '-5%', right: '-5%' }} />
      <GlowOrb color="slate" size="sm" opacity={0.06} style={{ bottom: '-8%', left: '-4%' }} delay={-8} />

      <motion.div
        className="w-full max-w-[960px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>01 · Hoja de Ruta</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[48px] text-[#333] mb-10 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Agenda del <span className="gradient-text">taller</span>
        </motion.h2>

        <motion.div variants={stagger} className="flex flex-col gap-4">
          {agenda.map(item => (
            <motion.div key={item.number} variants={fadeIn}>
              <Layer number={item.number} title={item.title} color={item.color}>
                <span className="text-[18px]">{item.description}</span>
              </Layer>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="mt-10 p-5 rounded-2xl bg-[#1794D1]/5 border border-[#1794D1]/20 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1794D1] flex items-center justify-center text-white shadow-lg shadow-blue-200/50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 17l6-6-6-6M12 19h8" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-[#1794D1] uppercase tracking-wider font-mono">Demostración en Vivo</span>
            <span className="text-[17px] text-[#333]">Empaquetado práctico paso a paso: <a href="https://aur.archlinux.org/packages/miniconda3" target="_blank" rel="noopener noreferrer" className="hover:underline"><code className="bg-white px-2 py-0.5 rounded border border-gray-200 text-[#1794D1]">miniconda3</code></a></span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
