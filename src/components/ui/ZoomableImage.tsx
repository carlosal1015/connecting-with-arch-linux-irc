import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

interface ZoomableImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
}

export default function ZoomableImage({ src, alt, className, containerClassName }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  // Prevent scroll when zoomed
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isZoomed])

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsZoomed(!isZoomed)
  }

  return (
    <div className={containerClassName}>
      <motion.img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]`}
        onClick={toggleZoom}
        whileHover={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
      />

      {createPortal(
        <AnimatePresence>
          {isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[2000] flex items-center justify-center p-8 md:p-16 bg-[#0a0a0acc] backdrop-blur-md cursor-zoom-out"
              onClick={toggleZoom}
            >
              <motion.button
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all z-[2001]"
                onClick={toggleZoom}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={28} />
              </motion.button>

              <motion.div
                className="relative max-w-full max-h-full flex items-center justify-center cursor-zoom-out"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={toggleZoom}
              >
                <img
                  src={src}
                  alt={alt}
                  className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                />
                <div className="absolute -bottom-10 left-0 right-0 text-center">
                  <p className="text-white/60 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {alt}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}
