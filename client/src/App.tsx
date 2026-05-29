import React from "react";
import { Router, Route, Switch } from "wouter";
import { ThemeProvider } from "./components/theme-provider";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { useScrollRestoration } from "./lib/scroll-restoration";
import { Chatbot } from "./components/chatbot";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Projects from "./pages/projects";
import ProjectDetail from "./pages/project-detail";
import Testimonials from "./pages/testimonials";
import Contact from "./pages/contact";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsConditions from "./pages/terms-conditions";
import NotFound from "./pages/not-found";

function AppContent() {
  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SEO Meta Tags */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#dc2626" />
        
        {/* Primary Meta Tags */}
        <title>ISD Solutions | ERP Solutions & Custom Software Development Company</title>
        <meta name="title" content="ISD Solutions | ERP Solutions & Custom Software Development Company" />
        <meta name="description" content="ISD Solutions provides ERPNext, Odoo ERP, Oracle EBS support, custom Laravel and Python development, reporting dashboards, FBR digital invoicing, cloud infrastructure, and business automation." />
        <meta name="keywords" content="ERP Solutions, ERPNext, Odoo ERP, Oracle EBS, Custom Software Development, Laravel Development, Python Development, Reporting Dashboards, FBR Digital Invoicing, Business Automation, Pakistan" />
        <meta name="author" content="ISD Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isdsolutions.org/" />
        <meta property="og:title" content="ISD Solutions | ERP, AI, Software Development & Digital Transformation Company" />
        <meta property="og:description" content="ISD Solutions provides ERP implementation, ERPNext, Odoo ERP, Oracle EBS support, AI agents, Agentic AI solutions, custom Laravel development, Python applications, reporting dashboards, FBR digital invoicing, business automation, and enterprise technology solutions." />
        <meta property="og:image" content="https://isdsolutions.org/assets/images/isd-logo-light.svg" />
        <meta property="og:site_name" content="ISD Solutions" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://isdsolutions.org/" />
        <meta property="twitter:title" content="ISD Solutions | ERP, AI, Software Development & Digital Transformation Company" />
        <meta property="twitter:description" content="ISD Solutions provides ERP implementation, ERPNext, Odoo ERP, Oracle EBS support, AI agents, Agentic AI solutions, custom Laravel development, Python applications, reporting dashboards, FBR digital invoicing, business automation, and enterprise technology solutions." />
        <meta property="twitter:image" content="https://isdsolutions.org/assets/images/isd-logo-light.svg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="ISD Solutions" />
        <meta name="apple-mobile-web-app-title" content="ISD Solutions" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://isdsolutions.org/" />
        
        {/* Favicon and Icons (ISD logo mark) */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ISD Solutions",
            "alternateName": "Integrated Synchronized Digitilized Solutions",
            "url": "https://isdsolutions.org",
            "logo": "https://isdsolutions.org/assets/images/isd-logo-light.svg",
            "description": "ISD Solutions provides ERPNext, Odoo ERP, Oracle EBS support, custom Laravel and Python development, reporting dashboards, FBR digital invoicing, cloud infrastructure, and business automation.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1st Floor Potohar Plaza - Blue Area",
              "addressLocality": "Lahore",
              "addressCountry": "PK"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+92-300-807-8456",
              "contactType": "customer service",
              "email": "info@isdsolutions.com"
            },
            "sameAs": [
              "https://facebook.com/isdsolutions",
              "https://twitter.com/isdsolutions",
              "https://linkedin.com/company/isdsolutions"
            ],
            "serviceArea": {
              "@type": "Country",
              "name": "Pakistan"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "IT Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Odoo Consultant"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ERP Next"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "FBR Digital Invoicing"
                  }
                }
              ]
            }
          })}
        </script>
      </head>
      
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/projects/:slug" component={ProjectDetail} />
          <Route path="/projects" component={Projects} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <Toaster />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <AppContent />
      </TooltipProvider>
    </ThemeProvider>
  );
}
