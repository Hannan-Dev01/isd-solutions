import React from "react";
import { Card, CardContent } from "./ui/card";
import { Bot, Brain, Shield } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { SectionIcon } from "../lib/section-icon";

const aiSolutions = [
  {
    title: "Enterprise AI Solutions",
    description:
      "AI assistants, business chatbots, document intelligence, and enterprise knowledge search for internal business operations.",
    icon: Brain,
  },
  {
    title: "Agentic AI & Automation",
    description:
      "Multi-step AI workflows that help automate approvals, reporting, analysis, customer support, and internal processes.",
    icon: Bot,
  },
  {
    title: "Private AI & RAG Platforms",
    description:
      "Secure private AI systems using enterprise documents, databases, vector search, and controlled access.",
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
      className="py-20 bg-muted/30 scroll-mt-20"
      aria-labelledby="ai-solutions-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-red mb-3">
            Supporting Capability
          </p>
          <h2 id="ai-solutions-heading" className="text-4xl md:text-5xl font-bold mb-6">
            AI & <span className="text-gradient-red">Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical AI capabilities that support ERP, reporting, and custom systems —
            not a replacement for core business software.
          </p>
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
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
              <CardContent className="p-8">
                <div className="mb-5">
                  <SectionIcon icon={solution.icon} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-red transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
