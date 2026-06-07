import { motion } from 'motion/react'
import { fadeIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import Layer from '../ui/Layer'

const items = [
  {
    number: '01',
    title: '¿Qué es IRC?',
    description: 'Internet Relay Chat es el estándar de comunicación en tiempo real para el desarrollo FOSS. La red más usada actualmente es Libera Chat.',
    color: 'cyan' as const,
  },
  {
    number: '02',
    title: '¿Por qué usarlo?',
    description: 'Fundamental para interactuar en canales oficiales de desarrollo, pedir feedback técnico (PKGBUILDs) y conectar con mantenedores globales.',
    color: 'blue' as const,
  },
  {
    number: '03',
    title: 'Netiqueta y Buenas Prácticas',
    description: 'Siempre leer el tema del canal (topic), ser respetuosos y proveer toda la información necesaria (logs, errores) al pedir ayuda. No preguntar para preguntar.',
    color: 'slate' as const,
  },
  {
    number: '04',
    title: 'Listas de Correo',
    description: 'El complemento al IRC. Arch, Fedora y Debian las usan extensivamente para discusiones técnicas asíncronas y anuncios de seguridad.',
    color: 'cyan' as const,
  },
]

export default function Slide06IRC() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="blue"  size="md" opacity={0.05} style={{ top: '-5%', right: '-5%' }} />

      <motion.div
        className="w-full max-w-[960px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>05 · Comunicación FOSS</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[42px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          El corazón de la comunicación: <span className="gradient-text">IRC</span>
        </motion.h2>

        <motion.div variants={stagger} className="flex flex-col gap-3">
          {items.map(item => (
            <motion.div key={item.number} variants={fadeIn}>
              <Layer number={item.number} title={item.title} color={item.color}>
                {item.description}
              </Layer>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
