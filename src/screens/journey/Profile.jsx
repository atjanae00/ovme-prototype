import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'

import markerPin from '../../assets/journey/journey-marker-pin.svg'
import clipboardPlus from '../../assets/journey/journey-clipboard-plus.svg'
import chevronDown from '../../assets/journey/journey-chevron-down.svg'
import infoCircle from '../../assets/journey/journey-info-circle.svg'
import plusIcon from '../../assets/journey/journey-plus.svg'
import xClose from '../../assets/journey/journey-x-close.svg'
import userAvatar from '../../assets/journey/journey-user-avatar.png'
import navHome from '../../assets/journey/journey-nav-home.svg'
import navCalendar from '../../assets/journey/journey-nav-calendar.svg'
import navShop from '../../assets/journey/journey-nav-shop.svg'
import navUser from '../../assets/journey/journey-nav-user.svg'

import photoBaselineJan25 from '../../assets/journey/journey-tray-baseline.png'
import photoMar8 from '../../assets/journey/journey-tray-mar8.png'
import photoApr19 from '../../assets/journey/journey-tray-apr19-a.png'
import photoWeek0 from '../../assets/journey/journey-week0-front.png'
import photoWeek4 from '../../assets/journey/journey-week4-front.png'

function SectionLabel({ children }) {
  return <p className="text-[11px] font-bold uppercase tracking-[0.5px] text-[#4165ca]">{children}</p>
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

function Row({ icon, label, action }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={icon} alt="" className="h-5 w-5" />
        <p className="text-[14px] font-semibold text-[#2e2321]">{label}</p>
      </div>
      <span className="text-[14px] font-semibold text-[#3995fc]">{action}</span>
    </div>
  )
}

export default function Profile() {
  return (
    <>
      <div className="relative flex w-full min-h-full flex-col bg-[#f9fafb]">
          {/* user header */}
          <div className="flex items-center gap-2.5 bg-[#4165ca] px-3 pb-2 pt-12">
            <img src={userAvatar} alt="" className="h-10 w-10 rounded-full object-cover" />
            <p className="text-[20px] text-white">Tia Johnson</p>
          </div>

          <div className="flex flex-1 flex-col gap-[17px] px-3.5 py-4 pb-8">
            {/* preferred studio */}
            <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5">
              <SectionLabel>Preferred studio</SectionLabel>
              <div className="mt-4">
                <Row icon={markerPin} label="Chapel Hill - Village Plaza" action="Details" />
              </div>
            </section>

            {/* preferred provider */}
            <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5">
              <SectionLabel>Preferred provider</SectionLabel>
              <div className="mt-4">
                <Row icon={clipboardPlus} label="Chelsea Leos, NP" action="Message" />
              </div>
            </section>

            {/* beauty bank */}
            <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5">
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
              <div className="mt-3 rounded-[10px] bg-[#f7f7f7] p-2">
                <p className="text-[10px] text-[#46595c]">
                  Anniversary allowance and birthday upgrades are valid only during their respective months. Beauty
                  Bank credits expire after 12 months.
                </p>
              </div>
              <button
                type="button"
                className="mt-3 flex w-full items-center justify-center gap-1 rounded-[10px] bg-[#ffd9b4] p-3 text-[13px] font-medium text-[#46595c]"
              >
                Expand
                <img src={chevronDown} alt="" className="h-5 w-5" />
              </button>
            </section>

            {/* beauty journey */}
            <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5">
              <SectionLabel>beauty journey</SectionLabel>
              <div className="mt-2 flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <p className="font-serif text-[16px] text-[#46595c]">Botox &amp; SkinVive Progress</p>
                  <img src={infoCircle} alt="" className="h-3 w-3" />
                </div>
                <p className="text-[12px] text-[#46595c]">
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas augue massa mauris. Amet consectetur
                  egestas augue massa mauris.
                </p>
              </div>
              <div className="mt-3 flex items-center justify-center gap-9">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-[107px] w-[79px] overflow-hidden rounded-[6px] bg-[#d3d3d3] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
                    <img src={photoBaselineJan25} alt="Baseline" className="h-full w-full object-cover" />
                  </div>
                  <Tag>Baseline - Jan 25</Tag>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-[107px] w-[79px] overflow-hidden rounded-[6px] bg-[#d3d3d3] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
                    <img src={photoMar8} alt="4 weeks" className="h-full w-full object-cover" />
                  </div>
                  <Tag outline>Mar 8</Tag>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-[107px] w-[79px] overflow-hidden rounded-[6px] bg-[#d3d3d3] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
                    <img src={photoApr19} alt="4 weeks" className="h-full w-full object-cover" />
                  </div>
                  <Tag outline>Apr 19</Tag>
                </div>
              </div>
              <Link
                to="/journey/profile-expanded"
                className="mt-3 flex w-full items-center justify-center rounded-[10px] bg-[#ffd9b4] p-3 text-[13px] font-medium text-[#46595c]"
              >
                See your full journey
              </Link>
            </section>

            {/* wellness journey */}
            <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5">
              <SectionLabel>wellness journey</SectionLabel>
              <div className="mt-2 flex flex-col gap-1.5">
                <div className="flex items-center gap-1">
                  <p className="font-serif text-[16px] text-[#46595c]">Zepbound Progress</p>
                  <img src={infoCircle} alt="" className="h-3 w-3" />
                </div>
                <p className="text-[12px] leading-[16px] text-[#46595c]">
                  Track your transformation week by week. Each photo captures real progress on your wellness path.
                </p>
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <div className="flex gap-3">
                  <div className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="h-[120px] w-full overflow-hidden rounded-[6px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)]">
                      <img src={photoWeek0} alt="Week 0" className="h-full w-full object-cover" />
                    </div>
                    <span className="rounded-full bg-[#d8ecff] px-2 py-0.5 text-[9px] font-medium text-[#6b7280]">
                      Week 0 – Jun 1
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="h-[120px] w-full overflow-hidden rounded-[6px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)]">
                      <img src={photoWeek4} alt="Week 4" className="h-full w-full object-cover" />
                    </div>
                    <span className="rounded-full border border-[#d8ecff] px-2 py-0.5 text-[9px] font-medium text-[#6b7280]">
                      Week 4
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="h-[120px] w-full overflow-hidden rounded-[6px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)]">
                      <img src={photoWeek0} alt="Week 8" className="h-full w-full object-cover" />
                    </div>
                    <span className="rounded-full border border-[#d8ecff] px-2 py-0.5 text-[9px] font-medium text-[#6b7280]">
                      Week 8
                    </span>
                  </div>
                  <Link
                    to="/journey/capture"
                    className="flex flex-1 flex-col items-center gap-1.5"
                  >
                    <div className="flex h-[120px] w-full items-center justify-center rounded-[6px] border border-dashed border-[#fec289] bg-[#fffaf5]">
                      <img src={plusIcon} alt="" className="h-6 w-6" />
                    </div>
                    <span className="px-2 py-0.5 text-[9px] font-medium text-[#767676]">Add Photo</span>
                  </Link>
                </div>
              </div>
              <div className="mt-3 flex w-full items-center gap-2.5 rounded-[10px] bg-[#ebe7ff] p-3">
                <p className="flex-1 text-[13px] font-medium text-[#46595c]">
                  It&apos;s photo day — keep the streak going!
                </p>
                <img src={xClose} alt="Dismiss" className="h-5 w-5" />
              </div>
            </section>

            {/* account */}
            <section className="w-full overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white">
              <div className="px-4 py-2">
                <SectionLabel>Account</SectionLabel>
              </div>
              {[
                'Notification preferences',
                'Payment methods & subscriptions',
                'Privacy and photo consent',
                'Account and security',
                'Support',
                'Legal',
              ].map((label, i, arr) => (
                <div
                  key={label}
                  className={`px-4 py-2 text-[14px] text-[#0f172a] ${i < arr.length - 1 ? 'border-b border-[#f3f3f3]' : ''}`}
                >
                  {label}
                </div>
              ))}
            </section>
          </div>

          {/* bottom tab bar */}
          <div className="sticky bottom-0 flex w-full items-center justify-between border-t border-[#e5e7eb] bg-white px-5 pb-4 pt-2">
            <Link to="/home/appointment" className="flex flex-col items-center gap-1 px-2 py-1">
              <img src={navHome} alt="" className="h-6 w-6 opacity-60" />
              <span className="text-[12px] font-medium text-[#767676]">Home</span>
            </Link>
            <div className="flex flex-col items-center gap-1 px-2 py-1">
              <img src={navCalendar} alt="" className="h-6 w-6 opacity-60" />
              <span className="text-[12px] font-medium text-[#767676]">Appointments</span>
            </div>
            <div className="flex flex-col items-center gap-1 px-2 py-1">
              <img src={navShop} alt="" className="h-6 w-6 opacity-60" />
              <span className="text-[12px] font-medium text-[#767676]">Shop</span>
            </div>
            <Link to="/profile" className="flex flex-col items-center gap-1 px-2 py-1">
              <img src={navUser} alt="" className="h-6 w-6" />
              <span className="text-[12px] font-bold text-[#3896f8]">Me</span>
            </Link>
          </div>
      </div>
      <ScreenNav />
    </>
  )
}
