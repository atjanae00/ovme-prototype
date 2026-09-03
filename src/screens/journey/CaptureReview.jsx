import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'
import chevronLeft from '../../assets/journey/capture-chevron-left.svg'
import navHome from '../../assets/journey/capture-nav-home.svg'
import navCalendar from '../../assets/journey/capture-nav-calendar.svg'
import navShop from '../../assets/journey/capture-nav-shop.svg'
import navUser from '../../assets/journey/capture-nav-user.svg'
import frontPhoto from '../../assets/journey/capture-front-photo.jpg'
import leftPhoto from '../../assets/journey/capture-left-photo.jpg'
import rightPhoto from '../../assets/journey/capture-right-photo.jpg'

const photos = [
  { label: 'Front', src: frontPhoto },
  { label: 'Left - 45°', src: leftPhoto },
  { label: 'Right - 45°', src: rightPhoto },
]

export default function CaptureReview() {
  return (
    <div className="relative mx-auto flex min-h-svh w-full max-w-[393px] flex-col bg-white">
      <div className="flex-1 px-4 pb-6 pt-14">
        <Link to="/journey/capture/right" className="inline-flex items-center text-[#3896f8]">
          <img src={chevronLeft} alt="" className="h-5 w-5" />
          <span className="text-[16px] font-semibold">Back</span>
        </Link>

        <div className="mt-6 flex items-center gap-2">
          <div className="h-[10px] w-full rounded-full bg-[#46595c]" />
          <div className="h-[10px] w-full rounded-full bg-[#46595c]" />
          <div className="h-[10px] w-full rounded-full bg-[#46595c]" />
          <div className="h-[10px] w-full rounded-full bg-[#46595c]" />
        </div>

        <div className="mt-6 flex flex-col gap-2 text-[#46595c]">
          <h1 className="font-serif text-[22px]">Review</h1>
          <p className="text-[12px] leading-normal">
            Take a look at your three photos below. If everything lines up with the guidance, continue to save them
            to your beauty journey — otherwise you can retake them.
          </p>
        </div>

        <div className="-mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
          {photos.map((photo) => (
            <div
              key={photo.label}
              className="relative h-[300px] w-[240px] shrink-0 snap-start overflow-hidden rounded-[10px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.25)]"
            >
              <img src={photo.src} alt={`${photo.label} capture`} className="h-full w-full object-cover" />
              <div className="absolute left-0 top-0 rounded-br-[4px] rounded-tl-[10px] bg-[#f6e0e7] px-2 py-1">
                <p className="whitespace-nowrap text-[16px] font-medium text-[#3a3a3a]">{photo.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 pb-6">
        <Link
          to="/journey/profile"
          className="flex h-10 w-full items-center justify-center rounded-[6px] bg-[#3995fc] text-[14px] font-medium text-white"
        >
          Continue
        </Link>
        <Link
          to="/journey/capture/front"
          className="flex h-10 w-full items-center justify-center rounded-[6px] text-[14px] font-medium text-[#3995fc]"
        >
          Retake photos
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
