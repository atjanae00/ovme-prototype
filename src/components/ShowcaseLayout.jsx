import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import PhoneFrame from './PhoneFrame'
import { ROUTES, FLOWS, FLOW_LABELS, ENTRY_POINTS } from '../routes'

export default function ShowcaseLayout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const currentFlow = ROUTES.find((r) => r.path === location.pathname)?.flow
  const [activeFlow, setActiveFlow] = useState(currentFlow ?? FLOWS[0])

  return (
    <div
      className="relative flex h-svh w-full items-center justify-center gap-16 overflow-hidden px-6 py-12"
      style={{
        background: 'radial-gradient(120% 100% at 30% 15%, #eff6ff 0%, #dbeafe 55%, #cfe4fb 100%)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        color: '#0f172a',
      }}
    >
      <div className="relative w-[340px] shrink-0 rounded-[28px] bg-white p-9 shadow-[0_30px_60px_rgba(30,58,95,0.18)]">
        <div className="flex items-center gap-[10px] text-[11px] font-bold tracking-[2px] text-[#46595c]">
          <span className="inline-block h-[2px] w-6 bg-[#46595c]" />
          OVME MEDICAL AESTHETICS
        </div>
        <div className="mt-[14px] text-[38px] font-extrabold leading-[1.05] tracking-[-1px] text-[#0f172a]">
          Clickable <span className="font-serif italic">prototype</span>
        </div>

        <div className="mt-7 w-full">
          <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#94a3b8]">Flow</label>
          <div className="grid grid-cols-2 gap-1.5">
            {FLOWS.map((flow) => (
              <button
                key={flow}
                type="button"
                onClick={() => setActiveFlow(flow)}
                className={`rounded-[10px] px-3 py-2.5 text-[13px] font-bold transition-colors ${
                  activeFlow === flow
                    ? 'bg-[#3995fc] text-white shadow-[0_6px_16px_rgba(57,149,252,0.35)]'
                    : 'bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2ecfa] hover:text-[#334155]'
                }`}
              >
                {FLOW_LABELS[flow]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 w-full">
          <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#94a3b8]">Start on</label>
          <div className="flex flex-col gap-2">
            {ENTRY_POINTS[activeFlow].map((entry, i) => {
              const active = location.pathname === entry.path
              return (
                <button
                  key={entry.path}
                  type="button"
                  onClick={() => navigate(entry.path)}
                  className={`flex items-center gap-3 rounded-[12px] border px-3.5 py-3 text-left transition-colors ${
                    active
                      ? 'border-[#3995fc] bg-[#eaf4ff]'
                      : 'border-[#e5e7eb] bg-white hover:bg-[#f8fafc]'
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${
                      active ? 'bg-[#3995fc] text-white' : 'bg-[#f1f5f9] text-[#64748b]'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#94a3b8]">{entry.step}</span>
                    <span className="text-[14px] font-bold text-[#0f172a]">{entry.label}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <PhoneFrame>{children}</PhoneFrame>
    </div>
  )
}
