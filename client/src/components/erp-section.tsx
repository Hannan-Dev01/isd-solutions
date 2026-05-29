import React from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Calculator,
  Database,
  Factory,
  HeadphonesIcon,
  Link2,
  ShoppingCart,
  Truck,
  UserCheck,
  Wrench,
} from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { SectionIcon } from "../lib/section-icon";
import type { LucideIcon } from "lucide-react";

const erpPlatforms = [
  { name: "ERPNext", icon: Boxes },
  { name: "Odoo ERP", icon: Building2 },
  { name: "Oracle EBS", icon: Database },
];

const erpExpertise: { name: string; icon: LucideIcon }[] = [
  { name: "HR & Payroll", icon: UserCheck },
  { name: "Finance & Accounting", icon: Calculator },
  { name: "Inventory & Procurement", icon: Truck },
  { name: "Manufacturing", icon: Factory },
  { name: "Sales & Distribution", icon: ShoppingCart },
  { name: "ERP Customization", icon: Wrench },
  { name: "ERP Integration", icon: Link2 },
  { name: "ERP Reporting", icon: BarChart3 },
  { name: "ERP Support & Maintenance", icon: HeadphonesIcon },
];

export default function ErpSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [platformRef, platformVisible] = useScrollAnimation(0.2, 300);
  const [gridRef, gridVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section
      id="erp-solutions"
      className="py-24 bg-muted/40 border-y border-border scroll-mt-20 relative overflow-hidden"
      aria-labelledby="erp-heading"
    >
      <div className="absolute inset-0 bg-gradient-red opacity-[0.04]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-12 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-red mb-3">
            Core Strength
          </p>
          <div className="flex justify-center mb-6">
            <SectionIcon icon={Database} size="lg" />
          </div>
          <h2 id="erp-heading" className="text-4xl md:text-5xl font-bold mb-6">
            ERP <span className="text-gradient-red">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We help businesses connect finance, HR, inventory, manufacturing, and sales in one
            system — with implementation, customization, integration, and reporting that
            reduces manual work and improves operational control.
          </p>
        </header>

        <div
          ref={platformRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto ${scaleIn} ${platformVisible ? scaleInVisible : ""}`}
        >
          {erpPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-card border-2 border-primary-red/20 rounded-xl p-6 text-center hover:border-primary-red/50 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3">
                <SectionIcon icon={platform.icon} className="group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{platform.name}</h3>
            </div>
          ))}
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
        >
          {erpExpertise.map((item, index) => (
            <div
              key={item.name}
              className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 hover:border-primary-red transition-all duration-300 group"
              style={{
                animation: gridVisible
                  ? `slideInUp 0.5s ease-out ${index * 0.04}s both`
                  : "none",
              }}
            >
              <SectionIcon icon={item.icon} className="group-hover:scale-110" />
              <span className="text-sm font-medium text-foreground leading-tight">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="bg-primary-red hover:bg-primary-red/90 text-white group">
              Discuss Your ERP Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
