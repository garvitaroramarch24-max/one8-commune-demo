import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { brand, hero } from "../data/siteData";
import { EASE } from "../lib/motion";
import ImageSlot from "./ImageSlot";
import ReserveButton from "./ReserveButton";

interface RevealWordProps {
  text: string;
  delay: number;
  reduce: boolean;
}

/** Letters rise out of a clipped line, one after another. This is the page's single orchestrated moment. */
function RevealWord({ text, delay, reduce }: RevealWordProps) {
  return (
    <span aria-hidden="true" className="flex overflow-hidden pb-[0.14em]">
      {Array.from(text).map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          initial={reduce ? false : { y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.1, ease: EASE, delay: delay + index * 0.07 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink-950 px-5 pb-12 pt-28 md:px-10"
    >
      <p className="font-display text-xl font-light italic text-cream-200 md:text-2xl">
        {brand.city}
      </p>

      <motion.div
        style={reduce ? undefined : { y: imageY }}
        className="absolute right-5 top-28 -z-10 w-[48vw] max-w-[28rem] md:right-[7vw] md:w-[30vw]"
      >
        <motion.div
          initial={
            reduce
              ? false
              : { opacity: 0, clipPath: "inset(0 0 100% 0)", scale: 1.04 }
          }
          animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)", scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
        >
          <ImageSlot image={hero.image} className="aspect-[3/4] w-full" priority />
        </motion.div>
      </motion.div>

      <div className="mx-auto mt-auto flex w-full max-w-[90rem] flex-col pt-24">
        <h1 className="font-display font-light text-cream-50">
          <span className="sr-only">
            {brand.name} {brand.city}
          </span>
          <span className="block text-[length:clamp(6.5rem,27vw,25rem)] leading-[0.82]">
            <RevealWord text="One8" delay={0.15} reduce={reduce} />
          </span>
          <span className="-mt-[0.02em] block text-[length:clamp(3.5rem,13.5vw,12.5rem)] italic leading-[0.9] text-olive-300 md:ml-[14vw]">
            <RevealWord text="Commune" delay={0.55} reduce={reduce} />
          </span>
        </h1>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg font-light leading-relaxed text-cream-200">
            {hero.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <ReserveButton size="lg" />
            <a
              href="#menu"
              className="border-b border-cream-200/40 pb-1 text-cream-100 transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              See food and drinks
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
