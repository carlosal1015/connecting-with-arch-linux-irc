import { motion } from 'motion/react'
import { fadeIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import Card from '../ui/Card'

export default function Slide04Contributions() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="cyan" size="lg" opacity={0.06} style={{ top: '-10%', left: '-5%' }} />
      <GlowOrb color="blue" size="md" opacity={0.04} style={{ bottom: '-15%', right: '-5%' }} delay={-5} />

      <motion.div
        className="w-full max-w-[960px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>03 · Formas de Contribuir</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[42px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          El abanico de <span className="gradient-text">posibilidades</span>
        </motion.h2>

        <motion.div variants={stagger} className="grid grid-cols-3 gap-5 mb-6">
          <motion.div variants={fadeIn}>
            <Card variant="cyan" padding="p-6" className="h-full">
              <h3 className="font-bold text-lg mb-2 text-[#333]">Arch Wiki</h3>
              <p className="text-sm" style={{ color: 'rgba(51,51,51,0.7)' }}>
                La famosa Arch Wiki. Siempre se necesita ayuda para <strong>documentar</strong> y <strong>traducir</strong> artículos para la comunidad.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card variant="blue" padding="p-6" className="h-full">
              <h3 className="font-bold text-lg mb-2 text-[#333]">AUR & Empaquetado</h3>
              <p className="text-sm" style={{ color: 'rgba(51,51,51,0.7)' }}>
                Si hay un programa que usas y no está, tú puedes subirlo. Requiere conocer las guías de subida y Bash scripting.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card variant="slate" padding="p-6" className="h-full">
              <h3 className="font-bold text-lg mb-2 text-[#333]">Arch Testing Team</h3>
              <p className="text-sm" style={{ color: 'rgba(51,51,51,0.7)' }}>
                Probar actualizaciones antes de que se liberen a todos los usuarios, asegurando estabilidad.
              </p>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-2 gap-5">
          <motion.div variants={fadeIn}>
            <Card variant="glass" padding="p-6" className="h-full">
              <h3 className="font-bold text-lg mb-2 text-[#333]">Infraestructura (Mirrors)</h3>
              <p className="text-sm" style={{ color: 'rgba(51,51,51,0.7)' }}>
                Alojar réplicas de repositorios para distribuir la carga mundialmente (ej. arch4edu).
              </p>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card variant="glass" padding="p-6" className="h-full">
              <h3 className="font-bold text-lg mb-2 text-[#333]">Creación de ISOs</h3>
              <p className="text-sm" style={{ color: 'rgba(51,51,51,0.7)' }}>
                Crear medios de instalación vivos y personalizados usando `archiso` (ej. proyecto dune-archiso).
              </p>
            </Card>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  )
}
