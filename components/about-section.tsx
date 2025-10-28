"use client"

import { Card } from "@/components/ui/card"
import { Award, Shield, Users } from "lucide-react"
import { useEffect, useState } from "react"

export function AboutSection() {
  const [stats, setStats] = useState({ years: 0, clients: 0, satisfaction: 0 })

  useEffect(() => {
    const targets = { years: 7, clients: 10000, satisfaction: 98 }
    const duration = 2000
    const steps = 60
    const increment = {
      years: targets.years / steps,
      clients: targets.clients / steps,
      satisfaction: targets.satisfaction / steps,
    }

    let current = 0
    const timer = setInterval(() => {
      current++
      if (current >= steps) {
        setStats(targets)
        clearInterval(timer)
      } else {
        setStats({
          years: Math.floor(increment.years * current),
          clients: Math.floor(increment.clients * current),
          satisfaction: Math.floor(increment.satisfaction * current),
        })
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 text-balance font-poppins text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              About FAN CASH LOANS
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Since 2018, FAN CASH LOANS has been a trusted partner for South Africans seeking reliable financial
                assistance. We understand that life can be unpredictable, and sometimes you need quick access to funds.
              </p>
              <p>
                Our mission is simple: provide transparent, fast, and secure financial solutions that help you achieve
                your goals. With our 5% monthly repayment structure, you always know exactly what you're paying.
              </p>
              <p>
                We're proud to be fully registered with the National Credit Regulator (NCR) under registration number
                NCRCP10837, ensuring that all our operations meet the highest standards of compliance and consumer
                protection.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">NCR Registered</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold">SSL Secure</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="bg-gradient-to-br from-primary to-primary/70 p-8 text-primary-foreground">
              <Users className="mb-4 h-12 w-12" />
              <div className="text-5xl font-bold">{stats.years}+</div>
              <div className="mt-2 text-primary-foreground/80">Years in Service</div>
            </Card>

            <Card className="bg-gradient-to-br from-accent to-accent/70 p-8 text-accent-foreground">
              <Award className="mb-4 h-12 w-12" />
              <div className="text-5xl font-bold">{stats.clients.toLocaleString()}+</div>
              <div className="mt-2 text-accent-foreground/80">Clients Helped</div>
            </Card>

            <Card className="bg-gradient-to-br from-secondary to-secondary/70 p-8 text-secondary-foreground sm:col-span-2">
              <Shield className="mb-4 h-12 w-12" />
              <div className="text-5xl font-bold">{stats.satisfaction}%</div>
              <div className="mt-2 text-secondary-foreground/80">Customer Satisfaction</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
