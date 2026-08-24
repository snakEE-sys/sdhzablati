import Image from "next/image";
import { cn } from "@/lib/utils";
import type { HistoryEvent } from "../data";

function TimelineCard({
  event,
  align,
}: {
  event: HistoryEvent;
  align: "left" | "right";
}) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-black/8 bg-white/95 overflow-hidden shadow-sm transition duration-300 hover:shadow-md hover:border-custom-red/15",
        align === "left" ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8",
      )}
    >
      <div className="relative aspect-video md:aspect-2/1 bg-custom-pink/40">
        <Image
          src={event.obrazek ?? "/images/landing.jpeg"}
          alt={event.nazev}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 480px, 100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-custom-dark-red shadow-sm">
          {event.rok}
        </span>
      </div>
      <div className="p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-custom-medium-grey mb-2 leading-snug">
          {event.nazev}
        </h3>
        <p className="text-custom-light-grey font-light text-sm md:text-base leading-relaxed">
          {event.popis}
        </p>
      </div>
    </article>
  );
}

export function Timeline({ events }: { events: HistoryEvent[] }) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical spine */}
      <div
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px bg-linear-to-b from-custom-red/10 via-custom-red/40 to-custom-red/10"
        aria-hidden
      />

      <ol className="relative space-y-10 md:space-y-14 list-none p-0 m-0">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <li key={event.rok} className="relative pl-12 md:pl-0">
              {/* Node */}
              <span
                className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-6 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-custom-red ring-4 ring-custom-pink shadow-sm"
                aria-hidden
              />

              {/* Mobile year */}
              <p className="md:hidden text-2xl font-semibold text-custom-red tabular-nums mb-3">
                {event.rok}
              </p>

              {/* Desktop layout */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-start">
                {isLeft ? (
                  <>
                    <div className="md:col-start-1 md:row-start-1">
                      <TimelineCard event={event} align="left" />
                    </div>
                    <div className="hidden md:flex md:col-start-2 md:row-start-1 items-start justify-start pt-6 pl-4">
                      <span className="font-big-heading text-4xl lg:text-5xl text-custom-red/25 tabular-nums select-none">
                        {event.rok}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:flex md:col-start-1 md:row-start-1 items-start justify-end pt-6 pr-4">
                      <span className="font-big-heading text-4xl lg:text-5xl text-custom-red/25 tabular-nums select-none">
                        {event.rok}
                      </span>
                    </div>
                    <div className="md:col-start-2 md:row-start-1">
                      <TimelineCard event={event} align="right" />
                    </div>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
