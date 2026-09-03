import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'

import chevronLeftBack from '../../assets/journey/journey-chevron-left-back.svg'
import infoCircle from '../../assets/journey/journey-info-circle.svg'
import xClose from '../../assets/journey/journey-x-close.svg'
import chevronLeft from '../../assets/journey/journey-chevron-left.svg'
import chevronRight from '../../assets/journey/journey-chevron-right.svg'
import refreshCw from '../../assets/journey/journey-refresh-cw.svg'
import zoomSlider from '../../assets/journey/journey-zoom-slider.svg'
import trayBaseline from '../../assets/journey/journey-tray-baseline.png'
import trayApr19B from '../../assets/journey/journey-tray-apr19-b.png'

function SegmentedSwitch() {
  return (
    <div className="flex w-full gap-2 rounded-[6px] bg-[#f3f3f3] p-1">
      <button
        type="button"
        className="h-[35px] flex-1 rounded-[6px] bg-[#3897f8] text-[14px] font-medium text-white shadow-[0px_0px_4px_rgba(0,0,0,0.15)]"
      >
        Front
      </button>
      <button type="button" className="h-[35px] flex-1 rounded-[6px] text-[14px] font-medium text-[#767676]">
        Left
      </button>
      <button type="button" className="h-[35px] flex-1 rounded-[6px] text-[14px] font-medium text-[#767676]">
        Right
      </button>
    </div>
  )
}

export default function Comparison1() {
  return (
    <>
      <div className="relative flex w-full min-h-full flex-col overflow-hidden bg-white">
          {/* header */}
          <div className="flex flex-col gap-2 px-6 pb-2 pt-14">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Link to="/journey/tray" aria-label="Back">
                  <img src={chevronLeftBack} alt="" className="mr-1 h-5 w-5" />
                </Link>
                <p className="font-serif text-[16px] text-[#46595c]">Baseline Comparison</p>
                <img src={infoCircle} alt="" className="h-4 w-4" />
              </div>
              <Link to="/journey/profile" aria-label="Close">
                <img src={xClose} alt="" className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-[12px] text-[#46595c]">
              Your progression with <span className="font-semibold">Botox injections</span> over{' '}
              <span className="font-semibold">12 weeks</span>. You&rsquo;ve had{' '}
              <span className="font-semibold">3 toxin appointments</span> and{' '}
              <span className="font-semibold">2 facial treatments</span>.
            </p>
          </div>

          {/* comparison image */}
          <div className="flex flex-col items-center gap-6 px-6 pt-8">
            <div className="relative h-[300px] w-full overflow-hidden rounded-[12px] border border-[#e5e7eb]">
              <img src={trayBaseline} alt="Baseline - Jan 25" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'inset(0 0 0 50%)' }}>
                <img
                  src={trayApr19B}
                  alt="Current progress - Apr 19"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="absolute inset-y-0 left-1/2 flex -translate-x-1/2 flex-col items-center">
                <div className="w-[2px] flex-1 bg-white/70" />
                <div className="flex h-[42px] w-[42px] items-center justify-center gap-0.5 rounded-full bg-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                  <img src={chevronLeft} alt="" className="h-4 w-4" />
                  <img src={chevronRight} alt="" className="h-4 w-4" />
                </div>
                <div className="w-[2px] flex-1 bg-white/70" />
              </div>

              <span className="absolute bottom-0 left-0 rounded-tr-[10px] bg-[#f6e0e7] px-2 py-0.5 text-[10px] text-[#3a3a3a]">
                Baseline - Jan 25
              </span>
              <span className="absolute bottom-0 right-0 rounded-tl-[10px] bg-[#f6e0e7] px-2 py-0.5 text-[10px] text-[#3a3a3a]">
                Current progress - Apr 19
              </span>
            </div>

            <div className="flex w-full flex-col gap-6 pb-10">
              <SegmentedSwitch />
              <div className="flex items-center gap-6">
                <p className="text-[12px] font-semibold text-[#46595c]">Zoom</p>
                <div className="flex flex-1 items-center gap-1">
                  <img src={zoomSlider} alt="Zoom level" className="h-[22px] flex-1" />
                  <img src={refreshCw} alt="Reset zoom" className="h-5 w-5 shrink-0" />
                </div>
              </div>
              <Link to="/journey/comparison-2" className="text-center text-[14px] font-medium text-[#3896f8]">
                Zoom in for a closer look
              </Link>
            </div>
          </div>
      </div>
      <ScreenNav />
    </>
  )
}
