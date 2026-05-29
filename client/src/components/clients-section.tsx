import React from "react";
import { Link } from "wouter";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Building2, Factory, ShoppingBag, Briefcase } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { SectionIcon } from "../lib/section-icon";

const industries = [
  {
    title: "Manufacturing & Textile",
    description: "ERP, production visibility, inventory control, and operational reporting.",
    icon: Factory,
  },
  {
    title: "Distribution & Retail",
    description: "Sales, procurement, stock management, and business portals.",
    icon: ShoppingBag,
  },
  {
    title: "Corporate & Services",
    description: "HR portals, workflow automation, dashboards, and custom applications.",
    icon: Briefcase,
  },
  {
    title: "Large Enterprise",
    description: "Oracle EBS, compliance systems, digital invoicing, and integrations.",
    icon: Building2,
  },
];

const experienceHighlights = [
  {
    role: "Operations Director",
    sector: "Manufacturing Sector",
    quote:
      "The ERP rollout improved how our teams coordinate inventory, finance, and reporting. Processes are clearer and management has better visibility.",
  },
  {
    role: "Finance Manager",
    sector: "Enterprise Organization",
    quote:
      "Digital invoicing integration reduced manual compliance effort and gave our finance team a clearer view of invoice status and exceptions.",
  },
  {
    role: "IT Manager",
    sector: "Corporate Services",
    quote:
      "The custom portal and workflow system replaced manual approvals and helped our departments work from one platform.",
  },
];

export default function ClientsSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [gridRef, gridVisible] = useScrollAnimation(0.2, 400);
  const [quotesRef, quotesVisible] = useScrollAnimation(0.2, 600);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section className="py-20 pb-32 bg-muted/30" aria-labelledby="implementation-experience-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-red mb-3">
            Implementation Experience
          </p>
          <h2 id="implementation-experience-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Industries & <span className="text-gradient-red">Outcomes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work with organizations across manufacturing, distribution, corporate services,
            and enterprise environments — without publishing confidential client identities.
          </p>
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
        >
          {industries.map((item, index) => (
            <Card
              key={item.title}
              className="bg-card border-border card-hover text-center"
              style={{
                animation: gridVisible
                  ? `slideInUp 0.5s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 w-fit">
                  <SectionIcon icon={item.icon} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          ref={quotesRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ${fadeInUp} ${quotesVisible ? fadeInUpVisible : ""}`}
        >
          {experienceHighlights.map((item) => (
            <Card key={item.role} className="bg-card border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground">{item.role}</p>
                  <p className="text-sm text-muted-foreground">{item.sector}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" className="bg-primary-red hover:bg-primary-red/90 text-white group">
              Explore Project Experience
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
