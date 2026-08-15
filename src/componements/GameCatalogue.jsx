import { ChevronRight } from 'lucide-react'
import gameAlbum from '../assets/game-album.jpg'
import gameQuiz from '../assets/game-quiz.png'
import gameTombola from '../assets/game-tombola.png'
import gamePronostics from '../assets/game-pronostics.png'

const GAMES = [
  {
    img: gameAlbum,
    badge: 'STAR',
    badgeTone: 'bg-brand-500',
    title: 'Album Digital 2025',
    desc: 'Collection de cartes avec échanges et défis.',
    cta: 'Découvrir',
  },
  {
    img: gameQuiz,
    badge: 'BIENTÔT',
    badgeTone: 'bg-ink-900/80',
    title: 'Quiz Football',
    desc: "Questions sur l'actualité et l'histoire du foot.",
    cta: null,
  },
  {
    img: gameTombola,
    badge: null,
    title: 'Tombola digitale',
    desc: 'Tirages au sort avec lots sponsorisés.',
    cta: null,
  },
  {
    img: gamePronostics,
    badge: null,
    title: 'Pronostics',
    desc: 'Prédictions de matchs et classements.',
    cta: null,
  },
]

export default function GameCatalogue() {
  return (
    <section id="jeux" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900">
            Catalogue de jeux
          </h2>
          <p className="mt-3 text-[16px] font-normal text-ink-500">
            Des mécaniques éprouvées pour engager vos audiences
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GAMES.map((g) => (
            <div
              key={g.title}
              className="group rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden  hover:shadow-[-10px_15px_32px_-3px_rgba(0,0,0,0.21)] transition-shadow"
            >
              <div className="relative aspect-[4/3]">
                <img src={g.img} alt={g.title} className="h-full w-full object-cover group-hover:scale-110" />
                {g.badge && (
                  <span
                    className={
                      'absolute top-3 right-3 rounded-full px-3 py-1 text-[11px] font-bold text-white ' +
                      g.badgeTone
                    }
                  >
                    {g.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-ink-900">{g.title}</h3>
                <p className="mt-1.5 text-sm text-ink-500 leading-relaxed min-h-[2.5rem]">
                  {g.desc}
                </p>
                {g.cta && (
                  <a
                    href="#album"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    {g.cta}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
