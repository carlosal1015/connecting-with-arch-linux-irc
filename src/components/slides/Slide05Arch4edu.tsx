import { motion } from 'motion/react'
import { fadeIn, scaleIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import Card from '../ui/Card'
import GlowOrb from '../ui/GlowOrb'
import ZoomableImage from '../ui/ZoomableImage'
import diagramWorkflow from '../../assets/images/diagram.png'
import cactusLogo from '../../assets/images/cactus.png'
import logoArch4edu from '../../assets/images/logoarch4edu.png'
import acmLogo from '../../assets/images/acmutec.png'
import cslLogo from '../../assets/images/clubdesoftwarelibre.png'

// ─────────────────────────────────────────────────────────────────────────────
// ARCH4EDU SLIDE
// ─────────────────────────────────────────────────────────────────────────────

const socialLinks = [
  { label: 'Homepage', href: 'https://arch4edu.org', value: 'arch4edu.org' },
  { label: 'Twitter', href: 'https://twitter.com/arch4edu', value: '@arch4edu' },
  { label: 'Telegram (Ch)', href: 'https://t.me/arch4edu', value: 't.me/arch4edu' },
  { label: 'Telegram (Gr)', href: 'https://t.me/arch4edu_general', value: '@arch4edu-general' },
  { label: 'Matrix', href: 'https://matrix.to/#/#arch4edu-general:libera.chat', value: '#arch4edu-general' },
  { label: 'IRC', href: 'ircs://irc.libera.chat:6697/#arch4edu-general', value: '#arch4edu-general' },
]

export default function Slide05Arch4edu() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-10">
      <GlowOrb color="blue" size="lg" opacity={0.05} style={{ top: '-10%', right: '-5%' }} />
      <GlowOrb color="slate" size="md" opacity={0.03} style={{ bottom: '-5%', left: '10%' }} delay={-4} />

      <motion.div
        className="w-full max-w-[1000px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>04 · Ecosistema Global</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[38px] text-[#333] mb-6 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Repositorio comunitario: <span className="gradient-text font-mono">[arch4edu]</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-6 items-start">
          {/* Left Column: Comprehensive Info Card & Separate Logo Boxes */}
          <motion.div variants={fadeIn} className="flex flex-col gap-4">
            <Card variant="arch" className="p-4 flex flex-col gap-3 overflow-hidden">
              {/* Profile & Projects Section */}
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-[#1794D1]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Jingbei Li (petronny)
                  </h3>
                </div>

                <p className="text-[11px] text-gray-600 leading-snug border-l-2 border-[#1794D1] pl-3 italic">
                  Mantenedor clave de la comunidad Arch Linux y creador de infraestructuras críticas para el despliegue masivo de paquetes.
                </p>

                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1794D1] mt-1.5 flex-shrink-0" />
                    <div>
                      <a href="https://github.com/arch4edu/cactus" target="_blank" rel="noopener noreferrer" className="font-mono text-[12px] font-bold text-[#1794D1] hover:underline leading-none">cactus</a>
                      <a href="https://deepwiki.com/arch4edu/cactus" target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-400 font-mono hover:text-[#1794D1] hover:underline block italic">
                        Repo: deepwiki.com/arch4edu/cactus
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1794D1] mt-1.5 flex-shrink-0" />
                    <a href="https://github.com/arch4edu/aur-auto-update" target="_blank" rel="noopener noreferrer" className="font-mono text-[12px] font-bold text-[#1794D1] hover:underline">aur-auto-update</a>
                  </div>
                </div>
              </div>

              {/* Social Links Section */}
              <div className="pt-3 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 px-2 rounded border border-gray-100 bg-gray-50/50 flex flex-col hover:bg-white hover:border-[#bcd] transition-all group"
                    >
                      <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider group-hover:text-[#1794D1]">{link.label}</span>
                      <span className="text-[10px] font-mono text-gray-600 truncate">{link.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Agradecimientos Section */}
            <motion.div variants={fadeIn} className="p-4 rounded-lg border border-[#bcd] bg-white/50 flex flex-col gap-3">
              <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Logos de arch4edu y cactus</h4>
              <div className="flex gap-6 items-center">
                <div className="flex items-center gap-2">
                  <img src={logoArch4edu} alt="ACM-UTEC" className="h-25 object-contain" />
                  <img src={cactusLogo} alt="ACM-UTEC" className="h-25 object-contain" />
                </div>
              </div>
            </motion.div>

            {/* Agradecimientos Section */}
            <motion.div variants={fadeIn} className="p-4 rounded-lg border border-[#bcd] bg-white/50 flex flex-col gap-3">
              <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Agradecimientos</h4>
              <p className="text-[11px] text-gray-600 font-medium">
                Agradezco a <span className="text-[#1794D1]">ACM-UTEC</span> y <span className="text-[#1794D1]">Club de Software Libre</span>
                por brindarme este espacio para presentar este taller.
              </p>
              <div className="flex gap-6 items-center">
                <div className="flex items-center gap-2">
                  <img src={acmLogo} alt="ACM-UTEC" className="h-25 object-contain" />
                  <span className="text-[15px] font-mono text-gray-400 font-bold">ACM-UTEC</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={cslLogo} alt="Club de Software Libre" className="h-25 object-contain" />
                  <span className="text-[15px] font-mono text-gray-400 font-bold">CSL</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Workflow Diagram - Small Height Preview */}
          <motion.div variants={fadeIn}>
            <motion.div
              variants={scaleIn}
              className="rounded-lg overflow-hidden border border-[#bcd] shadow-lg bg-white p-1 h-[730px] flex flex-col"
            >
              <div className="flex-1 overflow-hidden relative group">
                <ZoomableImage
                  src={diagramWorkflow}
                  alt="Arch4edu Workflow Diagram"
                  className="w-full h-full object-cover object-top rounded-sm cursor-zoom-in"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
              </div>
              <div className="px-3 py-1.5 bg-gray-50 border-t border-[#bcd] text-[9px] font-mono text-gray-400 text-center">
                FIG 01: Flujo de Trabajo (Zoom para ver completo)
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

