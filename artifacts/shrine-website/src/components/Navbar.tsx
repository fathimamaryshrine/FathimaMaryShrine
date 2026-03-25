import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";

interface NavbarProps {
  lang: Language;
  toggleLang: () => void;
}

export function Navbar({ lang, toggleLang }: NavbarProps) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { key: "nav.home", href: "/" },
    { key: "nav.about", href: "/about" },
    { key: "nav.gallery", href: "/gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-md"
          : "bg-white/90 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Church Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full shrine-gold-bg flex items-center justify-center shrink-0">
              <span className="text-white text-sm font-bold font-serif">✦</span>
            </div>
            <span className="font-serif font-semibold text-base text-gray-800 leading-tight hidden sm:block">
              {t(lang, "nav.churchName")}
            </span>
            <span className="font-serif font-semibold text-sm text-gray-800 leading-tight sm:hidden">
              Fathima Shrine
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className={`nav-link text-gray-700 hover:text-yellow-600 text-sm ${
                  location === href ? "shrine-gold active" : ""
                }`}
              >
                {t(lang, key)}
              </Link>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center gap-1 ml-2 border border-gray-200 rounded-full p-0.5">
              <button
                className={`lang-btn ${lang === "en" ? "active" : "inactive"}`}
                onClick={() => lang !== "en" && toggleLang()}
                data-testid="button-lang-en"
              >
                EN
              </button>
              <button
                className={`lang-btn ${lang === "te" ? "active" : "inactive"}`}
                onClick={() => lang !== "te" && toggleLang()}
                data-testid="button-lang-te"
              >
                తె
              </button>
            </div>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <div className="flex items-center gap-1 border border-gray-200 rounded-full p-0.5">
              <button
                className={`lang-btn ${lang === "en" ? "active" : "inactive"}`}
                onClick={() => lang !== "en" && toggleLang()}
                data-testid="button-lang-en-mobile"
              >
                EN
              </button>
              <button
                className={`lang-btn ${lang === "te" ? "active" : "inactive"}`}
                onClick={() => lang !== "te" && toggleLang()}
                data-testid="button-lang-te-mobile"
              >
                తె
              </button>
            </div>
            <button
              className="p-2 text-gray-700 hover:text-yellow-600"
              onClick={() => setMenuOpen(!menuOpen)}
              data-testid="button-mobile-menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 bg-white/97">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className={`block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-md ${
                  location === href ? "shrine-gold font-semibold" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {t(lang, key)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
