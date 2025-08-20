import { Clock, Users, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const tours = [
  {
    id: 1,
    name: "Lighthouse & Spaceflight Premier Tour",
    duration: "4 hours",
    price: 89,
    capacity: 12,
    description: "Our most comprehensive tour featuring the historic lighthouse, Space Force Museum, and exclusive access to launch viewing areas.",
    highlights: ["Historic Cape Canaveral Lighthouse", "Space Force Museum", "Launch Pad Viewing Areas", "Missile & Rocket Garden"]
  },
  {
    id: 2,
    name: "Lighthouse & Hangar C Tour",
    duration: "2 hours",
    price: 45,
    capacity: 15,
    description: "Explore the iconic lighthouse and historic Hangar C, where early space missions were prepared.",
    highlights: ["Lighthouse Climb", "Hangar C Historic Exhibits", "Early Space Program History", "Photo Opportunities"]
  },
  {
    id: 3,
    name: "Lighthouse & Missile Museum Tour",
    duration: "3 hours",
    price: 65,
    capacity: 10,
    description: "Combine lighthouse exploration with an in-depth tour of our missile and rocket collection.",
    highlights: ["Lighthouse Access", "Missile Collection", "Rocket Displays", "Interactive Exhibits"]
  }
]

export default function ToursSection() {
  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Tours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted tour experiences, each offering unique insights into America's space program and maritime history.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Up to {tour.capacity}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    ${tour.price}
                    <span className="text-sm font-normal text-gray-500"> per person</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{tour.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Select This Tour
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}