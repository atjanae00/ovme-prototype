import { useEffect, useRef, useState } from 'react'

const FRAME_WIDTH = 402
const FRAME_HEIGHT = 874

function StatusBar() {
  return (
    <div
      className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pb-[19px] pt-[21px]"
      style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0) 100%)' }}
    >
      <span className="text-[17px] font-semibold text-white" style={{ fontFamily: '-apple-system, "SF Pro", system-ui' }}>
        9:41
      </span>
      <div className="flex items-center gap-[7px]">
        <svg width="19" height="12" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill="#fff" />
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill="#fff" />
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill="#fff" />
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill="#fff" />
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill="#fff" />
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill="#fff" />
          <circle cx="8.5" cy="10.5" r="1.5" fill="#fff" />
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="#fff" strokeOpacity="0.35" fill="none" />
          <rect x="2" y="2" width="20" height="9" rx="2" fill="#fff" />
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill="#fff" fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  )
}

// iPhone-style device chrome so the prototype reads as a native app, not a webpage.
// Scales to fit the available viewport height like the phone itself would shrink on a smaller display.
export default function PhoneFrame({ children }) {
  const wrapperRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    function fit() {
      const available = wrapperRef.current?.parentElement?.clientHeight ?? window.innerHeight
      const margin = 48
      setScale(Math.min(1, (available - margin) / FRAME_HEIGHT))
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  return (
    <div
      ref={wrapperRef}
      style={{ width: FRAME_WIDTH * scale, height: FRAME_HEIGHT * scale, flexShrink: 0 }}
    >
      <div
        style={{
          width: FRAME_WIDTH,
          height: FRAME_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          borderRadius: 53,
          padding: 5,
          background:
            'linear-gradient(145deg, #6f7378 0%, #2b2d30 16%, #4a4d51 34%, #1a1b1d 52%, #3d4044 68%, #17181a 84%, #5b5e63 100%)',
          boxShadow:
            'rgba(0,0,0,0.55) 0 40px 90px, rgba(255,255,255,0.18) 0 2px 4px inset, rgba(0,0,0,0.5) 0 0 0 1px',
        }}
      >
        <div
          className="phone-screen relative overflow-hidden bg-black"
          style={{
            width: FRAME_WIDTH - 10,
            height: FRAME_HEIGHT - 10,
            borderRadius: 48,
            boxShadow: 'rgba(0,0,0,0.85) 0 0 0 2px, rgba(255,255,255,0.06) 0 0 0 1px inset',
          }}
        >
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-[11px] z-50 h-[37px] w-[126px] -translate-x-1/2 rounded-[24px] bg-black" />
          <StatusBar />

          <div className="absolute inset-0 flex flex-col">
            <div className="phone-screen-scroll relative min-h-0 flex-1 overflow-y-auto bg-white">{children}</div>
          </div>

          {/* Home indicator */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[8px] z-50 flex justify-center">
            <div className="h-[5px] w-[134px] rounded-full bg-white/90" />
          </div>
        </div>
      </div>
    </div>
  )
}
