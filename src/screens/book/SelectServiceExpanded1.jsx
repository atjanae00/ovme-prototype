import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'
import offerPhoto from '../../assets/book/offer-photo.jpg'
import logoOvme from '../../assets/book/logo-ovme.svg'
import menuIcon from '../../assets/book/menu-01.svg'
import markerPinIcon from '../../assets/book/marker-pin-01.svg'
import searchSmIcon from '../../assets/book/search-sm.svg'
import chevronDownIcon from '../../assets/book/chevron-down.svg'
import chevronUpIcon from '../../assets/book/chevron-up.svg'
import chevronLeftIcon from '../../assets/book/chevron-left.svg'
import chevronRightIcon from '../../assets/book/chevron-right.svg'
import checkIcon from '../../assets/book/check.svg'
import radioSelected from '../../assets/book/radio-selected.svg'
import radioUnselected from '../../assets/book/radio-unselected.svg'

const OTHER_CATEGORIES = [
  { name: 'Injectables', count: '11 services', to: '/book/select-service/expanded-2' },
  { name: 'Peptides', count: '3 services' },
  { name: 'Skin', count: '3 services' },
]

const PROVIDERS = ['Any provider', 'Chelsea Leos', 'Taylor Bagley']

const WEEK_ROWS = [
  [1, 2],
  [3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
]

const LAST_ROW = [
  { day: 24, color: 'text-[#df9641]' },
  { day: 25, color: 'text-[#df9641]' },
  { day: 26, color: 'text-[#df9641]' },
  { day: 27, selected: true },
  { day: 28, color: 'text-[#00872e]' },
  { day: 29, color: 'text-[#00872e]' },
  { day: 30, color: 'text-[#df9641]' },
]

const SLOTS = ['10:00 AM', '11:30 AM', '2:30 PM', '4:00 PM']

export default function SelectServiceExpanded1() {
  return (
    <div className="relative mx-auto min-h-svh w-full max-w-[430px] border border-[#e5e7eb] bg-white pb-40">
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

      <div className="mx-auto flex w-[calc(100%-30px)] max-w-[360px] flex-col items-center gap-4 py-4">
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

          {/* Consults - expanded */}
          <div className="w-full overflow-hidden rounded-xl border border-[#fec289] bg-white">
            <div className="flex w-full items-center justify-between bg-[#fff0e1] p-4">
              <p className="text-sm font-bold text-[#46595c]">Consults</p>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-[#fec289] bg-white px-2 py-0.5 text-[11px] text-[#475569]">
                  3 services
                </span>
                <img src={chevronUpIcon} alt="" className="size-4" />
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 p-4">
              {/* Service 1 - selected */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-[#0f172a]">
                    Consult – Injectables (Botox or Dermal Fillers)
                  </p>
                  <div className="flex items-center gap-2 pb-3 pt-1">
                    <span className="rounded-full bg-[#f1f0fe] px-2 py-0.5 text-[11px] text-[#475569]">30 min</span>
                    <span className="text-xs font-bold text-[#46595c]">Complimentary</span>
                  </div>
                  <p className="text-xs leading-snug text-[#606060]">
                    Meet with an expert injector to discuss goals and create a custom wrinkle-relaxer or volume
                    treatment plan.
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

              {/* Providers */}
              <div className="flex w-full flex-col gap-2">
                <p className="text-[11px] font-bold uppercase text-[#6b7280]">select a provider</p>
                {PROVIDERS.map((provider, i) => (
                  <div
                    key={provider}
                    className={`flex h-10 w-full items-center justify-between rounded-md bg-[#f8f8f8] px-3 py-1.5 ${
                      i === 1 ? 'border border-[#3995fc]' : ''
                    }`}
                  >
                    <p className="text-xs font-bold text-[#46595c]">{provider}</p>
                    <img src={i === 1 ? radioSelected : radioUnselected} alt="" className="size-[18px]" />
                  </div>
                ))}
              </div>

              <div className="h-px w-full bg-[#f1eae2]" />

              {/* Service 2 */}
              <div className="flex w-full flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-[#0f172a]">Consult – Halo Laser Resurfacing or Photofacial</p>
                  <div className="flex items-center gap-2 pb-3 pt-1">
                    <span className="rounded-full bg-[#f1f0fe] px-2 py-0.5 text-[11px] text-[#475569]">45 min</span>
                    <span className="text-xs font-bold text-[#46595c]">Complimentary</span>
                  </div>
                  <p className="text-xs leading-snug text-[#606060]">
                    Advanced skin analysis for deep texture correction, sun damage reversal, and customized laser
                    settings.
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
                  <p className="text-sm font-medium text-[#0f172a]">
                    Consult – Skin Analysis (Chemical Peels, Facials, or Skincare)
                  </p>
                  <div className="flex items-center gap-2 pb-3 pt-1">
                    <span className="rounded-full bg-[#f1f0fe] px-2 py-0.5 text-[11px] text-[#475569]">30 min</span>
                    <span className="text-xs font-bold text-[#46595c]">Complimentary</span>
                  </div>
                  <p className="text-xs leading-snug text-[#606060]">
                    Meet with an expert for a complimentary VISIA skin analysis ($150 value) and learn more about
                    Chemical Peels, facials or skincare.
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

          {OTHER_CATEGORIES.map((cat) =>
            cat.to ? (
              <Link
                key={cat.name}
                to={cat.to}
                className="flex w-full items-center justify-between overflow-hidden rounded-xl border border-[#f1f0fe] bg-white p-4"
              >
                <p className="text-sm font-bold text-[#46595c]">{cat.name}</p>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#f1f0fe] px-2 py-0.5 text-[10px] font-semibold text-[#475569]">
                    {cat.count}
                  </span>
                  <img src={chevronDownIcon} alt="" className="size-4" />
                </div>
              </Link>
            ) : (
              <button
                key={cat.name}
                type="button"
                className="flex w-full items-center justify-between overflow-hidden rounded-xl border border-[#f1f0fe] bg-white p-4"
              >
                <p className="text-sm font-bold text-[#46595c]">{cat.name}</p>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#f1f0fe] px-2 py-0.5 text-[10px] font-semibold text-[#475569]">
                    {cat.count}
                  </span>
                  <img src={chevronDownIcon} alt="" className="size-4" />
                </div>
              </button>
            ),
          )}
        </div>

        {/* Select date and time */}
        <div className="flex w-full flex-col gap-2">
          <p className="w-full text-[11px] font-bold uppercase text-[#6b7280]">select date and time</p>
          <div className="w-full overflow-hidden rounded-[10px] border border-[#e2e8f0] bg-white pb-4">
            <div className="flex w-full items-center justify-between bg-[#4165ca] p-4">
              <div className="flex items-center gap-2">
                <img src={chevronLeftIcon} alt="Previous month" className="size-3.5" />
                <p className="text-sm font-semibold text-white">Aug</p>
                <img src={chevronRightIcon} alt="Next month" className="size-3.5" />
              </div>
              <div className="flex items-center gap-2">
                <img src={chevronLeftIcon} alt="Previous year" className="size-3.5" />
                <p className="text-sm font-semibold text-white">2026</p>
                <img src={chevronRightIcon} alt="Next year" className="size-3.5" />
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 px-4 py-2 text-center text-sm font-semibold text-[#46595c]">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                <p key={d}>{d}</p>
              ))}
            </div>

            {WEEK_ROWS.map((row, idx) => (
              <div key={idx} className="grid grid-cols-7 gap-1 px-4 py-2 text-center text-sm text-[#8b8b8b]">
                {Array(7 - row.length)
                  .fill(null)
                  .map((_, i) => (
                    <span key={`pad-${i}`} />
                  ))}
                {row.map((day) => (
                  <p key={day}>{day}</p>
                ))}
              </div>
            ))}

            <div className="grid grid-cols-7 gap-1 px-4 py-2 text-center text-sm">
              {LAST_ROW.map((cell) =>
                cell.selected ? (
                  <div key={cell.day} className="mx-auto flex size-6 items-center justify-center rounded-full bg-[#00872e]">
                    <p className="text-sm font-bold text-white">{cell.day}</p>
                  </div>
                ) : (
                  <p key={cell.day} className={`font-semibold ${cell.color}`}>
                    {cell.day}
                  </p>
                ),
              )}
            </div>
            <div className="px-4 text-center text-sm font-semibold text-[#df9641]">31</div>

            <div className="mt-4 flex flex-col items-center gap-2.5">
              <div className="flex h-[34px] w-full items-center justify-center bg-[#f8f8f8]">
                <p className="text-sm font-semibold text-[#0f172a]">Available slots for Thursday, August 27 2026</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 px-4">
                {SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`w-[78px] rounded-md border py-2.5 text-[11px] font-semibold ${
                      slot === '2:30 PM'
                        ? 'border-[#3995fc] bg-[#3995fc] text-white'
                        : 'border-[#e2e8f0] bg-white/70 text-[#3c322e]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom booking summary */}
      <div className="fixed inset-x-0 bottom-0 z-40 mx-auto flex w-full max-w-[430px] flex-col items-center border-t border-[#f1eae2] bg-white">
        <div className="flex w-full flex-col gap-4 p-6">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <p className="text-xs text-[#606060]">Botox or Dysport + SkinVive Add-on</p>
              <p className="text-[22px] font-medium text-[#0f172a]">Oct 15, 2:30 PM</p>
            </div>
            <p className="text-lg font-bold text-[#0f172a]">$550</p>
          </div>
          <Link
            to="/home/appointment"
            className="flex h-[52px] w-full items-center justify-center rounded-[26px] bg-[#3995fc] text-sm font-semibold text-white"
          >
            Confirm Booking
          </Link>
        </div>
      </div>

      <ScreenNav />
    </div>
  )
}
