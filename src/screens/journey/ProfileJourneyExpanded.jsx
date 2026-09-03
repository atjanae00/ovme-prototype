import { Link } from 'react-router-dom'
import ScreenNav from '../../components/ScreenNav'

import markerPin from '../../assets/journey/journey-marker-pin.svg'
import clipboardPlus from '../../assets/journey/journey-clipboard-plus.svg'
import chevronDown from '../../assets/journey/journey-chevron-down.svg'
import infoCircle from '../../assets/journey/journey-info-circle.svg'
import plusIcon from '../../assets/journey/journey-plus.svg'
import xClose from '../../assets/journey/journey-x-close.svg'
import userAvatar from '../../assets/journey/journey-user-avatar.png'
import timelineLine from '../../assets/journey/journey-timeline-line.svg'

import photoBaselineJan25 from '../../assets/journey/journey-baseline-jan25.png'
import photoMar8 from '../../assets/journey/journey-mar8.png'
import photoApr19 from '../../assets/journey/journey-apr19.png'
import photoWeek0 from '../../assets/journey/journey-week0-front.png'
import photoWeek4 from '../../assets/journey/journey-week4-front.png'

import trayBaseline from '../../assets/journey/journey-tray-baseline.png'
import trayMar8 from '../../assets/journey/journey-tray-mar8.png'
import trayApr19A from '../../assets/journey/journey-tray-apr19-a.png'
import trayApr19B from '../../assets/journey/journey-tray-apr19-b.png'
import headLeft45A from '../../assets/journey/journey-head-left45-a.png'
import headRight45A from '../../assets/journey/journey-head-right45-a.png'
import headLeft45B from '../../assets/journey/journey-head-left45-b.png'
import headRight45B from '../../assets/journey/journey-head-right45-b.png'

function SectionLabel({ children }) {
  return <p className="text-[11px] font-bold uppercase tracking-[0.5px] text-[#46595c]">{children}</p>
}

function Tag({ children, outline = false }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-medium text-white ${
        outline ? 'border border-[#4165ca] !text-[#4165ca]' : 'bg-[#4165ca]'
      }`}
    >
      {children}
    </span>
  )
}

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
      {cta &&
        (ctaTo ? (
          <Link to={ctaTo} className="text-[14px] font-medium text-[#3896f8]">
            {cta}
          </Link>
        ) : (
          <button type="button" className="text-left text-[14px] font-medium text-[#3896f8]">
            {cta}
          </button>
        ))}
    </div>
  )
}

export default function ProfileJourneyExpanded() {
  return (
    <>
      <div className="relative flex w-full min-h-full flex-col overflow-hidden bg-[#f9fafb]">
          {/* dimmed background: profile home screen */}
          <div aria-hidden className="pointer-events-none flex flex-col opacity-90 blur-[1px]">
            <div className="h-[58px] shrink-0" />

            <div className="flex flex-col gap-[17px] px-3.5 py-4 pb-8">
              <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5">
                <SectionLabel>Preferred STUDIO</SectionLabel>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={markerPin} alt="" className="h-5 w-5" />
                    <p className="text-[14px] font-semibold text-[#2e2321]">Chapel Hill - Village Plaza</p>
                  </div>
                  <span className="text-[14px] font-semibold text-[#3995fc]">Details</span>
                </div>
              </section>

              <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5">
                <SectionLabel>beauty bank</SectionLabel>
                <div className="mt-4 flex items-center gap-12">
                  <div className="flex flex-col gap-2.5">
                    <p className="text-[10px] font-medium uppercase text-[#767676]">Membership</p>
                    <p className="font-serif text-[14px] text-[#46595c]">VIP - Transform</p>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <p className="text-[10px] font-medium uppercase text-[#767676]">Balance</p>
                    <p className="font-serif text-[14px] text-[#46595c]">$450.00</p>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <p className="text-[10px] font-medium uppercase text-[#767676]">Next expiry</p>
                    <p className="font-serif text-[14px] text-[#46595c]">$50 on Oct 12</p>
                  </div>
                </div>
                <div className="mt-3 rounded-[10px] bg-[#f7f7f7] p-2">
                  <p className="text-[10px] text-[#46595c]">
                    Anniversary allowance and birthday upgrades are valid only during their respective months.
                    Beauty Bank credits expire after 12 months.
                  </p>
                </div>
                <div className="mt-3 flex w-full items-center justify-center gap-1 rounded-[10px] bg-[#fff0e1] p-3 text-[13px] font-medium text-[#46595c]">
                  Expand
                  <img src={chevronDown} alt="" className="h-5 w-5" />
                </div>
              </section>

              <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5">
                <SectionLabel>beauty journey</SectionLabel>
                <div className="mt-2 flex items-center gap-1">
                  <p className="font-serif text-[16px] text-[#46595c]">Botox &amp; SkinVive Progress</p>
                  <img src={infoCircle} alt="" className="h-3 w-3" />
                </div>
                <p className="mt-2 text-[12px] text-[#46595c]">
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper egestas augue massa mauris. Amet consectetur
                  egestas augue massa mauris.
                </p>
                <div className="mt-3 flex items-center justify-center gap-9">
                  <Thumb src={photoBaselineJan25} label="Baseline - Jan 25" />
                  <Thumb src={photoMar8} label="Mar 8" outline />
                  <Thumb src={photoApr19} label="Apr 19" outline />
                </div>
                <div className="mt-3 flex w-full items-center justify-center gap-1 rounded-[10px] bg-[#fff0e1] p-3 text-[13px] font-medium text-[#46595c]">
                  See your full journey
                  <img src={chevronDown} alt="" className="h-5 w-5" />
                </div>
              </section>

              <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5">
                <SectionLabel>wellness journey</SectionLabel>
                <div className="mt-2 flex items-center gap-1">
                  <p className="font-serif text-[16px] text-[#46595c]">Zepbound Progress</p>
                  <img src={infoCircle} alt="" className="h-3 w-3" />
                </div>
                <p className="mt-2 text-[12px] leading-[16px] text-[#46595c]">
                  Track your transformation week by week. Each photo captures real progress on your wellness path.
                </p>
                <div className="mt-3 flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="h-[120px] flex-1 overflow-hidden rounded-[6px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)]">
                      <img src={photoWeek0} alt="Week 0" className="h-full w-full object-cover" />
                    </div>
                    <div className="h-[120px] flex-1 overflow-hidden rounded-[6px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)]">
                      <img src={photoWeek4} alt="Week 4" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-[120px] flex-1 overflow-hidden rounded-[6px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)]">
                      <img src={photoWeek0} alt="Week 8" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex h-[120px] flex-1 items-center justify-center rounded-[6px] border border-dashed border-[#fec289] bg-[#fffaf5]">
                      <img src={plusIcon} alt="" className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex w-full items-center gap-2.5 rounded-[10px] bg-[#e6e1ff] p-3">
                  <p className="flex-1 text-center text-[13px] font-medium text-[#46595c]">
                    It&apos;s photo day — keep the streak going!
                  </p>
                  <img src={xClose} alt="" className="h-5 w-5" />
                </div>
              </section>

              <section className="w-full rounded-[14px] border border-[#e5e7eb] bg-white px-3 py-3.5">
                <SectionLabel>care team</SectionLabel>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={clipboardPlus} alt="" className="h-5 w-5" />
                      <p className="text-[14px] font-semibold text-[#2e2321]">Chelsea Leos, NP</p>
                    </div>
                    <span className="text-[14px] font-semibold text-[#3995fc]">Message</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={clipboardPlus} alt="" className="h-5 w-5" />
                      <p className="text-[14px] font-semibold text-[#2e2321]">Taylor Bagley, RN, BSN</p>
                    </div>
                    <span className="text-[14px] font-semibold text-[#3995fc]">Message</span>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* beauty journey tray — expanded overlay */}
          <div className="absolute inset-0 flex items-end bg-[rgba(59,59,59,0.7)] backdrop-blur-[1px]">
            <div className="flex max-h-[88%] w-full flex-col overflow-hidden rounded-t-[17px] bg-white shadow-[0px_-19px_20px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col gap-2 px-6 pt-5">
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

              <div className="mt-4 flex gap-6 overflow-x-auto px-6 pb-2">
                <Thumb src={trayBaseline} label="Baseline - Jan 25" />
                <Thumb src={trayMar8} label="Mar 8" outline />
                <Thumb src={trayApr19A} label="Apr 19" outline />
                <Thumb src={trayApr19B} label="Apr 19" outline />
              </div>

              <div className="flex flex-1 gap-4 overflow-y-auto px-6 pb-8 pt-6">
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
          </div>

          {/* user header stays visible above the dim/overlay */}
          <div className="absolute left-0 right-0 top-0 flex items-center gap-2.5 bg-[#4165ca] px-3 pb-2 pt-12">
            <img src={userAvatar} alt="" className="h-10 w-10 rounded-full object-cover" />
            <p className="text-[20px] text-white">Tia Johnson</p>
          </div>
      </div>
      <ScreenNav />
    </>
  )
}
