import Image from "next/image";

type UnitHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function UnitHero({ eyebrow, title, description }: UnitHeroProps) {
  return (
    <section className="relative m-2 overflow-hidden rounded-3xl bg-custom-dark-grey">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/landing.jpeg"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-linear-to-r from-custom-dark-grey via-custom-dark-grey/90 to-custom-dark-grey/40" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto grid items-center gap-12 px-6 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_auto] lg:px-16 xl:px-32">
        {/* Text */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-red-400">
            {eyebrow}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/65 md:text-lg">
            {description}
          </p>
        </div>

        {/* Crest */}
        <div className="hidden lg:flex">
          <div className="flex h-48 w-48 items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm xl:h-72 xl:w-72">
            <Image
              src="/logo.png"
              alt="Znak SDH Bohumín – Záblatí"
              width={1180}
              height={1180}
              className="h-full w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
