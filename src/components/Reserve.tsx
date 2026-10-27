import { reservation } from "../data/siteData";
import Field from "./Field";
import ReserveButton from "./ReserveButton";

export default function Reserve() {
  return (
    <section id="reserve" className="bg-olive-900 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[90rem] gap-12 md:grid-cols-12 md:items-end">
        <h2 className="font-display text-6xl font-light leading-[0.95] text-cream-50 md:col-span-7 md:text-8xl">
          {reservation.headline}
        </h2>

        <div className="md:col-span-5">
          <p className="max-w-md text-lg font-light leading-relaxed text-cream-100">
            {reservation.text}
          </p>
          <div className="mt-10">
            <ReserveButton size="lg" />
          </div>
          <p className="mt-6 text-sm text-cream-200">
            Walk-ins: <Field value={reservation.walkInNote} />
          </p>
          {reservation.isPlaceholder && (
            <p className="mt-3 text-sm italic text-cream-200/80">
              The booking link is a placeholder. Set it in src/data/siteData.ts.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
