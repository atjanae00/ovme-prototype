import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'
import chevronLeft from '../../assets/journey/capture-chevron-left.svg'
import navHome from '../../assets/journey/capture-nav-home.svg'
import navCalendar from '../../assets/journey/capture-nav-calendar.svg'
import navShop from '../../assets/journey/capture-nav-shop.svg'
import navUser from '../../assets/journey/capture-nav-user.svg'
import checkIcon from '../../assets/journey/capture-check.svg'
import frontPhoto from '../../assets/journey/capture-front-photo.jpg'
import faceGuide from '../../assets/journey/capture-face-guide.png'

const checklist = [
  'Properly lit space with neutral background',
  'Correct angle for photo type',
  'Face fits within the dotted frame',
]

export default function CaptureFront() {
  return (
    <div className="relative mx-auto flex min-h-svh w-full max-w-[393px] flex-col bg-white">
      <div className="flex-1 px-4 pb-6 pt-14">
        <Link to="/journey/capture" className="inline-flex items-center text-[#3896f8]">
          <img src={chevronLeft} alt="" className="h-5 w-5" />
          <span className="text-[16px] font-semibold">Back</span>
        </Link>

        <div className="mt-6 flex items-center gap-2">
          <div className="h-[10px] w-full rounded-full bg-[#46595c]" />
          <div className="h-[10px] w-full rounded-full bg-[#d9d9d9]" />
          <div className="h-[10px] w-full rounded-full bg-[#d9d9d9]" />
          <div className="h-[10px] w-full rounded-full bg-[#d9d9d9]" />
        </div>

        <div className="mt-6 flex flex-col gap-2 text-[#46595c]">
          <h1 className="font-serif text-[22px]">Front</h1>
          <p className="text-[12px] leading-normal">
            For the front photo, you&rsquo;ll face the camera with a neutral expression, aligning your face to the
            dotted line and following the guidance on the screen.
          </p>
        </div>

        <div className="relative mx-auto mt-6 h-[300px] w-full max-w-[350px] overflow-hidden rounded-[10px] border border-[#e5e7eb] bg-[#fff7ef] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)]">
          <img src={frontPhoto} alt="Front-facing camera preview" className="h-full w-full object-cover" />
          <img
            src={faceGuide}
            alt=""
            className="pointer-events-none absolute left-1/2 top-1/2 h-[244px] w-[192px] -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {checklist.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[2px] bg-[#3995fc]">
                <img src={checkIcon} alt="" className="h-full w-full" />
              </div>
              <p className="text-[14px] text-black">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 pb-6">
        <Link
          to="/journey/capture/left"
          className="flex h-10 w-full items-center justify-center rounded-[6px] bg-[#3995fc] text-[14px] font-medium text-white"
        >
          Take photo
        </Link>
        <Link
          to="/journey/profile"
          className="flex h-10 w-full items-center justify-center rounded-[6px] text-[14px] font-medium text-[#3995fc]"
        >
          Cancel
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
