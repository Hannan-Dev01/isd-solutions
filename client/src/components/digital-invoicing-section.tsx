import React from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { ArrowRight, FileCheck, Receipt, Shield, Workflow } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { SectionIcon } from "../lib/section-icon";

const features = [
  {
    title: "FBR Digital Invoicing",
    description: "Integration with FBR requirements for compliant digital invoice submission.",
    icon: Receipt,
  },
  {
    title: "Invoice Validation",
    description: "Pre-submission checks that reduce errors and rejected invoices.",
    icon: FileCheck,
  },
  {
    title: "Compliance Tracking",
    description: "Status history and audit records for finance and tax review.",
    icon: Shield,
  },
  {
    title: "Bulk Processing",
    description: "Handle high invoice volumes during peak billing periods.",
    icon: Workflow,
  },
];

export default function DigitalInvoicingSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [gridRef, gridVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section
      id="digital-invoicing"
      className="py-20 bg-muted/30 scroll-mt-20"
      aria-labelledby="invoicing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <div className="flex justify-center mb-6">
            <SectionIcon icon={Receipt} size="lg" />
          </div>
          <h2 id="invoicing-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Digital <span className="text-gradient-red">Invoicing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We help organizations automate tax invoicing, track compliance, and reduce manual
            billing effort with systems built around finance operations.
          </p>
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
        >
          {features.map((item, index) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary-red transition-all duration-300 group"
              style={{
                animation: gridVisible
                  ? `slideInUp 0.5s ease-out ${index * 0.08}s both`
                  : "none",
              }}
            >
              <SectionIcon icon={item.icon} className="mx-auto mb-4 group-hover:scale-110" />
              <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="bg-primary-red hover:bg-primary-red/90 text-white group">
              Discuss Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
