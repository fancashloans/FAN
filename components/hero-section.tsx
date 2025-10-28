"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 sm:py-32">
      <div className="absolute inset-0 bg-[url('/diverse-south-africans-managing-money-happily.jpg')] bg-cover bg-center opacity-5" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Shield className="h-4 w-4" />
            <span>NCR Registered & Trusted Since 2018</span>
          </div>

          <h1 className="mb-6 text-balance font-poppins text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Fast. Simple. Trusted Financial Help.
          </h1>

          <p className="mb-8 text-pretty text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Get approved in minutes with FAN CASH LOANS – easy access to financial help with just 5% monthly repayment.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="group text-base">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              Check Repayments
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Same Day Approval</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">5% Monthly Rate</span>
            </div>
          </div>

          <div className="mt-8">
            <div className="mx-auto h-2 max-w-md overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Fast Approval Process</p>
          </div>
        </div>
      </div>
    </section>
  )
}
