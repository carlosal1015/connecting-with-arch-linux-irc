import { motion } from 'motion/react'
import { fadeIn, scaleIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import ZoomableImage from '../ui/ZoomableImage'
import distStats from '../../assets/images/distributionsarchbased.png'
import deStats from '../../assets/images/desktopenvironment.png'

export default function Slide01bStatsEcosystem() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="blue" size="lg" opacity={0.05} style={{ top: '-10%', right: '-5%' }} />
      
      <motion.div
        className="w-full max-w-[1100px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>01b · Arch Linux en números</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[40px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Ecosistema y <span className="gradient-text">popularidad</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 items-start">
          <motion.div variants={scaleIn} className="flex flex-col gap-2">
            <div className="rounded-xl overflow-hidden border border-[#bcd] shadow-xl bg-white p-1">
              <ZoomableImage src={distStats} alt="Distribuciones basadas en Arch Linux" className="w-full h-auto object-contain" />
            </div>
            <p className="text-[12px] text-gray-500 font-mono text-center">
              Uso relativo de distribuciones basadas en Arch Linux. Fuente:
              <a href="https://pkgstats.archlinux.de" target="_blank" rel="noopener noreferrer" className="text-[#1794D1] hover:underline"> https://pkgstats.archlinux.de/compare/operating-systems</a>
            </p>
          </motion.div>

          <motion.div variants={scaleIn} className="flex flex-col gap-2">
            <div className="rounded-xl overflow-hidden border border-[#bcd] shadow-xl bg-white p-1">
              <ZoomableImage src={deStats} alt="Estadísticas de Entornos de Escritorio" className="w-full h-auto object-contain" />
            </div>
            <p className="text-[12px] text-gray-500 font-mono text-center">
              Popularidad de entornos de escritorio. Fuente:
              <a href="https://pkgstats.archlinux.de/fun/Desktop%20Environments/current" target="_blank" rel="noopener noreferrer" className="text-[#1794D1] hover:underline"> https://pkgstats.archlinux.de/fun/Desktop%20Environments/current</a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
