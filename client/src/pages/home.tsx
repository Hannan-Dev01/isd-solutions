import React, { useEffect } from "react";
import HeroSection from "../components/hero-section";
import TrustSection from "../components/trust-section";
import ServicesSection from "../components/services-section";
import AiSolutionsSection from "../components/ai-solutions-section";
import ErpSection from "../components/erp-section";
import TechnologySection from "../components/technology-section";
import IndustriesSection from "../components/industries-section";
import CaseStudiesSection from "../components/case-studies-section";
import WhyChooseSection from "../components/why-choose-section";
import AboutPreviewSection from "../components/about-preview-section";
import ClientsSection from "../components/clients-section";
import ContactSection from "../components/contact-section";
import { useScrollAnimation } from "../lib/scroll-animations";
import { Helmet } from "react-helmet";

const SEO_TITLE =
  "ISD Solutions | ERP, AI, Software Development & Digital Transformation Company";
const SEO_DESCRIPTION =
  "ISD Solutions provides ERP implementation, ERPNext, Odoo ERP, Oracle EBS support, AI agents, Agentic AI solutions, custom Laravel development, Python applications, reporting dashboards, FBR digital invoicing, business automation, and enterprise technology solutions.";

export default function Home() {
  const [trustRef, trustVisible] = useScrollAnimation(0.2, 200);
  const [servicesRef, servicesVisible] = useScrollAnimation(0.2, 200);
  const [aiRef, aiVisible] = useScrollAnimation(0.2, 200);
  const [erpRef, erpVisible] = useScrollAnimation(0.2, 200);
  const [techRef, techVisible] = useScrollAnimation(0.2, 200);
  const [industriesRef, industriesVisible] = useScrollAnimation(0.2, 200);
  const [caseStudiesRef, caseStudiesVisible] = useScrollAnimation(0.2, 200);
  const [whyChooseRef, whyChooseVisible] = useScrollAnimation(0.2, 200);
  const [aboutRef, aboutVisible] = useScrollAnimation(0.2, 200);
  const [clientsRef, clientsVisible] = useScrollAnimation(0.2, 200);
  const [contactRef, contactVisible] = useScrollAnimation(0.2, 200);

  useEffect(() => {
    document.title = SEO_TITLE;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", SEO_DESCRIPTION);
    }
  }, []);

  const fadeInUp = "opacity-0 translate-y-12 transition-all duration-1000 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";

  const animatedSection = (visible: boolean) =>
    `${fadeInUp} ${visible ? fadeInUpVisible : ""}`;

  return (
    <>
      <Helmet>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta
          name="keywords"
          content="ERP Implementation, Odoo ERP, ERPNext, Oracle EBS, AI Solutions, Agentic AI, Laravel Development, Python Development, FBR Digital Invoicing, Business Automation, Digital Transformation, Enterprise Software, Pakistan"
        />
        <link rel="canonical" href="https://isdsolutions.org/" />

        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content="https://isdsolutions.org/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: SEO_TITLE,
            description: SEO_DESCRIPTION,
            url: "https://isdsolutions.org/",
            mainEntity: {
              "@type": "Organization",
              name: "ISD Solutions",
              description: SEO_DESCRIPTION,
              url: "https://isdsolutions.org",
              logo: "https://isdsolutions.org/assets/images/isd-logo-light.svg",
              sameAs: [
                "https://facebook.com/isdsolutions",
                "https://twitter.com/isdsolutions",
                "https://linkedin.com/company/isdsolutions",
              ],
            },
          })}
        </script>
      </Helmet>

      <div className="pt-16">
        <div className="relative">
          <HeroSection />
          <section
            ref={trustRef as React.RefObject<HTMLElement>}
            className={animatedSection(trustVisible)}
            aria-label="Why businesses trust ISD Solutions"
          >
            <TrustSection />
          </section>
        </div>

        <section
          ref={servicesRef as React.RefObject<HTMLElement>}
          className={animatedSection(servicesVisible)}
          aria-label="Our Services"
        >
          <ServicesSection />
        </section>

        <section
          ref={aiRef as React.RefObject<HTMLElement>}
          className={animatedSection(aiVisible)}
          aria-label="Enterprise AI Solutions"
        >
          <AiSolutionsSection />
        </section>

        <section
          ref={erpRef as React.RefObject<HTMLElement>}
          className={animatedSection(erpVisible)}
          aria-label="ERP and Enterprise Application Expertise"
        >
          <ErpSection />
        </section>

        <section
          ref={techRef as React.RefObject<HTMLElement>}
          className={animatedSection(techVisible)}
          aria-label="Technology Expertise"
        >
          <TechnologySection />
        </section>

        <section
          ref={industriesRef as React.RefObject<HTMLElement>}
          className={animatedSection(industriesVisible)}
          aria-label="Industries Served"
        >
          <IndustriesSection />
        </section>

        <section
          ref={caseStudiesRef as React.RefObject<HTMLElement>}
          className={animatedSection(caseStudiesVisible)}
          aria-label="Case Studies"
        >
          <CaseStudiesSection />
        </section>

        <section
          ref={whyChooseRef as React.RefObject<HTMLElement>}
          className={animatedSection(whyChooseVisible)}
          aria-label="Why choose ISD Solutions"
        >
          <WhyChooseSection />
        </section>

        <section
          ref={aboutRef as React.RefObject<HTMLElement>}
          className={animatedSection(aboutVisible)}
          aria-label="About ISD Solutions"
        >
          <AboutPreviewSection />
        </section>

        <section
          ref={clientsRef as React.RefObject<HTMLElement>}
          className={animatedSection(clientsVisible)}
          aria-label="Our Clients and Testimonials"
        >
          <ClientsSection />
        </section>

        <section
          ref={contactRef as React.RefObject<HTMLElement>}
          className={animatedSection(contactVisible)}
          aria-label="Contact ISD Solutions"
        >
          <ContactSection />
        </section>
      </div>
    </>
  );
}
