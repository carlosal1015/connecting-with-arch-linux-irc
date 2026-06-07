import { motion } from 'motion/react'
import { fadeIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import Card from '../ui/Card'
import carlosAvatar from '../../assets/images/carlos.jpg'

export default function Slide03AboutMe() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="blue" size="lg" opacity={0.06} style={{ top: '10%', right: '-10%' }} />

      <motion.div
        className="w-full max-w-[960px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>02 · Sobre Mí</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[42px] text-[#333] mb-10 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Presentación del <span className="gradient-text">Ponente</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-8">
          <motion.div variants={fadeIn} className="flex flex-col gap-6">
            <Card variant="glass" padding="p-8" className="flex items-center gap-6 h-full">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0" style={{ border: '2px solid rgba(23,148,209,0.3)' }}>
                <img src={carlosAvatar} alt="Carlos Aznarán" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#333] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>Carlos Aznarán</h3>
                <p className="text-[#1794D1] font-semibold mb-2">Matemático (UNI, Perú)</p>
                <ul className="text-sm space-y-1" style={{ color: 'rgba(51,51,51,0.7)' }}>
                  <li>• Mantenedor activo en AUR</li>
                  <li>• Colaborador de arch4edu</li>
                </ul>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={stagger} className="flex flex-col gap-4">
            <motion.div variants={fadeIn}>
              <Card variant="cyan" padding="p-6">
                <h4 className="font-bold text-[#333] mb-2">Charla Anterior</h4>
                <p className="text-sm mb-3" style={{ color: 'rgba(51,51,51,0.7)' }}>
                  ¿Te interesa empezar en AUR? Puedes revisar mi charla anterior: <strong>Becoming AUR Maintainer</strong>.
                </p>
                <a href="https://carlosal1015.github.io/becoming-aur-maintainer" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-wider text-[#1794D1] hover:underline">
                  Ver Diapositivas →
                </a>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card variant="slate" padding="p-6">
                <h4 className="font-bold text-[#333] mb-2">Repositorio Académico</h4>
                <p className="text-sm mb-3" style={{ color: 'rgba(51,51,51,0.7)' }}>
                  Colaboro empaquetando software científico y educativo.
                </p>
                <span className="text-xs font-mono px-2 py-1 bg-slate-100 rounded text-slate-600">arch4edu.org</span>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
