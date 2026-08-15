import { Zap, Heart, Share2 } from 'lucide-react'

const BENEFITS = [
  {
    icon: Zap,
    title: 'Engagement immédiat',
    desc: 'Chaque produit devient une opportunité de jeu',
  },
  {
    icon: Heart,
    title: 'Fidélisation naturelle',
    desc: 'Les clients reviennent pour compléter leur collection',
  },
  {
    icon: Share2,
    title: 'Viralité organique',
    desc: 'Les fans partagent et échangent entre eux',
  },
]

export default function BenefitsBanner() {
  return (
    <section className="bg-gradient-to-br from-brand-500 via-brand-700 to-brand-800">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col items-center text-center max-2xl md:max-w-4xl mx-auto gap-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
            Transformez vos ventes en expérience mémorable
          </h2>
          <p className="mt-3 text-[18px] max-w-3xl font-normal text-brand-50/90">
            YouCanWin offre à vos clients plus qu'un produit&nbsp;: une
            expérience interactive complète autour du football
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm px-6 py-9 text-center"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-white/15">
                <Icon className="h-8 w-8 text-white" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-[16px] text-[#F0FDF4] font-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
