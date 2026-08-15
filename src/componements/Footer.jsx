import { ShieldCheck } from 'lucide-react'
import { FaTrophy } from 'react-icons/fa'
const QUICK_LINKS = 
[
  { label: 'Nos offres', href: '#offres' },
  { label: 'Nos jeux', href: '#jeux' },
  { label: 'Album 2025', href: '#album' },
  { label: 'À propos', href: '#apropos' },
]
const LEGAL_LINKS = [
  { label: 'Mentions légales', href: '#' },
  { label: 'Protection des données (CNDP)', href: '#', external: true },
  { label: "Conditions d'utilisation", href: '#' },
]

const SOCIALS = [
  {
    name: 'Facebook',
    path: 'M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5H16.5V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V10.5H8v3h2.3V21h3.2z',
  },
  {
    name: 'X',
    path: 'M4 4l7 8.6L4.3 20H6l5.8-6.2L15.9 20H20l-7.3-8.9L19.6 4h-1.8l-5.4 5.8L8.1 4H4zm2.6 1.4h1.8l9 11.2h-1.8L6.6 5.4z',
  },
  {
    name: 'Instagram',
    path: 'M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm0 1.6A2.4 2.4 0 0 0 5.6 8v8A2.4 2.4 0 0 0 8 18.4h8a2.4 2.4 0 0 0 2.4-2.4V8A2.4 2.4 0 0 0 16 5.6H8zm4 2.6a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6zm0 1.6a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4zm4.1-2.7a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z',
  },
  {
    name: 'LinkedIn',
    path: 'M6.94 8.5H4.06V19h2.88V8.5zM5.5 4a1.67 1.67 0 1 0 0 3.34A1.67 1.67 0 0 0 5.5 4zM19.94 19h-2.87v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V19H10.2V8.5h2.75v1.43h.04c.38-.73 1.32-1.5 2.72-1.5 2.9 0 3.44 1.9 3.44 4.38V19z',
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500">
                <FaTrophy className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <div className="flex text-[20px] font-bold">
                <span className='text-[rgba(220,38,38,1)]'>You</span>
                <span className='text-ink-900'>can</span>
                <span className='text-[rgba(11,107,58,1)]'>win</span>
              </div>
            </a>
            <p className="mt-4 text-sm text-ink-500 leading-relaxed max-w-sm">
              Plateforme de jeux digitaux pour engager vos communautés autour
              du football. Un service d'Agency.Africa.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200/70 text-ink-700 hover:bg-brand-500 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-ink-900">Liens rapides</h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-ink-500 hover:text-brand-600">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-ink-900">Contact &amp; Légal</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:games@agency.africa"
                  className="text-sm text-ink-500 hover:text-brand-600"
                >
                  games@agency.africa
                </a>
              </li>
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-ink-500 hover:text-brand-600">
                    {l.label}
                    {l.external && ' ↗'}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-500">
          <p>© 2025 Youcanwin. Tous droits réservés.</p>
          <p>
            Un service de{' '}
            <span className="font-semibold text-ink-700">Agency.Africa</span>
            {' — games.agency.africa'}
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-4 py-2 text-sm font-medium text-black">
            <ShieldCheck className="h-3.75 w-3.75" />
            Site conforme CNDP Maroc
          </span>
        </div>
      </div>
    </footer>
  )
}
