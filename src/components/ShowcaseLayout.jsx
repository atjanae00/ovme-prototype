import { useNavigate, useLocation } from 'react-router-dom'
import PhoneFrame from './PhoneFrame'
import { ROUTES, FLOWS } from '../routes'

export default function ShowcaseLayout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div
      className="flex min-h-svh w-full items-center justify-center gap-16 overflow-hidden px-6 py-12"
      style={{
        background:
          'radial-gradient(75% 60% at 38% 30%, #1c1620 0%, #100d14 55%, #08070a 100%)',
        fontFamily: 'Archivo, -apple-system, system-ui, sans-serif',
        color: '#fff',
      }}
    >
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: -160,
          right: 120,
          width: 560,
          height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(170,59,255,0.16) 0%, rgba(170,59,255,0) 70%)',
        }}
      />

      <div className="relative w-[300px] shrink-0">
        <div className="flex items-center gap-[10px] text-[12px] font-bold tracking-[3px] text-[#c084fc]">
          <span className="inline-block h-[2px] w-6 bg-[#c084fc]" />
          OVME
        </div>
        <div className="mt-[18px] text-[42px] font-extrabold leading-[1.04] tracking-[-1.2px]">
          Clickable
          <br />
          prototype
        </div>

        <div className="mt-7 w-full">
          <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-white/40">
            Jump to screen
          </label>
          <select
            value={location.pathname}
            onChange={(e) => navigate(e.target.value)}
            className="w-full rounded-[10px] border border-white/10 bg-white/5 px-3 py-2.5 text-[13px] font-medium text-white outline-none"
          >
            <option value="/">All screens</option>
            {FLOWS.map((flow) => (
              <optgroup key={flow} label={flow} className="bg-[#1c1620] text-white">
                {ROUTES.filter((r) => r.flow === flow).map((r) => (
                  <option key={r.path} value={r.path} className="bg-[#1c1620] text-white">
                    {r.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      <PhoneFrame>{children}</PhoneFrame>
    </div>
  )
}
