// Canonical registry of every screen in the prototype.
// nodeId matches the Figma node id in file SALZAlTm75HZYgXh15jyhI.
export const FILE_KEY = 'SALZAlTm75HZYgXh15jyhI'

export const ROUTES = [
  // -- home --
  { path: '/home/appointment', flow: 'home', label: 'Home — appointment', nodeId: '146:2074' },
  { path: '/home/no-appointment', flow: 'home', label: 'Home — no appointment', nodeId: '182:2160' },

  // -- book appointment --
  { path: '/book/locations', flow: 'book', label: 'Locations', nodeId: '66:38' },
  { path: '/book/select-service', flow: 'book', label: 'Select service', nodeId: '88:1193' },

  // -- beauty journey --
  { path: '/journey/profile-expanded', flow: 'journey', label: 'Profile — journey expanded', nodeId: '203:1455' },
  { path: '/journey/tray', flow: 'journey', label: 'Beauty journey tray', nodeId: '215:1644' },
  { path: '/journey/comparison-1', flow: 'journey', label: 'Beauty comparison tray 1', nodeId: '215:1761' },
  { path: '/journey/comparison-2', flow: 'journey', label: 'Beauty comparison tray 2', nodeId: '215:1915' },
  { path: '/journey/profile', flow: 'journey', label: 'Journey profile', nodeId: '219:3448' },
  { path: '/journey/capture', flow: 'journey', label: 'Guided capture', nodeId: '252:5085' },
  { path: '/journey/capture/front', flow: 'journey', label: 'Guided capture — front', nodeId: '253:5444' },
  { path: '/journey/capture/left', flow: 'journey', label: 'Guided capture — left', nodeId: '253:5561' },
  { path: '/journey/capture/right', flow: 'journey', label: 'Guided capture — right', nodeId: '253:5643' },
  { path: '/journey/capture/review', flow: 'journey', label: 'Guided capture — review', nodeId: '272:5959' },

  // -- profile --
  { path: '/profile', flow: 'profile', label: 'Profile', nodeId: '215:2997' },
  { path: '/profile/expanded', flow: 'profile', label: 'Profile — expanded', nodeId: '215:2196' },
  { path: '/profile/message', flow: 'profile', label: 'Direct message', nodeId: '280:6455' },
  { path: '/profile/messaging', flow: 'profile', label: 'Messaging', nodeId: '283:6793' },
]

// Order matches the requested left-panel tab order: booking, home, profile, beauty journey.
export const FLOWS = ['book', 'home', 'profile', 'journey']

export const FLOW_LABELS = {
  book: 'Booking',
  home: 'Home',
  profile: 'Profile',
  journey: 'Beauty journey',
}

// Curated starting points shown per flow in the showcase nav — not every screen,
// just where to jump in. The rest of each flow is reached by clicking through the
// actual UI (e.g. the guided capture wizard chains its own steps via in-app CTAs).
export const ENTRY_POINTS = {
  book: [
    { step: 'ENTRY', label: 'Locations near you', path: '/book/locations' },
    { step: 'BOOKING', label: 'Select a service', path: '/book/select-service' },
  ],
  home: [
    { step: 'ENTRY', label: 'Home — appointment', path: '/home/appointment' },
    { step: 'ALT', label: 'Home — no appointment', path: '/home/no-appointment' },
  ],
  profile: [{ step: 'ENTRY', label: 'Profile', path: '/profile' }],
  journey: [
    { step: 'EXPANDED', label: 'Expanded', path: '/journey/profile-expanded' },
    { step: 'COLLAPSED', label: 'Collapsed', path: '/journey/profile' },
    { step: 'GUIDED CAPTURE', label: 'Guided capture', path: '/journey/capture' },
  ],
}
