import { motion } from 'motion/react'
import { fadeIn, scaleIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import ZoomableImage from '../ui/ZoomableImage'
import repoStats from '../../assets/images/repositorystats.png'

export default function Slide01eRepoStats() {
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
          <Tag>02e · Repositorios de Arch Linux</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[40px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Repositorios <span className="gradient-text">oficiales</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-12 items-center mb-8">
          <motion.div variants={scaleIn} className="flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden border border-[#bcd] shadow-2xl bg-white p-1">
              <ZoomableImage src={repoStats} alt="Repository Stats" className="w-full h-auto object-contain" />
            </div>
            <p className="text-[12px] text-gray-500 font-mono text-center">
              Estadísticas por repositorio: [core], [extra] y [multilib]. Fuente:
              <a href="https://archlinux.org/visualize" target="_blank" rel="noopener noreferrer" className="text-[#1794D1] hover:underline"> https://archlinux.org/visualize</a>
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-[#bcd] bg-white/50">
                <h3 className="font-mono text-[#1794D1] text-[18px] mb-1">[core] — Sistema Base</h3>
                <p className="text-gray-600 text-[14px] mb-2">Paquetes esenciales para arrancar el sistema, conectarse a la red y compilar software.</p>
                <div className="flex flex-wrap gap-2">
                  {['linux', 'pacman', 'systemd', 'glibc', 'openssh'].map(pkg => (
                    <span key={pkg} className="px-2 py-0.5 bg-gray-100 text-[#333] font-mono text-[11px] rounded border border-gray-200">{pkg}</span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg border border-[#bcd] bg-white/50">
                <h3 className="font-mono text-[#1794D1] text-[18px] mb-1">[extra] — Software Extendido</h3>
                <p className="text-gray-600 text-[14px] mb-2">Gran variedad de software que no es esencial, como entornos de escritorio y herramientas de usuario.</p>
                <div className="flex flex-wrap gap-2">
                  {['firefox', 'git', 'rust', 'vlc', 'gnome-shell'].map(pkg => (
                    <span key={pkg} className="px-2 py-0.5 bg-gray-100 text-[#333] font-mono text-[11px] rounded border border-gray-200">{pkg}</span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg border border-[#bcd] bg-white/50">
                <h3 className="font-mono text-[#1794D1] text-[18px] mb-1">[multilib] — Compatibilidad 32-bit</h3>
                <p className="text-gray-600 text-[14px] mb-2">Repositorio para software de 32 bits en sistemas de 64 bits, como drivers propietarios.</p>
                <div className="flex flex-wrap gap-2">
                  {['steam', 'multilib-devel', 'lib32-mesa', 'lib32-nvidia-utils'].map(pkg => (
                    <span key={pkg} className="px-2 py-0.5 bg-gray-100 text-[#333] font-mono text-[11px] rounded border border-gray-200">{pkg}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={scaleIn}
          className="rounded-xl p-5 flex items-center gap-4"
          style={{ background: 'rgba(51,51,51,0.03)', border: '1px solid rgba(51,51,51,0.1)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1794D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <div className="flex flex-col gap-1">
            <p className="text-[16px]" style={{ color: 'rgba(51,51,51,0.7)' }}>
              Existen además repositorios de <strong className="text-[#333]">Testing</strong> ([core-testing], [extra-testing], etc.) donde los paquetes se prueban antes de pasar a las ramas estables. No se recomienda su uso en producción.
            </p>
            <a 
              href="https://wiki.archlinux.org/title/Official_repositories#Testing_repositories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[13px] font-mono text-[#1794D1] hover:underline"
            >
              Documentación: Official repositories#Testing_repositories
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
