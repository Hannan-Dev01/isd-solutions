import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  BarChart3,
  Code,
  Database,
  HeadphonesIcon,
  Layers,
  Receipt,
} from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { SectionIcon } from "../lib/section-icon";

const reasons = [
  {
    title: "ERP Expertise",
    description:
      "Deep understanding of business processes, finance, inventory, HR, manufacturing, and enterprise operations.",
    icon: Database,
  },
  {
    title: "Custom Development Flexibility",
    description:
      "Solutions built using the best technology stack for business requirements.",
    icon: Code,
  },
  {
    title: "Reporting & Analytics Expertise",
    description:
      "Executive dashboards, KPI monitoring, and operational visibility.",
    icon: BarChart3,
  },
  {
    title: "Digital Compliance Experience",
    description:
      "FBR Digital Invoicing and compliance-focused solutions.",
    icon: Receipt,
  },
  {
    title: "Technology Versatility",
    description:
      "Laravel, Python, ERPNext, Odoo, Oracle, APIs, Cloud, AI.",
    icon: Layers,
  },
  {
    title: "Long-Term Partnership",
    description:
      "Implementation, support, enhancement, and maintenance services.",
    icon: HeadphonesIcon,
  },
];

export default function WhyChooseSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [gridRef, gridVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section className="py-24 bg-muted/30 border-y border-border" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <h2 id="why-choose-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Why Businesses Choose <span className="text-gradient-red">ISD Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A partner focused on ERP, custom software, reporting, compliance, and dependable
            delivery — with the flexibility to support long-term business growth.
          </p>
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
        >
          {reasons.map((reason, index) => (
            <Card
              key={reason.title}
              className="bg-card border-border card-hover group h-full"
              style={{
                animation: gridVisible
                  ? `slideInUp 0.6s ease-out ${index * 0.08}s both`
                  : "none",
              }}
            >
              <CardContent className="p-8">
                <div className="mb-5">
                  <SectionIcon icon={reason.icon} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-red transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
