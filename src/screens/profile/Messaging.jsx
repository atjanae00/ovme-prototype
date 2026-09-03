import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'

import avatarThread from '../../assets/profile/avatar-thread.jpg'
import iconXClose from '../../assets/profile/icon-x-close.svg'

const THREADS = [
  {
    id: 'aftercare',
    avatar: avatarThread,
    title: 'Aftercare - Filler appointment',
    preview: 'That’s completely normal on day...',
    time: '4:12pm',
  },
  {
    id: 'membership',
    initials: 'CH',
    title: 'Monthly membership deposit',
    preview: 'Monthly membership deposit',
    time: '4:12pm',
  },
]

export default function Messaging() {
  return (
    <>
      <div className="flex w-full min-h-full flex-col overflow-hidden bg-white">
        <div className="flex items-center justify-between border-b border-[#e5e7eb] bg-[#f9fafb] px-6 pb-2 pt-14">
          <p className="text-xl font-medium text-black">Messages</p>
          <Link to="/profile" aria-label="Close messages">
            <img src={iconXClose} alt="" className="size-6" />
          </Link>
        </div>

        <div className="flex flex-1 flex-col gap-4 pt-4">
          {THREADS.map((t) => (
            <Link
              key={t.id}
              to="/profile/message"
              className="flex items-center justify-between gap-2 border-b border-[#f3f3f3] px-6 py-2.5 hover:bg-gray-50"
            >
              <div className="flex items-start gap-2">
                {t.avatar ? (
                  <img src={t.avatar} alt="" className="size-10 rounded-full object-cover" />
                ) : (
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#fff0e1] text-lg font-semibold tracking-wide text-[#0f172a]">
                    {t.initials}
                  </div>
                )}
                <div className="flex flex-col gap-0.5 text-sm text-[#0f172a]">
                  <p className="font-semibold">{t.title}</p>
                  <p>{t.preview}</p>
                </div>
              </div>
              <p className="shrink-0 text-xs font-medium text-[#767676]">{t.time}</p>
            </Link>
          ))}
        </div>

        <div className="px-5 pb-8 pt-4">
          <Link
            to="/profile/message"
            className="flex h-10 w-full items-center justify-center rounded-md bg-[#3896f8] text-sm font-medium text-white"
          >
            New message
          </Link>
        </div>
      </div>
      <ScreenNav />
    </>
  )
}
