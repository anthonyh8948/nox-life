import Button from "@/components/ui/Button";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card, { CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const services = [
  {
    title: "Consulting",
    description: "Strategic guidance to help you navigate challenges and seize opportunities.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Strategy",
    description: "Develop actionable plans that align with your vision and drive measurable results.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Support",
    description: "Ongoing assistance to ensure your continued success and growth.",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  },
];

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
          {services.map((service) => (
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

      {/* CTA Section */}
      <Section background="dark">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Contact us today to learn how Nox Life can help you achieve your goals.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
