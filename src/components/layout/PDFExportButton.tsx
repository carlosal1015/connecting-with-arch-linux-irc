import { motion, AnimatePresence } from 'motion/react'
import { Download, Loader2 } from 'lucide-react'
import type { PDFExportState } from '../../hooks/usePDFExport'

interface Props {
  onExport: () => void
  state: PDFExportState | null
}

export default function PDFExportButton({ onExport, state }: Props) {
  const exporting = state !== null

  return (
    <>
      <motion.button
        onClick={onExport}
        disabled={exporting}
        className="fixed bottom-[24px] left-8 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-sm shadow-sm transition-all duration-200"
        style={{
          background: exporting ? '#eee' : '#1794D1',
          border: `1px solid ${exporting ? '#ccc' : '#08c'}`,
          color: exporting ? '#999' : '#ffffff',
          cursor: exporting ? 'not-allowed' : 'pointer',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 11,
          fontWeight: 700,
        }}
        whileHover={!exporting ? { scale: 1.05 } : undefined}
        whileTap={!exporting ? { scale: 0.97 } : undefined}
        title="Export to PDF"
      >
        {exporting ? (
          <Loader2 size={12} style={{ animation: 'spin 1s linear infinite' }} />
        ) : (
          <Download size={12} />
        )}
        PDF
      </motion.button>

      <AnimatePresence>
        {exporting && state && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ background: 'rgba(246, 249, 252, 0.9)', backdropFilter: 'blur(4px)' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="flex flex-col items-center gap-6 rounded-sm p-12 border shadow-2xl"
              style={{ background: '#ffffff', borderColor: '#bcd' }}
            >
              <div className="relative w-16 h-16">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: '3px solid #eee' }}
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '3px solid transparent',
                    borderTopColor: '#1794D1',
                    animation: 'spin 0.9s linear infinite',
                  }}
                />
                <div
                  className="absolute inset-2 rounded-full flex items-center justify-center"
                  style={{ background: '#ecf2f5', color: '#1794D1' }}
                >
                  <Download size={20} />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div
                  className="text-[#333] font-bold text-lg"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Generating PDF...
                </div>
                <div
                  className="text-sm font-semibold"
                  style={{ fontFamily: 'JetBrains Mono, monospace', color: '#666' }}
                >
                  Capturing slide {state.current} / {state.total}
                </div>
              </div>

              <div
                className="w-64 h-2 rounded-sm overflow-hidden border"
                style={{ background: '#eee', borderColor: '#ddd' }}
              >
                <motion.div
                  className="h-full rounded-sm"
                  style={{ background: '#1794D1' }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${(state.current / state.total) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </>
  )
}
