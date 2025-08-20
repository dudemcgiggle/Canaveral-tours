import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-space-blue to-cosmic-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6">
            Mission
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stellar-cyan to-nebula-purple">
              {' '}Control
            </span>
          </h2>
          <p className="text-xl text-asteroid-gray max-w-2xl mx-auto">
            Have questions about your space exploration adventure? Our crew is standing by to help you plan the perfect tour.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-rocket-orange rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-inter font-semibold text-starlight-white mb-2">Launch Location</h4>
                  <p className="text-asteroid-gray">
                    123 Space Coast Blvd<br />
                    Cape Canaveral, FL 32920
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-stellar-cyan rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-inter font-semibold text-starlight-white mb-2">Communication Channel</h4>
                  <p className="text-asteroid-gray">
                    Phone: (321) 555-SPACE<br />
                    Toll Free: 1-800-CANAVERAL
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-nebula-purple rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-inter font-semibold text-starlight-white mb-2">Digital Transmission</h4>
                  <p className="text-asteroid-gray">
                    info@canaveralTours.com<br />
                    bookings@canaveralTours.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-solar-gold rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-inter font-semibold text-starlight-white mb-2">Mission Hours</h4>
                  <p className="text-asteroid-gray">
                    Monday - Sunday: 8:00 AM - 6:00 PM EST<br />
                    Holiday Schedule May Vary
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-card border-divider">
            <CardContent className="p-8">
              <h3 className="text-2xl font-inter font-bold text-starlight-white mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-starlight-white mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-secondary border border-divider rounded-lg text-starlight-white placeholder-asteroid-gray focus:outline-none focus:ring-2 focus:ring-stellar-cyan focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-starlight-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-secondary border border-divider rounded-lg text-starlight-white placeholder-asteroid-gray focus:outline-none focus:ring-2 focus:ring-stellar-cyan focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-starlight-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-secondary border border-divider rounded-lg text-starlight-white placeholder-asteroid-gray focus:outline-none focus:ring-2 focus:ring-stellar-cyan focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-starlight-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-secondary border border-divider rounded-lg text-starlight-white placeholder-asteroid-gray focus:outline-none focus:ring-2 focus:ring-stellar-cyan focus:border-transparent"
                    placeholder="Tour Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-starlight-white mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary border border-divider rounded-lg text-starlight-white placeholder-asteroid-gray focus:outline-none focus:ring-2 focus:ring-stellar-cyan focus:border-transparent resize-none"
                    placeholder="Tell us about your space exploration interests..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-stellar-cyan hover:bg-stellar-cyan/90 text-space-blue font-semibold py-3">
                  Launch Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}