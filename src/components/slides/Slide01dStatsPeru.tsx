import { motion } from 'motion/react'
import { fadeIn, scaleIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import ZoomableImage from '../ui/ZoomableImage'
import peruStatsMap from '../../assets/images/perustats.png'
import peruStatsTrend from '../../assets/images/statsperu.png'

export default function Slide01dStatsPeru() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="blue" size="lg" opacity={0.05} style={{ top: '-10%', left: '-5%' }} />

      <motion.div
        className="w-full max-w-[1100px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>01d · Arch Linux en el Perú</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[40px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Presencia local y <span className="gradient-text">tendencias</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 items-start">
          <motion.div variants={scaleIn} className="flex flex-col gap-2">
            <div className="rounded-xl overflow-hidden border border-[#bcd] shadow-xl bg-white p-1">
              <ZoomableImage src={peruStatsMap} alt="Presencia de Arch Linux en Perú" className="w-full h-auto object-contain" />
            </div>
            <p className="text-[12px] text-gray-500 font-mono text-center">
              Distribución geográfica (estimada). Fuente:
              <a href="https://pkgstats.archlinux.de/countries/pe" target="_blank" rel="noopener noreferrer" className="text-[#1794D1] hover:underline"> https://pkgstats.archlinux.de/countries/pe</a>
            </p>
          </motion.div>

          <motion.div variants={scaleIn} className="flex flex-col gap-2">
            <div className="rounded-xl overflow-hidden border border-[#bcd] shadow-xl bg-white p-1">
              <ZoomableImage src={peruStatsTrend} alt="Tendencia de Arch Linux en Perú" className="w-full h-auto object-contain" />
            </div>
            <p className="text-[12px] text-gray-500 font-mono text-center">
              Crecimiento y adopción local. Fuente:
              <a href="https://pkgstats.archlinux.de/countries/pe" target="_blank" rel="noopener noreferrer" className="text-[#1794D1] hover:underline"> https://pkgstats.archlinux.de/countries</a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

