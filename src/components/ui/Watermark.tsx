import React from 'react'

interface WatermarkProps {
  opacity?: number
  size?: number | string
}

const Watermark: React.FC<WatermarkProps> = ({ opacity = 0.035 }) => {
  return (
    <div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      style={{ opacity }}
    >
      <div 
        className="text-center font-black uppercase"
        style={{ 
          fontSize: '90px', 
          lineHeight: 1.1,
          fontFamily: 'Outfit, sans-serif',
          color: '#333',
          maxWidth: '1200px',
          letterSpacing: '-0.02em'
        }}
      >
        Dev Rush Encuentro Interuniversitario<br />
        <span style={{ fontSize: '70px', letterSpacing: 'normal' }}>🇪🇨 Ecuador - 🇵🇪 Perú</span>
      </div>
    </div>
  )
}

export default Watermark
