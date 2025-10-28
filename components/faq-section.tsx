"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does approval take?",
    answer:
      "Most applications are approved within a few hours, often on the same day. Once approved, funds are typically deposited into your account within 24 hours.",
  },
  {
    question: "What documents do I need?",
    answer:
      "You'll need a valid South African ID, proof of income (payslip or bank statement), and proof of residence. The exact requirements may vary based on the loan amount.",
  },
  {
    question: "How are repayments made?",
    answer:
      "Repayments are made monthly via direct debit from your bank account. You can also make early repayments without penalty to reduce your total interest.",
  },
  {
    question: "Is FAN CASH LOANS registered?",
    answer:
      "Yes! We are fully registered with the National Credit Regulator (NCR) under registration number NCRCP10837 and comply with all National Credit Act requirements.",
  },
  {
    question: "What is the interest rate?",
    answer:
      "We charge a transparent 5% monthly interest rate with no hidden fees. Use our calculator above to see exactly what you'll pay before applying.",
  },
  {
    question: "Can I apply if I have bad credit?",
    answer:
      "We consider each application individually. While we do perform credit checks, we understand that everyone's situation is unique and we try to help where we can.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-muted/30 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance font-poppins text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Got questions? We've got answers
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border bg-card px-6 shadow-sm transition-all hover:shadow-md"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
