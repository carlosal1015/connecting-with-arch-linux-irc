import { motion } from 'motion/react'
import { fadeIn, stagger } from '../../utils/animations'
import GlowOrb from '../ui/GlowOrb'
import carlosAvatar from '../../assets/images/carlos.jpg'

// ─────────────────────────────────────────────────────────────────────────────
// COVER SLIDE — AUR Workshop
// ─────────────────────────────────────────────────────────────────────────────

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    label: 'Filosofía KISS',
    desc: 'Elegancia técnica',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: 'Seguridad',
    desc: 'Aislamiento Chroot',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    label: 'PKGBUILD',
    desc: 'Bash scripting',
  },
]

export default function Slide01Cover() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-16">
      <GlowOrb color="cyan" size="lg" opacity={0.07} style={{ top: '-15%', right: '-8%' }} />
      <GlowOrb color="blue" size="md" opacity={0.05} style={{ bottom: '-12%', left: '-6%' }} delay={-5} />
      <GlowOrb color="slate" size="sm" opacity={0.06} style={{ top: '40%', left: '10%' }} delay={-10} />

      <motion.div
        className="w-full max-w-[950px] flex flex-col items-center text-center relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Arch Crystal Logo */}
        <motion.div variants={fadeIn} className="mb-8">
          <div
            className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center"
            style={{
              background: 'rgba(23,148,209,0.12)',
              border: '1px solid rgba(23,148,209,0.25)',
              boxShadow: '0 0 40px rgba(23,148,209,0.15)',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 256 256">
              <defs>
                <linearGradient xlinkHref="#a" id="d" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-.39377 0 0 .39375 978.34969 416.9815)" x1="541.33502" y1="104.50665" x2="606.91248" y2="303.14029" />
                <linearGradient gradientUnits="userSpaceOnUse" id="a" y2="129.3468" x2="112.49853" y1="6.1372099" x1="112.49854" gradientTransform="translate(287 -83)">
                  <stop offset="0" style={{ stopColor: '#fff', stopOpacity: 0 }} />
                  <stop offset="1" style={{ stopColor: '#fff', stopOpacity: 0.27450982 }} />
                </linearGradient>
              </defs>
              <path style={{ fill: '#1793d1' }} d="M128 0c-11.39482 27.937051-18.31337 46.237163-31 73.34375 7.7785 8.245207 17.33826 17.811753 32.84375 28.65625-16.66992-6.859577-28.03357-13.728504-36.53125-20.875C77.076039 115.00489 51.621645 163.24639 0 256c40.562707-23.41756 72.007597-37.86167 101.3125-43.375-1.25376-5.40435-1.923505-11.27752-1.875-17.375l.03125-1.28125c.64379-25.99398 14.16934-45.98224 30.1875-44.625 16.01815 1.35723 28.48754 23.53727 27.84375 49.53125-.12127 4.89622-.6905 9.60082-1.65625 13.96875C184.83328 218.51691 215.98162 232.89667 256 256c-7.89193-14.52962-14.96051-27.61983-21.6875-40.09375-10.59609-8.21269-21.64301-18.89743-44.1875-30.46875 15.4958 4.02645 26.60184 8.6825 35.25 13.875C156.97985 71.972668 151.45422 55.040376 128 0z" />
              <path style={{ fill: '#fff', fillOpacity: 0.16568047 }} d="M818.22607 548.55277c-41.18143-55.89508-50.72685-100.94481-53.14467-111.70015 21.96737 50.6686 21.81733 51.28995 53.14467 111.70015z" transform="matrix(1.34737 0 0 1.34737 -902.40019 -586.944907)" />
              <path style={{ fill: 'url(#d)', fillOpacity: 1 }} d="M765.09805 436.43495c-1.05641 2.59705-2.08559 5.1172-3.06152 7.51465-1.08115 2.65585-2.10928 5.19128-3.13111 7.677-1.02174 2.48575-2.03439 4.91156-3.03833 7.30591-1.00398 2.39446-2.01068 4.76169-3.03833 7.14355-1.00398 2.39446-2.01068 4.76169-3.03833 7.14355-1.02758 2.38177-2.06156 4.78845-3.15429 7.23633-1.09273 2.44796-2.23335 4.94504-3.43262 7.53784-1.19937 2.59282-2.45641 5.27815-3.80371 8.09448-.18662.39008-.41312.83402-.60303 1.22925 5.75521 6.09563 12.84133 13.14976 24.28345 21.15234-12.34021-5.07792-20.76511-10.15751-27.06665-15.44677-.32717.66791-.61387 1.26431-.95093 1.94824-.44365.90024-.97632 1.92315-1.43799 2.85278-.80967 1.66032-1.65574 3.36576-2.52807 5.12574-.33524.66652-.62948 1.24283-.97413 1.92504-5.50733 11.05265-12.33962 24.28304-21.12915 40.72754 24.09557-13.57581 50.08533-33.16242 97.29615-16.30493-2.36708-4.48319-4.54319-8.68756-6.58692-12.64038-2.0437-3.95294-3.94246-7.6555-5.70556-11.15601-1.76297-3.50043-3.39212-6.80069-4.917-9.92675-1.52486-3.12599-2.93832-6.0765-4.26757-8.90625-1.32934-2.8297-2.58106-5.55264-3.75733-8.16407-1.17634-2.6114-2.29708-5.11315-3.36304-7.58422-1.06607-2.4712-2.08657-4.89718-3.08471-7.30591-.99823-2.4088-1.97267-4.81178-2.94556-7.23633-.34772-.86638-.69553-1.7689-1.0437-2.64404-2.66339-6.25269-5.3982-12.73163-8.55835-20.15503z" transform="matrix(1.34737 0 0 1.34737 -902.40019 -586.944907)" />
            </svg>
          </div>
        </motion.div>

        <motion.div variants={fadeIn}>
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-bold uppercase mb-7"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.12em',
              color: '#00BFFF',
              background: 'rgba(0,191,255,0.08)',
              border: '1px solid rgba(0,191,255,0.22)',
            }}
          >
            <span className="w-2 h-2 rounded-full pulse-glow" style={{ background: '#00BFFF' }} />
            FLISoL 2026 @ Lima UTEC
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={fadeIn}
          className="font-black text-[72px] text-[#333] mb-4 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.04 }}
        >
          Empaquetado en
          <br />
          <span className="gradient-text text-[60px]">Arch User Repository</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn}
          className="text-[28px] font-semibold mb-12"
          style={{
            fontFamily: 'Outfit, sans-serif',
            color: 'rgba(51,51,51,0.6)',
            letterSpacing: '0.01em',
          }}
        >
          De usuario a contribuidor de Arch Linux
        </motion.p>

        {/* Pillar cards */}
        <motion.div variants={stagger} className="grid grid-cols-3 gap-4 mb-14 w-full max-w-[650px]">
          {pillars.map(p => (
            <motion.div
              key={p.label}
              variants={fadeIn}
              className="glass rounded-2xl p-6 text-center"
              style={{ transition: 'border-color 300ms' }}
            >
              <div className="flex justify-center mb-3 text-[#00BFFF]">
                {p.icon}
              </div>
              <div
                className="text-base font-bold text-[#333]"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {p.label}
              </div>
              <div className="text-sm mt-1" style={{ color: 'rgba(51,51,51,0.6)' }}>
                {p.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Speaker chip */}
        <motion.div
          variants={fadeIn}
          className="inline-flex items-center gap-4 px-7 py-4 rounded-full"
          style={{
            background: 'rgba(51,51,51,0.04)',
            border: '1px solid rgba(51,51,51,0.1)',
          }}
        >
          <div
            className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center"
            style={{ border: '1px solid rgba(23,148,209,0.3)' }}
          >
            <img src={carlosAvatar} alt="Carlos Aznarán" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <div
              className="text-[17px] font-bold text-[#333]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Carlos Alonso Aznarán
            </div>
            <div className="text-sm" style={{ color: 'rgba(51,51,51,0.5)' }}>
              Mantenedor AUR · colaborador arch4edu
            </div>
          </div>
        </motion.div>

        {/* Technical Date Footer */}
        <motion.div
          variants={fadeIn}
          className="mt-12 flex items-center gap-2 opacity-30"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: '#333',
            letterSpacing: '0.1em',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-sm bg-[#1794D1]" />
          RELEASE_DATE: 2026-05-02
        </motion.div>
      </motion.div>
    </div>
  )
}
