import { motion } from 'motion/react'
import { fadeIn, fadeInLeft, fadeInRight, stagger } from '../../utils/animations'
import Tag from '../ui/Tag'
import GlowOrb from '../ui/GlowOrb'
import CodeBlock from '../ui/CodeBlock'

// ─────────────────────────────────────────────────────────────────────────────
// ANATOMY SLIDE - PKGBUILD + .SRCINFO
// ─────────────────────────────────────────────────────────────────────────────

const pkgbuildCode = `_base=pip
pkgname=pypy3-$_base
pkgver=26.1
pkgrel=1
pkgdesc="The PyPA recommended tool for installing Python packages"
url="https://$_base.pypa.io"
arch=(any)
license=(MIT)
depends=(pypy3)
makedepends=(pypy3-build pypy3-installer pypy3-flit-core)
source=(https://pypi.org/packages/source/p/$_base/$_base-$pkgver.tar.gz)
sha512sums=('9318ad22f97ffd54f1152052c83244d573a95648c3abcbc6bf01761e6785257726e0103bda600ded9338c308ac7de274fe93573da0bb5e590ced8da8847dc335')

build() {
  cd $_base-$pkgver
  pypy3 -m build --wheel --skip-dependency-check --no-isolation
}

package() {
  cd $_base-$pkgver
  pypy3 -m installer --destdir="$pkgdir" dist/*.whl
  mkdir -p "$pkgdir/usr/bin"
  mv "$pkgdir/opt/pypy3/bin/pip" "$pkgdir/usr/bin/pip-pypy3"
  install -Dm 644 LICENSE.txt -t "$pkgdir/usr/share/licenses/$pkgname"
}`

const bullets = [
  { text: <><code className="bg-blue-50 px-1.5 py-0.5 rounded text-[#1794D1] font-bold">prepare()</code>: Aplicación de parches y ajustes previos.</> },
  { text: <><code className="bg-blue-50 px-1.5 py-0.5 rounded text-[#1794D1] font-bold">build()</code>: Proceso de compilación o transpilación.</> },
  { text: <><code className="bg-blue-50 px-1.5 py-0.5 rounded text-[#1794D1] font-bold">check()</code>: Ejecución de tests para asegurar calidad.</> },
  { text: <><code className="bg-blue-50 px-1.5 py-0.5 rounded text-[#1794D1] font-bold">package()</code>: Instalación real en el entorno falso $pkgdir.</> },
]

export default function Slide05Anatomy() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-20 py-12">
      <GlowOrb color="cyan"  size="md" opacity={0.05} style={{ top: '-8%', left: '-5%' }} />
      <GlowOrb color="blue"  size="sm" opacity={0.04} style={{ bottom: '-5%', right: '-4%' }} delay={-6} />

      <motion.div
        className="w-full max-w-[1100px] relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Tag>04 · Anatomía y Metadatos</Tag>
        </motion.div>

        <motion.h2
          variants={fadeIn}
          className="font-bold text-[40px] text-[#333] mb-6 leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}
        >
          Estructura de un <span className="gradient-text">PKGBUILD</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 items-start">
          {/* Left — text */}
          <motion.div variants={fadeInLeft} className="flex flex-col gap-4">
            <p className="text-[17px] leading-relaxed" style={{ color: 'rgba(51,51,51,0.8)' }}>
              Un PKGBUILD es un script de Bash que define el ciclo de vida de la creación 
              de un paquete a través de funciones reservadas:
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
                    style={{ background: '#1794D1' }}
                  />
                  {b.text}
                </li>
              ))}
            </ul>

            <div
              className="rounded-xl p-4 mt-2"
              style={{
                background: 'rgba(23,148,209,0.05)',
                border: '1px solid rgba(23,148,209,0.15)',
              }}
            >
              <p className="text-[16px] leading-relaxed" style={{ color: 'rgba(51,51,51,0.8)' }}>
                <strong style={{ color: '#1794D1' }}>Regla de Oro:</strong> Siempre regenera el .SRCINFO 
                antes de hacer un push.
              </p>
            </div>
          </motion.div>

          {/* Right — visual */}
          <motion.div variants={fadeInRight}>
            <CodeBlock
              code={pkgbuildCode}
              language="PKGBUILD"
              fontSize={14}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
