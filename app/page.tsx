"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/hero-section"
import ProblemsSection from "@/components/sections/problems-section"
import ProblemsSectionTwo from "@/components/sections/problems-section-two"
import FeaturesSection from "@/components/sections/features-section"
import ComingSoonSection from "@/components/sections/coming-soon-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <ProblemsSectionTwo />
      <FeaturesSection />
      <ComingSoonSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
