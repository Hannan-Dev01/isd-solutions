import React from "react";
import { Link } from "wouter";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { useScrollAnimation } from "../lib/scroll-animations";

export default function ContactSection() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.2, 200);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";

  return (
    <section className="py-20 bg-background" aria-labelledby="contact-cta-heading">
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${fadeInUp} ${sectionVisible ? fadeInUpVisible : ""}`}
      >
        <Card className="bg-card border-border overflow-hidden">
          <CardContent className="p-12 md:p-16 text-center relative">
            <div className="absolute inset-0 bg-gradient-red opacity-5" aria-hidden="true" />
            <div className="relative z-10">
              <h2 id="contact-cta-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Discuss Your <span className="text-gradient-red">ERP or Software Project?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Tell us about your ERP requirements, custom application needs, reporting
                goals, or compliance automation — our team will help you plan the right approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary-red hover:bg-primary-red/90 text-white group w-full sm:w-auto">
                    <MessageSquare className="mr-2" size={20} aria-hidden="true" />
                    Discuss Your ERP Project
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="group w-full sm:w-auto">
                    <Mail className="mr-2" size={20} aria-hidden="true" />
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
