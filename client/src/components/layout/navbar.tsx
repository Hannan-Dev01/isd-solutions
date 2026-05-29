import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";
import { ArrowRight, Menu, MessageSquare, X } from "lucide-react";
import { useTheme } from "next-themes";
import { scrollToSection } from "../../lib/scroll-to-section";

const navItems = [
  { label: "Home", href: "/", sectionId: null },
  { label: "ERP Solutions", href: "/", sectionId: "erp-solutions" },
  { label: "Custom Development", href: "/", sectionId: "custom-development" },
  { label: "Industries", href: "/", sectionId: "industries" },
  { label: "Technologies", href: "/", sectionId: "technologies" },
  { label: "Projects", href: "/projects", sectionId: null },
  { label: "Contact", href: "/contact", sectionId: null },
];

function NavLink({
  children,
  isActive,
  onClick,
  href,
}: {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  href?: string;
}) {
  const className = `relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${
    isActive ? "text-primary-red" : "text-foreground/90 hover:text-primary-red"
  }`;

  const underline = (
    <span
      className={`absolute left-0 -bottom-0.5 h-0.5 bg-primary-red transition-all duration-300 ${
        isActive ? "w-full" : "w-0 group-hover:w-full"
      }`}
      aria-hidden="true"
    />
  );

  if (href) {
    return (
      <Link href={href} className={`group ${className}`}>
        {children}
        {underline}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`group ${className}`}>
      {children}
      {underline}
    </button>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { theme } = useTheme();

  const logoSrc =
    theme === "light"
      ? "/assets/images/isd-logo-light.svg"
      : "/assets/images/isd-logo-dark.svg";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (item: (typeof navItems)[0]) => {
    closeMenu();
    if (item.sectionId) {
      scrollToSection(item.sectionId);
    }
  };

  const isLinkActive = (item: (typeof navItems)[0]) => {
    if (item.href === "/" && !item.sectionId) {
      return location === "/";
    }
    if (item.href && !item.sectionId) {
      return location === item.href || location.startsWith(`${item.href}/`);
    }
    return location === "/" && window.location.hash === `#${item.sectionId}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/90 backdrop-blur-sm border-b border-border/60"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16 lg:h-[4.25rem]">
          <Link href="/" className="flex items-center shrink-0 group" onClick={closeMenu}>
            <img
              src={logoSrc}
              alt="ISD Solutions Logo"
              className="h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navItems.map((item) =>
              item.sectionId ? (
                <NavLink
                  key={item.label}
                  isActive={isLinkActive(item)}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </NavLink>
              ) : (
                <NavLink key={item.label} href={item.href} isActive={isLinkActive(item)}>
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-primary-red hover:bg-primary-red/90 text-white shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <MessageSquare className="mr-2 h-4 w-4" aria-hidden="true" />
                Discuss Your Project
                <ArrowRight
                  className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border text-foreground hover:text-primary-red hover:border-primary-red/40 transition-colors duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border pb-5 pt-2">
            <div className="grid gap-0.5">
              {navItems.map((item) =>
                item.sectionId ? (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isLinkActive(item)
                        ? "bg-primary-red/10 text-primary-red"
                        : "text-foreground hover:bg-muted hover:text-primary-red"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isLinkActive(item)
                        ? "bg-primary-red/10 text-primary-red"
                        : "text-foreground hover:bg-muted hover:text-primary-red"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
            <div className="mt-4 px-2 space-y-2">
              <Link href="/contact" onClick={closeMenu}>
                <Button className="w-full bg-primary-red hover:bg-primary-red/90 text-white group">
                  <MessageSquare className="mr-2 h-4 w-4" aria-hidden="true" />
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <button
          type="button"
          className="lg:hidden fixed inset-0 top-16 bg-black/20 z-[-1]"
          aria-label="Close menu overlay"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
