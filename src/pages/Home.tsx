import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ToursSection from '@/components/ToursSection'
import AboutSection from '@/components/AboutSection'
import ReviewsSection from '@/components/ReviewsSection'
import BookingSection from '@/components/BookingSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-space-blue text-starlight-white font-source">
      <Navigation />
      <HeroSection />
      <ToursSection />
      <AboutSection />
      <ReviewsSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  )
}