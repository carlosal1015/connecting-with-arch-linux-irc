import { motion } from 'motion/react'
import { fadeIn, fadeInLeft, fadeInRight, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import FlowDiagram, { type FlowNodeDef } from '../ui/FlowDiagram'

// ─────────────────────────────────────────────────────────────────────────────
// WORKFLOW SLIDE
// ─────────────────────────────────────────────────────────────────────────────

const workflowNodes: FlowNodeDef[] = [
  {
    id: 'setup',
    label: 'Configurar SSH',
    sublabel: 'git clone ssh://aur@aur.archlinux.org/pkg.git',
    color: 'cyan',
  },
  {
    id: 'chroot',
    label: 'Entorno Chroot',
    sublabel: 'mkarchroot $CHROOT/root base-devel',
    color: 'blue',
  },
  {
    id: 'build',
    label: 'Construcción Limpia',
    sublabel: 'pkgctl version upgrade && makechrootpkg',
    color: 'blue',
  },
  {
    id: 'qa',
    label: 'QA & Linter',
    sublabel: 'namcap PKGBUILD && namcap *.pkg.tar.zst',
    color: 'slate',
  },
  {
    id: 'push',
    label: 'Publicar',
    sublabel: 'git push origin master',
    color: 'blue',
    edgeLabel: '.SRCINFO',
  },
]

const bullets = [
  { text: 'Chroot Limpio: Uso de systemd-nspawn (devtools) o Docker para entornos aislados.' },
  { text: 'Namcap: Analiza el paquete final buscando errores de dependencias o estilo.' },
  { text: 'SSH Setup: Acceso vía llave GPG/SSH en aur.archlinux.org para publicar.' },
]

export default function Slide07Workflow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="blue"  size="md" opacity={0.05} style={{ top: '-8%', left: '-5%' }} />
      <GlowOrb color="slate" size="sm" opacity={0.04} style={{ bottom: '-5%', right: '-4%' }} delay={-6} />

      <motion.div
        className="w-full max-w-[1100px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>06 · Flujo del Mantenedor</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[40px] text-[#333] mb-6 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Roles de un <span className="gradient-text">mantenedor AUR</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 items-start">
          {/* Left — text */}
          <motion.div variants={fadeInLeft} className="flex flex-col gap-4">
            <p className="text-[17px] leading-relaxed" style={{ color: 'rgba(51,51,51,0.8)' }}>
              Mantener un paquete no es solo subir el código. Es asegurar que compile en un 
              sistema limpio y que siga las guías de estilo de Arch Linux.
            </p>

            <ul className="flex flex-col gap-2.5 mt-1">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[16px]"
                  style={{ color: 'rgba(51,51,51,0.7)' }}
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#00BFFF' }}
                  />
                  {b.text}
                </li>
              ))}
            </ul>

            <div
              className="rounded-xl p-4 mt-2"
              style={{
                background: 'rgba(0,191,255,0.05)',
                border: '1px solid rgba(0,191,255,0.15)',
              }}
            >
              <p className="text-[16px] leading-relaxed" style={{ color: 'rgba(51,51,51,0.8)' }}>
                <strong style={{ color: '#00BFFF' }}>Pro Tip:</strong> Usa <a 
                  href="https://github.com/kewl-code/aurpublish" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold underline hover:opacity-80 transition-opacity"
                  style={{ color: '#00BFFF' }}
                >
                  aurpublish
                </a> para gestionar múltiples paquetes y automatizar el flujo.
              </p>
            </div>
          </motion.div>

          {/* Right — visual */}
          <motion.div variants={fadeInRight}>
            <FlowDiagram nodes={workflowNodes} compact={true} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
