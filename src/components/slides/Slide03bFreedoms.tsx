import { motion } from 'motion/react'
import { fadeIn, scaleIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import ZoomableImage from '../ui/ZoomableImage'
import freedomsImage from '../../assets/images/4libertades.png'

// ─────────────────────────────────────────────────────────────────────────────
// FREE SOFTWARE FREEDOMS SLIDE
// ─────────────────────────────────────────────────────────────────────────────

export default function Slide03bFreedoms() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="blue" size="lg" opacity={0.06} style={{ top: '-10%', left: '-5%' }} />
      <GlowOrb color="cyan" size="md" opacity={0.04} style={{ bottom: '-12%', right: '-8%' }} delay={-6} />

      <motion.div
        className="w-full max-w-[1100px] relative z-10 flex flex-col items-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn} className="self-start">
          <Tag>02b · Bases Éticas</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[40px] text-[#333] mb-6 leading-tight self-start"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Las <span className="gradient-text">cuatro libertades</span> del Software Libre
        </motion.h2>

        <motion.div
          variants={scaleIn}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-2"
          style={{ maxHeight: '500px' }}
        >
          <ZoomableImage
            src={freedomsImage}
            alt="Las 4 libertades del software libre"
            className="w-full h-full object-contain rounded-xl"
          />
        </motion.div>

        <motion.p
          variants={fadeIn}
          className="mt-6 text-[18px] text-gray-500 italic font-medium"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          "El software libre es una cuestión de libertad, no de precio."
        </motion.p>
        <a href="https://www.fsf.org/es/about" target="_blank" rel="noopener noreferrer" className="text-[13px] font-mono text-[#1794D1] hover:underline">Fuente: https://www.fsf.org/es/about</a>
      </motion.div>
    </div>
  )
}
