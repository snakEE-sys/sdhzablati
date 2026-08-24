import { Calendar, MapPin } from "lucide-react";
import type { Competition } from "../data";
import { YearPodium } from "./Podium";

export function CompetitionBlock({
  competition,
  variant = "pink",
}: {
  competition: Competition;
  variant?: "pink" | "blue" | "white";
}) {
  const bgClass =
    variant === "blue"
      ? "bg-custom-blue"
      : variant === "white"
        ? "bg-white border border-black/4 shadow-sm"
        : "bg-custom-pink";

  return (
    <section
      id={competition.id}
      className={`relative overflow-hidden py-12 md:py-18 lg:py-24 rounded-3xl m-2 md:m-4 mt-3 md:mt-4 ${bgClass}`}
    >
      {variant === "pink" ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(circle at 10% 0%, hsl(0 92% 58% / 0.1), transparent 42%),
              radial-gradient(circle at 95% 70%, hsl(240 37% 90% / 0.65), transparent 48%)`,
          }}
          aria-hidden
        />
      ) : null}

      <div className="container relative mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-custom-medium-grey mb-4 md:mb-6">
            {competition.nazev}
          </h2>
          <p className="text-custom-light-grey font-light text-base md:text-lg leading-relaxed mb-6">
            {competition.popis}
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-black/8 px-4 py-2 text-sm text-custom-medium-grey">
              <Calendar className="h-4 w-4 text-custom-red shrink-0" aria-hidden />
              {competition.datum}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-black/8 px-4 py-2 text-sm text-custom-medium-grey">
              <MapPin className="h-4 w-4 text-custom-red shrink-0" aria-hidden />
              {competition.misto}
            </span>
          </div>
        </div>

        <div className="space-y-14 md:space-y-20">
          {competition.kategorie.map((kategorie) => (
            <div key={kategorie.id}>
              <div className="mb-8 md:mb-10">
                <h3 className="text-2xl md:text-3xl font-medium text-custom-medium-grey mb-2">
                  {kategorie.nazev}
                </h3>
                <p className="text-custom-light-grey font-light text-base max-w-2xl">
                  {kategorie.popis}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
                {kategorie.rocniky.map((rocnik) => (
                  <YearPodium
                    key={`${kategorie.id}-${rocnik.rok}`}
                    rok={rocnik.rok}
                    datum={rocnik.datum}
                    results={rocnik.vysledky}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
