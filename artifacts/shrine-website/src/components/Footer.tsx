import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { MapPin } from "lucide-react";

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="shrine-blue-bg text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="text-center">
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-lg font-serif">✦</span>
          </div>
          <h3 className="font-serif text-xl font-semibold mb-2 text-white">
            {t(lang, "footer.name")}
          </h3>
          <div className="gold-divider max-w-xs mx-auto my-4" />
          <div className="flex items-center justify-center gap-2 text-blue-200 text-sm">
            <MapPin size={14} className="shrink-0 text-yellow-400" />
            <span>{t(lang, "footer.location")}</span>
          </div>
        </div>
        <div className="gold-divider max-w-sm mx-auto mt-8 mb-5" />
        <p className="text-center text-blue-300 text-xs">
          {t(lang, "footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
