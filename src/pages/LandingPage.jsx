import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/landing/Hero'
import TrialBooking from '../components/landing/TrialBooking'
import CourseExplorer from '../components/landing/CourseExplorer'
import About from '../components/landing/About'
import GrowthVisualizer from '../components/landing/GrowthVisualizer'
import Mentors from '../components/landing/Mentors'
import AnalyticsPreview from '../components/landing/AnalyticsPreview'
import Testimonials from '../components/landing/Testimonials'
import Contact from '../components/landing/Contact'
import FloatingActions from '../components/common/FloatingActions'
import InquiryDrawer from '../components/common/InquiryDrawer'
import OfferPopup from '../components/common/OfferPopup'

export default function LandingPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false)

  return (
    <>
      <Navbar />
      <Hero />
      <TrialBooking />
      <CourseExplorer />
      <About />
      <GrowthVisualizer />
      <Mentors />
      <AnalyticsPreview />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingActions onOpenInquiry={() => setInquiryOpen(true)} />
      <InquiryDrawer open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
      <OfferPopup />
    </>
  )
}
