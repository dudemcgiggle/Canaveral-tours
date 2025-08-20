import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AvailabilityDashboard from './pages/AvailabilityDashboard'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/availability" element={<AvailabilityDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App