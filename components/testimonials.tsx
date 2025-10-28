"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Thabo Mabaso",
    location: "Johannesburg",
    rating: 5,
    text: "FAN CASH LOANS helped me when I needed it most. The process was quick and the team was very professional. Highly recommended!",
    avatar: "/south-african-man-smiling.jpg",
  },
  {
    name: "Nomsa Dlamini",
    location: "Durban",
    rating: 5,
    text: "I was skeptical at first, but the transparent 5% monthly rate and fast approval won me over. Great service!",
    avatar: "/south-african-woman-smiling.jpg",
  },
  {
    name: "Pieter van der Merwe",
    location: "Cape Town",
    rating: 5,
    text: "Needed emergency funds for my business. FAN CASH LOANS came through same day. Excellent experience!",
    avatar: "/businessman-smiling.jpg",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-gradient-to-b from-muted/30 to-background py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance font-poppins text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Real stories from real people we've helped
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <Card className="mx-auto max-w-2xl p-8 shadow-xl">
                    <div className="mb-6 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-6 text-lg italic leading-relaxed text-card-foreground">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
