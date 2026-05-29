import React from "react";
import { useScrollAnimation } from "../lib/scroll-animations";

const technologies = [
  "Oracle",
  "ERPNext",
  "Odoo",
  "Laravel",
  "PHP",
  "Python",
  "FastAPI",
  "MySQL",
  "PostgreSQL",
  "SQL Server",
  "Docker",
  "Linux",
];

export default function TechnologyStripSection() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2, 200);
  const [stripRef, stripVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const scaleIn = "opacity-0 scale-95 transition-all duration-1000 ease-out";
  const scaleInVisible = "opacity-100 scale-100";

  return (
    <section
      id="technologies"
      className="py-20 bg-background scroll-mt-20"
      aria-labelledby="tech-strip-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`text-center mb-12 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
        >
          <h2 id="tech-strip-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Technologies We <span className="text-gradient-red">Work With</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven platforms and stacks for ERP, custom applications, reporting, and infrastructure.
          </p>
        </header>

        <div
          ref={stripRef as React.RefObject<HTMLElement>}
          className={`flex flex-wrap justify-center gap-3 ${scaleIn} ${stripVisible ? scaleInVisible : ""}`}
        >
          {technologies.map((tech, index) => (
            <span
              key={tech}
              className="px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:border-primary-red hover:text-primary-red transition-colors duration-300"
              style={{
                animation: stripVisible
                  ? `slideInUp 0.4s ease-out ${index * 0.05}s both`
                  : "none",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
