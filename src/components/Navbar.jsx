import { Truck } from 'lucide-react'
import { navLinks } from '../data/siteContent'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-dsl-black/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-dsl-orange/20 bg-dsl-orange/10 text-dsl-orange shadow-glow">
            <Truck size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-dsl-orangeSoft">
              DSL
            </p>
            <p className="text-sm text-dsl-white/80">Driven Smart Logistics</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-dsl-gray transition hover:text-dsl-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="primary-btn hidden sm:inline-flex">
          Get Started
        </a>
      </div>
    </header>
  )
}

export default Navbar