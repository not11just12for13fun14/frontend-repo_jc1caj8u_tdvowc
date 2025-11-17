import React from 'react'
import { Menu, Book, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="absolute top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between text-white/90">
        <div className="flex items-center gap-2">
          <Book className="w-5 h-5 text-white/80" />
          <span className="font-semibold tracking-wide">Nightfall Press</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="hover:text-white transition-colors" href="#">Home</a>
          <a className="hover:text-white transition-colors" href="#">Chapters</a>
          <a className="hover:text-white transition-colors" href="#">Author</a>
          <a className="hover:text-white transition-colors" href="#">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-white/80" />
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-white/90" />
          </button>
        </div>
      </div>
    </header>
  )
}
