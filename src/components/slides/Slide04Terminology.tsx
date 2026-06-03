import { motion } from 'motion/react'
import { fadeIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import Layer from '../ui/Layer'

// ─────────────────────────────────────────────────────────────────────────────
// TERMINOLOGY SLIDE
// ─────────────────────────────────────────────────────────────────────────────

const terms = [
  {
    number: '01',
    title: 'makepkg',
    description: 'Herramienta que lee el PKGBUILD para descargar fuentes, resolver dependencias y empaquetar.',
    color: 'blue' as const,
  },
  {
    number: '02',
    title: 'pacman',
    description: 'El gestor de paquetes oficial escrito en C. Maneja paquetes binarios (.pkg.tar.zst).',
    color: 'cyan' as const,
  },
  {
    number: '03',
    title: 'AUR (Arch User Repository)',
    description: 'Repositorio comunitario de scripts PKGBUILD. No contiene binarios, solo instrucciones.',
    color: 'slate' as const,
  },
  {
    number: '04',
    title: 'Package Base',
    description: 'Conjunto de archivos fuente utilizados para construir uno o más paquetes (split packages).',
    color: 'blue' as const,
  },
]

export default function Slide04Terminology() {
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
          <Tag>03 · Terminología Arch Linux</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[48px] text-[#333] mb-10 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Conceptos <span className="gradient-text">fundamentales</span>
        </motion.h2>

        <motion.div variants={stagger} className="flex flex-col gap-4">
          {terms.map(item => (
            <motion.div key={item.number} variants={fadeIn}>
              <Layer number={item.number} title={item.title} color={item.color}>
                <span className="text-[18px]">{item.description}</span>
              </Layer>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={fadeIn}
          className="mt-8 flex justify-between items-end"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-[#1794D1] font-bold uppercase tracking-wider font-mono">Referencia Útil</span>
            <a 
              href="https://wiki.archlinux.org/title/Pacman/Rosetta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[14px] text-gray-500 hover:text-[#1794D1] transition-colors"
            >
              Wiki: Pacman Rosetta (Equivalencia entre distros)
            </a>
          </div>
          <span className="text-[12px] text-gray-400 italic font-mono">
            <a 
              href="https://wiki.archlinux.org/title/Pacman/Rosetta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[14px] text-gray-500 hover:text-[#1794D1] transition-colors"
            >
              Fuente: wiki.archlinux.org/title/Arch_terminology
            </a>
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
