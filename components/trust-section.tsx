"use client"

import { Card } from "@/components/ui/card"
import { FileCheck, Lock, Shield } from "lucide-react"

const trustBadges = [
  {
    icon: Shield,
    title: "NCR Registered",
    description: "NCRCP10837",
    color: "from-primary to-primary/70",
  },
  {
    icon: Lock,
    title: "SSL Secure",
    description: "256-bit Encryption",
    color: "from-accent to-accent/70",
  },
  {
    icon: FileCheck,
    title: "Compliant",
    description: "NCA Compliant",
    color: "from-secondary to-secondary/70",
  },
]

export function TrustSection() {
  return (
    <section className="border-y border-border bg-muted/20 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground">Trusted & Secure</h2>
          <p className="text-muted-foreground">Your security is our priority</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {trustBadges.map((badge, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden p-6 text-center transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-10" />
              <div
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${badge.color}`}
              >
                <badge.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-1 font-bold text-card-foreground">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Read our{" "}
            <a href="#" className="text-primary underline-offset-4 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary underline-offset-4 hover:underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
