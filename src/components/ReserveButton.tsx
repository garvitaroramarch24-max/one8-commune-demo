import { reservation } from "../data/siteData";

interface ReserveButtonProps {
  variant?: "solid" | "outline";
  size?: "sm" | "lg";
  className?: string;
}

export default function ReserveButton({
  variant = "solid",
  size = "sm",
  className = "",
}: ReserveButtonProps) {
  const external = /^https?:\/\//.test(reservation.url);

  const sizeClass = size === "lg" ? "px-9 py-4 text-base" : "px-4 py-2.5 text-sm sm:px-5";
  const variantClass =
    variant === "solid"
      ? "bg-gold-400 text-ink-950 hover:bg-gold-300"
      : "border border-gold-400/70 text-gold-300 hover:bg-gold-400 hover:text-ink-950";

  return (
    <a
      href={reservation.url}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-none font-medium transition-colors duration-300 ${sizeClass} ${variantClass} ${className}`}
    >
      {reservation.label}
    </a>
  );
}
