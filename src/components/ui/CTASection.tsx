import Section from "./Section";
import Button from "./Button";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref?: string;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <Section background="dark">
      <div className="text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        {subtitle && (
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <div className="mt-8">
          <Button href={buttonHref} variant="outline" size="lg">
            {buttonText}
          </Button>
        </div>
      </div>
    </Section>
  );
}
