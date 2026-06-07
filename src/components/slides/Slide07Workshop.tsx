import { motion } from 'motion/react'
import { fadeIn, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import CodeBlock from '../ui/CodeBlock'

export default function Slide07Workshop() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="slate" size="lg" opacity={0.06} style={{ top: '10%', left: '-10%' }} />

      <motion.div
        className="w-full max-w-[1000px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>06 · Taller Práctico</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[42px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Conectándose por <span className="gradient-text">IRC</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-10">
          <motion.div variants={fadeIn} className="flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3 text-[#333]">Prerrequisitos</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(51,51,51,0.7)' }}>
                Existen diversos clientes IRC. Aquí mostraremos dos opciones populares:
              </p>
              
              <div className="mb-4">
                <strong className="text-[#1794D1]">WeeChat:</strong> Cliente rápido y ligero basado en terminal.
                <CodeBlock code="$ pacman -S weechat" language="bash" fontSize={12} />
              </div>

              <div>
                <strong className="text-[#1794D1]">Konversation:</strong> Cliente gráfico e intuitivo de KDE.
                <CodeBlock code="$ pacman -S konversation" language="bash" fontSize={12} />
              </div>
            </div>
            
            <div className="mt-4 p-4 border border-[#1794D1]/30 bg-[#1794D1]/5 rounded-lg">
              <h4 className="font-bold text-[14px] text-[#333] mb-2">Bonus: Compilación Limpia</h4>
              <p className="text-[12px]" style={{ color: 'rgba(51,51,51,0.7)' }}>
                Recuerden siempre usar un <strong>clean chroot</strong> para compilar paquetes. Revisen su <code className="bg-white px-1 rounded border border-gray-200">/etc/pacman.conf</code>.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col gap-4">
            <h3 className="font-bold text-xl mb-1 text-[#333]">Pasos del Taller</h3>
            
            <ol className="space-y-4 text-[15px]" style={{ color: 'rgba(51,51,51,0.8)' }}>
              <li className="flex gap-3">
                <span className="font-mono font-bold text-[#1794D1]">1.</span>
                <span>Iniciar WeeChat o Konversation en tu sistema.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono font-bold text-[#1794D1]">2.</span>
                <span>Conectarse al servidor de <strong>Libera Chat</strong> (<code>irc.libera.chat</code>).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono font-bold text-[#1794D1]">3.</span>
                <span>Registrar tu nickname usando NickServ (recomendado).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono font-bold text-[#1794D1]">4.</span>
                <span>Unirse a los canales de la comunidad Arch Linux:
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-500 space-y-1">
                    <li><code>#archlinux</code> (General)</li>
                    <li><code>#archlinux-aur</code> (Ayuda con PKGBUILDs)</li>
                    <li><code>#arch4edu-general</code> (Nuestro repositorio)</li>
                  </ul>
                </span>
              </li>
            </ol>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
