import React from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { SectionIcon } from "../lib/section-icon";

const capabilities = [
  {
    title: "Executive KPI Dashboards",
    description: "Management views for sales, finance, inventory, and operational performance.",
    icon: BarChart3,
  },
  {
    title: "Operational Dashboards",
    description: "Department-level visibility for daily tracking and exception handling.",
    icon: LineChart,
  },
  {
    title: "Oracle & ERP Reports",
    description: "Custom reports connected to Oracle EBS, ERPNext, and Odoo data sources.",
    icon: PieChart,
  },
  {
    title: "Automated Reporting",
    description: "Scheduled reports that reduce manual preparation and improve consistency.",
    icon: TrendingUp,
  },
];

export default function ReportingSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [gridRef, gridVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section
      id="reporting-dashboards"
      className="py-20 bg-background scroll-mt-20"
      aria-labelledby="reporting-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <div className="flex justify-center mb-6">
            <SectionIcon icon={LineChart} size="lg" />
          </div>
          <h2 id="reporting-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Reporting & <span className="text-gradient-red">Dashboards</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We build reporting that helps leadership see KPIs, track operations, and make
            decisions faster — with dashboards connected to ERP and business data.
          </p>
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
        >
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary-red transition-all duration-300 group"
              style={{
                animation: gridVisible
                  ? `slideInUp 0.6s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              <SectionIcon icon={item.icon} className="mb-5 group-hover:scale-110" />
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-red transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button variant="outline" size="lg" className="group">
              Request a Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
