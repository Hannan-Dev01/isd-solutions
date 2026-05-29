import React from "react";
import { Card, CardContent } from "./ui/card";
import { useScrollAnimation } from "../lib/scroll-animations";

const techCategories = [
  {
    title: "Backend",
    items: ["PHP", "Laravel", "Python", "FastAPI", "REST APIs"],
  },
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "ERP Platforms",
    items: ["Odoo", "ERPNext", "Oracle EBS"],
  },
  {
    title: "Artificial Intelligence",
    items: [
      "OpenAI",
      "GPT Models",
      "Ollama",
      "Agentic AI",
      "RAG Systems",
      "Vector Databases",
      "Enterprise AI Search",
    ],
  },
  {
    title: "Databases",
    items: ["Oracle Database", "MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "Linux", "VPS Hosting", "Nginx", "Apache"],
  },
];

export default function TechnologySection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [gridRef, gridVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section className="py-20 bg-muted/30" aria-labelledby="technology-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <h2 id="technology-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Technology <span className="text-gradient-red">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive technology stack enabling secure, scalable, and
            enterprise-ready solutions.
          </p>
        </header>

        <div
          ref={gridRef as React.RefObject<HTMLElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${scaleIn} ${gridVisible ? scaleInVisible : ""}`}
        >
          {techCategories.map((category, index) => (
            <Card
              key={category.title}
              className="bg-card border-border card-hover group overflow-hidden"
              style={{
                animation: gridVisible
                  ? `slideInUp 0.6s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-5 text-foreground group-hover:text-primary-red transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2" role="list" aria-label={`${category.title} technologies`}>
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium bg-muted text-foreground px-3 py-1.5 rounded-full border border-border hover:border-primary-red hover:text-primary-red transition-colors duration-300"
                      role="listitem"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
