import { motion } from 'motion/react'
import { fadeIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import Layer from '../ui/Layer'

const questions = [
  {
    number: '01',
    title: '¿Conocen Arch Linux?',
    description: '¿Cuántos han escuchado hablar de Arch Linux o sus derivadas (Manjaro, EndeavourOS)? ¿Cuántos lo han usado alguna vez?',
    color: 'cyan' as const,
  },
  {
    number: '02',
    title: 'Áreas de interés',
    description: 'De las siguientes áreas, ¿en cuál están más interesados en colaborar? (Documentación, Empaquetado, Testing, Infraestructura)',
    color: 'blue' as const,
  },
]

export default function Slide02Mentimeter() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="cyan"  size="md" opacity={0.05} style={{ top: '-5%', right: '-5%' }} />

      <motion.div
        className="w-full max-w-[960px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>01 · Interacción Inicial</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[42px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Conociendo a la <span className="gradient-text">Audiencia</span>
        </motion.h2>

        <motion.p variants={fadeIn} className="text-xl mb-8" style={{ color: 'rgba(51,51,51,0.7)' }}>
          Ingresen a Mentimeter para responder unas breves preguntas antes de iniciar:
        </motion.p>

        <motion.div variants={stagger} className="flex flex-col gap-4">
          {questions.map(q => (
            <motion.div key={q.number} variants={fadeIn}>
              <Layer number={q.number} title={q.title} color={q.color}>
                {q.description}
              </Layer>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
