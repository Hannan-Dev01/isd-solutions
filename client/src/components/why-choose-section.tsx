import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Brain,
  HeadphonesIcon,
  Layers,
  Scale,
  Target,
  Wrench,
} from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";

const reasons = [
  {
    title: "ERP & Enterprise Expertise",
    description: "Deep experience in ERP implementation and business systems.",
    icon: Layers,
  },
  {
    title: "AI & Automation Specialists",
    description: "Modern AI solutions focused on business outcomes.",
    icon: Brain,
  },
  {
    title: "Custom Development Capability",
    description: "Solutions tailored to unique business requirements.",
    icon: Wrench,
  },
  {
    title: "Industry-Focused Approach",
    description: "Understanding of operational and compliance challenges.",
    icon: Target,
  },
  {
    title: "Scalable Technology",
    description: "Solutions designed to grow with businesses.",
    icon: Scale,
  },
  {
    title: "Reliable Support",
    description: "Long-term implementation and support partnership.",
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
    <section className="py-20 bg-background" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <h2 id="why-choose-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Why Businesses Choose <span className="text-gradient-red">ISD Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A trusted technology partner committed to delivering enterprise solutions
            that drive efficiency, innovation, and sustainable growth.
          </p>
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
          role="list"
          aria-label="Reasons to choose ISD Solutions"
        >
          {reasons.map((reason, index) => (
            <Card
              key={reason.title}
              className="bg-card border-border card-hover group transform hover:scale-105 transition-all duration-500"
              style={{
                animation: gridVisible
                  ? `slideInUp 0.6s ease-out ${index * 0.08}s both`
                  : "none",
              }}
              role="listitem"
            >
              <CardContent className="p-8">
                <div className="text-3xl text-primary-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-red transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
