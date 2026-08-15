import {
  QrCode,
  Users,
  SlidersHorizontal,
  BarChart3,
  Gift,
  Bell,
  Download,
  Layers,
  Settings,
  ChevronRight
} from 'lucide-react'

const TOOLS = [
  {
    icon: QrCode,
    title: 'Générateur QR Codes',
    desc: 'Créez et téléchargez vos QR codes uniques en masse',
  },
  {
    icon: Users,
    title: 'CRM Participants',
    desc: 'Collectez et gérez vos participants avec segmentation avancée',
  },
  {
    icon: SlidersHorizontal,
    title: 'Configuration jeux',
    desc: 'Paramétrez entièrement vos jeux : règles, lots, durée, visuels',
  },
  {
    icon: BarChart3,
    title: 'Analytics temps réel',
    desc: 'Suivez vos KPIs : scans, conversions, engagement, ROI',
  },
  {
    icon: Gift,
    title: 'Gestion des lots',
    desc: 'Définissez vos récompenses et gérez les tirages au sort',
  },
  {
    icon: Bell,
    title: 'Notifications',
    desc: 'Envoyez des push, emails et SMS à vos participants',
  },
  {
    icon: Download,
    title: 'Export données',
    desc: 'Téléchargez vos données en CSV, Excel ou via API',
  },
  {
    icon: Layers,
    title: 'Multi-campagnes',
    desc: 'Gérez plusieurs campagnes simultanément',
  }
]


export default function Backoffice() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="text-center flex flex-col items-center sm:max-w-2xl lg:max-w-7xl mx-auto gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCFCE7] px-4 py-1.5 text-sm font-medium text-[#0B6B3A]">
            <Settings className="h-3.5 w-3.5" />
            Backoffice tout-en-un
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-ink-900">
            Gérez tout depuis une interface unique
          </h2>
          <p className="mt-3 text-[18px]  sm:max-w-2xl  text-ink-500">
            Notre backoffice intuitif vous permet de créer, configurer et
            piloter vos campagnes en toute autonomie
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOOLS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-white ring-1 ring-slate-200 px-6 py-7 hover:shadow-lg hover:shadow-slate-900/5 transition-shadow"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                <Icon className="h-5 w-5 text-brand-600" />
              </span>
              <h3 className="mt-4 font-semibold text-ink-900">{title}</h3>
              <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#backoffice-access"
            className="group inline-flex items-center  gap-1.5 rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-brand-500/30 hover:bg-brand-600 transition-colors"
          >
            Demander un accès au backoffice
            <ChevronRight size={20} className=" translate-x-0 group-hover:translate-x-1 duration-300 m-[0_8px]" />
          </a>
        </div>
      </div>

      
    </section>
  )
}
