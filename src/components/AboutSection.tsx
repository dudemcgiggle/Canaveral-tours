import { Shield, Users, Award, Clock } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Cape Canaveral Lighthouse Tours
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 25 years, we've been providing exclusive access to one of America's most historic lighthouses and the birthplace of the space program. Our expert guides share fascinating stories of maritime history and space exploration.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Located within Cape Canaveral Space Force Station, our tours offer unique access to restricted areas where history was made and continues to unfold.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Secure Access</h4>
                  <p className="text-gray-600 text-sm">
                    Exclusive access to restricted military installation
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expert Guides</h4>
                  <p className="text-gray-600 text-sm">
                    Knowledgeable guides with space industry experience
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Award Winning</h4>
                  <p className="text-gray-600 text-sm">
                    Recognized as top space coast attraction
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">25+ Years</h4>
                  <p className="text-gray-600 text-sm">
                    Trusted experience in space coast tourism
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-900 font-semibold mb-1">Years</div>
              <div className="text-gray-600 text-sm">Of Excellence</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-900 font-semibold mb-1">Visitors</div>
              <div className="text-gray-600 text-sm">Annually</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-gray-900 font-semibold mb-1">Rating</div>
              <div className="text-gray-600 text-sm">Average Score</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-900 font-semibold mb-1">Secure</div>
              <div className="text-gray-600 text-sm">Military Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}