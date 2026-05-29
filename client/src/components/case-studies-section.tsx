import React from "react";
import { Link } from "wouter";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";

const caseStudies = [
  {
    title: "FBR Digital Invoicing Automation",
    challenge: "Manual invoicing and compliance processes.",
    solution: "Integrated digital invoicing automation platform.",
    result: "Improved compliance and operational efficiency.",
  },
  {
    title: "ERP Reporting & Analytics",
    challenge: "Limited operational visibility.",
    solution: "Executive dashboards and KPI reporting.",
    result: "Better decision-making and reporting.",
  },
  {
    title: "AI-Powered Knowledge Assistant",
    challenge: "Difficulty accessing organizational knowledge.",
    solution: "Enterprise AI search platform.",
    result: "Faster information retrieval.",
  },
  {
    title: "Custom Business Portal",
    challenge: "Manual business workflows.",
    solution: "Custom web portal and automation system.",
    result: "Improved productivity and process control.",
  },
];

export default function CaseStudiesSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [gridRef, gridVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section className="py-20 bg-muted/30" aria-labelledby="case-studies-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <h2 id="case-studies-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Case <span className="text-gradient-red">Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world solutions delivering measurable business outcomes across
            ERP, compliance, AI, and custom development.
          </p>
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
          role="list"
          aria-label="Case studies"
        >
          {caseStudies.map((study, index) => (
            <Card
              key={study.title}
              className="bg-card border-border card-hover group overflow-hidden"
              style={{
                animation: gridVisible
                  ? `slideInUp 0.6s ease-out ${index * 0.1}s both`
                  : "none",
              }}
              role="listitem"
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-5 text-foreground group-hover:text-primary-red transition-colors duration-300">
                  {study.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-primary-red mb-1">Challenge</p>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-red mb-1">Solution</p>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary-red flex-shrink-0 mt-0.5" size={18} aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Result</p>
                      <p className="text-muted-foreground">{study.result}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
