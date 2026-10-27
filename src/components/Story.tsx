import { story } from "../data/siteData";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" className="bg-ink-900 px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto grid max-w-[90rem] gap-16 md:grid-cols-12 md:gap-x-10">
        <Reveal className="md:col-span-5 md:pt-28" y={56}>
          <ImageSlot image={story.imageMain} className="aspect-[4/5] w-full" />
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <h2 className="font-display text-5xl font-light leading-[1.02] text-cream-50 md:text-7xl">
              {story.headline}
            </h2>
          </Reveal>

          <div className="mt-10 max-w-[36rem] space-y-6 text-lg font-light leading-relaxed text-cream-200">
            {story.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.1}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <dl className="mt-14 grid gap-8 border-t border-cream-100/10 pt-8 sm:grid-cols-3">
            {story.pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.12}>
                <dt className="font-display text-2xl font-normal text-cream-50">{pillar.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-cream-400">{pillar.text}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal className="mt-16 md:-ml-24 md:w-[88%]" y={56}>
            <ImageSlot image={story.imageSecondary} className="aspect-[16/10] w-full" />
          </Reveal>

          <p className="mt-6 text-sm italic text-cream-400">{story.note}</p>
        </div>
      </div>
    </section>
  );
}
