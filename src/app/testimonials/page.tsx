import { Metadata } from "next";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Testimonials | Nox Life, LLC",
  description: "See what our clients say about working with Nox Life, LLC.",
};

const testimonials = [
  {
    quote:
      "Working with Nox Life transformed our business. Their strategic insights helped us double our revenue in just one year.",
    author: "Jennifer Martinez",
    company: "Tech Innovators Inc.",
    role: "CEO",
  },
  {
    quote:
      "The team at Nox Life truly cares about their clients. They went above and beyond to ensure our project was a success.",
    author: "Robert Williams",
    company: "Global Solutions Ltd.",
    role: "Director of Operations",
  },
  {
    quote:
      "I was skeptical at first, but the results speak for themselves. Nox Life helped us identify and fix critical issues in our processes.",
    author: "Amanda Foster",
    company: "Sunrise Healthcare",
    role: "COO",
  },
  {
    quote:
      "The training programs provided by Nox Life elevated our entire team. We've seen measurable improvements in productivity.",
    author: "Christopher Lee",
    company: "Premier Financial Group",
    role: "HR Director",
  },
  {
    quote:
      "Professional, responsive, and effective. Nox Life is now our go-to partner for all consulting needs.",
    author: "Michelle Brown",
    company: "Creative Studios",
    role: "Founder",
  },
  {
    quote:
      "Their attention to detail and commitment to excellence is unmatched. I highly recommend Nox Life to anyone seeking growth.",
    author: "Daniel Garcia",
    company: "Momentum Enterprises",
    role: "Managing Partner",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-primary text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Client Testimonials</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Hear from the businesses and individuals we&apos;ve helped succeed.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <Section>
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Real stories from real clients who achieved real results."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="flex-grow">
                <svg
                  className="w-8 h-8 text-primary/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-400 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </CardContent>
              <div className="pt-4 border-t border-gray-800">
                <p className="font-semibold text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Ready to Write Your Success Story?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and start your journey today.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="outline" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
