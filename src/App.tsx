import { useState, useCallback } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { usePresentation } from './hooks/usePresentation'
import { usePDFExport } from './hooks/usePDFExport'
import { SLIDES_CONFIG } from './data/slides'
import { slideVariants } from './utils/animations'

// Layout
import ProgressBar      from './components/layout/ProgressBar'
import NavArrows        from './components/layout/NavArrows'
import NavDots          from './components/layout/NavDots'
import SlideCounter     from './components/layout/SlideCounter'
import PDFExportButton  from './components/layout/PDFExportButton'
import AmbientBackground from './components/layout/AmbientBackground'

export default function App() {
  const total = SLIDES_CONFIG.length
  const { current, direction, go, jumpTo } = usePresentation(total)
  const CurrentSlide = SLIDES_CONFIG[current].component

  // PDF export
  const [printSlide, setPrintSlide] = useState<number | null>(null)
  const handleSetPrintSlide = useCallback((i: number | null) => setPrintSlide(i), [])
  const { exportToPDF, state: pdfState } = usePDFExport(total, handleSetPrintSlide)
  const PrintSlide = printSlide !== null ? SLIDES_CONFIG[printSlide].component : null

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: 'var(--color-bg-deep)' }}>
      {/* Ambient background */}
      <AmbientBackground />

      {/* Chrome */}
      <ProgressBar current={current} total={total} />
      <NavArrows
        onPrev={() => go(-1)}
        onNext={() => go(1)}
        canPrev={current > 0}
        canNext={current < total - 1}
      />
      <NavDots current={current} total={total} slides={SLIDES_CONFIG} onJump={jumpTo} />
      <SlideCounter current={current} total={total} />
      <PDFExportButton onExport={exportToPDF} state={pdfState} />

      {/* Active slide */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-10"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      {/* Off-screen frame used by PDF export — do not remove */}
      {PrintSlide && (
        <MotionConfig reducedMotion="always">
          <div
            id="pdf-print-frame"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: 1280,
              height: 720,
              background: 'var(--color-bg-deep)',
              overflow: 'hidden',
              pointerEvents: 'none',
              zIndex: 150,
            }}
          >
            <AmbientBackground />
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <PrintSlide />
            </div>
          </div>
        </MotionConfig>
      )}
    </div>
  )
}
