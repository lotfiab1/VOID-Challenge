import { Zap, TrendingUp, Globe2, Check } from 'lucide-react'

const PLANS = [
  {
    icon: Zap,
    name: 'Starter',
    tag: 'Campagne locale',
    desc: 'Idéal pour tester sur un marché',
    price: 'Tarification sur mesure selon vos volumes',
    features: [
      "Jusqu'à 1 000 utilisateurs",
      "Jusqu'à 10K QR codes",
      '1 pays / région',
      'Album standard (équipe nationale)',
      'Hébergement Cloud sécurisé',
      'Backoffice simplifié',
      'Support par email',
      '1 marque',
    ],
    cta: 'Demander un devis',
    popular: false,
  },
  {
    icon: TrendingUp,
    name: 'Scale',
    tag: 'Expansion nationale',
    desc: "Pour des campagnes d'envergure",
    price: 'Tarification sur mesure selon vos volumes',
    features: [
      "Jusqu'à 50 000 utilisateurs",
      'QR codes illimités',
      'Multi pays (jusqu\'à 5)',
      'Album complet (toutes les équipes)',
      'Cloud ou On Premise',
      'Backoffice avancé avec analytics',
      'Support prioritaire 24/7',
      "Jusqu'à 3 marques",
      'API REST disponible',
    ],
    cta: 'Planifier une démo',
    popular: true,
  },
  {
    icon: Globe2,
    name: 'Enterprise',
    tag: 'Solution globale',
    desc: 'Pour les groupes internationaux',
    price: 'Tarification sur mesure selon vos volumes',
    features: [
      'Utilisateurs illimités',
      'QR codes illimités',
      'Déploiement mondial',
      'Albums personnalisés par région',
      'Infrastructure dédiée (On Premise)',
      'Multi marques illimité',
      'Développements sur mesure',
      'Account manager dédié',
      'SLA garanti 99.9%',
      'Formation et onboarding complet',
    ],
    cta: 'Contactez-nous',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)]" id='offres'>
      <div className="mx-auto max-w-7xl px-3 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl md:max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900">
            Des formules adaptées à votre échelle
          </h2>
          <p className="mt-3 text-[16px] font-normal text-ink-500">
            Choisissez la solution qui correspond à vos besoins et votre ambition
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6 place-items-center ">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={
                'relative sm:min-w-sm rounded-3xl px-7 py-9 flex flex-col h-full items-center bg-white sm:items-start hover:shadow-xl ' +
                (plan.popular
                  ? 'ring-2 ring-[#FECACA] shadow-xl lg:-translate-y-3'
                  : 'ring-1 ring-[#E2E8F0]')
              }
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-4 py-1 text-[11px] font-bold tracking-wide text-white">
                  POPULAIRE
                </span>
              )}

              <span
                className={
                  'flex h-12 w-12 items-center justify-center rounded-xl ' +
                  (plan.popular ? 'bg-white' : 'bg-brand-50')
                }
              >
                <plan.icon
                  className={'h-6 w-6 ' + (plan.popular ? 'text-accent-500' : 'text-brand-600')}
                />
              </span>

              <h3 className="mt-5 font-display text-xl font-700 text-ink-900">{plan.name}</h3>
              <p className="text-sm font-semibold text-brand-600">{plan.tag}</p>
              <p className="mt-3 text-sm text-ink-500">{plan.desc}</p>

              <p className="mt-6 pt-6 border-t border-slate-100 text-sm text-ink-500">
                {plan.price}
              </p>

              <ul className="mt-5 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <Check className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={
                  'mt-8 w-full inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors ' +
                  (plan.popular
                    ? 'bg-accent-500 text-white hover:bg-accent-600 shadow-sm shadow-accent-500/30'
                    : 'border border-slate-200 text-ink-900 hover:bg-gray-100')
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
