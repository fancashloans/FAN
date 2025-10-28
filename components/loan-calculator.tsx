"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Calculator } from "lucide-react"
import { useState, useEffect } from "react"

export function LoanCalculator() {
  const [amount, setAmount] = useState(5000)
  const [duration, setDuration] = useState(6)
  const [totalRepayable, setTotalRepayable] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [displayTotal, setDisplayTotal] = useState(0)

  useEffect(() => {
    const interestRate = 0.05
    const totalInterest = amount * interestRate * duration
    const total = amount + totalInterest
    const monthly = total / duration

    setTotalRepayable(total)
    setMonthlyPayment(monthly)

    // Animated counter
    let start = 0
    const increment = total / 50
    const timer = setInterval(() => {
      start += increment
      if (start >= total) {
        setDisplayTotal(total)
        clearInterval(timer)
      } else {
        setDisplayTotal(start)
      }
    }, 20)

    return () => clearInterval(timer)
  }, [amount, duration])

  return (
    <section id="calculator" className="bg-muted/30 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance font-poppins text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Loan Repayment Calculator
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            See exactly what you'll pay before you apply
          </p>
        </div>

        <Card className="mx-auto max-w-2xl bg-gradient-to-br from-card to-primary/5 p-8 shadow-xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Calculator className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground">Calculate Your Loan</h3>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="amount" className="text-base font-semibold">
                  Amount Borrowed
                </Label>
                <span className="text-2xl font-bold text-primary">R {amount.toLocaleString()}</span>
              </div>
              <Slider
                id="amount"
                min={1000}
                max={50000}
                step={500}
                value={[amount]}
                onValueChange={(value) => setAmount(value[0])}
                className="cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>R 1,000</span>
                <span>R 50,000</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="duration" className="text-base font-semibold">
                Duration (Months)
              </Label>
              <Select value={duration.toString()} onValueChange={(value) => setDuration(Number.parseInt(value))}>
                <SelectTrigger id="duration" className="h-12 text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[3, 6, 9, 12, 18, 24].map((months) => (
                    <SelectItem key={months} value={months.toString()}>
                      {months} months
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4 rounded-lg bg-primary/10 p-6">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Interest (5% monthly):</span>
                <span className="font-semibold">R {(amount * 0.05 * duration).toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Monthly Payment:</span>
                <span className="font-semibold">
                  R {monthlyPayment.toLocaleString("en-ZA", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-lg font-bold">Total Repayable:</span>
                <span className="text-3xl font-bold text-primary">
                  R {displayTotal.toLocaleString("en-ZA", { maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <Button size="lg" className="w-full">
              Apply Now
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
