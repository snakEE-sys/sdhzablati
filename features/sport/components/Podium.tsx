import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PodiumResult } from "../data";

const placeConfig = {
  1: {
    label: "1.",
    medal: "Zlato",
    height: "h-28 md:h-36",
    bar: "bg-linear-to-t from-amber-500 to-amber-300",
    ring: "ring-amber-400/40",
    text: "text-amber-700",
    icon: "text-amber-500",
    order: "order-2",
  },
  2: {
    label: "2.",
    medal: "Stříbro",
    height: "h-20 md:h-28",
    bar: "bg-linear-to-t from-slate-400 to-slate-200",
    ring: "ring-slate-300/50",
    text: "text-slate-600",
    icon: "text-slate-400",
    order: "order-1",
  },
  3: {
    label: "3.",
    medal: "Bronz",
    height: "h-16 md:h-24",
    bar: "bg-linear-to-t from-orange-700 to-orange-400",
    ring: "ring-orange-400/40",
    text: "text-orange-800",
    icon: "text-orange-600",
    order: "order-3",
  },
} as const;

function getResult(results: PodiumResult[], place: 1 | 2 | 3) {
  return results.find((r) => r.poradi === place);
}

export function Podium({ results }: { results: PodiumResult[] }) {
  const places = [2, 1, 3] as const;

  return (
    <div className="flex items-end justify-center gap-2 md:gap-4 pt-4">
      {places.map((place) => {
        const config = placeConfig[place];
        const result = getResult(results, place);

        return (
          <div
            key={place}
            className={cn(
              "flex flex-col items-center flex-1 max-w-35 md:max-w-45",
              config.order,
            )}
          >
            <div
              className={cn(
                "w-full rounded-t-xl px-2 py-3 md:py-4 text-center mb-2 min-h-22 md:min-h-25 flex flex-col justify-end",
                "bg-white border border-black/8 shadow-sm",
                config.ring,
                "ring-1",
              )}
            >
              <Trophy
                className={cn("h-4 w-4 md:h-5 md:w-5 mx-auto mb-1", config.icon)}
                aria-hidden
              />
              <p className="text-[10px] md:text-xs font-medium uppercase tracking-wide text-custom-light-grey">
                {config.medal}
              </p>
              {result ? (
                <>
                  <p className="text-xs md:text-sm font-semibold text-custom-medium-grey leading-tight mt-1 line-clamp-3">
                    {result.tym}
                  </p>
                  {result.cas ? (
                    <p
                      className={cn(
                        "text-sm md:text-base font-bold tabular-nums mt-1",
                        config.text,
                      )}
                    >
                      {result.cas}
                    </p>
                  ) : null}
                </>
              ) : (
                <p className="text-xs text-custom-light-grey mt-1">—</p>
              )}
            </div>
            <div
              className={cn(
                "w-full rounded-t-lg flex items-end justify-center",
                config.height,
                config.bar,
              )}
            >
              <span className="pb-2 text-white font-bold text-lg md:text-xl drop-shadow-sm">
                {config.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function YearPodium({
  rok,
  datum,
  results,
}: {
  rok: string;
  datum: string;
  results: PodiumResult[];
}) {
  return (
    <article className="rounded-2xl border border-black/8 bg-white/90 p-5 md:p-6 shadow-sm">
      <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4 pb-4 border-b border-black/6">
        <h4 className="text-xl md:text-2xl font-semibold text-custom-medium-grey">
          {rok}
        </h4>
        <p className="text-sm text-custom-light-grey font-light">{datum}</p>
      </header>
      <Podium results={results} />
    </article>
  );
}
