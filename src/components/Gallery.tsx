import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram, X } from "lucide-react";
import { gallery, social } from "../data/siteData";
import ImageSlot from "./ImageSlot";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion() ?? false;
  const closeRef = useRef<HTMLButtonElement>(null);
  const total = gallery.items.length;

  const step = useCallback(
    (direction: 1 | -1) => {
      setOpenIndex((current) => (current === null ? current : (current + direction + total) % total));
    },
    [total],
  );

  const isOpen = openIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, step]);

  const current = openIndex === null ? null : gallery.items[openIndex];

  return (
    <section id="gallery" className="bg-ink-900 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[90rem]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-6xl font-light leading-[0.95] text-cream-50 md:text-8xl">
              Gallery
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream-200">{gallery.intro}</p>
          </div>
          <a
            href={social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-cream-100 transition-colors hover:text-gold-300"
          >
            <Instagram size={20} aria-hidden="true" />
            <span className="border-b border-cream-200/40 pb-0.5">{social.instagramHandle}</span>
          </a>
        </div>

        <ul className="mt-14 grid auto-rows-[11rem] grid-cols-2 gap-3 md:auto-rows-[9.5rem] md:grid-cols-12 md:gap-4">
          {gallery.items.map((item, index) => (
            <li key={item.image.alt} className={item.span}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Open photo: ${item.image.alt}`}
                className="group block h-full w-full"
              >
                <ImageSlot image={item.image} className="h-full w-full" />
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm italic text-cream-400">{gallery.note}</p>
      </div>

      <AnimatePresence>
        {current && openIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Photo ${openIndex + 1} of ${total}: ${current.image.alt}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4 md:p-10"
            onClick={() => setOpenIndex(null)}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close photo viewer"
              className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center text-cream-50 md:right-8 md:top-8"
            >
              <X size={28} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-cream-50 md:left-8"
            >
              <ChevronLeft size={32} aria-hidden="true" />
            </button>

            <div
              className="h-[75svh] w-[min(86vw,72rem)]"
              onClick={(event) => event.stopPropagation()}
            >
              <ImageSlot image={current.image} fit="contain" className="h-full w-full" />
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-cream-50 md:right-8"
            >
              <ChevronRight size={32} aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
