import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES, FLOWS } from '../routes'

// Floating overlay so QA/stakeholders can always jump between screens,
// independent of whatever CTAs a given screen's design actually wires up.
export default function ScreenNav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      {open && (
        <div className="mb-2 max-h-[70vh] w-72 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-2xl">
          <Link
            to="/"
            className="block border-b border-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            onClick={() => setOpen(false)}
          >
            ← All screens
          </Link>
          {FLOWS.map((flow) => (
            <div key={flow}>
              <div className="bg-gray-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                {flow}
              </div>
              {ROUTES.filter((r) => r.flow === flow).map((r) => (
                <Link
                  key={r.path}
                  to={r.path}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                    location.pathname === r.path ? 'text-purple-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  {r.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-xl hover:bg-gray-700"
        aria-label="Toggle screen menu"
      >
        {open ? '✕' : '☰'}
      </button>
    </div>
  )
}
