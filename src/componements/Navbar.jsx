import { useState } from 'react'
import { Trophy, ChevronRight, Menu, X } from 'lucide-react'
import { FaTrophy } from 'react-icons/fa'
const LINKS = [
  { label: 'Nos offres', href: '#offres' },
  { label: 'Nos jeux', href: '#jeux' },
  { label: 'Album 2025', href: '#album' },
  { label: 'À propos', href: '#apropos' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-18 items-center justify-between py-3">
          <a href="#" className="group flex items-center gap-3 shrink-0">
            <div className="relative flex h-10 w-10 items-center justify-center">
              <div className="invisible absolute -inset-px rounded-xl bg-linear-to-r from-[#16A34A] to-red-600 opacity-20 blur-sm group-hover:visible"></div>
              <div className="relative flex items-center justify-center h-10 w-10 rounded-lg bg-linear-[135deg,#16A34A_0%,#0B6B3A_100%]">
                <FaTrophy className=" h-5 w-5 text-white " strokeWidth={2.5} />
              </div>
            </div>

            <div className='flex font-display gap-2'>
              <div className="flex text-[20px] font-bold">
                <span className='text-[rgba(220,38,38,1)]'>You</span>
                <span className='text-ink-900'>can</span>
                <span className='text-[rgba(11,107,58,1)]'>win</span>
              </div>
              <div className='bg-brand-50 flex items-center px-2 py-0.5 h-4.75 rounded-full self-end'>
                <span className="text-[10px] font-semibold tracking-wide text-brand-700">
                  GAMES
                </span>
              </div>
            </div>
          </a>

          <div className='flex gap-15'>
              <nav className="hidden lg:flex items-center gap-8">
                {LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="px-3 py-2 text-sm font-medium text-ink-700 rounded-md hover:bg-gray-50 hover:text-brand-500 ease-out transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="hidden lg:block">
                <a
                  href="#demo"
                  className="group inline-flex items-center gap-1 rounded-lg bg-linear-[90deg,#16A34A_0%,#0B6B3A_100%] px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-brand-500/30 hover:bg-brand-600 transition-colors hover:shadow-md"
                >
                  Demander une démo
                  <ChevronRight size={20} className='translate-x-0 group-hover:translate-x-[10%] duration-300 ml-2'/>
                </a>
              </div>

              <button
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-700"
                aria-label="Menu"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-5 py-4 space-y-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-ink-700 py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#demo"
            className="mt-2 flex items-center justify-center gap-1 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white"
          >
            Demander une démo
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  )
}
