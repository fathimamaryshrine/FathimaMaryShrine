import { useEffect } from "react";
import { Clock, Calendar, Star, Heart } from "lucide-react";
import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { useScrollFade } from "@/hooks/useScrollFade";

interface HomeProps {
  lang: Language;
}

export function Home({ lang }: HomeProps) {
  useScrollFade();

  const holyWeekData = [
    {
      date: "29/3/26",
      dayKey: "holyweek.palmSunday",
      time: "8:00 AM",
      events: null,
    },
    {
      date: "2/4/26",
      dayKey: "holyweek.maundyThursday",
      time: "5:00 PM",
      events: null,
    },
    {
      date: "3/4/26",
      dayKey: "holyweek.goodFriday",
      time: null,
      events: [
        { key: "holyweek.wayOfCross", time: "7:30 AM" },
        { key: "holyweek.adorationCross", time: "3:00 PM" },
      ],
    },
    {
      date: "4/4/26",
      dayKey: "holyweek.easterVigil",
      time: "10:00 PM",
      events: null,
    },
    {
      date: "5/4/26",
      dayKey: "holyweek.easterMass",
      time: "8:00 AM",
      events: null,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1548625149-720554986036?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="mb-6 fade-in">
            <span className="text-yellow-400 text-4xl">✦</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight fade-in text-white drop-shadow-lg">
            {t(lang, "hero.title")}
          </h1>
          <p className="text-blue-200 text-xl sm:text-2xl font-light mb-8 fade-in tracking-wide">
            {t(lang, "hero.subtitle")}
          </p>
          <div className="gold-divider max-w-sm mx-auto mb-8 fade-in" />
          <blockquote className="fade-in">
            <p className="font-serif text-lg sm:text-xl italic text-yellow-100 leading-relaxed mb-2">
              {t(lang, "hero.quote")}
            </p>
            <cite className="text-blue-300 text-sm not-italic">{t(lang, "hero.quoteSource")}</cite>
          </blockquote>
          <div className="mt-10 fade-in">
            <a
              href="#mass-timings"
              className="inline-block border border-yellow-400 text-yellow-300 hover:bg-yellow-500/20 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 tracking-wide"
            >
              {lang === "en" ? "View Mass Timings" : "మస్సు సమయాలు చూడండి"}
            </a>
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Mass Timings */}
      <section id="mass-timings" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 fade-in">
            <Clock className="w-8 h-8 shrine-gold mx-auto mb-4" />
            <h2 className="section-title font-serif text-3xl font-bold text-gray-800 mb-4">
              {t(lang, "mass.title")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Weekdays */}
            <div className="shrine-card timing-card p-6 fade-in shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                  <span className="shrine-gold text-lg">✦</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-gray-800">
                  {t(lang, "mass.dailyMass")}
                </h3>
              </div>
              <p className="text-gray-500 text-sm mb-1">{t(lang, "mass.weekdays")}</p>
              <p className="shrine-gold text-3xl font-bold font-serif">{t(lang, "mass.weekdaysTime")}</p>
            </div>
            {/* Sundays */}
            <div className="shrine-card timing-card p-6 fade-in shadow-sm" style={{ transitionDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                  <span className="shrine-gold text-lg">✦</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-gray-800">
                  {t(lang, "mass.sundayMass")}
                </h3>
              </div>
              <p className="text-gray-500 text-sm mb-1">{t(lang, "mass.sundays")}</p>
              <p className="shrine-gold text-3xl font-bold font-serif">{t(lang, "mass.sundaysTime")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Holy Week */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 fade-in">
            <Calendar className="w-8 h-8 shrine-gold mx-auto mb-4" />
            <h2 className="section-title font-serif text-3xl font-bold text-gray-800 mb-4">
              {t(lang, "holyweek.title")}
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden fade-in">
            {holyWeekData.map((item, i) => (
              <div
                key={i}
                className="holy-week-item px-6"
              >
                <div className="flex flex-wrap gap-2 items-start py-1">
                  <span className="shrine-gold font-bold text-sm font-mono min-w-[60px]">{item.date}</span>
                  <div className="flex-1">
                    <span className="font-serif font-semibold text-gray-800 text-base">
                      {t(lang, item.dayKey)}
                    </span>
                    {item.time && (
                      <span className="ml-2 text-sm text-blue-600 font-medium">{item.time}</span>
                    )}
                    {item.events && (
                      <div className="mt-2 space-y-1">
                        {item.events.map((ev, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-yellow-500">•</span>
                            <span>{t(lang, ev.key)}</span>
                            <span className="text-blue-500 font-medium">{ev.time}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Prayer Service */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 fade-in">
            <Star className="w-8 h-8 shrine-gold mx-auto mb-4" />
            <h2 className="section-title font-serif text-3xl font-bold text-gray-800 mb-4">
              {t(lang, "special.title")}
            </h2>
          </div>
          <div className="shrine-card bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl p-8 text-white fade-in shadow-lg">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-yellow-400 font-semibold text-lg font-serif mb-1">{t(lang, "special.date")}</p>
                <p className="text-blue-200 text-sm mb-4">{t(lang, "special.by")}</p>
                <div className="gold-divider max-w-[80px] mb-4" />
                <p className="text-white font-medium text-base">{t(lang, "special.time")}</p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: "✦", key: "special.healing" },
                  { icon: "✦", key: "special.meals" },
                  { icon: "✦", key: "special.welcome" },
                ].map(({ icon, key }) => (
                  <div key={key} className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-400">{icon}</span>
                    <span className="text-blue-100">{t(lang, key)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Prayer Service */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="fade-in">
            <Heart className="w-8 h-8 shrine-gold mx-auto mb-4" />
            <h2 className="section-title font-serif text-3xl font-bold text-gray-800 mb-6">
              {t(lang, "monthly.title")}
            </h2>
            <div className="mt-8 inline-block bg-white rounded-xl px-8 py-6 shadow-sm border border-yellow-100">
              <p className="font-serif text-2xl font-semibold shrine-gold mb-2">
                {t(lang, "monthly.schedule")}
              </p>
              <p className="text-blue-700 font-medium text-lg mb-4">
                {t(lang, "monthly.time")}
              </p>
              <div className="gold-divider max-w-[100px] mx-auto mb-4" />
              <p className="text-gray-600 text-sm">{t(lang, "monthly.join")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
