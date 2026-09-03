import { Link } from 'react-router-dom'
import { ROUTES, FLOWS } from '../routes'

export default function ScreenIndex() {
  return (
    <div className="mx-auto min-h-svh max-w-2xl px-6 py-10 font-sans">
      <h1 className="mb-1 text-2xl font-semibold text-gray-900">OVME Prototype</h1>
      <p className="mb-8 text-sm text-gray-500">Pick a screen to jump into the flow.</p>
      {FLOWS.map((flow) => (
        <div key={flow} className="mb-6">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">{flow}</h2>
          <div className="divide-y divide-gray-100 rounded-lg border border-gray-200">
            {ROUTES.filter((r) => r.flow === flow).map((r) => (
              <Link
                key={r.path}
                to={r.path}
                className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
