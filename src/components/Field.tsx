import { isPlaceholder } from "../lib/placeholder";

interface FieldProps {
  value: string;
  className?: string;
}

/** Inline text that visibly flags unverified placeholder values (see src/lib/placeholder.ts). */
export default function Field({ value, className = "" }: FieldProps) {
  if (!isPlaceholder(value)) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span
      title="Placeholder: replace this in src/data/siteData.ts"
      className={`border-b border-dashed border-gold-400/70 text-gold-300 ${className}`}
    >
      {value}
    </span>
  );
}
