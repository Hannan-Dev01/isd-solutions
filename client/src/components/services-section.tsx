import React from "react";
import { Link } from "wouter";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Cloud,
  Code,
  Database,
  Receipt,
} from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { SectionIcon } from "../lib/section-icon";
import type { LucideIcon } from "lucide-react";

type ServiceGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

const serviceGroups: ServiceGroup[] = [
  {
    title: "ERP & Business Systems",
    icon: Database,
    items: [
      "ERPNext",
      "Odoo",
      "Oracle EBS",
      "HRMS",
      "Payroll",
      "Inventory",
      "Finance",
      "Manufacturing",
    ],
  },
  {
    title: "Custom Software Development",
    icon: Code,
    items: [
      "Laravel",
      "Python",
      "FastAPI",
      "Web Portals",
      "Mobile Apps",
      "APIs",
      "SaaS",
      "Admin Panels",
    ],
  },
  {
    title: "Reporting & Analytics",
    icon: BarChart3,
    items: [
      "KPI Dashboards",
      "Executive Dashboards",
      "Oracle Reports",
      "BI Reports",
      "Operational Dashboards",
      "Financial Reports",
    ],
  },
  {
    title: "Digital Compliance",
    icon: Receipt,
    items: [
      "FBR Digital Invoicing",
      "E-Invoicing",
      "Tax Compliance Automation",
      "Invoice Tracking",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    items: [
      "VPS Management",
      "Linux Servers",
      "Docker Deployment",
      "Nginx / Apache",
      "Backup & Support",
    ],
  },
  {
    title: "AI & Automation",
    icon: Bot,
    items: [
      "Enterprise AI",
      "Agentic AI",
      "RAG",
      "Document Intelligence",
      "Business Chatbots",
    ],
  },
];

export default function ServicesSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [servicesRef, servicesVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section
      id="services"
      className="py-20 bg-muted/30 scroll-mt-20"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-red">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Structured capabilities across ERP, custom development, reporting,
            compliance, infrastructure, and automation.
          </p>
        </header>

        <div
          ref={servicesRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${scaleIn} ${servicesVisible ? scaleInVisible : ""}`}
        >
          {serviceGroups.map((group, index) => (
            <Card
              key={group.title}
              className="bg-card border-border card-hover group overflow-hidden"
              style={{
                animation: servicesVisible
                  ? `slideInUp 0.6s ease-out ${index * 0.08}s both`
                  : "none",
              }}
            >
              <CardContent className="p-8">
                <div className="mb-5">
                  <SectionIcon icon={group.icon} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary-red transition-colors duration-300">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="text-xs font-medium bg-muted text-foreground px-3 py-1.5 rounded-full border border-border">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link href="/contact">
            <Button size="lg" className="bg-primary-red hover:bg-primary-red/90 text-white group">
              Talk to a Solution Expert
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
