import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-space-blue/95 backdrop-blur-sm border-b border-stellar-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-stellar-cyan" />
            <span className="text-xl font-bold text-starlight-white">
              Canaveral Tours
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-starlight-white hover:text-stellar-cyan transition-colors">
              Home
            </a>
            <a href="#tours" className="text-starlight-white hover:text-stellar-cyan transition-colors">
              Tours
            </a>
            <a href="#about" className="text-starlight-white hover:text-stellar-cyan transition-colors">
              About
            </a>
            <a href="#reviews" className="text-starlight-white hover:text-stellar-cyan transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-starlight-white hover:text-stellar-cyan transition-colors">
              Contact
            </a>
            <Link to="/availability">
              <Button className="bg-stellar-cyan hover:bg-stellar-cyan/90 text-space-blue">
                Check Availability
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-starlight-white hover:text-stellar-cyan"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-space-blue/95 backdrop-blur-sm">
              <a
                href="#home"
                className="block px-3 py-2 text-starlight-white hover:text-stellar-cyan transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#tours"
                className="block px-3 py-2 text-starlight-white hover:text-stellar-cyan transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tours
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-starlight-white hover:text-stellar-cyan transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#reviews"
                className="block px-3 py-2 text-starlight-white hover:text-stellar-cyan transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-starlight-white hover:text-stellar-cyan transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Link
                to="/availability"
                className="block px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-stellar-cyan hover:bg-stellar-cyan/90 text-space-blue">
                  Check Availability
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}