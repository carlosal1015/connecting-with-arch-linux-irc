import { motion } from 'motion/react'
import { fadeIn, fadeInLeft, fadeInRight, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import ZoomableImage from '../ui/ZoomableImage'
import minicondaGif from '../../assets/images/miniconda3.gif'

// ─────────────────────────────────────────────────────────────────────────────
// MINICONDA DEMO SLIDE
// ─────────────────────────────────────────────────────────────────────────────

const steps = [
  { 
    title: 'Clonar Repositorio', 
    desc: 'git clone https://aur.archlinux.org/miniconda3.git' 
  },
  { 
    title: 'Inspección', 
    desc: 'Revisar el PKGBUILD y archivos .install por seguridad.' 
  },
  { 
    title: 'Construcción (makepkg)', 
    desc: 'Descarga fuentes, verifica checksums y compila.' 
  },
  { 
    title: 'Gestión de Dependencias', 
    desc: 'Uso de -s para instalar dependencias vía pacman.' 
  },
  { 
    title: 'Instalación (-i)', 
    desc: 'Instala el paquete final .pkg.tar.zst en el sistema.' 
  },
]

export default function Slide07bMiniconda() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-10">
      <GlowOrb color="blue"  size="md" opacity={0.05} style={{ top: '-8%', left: '-5%' }} />
      <GlowOrb color="cyan" size="sm" opacity={0.04} style={{ bottom: '-5%', right: '-4%' }} delay={-6} />

      <motion.div
        className="w-full max-w-[1100px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>06b · Demostración Práctica</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[38px] text-[#333] mb-6 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Demo: upgrading <span className="gradient-text font-mono">miniconda3</span>
        </motion.h2>

        <div className="grid grid-cols-5 gap-6 items-start">
          {/* Left — GIF (3/5) */}
          <motion.div 
            variants={fadeInLeft} 
            className="col-span-3 rounded-xl overflow-hidden shadow-2xl border border-[#bcd] bg-black aspect-video flex items-center justify-center relative group"
          >
            <ZoomableImage 
              src={minicondaGif} 
              alt="Demo miniconda3 AUR" 
              className="w-full h-full object-contain"
            />
            
            {/* Asciinema Link overlay */}
            <a 
              href="https://asciinema.org/a/1005126" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-4 right-4 hover:scale-105 transition-transform z-10"
            >
              <img src="https://asciinema.org/a/1005126.svg" alt="Asciinema Recording" className="h-8" />
            </a>
          </motion.div>

          {/* Right — Steps (2/5) */}
          <motion.div variants={fadeInRight} className="col-span-2 flex flex-col gap-3">
            <h3 className="text-[18px] font-bold text-[#1794D1]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Paso a paso del proceso
            </h3>
            
            <div className="flex flex-col gap-2.5">
              {steps.map((step, i) => (
                <div 
                  key={i}
                  className="p-2.5 rounded-lg border border-[#bcd] bg-white/50 backdrop-blur-sm"
                  style={{ borderLeft: '3px solid #1794D1' }}
                >
                  <h4 className="font-bold text-[14px] text-[#333] leading-none">{i + 1}. {step.title}</h4>
                  <p className="text-[12px] text-gray-600 font-mono mt-1 leading-tight">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-1 p-2 rounded-lg bg-[#333] text-[#00BFFF] font-mono text-[11px] text-center border border-[#444]">
              $ makepkg -si
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
