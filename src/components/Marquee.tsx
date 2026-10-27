const WORDS = ["Food", "Drinks", "Music", "Community", "Hyderabad"];

/** Slow, endlessly looping ribbon of words between the hero and the story. */
export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-cream-100/10 bg-ink-950 py-6 md:py-8"
    >
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {row.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="flex items-center font-display text-4xl font-light italic text-cream-400 md:text-6xl"
              >
                <span className="px-8 md:px-12">{word}</span>
                <span className="text-gold-400">&#10022;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
