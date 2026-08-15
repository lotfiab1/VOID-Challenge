import { CheckCircle2, Smartphone, Layers, Gift, BarChart3, Calendar } from 'lucide-react'
import heroBoot from '../assets/football-hero.png'

const FEATURES = [
  {
    icon: Smartphone,
    title: 'Activation instantanée',
    desc: 'QR codes uniques sur chaque produit',
  },
  {
    icon: Layers,
    title: 'Collection digitale',
    desc: 'Cartes de joueurs, raretés, échanges',
  },
  {
    icon: Gift,
    title: 'Récompenses exclusives',
    desc: 'Tirages au sort, lots partenaires, expériences VIP',
  },
  {
    icon: BarChart3,
    title: 'Analytics avancés',
    desc: 'Dashboard temps réel, insights consommateurs',
  },
]

export default function Solution() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F5F5_100%)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-24 py-16 lg:py-21">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-3xl max-w-md  overflow-hidden shadow-xl shadow-slate-900/10">
            <img
              src={heroBoot}
              alt="Chaussure de football sur un ballon"
              className="w-full h-full object-cover aspext-4/5"
            />
          </div>

          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-[#0B6B3A]">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Solution complète
            </span>

            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-ink-900 leading-tight">
              Le terrain de jeu digital de votre marque
            </h2>

            <p className="mt-4 text-[18px] font-normal text-[#475569] leading-relaxed">
              YouCanWin transforme vos produits en expériences interactives.
              Chaque achat devient une opportunité d'engagement avec vos
              consommateurs.
            </p>

            <ul className="mt-8 space-y-5">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-5 w-5 text-brand-600" />
                  </span>
                  <div>
                    <div className="text-[16px] font-semibold text-ink-900">{title}</div>
                    <div className="text-sm font-normal text-[#475569] mt-0.5">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#demo"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-[16px] font-medium text-white shadow-sm shadow-accent-500/30 hover:bg-accent-600 transition-colors"
            >
              Planifier une démo
              <Calendar className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
