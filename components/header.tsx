"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">FC</span>
            </div>
            <span className="text-xl font-bold text-foreground">FAN CASH LOANS</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#calculator"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Calculator
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Button size="sm" className="ml-4">
              Apply Now
            </Button>
          </nav>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link
              href="#how-it-works"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              How It Works
            </Link>
            <Link href="#calculator" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              Calculator
            </Link>
            <Link href="#about" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="#faq" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
            <Link href="#contact" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Button size="sm" className="w-full">
              Apply Now
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
