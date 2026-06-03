import { motion } from 'motion/react'
import { fadeIn, scaleIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import ZoomableImage from '../ui/ZoomableImage'
import maintainersImg from '../../assets/images/maintainers.jpg'

export default function Slide09bWikiMaintainers() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="blue" size="lg" opacity={0.05} style={{ top: '-10%', right: '-5%' }} />
      
      <motion.div
        className="w-full max-w-[1100px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>02c · ArchWiki Maintainers</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[40px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          El corazón de la <span className="gradient-text">documentación</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-12 items-center">
          <motion.div variants={scaleIn} className="flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden border border-[#bcd] shadow-2xl bg-white p-1">
              <ZoomableImage 
                src={maintainersImg} 
                alt="ArchWiki Maintainers" 
                className="w-full h-auto object-contain" 
              />
            </div>
            <p className="text-[14px] text-gray-500 font-mono text-center">
              Matthias Kirschner, Levente (Arch Project Leader) y Ferdinand (Alad, ArchWiki maintainer)
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-4">
            <div className="p-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-[#bcd] shadow-sm">
              <p className="text-[20px] text-[#333] leading-relaxed italic">
                "I love the work of the ArchWiki maintainers. They are the unsung heroes who keep the documentation accurate and accessible for everyone."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-[1px] bg-[#1794D1]" />
                <a 
                  href="https://k7r.eu/i-love-the-work-of-the-archwiki-maintainers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[14px] text-[#1794D1] hover:underline font-mono"
                >
                  k7r.eu/archwiki-appreciation
                </a>
              </div>
            </div>

            <div className="p-6 bg-blue-50/30 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-sm">
              <p className="text-[16px] text-[#333] leading-relaxed italic">
                "Is it just me, or have search results become absolute garbage for basically every site? It's nearly impossible to discover useful information these days (outside the ArchWiki)."
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-[#1794D1]" />
                  <span className="text-[13px] text-gray-600 font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>Edward Snowden</span>
                </div>
                <a 
                  href="https://x.com/Snowden/status/1460666075033575425" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[12px] text-[#1794D1] hover:underline font-mono"
                >
                  16 Nov 2021
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
