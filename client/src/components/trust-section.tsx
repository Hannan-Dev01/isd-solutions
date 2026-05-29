import React from "react";
import { Card, CardContent } from "./ui/card";
import { Building2, Cpu, HeadphonesIcon, Layers } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";

const trustItems = [
  {
    title: "Enterprise Solutions",
    description: "Scalable solutions designed for growing businesses.",
    icon: Building2,
  },
  {
    title: "ERP Expertise",
    description: "Implementation, customization, and integration services.",
    icon: Layers,
  },
  {
    title: "AI & Automation",
    description: "Modern AI-powered business transformation.",
    icon: Cpu,
  },
  {
    title: "Long-Term Support",
    description: "Reliable implementation and support services.",
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
            We partner with organizations to deliver enterprise-grade technology solutions
            with a focus on reliability, scalability, and long-term business value.
          </p>
        </header>

        <div
          ref={cardsRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${scaleIn} ${cardsVisible ? scaleInVisible : ""}`}
          role="list"
          aria-label="Trust and credibility highlights"
        >
          {trustItems.map((item, index) => (
            <Card
              key={item.title}
              className="bg-card border-border card-hover group text-center transform hover:scale-105 transition-all duration-500"
              style={{
                animation: cardsVisible
                  ? `slideInUp 0.6s ease-out ${index * 0.1}s both`
                  : "none",
              }}
              role="listitem"
            >
              <CardContent className="p-8">
                <div className="text-4xl text-primary-red mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto w-fit">
                  <item.icon aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary-red transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
