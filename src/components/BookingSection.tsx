import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Users, Shield } from 'lucide-react'

export default function BookingSection() {
  return (
    <section 
      id="booking"
      className="py-20 relative parallax-bg" 
      style={{
        backgroundImage: `linear-gradient(rgba(11, 20, 38, 0.9), rgba(26, 35, 50, 0.95)), url('https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6">
            Ready for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stellar-cyan to-nebula-purple">
              {' '}Liftoff?
            </span>
          </h2>
          <p className="text-xl text-asteroid-gray max-w-3xl mx-auto">
            Book your space adventure today and prepare for an unforgettable journey through 
            the history and future of space exploration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-divider">
            <Calendar className="h-8 w-8 text-stellar-cyan mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-starlight-white mb-2">Easy Booking</h4>
            <p className="text-asteroid-gray text-sm">
              Simple online reservation system with instant confirmation
            </p>
          </div>
          
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-divider">
            <Clock className="h-8 w-8 text-stellar-cyan mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-starlight-white mb-2">Flexible Times</h4>
            <p className="text-asteroid-gray text-sm">
              Multiple daily departures to fit your schedule
            </p>
          </div>
          
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-divider">
            <Users className="h-8 w-8 text-stellar-cyan mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-starlight-white mb-2">Group Discounts</h4>
            <p className="text-asteroid-gray text-sm">
              Special rates for families and large groups
            </p>
          </div>
          
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-divider">
            <Shield className="h-8 w-8 text-stellar-cyan mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-starlight-white mb-2">Safe & Secure</h4>
            <p className="text-asteroid-gray text-sm">
              Fully insured tours with certified safety protocols
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/availability">
            <Button size="lg" className="bg-stellar-cyan hover:bg-stellar-cyan/90 text-space-blue font-semibold px-12 py-4 text-lg">
              Check Availability & Book Now
            </Button>
          </Link>
          <p className="text-asteroid-gray text-sm mt-4">
            Free cancellation up to 24 hours before your tour
          </p>
        </div>
      </div>
    </section>
  )
}