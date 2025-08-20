import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ToursSection from '@/components/ToursSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="home">
        <HeroSection />
        <ToursSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}