import { ChevronRight, Lightbulb, QrCode, Gift, LayoutGrid, ScanLine, ArrowLeftRight, CircleUser } from 'lucide-react'

const STATS = [
  { value: '500K+', label: 'Interactions/mois',color:0x0B6B3A },
  { value: '50+', label: 'Marques actives' ,color:0xB01219},
  { value: 'x3.5', label: 'ROI moyen',color:0x0B6B3A },
]

const TRUSTED = ['Maroc Telecom', 'Inwi', 'Orange', 'Carrefour']

export default function Hero() {
  return (
    <section className="flex relative">
      <div className='inset-0 absolute z-0 none-flex'>
        <div className='inset-0 absolute bg-[linear-gradient(90deg,rgba(226,232,240,0.3)_1.56%,rgba(226,232,240,0)_1.56%),linear-gradient(180deg,rgba(226,232,240,0.3)_1.56%,rgba(226,232,240,0)_1.56%)]'></div>
        
        <div className='inset-0 absolute bg-[linear-gradient(135deg,#F0FDF4_0%,#FFFFFF_50%,#FEF2F2_100%)] opacity-50'></div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-4 py-14 lg:py-32 z-1">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="font-display font-bold text-5xl sm:text-7xl leading-[1.08] text-ink-900">
              Transformez chaque{' '}
              <span className="relative inline-block text-brand-600">
                produit
                <svg
                  className="absolute left-0 -bottom-1 w-full"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 8 Q100 -2 198 8" stroke="#16a34a" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              en expérience de jeu
            </h1>

            <p className="mt-6 text-2xl font-normal text-ink-500 leading-relaxed max-w-xl">
              YouCanWin connecte vos marques aux fans de football à travers des
              mécaniques de gamification innovantes.{' '}
              <span className="font-semibold text-ink-700">
                Codes QR, cartes digitales, défis et récompenses.
              </span>
            </p>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {STATS.map((s) => (
               
                <div key={s.label}>
                  <div className='font-display text-3xl sm:text-4xl font-bold' style={{color:`#${s.color.toString(16).padStart(6, '0')}`}}>
                    {s.value}
                  </div>
                  <div className="text-sm text-[#475569] font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(90deg,#16A34A_0%,#0B6B3A_100%)] px-8 py-4 text-[18px] font-medium text-white shadow-lg shadow-black/10 hover:shadow-xl transition-colors"
              >
                Voir la démo
                <ChevronRight size={20} className='translate-x-0 group-hover:translate-x-[10%] duration-200 m-1' />
              </a>
              <a
                href="#comment"
                className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[rgba(203,213,225,1)] bg-white px-8.5 py-4.5 text-md font-medium text-ink-700 transition-colors hover:scale-99 duration-100 hover:bg-[rgba(226,232,240,0.3)]"
              >
                <Lightbulb size={20} className="m-1" />
                Comment ça marche
              </a>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <p className="text-xs font-medium tracking-wider text-[rgba(100,116,139,1)]">
                ILS NOUS FONT CONFIANCE
              </p>
              <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
                {TRUSTED.map((t) => (
                  <span key={t} className="text-[rgba(148,163,184,1)] font-medium text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative max-w-md w-full mb-auto ml-auto">
            <div className="absolute -top-6 -right-2 lg:-right-10 z-20 flex items-center gap-3 rounded-2xl bg-white p-4  shadow-xl shadow-slate-900/10 ring-1 ring-slate-100">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50">
                <QrCode className="h-5 w-5 text-brand-600" />
              </span>
              <div>
                <div className="text-sm font-semibold text-[rgba(15,23,42,1)]">Scan QR Code</div>
                <div className="text-xs font-normal text-[rgba(100,116,139,1)]">Débloquer une carte</div>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] border-10 border-ink-900 bg-white shadow-2xl shadow-slate-900/20 overflow-hidden ">
              <div className="text-[rgba(255,255,255,1)] bg-linear-to-br from-brand-500 to-brand-800 px-5 pt-8 pb-6 text-white">
                <p className="text-[12px] font-medium tracking-wider ">
                  ALBUM DIGITAL 2025
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold">Ma Collection</h3>
                <div className="mt-4 flex gap-6">
                  <div>
                    <div className="font-display text-2xl font-bold">127</div>
                    <div className="text-[12px] font-extralight">Cartes</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold">76%</div>
                    <div className="text-[12px] font-extralight">Complet</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold">#12</div>
                    <div className="text-[12px] font-extralight">Rang</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 px-5 py-5 pb-55 bg-white">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-3/4 rounded-xl bg-slate-100 ring-1 ring-slate-200"
                  />
                ))}
              </div>

              <div className="flex items-center justify-around border-t border-slate-100 px-2 py-3 bg-white">
                {[LayoutGrid, ScanLine, ArrowLeftRight, CircleUser].map((Icon, i) => (
                  <Icon key={i} className="h-5 w-5 text-slate-300" />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 sm:-left-18 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-slate-900/10 ring-1 ring-slate-100">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50">
                <Gift className="h-5 w-5 text-accent-500" />
              </span>
              <div>
                <div className="text-sm font-semibold text-[rgba(15,23,42,1)]">Récompense</div>
                <div className="text-xs font-normal text-[rgba(100,116,139,1)]">Tirage hebdomadaire</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
