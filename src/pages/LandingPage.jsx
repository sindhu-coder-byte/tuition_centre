import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/landing/Hero'
import AdmissionProcess from '../components/landing/AdmissionProcess'
import TrialBooking from '../components/landing/TrialBooking'
import CourseExplorer from '../components/landing/CourseExplorer'
import About from '../components/landing/About'
import Facilities from '../components/landing/Facilities'
import Activities from '../components/landing/Activities'
import Mentors from '../components/landing/Mentors'
import Achievements from '../components/landing/Achievements'
import Testimonials from '../components/landing/Testimonials'
import FAQ from '../components/landing/FAQ'
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
      <AdmissionProcess />
      <TrialBooking />
      <CourseExplorer />
      <About />
      <Facilities />
      <Activities />
      <Mentors />
      <Achievements />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions onOpenInquiry={() => setInquiryOpen(true)} />
      <InquiryDrawer open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
      <OfferPopup />
    </>
  )
}
