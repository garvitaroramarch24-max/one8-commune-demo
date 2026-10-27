import { useState } from "react";
import { X } from "lucide-react";
import { brand } from "../data/siteData";

/** Small dismissible banner so nobody mistakes the concept for the official site. */
export default function ConceptNotice() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div
      role="note"
      className="fixed inset-x-3 bottom-3 z-40 flex items-start gap-3 border border-cream-100/15 bg-ink-800 px-4 py-3 text-sm text-cream-200 sm:inset-x-auto sm:left-5 sm:bottom-5 sm:max-w-xs"
    >
      <p className="leading-relaxed">{brand.conceptNotice}</p>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss notice"
        className="-mr-1 inline-flex h-7 w-7 shrink-0 items-center justify-center text-cream-200 hover:text-cream-50"
      >
        <X size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
