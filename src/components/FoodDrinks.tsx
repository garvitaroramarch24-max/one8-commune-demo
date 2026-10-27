import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Info } from "lucide-react";
import { menu } from "../data/siteData";
import { EASE } from "../lib/motion";
import ImageSlot from "./ImageSlot";

export default function FoodDrinks() {
  const [activeId, setActiveId] = useState<string>(menu.categories[0].id);
  const reduce = useReducedMotion() ?? false;
  const category = menu.categories.find((c) => c.id === activeId) ?? menu.categories[0];

  return (
    <section id="menu" className="bg-ink-950 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[90rem]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-6xl font-light leading-[0.95] text-cream-50 md:text-8xl">
            Food &amp; Drinks
          </h2>
          <p className="flex max-w-sm items-start gap-3 text-sm leading-relaxed text-cream-400">
            <Info size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-gold-400" />
            <span>{menu.notice}</span>
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Menu categories"
          className="mt-14 flex gap-8 overflow-x-auto border-b border-cream-100/10"
        >
          {menu.categories.map((item) => {
            const selected = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={selected}
                aria-controls="menu-panel"
                onClick={() => setActiveId(item.id)}
                className={`relative shrink-0 pb-4 font-display text-2xl transition-colors duration-300 md:text-3xl ${
                  selected ? "text-cream-50" : "text-cream-400 hover:text-cream-200"
                }`}
              >
                {item.label}
                {selected && (
                  <motion.span
                    layoutId="menu-underline"
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-px h-px bg-gold-400"
                    transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div id="menu-panel" role="tabpanel" aria-labelledby={`tab-${category.id}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
              className="mt-12 grid gap-12 md:grid-cols-12 md:gap-x-16"
            >
              <div className="md:col-span-5">
                <div className="md:sticky md:top-28">
                  <ImageSlot image={category.image} className="aspect-[4/5] w-full" />
                  <p className="mt-5 max-w-xs text-base leading-relaxed text-cream-200">
                    {category.intro}
                  </p>
                </div>
              </div>

              <ul className="divide-y divide-cream-100/10 md:col-span-7">
                {category.items.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={reduce ? false : { opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.1 + index * 0.07 }}
                    className="group flex items-baseline justify-between gap-6 py-7 first:pt-0"
                  >
                    <div className="transition-transform duration-500 ease-out group-hover:translate-x-2">
                      <h3 className="font-display text-3xl font-normal leading-tight text-cream-50 transition-colors duration-300 group-hover:text-gold-300">
                        {item.name}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-cream-400">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 font-display text-xl text-gold-300">{item.price}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
