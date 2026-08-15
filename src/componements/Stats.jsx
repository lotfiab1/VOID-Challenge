import { TrendingUp, Users, Star, Headset } from 'lucide-react'

const STATS = [
  { icon: TrendingUp, value: '500K+', label: 'Interactions mensuelles' },
  { icon: Users, value: '50+', label: 'Marques partenaires' },
  { icon: Star, value: '98%', label: 'Taux de satisfaction' },
  { icon: Headset, value: '24/7', label: 'Support technique' },
]

export default function Stats() {
  return (
    <section className="bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon className="mx-auto h-8 w-8 text-brand-500" />
              <div className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink-900">
                {value}
              </div>
              <div className="text-sm font-normal text-[#475569] mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
