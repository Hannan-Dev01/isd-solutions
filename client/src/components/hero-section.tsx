import React from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTheme } from "next-themes";

export default function HeroSection() {
  const { theme } = useTheme();

  const logoSrc =
    theme === "light"
      ? "/assets/images/isd-logo-light.svg"
      : "/assets/images/isd-logo-dark.svg";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero Section"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-background to-muted"
        aria-hidden="true"
      ></div>
      <div
        className="absolute inset-0 bg-gradient-red opacity-10"
        aria-hidden="true"
      ></div>

      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
        }}
        aria-hidden="true"
        role="img"
        aria-label="Technology workspace background"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <img
            src={logoSrc}
            alt="ISD Solutions Logo - Integrated Synchronized Digitilized"
            className="h-24 w-auto animate-pulse"
            width="96"
            height="96"
          />
        </div>

        <header>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">ERP, AI & Digital Transformation</span>
            <br />
            <span className="text-gradient-red">Partner for Modern Businesses</span>
          </h1>
        </header>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          ISD Solutions helps organizations implement ERP systems, build AI-powered
          business solutions, automate workflows, develop custom software, and
          improve operational efficiency through secure, scalable, enterprise-grade
          technology.
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 mb-10"
          role="list"
          aria-label="Core capabilities"
        >
          {["ERP Systems", "AI Solutions", "Custom Software", "Digital Transformation", "Business Automation"].map(
            (item) => (
              <div
                key={item}
                className="flex items-center space-x-2 text-muted-foreground"
                role="listitem"
              >
                <CheckCircle
                  className="text-primary-red"
                  size={20}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            )
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary-red hover:bg-primary-red/90 text-white text-lg px-8 py-6 group w-full sm:w-auto"
            >
              Book Free Consultation
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
                size={20}
              />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 group w-full sm:w-auto"
            >
              Explore Our Services
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
                size={20}
              />
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="absolute top-20 left-10 w-20 h-20 bg-primary-red/10 rounded-full blur-xl animate-pulse"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary-red/5 rounded-full blur-xl animate-pulse delay-1000"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-1/2 left-20 w-16 h-16 bg-primary-red/20 rounded-full blur-lg animate-pulse delay-500"
        aria-hidden="true"
      ></div>
    </section>
  );
}
