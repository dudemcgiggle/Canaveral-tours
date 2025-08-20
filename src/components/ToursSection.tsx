import { Clock, Users, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const tours = [
  {
    id: 1,
    name: "Lighthouse & Spaceflight Premier Tour",
    duration: "4 hours",
    price: 89,
    capacity: 12,
    description: "Experience the complete Cape Canaveral adventure with lighthouse exploration and spaceflight history.",
    image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    highlights: ["Historic Lighthouse", "Launch Pad Views", "Space Museum", "Expert Guide"]
  },
  {
    id: 2,
    name: "Lighthouse & Hangar C Excursion",
    duration: "2 hours",
    price: 45,
    capacity: 15,
    description: "Discover the iconic lighthouse and explore the historic Hangar C with its fascinating exhibits.",
    image: "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    highlights: ["Lighthouse Tour", "Hangar C Access", "Historical Artifacts", "Photo Opportunities"]
  },
  {
    id: 3,
    name: "Lighthouse & Missile Museum Excursion",
    duration: "3 hours",
    price: 65,
    capacity: 10,
    description: "Combine lighthouse exploration with an in-depth tour of the missile and rocket museum.",
    image: "https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    highlights: ["Lighthouse Access", "Missile Exhibits", "Rocket Displays", "Interactive Learning"]
  }
]

export default function ToursSection() {
  return (
    <section id="tours" className="py-20 bg-gradient-to-b from-space-blue to-cosmic-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6">
            Choose Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stellar-cyan to-nebula-purple">
              {' '}Adventure
            </span>
          </h2>
          <p className="text-xl text-asteroid-gray max-w-3xl mx-auto">
            From lighthouse explorations to spaceflight adventures, discover the perfect tour 
            that matches your curiosity and schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="bg-card border-divider overflow-hidden hover:border-stellar-cyan/50 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-stellar-cyan text-space-blue px-3 py-1 rounded-full text-sm font-semibold">
                    ${tour.price}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-starlight-white text-xl">{tour.name}</CardTitle>
                <div className="flex items-center gap-4 text-asteroid-gray text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Up to {tour.capacity}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-asteroid-gray mb-4">{tour.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-starlight-white font-semibold mb-2">Tour Highlights:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-asteroid-gray">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-stellar-cyan rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-stellar-cyan hover:bg-stellar-cyan/90 text-space-blue font-semibold">
                  Book This Tour
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}