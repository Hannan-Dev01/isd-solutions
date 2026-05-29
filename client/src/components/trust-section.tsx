import React from "react";
import { Card, CardContent } from "./ui/card";
import { BarChart3, Code, Database, HeadphonesIcon } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { SectionIcon } from "../lib/section-icon";

const trustItems = [
  {
    title: "ERP & Business Systems",
    description: "Implementation across finance, inventory, HR, and operations.",
    icon: Database,
  },
  {
    title: "Custom Applications",
    description: "Portals, workflows, and integrations built for your processes.",
    icon: Code,
  },
  {
    title: "Reporting Visibility",
    description: "Dashboards and reports that support faster decisions.",
    icon: BarChart3,
  },
  {
    title: "Reliable Delivery",
    description: "Implementation, support, and long-term partnership.",
    icon: HeadphonesIcon,
  },
];

export default function TrustSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section className="py-16 bg-background border-b border-border" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-12 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <h2 id="trust-heading" className="text-2xl md:text-3xl font-bold mb-4">
            What We <span className="text-gradient-red">Deliver</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical technology services focused on business outcomes, not generic IT delivery.
          </p>
        </header>

        <div
          ref={cardsRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${scaleIn} ${cardsVisible ? scaleInVisible : ""}`}
        >
          {trustItems.map((item, index) => (
            <Card
              key={item.title}
              className="bg-card border-border card-hover group text-center"
              style={{
                animation: cardsVisible
                  ? `slideInUp 0.6s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-3 w-fit">
                  <SectionIcon icon={item.icon} size="sm" className="group-hover:scale-110" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary-red transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
