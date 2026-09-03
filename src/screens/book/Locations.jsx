import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'
import heroImage from '../../assets/book/hero-locations-new.jpg'
import searchSmIcon from '../../assets/book/search-sm.svg'
import chevronDownIcon from '../../assets/book/chevron-down.svg'

const STATES = [
  'Colorado',
  'Connecticut',
  'Florida',
  'Georgia',
  'Illinois',
  'Maryland',
  'Minnesota',
  'New Jersey',
]

const NEARBY_LOCATIONS = [
  {
    id: 1,
    name: 'Chapel Hill',
    distance: '8.25 miles away',
    address: '97 South Elliott Road, Chapel Hill, NC 27514',
  },
  {
    id: 2,
    name: 'Charlotte - South End',
    distance: '146.73 miles away',
    address: '2040 South Boulevard, Suite 2, Charlotte, NC 28203',
  },
  {
    id: 3,
    name: 'Charlotte - Waverly',
    distance: '155.20 miles away',
    address: '7314 Waverly Walk Avenue, Suite E-7, Charlotte, NC 28277',
  },
]

export default function Locations() {
  return (
    <div className="relative w-full min-h-full bg-[#fbfbfb]">
      {/* Hero */}
      <div className="relative h-[481px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="OVME med spa"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[rgba(70,89,92,0.53)] mix-blend-multiply" />

        <div className="relative z-10 flex flex-col items-center gap-6 px-4 pt-14 text-center">
          <p className="text-[32px] font-normal leading-tight text-white [text-shadow:0px_4px_11.3px_rgba(0,0,0,0.25)]">
            Your <span className="italic">care</span> is closer than you think
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="max-w-[344px] text-base font-light text-white [text-shadow:0px_4px_11.3px_rgba(0,0,0,0.25)]">
              Select a location to book your appointment
            </p>
            <div className="flex h-10 w-[281px] items-center gap-2 rounded-[38px] border border-gray-200 bg-white px-4 py-1">
              <img src={searchSmIcon} alt="" className="size-5 shrink-0" />
              <span className="truncate text-sm text-[#7b7b7b]">Enter address or zip code</span>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby locations card */}
      <div className="relative z-10 mx-auto -mt-[111px] w-[calc(100%-32px)] max-w-[377px] rounded-3xl bg-[#fff0e1] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
        <p className="text-lg font-semibold tracking-tight text-[#46595c]">
          Locations <span className="italic">near</span> <span className="italic">you</span>
        </p>
        <div className="mt-3 flex flex-col gap-3">
          {NEARBY_LOCATIONS.map((loc) => (
            <div key={loc.id} className="flex flex-col gap-5 rounded-2xl bg-white px-3 py-3.5">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold tracking-tight text-[#46595c]">{loc.name}</p>
                  <span className="rounded-full bg-[#f1f0fe] px-2 py-0.5 text-[11px] font-medium tracking-tight text-[#101828]">
                    {loc.distance}
                  </span>
                </div>
                <p className="text-xs tracking-tight text-[#101828]">{loc.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="w-[156px] rounded-md border border-[#3995fc] px-4 py-2 text-sm font-medium tracking-tight text-[#3995fc] transition-colors hover:bg-[#eaf4ff]"
                >
                  Call spa
                </button>
                <Link
                  to="/book/select-service"
                  className="w-[156px] rounded-md bg-[#3995fc] px-4 py-2 text-center text-sm font-medium tracking-tight text-white transition-colors hover:bg-[#2c86ee]"
                >
                  Book now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore all states */}
      <div className="mx-auto mt-6 w-[calc(100%-32px)] max-w-[361px] rounded-3xl bg-white p-4">
        <p className="text-lg font-semibold tracking-tight text-[#101828]">Explore all OVME locations</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {STATES.map((state) => (
            <button
              key={state}
              type="button"
              className="flex items-center justify-center rounded px-2 py-3 text-center text-base font-semibold tracking-tight text-[#4165ca] transition-colors hover:bg-[#c3e0fb]"
              style={{ backgroundColor: '#d8ecff' }}
            >
              {state}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="mx-auto mt-2 flex items-center justify-center gap-1 rounded px-3 py-1 text-[11px] font-medium tracking-tight text-[#3896f8] transition-opacity hover:opacity-70"
        >
          <img src={chevronDownIcon} alt="" className="size-6" />
          View more
        </button>
      </div>

      <div className="h-8" />

      <ScreenNav />
    </div>
  )
}
