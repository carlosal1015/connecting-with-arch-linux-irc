import { motion } from 'motion/react'
import { fadeIn, scaleIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import ZoomableImage from '../ui/ZoomableImage'
import kernelStats from '../../assets/images/kernelstats.png'
import editorStats from '../../assets/images/editorsstats.png'

export default function Slide01cStatsTools() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="slate" size="lg" opacity={0.05} style={{ bottom: '-10%', left: '-5%' }} />

      <motion.div
        className="w-full max-w-[1100px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>01c · Herramientas de Desarrollo</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[40px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Kernels y <span className="gradient-text">editores de texto</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 items-start">
          <motion.div variants={scaleIn} className="flex flex-col gap-2">
            <div className="rounded-xl overflow-hidden border border-[#bcd] shadow-xl bg-white p-1">
              <ZoomableImage src={kernelStats} alt="Estadísticas de Kernels" className="w-full h-auto object-contain" />
            </div>
            <p className="text-[12px] text-gray-500 font-mono text-center">
              Kernels preferidos por la comunidad. Fuente:
              <a href="https://pkgstats.archlinux.de/fun/Linux%20Kernels/current" target="_blank" rel="noopener noreferrer" className="text-[#1794D1] hover:underline"> https://pkgstats.archlinux.de/fun/Linux%20Kernels/current</a>
            </p>
          </motion.div>

          <motion.div variants={scaleIn} className="flex flex-col gap-2">
            <div className="rounded-xl overflow-hidden border border-[#bcd] shadow-xl bg-white p-1">
              <ZoomableImage src={editorStats} alt="Estadísticas de Editores" className="w-full h-auto object-contain" />
            </div>
            <p className="text-[12px] text-gray-500 font-mono text-center">
              Editores de texto y IDEs más usados. Fuente:
              <a href="https://pkgstats.archlinux.de/fun/Editors/current" target="_blank" rel="noopener noreferrer" className="text-[#1794D1] hover:underline"> https://pkgstats.archlinux.de/fun/Editors/current</a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

