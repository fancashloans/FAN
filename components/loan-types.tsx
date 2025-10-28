"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, Banknote, Clock, TrendingUp } from "lucide-react"

const loanTypes = [
  {
    icon: Banknote,
    title: "Personal Financial Help",
    description: "Get the funds you need for personal expenses, bills, or unexpected costs",
    color: "text-primary",
  },
  {
    icon: AlertCircle,
    title: "Emergency Cash",
    description: "Quick access to cash when emergencies strike and you need help fast",
    color: "text-destructive",
  },
  {
    icon: TrendingUp,
    title: "Small Business Boost",
    description: "Grow your business with flexible financing options tailored for entrepreneurs",
    color: "text-accent",
  },
  {
    icon: Clock,
    title: "Short-Term Financial Relief",
    description: "Bridge the gap until your next payday with our short-term loan options",
    color: "text-secondary",
  },
]

export function LoanTypes() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance font-poppins text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Loan Types We Offer
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Flexible financial solutions designed for your unique needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loanTypes.map((loan, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl transition-transform group-hover:scale-150" />

              <div className="relative">
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-primary/10`}
                >
                  <loan.icon className={`h-8 w-8 ${loan.color}`} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-card-foreground">{loan.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{loan.description}</p>
                <Button variant="ghost" size="sm" className="group/btn">
                  Learn More
                  <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
