import React, { useEffect } from "react";
import { Link, useRoute } from "wouter";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Presentation,
} from "lucide-react";
import { getProjectBySlug } from "../lib/projects-data";
import { SectionIcon } from "../lib/section-icon";
import { Layers, Target, Wrench } from "lucide-react";
import NotFound from "./not-found";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:slug");
  const slug = params?.slug ?? "";
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) {
      document.title = project.seoTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", project.seoDescription);
      }
      window.scrollTo(0, 0);
    }
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{project.seoTitle}</title>
        <meta name="description" content={project.seoDescription} />
        <meta name="keywords" content={project.seoKeywords} />
        <link rel="canonical" href={`https://isdsolutions.org/projects/${project.slug}`} />
        <meta property="og:title" content={project.seoTitle} />
        <meta property="og:description" content={project.seoDescription} />
        <meta property="og:image" content={project.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-red opacity-5" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary-red transition-colors mb-8"
            >
              <ArrowLeft className="mr-2" size={16} aria-hidden="true" />
              Back to Solution Showcase
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-red/10 text-primary-red">
                    {project.categoryLabel}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border">
                    {project.industry}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  {project.tagline}
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">{project.summary}</p>
                <Link href="/contact">
                  <Button size="lg" className="bg-primary-red hover:bg-primary-red/90 text-white group">
                    Discuss Similar Project
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
                  </Button>
                </Link>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Project <span className="text-gradient-red">Overview</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.overview}</p>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <SectionIcon icon={Target} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Challenge</h2>
                </div>
                <ul className="space-y-3">
                  {project.challenges.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-red mt-2 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <SectionIcon icon={Wrench} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Solution</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
              Key <span className="text-gradient-red">Features</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature) => (
                <Card key={feature.title} className="bg-card border-border card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <SectionIcon icon={Layers} />
              <h2 className="text-3xl font-bold text-foreground">Technology Stack</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-primary-red hover:text-primary-red transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
              Business <span className="text-gradient-red">Impact</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {project.businessImpact.map((impact) => (
                <div key={impact} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card">
                  <CheckCircle2 className="text-primary-red flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                  <span className="text-muted-foreground">{impact}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Related Services</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.relatedServices.map((service) => (
                <a
                  key={service.label}
                  href={service.href}
                  className="px-5 py-2.5 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:border-primary-red hover:text-primary-red transition-colors duration-300"
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-10 md:p-14 text-center relative">
                <div className="absolute inset-0 bg-gradient-red opacity-5" aria-hidden="true" />
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Need a similar solution for your business?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Talk to our team about ERP, custom development, reporting, digital invoicing,
                    or automation requirements for your organization.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="bg-primary-red hover:bg-primary-red/90 text-white group w-full sm:w-auto">
                        <MessageSquare className="mr-2" size={20} aria-hidden="true" />
                        Discuss Your Project
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" size="lg" className="group w-full sm:w-auto">
                        <Presentation className="mr-2" size={20} aria-hidden="true" />
                        Request Demo
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
