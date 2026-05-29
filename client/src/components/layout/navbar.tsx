import React, { useState } from "react";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";
import { Menu, X } from "lucide-react";
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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const logoSrc =
    theme === "light"
      ? "/assets/images/isd-logo-light.svg"
      : "/assets/images/isd-logo-dark.svg";

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (item: (typeof navItems)[0]) => {
    closeMenu();
    if (item.sectionId) {
      scrollToSection(item.sectionId);
    }
  };

  const navLinkClass =
    "text-foreground hover:text-primary-red transition-colors duration-300 cursor-pointer";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src={logoSrc}
              alt="ISD Solutions Logo"
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) =>
              item.sectionId ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className={navLinkClass}
                >
                  {item.label}
                </button>
              ) : (
                <Link key={item.label} href={item.href} className={navLinkClass}>
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/contact">
              <Button className="bg-primary-red hover:bg-primary-red/90 text-white">
                Discuss Your ERP Project
              </Button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary-red transition-colors duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-background">
              {navItems.map((item) =>
                item.sectionId ? (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-3 py-2 text-foreground hover:text-primary-red transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-foreground hover:text-primary-red transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-4 px-2">
                <Link href="/contact" onClick={closeMenu}>
                  <Button className="w-full bg-primary-red hover:bg-primary-red/90 text-white">
                    Discuss Your ERP Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
