import { ShoppingCart, QrCode, Unlock, Grid3x3, Gift } from 'lucide-react'

const STEPS = [
  {
    n: 1,
    icon: ShoppingCart,
    title: 'Achat produit',
    desc: 'Le client achète votre produit en magasin',
    tone: 'brand',
  },
  {
    n: 2,
    icon: QrCode,
    title: 'Scan QR Code',
    desc: "Il scanne le code sur l'emballage",
    tone: 'brand',
  },
  {
    n: 3,
    icon: Unlock,
    title: 'Déblocage carte',
    desc: 'Une carte digitale est débloquée',
    tone: 'brand',
  },
  {
    n: 4,
    icon: Grid3x3,
    title: 'Collection',
    desc: 'Il complète sa collection',
    tone: 'accent',
  },
  {
    n: 5,
    icon: Gift,
    title: 'Récompenses',
    desc: 'Participe aux tirages',
    tone: 'accent',
  },
]

export default function Journey() {
  return (
    <section className="bg-white" id='comment'>
      <div className="mx-auto max-w-7xl px-5 lg:px-24 py-16 lg:py-20">
        <div className="text-center max-w-2xl lg:max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink-900">
            Un parcours client simple et engageant
          </h2>
          <p className="mt-3 text-md font-normal text-[#475569]">
            De l'achat du produit à la récompense, en 5 étapes
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-12">
          {STEPS.map(({ n, icon: Icon, title, desc, tone }) => (
            <div key={n} className="relative text-center">
              <div className="relative mx-auto w-16 h-16">
                <div
                  className={
                    'flex h-16 w-16 items-center justify-center rounded-2xl bg-white border-2 shadow ' +
                    (tone === 'brand'
                      ? 'border-[#BBF7D0] '
                      : 'border-[#FECACA] ')
                  }
                >
                  <Icon
                    className={
                      'h-6 w-6 ' + (tone === 'brand' ? 'text-brand-600' : 'text-accent-500')
                    }
                  />
                </div>
                <span
                  className={
                    'absolute -top-4 -right-10 lg:-top-4 lg:-right-20 flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white ' +
                    (tone === 'brand' ? 'bg-brand-500' : 'bg-accent-500')
                  }
                >
                  {n}
                </span>
              </div>
              <h3 className="mt-4 text-[16px] font-semibold text-ink-900">{title}</h3>
              <p className="mt-1 text-sm font-normal text-[#475569] leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
