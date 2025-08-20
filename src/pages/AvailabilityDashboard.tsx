import Navigation from '@/components/Navigation'
import TourCalendar from '@/components/TourCalendar'

export default function AvailabilityDashboard() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navigation />
      <div className="h-16"></div>
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <TourCalendar />
      </div>
    </div>
  )
}