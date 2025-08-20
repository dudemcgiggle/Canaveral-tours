import { Rocket, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-void-black text-starlight-white py-12 border-t border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="h-8 w-8 text-stellar-cyan" />
              <span className="text-xl font-bold">Canaveral Tours</span>
            </div>
            <p className="text-asteroid-gray text-sm leading-relaxed">
              Your premier destination for space exploration adventures and lighthouse tours 
              on Florida's Space Coast.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-asteroid-gray hover:text-stellar-cyan transition-colors">Home</a></li>
              <li><a href="#tours" className="text-asteroid-gray hover:text-stellar-cyan transition-colors">Tours</a></li>
              <li><a href="#about" className="text-asteroid-gray hover:text-stellar-cyan transition-colors">About</a></li>
              <li><a href="#reviews" className="text-asteroid-gray hover:text-stellar-cyan transition-colors">Reviews</a></li>
              <li><Link to="/availability" className="text-asteroid-gray hover:text-stellar-cyan transition-colors">Availability</Link></li>
            </ul>
          </div>
          
          {/* Tours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Tours</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-asteroid-gray">Premier Tour</span></li>
              <li><span className="text-asteroid-gray">Hangar C Excursion</span></li>
              <li><span className="text-asteroid-gray">Missile Museum Tour</span></li>
              <li><span className="text-asteroid-gray">Private Groups</span></li>
              <li><span className="text-asteroid-gray">Special Events</span></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-asteroid-gray">
              <p>123 Space Coast Blvd<br />Cape Canaveral, FL 32920</p>
              <p>(321) 555-SPACE</p>
              <p>info@canaveralTours.com</p>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-asteroid-gray hover:text-stellar-cyan transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-asteroid-gray hover:text-stellar-cyan transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-asteroid-gray hover:text-stellar-cyan transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-asteroid-gray hover:text-stellar-cyan transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-divider mt-8 pt-8 text-center">
          <p className="text-asteroid-gray text-sm">
            © 2025 Canaveral Tours. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}