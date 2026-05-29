import React, { useEffect } from "react";
import { useScrollAnimation } from "../lib/scroll-animations";
import { Award, Users, Target, Zap } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us | ERP, AI & Digital Transformation Partner | ISD Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about ISD Solutions — a technology company specializing in ERP implementation, AI-powered applications, custom software development, business automation, and digital transformation."
      );
    }
  }, []);

  const [headerRef, headerVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  const fadeInUp = "opacity-0 translate-y-8 transition-all duration-700";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const slideInLeft = "opacity-0 -translate-x-8 transition-all duration-700";
  const slideInLeftVisible = "opacity-100 translate-x-0";

  const features = [
    {
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
      icon: Zap
    },
    {
      title: "Expert Team",
      description: "Our experienced professionals bring deep expertise across all technology domains.",
      icon: Users
    },
    {
      title: "Quality Focus",
      description: "We maintain the highest standards of quality in every project we deliver.",
      icon: Award
    },
    {
      title: "Results Driven",
      description: "We focus on delivering measurable business outcomes and ROI.",
      icon: Target
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="pt-16">
      {/* About Company */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div 
              ref={aboutRef as any}
              className={`${fadeInUp} ${aboutVisible ? fadeInUpVisible : ''}`}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient-red">ISD Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                ISD Solutions is a technology solutions company specializing in ERP
                implementation, AI-powered business applications, custom software
                development, business automation, reporting solutions, cloud
                infrastructure, and digital transformation services.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We help organizations improve efficiency, enhance decision-making,
                automate operations, and accelerate growth through innovative
                technology solutions.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="flex items-start space-x-4 animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-primary-red text-2xl">
                      <feature.icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div 
              ref={imageRef as any}
              className={`${slideInLeft} ${imageVisible ? slideInLeftVisible : ''}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-red rounded-2xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="ISD Solutions Team"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={headerRef as any}
            className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient-red">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that speak for themselves - our track record of success and client satisfaction.
            </p>
          </div>
          
          <div 
            ref={statsRef as any}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${fadeInUp} ${statsVisible ? fadeInUpVisible : ''}`}
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-red mb-2">{stat.number}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that technology should be an enabler, not a barrier. Our mission is to make cutting-edge technology accessible and beneficial for businesses of all sizes.
              </p>
            </div>
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To be the leading technology partner for businesses seeking digital transformation and sustainable growth through innovative IT solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where every business can leverage technology to its full potential, creating value for customers, employees, and stakeholders alike.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
