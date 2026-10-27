import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { location, social } from "../data/siteData";
import Field from "./Field";

export default function Location() {
  const query = encodeURIComponent(location.mapQuery);
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const embedUrl = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <section id="find-us" className="bg-ink-900 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[90rem] gap-14 md:grid-cols-12 md:gap-x-16">
        <div className="md:col-span-5">
          <h2 className="font-display text-6xl font-light leading-[0.95] text-cream-50 md:text-8xl">
            Find us
          </h2>

          <div className="mt-12 space-y-10">
            <div className="flex gap-4">
              <MapPin size={20} aria-hidden="true" className="mt-1 shrink-0 text-gold-400" />
              <div>
                <address className="space-y-1 text-lg not-italic leading-relaxed text-cream-100">
                  {location.addressLines.map((line) => (
                    <div key={line}>
                      <Field value={line} />
                    </div>
                  ))}
                </address>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border-b border-cream-200/40 pb-0.5 text-cream-100 transition-colors hover:border-gold-300 hover:text-gold-300"
                >
                  Get directions
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock size={20} aria-hidden="true" className="mt-1 shrink-0 text-gold-400" />
              <dl className="w-full max-w-sm divide-y divide-cream-100/10">
                {location.hours.map((row) => (
                  <div key={row.days} className="flex justify-between gap-6 py-3 first:pt-0">
                    <dt className="text-cream-200">{row.days}</dt>
                    <dd className="text-right text-cream-100">
                      <Field value={row.hours} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex gap-4">
              <Phone size={20} aria-hidden="true" className="mt-1 shrink-0 text-gold-400" />
              {location.phoneHref ? (
                <a href={location.phoneHref} className="text-cream-100 hover:text-gold-300">
                  <Field value={location.phone} />
                </a>
              ) : (
                <Field value={location.phone} className="text-cream-100" />
              )}
            </div>

            <div className="flex gap-4">
              <Mail size={20} aria-hidden="true" className="mt-1 shrink-0 text-gold-400" />
              {location.emailHref ? (
                <a href={location.emailHref} className="text-cream-100 hover:text-gold-300">
                  <Field value={location.email} />
                </a>
              ) : (
                <Field value={location.email} className="text-cream-100" />
              )}
            </div>

            <div className="flex gap-4">
              <Instagram size={20} aria-hidden="true" className="mt-1 shrink-0 text-gold-400" />
              <a
                href={social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-100 transition-colors hover:text-gold-300"
              >
                {social.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <iframe
            title="Map showing the restaurant's location"
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[26rem] w-full border-0 opacity-90 grayscale md:h-[36rem]"
          />
          <p className="mt-4 text-sm italic text-cream-400">{location.mapNote}</p>
        </div>
      </div>
    </section>
  );
}
