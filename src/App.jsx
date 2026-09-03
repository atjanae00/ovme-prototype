import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import ShowcaseLayout from './components/ShowcaseLayout'

import HomeAppointment from './screens/home/HomeAppointment'
import HomeNoAppointment from './screens/home/HomeNoAppointment'

import Locations from './screens/book/Locations'
import SelectService from './screens/book/SelectService'

import ProfileJourneyExpanded from './screens/journey/ProfileJourneyExpanded'
import Tray from './screens/journey/Tray'
import Comparison1 from './screens/journey/Comparison1'
import Comparison2 from './screens/journey/Comparison2'
import JourneyProfile from './screens/journey/Profile'
import Capture from './screens/journey/Capture'
import CaptureFront from './screens/journey/CaptureFront'
import CaptureLeft from './screens/journey/CaptureLeft'
import CaptureRight from './screens/journey/CaptureRight'
import CaptureReview from './screens/journey/CaptureReview'

import Profile from './screens/profile/Profile'
import ProfileExpanded from './screens/profile/ProfileExpanded'
import DirectMessage from './screens/profile/DirectMessage'
import Messaging from './screens/profile/Messaging'

// iOS-style push: new screen slides in from the right, old one slides out to the left.
const screenVariants = {
  initial: { x: 40, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -40, opacity: 0 },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={location.pathname}
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="h-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/book/locations" replace />} />

          <Route path="/home/appointment" element={<HomeAppointment />} />
          <Route path="/home/no-appointment" element={<HomeNoAppointment />} />

          <Route path="/book/locations" element={<Locations />} />
          <Route path="/book/select-service" element={<SelectService />} />

          <Route path="/journey/profile-expanded" element={<ProfileJourneyExpanded />} />
          <Route path="/journey/tray" element={<Tray />} />
          <Route path="/journey/comparison-1" element={<Comparison1 />} />
          <Route path="/journey/comparison-2" element={<Comparison2 />} />
          <Route path="/journey/profile" element={<JourneyProfile />} />
          <Route path="/journey/capture" element={<Capture />} />
          <Route path="/journey/capture/front" element={<CaptureFront />} />
          <Route path="/journey/capture/left" element={<CaptureLeft />} />
          <Route path="/journey/capture/right" element={<CaptureRight />} />
          <Route path="/journey/capture/review" element={<CaptureReview />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/expanded" element={<ProfileExpanded />} />
          <Route path="/profile/message" element={<DirectMessage />} />
          <Route path="/profile/messaging" element={<Messaging />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ShowcaseLayout>
        <AnimatedRoutes />
      </ShowcaseLayout>
    </BrowserRouter>
  )
}
