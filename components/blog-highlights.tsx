import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"

const posts = [
  {
    title: "5 Tips for Managing Your Personal Finances",
    excerpt: "Learn how to budget effectively and make your money work for you",
    date: "2025-01-15",
    image: "/financial-planning-notebook.jpg",
  },
  {
    title: "Understanding Credit Scores in South Africa",
    excerpt: "Everything you need to know about building and maintaining good credit",
    date: "2025-01-10",
    image: "/credit-score-chart.png",
  },
  {
    title: "Emergency Fund: Why You Need One",
    excerpt: "Discover the importance of having a financial safety net",
    date: "2025-01-05",
    image: "/emergency-savings-piggy-bank.jpg",
  },
]

export function BlogHighlights() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance font-poppins text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Financial Tips & Insights
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Expert advice to help you make informed financial decisions
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-ZA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <Button variant="ghost" size="sm" className="group/btn p-0">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
