import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'

import infoCircle from '../../assets/journey/journey-info-circle.svg'
import xClose from '../../assets/journey/journey-x-close.svg'
import timelineLine from '../../assets/journey/journey-timeline-line.svg'

import trayBaseline from '../../assets/journey/journey-tray-baseline.png'
import trayMar8 from '../../assets/journey/journey-tray-mar8.png'
import trayApr19A from '../../assets/journey/journey-tray-apr19-a.png'
import trayApr19B from '../../assets/journey/journey-tray-apr19-b.png'
import headLeft45A from '../../assets/journey/journey-head-left45-a.png'
import headRight45A from '../../assets/journey/journey-head-right45-a.png'
import headLeft45B from '../../assets/journey/journey-head-left45-b.png'
import headRight45B from '../../assets/journey/journey-head-right45-b.png'

function Thumb({ src, label, outline = false }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-[115px] w-[85px] overflow-hidden rounded-[6px] bg-[#d3d3d3] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
        <img src={src} alt={label} className="h-full w-full object-cover" />
      </div>
      <span
        className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-medium text-[#6b7280] ${
          outline ? 'border border-[#d8ecff]' : 'bg-[#d8ecff]'
        }`}
      >
        {label}
      </span>
    </div>
  )
}

function AngleThumb({ src, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-[105px] w-[79px] overflow-hidden rounded-[6px] bg-[#d3d3d3] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
        <img src={src} alt={label} className="h-full w-full object-cover" />
      </div>
      <span className="whitespace-nowrap text-[10px] font-medium text-[#8b8b8b]">{label}</span>
    </div>
  )
}

function TimelineEntry({ eyebrow, title, body, note, images, cta, ctaTo, last = false }) {
  return (
    <div className={`flex w-full flex-col gap-4 ${last ? '' : 'border-b border-dashed border-[#e5e7eb] pb-4'}`}>
      <div className="flex flex-col gap-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#8d8d8d]">{eyebrow}</p>
        <p className="font-serif text-[16px] text-[#46595c]">{title}</p>
        {body && <p className="text-[12px] text-[#46595c]">{body}</p>}
      </div>
      {note && (
        <div className="flex flex-col gap-2 rounded-[10px] bg-[#fcf1f5] p-3 text-[#46595c]">
          <p className="text-[11px] font-bold uppercase tracking-[0.5px]">note from chelsea</p>
          <p className="text-[12px] italic">{note}</p>
        </div>
      )}
      {images && (
        <div className="flex items-center justify-center gap-8">
          {images.map((img) => (
            <AngleThumb key={img.label} src={img.src} label={img.label} />
          ))}
        </div>
      )}
      {cta && (
        ctaTo ? (
          <Link to={ctaTo} className="text-[14px] font-medium text-[#3896f8]">
            {cta}
          </Link>
        ) : (
          <button type="button" className="text-left text-[14px] font-medium text-[#3896f8]">
            {cta}
          </button>
        )
      )}
    </div>
  )
}

export default function Tray() {
  return (
    <>
      <div className="relative flex w-full min-h-full flex-col overflow-hidden bg-white">
          {/* header */}
          <div className="flex flex-col gap-2 px-6 pb-2 pt-14">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <p className="font-serif text-[16px] text-[#46595c]">Botox &amp; SkinVive Progress</p>
                <img src={infoCircle} alt="" className="h-4 w-4" />
              </div>
              <Link to="/journey/profile" aria-label="Close">
                <img src={xClose} alt="" className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-[12px] text-[#46595c]">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas augue massa mauris. Amet consectetur
              egestas augue massa mauris.
            </p>
            <Link
              to="/journey/capture"
              className="mt-1 flex w-full items-center justify-center rounded-[6px] bg-[#3896f8] px-4 py-2 text-[14px] font-medium text-white"
            >
              Capture photo progress
            </Link>
          </div>

          {/* photo strip */}
          <div className="mt-5 flex gap-6 overflow-x-auto px-6 pb-2">
            <Thumb src={trayBaseline} label="Baseline - Jan 25" />
            <Thumb src={trayMar8} label="Mar 8" outline />
            <Thumb src={trayApr19A} label="Apr 19" outline />
            <Thumb src={trayApr19B} label="Apr 19" outline />
          </div>

          {/* timeline */}
          <div className="flex flex-1 gap-4 overflow-y-auto px-6 pb-10 pt-6">
            <img src={timelineLine} alt="" className="mt-1 w-[10px] shrink-0 self-stretch object-fill" />
            <div className="flex w-full flex-col gap-6">
              <TimelineEntry
                eyebrow="Apr 19 · home"
                title="Photo update"
                body="Self-guided capture 12 weeks after Botox"
                images={[
                  { src: trayApr19A, label: 'front' },
                  { src: headLeft45A, label: 'left 45°' },
                  { src: headRight45A, label: 'right 45°' },
                ]}
                cta="Compare to your baseline"
                ctaTo="/journey/comparison-1"
              />
              <TimelineEntry
                eyebrow="Apr 19 · village plaza studio"
                title="Botox Refresh with BBL Photofacial"
                body="Chelsea Leos, NP · 24 units"
                note="Stayed light across the forehead so your brow keeps its movement. Let's hold this placement next time."
                cta="View appointment details"
              />
              <TimelineEntry
                eyebrow="Apr 19 · village plaza studio"
                title="Hydrafacial"
                body="Chelsea Leos, NP · 10 units"
                cta="View appointment details"
              />
              <TimelineEntry
                eyebrow="Apr 19 · village plaza studio"
                title="Initial Botox appointment"
                body="In-studio with Chelsea Leos · 24 units"
                images={[
                  { src: trayBaseline, label: 'front' },
                  { src: headLeft45B, label: 'left 45°' },
                  { src: headRight45B, label: 'right 45°' },
                ]}
                cta="View appointment details"
                last
              />
            </div>
          </div>
      </div>
      <ScreenNav />
    </>
  )
}
