import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 350);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`scroll-top-btn ${visible ? "visible" : ""}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
      data-testid="button-scroll-top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
