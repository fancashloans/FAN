import { HeroSection } from "@/components/hero-section"
import { QuickApplicationWidget } from "@/components/quick-application-widget"
import { WhyChooseUs } from "@/components/why-choose-us"
import { LoanCalculator } from "@/components/loan-calculator"
import { LoanTypes } from "@/components/loan-types"
import { HowItWorks } from "@/components/how-it-works"
import { AboutSection } from "@/components/about-section"
import { Testimonials } from "@/components/testimonials"
import { TrustSection } from "@/components/trust-section"
import { BlogHighlights } from "@/components/blog-highlights"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <QuickApplicationWidget />
      <WhyChooseUs />
      <LoanCalculator />
      <LoanTypes />
      <HowItWorks />
      <AboutSection />
      <Testimonials />
      <TrustSection />
      <BlogHighlights />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
