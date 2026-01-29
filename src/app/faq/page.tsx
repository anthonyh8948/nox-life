"use client";

import { useState } from "react";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import { faqs } from "@/data/faq";

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
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and process."
      />

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

      <Section background="muted">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Still Have Questions?</h2>
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
