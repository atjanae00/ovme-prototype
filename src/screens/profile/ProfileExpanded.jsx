import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'

import avatarTia from '../../assets/profile/avatar-tia.jpg'
import journeyBaseline from '../../assets/profile/journey-baseline.jpg'
import journeyWeek4a from '../../assets/profile/journey-week4a.jpg'
import journeyWeek4b from '../../assets/profile/journey-week4b.jpg'
import wellnessPhoto1 from '../../assets/profile/wellness-photo1.jpg'
import wellnessPhoto2 from '../../assets/profile/wellness-photo2.jpg'
import iconMarkerPin from '../../assets/profile/icon-marker-pin.svg'
import iconClipboardPlus from '../../assets/profile/icon-clipboard-plus.svg'
import iconChevronUp from '../../assets/profile/icon-chevron-up.svg'
import iconInfoCircle from '../../assets/profile/icon-info-circle.svg'
import iconPlus from '../../assets/profile/icon-plus.svg'
import iconMinus from '../../assets/profile/icon-minus.svg'
import iconXClose from '../../assets/profile/icon-x-close.svg'
import iconHome from '../../assets/profile/icon-home.svg'
import iconCalendar from '../../assets/profile/icon-calendar.svg'
import iconShoppingBag from '../../assets/profile/icon-shopping-bag.svg'
import iconUserCircle from '../../assets/profile/icon-user-circle.svg'
import iconSignal from '../../assets/profile/icon-signal-wifi-battery.svg'

const ACCOUNT_ROWS = [
  'Notification preferences',
  'Payment methods & membership',
  'Privacy & photo consent',
  'Account and security',
  'Support',
]

const TRANSACTIONS = [
  {
    label: 'Monthly membership deposit',
    date: 'Mar 20',
    tag: 'MEMBERSHIP',
    tagColor: '#d8ecff',
    amount: '+$199',
    amountColor: '#2e7e4f',
    expires: 'Expires Mar 20, 2027',
  },
  {
    label: 'Maria S. completed first visit',
    date: 'Mar 20',
    tag: 'REFERRAL',
    tagColor: '#f1f0fe',
    amount: '+$50',
    amountColor: '#2e7e4f',
    expires: 'Expires Mar 20, 2027',
  },
  {
    label: 'Maria S. joined as a member',
    date: 'Mar 20',
    tag: 'REFERRAL',
    tagColor: '#f1f0fe',
    amount: '+$50',
    amountColor: '#2e7e4f',
    expires: 'Expires Mar 20, 2027',
  },
  {
    label: 'Neurotoxin refresh with Chelsea',
    date: 'Mar 20',
    tag: 'REDEEMED',
    tagColor: '#fff0e1',
    amount: '-$199',
    amountColor: '#6d6c68',
    expires: 'Expires Mar 20, 2027',
  },
  {
    label: 'Welcome bonus',
    date: 'Mar 20',
    tag: 'PROMO',
    tagColor: '#ecf6e0',
    amount: '+$50',
    amountColor: '#2e7e4f',
    expires: 'Expires Mar 20, 2027',
  },
]

function SectionLabel({ children }) {
  return <p className="text-[11px] font-bold uppercase tracking-[0.5px] text-[#4165ca]">{children}</p>
}

function BottomTabBar() {
  return (
    <div className="flex h-[78px] w-full items-center justify-between border-t border-[#e5e7eb] bg-white px-5 pt-1">
      <Link to="/home/appointment" className="flex w-[60px] flex-col items-center gap-1 py-1">
        <img src={iconHome} alt="" className="size-6" />
        <span className="text-xs font-medium text-[#767676]">Home</span>
      </Link>
      <div className="flex flex-col items-center gap-1 py-1 text-[#767676]">
        <img src={iconCalendar} alt="" className="size-6" />
        <span className="text-xs font-medium">Appointments</span>
      </div>
      <div className="flex w-[60px] flex-col items-center gap-1 py-1 text-[#767676]">
        <img src={iconShoppingBag} alt="" className="size-6" />
        <span className="text-xs font-medium">Shop</span>
      </div>
      <Link to="/profile" className="flex w-[60px] flex-col items-center gap-1 py-1">
        <img src={iconUserCircle} alt="" className="size-6" />
        <span className="text-xs font-bold text-[#3896f8]">Me</span>
      </Link>
    </div>
  )
}

export default function ProfileExpanded() {
  return (
    <div className="flex min-h-svh justify-center bg-gray-100">
      <div className="flex w-full max-w-[393px] flex-col bg-[#f9fafb]">
        <div className="flex items-center justify-between px-4 pb-1 pt-3 text-black">
          <span className="text-[15px] font-semibold">9:41</span>
          <img src={iconSignal} alt="" className="h-[13px] w-[78px]" />
        </div>

        <div className="flex items-center gap-3 rounded-b-[10px] bg-[#4165ca] px-3 py-2">
          <img src={avatarTia} alt="Tia Johnson" className="size-10 rounded-full object-cover" />
          <p className="text-xl text-white">Tia Johnson</p>
        </div>

        <div className="flex flex-1 flex-col gap-[17px] px-4 py-5">
          <div className="flex flex-col gap-4 rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3">
            <SectionLabel>Preferred studio</SectionLabel>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={iconMarkerPin} alt="" className="size-5" />
                <p className="text-sm font-semibold text-[#2e2321]">Chapel Hill - Village Plaza</p>
              </div>
              <span className="text-sm font-semibold text-[#3995fc]">Details</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3">
            <SectionLabel>Preferred providers</SectionLabel>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={iconClipboardPlus} alt="" className="size-5" />
                <p className="text-sm font-semibold text-[#2e2321]">Chelsea Leos, NP</p>
              </div>
              <Link to="/profile/message" className="text-sm font-semibold text-[#3995fc]">
                Message
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-[13px] rounded-[14px] border border-[#e5e7eb] bg-white px-3.5 py-3.5">
            <SectionLabel>Beauty bank</SectionLabel>
            <div className="flex gap-12">
              <div className="flex flex-col gap-2.5">
                <p className="text-[10px] font-medium text-[#767676]">Membership</p>
                <p className="text-sm text-[#46595c]">VIP - Transform</p>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-[10px] font-medium text-[#767676]">Balance</p>
                <p className="text-sm text-[#46595c]">$450.00</p>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-[10px] font-medium text-[#767676]">Next Expiry</p>
                <p className="text-sm text-[#46595c]">$50 on Oct 12</p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 py-2">
              <div className="flex w-[155px] flex-col gap-2.5 rounded-[10px] bg-[#f7f7f7] p-4">
                <p className="text-[10px] font-medium uppercase text-[#767676]">Total earned</p>
                <div className="flex items-center gap-1">
                  <img src={iconPlus} alt="" className="size-2.5" />
                  <p className="text-sm text-[#46595c]">$450.00</p>
                </div>
              </div>
              <div className="flex w-[155px] flex-col gap-2.5 rounded-[10px] bg-[#f7f7f7] p-4">
                <p className="text-[10px] font-medium uppercase text-[#767676]">Total spent</p>
                <div className="flex items-center gap-1">
                  <img src={iconMinus} alt="" className="size-2.5" />
                  <p className="text-sm text-[#46595c]">$199.00</p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2 py-2">
              {TRANSACTIONS.map((t) => (
                <div
                  key={t.label}
                  className="flex items-end justify-between gap-2 border-b border-[#f3f3f3] pb-2 pt-1.5"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-[#0f172a]">{t.label}</p>
                    <div className="flex items-center gap-1">
                      <p className="text-[11px] font-medium text-[#9f9e97]">{t.date}</p>
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-[0.9px] text-[#6b7280]"
                        style={{ backgroundColor: t.tagColor }}
                      >
                        {t.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right">
                    <p className="text-sm font-semibold" style={{ color: t.amountColor }}>
                      {t.amount}
                    </p>
                    <p className="text-[11px] font-medium text-[#9f9e97]">{t.expires}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center rounded-[10px] bg-[#f7f7f7] p-2">
              <p className="text-[10px] text-[#46595c]">
                Anniversary allowance and birthday upgrades are valid only during their respective months. Beauty
                Bank credits expire after 12 months.
              </p>
            </div>
            <Link
              to="/profile"
              className="flex h-11 w-full items-center justify-center gap-1 rounded-[10px] bg-[#ffd9b4]"
            >
              <span className="text-[13px] font-semibold text-[#46595c]">Collapse</span>
              <img src={iconChevronUp} alt="" className="size-5" />
            </Link>
          </div>

          <div className="flex flex-col gap-4 rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3">
            <SectionLabel>Beauty journey</SectionLabel>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <p className="text-base text-[#46595c]">Botox &amp; SkinVive Progress</p>
                <img src={iconInfoCircle} alt="" className="size-3" />
              </div>
              <p className="text-xs text-[#46595c]">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas augue massa mauris. Amet consectetur
                egestas augue massa mauris.
              </p>
            </div>
            <div className="flex items-center justify-center gap-9">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={journeyBaseline}
                  alt="Baseline photo"
                  className="h-[107px] w-[79px] rounded-[6px] object-cover shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]"
                />
                <span className="rounded-full bg-[#d8ecff] px-2 py-0.5 text-[10px] text-[#6b7280]">
                  Baseline - Jan 25
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={journeyWeek4a}
                  alt="Mar 8 photo"
                  className="h-[107px] w-[79px] rounded-[6px] object-cover shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]"
                />
                <span className="rounded-full border border-[#d8ecff] px-2 py-0.5 text-[10px] text-[#6b7280]">
                  Mar 8
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={journeyWeek4b}
                  alt="Apr 19 photo"
                  className="h-[107px] w-[79px] rounded-[6px] object-cover shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]"
                />
                <span className="rounded-full border border-[#d8ecff] px-2 py-0.5 text-[10px] text-[#6b7280]">
                  Apr 19
                </span>
              </div>
            </div>
            <Link
              to="/journey/profile"
              className="flex w-full items-center justify-center rounded-[10px] bg-[#ffd9b4] p-3"
            >
              <span className="text-[13px] font-semibold text-[#46595c]">See your full journey</span>
            </Link>
          </div>

          <div className="flex flex-col gap-4 rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3">
            <SectionLabel>Wellness journey</SectionLabel>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1">
                <p className="text-base text-[#46595c]">Zepbound Progress</p>
                <img src={iconInfoCircle} alt="" className="size-3" />
              </div>
              <p className="text-xs leading-4 text-[#46595c]">
                Track your transformation week by week. Each photo captures real progress on your wellness path.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <img
                  src={wellnessPhoto1}
                  alt="Week 0 progress photo"
                  className="h-[120px] w-full rounded-[6px] object-cover drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
                />
                <span className="rounded-full bg-[#d8ecff] px-2 py-0.5 text-[9px] text-[#6b7280]">
                  Week 0 – Jun 1
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <img
                  src={wellnessPhoto2}
                  alt="Week 4 progress photo"
                  className="h-[120px] w-full rounded-[6px] object-cover drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
                />
                <span className="rounded-full border border-[#d8ecff] px-2 py-0.5 text-[9px] text-[#6b7280]">
                  Week 4
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <img
                  src={wellnessPhoto1}
                  alt="Week 8 progress photo"
                  className="h-[120px] w-full rounded-[6px] object-cover drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
                />
                <span className="rounded-full border border-[#d8ecff] px-2 py-0.5 text-[9px] text-[#6b7280]">
                  Week 8
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex h-[120px] w-full items-center justify-center rounded-[6px] border border-dashed border-[#fec289] bg-[#fffaf5]">
                  <img src={iconPlus} alt="" className="size-6" />
                </div>
                <span className="text-[9px] text-[#767676]">Add Photo</span>
              </div>
            </div>
            <div className="flex w-full items-center gap-2.5 rounded-[10px] bg-[#ebe7ff] p-3">
              <p className="flex-1 text-[13px] font-medium text-[#46595c]">
                It&rsquo;s photo day — keep the streak going!
              </p>
              <img src={iconXClose} alt="Dismiss" className="size-5" />
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white">
            <div className="px-4 py-2">
              <SectionLabel>Account settings</SectionLabel>
            </div>
            {ACCOUNT_ROWS.map((label) => (
              <div key={label} className="border-b border-[#f3f3f3] px-4 py-2.5 text-sm text-[#0f172a]">
                {label}
              </div>
            ))}
            <div className="px-4 py-2.5 pb-4 text-sm text-[#0f172a]">Legal</div>
          </div>
        </div>

        <BottomTabBar />
      </div>
      <ScreenNav />
    </div>
  )
}
