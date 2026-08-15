import { Calendar, MessageCircle } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-br from-accent-500 to-accent-700" id='demo'>
      <div className="mx-auto max-w-4xl px-5 lg:px-8 py-16 lg:py-20 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Prêt à transformer votre marketing&nbsp;?
        </h2>
        <p className="mt-3 text-[18px] font-normal text-[#FEF2F2]">
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4.5 text-sm font-semibold text-accent-600 hover:bg-white/90 transition-colors"
          >
            <Calendar className="h-4 w-4" />
            Planifier une démo gratuite
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-8 py-4.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  )
}
