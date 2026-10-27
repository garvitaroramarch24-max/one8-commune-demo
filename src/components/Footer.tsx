import { Instagram } from "lucide-react";
import { brand, credit, nav, social } from "../data/siteData";
import Field from "./Field";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="border-t border-cream-100/10 bg-ink-950 px-5 py-16 md:px-10">
      <div className="mx-auto grid max-w-[90rem] gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark size="text-5xl" />
          <p className="mt-4 font-display text-xl font-light italic text-cream-200">{brand.city}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-cream-200 transition-colors hover:text-gold-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <a
            href={social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-cream-100 transition-colors hover:text-gold-300"
          >
            <Instagram size={20} aria-hidden="true" />
            {social.instagramHandle}
          </a>
          <p className="mt-8 text-sm leading-relaxed text-cream-400">{credit.statement}</p>
          <p className="mt-3 text-sm text-cream-400">
            Concept by <Field value={credit.designer} />, <Field value={credit.contact} />
          </p>
        </div>
      </div>
    </footer>
  );
}
