import { motion } from 'motion/react'
import { fadeIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import Card from '../ui/Card'
import GlowOrb from '../ui/GlowOrb'

export default function Slide01gSecurity() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="slate" size="lg" opacity={0.05} style={{ top: '-10%', left: '-5%' }} />
      <GlowOrb color="blue" size="md" opacity={0.04} style={{ bottom: '-5%', right: '10%' }} delay={-3} />

      <motion.div
        className="w-full max-w-[1100px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>02g · Seguridad en Arch Linux</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[40px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Arch Linux <span className="gradient-text">Security Team</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-10 items-stretch">
          <motion.div variants={fadeIn} className="space-y-6">
            <div className="p-6 bg-white/50 border border-[#bcd] rounded-xl shadow-sm h-full">
              <h3 className="text-xl font-bold text-[#333] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Misión y Vigilancia
              </h3>
              <p className="text-gray-600 text-[16px] leading-relaxed mb-4">
                El equipo de seguridad rastrea vulnerabilidades (CVE) en todos los paquetes de los repositorios oficiales.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1794D1] mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-[15px]">Identificación proactiva de fallos de seguridad.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1794D1] mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-[15px]">Coordinación con mantenedores para parches rápidos.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1794D1] mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-[15px]">Publicación de <strong>ASAs</strong> (Arch Security Advisories).</p>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-4">
            <Card variant="arch" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="px-2 py-0.5 bg-red-50 text-red-600 text-[11px] font-bold rounded border border-red-100 uppercase tracking-wider">Critical</div>
                <h3 className="text-lg font-bold text-[#333]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Caso Reciente: CVE-2026-31431
                </h3>
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                Vulnerabilidad crítica tipo "copy fail" detectada y parcheada recientemente en el núcleo del sistema.
              </p>
              <div className="p-3 bg-gray-50 rounded border border-gray-200 font-mono text-[12px] text-[#333]">
                <a 
                  href="https://security.archlinux.org/CVE-2026-31431" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1794D1] hover:underline block truncate"
                >
                  security.archlinux.org/CVE-2026-31431
                </a>
              </div>
            </Card>

            <div className="p-6 bg-slate-50/50 border border-slate-100 rounded-xl">
              <h3 className="text-md font-bold text-slate-700 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Tracker de Seguridad
              </h3>
              <p className="text-[14px] text-gray-600 mb-4">
                Consulta el estado de seguridad de tu sistema en tiempo real.
              </p>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://security.archlinux.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[13px] font-mono text-[#1794D1] hover:underline flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-400" />
                  Security Tracker Dashboard
                </a>
                <a 
                  href="https://wiki.archlinux.org/title/Security" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[13px] font-mono text-[#1794D1] hover:underline flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-400" />
                  Wiki: Security Best Practices
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
