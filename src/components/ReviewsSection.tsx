import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Orlando, FL",
    rating: 5,
    text: "Absolutely incredible experience! Our guide was so knowledgeable and passionate about space history. The lighthouse tour was breathtaking and the spaceflight exhibits were fascinating.",
    tour: "Lighthouse & Spaceflight Premier Tour"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Atlanta, GA",
    rating: 5,
    text: "Perfect family activity! My kids were mesmerized by the rocket displays and the interactive exhibits. The small group size made it feel very personal and special.",
    tour: "Lighthouse & Missile Museum Excursion"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Miami, FL",
    rating: 5,
    text: "As a space enthusiast, this exceeded all my expectations. The access to restricted areas and behind-the-scenes stories made this tour truly unique. Highly recommended!",
    tour: "Lighthouse & Hangar C Excursion"
  }
]

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-cosmic-navy to-space-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6">
            What Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stellar-cyan to-nebula-purple">
              {' '}Explorers Say
            </span>
          </h2>
          <p className="text-xl text-asteroid-gray max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our fellow space enthusiasts 
            have to say about their adventures with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-card border-divider hover:border-stellar-cyan/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-solar-gold fill-current" />
                  ))}
                </div>
                
                <p className="text-asteroid-gray mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="border-t border-divider pt-4">
                  <div className="font-semibold text-starlight-white">{review.name}</div>
                  <div className="text-sm text-asteroid-gray">{review.location}</div>
                  <div className="text-xs text-stellar-cyan mt-1">{review.tour}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-divider">
            <Star className="h-5 w-5 text-solar-gold fill-current" />
            <span className="text-starlight-white font-semibold">4.9/5</span>
            <span className="text-asteroid-gray">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}