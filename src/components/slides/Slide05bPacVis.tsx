import { motion } from 'motion/react'
import { fadeIn, scaleIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import ZoomableImage from '../ui/ZoomableImage'
import pacvisMain from '../../assets/images/pacvis.png'

export default function Slide05bPacVis() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="cyan" size="lg" opacity={0.06} style={{ top: '-10%', right: '-5%' }} />
      
      <motion.div
        className="w-full max-w-[1100px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>04b · Visualización de Datos</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[40px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Visualización de la base de datos local con <span className="gradient-text">PacVis</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-12 items-center">
          <motion.div variants={scaleIn} className="flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden border border-[#bcd] shadow-2xl bg-white p-1">
              <ZoomableImage src={pacvisMain} alt="PacVis Visualization" className="w-full h-auto object-contain" />
            </div>
            <p className="text-[14px] text-gray-500 font-mono text-center italic">
              "Visualizar la jerarquía de dependencias como un mapa interactivo"
            </p>
            <p className="text-[12px] text-gray-400 font-mono text-center">
              Fuente: <a href="https://farseerfc.me/en/pacvis.html" target="_blank" rel="noopener noreferrer" className="text-[#1794D1] hover:underline">https://farseerfc.me/en/pacvis.html</a>
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#333] text-[18px]">Topología por Capas</h3>
                  <p className="text-gray-600 text-[15px]">Ordena los paquetes por niveles: desde los cimientos (glibc) hasta el software de usuario.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cyan-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#333] text-[18px]">Codificación Visual</h3>
                  <p className="text-gray-600 text-[15px]">
                    Distingue instalaciones <span className="text-purple-600 font-semibold">manuales</span> vs <span className="text-orange-600 font-semibold">dependencias</span> y detecta dependencias circulares.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-slate-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#333] text-[18px]">Descubrimiento de Huérfanos</h3>
                  <p className="text-gray-600 text-[15px]">Identifica paquetes aislados y "huérfanos ocultos" que pacman -Qtd podría pasar por alto.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-lg">
              <p className="text-[14px] text-blue-800 leading-relaxed italic">
                "Pacman Visualize (PacVis) utiliza d3.js para transformar la base de datos local en un grafo dirigido interactivo."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

