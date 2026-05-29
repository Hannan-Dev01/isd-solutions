import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Ship,
} from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { SectionIcon } from "../lib/section-icon";

const industries = [
  {
    title: "Textile & Manufacturing",
    description:
      "Helping manufacturers improve production visibility, planning, inventory control, and reporting.",
    icon: Factory,
  },
  {
    title: "Retail & Distribution",
    description:
      "Supporting sales, inventory, procurement, and business growth.",
    icon: ShoppingBag,
  },
  {
    title: "Healthcare",
    description:
      "Digital solutions for operational efficiency and data management.",
    icon: HeartPulse,
  },
  {
    title: "Education",
    description:
      "Technology solutions for administration and process automation.",
    icon: GraduationCap,
  },
  {
    title: "Corporate Services",
    description:
      "Business applications, reporting, automation, and enterprise platforms.",
    icon: Building2,
  },
  {
    title: "Export & Compliance Businesses",
    description:
      "Digital invoicing, compliance automation, and operational reporting.",
    icon: Ship,
  },
];

export default function IndustriesSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [gridRef, gridVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section id="industries" className="py-20 bg-background scroll-mt-20" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <h2 id="industries-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Industries <span className="text-gradient-red">Served</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver tailored technology solutions across diverse industries,
            understanding unique operational and compliance requirements.
          </p>
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
          role="list"
          aria-label="Industries served"
        >
          {industries.map((industry, index) => (
            <Card
              key={industry.title}
              className="bg-card border-border card-hover group transform hover:scale-105 transition-all duration-500"
              style={{
                animation: gridVisible
                  ? `slideInUp 0.6s ease-out ${index * 0.1}s both`
                  : "none",
              }}
              role="listitem"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <SectionIcon icon={industry.icon} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-red transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
