import { Rocket, Users, Award, Clock } from 'lucide-react'

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-20 relative parallax-bg" 
      style={{
        backgroundImage: `linear-gradient(rgba(11, 20, 38, 0.85), rgba(26, 35, 50, 0.9)), url('https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6">
              Your Gateway to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stellar-cyan to-nebula-purple">
                {' '}Space History
              </span>
            </h2>
            
            <p className="text-xl text-asteroid-gray mb-8 leading-relaxed">
              For over 25 years, Canaveral Tours has been the premier destination for space enthusiasts 
              and curious minds alike. We offer exclusive access to historic sites, expert-guided tours, 
              and unforgettable experiences that bring the wonder of space exploration to life.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-stellar-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-6 w-6 text-stellar-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-starlight-white mb-2">Expert Guides</h4>
                  <p className="text-asteroid-gray text-sm">
                    Our certified guides are space industry veterans with insider knowledge and captivating stories.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-stellar-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-stellar-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-starlight-white mb-2">Small Groups</h4>
                  <p className="text-asteroid-gray text-sm">
                    Intimate group sizes ensure personalized attention and better access to exclusive areas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-stellar-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-stellar-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-starlight-white mb-2">Award Winning</h4>
                  <p className="text-asteroid-gray text-sm">
                    Recognized as the top space tourism experience on the Space Coast for 5 consecutive years.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-stellar-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-stellar-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-starlight-white mb-2">Flexible Scheduling</h4>
                  <p className="text-asteroid-gray text-sm">
                    Multiple tour times daily with options for private groups and special occasions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-divider">
              <div className="text-4xl font-bold text-stellar-cyan mb-2">25+</div>
              <div className="text-starlight-white font-semibold mb-1">Years</div>
              <div className="text-asteroid-gray text-sm">Of Excellence</div>
            </div>
            
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-divider">
              <div className="text-4xl font-bold text-stellar-cyan mb-2">10K+</div>
              <div className="text-starlight-white font-semibold mb-1">Visitors</div>
              <div className="text-asteroid-gray text-sm">Annually</div>
            </div>
            
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-divider">
              <div className="text-4xl font-bold text-stellar-cyan mb-2">4.9</div>
              <div className="text-starlight-white font-semibold mb-1">Rating</div>
              <div className="text-asteroid-gray text-sm">Average Score</div>
            </div>
            
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-divider">
              <div className="text-4xl font-bold text-stellar-cyan mb-2">50+</div>
              <div className="text-starlight-white font-semibold mb-1">Sites</div>
              <div className="text-asteroid-gray text-sm">To Explore</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}