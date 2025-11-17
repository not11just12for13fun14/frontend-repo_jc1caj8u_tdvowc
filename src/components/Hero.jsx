import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Particles from './Particles'

function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden text-white">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4TYZSovGytNgAJ2x/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Atmospheric overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Warm horizon glow */}
        <div className="absolute inset-x-0 bottom-0 h-[55%]" style={{
          background: 'linear-gradient(0deg, rgba(255,154,80,0.35) 0%, rgba(255,102,102,0.18) 35%, rgba(255,153,204,0.08) 65%, rgba(0,0,0,0) 100%)'
        }} />
        {/* Night sky fade */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(5,10,25,0.85) 0%, rgba(10,14,30,0.55) 35%, rgba(10,10,20,0.25) 60%, rgba(10,10,20,0.1) 100%)'
        }} />
        {/* Subtle vignette for cinematic feel */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(120% 120% at 50% 80%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.6) 100%)'
        }} />
      </div>

      {/* Floating particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[100svh] px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight drop-shadow-[0_2px_24px_rgba(255,150,120,0.35)]"
          >
            A Cinematic Dusk Over Silent Waters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="mt-4 md:mt-6 text-base md:text-lg text-white/80"
          >
            Minimal. Atmospheric. Mysterious. A hero backdrop crafted for a book landing page—clean lines, smooth lighting, and a thriller-like mood.
          </motion.p>
        </div>
      </div>

      {/* Subtle bottom gradient divider to transition into next sections */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20" style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(5,8,20,0.65) 100%)'
      }} />
    </section>
  )
}

export default Hero
