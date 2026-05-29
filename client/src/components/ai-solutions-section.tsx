import React from "react";
import { Card, CardContent } from "./ui/card";
import { Bot, Brain, Shield } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { SectionIcon } from "../lib/section-icon";

const aiSolutions = [
  {
    title: "Enterprise AI Solutions",
    description:
      "Use AI to search documents, answer business questions, and support internal teams with approved knowledge sources.",
    icon: Brain,
  },
  {
    title: "Agentic AI & Automation",
    description:
      "Automate approvals, reporting steps, analysis, and routine operational workflows.",
    icon: Bot,
  },
  {
    title: "Private AI & RAG Platforms",
    description:
      "Secure search across enterprise documents and databases with controlled access.",
    icon: Shield,
  },
];

export default function AiSolutionsSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [gridRef, gridVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section
      id="ai-automation"
      className="py-16 bg-background scroll-mt-20 border-t border-border"
      aria-labelledby="ai-solutions-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-12 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Supporting Capability
          </p>
          <h2 id="ai-solutions-heading" className="text-3xl md:text-4xl font-bold mb-4">
            AI & <span className="text-gradient-red">Automation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AI supports ERP, reporting, and custom systems — helping teams find information
            faster and automate selected business processes.
          </p>
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
        >
          {aiSolutions.map((solution, index) => (
            <Card
              key={solution.title}
              className="bg-card border-border card-hover group overflow-hidden"
              style={{
                animation: gridVisible
                  ? `slideInUp 0.6s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <SectionIcon icon={solution.icon} size="sm" className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary-red transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
