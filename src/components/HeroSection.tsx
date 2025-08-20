import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Rocket, Users, Clock, Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero relative flex items-center justify-center overflow-hidden w-full min-h-screen"
      style={{
        '--hero-img': `url('https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        backgroundImage: 'var(--hero-img)',
        backgroundSize: 'cover',
        backgroundPosition: '100% 51.6%',
        backgroundRepeat: 'no-repeat'
      } as React.CSSProperties}
    >
      {/* Overlay */}
      <div className="hero-overlay bg-gradient-to-b from-space-blue/80 via-space-blue/60 to-space-blue/90" />
      
      {/* Content */}
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title font-inter font-bold text-starlight-white">
            <span className="nowrap">Explore the</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stellar-cyan to-nebula-purple nowrap">
              Final Frontier
            </span>
          </h1>
          
          <p className="subhead text-xl md:text-2xl text-asteroid-gray max-w-3xl">
            Experience the wonders of space exploration with guided tours of Cape Canaveral, 
            lighthouse adventures, and exclusive spaceflight experiences.
          </p>
          
          <div className="ctas flex flex-col sm:flex-row gap-4 items-center">
            <Link to="/availability">
              <Button size="lg" className="bg-stellar-cyan hover:bg-stellar-cyan/90 text-space-blue font-semibold px-8 py-3">
                Book Your Adventure
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-stellar-cyan text-stellar-cyan hover:bg-stellar-cyan hover:text-space-blue px-8 py-3"
              onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Tours
            </Button>
          </div>
          
          <div className="stats grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Rocket className="h-6 w-6 text-stellar-cyan" />
              </div>
              <div className="text-2xl font-bold text-starlight-white">50+</div>
              <div className="text-sm text-asteroid-gray">Launch Sites</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-stellar-cyan" />
              </div>
              <div className="text-2xl font-bold text-starlight-white">10K+</div>
              <div className="text-sm text-asteroid-gray">Happy Visitors</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-stellar-cyan" />
              </div>
              <div className="text-2xl font-bold text-starlight-white">25+</div>
              <div className="text-sm text-asteroid-gray">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-stellar-cyan" />
              </div>
              <div className="text-2xl font-bold text-starlight-white">4.9</div>
              <div className="text-sm text-asteroid-gray">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}