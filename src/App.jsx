import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#070b15] text-white">
      <Navbar />
      <Hero />
      {/* Placeholder below hero to demonstrate continuation of page */}
      <section className="relative z-10 -mt-1 bg-[#0a0f1e] text-white/80">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">A stage for your story</h2>
          <p className="mt-3">The cover above is an interactive, cinematic sunset sea with a perfectly calm surface, distant silhouettes, and a warm orange-pink-rose gradient fading into deep navy. It sets a mysterious, thriller-like mood for your landing page.</p>
        </div>
      </section>
    </div>
  )
}

export default App
