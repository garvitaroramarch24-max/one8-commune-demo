import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gold line at the top of the viewport that fills as the page is scrolled. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[65] h-0.5 origin-left bg-gold-400"
    />
  );
}
