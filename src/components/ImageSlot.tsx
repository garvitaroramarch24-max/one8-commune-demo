import type { ImageAsset, Tone } from "../data/siteData";

const toneClass: Record<Tone, string> = {
  olive: "bg-olive-700",
  charcoal: "bg-ink-700",
  umber: "bg-[#3a2b20]",
  gold: "bg-[#5a4a28]",
};

interface ImageSlotProps {
  image: ImageAsset;
  /** Sizing classes (aspect ratio, height, width). The slot fills whatever box these create. */
  className?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
}

/**
 * Renders a real photo when `image.src` is set, otherwise a labelled tonal placeholder.
 * Wrap in an element with the `group` class to get the gentle hover zoom on real photos.
 */
export default function ImageSlot({
  image,
  className = "",
  fit = "cover",
  priority = false,
}: ImageSlotProps) {
  const hasSrc = image.src.trim().length > 0;

  if (hasSrc) {
    return (
      <div className={`relative overflow-hidden bg-ink-800 ${className}`}>
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none ${
            fit === "cover" ? "object-cover" : "object-contain"
          }`}
        />
      </div>
    );
  }

  return (
    <div className={`grain relative overflow-hidden ${toneClass[image.tone]} ${className}`}>
      <div
        role="img"
        aria-label={`Photo placeholder: ${image.alt}`}
        className="absolute inset-0 flex items-end p-4 ring-1 ring-inset ring-cream-100/10"
      >
        <span className="text-xs font-light text-cream-100/60">Photo placeholder</span>
      </div>
    </div>
  );
}
