import { motion } from 'motion/react'
import { fadeIn, fadeInLeft, fadeInRight, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'

// ─────────────────────────────────────────────────────────────────────────────
// COMMUNITY SLIDE
// ─────────────────────────────────────────────────────────────────────────────

const channels = [
  { name: 'Arch Linux RFCs', detail: 'Propuesta y debate de cambios técnicos', color: '#1794D1' },
  { name: 'IRC (Libera.Chat)', detail: '#archlinux-aur (ej. weechat, konversation)', color: '#00BFFF' },
  { name: 'Mailing Lists', detail: 'aur-general (Anuncios)', color: '#7A9BB5' },
  { name: 'GitLab / BBS', detail: 'Soporte y reporte de errores', color: '#1794D1' },
]

export default function Slide09Community() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="slate" size="md" opacity={0.05} style={{ top: '-8%', right: '-5%' }} />
      <GlowOrb color="blue"  size="sm" opacity={0.04} style={{ bottom: '-5%', left: '-4%' }} delay={-6} />

      <motion.div
        className="w-full max-w-[1100px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>08 · Comunidad y Ética</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[44px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          El factor <span className="gradient-text">humano</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left — Communication */}
          <motion.div variants={fadeInLeft} className="flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-2xl mb-5 text-[#333]">Canales de coordinación</h3>
              <div className="flex flex-col gap-4">
                {channels.map(c => (
                  <div key={c.name} className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: c.color }} />
                    <div>
                      <div className="font-bold text-[17px] text-[#333]">{c.name}</div>
                      <div className="text-[14px] text-gray-500">{c.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Ethics */}
          <motion.div variants={fadeInRight} className="flex flex-col gap-8">
             <div className="glass rounded-2xl p-8 border-l-4 border-l-[#1794D1]">
              <h3 className="font-bold text-xl mb-4 text-[#333]">Ética del mantenedor</h3>
              <ul className="flex flex-col gap-4 text-[16px] text-gray-600">
                <li>• La Wiki es la primera línea de defensa.</li>
                <li>• Comunicación clara, técnica y efectiva.</li>
                <li>• Arch Linux Testing Team & <a href="https://security.archlinux.org" target="_blank" rel="noopener noreferrer" className="text-[#1794D1] hover:underline">Security</a>.</li>
                <li>• El camino: de AUR a Repositorios Oficiales.</li>
              </ul>
            </div>
            
            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 italic text-[16px] text-blue-700 leading-relaxed mb-6">
              "Arch Linux es un sistema que respetas porque tú lo construiste, pero la comunidad es la que lo mantiene vivo."
            </div>

            <motion.a
              href="https://aur.archlinux.org/register"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn}
              className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-[#1794D1] text-white font-bold hover:bg-[#1376A8] transition-colors shadow-lg shadow-blue-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
              ¡Regístrate en el AUR!
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
