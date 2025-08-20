import Navigation from '@/components/Navigation'
import TourCalendar from '@/components/TourCalendar'
import Footer from '@/components/Footer'

export default function AvailabilityDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tour Availability</h1>
            <p className="text-lg text-gray-600">
              Select your preferred tour date and time. All tours require advance booking and security clearance.
            </p>
          </div>
          <TourCalendar />
        </div>
      </div>
      <Footer />
    </div>
  )
}