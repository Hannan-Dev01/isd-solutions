import React from "react";
import { Link } from "wouter";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  BarChart3,
  Building2,
  Calculator,
  Cloud,
  Code,
  Database,
  FileText,
  Globe,
  Layout,
  LineChart,
  Smartphone,
  Terminal,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";

const services = [
  {
    title: "Odoo ERP Implementation & Customization",
    description:
      "Help organizations manage finance, inventory, sales, manufacturing, HR, and operations through Odoo ERP solutions.",
    icon: Building2,
  },
  {
    title: "ERPNext Implementation & Customization",
    description:
      "End-to-end ERPNext implementation, customization, reporting, and business process automation.",
    icon: FileText,
  },
  {
    title: "Oracle E-Business Suite Support & Integration",
    description:
      "Support, customization, reporting, and integration services for Oracle EBS environments.",
    icon: Database,
  },
  {
    title: "FBR Digital Invoicing Solutions",
    description:
      "Digital invoicing implementation, integration, compliance automation, and reporting.",
    icon: Calculator,
  },
  {
    title: "Custom PHP Laravel Development",
    description:
      "Enterprise-grade web applications, portals, workflow systems, and business platforms.",
    icon: Code,
  },
  {
    title: "Python Application Development",
    description:
      "FastAPI, Streamlit, automation systems, AI applications, and data processing solutions.",
    icon: Terminal,
  },
  {
    title: "Enterprise Web Applications",
    description:
      "Custom business applications designed around unique operational requirements.",
    icon: Layout,
  },
  {
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile solutions for business operations.",
    icon: Smartphone,
  },
  {
    title: "Website Development",
    description:
      "Corporate websites, portfolio websites, business websites, and landing pages.",
    icon: Globe,
  },
  {
    title: "Management Information Systems",
    description:
      "Business process automation and operational management systems.",
    icon: LineChart,
  },
  {
    title: "Reporting & Dashboard Solutions",
    description:
      "Executive dashboards, KPI reporting, analytics platforms, and business intelligence systems.",
    icon: BarChart3,
  },
  {
    title: "Cloud & Infrastructure Services",
    description:
      "VPS deployment, cloud hosting, Linux administration, and infrastructure management.",
    icon: Cloud,
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
    <section className="py-20 bg-muted/30" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-red">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive ERP, AI, software development, and digital transformation
            services tailored to enterprise and growing business needs.
          </p>
        </header>

        <div
          ref={servicesRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${scaleIn} ${servicesVisible ? scaleInVisible : ""}`}
          role="list"
          aria-label="IT Services"
        >
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-card border-border card-hover group overflow-hidden transform hover:scale-105 transition-all duration-500"
              style={{
                animation: servicesVisible
                  ? `slideInUp 0.6s ease-out ${index * 0.06}s both`
                  : "none",
              }}
              role="listitem"
            >
              <CardContent className="p-8">
                <div className="text-4xl text-primary-red mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary-red transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button size="lg" className="bg-primary-red hover:bg-primary-red/90 text-white group">
              Talk to a Solution Expert
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
