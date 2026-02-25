import { texts } from "../Data/texts";

export default function Footer({ lang }) {
  const t = texts[lang].sections;

  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const duration = 800;
    const startTime = performance.now();

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition * (1 - easeProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <footer
      className="
        border-t border-white/10
        py-10
        px-6
        text-center
        text-sm
        text-white/50
        relative
      "
    >
      <div className="flex flex-col items-center gap-4">
        <p>
          © 2026 Hernán Berrino — Full Stack Developer
        </p>

        <div className="flex items-center gap-3 text-white/40">
          <span className="text-xs">{t.footerBuilt}</span>

          <div className="flex items-center gap-2">
            <img src="/icons/React.svg" alt="React" className="w-4 h-4 opacity-70" />
            <img src="/icons/vite.svg" alt="Vite" className="w-4 h-4 opacity-70" />
            <img src="/icons/Tailwind.svg" alt="Tailwind CSS" className="w-4 h-4 opacity-70" />
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300 hover:scale-110 hover:from-cyan-500 hover:to-blue-500 cursor-pointer border-2 border-transparent hover:border-cyan-400/50 group"
        aria-label="Scroll to top"
      >
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}
