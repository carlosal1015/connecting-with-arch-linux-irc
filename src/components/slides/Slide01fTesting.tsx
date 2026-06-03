import { motion } from 'motion/react'
import { fadeIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import Card from '../ui/Card'
import GlowOrb from '../ui/GlowOrb'

export default function Slide01fTesting() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="blue" size="lg" opacity={0.05} style={{ top: '-10%', right: '-5%' }} />
      <GlowOrb color="cyan" size="md" opacity={0.03} style={{ bottom: '-5%', left: '10%' }} delay={-4} />

      <motion.div
        className="w-full max-w-[1100px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>02d · Garantía de Calidad</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[40px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Arch Testing Team y el proceso de <span className="gradient-text">Sign-off</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-10 items-start">
          <motion.div variants={fadeIn} className="space-y-6">
            <div className="p-6 bg-white/50 border border-[#bcd] rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-[#333] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                ¿Cómo llega un paquete a estable?
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1794D1] text-white flex items-center justify-center text-[12px] font-bold flex-shrink-0">1</div>
                  <p className="text-gray-600 text-[15px]">El mantenedor sube el paquete a los repositorios de <strong>Testing</strong>.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1794D1] text-white flex items-center justify-center text-[12px] font-bold flex-shrink-0">2</div>
                  <p className="text-gray-600 text-[15px]">Voluntarios (ATTs) y Desarrolladores instalan y verifican la integridad del paquete.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1794D1] text-white flex items-center justify-center text-[12px] font-bold flex-shrink-0">3</div>
                  <p className="text-gray-600 text-[15px]">Se requiere un número mínimo de <strong>Sign-offs</strong> positivos para validar el cambio.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1794D1] text-white flex items-center justify-center text-[12px] font-bold flex-shrink-0">4</div>
                  <p className="text-gray-600 text-[15px]">El paquete se mueve a los repositorios oficiales ([core] o [extra]).</p>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-4">
            <Card variant="arch" className="p-6">
              <h3 className="text-lg font-bold text-[#1794D1] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Testing Repositories
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-2 bg-gray-50 border border-gray-200 rounded font-mono text-[13px] text-center">[core-testing]</div>
                <div className="p-2 bg-gray-50 border border-gray-200 rounded font-mono text-[13px] text-center">[extra-testing]</div>
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Área de pruebas para paquetes críticos y actualizaciones mayores antes de su despliegue general.
              </p>
            </Card>

            <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-xl">
              <h3 className="text-md font-bold text-[#1794D1] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                ¡Tú puedes ayudar!
              </h3>
              <p className="text-[14px] text-gray-600 mb-4">
                Cualquier usuario puede unirse al equipo de pruebas para reportar errores y dar feedback sobre nuevos paquetes.
              </p>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://wiki.archlinux.org/title/Arch_Testing_Team" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[13px] font-mono text-[#1794D1] hover:underline flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#1794D1]" />
                  Wiki: Arch Testing Team
                </a>
                <a 
                  href="https://archlinux.org/login/?next=/devel/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[13px] font-mono text-[#1794D1] hover:underline flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#1794D1]" />
                  Sign-off portal: archlinux.org/devel
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
