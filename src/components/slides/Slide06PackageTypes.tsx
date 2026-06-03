import { motion } from 'motion/react'
import { fadeIn, fadeInLeft, fadeInRight, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import CodeBlock from '../ui/CodeBlock'

// ─────────────────────────────────────────────────────────────────────────────
// PACKAGE TYPES SLIDE
// ─────────────────────────────────────────────────────────────────────────────

const standardCode = `pkgname=mi-app
source=("https://url.com/$pkgname-$pkgver.tar.gz")
sha256sums=('...')`

const binCode = `pkgname=mi-app-bin
source_x86_64=("https://url.com/binary.tar.gz")
provides=("$pkgname")
conflicts=("$pkgname")`

const gitCode = `pkgname=mi-app-git
makedepends=('git')
source=("$pkgname::git+https://url.com/repo.git")
pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/-/./g'
}`

export default function Slide06PackageTypes() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="blue"  size="md" opacity={0.05} style={{ top: '-8%', right: '-5%' }} />
      <GlowOrb color="slate" size="sm" opacity={0.04} style={{ bottom: '-5%', left: '-4%' }} delay={-6} />

      <motion.div
        className="w-full max-w-[1150px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>05 · Variantes de Empaquetado</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[44px] text-[#333] mb-8 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          ¿Cuál elegir? <span className="gradient-text">Standard, -bin o -git</span>
        </motion.h2>

        <div className="grid grid-cols-3 gap-6">
          {/* Standard */}
          <motion.div variants={fadeInLeft} className="flex flex-col gap-4">
            <div className="font-bold text-xl text-[#1794D1]">Standard</div>
            <p className="text-[17px] leading-relaxed text-gray-600">
              Compila desde fuentes estables. Es el más robusto y optimizado.
            </p>
            <CodeBlock code={standardCode} language="PKGBUILD" fontSize={13} />
          </motion.div>

          {/* Bin */}
          <motion.div variants={fadeIn} className="flex flex-col gap-4">
            <div className="font-bold text-xl text-[#00BFFF]">Sufijo -bin</div>
            <p className="text-[17px] leading-relaxed text-gray-600">
              Usa binarios pre-compilados. Rápido, pero menos "Arch way".
            </p>
            <CodeBlock code={binCode} language="PKGBUILD" fontSize={13} />
          </motion.div>

          {/* Git */}
          <motion.div variants={fadeInRight} className="flex flex-col gap-4">
            <div className="font-bold text-xl text-[#7A9BB5]">Sufijo -git</div>
            <p className="text-[17px] leading-relaxed text-gray-600">
              Compila desde el último commit. Útil para desarrollo.
            </p>
            <CodeBlock code={gitCode} language="PKGBUILD" fontSize={13} />
          </motion.div>
        </div>

        <div className="mt-8 p-5 bg-gray-50 rounded-2xl border border-gray-200 text-[16px] text-gray-500 italic">
          * Importante: Siempre usa <strong>provides</strong> y <strong>conflicts</strong> para que el sistema sepa que son el mismo software.
        </div>
      </motion.div>
    </div>
  )
}
