import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'

import avatarChelsea from '../../assets/profile/avatar-chelsea.jpg'
import iconChevronLeft from '../../assets/profile/icon-chevron-left.svg'
import iconPlusRound from '../../assets/profile/icon-plus-round.svg'

const MESSAGES = [
  {
    from: 'them',
    text: 'Hey, Tia! How’s the swelling from yesterday filler appointment?',
    time: 'Yesterday, 4:12pm',
  },
  {
    from: 'me',
    text: 'Hi! Much better, just a little soreness on the right side',
    time: 'Yesterday, 4:12pm',
  },
  {
    from: 'them',
    text: 'That’s completely normal on day 2! Just keep morning and night through Friday.',
    time: 'Yesterday, 4:12pm',
  },
]

export default function DirectMessage() {
  return (
    <div className="flex min-h-svh justify-center bg-gray-100">
      <div className="flex w-full max-w-[393px] flex-col overflow-hidden rounded-t-2xl bg-[#f9fafb]">
        <div className="flex h-[100px] shrink-0 items-center gap-4 bg-[#4165ca] px-3">
          <Link to="/profile" aria-label="Back to profile" className="shrink-0">
            <img src={iconChevronLeft} alt="" className="size-6" />
          </Link>
          <img src={avatarChelsea} alt="Chelsea Leos" className="size-10 rounded-full object-cover" />
          <div className="flex flex-col gap-1 text-white">
            <p className="text-lg font-medium">Chelsea Leos, NP</p>
            <p className="text-xs">Typically replies in 1 business day</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-5 px-6 py-6">
          {MESSAGES.map((m, i) => (
            <div key={i} className={`flex flex-col gap-1 ${m.from === 'me' ? 'items-end self-end' : 'items-start'}`}>
              <div
                className={`max-w-[260px] rounded-2xl px-3 py-4 text-sm text-black ${
                  m.from === 'me'
                    ? 'rounded-br-sm bg-[#d8ecff] text-center'
                    : 'rounded-bl-sm border border-[#e5e7eb] bg-white'
                }`}
              >
                {m.text}
              </div>
              <p className={`text-[11px] font-light text-[#767676] ${m.from === 'me' ? 'text-right' : ''}`}>
                {m.time}
              </p>
            </div>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-3 border-t border-[#e5e7eb] bg-white px-3 py-2">
          <button
            type="button"
            className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-[#3995fc]"
            aria-label="Add attachment"
          >
            <img src={iconPlusRound} alt="" className="size-5" />
          </button>
          <div className="flex h-10 flex-1 items-center rounded-full border border-[#e5e7eb] bg-[#f9fafb] px-4">
            <span className="text-sm text-[#8a8a8a]">Message Chelsea...</span>
          </div>
        </div>
      </div>
      <ScreenNav />
    </div>
  )
}
