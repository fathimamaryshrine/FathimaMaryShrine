import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Language } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { useScrollFade } from "@/hooks/useScrollFade";

interface GalleryProps {
  lang: Language;
}

const images = [
  {
    src: "/images/hero.jpeg",
    alt: "Shrine view",
  },
  {
    src: "/images/church-exterior.jpeg",
    alt: "Church exterior",
  },
  {
    src: "/images/church-entrance.jpeg",
    alt: "Church entrance",
  },
  {
    src: "/images/gathering.jpeg",
    alt: "Community gathering",
  },
  {
    src: "/images/pastor-residence.jpeg",
    alt: "Pastor's residence",
  },
  {
    src: "/images/gallery-1.jpeg",
    alt: "Gallery photo 1",
  },
  {
    src: "/images/gallery-2.jpeg",
    alt: "Gallery photo 2",
  },
  {
    src: "/images/gallery-3.jpeg",
    alt: "Gallery photo 3",
  },
];

export function Gallery({ lang }: GalleryProps) {
  useScrollFade();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () =>
    setLightboxIdx((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  const nextImage = () =>
    setLightboxIdx((prev) => (prev !== null ? (prev + 1) % images.length : null));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    if (lightboxIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [lightboxIdx]);

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section
        className="relative h-56 sm:h-72 flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/church-exterior.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            {t(lang, "gallery.title")}
          </h1>
          <p className="text-blue-200 mt-3 text-sm sm:text-base">{t(lang, "gallery.subtitle")}</p>
          <div className="gold-divider max-w-[80px] mx-auto mt-4" />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                className="gallery-img cursor-pointer aspect-square fade-in shadow-sm"
                style={{ transitionDelay: `${i * 0.06}s` }}
                onClick={() => openLightbox(i)}
                data-testid={`gallery-image-${i}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div
        className={`lightbox ${lightboxIdx !== null ? "open" : ""}`}
        onClick={closeLightbox}
        data-testid="lightbox-overlay"
      >
        <button
          className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 z-10 transition-colors"
          onClick={closeLightbox}
          data-testid="button-lightbox-close"
        >
          <X size={22} />
        </button>
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 z-10 transition-colors"
          onClick={(e) => { e.stopPropagation(); prevImage(); }}
          data-testid="button-lightbox-prev"
        >
          <ChevronLeft size={26} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 z-10 transition-colors"
          onClick={(e) => { e.stopPropagation(); nextImage(); }}
          data-testid="button-lightbox-next"
        >
          <ChevronRight size={26} />
        </button>
        {lightboxIdx !== null && (
          <img
            src={images[lightboxIdx].src}
            alt={images[lightboxIdx].alt}
            onClick={(e) => e.stopPropagation()}
          />
        )}
        {lightboxIdx !== null && (
          <p className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-sm">
            {lightboxIdx + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
}
