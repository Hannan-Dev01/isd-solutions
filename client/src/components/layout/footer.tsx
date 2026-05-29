import React from "react";
import { Link } from "wouter";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTheme } from "next-themes";

const expertiseLinks = [
  { label: "ERP Solutions", href: "/#erp-solutions" },
  { label: "Custom Development", href: "/#custom-development" },
  { label: "Reporting Dashboards", href: "/services" },
  { label: "Digital Invoicing", href: "/services" },
  { label: "Cloud Infrastructure", href: "/services" },
  { label: "AI Automation", href: "/#ai-automation" },
  { label: "Website Development", href: "/services" },
  { label: "Management Systems", href: "/services" },
];

export default function Footer() {
  const { theme } = useTheme();

  const logoSrc =
    theme === "light"
      ? "/assets/images/isd-logo-light.svg"
      : "/assets/images/isd-logo-dark.svg";

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <img
                src={logoSrc}
                alt="ISD Solutions Logo"
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              ERP solutions and custom software development partner. We help
              businesses implement ERP systems, build applications, automate
              operations, and improve reporting visibility.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary-red transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-red transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-red transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-red transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {expertiseLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                  Implementation Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-red flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  1st Floor Potohar Plaza - Blue Area, Islamabad
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-red flex-shrink-0" />
                <a href="tel:+923008078456" className="text-muted-foreground text-sm hover:text-primary-red transition-colors">
                  +92 300 807 8456
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-red flex-shrink-0" />
                <a href="mailto:info@isdsolutions.com" className="text-muted-foreground text-sm hover:text-primary-red transition-colors">
                  info@isdsolutions.com
                </a>
              </div>
              <Link href="/contact">
                <span className="inline-block mt-2 text-sm font-semibold text-primary-red hover:underline">
                  Request Consultation →
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 ISD Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-muted-foreground hover:text-primary-red transition-colors duration-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
