import { motion } from 'motion/react'
import { fadeIn, scaleIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import ZoomableImage from '../ui/ZoomableImage'
import pactreeGeneric from '../../assets/images/pacvis-pactree.png'
import pactreeNumpy from '../../assets/images/pacvis-pactree-numpy.png'
import pactreeRust from '../../assets/images/pacvis-pactree-rust.png'

export default function Slide05cPactree() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="blue" size="lg" opacity={0.05} style={{ bottom: '-10%', right: '-5%' }} />
      
      <motion.div
        className="w-full max-w-[1100px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>04c · Relaciones de Paquetes</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[40px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Grafo de <span className="gradient-text">dependencias</span>
        </motion.h2>

        <div className="grid grid-cols-3 gap-6 items-start">
          <motion.div variants={scaleIn} className="flex flex-col gap-3">
            <div className="rounded-lg overflow-hidden border border-[#bcd] shadow-md bg-white p-1 aspect-video flex items-center">
              <ZoomableImage src={pactreeGeneric} alt="Pactree Generic" className="w-full h-auto object-contain" />
            </div>
            <p className="text-[12px] text-gray-500 font-mono text-center">Python Core</p>
          </motion.div>

          <motion.div variants={scaleIn} className="flex flex-col gap-3">
            <div className="rounded-lg overflow-hidden border border-[#bcd] shadow-md bg-white p-1 aspect-video flex items-center">
              <ZoomableImage src={pactreeNumpy} alt="Pactree Numpy" className="w-full h-auto object-contain" />
            </div>
            <p className="text-[12px] text-gray-500 font-mono text-center">Numpy Stack</p>
          </motion.div>

          <motion.div variants={scaleIn} className="flex flex-col gap-3">
            <div className="rounded-lg overflow-hidden border border-[#bcd] shadow-md bg-white p-1 aspect-video flex items-center">
              <ZoomableImage src={pactreeRust} alt="Pactree Rust" className="w-full h-auto object-contain" />
            </div>
            <p className="text-[12px] text-gray-500 font-mono text-center">Rust Toolchain</p>
          </motion.div>
        </div>

        <motion.p variants={fadeIn} className="mt-8 text-center text-gray-500 text-[14px]">
          Visualización de dependencias directas e indirectas usando <code>pactree</code>.
        </motion.p>
      </motion.div>
    </div>
  )
}
