import { Metadata } from "next";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Nox Life, LLC",
  description: "Learn about Nox Life, LLC - our mission, values, and commitment to your success.",
};

const values = [
  {
    title: "Integrity",
    description: "We operate with honesty and transparency in everything we do.",
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in all our services and interactions.",
  },
  {
    title: "Innovation",
    description: "We embrace new ideas and approaches to deliver better solutions.",
  },
  {
    title: "Partnership",
    description: "We build lasting relationships based on trust and mutual success.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-primary text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">About Nox Life</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Dedicated to empowering individuals and businesses to reach their full potential.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
            <p className="mt-4 text-gray-400">
              Nox Life was founded with a simple mission: to provide exceptional professional
              services that make a real difference in people&apos;s lives and businesses.
            </p>
            <p className="mt-4 text-gray-400">
              Over the years, we&apos;ve grown from a small team of passionate professionals
              into a trusted partner for hundreds of clients. Our commitment to excellence,
              integrity, and innovation has remained unchanged.
            </p>
            <p className="mt-4 text-gray-400">
              Today, we continue to expand our services and team, always with our clients&apos;
              success as our primary focus.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl h-80 flex items-center justify-center">
            <span className="text-gray-500">Company Image</span>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section background="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          <p className="mt-6 text-xl text-gray-400">
            To empower our clients with the knowledge, tools, and support they need to
            achieve their goals and create lasting positive change in their lives and businesses.
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide everything we do."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <h3 className="text-xl font-semibold text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Join Our Journey</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            We&apos;re always looking to connect with people who share our values.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
