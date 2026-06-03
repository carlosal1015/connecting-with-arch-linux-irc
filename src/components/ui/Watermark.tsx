import React from 'react'
import flisolLogo from '../../assets/images/flisol.svg'

interface WatermarkProps {
  opacity?: number
  size?: number | string
}

const Watermark: React.FC<WatermarkProps> = ({ opacity = 0.035, size = 850 }) => {
  return (
    <div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      style={{ opacity }}
    >
      <img 
        src={flisolLogo} 
        alt="FLISoL" 
        style={{ width: size, height: 'auto', filter: 'grayscale(100%)' }}
      />
    </div>
  )
}

export default Watermark
