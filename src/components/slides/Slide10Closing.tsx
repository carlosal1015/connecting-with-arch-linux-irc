import { motion } from 'motion/react'
import { fadeIn, scaleIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import ZoomableImage from '../ui/ZoomableImage'
import qrcode from '../../assets/images/qrcode.svg'
import carlosAvatar from '../../assets/images/carlos.jpg'

// ─────────────────────────────────────────────────────────────────────────────
// CLOSING SLIDE
// ─────────────────────────────────────────────────────────────────────────────

const links = [
  {
    label: 'GitHub',
    value: 'carlosal1015',
    href: 'https://github.com/carlosal1015',
    color: '#1794D1',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    )
  },
  {
    label: 'GitLab',
    value: 'carlosal1015',
    href: 'https://gitlab.archlinux.org/carlosal1015',
    color: '#FC6D26',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.72 3.11-9.48a.84.84 0 0 1 1.59 0l3.11 9.48h3.84l3.11-9.48a.84.84 0 0 1 1.59 0l3.11 9.48 1.22 3.72a.84.84 0 0 1-.3.94z" />
      </svg>
    )
  },
  {
    label: 'Correo',
    value: 'caznaranl@uni.pe',
    href: 'mailto:caznaranl@uni.pe',
    color: '#00BFFF',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  },
  {
    label: 'Mastodon',
    value: 'mastodon.la/@carlosal1015',
    href: 'https://mastodon.la/@carlosal1015',
    color: '#7A9BB5',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8.5 14c-.9 0-1.5-.6-1.5-1.5V9c0-.9.6-1.5 1.5-1.5h1.5l1.5 1.5v4.5L10 14h-1.5z"></path>
        <path d="M15.5 14c.9 0 1.5-.6 1.5-1.5V9c0-.9.6-1.5-1.5-1.5H14l-1.5 1.5v4.5l1.5 0.5h1.5z"></path>
      </svg>
    )
  },
]

export default function Slide10Closing() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="cyan" size="lg" opacity={0.09} style={{ top: '-10%', left: '-5%' }} />
      <GlowOrb color="blue" size="md" opacity={0.06} style={{ bottom: '-12%', right: '-8%' }} delay={-6} />
      <GlowOrb color="slate" size="sm" opacity={0.07} style={{ top: '55%', right: '25%' }} delay={-12} />

      <motion.div
        className="flex flex-col items-center text-center relative z-10 w-full"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>¡Gracias!</Tag>
        </motion.div>

        {/* QR Code */}
        <motion.div variants={scaleIn} className="relative my-6 flex items-center justify-center">
          <div
            className="absolute rounded-full"
            style={{
              width: 260,
              height: 260,
              border: '1px solid rgba(0,191,255,0.10)',
              background: 'radial-gradient(circle, rgba(0,191,255,0.06) 0%, transparent 70%)',
            }}
          />
          <div
            className="w-[200px] h-[200px] rounded-2xl flex items-center justify-center bg-white shadow-xl relative z-20 border border-gray-100 p-2 hover:scale-105 transition-transform overflow-hidden"
          >
            <ZoomableImage src={qrcode} alt="Escanea para ver la presentación" className="w-full h-full object-contain cursor-zoom-in" />
          </div>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[#333] mb-2"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 52,
            letterSpacing: '-0.025em',
          }}
        >
          ¿Preguntas?
        </motion.h2>

        <motion.p
          variants={fadeIn}
          className="text-[21px] max-w-lg mb-8"
          style={{ color: 'rgba(51,51,51,0.6)', fontFamily: 'Outfit, sans-serif' }}
        >
          Siéntete libre de preguntar sobre empaquetado, AUR o Arch Linux.
        </motion.p>

        <motion.div variants={stagger} className="flex items-center gap-8">
          {links.map(link => (
            <motion.a
              key={link.label}
              variants={fadeIn}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 group transition-all"
            >
              <div className="flex items-center gap-2 group-hover:scale-110 transition-transform" style={{ color: link.color }}>
                {link.icon}
                <span
                  className="text-[12px] uppercase tracking-widest font-bold"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {link.label}
                </span>
              </div>
              <span
                className="text-[17px] font-medium group-hover:text-[#1794D1] transition-colors"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  color: 'rgba(51,51,51,0.8)',
                }}
              >
                {link.value}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <div className="flex flex-col items-center mt-10 pt-8 w-full max-w-[500px]" style={{ borderTop: '1px solid rgba(51,51,51,0.1)' }}>
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-4"
          >
            <div
              className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center"
              style={{ border: '1px solid rgba(23,148,209,0.3)' }}
            >
              <img src={carlosAvatar} alt="Carlos Aznarán" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <div
                className="text-[19px] font-bold text-[#333]"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Carlos Alonso Aznarán
              </div>
              <div
                className="text-[14px] leading-snug"
                style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(51,51,51,0.6)' }}
              >
                Profesor de Matemática · Métodos numéricos
              </div>
              <div
                className="text-[14px] mt-0.5"
                style={{ fontFamily: 'JetBrains Mono, monospace', color: '#1794D1', opacity: 0.8 }}
              >
                Mantenedor AUR · colaborador arch4edu
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-6 text-[11px] opacity-40 uppercase tracking-[0.2em] flex flex-col items-center gap-2"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <div className="flex items-center gap-2">
              <span>Plantilla:</span>
              <a
                href="https://github.com/NewRenTL/presentation-template"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1794D1] transition-colors flex items-center gap-1.5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                NewRenTL/presentation-template
              </a>
            </div>
            <div className="text-[11px] tracking-normal font-medium mt-1">
              Agradecimiento especial a Diego Bustamante Palomino por la plantilla base
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
