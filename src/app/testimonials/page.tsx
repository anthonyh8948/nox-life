import { Metadata } from "next";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Nox Life, LLC",
  description: "See what our clients say about working with Nox Life, LLC.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Client Testimonials"
        subtitle="Hear from the businesses and individuals we've helped succeed."
      />

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
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to Write Your Success Story?"
        subtitle="Join our growing list of satisfied clients and start your journey today."
        buttonText="Get Started"
      />
    </>
  );
}
