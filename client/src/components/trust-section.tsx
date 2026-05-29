import React from "react";
import { Card, CardContent } from "./ui/card";
import { BarChart3, Code, Database, HeadphonesIcon } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { SectionIcon } from "../lib/section-icon";

const trustItems = [
  {
    title: "ERP Implementation",
    description: "ERPNext, Odoo, and Oracle EBS with modules aligned to your operations.",
    icon: Database,
  },
  {
    title: "Custom Development",
    description: "Applications built in the stack that fits your budget and integration needs.",
    icon: Code,
  },
  {
    title: "Reporting & Dashboards",
    description: "KPI views and executive reporting for faster operational decisions.",
    icon: BarChart3,
  },
  {
    title: "Long-Term Support",
    description: "Implementation, maintenance, and practical business-focused delivery.",
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
    <section className="py-20 bg-background" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <h2 id="trust-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Why Businesses <span className="text-gradient-red">Trust ISD Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Focused on ERP delivery, custom software, reporting visibility, and dependable support.
          </p>
        </header>

        <div
          ref={cardsRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${scaleIn} ${cardsVisible ? scaleInVisible : ""}`}
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
              <CardContent className="p-8">
                <div className="mx-auto mb-4 w-fit">
                  <SectionIcon icon={item.icon} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary-red transition-colors duration-300">
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
