import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { useScrollAnimation } from "../lib/scroll-animations";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { projectCategories, projects } from "../lib/projects-data";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [headerRef, headerVisible] = useScrollAnimation();
  const [filterRef, filterVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();

  useEffect(() => {
    document.title = "Project Experience & Solution Showcase | ISD Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore ISD Solutions projects: Odoo ERP, ERPNext, Oracle EBS, FBR digital invoicing, custom web portals, mobile apps, and reporting dashboards."
      );
    }
  }, []);

  const fadeInUp = "opacity-0 translate-y-8 transition-all duration-700";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const slideInLeft = "opacity-0 -translate-x-8 transition-all duration-700";
  const slideInLeftVisible = "opacity-100 translate-x-0";

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <div className="pt-16">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={headerRef as React.RefObject<HTMLElement>}
            className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ""}`}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-red mb-3">
              Project Experience
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solution <span className="text-gradient-red">Showcase</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Anonymous examples of ERP, custom development, reporting, digital invoicing,
              and automation solutions delivered across industries.
            </p>
          </div>

          <div
            ref={filterRef as React.RefObject<HTMLElement>}
            className={`flex flex-wrap justify-center gap-4 mb-12 ${slideInLeft} ${filterVisible ? slideInLeftVisible : ""}`}
          >
            {projectCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-red text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-primary-red hover:text-primary-foreground"
                }`}
                data-testid={`button-filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div
            ref={projectsRef as React.RefObject<HTMLElement>}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${fadeInUp} ${projectsVisible ? fadeInUpVisible : ""}`}
          >
            {filteredProjects.map((project, index) => (
              <Link key={project.id} href={`/projects/${project.slug}`}>
                <Card
                  className="bg-card border-border card-hover group overflow-hidden transform hover:scale-[1.02] transition-all duration-500 h-full cursor-pointer"
                  style={{
                    animation: projectsVisible
                      ? `slideInUp 0.6s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      data-testid={`img-project-${project.id}`}
                    />
                    <div className="absolute inset-0 bg-gradient-red opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 bg-primary-red text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.categoryLabel}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-red mb-2">
                      {project.industry}
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary-red transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted-foreground font-medium mb-3">{project.tagline}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-sm font-semibold text-primary-red group-hover:gap-2 transition-all">
                      View Project Details
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
