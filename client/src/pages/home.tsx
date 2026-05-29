import React, { useEffect } from "react";
import HeroSection from "../components/hero-section";
import TrustSection from "../components/trust-section";
import ErpSection from "../components/erp-section";
import CustomDevelopmentSection from "../components/custom-development-section";
import ReportingSection from "../components/reporting-section";
import DigitalInvoicingSection from "../components/digital-invoicing-section";
import ServicesSection from "../components/services-section";
import CaseStudiesSection from "../components/case-studies-section";
import IndustriesSection from "../components/industries-section";
import TechnologyStripSection from "../components/technology-strip-section";
import WhyChooseSection from "../components/why-choose-section";
import AiSolutionsSection from "../components/ai-solutions-section";
import AboutPreviewSection from "../components/about-preview-section";
import ClientsSection from "../components/clients-section";
import ContactSection from "../components/contact-section";
import { useScrollAnimation } from "../lib/scroll-animations";
import { scrollToHashOnLoad } from "../lib/scroll-to-section";
import { Helmet } from "react-helmet";

const SEO_TITLE =
  "ISD Solutions | ERP Solutions & Custom Software Development Company";
const SEO_DESCRIPTION =
  "ISD Solutions provides ERPNext, Odoo ERP, Oracle EBS support, custom Laravel and Python development, reporting dashboards, FBR digital invoicing, cloud infrastructure, and business automation across Pakistan.";

export default function Home() {
  const [trustRef, trustVisible] = useScrollAnimation(0.2, 200);
  const [erpRef, erpVisible] = useScrollAnimation(0.2, 200);
  const [customDevRef, customDevVisible] = useScrollAnimation(0.2, 200);
  const [reportingRef, reportingVisible] = useScrollAnimation(0.2, 200);
  const [invoicingRef, invoicingVisible] = useScrollAnimation(0.2, 200);
  const [servicesRef, servicesVisible] = useScrollAnimation(0.2, 200);
  const [caseStudiesRef, caseStudiesVisible] = useScrollAnimation(0.2, 200);
  const [industriesRef, industriesVisible] = useScrollAnimation(0.2, 200);
  const [techRef, techVisible] = useScrollAnimation(0.2, 200);
  const [whyChooseRef, whyChooseVisible] = useScrollAnimation(0.2, 200);
  const [aiRef, aiVisible] = useScrollAnimation(0.2, 200);
  const [aboutRef, aboutVisible] = useScrollAnimation(0.2, 200);
  const [clientsRef, clientsVisible] = useScrollAnimation(0.2, 200);
  const [contactRef, contactVisible] = useScrollAnimation(0.2, 200);

  useEffect(() => {
    document.title = SEO_TITLE;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", SEO_DESCRIPTION);
    }
    scrollToHashOnLoad();
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
          content="ERP Solutions, ERPNext, Odoo ERP, Oracle EBS, Custom Software Development, Laravel Development, Python Development, Reporting Dashboards, FBR Digital Invoicing, Business Automation, Pakistan"
        />
        <link rel="canonical" href="https://isdsolutions.org/" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content="https://isdsolutions.org/" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
      </Helmet>

      <div className="pt-16">
        <div className="relative">
          <HeroSection />
          <section
            ref={trustRef as React.RefObject<HTMLElement>}
            className={animatedSection(trustVisible)}
            aria-label="What we deliver"
          >
            <TrustSection />
          </section>
        </div>

        <section
          ref={erpRef as React.RefObject<HTMLElement>}
          className={animatedSection(erpVisible)}
          aria-label="ERP Solutions"
        >
          <ErpSection />
        </section>

        <section
          ref={customDevRef as React.RefObject<HTMLElement>}
          className={animatedSection(customDevVisible)}
          aria-label="Custom Development"
        >
          <CustomDevelopmentSection />
        </section>

        <section
          ref={reportingRef as React.RefObject<HTMLElement>}
          className={animatedSection(reportingVisible)}
          aria-label="Reporting and Dashboards"
        >
          <ReportingSection />
        </section>

        <section
          ref={invoicingRef as React.RefObject<HTMLElement>}
          className={animatedSection(invoicingVisible)}
          aria-label="Digital Invoicing"
        >
          <DigitalInvoicingSection />
        </section>

        <section
          ref={servicesRef as React.RefObject<HTMLElement>}
          className={animatedSection(servicesVisible)}
          aria-label="Our Services"
        >
          <ServicesSection />
        </section>

        <section
          ref={whyChooseRef as React.RefObject<HTMLElement>}
          className={animatedSection(whyChooseVisible)}
          aria-label="Why choose ISD Solutions"
        >
          <WhyChooseSection />
        </section>

        <section
          ref={caseStudiesRef as React.RefObject<HTMLElement>}
          className={animatedSection(caseStudiesVisible)}
          aria-label="Solution Showcase"
        >
          <CaseStudiesSection />
        </section>

        <section
          ref={industriesRef as React.RefObject<HTMLElement>}
          className={animatedSection(industriesVisible)}
          aria-label="Industries Served"
        >
          <IndustriesSection />
        </section>

        <section
          ref={techRef as React.RefObject<HTMLElement>}
          className={animatedSection(techVisible)}
          aria-label="Technologies We Work With"
        >
          <TechnologyStripSection />
        </section>

        <section
          ref={aiRef as React.RefObject<HTMLElement>}
          className={animatedSection(aiVisible)}
          aria-label="AI and Automation"
        >
          <AiSolutionsSection />
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
          aria-label="Implementation Experience"
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
