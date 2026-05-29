import React from "react";
import { useScrollAnimation } from "../lib/scroll-animations";
import {
  BarChart3,
  Boxes,
  Building2,
  Calculator,
  Factory,
  ShoppingCart,
  Truck,
  UserCheck,
  Users,
} from "lucide-react";

const erpExpertise = [
  { name: "Odoo ERP", icon: Building2 },
  { name: "ERPNext", icon: Boxes },
  { name: "Oracle E-Business Suite", icon: Calculator },
  { name: "Human Resource Management", icon: Users },
  { name: "Payroll Systems", icon: UserCheck },
  { name: "Finance & Accounting", icon: Calculator },
  { name: "Inventory Management", icon: Boxes },
  { name: "Procurement", icon: Truck },
  { name: "Manufacturing", icon: Factory },
  { name: "Sales & Distribution", icon: ShoppingCart },
  { name: "CRM Solutions", icon: Users },
  { name: "Enterprise Reporting", icon: BarChart3 },
];

export default function ErpSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [gridRef, gridVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section className="py-20 bg-background" aria-labelledby="erp-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <h2 id="erp-heading" className="text-4xl md:text-5xl font-bold mb-6">
            ERP & Enterprise <span className="text-gradient-red">Application Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep expertise across leading ERP platforms and enterprise business modules
            to streamline operations and improve decision-making.
          </p>
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
          role="list"
          aria-label="ERP and enterprise application expertise"
        >
          {erpExpertise.map((item, index) => (
            <div
              key={item.name}
              className="bg-card border border-border rounded-lg p-5 flex items-center gap-3 hover:border-primary-red transition-all duration-300 transform hover:scale-105 group"
              style={{
                animation: gridVisible
                  ? `slideInUp 0.5s ease-out ${index * 0.05}s both`
                  : "none",
              }}
              role="listitem"
            >
              <div className="text-primary-red group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <item.icon size={22} aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-foreground leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
