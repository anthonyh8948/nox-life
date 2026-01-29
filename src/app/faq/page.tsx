"use client";

import { useState } from "react";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const faqs = [
  {
    question: "What services does Nox Life offer?",
    answer:
      "We offer a comprehensive range of professional services including strategic consulting, business development, process optimization, training & development, project management, and ongoing support. Each service is tailored to meet your specific needs.",
  },
  {
    question: "How do I get started with Nox Life?",
    answer:
      "Getting started is easy! Simply reach out through our contact page or give us a call. We'll schedule an initial consultation to understand your needs and discuss how we can help you achieve your goals.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with clients across various industries including technology, healthcare, finance, retail, manufacturing, and professional services. Our approach is adaptable to any industry's unique challenges.",
  },
  {
    question: "How long does a typical engagement last?",
    answer:
      "Engagement length varies based on your needs. Some projects may be completed in a few weeks, while others may involve ongoing partnership over months or years. We'll provide a timeline during our initial consultation.",
  },
  {
    question: "What makes Nox Life different from other consulting firms?",
    answer:
      "We combine deep expertise with a genuine commitment to your success. We don't just provide recommendations—we partner with you to implement solutions and ensure lasting results. Our clients become part of the Nox Life family.",
  },
  {
    question: "Do you offer remote or virtual services?",
    answer:
      "Yes! We offer both in-person and virtual services to accommodate your preferences and needs. Our team is equipped to deliver the same high-quality experience regardless of location.",
  },
  {
    question: "How are your fees structured?",
    answer:
      "We offer flexible pricing models including project-based fees, retainer arrangements, and hourly consulting. We'll work with you to find a structure that fits your budget and needs.",
  },
  {
    question: "Can you provide references from past clients?",
    answer:
      "Absolutely! We're happy to connect you with references who can speak to their experience working with us. Just ask during your consultation.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-4 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-white">{question}</span>
        <svg
          className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-400">{answer}</div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-primary text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Find answers to common questions about our services and process.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <Section>
        <SectionHeader
          title="Common Questions"
          subtitle="Can't find what you're looking for? Contact us directly."
        />
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="muted">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Our team is here to help. Reach out and we&apos;ll get back to you promptly.
          </p>
          <div className="mt-8">
            <Button href="/contact">Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
