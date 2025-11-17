import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

// Soft floating particles for subtle atmosphere
export default function Particles() {
  const dots = useMemo(() => Array.from({ length: 70 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 6,
    duration: 8 + Math.random() * 6,
    opacity: 0.15 + Math.random() * 0.25
  })), [])

  return (
    <div className="pointer-events-none absolute inset-0 z-[1]">
      {dots.map(dot => (
        <motion.span
          key={dot.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: dot.opacity,
            y: [0, -12, 0],
            x: [0, 6, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: dot.duration,
            delay: dot.delay,
            ease: 'easeInOut'
          }}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            filter: 'blur(0.5px)'
          }}
          className="absolute rounded-full bg-white/50 shadow-[0_0_8px_rgba(255,160,120,0.25)]"
        />
      ))}
    </div>
  )
}
