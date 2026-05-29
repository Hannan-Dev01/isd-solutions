import React from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";

export default function AboutPreviewSection() {
  const [contentRef, contentVisible] = useScrollAnimation(0.2, 200);
  const [imageRef, imageVisible] = useScrollAnimation(0.2, 400);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const slideInLeft = "opacity-0 -translate-x-12 transition-all duration-1000 ease-out";
  const slideInLeftVisible = "opacity-100 translate-x-0";

  return (
    <section className="py-20 bg-muted/30" aria-labelledby="about-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            ref={contentRef as React.RefObject<HTMLElement>}
            className={`${fadeInUp} ${contentVisible ? fadeInUpVisible : ""}`}
          >
            <h2 id="about-preview-heading" className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient-red">ISD Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              ISD Solutions is a technology company focused on ERP implementation,
              custom software development, reporting dashboards, digital invoicing,
              cloud infrastructure, and business automation.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We help organizations reduce manual work, improve reporting visibility,
              automate approvals, integrate ERP with business systems, and build scalable
              applications for finance, HR, inventory, sales, and manufacturing.
            </p>
            <Link href="/about">
              <Button variant="outline" size="lg" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div
            ref={imageRef as React.RefObject<HTMLElement>}
            className={`${slideInLeft} ${imageVisible ? slideInLeftVisible : ""}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-red rounded-2xl transform rotate-3" aria-hidden="true" />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="ISD Solutions team collaborating on ERP and software projects"
                className="relative rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
