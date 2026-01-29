import { Metadata } from "next";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Team | Nox Life, LLC",
  description: "Meet the dedicated professionals behind Nox Life, LLC.",
};

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "With over 20 years of industry experience, Alex leads our team with vision and dedication.",
  },
  {
    name: "Sarah Chen",
    role: "Chief Operations Officer",
    bio: "Sarah ensures our operations run smoothly and efficiently, delivering excellence to every client.",
  },
  {
    name: "Michael Roberts",
    role: "Head of Consulting",
    bio: "Michael brings deep expertise in strategic consulting and business transformation.",
  },
  {
    name: "Emily Davis",
    role: "Director of Client Success",
    bio: "Emily is dedicated to ensuring every client achieves their goals and has an exceptional experience.",
  },
  {
    name: "David Kim",
    role: "Senior Consultant",
    bio: "David specializes in process optimization and helping businesses maximize efficiency.",
  },
  {
    name: "Lisa Thompson",
    role: "Training Manager",
    bio: "Lisa develops and delivers our comprehensive training programs to help teams grow.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-primary text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Our Team</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Meet the dedicated professionals committed to your success.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <Section>
        <SectionHeader
          title="Leadership & Experts"
          subtitle="Our team combines decades of experience with fresh perspectives."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-slate-400">{member.name.charAt(0)}</span>
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-accent font-medium">{member.role}</p>
                <p className="mt-3 text-gray-400">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Join Us */}
      <Section background="muted">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Join Our Team</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who share our passion for excellence.
          </p>
          <div className="mt-8">
            <Button href="/contact">View Opportunities</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
