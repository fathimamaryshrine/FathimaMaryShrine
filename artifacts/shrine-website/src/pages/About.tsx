import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { useScrollFade } from "@/hooks/useScrollFade";
import { BookOpen, Target, Heart, Users } from "lucide-react";

interface AboutProps {
  lang: Language;
}

export function About({ lang }: AboutProps) {
  useScrollFade();

  const values = [
    {
      icon: Heart,
      titleKey: "about.value1",
      descKey: "about.value1Desc",
    },
    {
      icon: Users,
      titleKey: "about.value2",
      descKey: "about.value2Desc",
    },
    {
      icon: Target,
      titleKey: "about.value3",
      descKey: "about.value3Desc",
    },
    {
      icon: BookOpen,
      titleKey: "about.value4",
      descKey: "about.value4Desc",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section
        className="relative h-60 sm:h-72 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('/images/church-exterior.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            {t(lang, "about.title")}
          </h1>
          <div className="gold-divider max-w-[80px] mx-auto mt-4" />
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="fade-in">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="shrine-gold" size={22} />
                <h2 className="font-serif text-2xl font-bold text-gray-800">
                  {t(lang, "about.historyTitle")}
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p>{t(lang, "about.history1")}</p>
                <p>{t(lang, "about.history2")}</p>
                <p>{t(lang, "about.history3")}</p>
              </div>
            </div>
            <div className="fade-in" style={{ transitionDelay: "0.15s" }}>
              <img
                src="/images/church-entrance.jpeg"
                alt="Church entrance"
                className="rounded-xl shadow-md w-full h-72 object-cover"
              />
              <img
                src="/images/gathering.jpeg"
                alt="Church gathering"
                className="rounded-xl shadow-md w-full h-52 object-cover mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 fade-in">
            <Target className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold">{t(lang, "about.missionTitle")}</h2>
            <div className="gold-divider max-w-[80px] mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="fade-in bg-blue-900/50 rounded-xl p-8 border border-blue-800/50">
              <h3 className="font-serif text-xl font-semibold text-yellow-400 mb-3">
                {lang === "en" ? "Mission" : "మిషన్"}
              </h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                {t(lang, "about.mission")}
              </p>
            </div>
            <div className="fade-in bg-blue-900/50 rounded-xl p-8 border border-blue-800/50" style={{ transitionDelay: "0.1s" }}>
              <h3 className="font-serif text-xl font-semibold text-yellow-400 mb-3">
                {lang === "en" ? "Vision" : "విజన్"}
              </h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                {t(lang, "about.vision")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title font-serif text-3xl font-bold text-gray-800">
              {t(lang, "about.valuesTitle")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, titleKey, descKey }, i) => (
              <div
                key={titleKey}
                className="shrine-card bg-white rounded-xl p-6 text-center shadow-sm border border-amber-100 fade-in"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center mx-auto mb-4">
                  <Icon className="shrine-gold" size={22} />
                </div>
                <h3 className="font-serif font-semibold text-gray-800 text-base mb-2">
                  {t(lang, titleKey)}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {t(lang, descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
