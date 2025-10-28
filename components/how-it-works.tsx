"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight, Banknote, CheckCircle, FileText } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Apply Online",
    description: "Fill out our simple online application form in just 2 minutes",
    color: "from-primary to-primary/70",
  },
  {
    icon: CheckCircle,
    title: "Get Approved Fast",
    description: "Receive approval within hours, often on the same day",
    color: "from-accent to-accent/70",
  },
  {
    icon: Banknote,
    title: "Receive Cash",
    description: "Money deposited directly into your bank account",
    color: "from-secondary to-secondary/70",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gradient-to-b from-background to-muted/30 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance font-poppins text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">Get your loan in 3 simple steps</p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-secondary lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <Card className="flex-1 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.color}`}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-4xl font-bold text-muted-foreground/30">0{index + 1}</span>
                        <h3 className="text-2xl font-bold text-card-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>

                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                  <div
                    className={`absolute inset-0 animate-pulse rounded-full bg-gradient-to-br ${step.color} opacity-20`}
                  />
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${step.color}`}
                  >
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="hidden flex-1 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
