import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { solutionShowcase } from "../lib/solution-showcase-data";

export default function Testimonials() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  useEffect(() => {
    document.title = "Implementation Experience | ISD Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore ISD Solutions implementation experience across ERP, custom development, reporting dashboards, digital invoicing, and business automation — anonymous solution showcase."
      );
    }
  }, []);

  const fadeInUp = "opacity-0 translate-y-8 transition-all duration-700";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const slideInLeft = "opacity-0 -translate-x-8 transition-all duration-700";
  const slideInLeftVisible = "opacity-100 translate-x-0";

  const implementationNotes = [
    "ERP implementation and customization for finance, HR, inventory, and manufacturing",
    "Custom business portals with workflows, approvals, and role-based access",
    "Executive dashboards, KPI reporting, and Oracle report integration",
    "FBR digital invoicing, validation, and compliance tracking platforms",
    "Private AI assistants for enterprise document search and knowledge access",
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header
            ref={headerRef as React.RefObject<HTMLElement>}
            className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-red mb-3">
              Project Experience
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Implementation <span className="text-gradient-red">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A summary of solution types we deliver. Client identities are not published
              to protect confidentiality.
            </p>
          </header>

          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
              Types of Work Delivered
            </h2>
            <ul className="space-y-3">
              {implementationNotes.map((note) => (
                <li key={note} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="text-primary-red flex-shrink-0 mt-0.5" size={18} aria-hidden="true" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={gridRef as React.RefObject<HTMLElement>}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${slideInLeft} ${gridVisible ? slideInLeftVisible : ""}`}
          >
            {solutionShowcase.map((item, index) => (
              <Card
                key={item.title}
                className="bg-card border-border card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-red mb-2">
                    {item.industry}
                  </p>
                  <h2 className="text-xl font-bold mb-4 text-foreground">{item.title}</h2>
                  <div className="space-y-3 text-sm">
                    <p>
                      <span className="font-semibold text-foreground">Challenge: </span>
                      <span className="text-muted-foreground">{item.challenge}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Solution: </span>
                      <span className="text-muted-foreground">{item.solution}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Impact: </span>
                      <span className="text-muted-foreground">{item.impact}</span>
                    </p>
                  </div>
                  <Link
                    href={`/projects/${item.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary-red hover:underline mt-6"
                  >
                    View Details
                    <ArrowRight className="ml-1" size={14} aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/contact">
              <Button size="lg" className="bg-primary-red hover:bg-primary-red/90 text-white group">
                Discuss Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
