import React from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Code,
  Globe,
  Layers,
  Link2,
  Monitor,
  RefreshCw,
  Smartphone,
  Terminal,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { SectionIcon } from "../lib/section-icon";
import type { LucideIcon } from "lucide-react";

const capabilities: { name: string; icon: LucideIcon }[] = [
  { name: "PHP Laravel Applications", icon: Code },
  { name: "Python Applications", icon: Terminal },
  { name: "FastAPI Backends", icon: Zap },
  { name: "REST API Development", icon: Link2 },
  { name: "Business Web Portals", icon: Globe },
  { name: "Mobile Applications", icon: Smartphone },
  { name: "Management Systems", icon: Layers },
  { name: "SaaS Applications", icon: Monitor },
  { name: "Admin Panels", icon: Monitor },
  { name: "Customer Portals", icon: Users },
  { name: "Vendor Portals", icon: Users },
  { name: "Workflow Systems", icon: Workflow },
  { name: "Integration Middleware", icon: Link2 },
  { name: "Legacy System Modernization", icon: RefreshCw },
];

export default function CustomDevelopmentSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [gridRef, gridVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section
      id="custom-development"
      className="py-20 bg-muted/30 scroll-mt-20"
      aria-labelledby="custom-dev-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <div className="flex justify-center mb-6">
            <SectionIcon icon={Code} size="lg" />
          </div>
          <h2 id="custom-dev-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Custom <span className="text-gradient-red">Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We build portals, workflows, APIs, and integrations that connect with your ERP
            and existing systems — using Laravel, Python, and other stacks chosen for your
            business requirements.
          </p>
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
        >
          {capabilities.map((item, index) => (
            <div
              key={item.name}
              className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 hover:border-primary-red transition-all duration-300 group"
              style={{
                animation: gridVisible
                  ? `slideInUp 0.5s ease-out ${index * 0.04}s both`
                  : "none",
              }}
            >
              <SectionIcon icon={item.icon} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium text-foreground leading-tight">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="bg-primary-red hover:bg-primary-red/90 text-white group">
              Build Custom Solution
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
