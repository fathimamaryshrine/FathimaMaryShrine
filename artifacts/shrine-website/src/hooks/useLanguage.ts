import { useState, useEffect } from "react";
import type { Language } from "@/lib/i18n";

export function useLanguage() {
  const [lang, setLang] = useState<Language>(() => {
    const stored = localStorage.getItem("shrine-lang");
    return (stored === "te" ? "te" : "en") as Language;
  });

  useEffect(() => {
    localStorage.setItem("shrine-lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "te" : "en"));
  };

  return { lang, toggleLang };
}
