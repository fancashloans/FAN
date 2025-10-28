"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, Clock, FileCheck, Lock, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: TrendingUp,
    title: "Transparent 5% Monthly Repayments",
    description: "Clear, simple pricing with no hidden fees or surprises",
  },
  {
    icon: FileCheck,
    title: "Registered & Trusted Since 2018",
    description: "NCR registered (NCRCP10837) and fully compliant",
  },
  {
    icon: Clock,
    title: "Fast Approval (Same Day)",
    description: "Get your money when you need it most",
  },
  {
    icon: Lock,
    title: "Confidential & Secure",
    description: "Your data is protected with bank-level encryption",
  },
]

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance font-poppins text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Why Choose FAN CASH LOANS
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            We're committed to providing transparent, fast, and secure financial solutions
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                <feature.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-semibold text-card-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              <CheckCircle2 className="mt-4 h-5 w-5 text-accent" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
