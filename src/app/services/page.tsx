import { Metadata } from "next";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card, { CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services | Nox Life, LLC",
  description: "Explore the professional services offered by Nox Life, LLC.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive professional services designed to help you achieve your goals."
      />

      <Section>
        <SectionHeader
          title="What We Offer"
          subtitle="Tailored solutions for your unique needs."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Let's discuss how our services can help you achieve your goals."
        buttonText="Contact Us Today"
      />
    </>
  );
}
