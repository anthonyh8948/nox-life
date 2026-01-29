import { Metadata } from "next";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team | Nox Life, LLC",
  description: "Meet the dedicated professionals behind Nox Life, LLC.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Meet the dedicated professionals committed to your success."
      />

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
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
                <p className="mt-3 text-gray-400">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

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
