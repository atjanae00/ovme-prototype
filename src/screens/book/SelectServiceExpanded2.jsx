import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'
import offerPhoto from '../../assets/book/offer-photo.jpg'
import logoOvme from '../../assets/book/logo-ovme.svg'
import menuIcon from '../../assets/book/menu-01.svg'
import markerPinIcon from '../../assets/book/marker-pin-01.svg'
import searchSmIcon from '../../assets/book/search-sm.svg'
import chevronDownIcon from '../../assets/book/chevron-down.svg'
import chevronUpIcon from '../../assets/book/chevron-up.svg'
import checkIcon from '../../assets/book/check.svg'
import radioUnselected from '../../assets/book/radio-unselected.svg'

const PROVIDERS = ['Any provider', 'Chelsea Leos', 'Taylor Bagley']

const UPGRADES = [
  {
    name: 'SkinVive Add-on',
    description: 'Boost hydration, smooth skin and achieve a radiant glow.',
    price: 'Starts at $297/syringe',
    selected: true,
  },
  {
    name: 'VI Peel Add-on',
    description: 'Combat fine lines & wrinkles, and boost collagen',
    price: 'Starts at $249',
    selected: false,
  },
]

const OTHER_CATEGORIES = [
  { name: 'Peptides', count: '3 services' },
  { name: 'Skin', count: '3 services' },
]

export default function SelectServiceExpanded2() {
  return (
    <div className="relative mx-auto min-h-svh w-full max-w-[430px] border border-[#e5e7eb] bg-white">
      {/* Header */}
      <div className="relative flex h-[155px] w-full flex-col items-center justify-end bg-[#4165ca] pb-5">
        <div className="flex w-full max-w-[363px] items-start justify-between px-4">
          <div className="flex flex-col items-center gap-2">
            <img src={logoOvme} alt="OVME" className="h-[30px] w-auto" />
            <p className="text-sm uppercase tracking-[1.5px] text-[#fff0e1]">medical aesthetics</p>
          </div>
          <button type="button" aria-label="Menu">
            <img src={menuIcon} alt="" className="size-10" />
          </button>
        </div>
      </div>

      <div className="mx-auto flex w-[calc(100%-31px)] max-w-[360px] flex-col items-center gap-4 py-4">
        {/* Sign in banner */}
        <div className="flex w-full items-center justify-between gap-4 rounded-[10px] bg-[#f1f0fe] p-4">
          <p className="text-sm font-medium text-[#0f172a]">
            Sign in to easily book, manage, and view your appointments
          </p>
          <Link
            to="/profile"
            className="shrink-0 rounded-md bg-[#3995fc] px-3 py-2 text-sm font-bold text-white"
          >
            Sign in
          </Link>
        </div>

        {/* Membership offer */}
        <div className="relative h-[200px] w-full overflow-hidden rounded-[10px] bg-[#ffefe1]">
          <img src={offerPhoto} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[rgba(70,89,92,0.82)] mix-blend-multiply" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-white">
            <div className="flex flex-col items-center gap-2 [text-shadow:0px_4px_11.3px_rgba(0,0,0,0.25)]">
              <p className="text-xl">
                Consistent <span className="italic">care</span>, lasting <span className="italic">confidence</span>
              </p>
              <p className="max-w-[325px] text-sm">
                Memberships designed to help you achieve your skincare goals through personalized guidance,
                consistency, and expert-led care
              </p>
            </div>
            <button
              type="button"
              className="h-8 w-[264px] rounded-[44px] border border-white text-sm font-bold text-white"
            >
              Explore memberships
            </button>
          </div>
        </div>

        {/* Current location */}
        <div className="flex w-full flex-col gap-2 py-2">
          <p className="text-[11px] font-bold uppercase text-[#6b7280]">Current Location</p>
          <div className="flex items-center justify-between rounded-xl border border-[#e5e7eb] bg-[#f8f8f8] p-3.5">
            <div className="flex items-center gap-2">
              <img src={markerPinIcon} alt="" className="size-5" />
              <p className="text-sm font-semibold text-[#2e2321]">Chapel Hill - Village Plaza</p>
            </div>
            <Link to="/book/locations" className="text-sm font-semibold text-[#3995fc]">
              Change
            </Link>
          </div>
        </div>

        {/* Select a service */}
        <div className="flex w-full flex-col gap-4">
          <p className="text-[11px] font-bold uppercase text-[#6b7280]">select a service</p>
          <div className="flex h-10 w-full items-center gap-2 rounded-[38px] border border-[#e5e7eb] bg-white px-4 py-1">
            <img src={searchSmIcon} alt="" className="size-5" />
            <span className="text-sm text-[#7b7b7b]">Search for a service</span>
          </div>

          {/* Consults - collapsed */}
          <Link
            to="/book/select-service/expanded-1"
            className="flex w-full items-center justify-between overflow-hidden rounded-xl border border-[#f8f8f8] bg-white p-4"
          >
            <p className="text-sm font-bold text-[#46595c]">Consults</p>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#f8f8f8] px-2 py-0.5 text-[10px] font-semibold text-[#475569]">
                3 services
              </span>
              <img src={chevronDownIcon} alt="" className="size-4" />
            </div>
          </Link>

          {/* Injectables - expanded */}
          <div className="w-full overflow-hidden rounded-xl border border-[#fec289] bg-white">
            <div className="flex w-full items-center justify-between bg-[#fff0e1] p-4">
              <p className="text-sm font-bold text-[#46595c]">Injectables</p>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-[#fec289] bg-white px-2 py-0.5 text-[10px] font-semibold text-[#475569]">
                  11 services
                </span>
                <img src={chevronUpIcon} alt="" className="size-4" />
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 p-4">
              {/* Service 1 - selected, with upgrades */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-[#0f172a]">Botox or Dysport</p>
                  <div className="flex items-center gap-2 pb-3 pt-1">
                    <span className="rounded-full bg-[#f1f0fe] px-2 py-0.5 text-[11px] text-[#475569]">Varies</span>
                    <span className="text-xs font-bold text-[#46595c]">First-time client starts at $10/ unit</span>
                  </div>
                  <p className="text-xs leading-snug text-[#606060]">
                    Temporarily smooth the appearance of fine lines and wrinkles.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center gap-1 rounded-md bg-[#3995fc] px-3 py-2 text-xs font-bold text-white"
                >
                  <img src={checkIcon} alt="" className="size-4" />
                  Selected
                </button>
              </div>

              {/* Suggested upgrades */}
              <div className="flex w-full flex-col gap-2">
                <p className="text-[11px] font-bold uppercase text-[#6b7280]">suggested upgrades</p>
                <div className="flex gap-1">
                  {UPGRADES.map((upgrade) => (
                    <div
                      key={upgrade.name}
                      className={`flex w-[162px] flex-col gap-2 rounded-md border px-3 py-2 ${
                        upgrade.selected ? 'border-[#3995fc] bg-[#d8ecff]' : 'border-[#e2e8f0] bg-white'
                      }`}
                    >
                      <p className="text-xs font-bold text-[#46595c]">{upgrade.name}</p>
                      <p className="text-[10px] text-[#606060]">{upgrade.description}</p>
                      <p className="text-[10px] font-semibold text-[#606060]">{upgrade.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Providers */}
              <div className="flex w-full flex-col gap-2">
                <p className="text-[11px] font-bold uppercase text-[#6b7280]">select a provider</p>
                {PROVIDERS.map((provider) => (
                  <div
                    key={provider}
                    className="flex h-10 w-full items-center justify-between rounded-md bg-[#f8f8f8] px-3 py-1.5"
                  >
                    <p className="text-xs font-bold text-[#46595c]">{provider}</p>
                    <img src={radioUnselected} alt="" className="size-[18px]" />
                  </div>
                ))}
              </div>

              <div className="h-px w-full bg-[#f1eae2]" />

              {/* Service 2 */}
              <div className="flex w-full flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-[#0f172a]">Botox or Dysport + Dermal Filler</p>
                  <div className="flex items-center gap-2 pb-3 pt-1">
                    <span className="rounded-full bg-[#f1f0fe] px-2 py-0.5 text-[11px] text-[#475569]">Varies</span>
                    <span className="text-xs font-bold text-[#46595c]">Starts at $200</span>
                  </div>
                  <p className="text-xs leading-snug text-[#606060]">
                    A combination of Botox or Dysport with Dermal Filler.
                  </p>
                </div>
                <button
                  type="button"
                  className="w-full rounded-md border border-[#3995fc] px-3 py-2 text-xs font-bold text-[#3995fc]"
                >
                  Select
                </button>
              </div>

              <div className="h-px w-full bg-[#f1eae2]" />

              {/* Service 3 */}
              <div className="flex w-full flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-[#0f172a]">Dermal Filler</p>
                  <div className="flex items-center gap-2 pb-3 pt-1">
                    <span className="rounded-full bg-[#f1f0fe] px-2 py-0.5 text-[11px] text-[#475569]">2 hours +</span>
                    <span className="text-xs font-bold text-[#46595c]">
                      First-time client starts at $499/syringe
                    </span>
                  </div>
                  <p className="text-xs leading-snug text-[#606060]">
                    Restore volume, smooth wrinkles, and enhance contours.
                  </p>
                </div>
                <button
                  type="button"
                  className="w-full rounded-md border border-[#3995fc] px-3 py-2 text-xs font-bold text-[#3995fc]"
                >
                  Select
                </button>
              </div>
            </div>
          </div>

          {OTHER_CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              type="button"
              className="flex w-full items-center justify-between overflow-hidden rounded-xl border border-[#f8f8f8] bg-white p-4"
            >
              <p className="text-sm font-bold text-[#46595c]">{cat.name}</p>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#f1f0fe] px-2 py-0.5 text-[10px] font-semibold text-[#475569]">
                  {cat.count}
                </span>
                <img src={chevronDownIcon} alt="" className="size-4" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="h-8" />

      <ScreenNav />
    </div>
  )
}
