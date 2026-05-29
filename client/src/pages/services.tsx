import React, { useEffect } from "react";
import ServicesAccordion from "../components/services-accordion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { 
  Rocket, 
  Users, 
  Target, 
  Award,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  useEffect(() => {
    document.title = "Services | ERP, AI, Software Development & Digital Transformation | ISD Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore ISD Solutions services: Odoo ERP, ERPNext, Oracle EBS support, FBR digital invoicing, Laravel & Python development, AI agents, reporting dashboards, cloud infrastructure, and enterprise automation."
      );
    }
  }, []);

  const processSteps = [
    {
      icon: Users,
      title: "Discovery & Planning",
      description: "We start by understanding your business needs, goals, and technical requirements to create a comprehensive project plan."
    },
    {
      icon: Target,
      title: "Design & Development",
      description: "Our expert team designs and develops your solution using cutting-edge technologies and best practices."
    },
    {
      icon: Award,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution meets the highest standards of quality and performance."
    },
    {
      icon: Rocket,
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction."
    }
  ];

  const technologies = [
    "React & Next.js", "Node.js", "PHP", "Laravel", "Vue.js", "Angular", 
    "AWS", "Azure", "Google Cloud", "Docker", "MongoDB", "PostgreSQL", 
    "Redis", "Firebase", "React Native", "Flutter", "Odoo", "ERP Next"
  ];

  return (
    <div className="pt-16">
      {/* Services Accordion */}
      <ServicesAccordion />

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient-red">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-card border-border text-center relative">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="text-primary-red" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="text-primary-red" size={24} />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technologies We <span className="text-gradient-red">Use</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={tech}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary-red transition-colors duration-300"
              >
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card border-border">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Start Your Digital Transformation
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a discovery call with our solution experts to discuss ERP,
                AI, custom software, and enterprise technology requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="btn-primary" size="lg">
                    <Rocket className="mr-2" size={20} />
                    Book Free Consultation
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" className="btn-secondary" size="lg">
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 