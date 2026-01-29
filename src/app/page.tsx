import Button from "@/components/ui/Button";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card, { CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import CTASection from "@/components/ui/CTASection";
import { serviceHighlights } from "@/data/services";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering Your Journey to Success
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300">
              At Nox Life, we provide professional services tailored to your unique needs.
              Let us help you achieve your goals and unlock your full potential.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Get Started
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-12 border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <Section background="muted">
        <SectionHeader
          title="What We Do"
          subtitle="We offer comprehensive services designed to help you succeed in today's competitive landscape."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {serviceHighlights.map((service) => (
            <Card key={service.title} className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={service.icon}
                    />
                  </svg>
                </div>
                <CardTitle className="text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>{service.description}</CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/services">View All Services</Button>
        </div>
      </Section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact us today to learn how Nox Life can help you achieve your goals."
        buttonText="Contact Us"
      />
    </>
  );
}
