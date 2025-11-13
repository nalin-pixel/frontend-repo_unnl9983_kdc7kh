import { Menu, ShoppingCart, Search } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-white/60 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="sm:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              <Menu size={22} />
            </button>
            <a href="/" className="font-extrabold text-xl tracking-tight">
              <span className="text-blue-600">Ball</span>
              <span className="text-gray-900">HQ</span>
            </a>
          </div>

          <nav className="hidden sm:flex items-center gap-8 text-sm text-gray-700">
            <a href="#products" className="hover:text-gray-900 transition-colors">New Arrivals</a>
            <a href="#kits" className="hover:text-gray-900 transition-colors">Club Kits</a>
            <a href="#boots" className="hover:text-gray-900 transition-colors">Boots</a>
            <a href="#accessories" className="hover:text-gray-900 transition-colors">Accessories</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center px-3 py-2 rounded-md bg-black/5">
              <Search size={18} className="text-gray-500" />
              <input placeholder="Search kits, boots..." className="bg-transparent outline-none ml-2 text-sm placeholder:text-gray-500" />
            </div>
            <button className="relative p-2 rounded-md hover:bg-black/5" aria-label="Cart">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] leading-4 px-1.5 rounded-full">2</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="sm:hidden border-t border-white/20 bg-white/70 backdrop-blur-xl">
            <div className="p-4 flex flex-col gap-3 text-sm">
              <a href="#products" className="py-2">New Arrivals</a>
              <a href="#kits" className="py-2">Club Kits</a>
              <a href="#boots" className="py-2">Boots</a>
              <a href="#accessories" className="py-2">Accessories</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
