import { MapPin, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Cape Canaveral Lighthouse Tours</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your premier destination for space exploration adventures and lighthouse tours 
              on Florida's Space Coast.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#tours" className="text-gray-400 hover:text-white transition-colors">Tours</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><Link to="/availability" className="text-gray-400 hover:text-white transition-colors">Book Now</Link></li>
            </ul>
          </div>
          
          {/* Tours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Tours</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">Premier Tour ($89)</span></li>
              <li><span className="text-gray-400">Hangar C Tour ($45)</span></li>
              <li><span className="text-gray-400">Missile Museum Tour ($65)</span></li>
              <li><span className="text-gray-400">Private Groups Available</span></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Cape Canaveral Space Force Station<br />Cape Canaveral, FL 32920</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(321) 555-TOURS</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@canaveralTours.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Cape Canaveral Lighthouse Tours. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}