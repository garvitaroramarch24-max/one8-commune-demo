interface WordmarkProps {
  className?: string;
  /** Tailwind text-size class for the "One8" part. */
  size?: string;
}

/** Text-only wordmark. Swap for an authorised logo asset if the restaurant supplies one. */
export default function Wordmark({ className = "", size = "text-3xl" }: WordmarkProps) {
  return (
    <a
      href="#home"
      aria-label="One8 Commune Hyderabad, back to top"
      className={`inline-flex items-baseline gap-2 text-cream-50 ${className}`}
    >
      <span className={`font-display font-medium leading-none ${size}`}>One8</span>
      <span className="font-display text-lg font-light italic leading-none text-cream-200">
        Commune
      </span>
    </a>
  );
}
