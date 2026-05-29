import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Bot,
  Brain,
  Database,
  FileSearch,
  MessageSquare,
  Server,
  Shield,
  Users,
  Wallet,
  Workflow,
} from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";

const aiSolutions = [
  {
    title: "HR AI Agent",
    description: "Search HR policies, employee documents, payroll information, and organizational knowledge.",
    icon: Users,
  },
  {
    title: "Finance AI Agent",
    description: "Access reports, invoices, ledgers, budgets, and financial insights through AI.",
    icon: Wallet,
  },
  {
    title: "ERP AI Assistant",
    description: "AI-powered assistance for ERP systems, reporting, and operational decision-making.",
    icon: Bot,
  },
  {
    title: "Knowledge Management AI",
    description: "Enterprise knowledge search across documents, policies, manuals, and procedures.",
    icon: Brain,
  },
  {
    title: "Private AI Deployments",
    description: "Secure AI environments deployed within organizational infrastructure.",
    icon: Shield,
  },
  {
    title: "Agentic AI Workflows",
    description: "Multi-step intelligent business process automation.",
    icon: Workflow,
  },
  {
    title: "Document Intelligence",
    description: "AI-powered document search, extraction, summarization, and analysis.",
    icon: FileSearch,
  },
  {
    title: "RAG Solutions",
    description: "Enterprise Retrieval-Augmented Generation systems using vector databases.",
    icon: Database,
  },
  {
    title: "Business Chatbots",
    description: "AI-powered support and operational assistants.",
    icon: MessageSquare,
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
    <section className="py-20 bg-muted/30" aria-labelledby="ai-solutions-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <div className="inline-flex items-center gap-2 text-primary-red mb-4">
            <Server size={20} aria-hidden="true" />
            <span className="text-sm font-semibold uppercase tracking-wider">Enterprise AI</span>
          </div>
          <h2 id="ai-solutions-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise <span className="text-gradient-red">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform business operations with intelligent AI solutions designed for
            enterprise environments.
          </p>
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
          role="list"
          aria-label="Enterprise AI solutions"
        >
          {aiSolutions.map((solution, index) => (
            <Card
              key={solution.title}
              className="bg-card border-border card-hover group overflow-hidden transform hover:scale-105 transition-all duration-500"
              style={{
                animation: gridVisible
                  ? `slideInUp 0.6s ease-out ${index * 0.08}s both`
                  : "none",
              }}
              role="listitem"
            >
              <CardContent className="p-8">
                <div className="text-3xl text-primary-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-red transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
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
