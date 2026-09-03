import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'
import chevronLeft from '../../assets/journey/capture-chevron-left.svg'
import navHome from '../../assets/journey/capture-nav-home.svg'
import navCalendar from '../../assets/journey/capture-nav-calendar.svg'
import navShop from '../../assets/journey/capture-nav-shop.svg'
import navUser from '../../assets/journey/capture-nav-user.svg'

const steps = [
  {
    title: 'Same pose, every time',
    body: 'An on-screen guide lines up your head and eye level, so images line up through your progression',
  },
  {
    title: 'Customizable angles',
    body: 'Adjust the camera angle to capture unique perspectives and enhance your storytelling.',
  },
  {
    title: 'Real-time feedback',
    body: 'Receive immediate suggestions based on your posture and alignment during recording.',
  },
]

export default function Capture() {
  return (
    <div className="relative mx-auto flex min-h-svh w-full max-w-[393px] flex-col bg-white">
      <div className="flex-1 px-4 pb-6 pt-14">
        <Link to="/journey/profile" className="inline-flex items-center text-[#3896f8]">
          <img src={chevronLeft} alt="" className="h-5 w-5" />
          <span className="text-[16px] font-semibold">Back</span>
        </Link>

        <div className="mt-4 flex flex-col gap-2 text-[#46595c]">
          <h1 className="font-serif text-[22px]">Guided Capture</h1>
          <p className="text-[12px] leading-normal">
            Your progression with <span className="font-semibold">Botox injections</span> over{' '}
            <span className="font-semibold">12 weeks</span>. You&rsquo;ve had{' '}
            <span className="font-semibold">3 toxin appointments</span> and{' '}
            <span className="font-semibold">2 facial treatments</span>.
          </p>
        </div>

        <div
          className="mt-6 h-[215px] w-full rounded-[10px] bg-[#fff0e1]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,217,180,0.32) 0px, rgba(255,217,180,0.32) 8px, transparent 8px, transparent 32px)',
          }}
        />

        <div className="mt-6 flex flex-col gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-start gap-4">
              <div className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-[#fcf1f5] text-[16px] font-medium text-black">
                {i + 1}
              </div>
              <div className="flex flex-col gap-1 text-black">
                <p className="text-[16px] font-medium">{step.title}</p>
                <p className="text-[14px] font-normal">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 pb-6">
        <Link
          to="/journey/capture/front"
          className="flex h-10 w-full items-center justify-center rounded-[6px] bg-[#3995fc] text-[14px] font-medium text-white"
        >
          Begin guided capture
        </Link>
        <Link
          to="/journey/profile"
          className="flex h-10 w-full items-center justify-center rounded-[6px] border border-[#3995fc] text-[14px] font-medium text-[#3995fc]"
        >
          Exit guided capture
        </Link>
      </div>

      <div className="flex h-[78px] items-center justify-between border-t border-[#e5e7eb] bg-white px-5">
        <Link to="/home/appointment" className="flex flex-col items-center gap-1">
          <img src={navHome} alt="" className="h-6 w-6" />
          <span className="text-[12px] font-medium text-[#767676]">Home</span>
        </Link>
        <div className="flex flex-col items-center gap-1">
          <img src={navCalendar} alt="" className="h-6 w-6" />
          <span className="text-[12px] font-medium text-[#767676]">Appointments</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src={navShop} alt="" className="h-6 w-6" />
          <span className="text-[12px] font-medium text-[#767676]">Shop</span>
        </div>
        <Link to="/profile" className="flex flex-col items-center gap-1">
          <img src={navUser} alt="" className="h-6 w-6" />
          <span className="text-[12px] font-bold text-[#3896f8]">Me</span>
        </Link>
      </div>

      <ScreenNav />
    </div>
  )
}
