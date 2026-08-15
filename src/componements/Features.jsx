import {
  QrCode,
  UserCircle,
  Globe2,
  Archive,
  Cloud
} from 'lucide-react';

const SCALE = [
  { icon: UserCircle, label: 'Utilisateurs', value: 'De 1K à illimité' },
  { icon: QrCode, label: 'QR Codes', value: 'Volume adapté' },
  { icon: Globe2, label: 'Couverture', value: 'Local à mondial' },
  { icon: Archive, label: 'Albums', value: 'Standard ou custom' },
  { icon: Cloud, label: 'Infrastructure', value: 'Cloud ou On Premise' },
]



export default function Features(){


    return (
        <section className='bg-white' >
            <div className="border-t border-slate-200">
                <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 text-center">
                    {SCALE.map(({ icon: Icon, label, value }) => (
                    <div key={label}>
                        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0FDF4] gap-2">
                        <Icon className="h-6 w-6 text-brand-500" />
                        </span>
                        <div className="mt-3 text-[16px] font-semibold text-ink-900 text-sm">{label}</div>
                        <div className="text-xs font-normal text-ink-500 mt-0.5">{value}</div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}