import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import DeviceFrame from './components/DeviceFrame.jsx'
import BottomNav from './components/BottomNav.jsx'

import Splash from './screens/Splash.jsx'
import Register from './screens/Register.jsx'
import Preferences from './screens/Preferences.jsx'
import Home from './screens/Home.jsx'
import Filters from './screens/Filters.jsx'
import MapScreen from './screens/MapScreen.jsx'
import RestaurantDetail from './screens/RestaurantDetail.jsx'
import Favorites from './screens/Favorites.jsx'
import Feedback from './screens/Feedback.jsx'
import Profile from './screens/Profile.jsx'
import Reserve from './screens/Reserve.jsx'
import Events from './screens/Events.jsx'
import EventDetail from './screens/EventDetail.jsx'

// Rutas donde se muestra la barra de navegación inferior (la "app" ya iniciada).
const TAB_ROUTES = ['/home', '/map', '/events', '/favorites', '/profile']

export default function App() {
  const location = useLocation()
  const showTabs = TAB_ROUTES.includes(location.pathname)

  return (
    <DeviceFrame>
      <div className="app-viewport">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/register" element={<Register />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/home" element={<Home />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/map" element={<MapScreen />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/reserve/:id" element={<Reserve />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {showTabs && <BottomNav />}
      </div>
    </DeviceFrame>
  )
}
