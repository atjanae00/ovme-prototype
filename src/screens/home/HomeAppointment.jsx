import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'

import iconBell from '../../assets/home/bell-01.svg'
import iconMail from '../../assets/home/mail-02.svg'
import iconInfo from '../../assets/home/info-circle.svg'
import iconPlus from '../../assets/home/plus.svg'
import iconXClose from '../../assets/home/x-close.svg'
import iconCheck from '../../assets/home/check.svg'
import iconHome from '../../assets/home/home-01.svg'
import iconCalendar from '../../assets/home/calendar.svg'
import iconShoppingBag from '../../assets/home/shopping-bag-02.svg'
import iconUserCircle from '../../assets/home/user-circle.svg'
import iconMarkerPin from '../../assets/home/marker-pin-01.svg'
import photoBaseline from '../../assets/home/photo-baseline.png'
import photoWeek4 from '../../assets/home/photo-week4.png'
import photoWeek8 from '../../assets/home/photo-week8.png'
import photoClinicalA from '../../assets/home/photo-clinical-a.png'
import photoClinicalB from '../../assets/home/photo-clinical-b.png'

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.5px] text-[#4165ca]">{children}</p>
  )
}

function Tag({ children, outline = false }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-medium text-[#6b7280] ${
        outline ? 'border border-[#d8ecff]' : 'bg-[#d8ecff]'
      }`}
    >
      {children}
    </span>
  )
}

function BottomTabBar() {
  return (
    <div className="sticky bottom-0 flex w-full items-center justify-between border-t border-[#e5e7eb] bg-white px-5 pb-4 pt-2">
      <Link to="/home/appointment" className="flex flex-col items-center gap-1 px-2 py-1">
        <img src={iconHome} alt="" className="h-6 w-6" />
        <span className="text-[12px] font-medium text-[#3995fc]">Home</span>
      </Link>
      <div className="flex flex-col items-center gap-1 px-2 py-1">
        <img src={iconCalendar} alt="" className="h-6 w-6 opacity-60" />
        <span className="text-[12px] font-medium text-[#767676]">Appointments</span>
      </div>
      <div className="flex flex-col items-center gap-1 px-2 py-1">
        <img src={iconShoppingBag} alt="" className="h-6 w-6 opacity-60" />
        <span className="text-[12px] font-medium text-[#767676]">Shop</span>
      </div>
      <Link to="/profile" className="flex flex-col items-center gap-1 px-2 py-1">
        <img src={iconUserCircle} alt="" className="h-6 w-6 opacity-60" />
        <span className="text-[12px] font-bold text-[#767676]">Me</span>
      </Link>
    </div>
  )
}

export default function HomeAppointment() {
  return (
    <>
      <div className="flex min-h-svh justify-center bg-gray-200">
        <div className="relative flex w-full max-w-[393px] flex-col bg-[#fffaf5]">
          {/* header */}
          <div className="flex flex-col gap-4 px-3.5 pb-5 pt-14">
            <div className="flex items-center justify-end gap-3">
              <button type="button" className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#3995fc]" aria-label="Notifications">
                <img src={iconBell} alt="" className="h-5 w-5" />
                <span className="absolute right-[9px] top-[7px] h-3 w-3 rounded-full border-2 border-[#3995fc] bg-[#ff434c]" />
              </button>
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3995fc]" aria-label="Messages">
                <img src={iconMail} alt="" className="h-5 w-5" />
              </button>
            </div>
            <h1 className="font-serif text-[30px] leading-[1.4] text-[#46595c]">
              Welcome back, <span className="italic">Tia</span>
            </h1>
          </div>

          {/* content */}
          <div className="flex flex-1 flex-col gap-[17px] px-3.5 pb-8">
            {/* beauty bank */}
            <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5 shadow-[0px_2px_4px_rgba(109,109,109,0.1)]">
              <SectionLabel>beauty bank</SectionLabel>
              <div className="mt-4 flex items-center gap-12">
                <div className="flex flex-col gap-2.5">
                  <p className="text-[10px] font-medium text-[#767676]">Membership</p>
                  <p className="font-serif text-[14px] text-[#46595c]">VIP - Transform</p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <p className="text-[10px] font-medium text-[#767676]">Balance</p>
                  <p className="font-serif text-[14px] text-[#46595c]">$450.00</p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <p className="text-[10px] font-medium text-[#767676]">Next Expiry</p>
                  <p className="font-serif text-[14px] text-[#46595c]">$50 on Oct 12</p>
                </div>
              </div>
            </section>

            {/* upcoming appointment */}
            <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5 shadow-[0px_2px_4px_rgba(109,109,109,0.1)]">
              <SectionLabel>Upcoming Appointments</SectionLabel>
              <div className="mt-2 flex flex-col gap-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-serif text-[16px] text-[#46595c]">Botox with SkinVive Add-on</p>
                  <Tag>Chelsea Leos, NP</Tag>
                </div>
                <p className="text-[12px] text-[#46595c]">Thursday, Oct 15 at 2:00 PM</p>
                <div className="flex items-center gap-1">
                  <img src={iconMarkerPin} alt="" className="h-4 w-4" />
                  <span className="text-[11px] text-[#6b7280]">Chapel Hill - Village Plaza</span>
                </div>
              </div>
            </section>

            {/* beauty journey */}
            <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5 shadow-[0px_2px_4px_rgba(109,109,109,0.1)]">
              <SectionLabel>beauty journey</SectionLabel>
              <div className="mt-2 flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <p className="font-serif text-[16px] text-[#46595c]">Botox &amp; SkinVive Progress</p>
                  <img src={iconInfo} alt="" className="h-3 w-3" />
                </div>
                <p className="text-[12px] text-[#46595c]">
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas augue massa mauris. Amet consectetur
                  egestas augue massa mauris.
                </p>
              </div>
              <div className="mt-3 flex items-center justify-center gap-9">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-[107px] w-[79px] overflow-hidden rounded-[6px] bg-[#d3d3d3] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
                    <img src={photoBaseline} alt="Baseline" className="h-full w-full object-cover" />
                  </div>
                  <Tag>Baseline - Jan 25</Tag>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-[107px] w-[79px] overflow-hidden rounded-[6px] bg-[#d3d3d3] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
                    <img src={photoWeek4} alt="4 weeks" className="h-full w-full object-cover" />
                  </div>
                  <Tag outline>Mar 8</Tag>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-[107px] w-[79px] overflow-hidden rounded-[6px] bg-[#d3d3d3] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
                    <img src={photoWeek8} alt="4 weeks" className="h-full w-full object-cover" />
                  </div>
                  <Tag outline>Apr 19</Tag>
                </div>
              </div>
            </section>

            {/* wellness journey */}
            <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5 shadow-[0px_2px_4px_rgba(109,109,109,0.1)]">
              <SectionLabel>wellness journey</SectionLabel>
              <div className="mt-2 flex flex-col gap-1.5">
                <div className="flex items-center gap-1">
                  <p className="font-serif text-[16px] text-[#46595c]">Zepbound Progress</p>
                  <img src={iconInfo} alt="" className="h-3 w-3" />
                </div>
                <p className="text-[12px] leading-[16px] text-[#46595c]">
                  Track your transformation week by week. Each photo captures real progress on your wellness path.
                </p>
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <div className="flex gap-3">
                  <div className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="h-[120px] w-full overflow-hidden rounded-[6px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)]">
                      <img src={photoClinicalA} alt="Week 0" className="h-full w-full object-cover" />
                    </div>
                    <span className="rounded-full bg-[#d8ecff] px-2 py-0.5 text-[9px] font-medium text-[#6b7280]">
                      Week 0 – Jun 1
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="h-[120px] w-full overflow-hidden rounded-[6px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)]">
                      <img src={photoClinicalB} alt="Week 4" className="h-full w-full object-cover" />
                    </div>
                    <span className="rounded-full border border-[#d8ecff] px-2 py-0.5 text-[9px] font-medium text-[#6b7280]">
                      Week 4
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="h-[120px] w-full overflow-hidden rounded-[6px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)]">
                      <img src={photoClinicalA} alt="Week 8" className="h-full w-full object-cover" />
                    </div>
                    <span className="rounded-full border border-[#d8ecff] px-2 py-0.5 text-[9px] font-medium text-[#6b7280]">
                      Week 8
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="flex h-[120px] w-full items-center justify-center rounded-[6px] border border-dashed border-[#fec289] bg-[#fffaf5]">
                      <img src={iconPlus} alt="" className="h-6 w-6" />
                    </div>
                    <span className="px-2 py-0.5 text-[9px] font-medium text-[#767676]">Add Photo</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex w-full items-center gap-2.5 rounded-[10px] bg-[#f1f8e9] p-3">
                <p className="flex-1 text-[13px] font-medium text-[#46595c]">
                  It&apos;s photo day — keep the streak going!
                </p>
                <img src={iconXClose} alt="Dismiss" className="h-5 w-5" />
              </div>
            </section>

            {/* personalized care plan */}
            <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5 shadow-[0px_2px_4px_rgba(109,109,109,0.1)]">
              <SectionLabel>personalized care plan</SectionLabel>
              <div className="mt-2 flex flex-col gap-2">
                <p className="font-serif text-[16px] text-[#46595c]">
                  Your next steps - <span className="italic">from Chelsea</span>
                </p>
                <p className="text-[12px] text-[#46595c]">
                  To help maintain results between Botox visits, Chelsea highly recommends starting a nightly retinol
                  routine.
                </p>
              </div>
              <ul className="mt-2 flex w-full flex-col gap-4 py-2">
                {[
                  'Apply cream retinol 2x/week at night for 4 weeks',
                  'Add SPF 30+ to your morning routine',
                  'Book your 6-week skin check',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#cccae8]">
                      <img src={iconCheck} alt="" className="h-4 w-4" />
                    </span>
                    <p className="text-[12px] text-black">{item}</p>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-[10px] bg-[#ffd9b4] p-3 text-[13px] font-semibold text-[#46595c]"
              >
                View full care plan
              </button>
            </section>
          </div>

          <BottomTabBar />
        </div>
      </div>
      <ScreenNav />
    </>
  )
}
