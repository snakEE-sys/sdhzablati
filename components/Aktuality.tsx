import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/features/posts/queries";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** Set to `false` to load posts from the database. */
const USE_MOCK_AKTUALITY_POSTS = true;

type AktualityPost = NonNullable<
  Awaited<ReturnType<typeof getAllPosts>>
>[number];

const MOCK_AKTUALITY_POSTS: AktualityPost[] = [
  {
    id: "00000000-0000-4000-8000-000000000001",
    slug: "mock-soutez-hasicke-mladeze",
    title: "Úspěch naší mládeže na okresní soutěži",
    date: "3. května 2026",
    content: "",
    author: {
      id: "mock-author",
      name: "JSDH Záblatí",
      description: null,
    },
    featured: true,
    published: true,
    excerpt:
      "Naši mladí hasiči obsadili první místo v disciplíně štafeta a ukázali, že trénink se vyplácí.",
    category: "Mládež",
    image: "/images/landing.jpeg",
  },
  {
    id: "00000000-0000-4000-8000-000000000002",
    slug: "mock-profilak-zbrojnice",
    title: "Proběhl kontrolní den techniky ve zbrojnici",
    date: "28. dubna 2026",
    content: "",
    author: {
      id: "mock-author",
      name: "JSDH Záblatí",
      description: null,
    },
    featured: false,
    published: true,
    excerpt:
      "Zkontrolovali jsme vozidla, čerpadla a výstroj. Vše připraveno na sezónu.",
    category: "Technika",
    image: "/hero.png",
  },
  {
    id: "00000000-0000-4000-8000-000000000003",
    slug: "mock-detsky-den",
    title: "Pozvánka na dětský den u hasičů",
    date: "15. dubna 2026",
    content: "",
    author: {
      id: "mock-author",
      name: "JSDH Záblatí",
      description: null,
    },
    featured: false,
    published: true,
    excerpt:
      "V sobotu čeká děti projížďka v casovně, ukázky výstroje a opékání buřtů.",
    category: "Akce",
    image: "/images/landing.jpeg",
  },
];

function postImageSrc(image: string | undefined) {
  return image && image.length > 0 ? image : "/images/landing.jpeg";
}

export default async function Aktuality() {
  const list = USE_MOCK_AKTUALITY_POSTS
    ? MOCK_AKTUALITY_POSTS
    : await getAllPosts({ published: true, limit: 3 });
  const posts = list ?? [];
  const [featured, ...rest] = posts;

  return (
    <section
      id="aktuality"
      className="min-h-screen overflow-hidden py-12 md:py-18 lg:py-24 bg-custom-pink rounded-3xl m-2 md:m-4"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="mb-16 md:mb-24">
          <h3 className="text-custom-red text-lg md:text-xl font-normal mb-2 md:mb-4">
            Aktuality
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2 md:mb-4">
            Poslední příspěvky
          </h1>
          <p className="text-custom-light-grey font-light text-base mb-8 md:mb-12 max-w-prose">
            Co se u nás děje?
          </p>

          {posts.length === 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-custom-medium-grey leading-tight">
                  Brzy tu přibudou novinky
                </h2>
                <p className="text-custom-light-grey font-light text-base mb-8 max-w-prose">
                  Momentálně nepublikujeme žádné příspěvky. Jakmile něco
                  nasdílíme, objeví se to přímo tady.
                </p>
                <Button
                  asChild
                  variant="whiteCapsule"
                  className="w-full sm:w-auto h-12 xl:h-15 font-medium text-base xl:text-lg px-6 group flex items-center justify-between sm:justify-start"
                >
                  <Link href="/aktuality">
                    <span>Všechny aktuality</span>
                    <div className="flex h-8 w-8 xl:h-10 xl:w-10 ml-4 -mr-3 items-center justify-center rounded-full bg-custom-dark-red text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Link
                href={`/aktuality/${featured.slug}`}
                className="relative lg:col-span-2 rounded-2xl overflow-hidden min-h-[380px] md:min-h-[460px] group cursor-pointer block"
              >
                <Image
                  src={postImageSrc(featured.image)}
                  alt={featured.title}
                  fill
                  className="object-cover brightness-75 transition duration-500 group-hover:scale-[1.02] group-hover:brightness-[0.65]"
                  sizes="(min-width: 1024px) 66vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
                {featured.category ? (
                  <span className="absolute top-5 left-5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-custom-dark-red">
                    {featured.category}
                  </span>
                ) : null}
                <div className="absolute top-4 right-4 bg-custom-dark-red rounded-full p-3">
                  <ArrowUpRight className="text-white w-5 h-5" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 space-y-2 max-w-3xl">
                  <p className="text-white/75 text-sm font-light">
                    {featured.date}
                    {featured.author?.name ? ` · ${featured.author.name}` : ""}
                  </p>
                  <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug">
                    {featured.title}
                  </h3>
                  <p className="text-white/85 text-sm md:text-base font-light line-clamp-2">
                    {featured.excerpt}
                  </p>
                </div>
              </Link>

              <div className="flex flex-col gap-4">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/aktuality/${post.slug}`}
                    className="relative flex-1 rounded-2xl overflow-hidden min-h-[280px] md:min-h-[320px] group cursor-pointer block"
                  >
                    <Image
                      src={postImageSrc(post.image)}
                      alt={post.title}
                      fill
                      className="object-cover brightness-75 transition duration-500 group-hover:scale-[1.03] group-hover:brightness-[0.65]"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                    {post.category ? (
                      <span className="absolute top-4 left-4 z-10 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-custom-dark-red">
                        {post.category}
                      </span>
                    ) : null}
                    <div className="absolute top-3 right-3 bg-custom-dark-red rounded-full p-2.5">
                      <ArrowUpRight className="text-white w-4 h-4" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 space-y-2">
                      <p className="text-white/75 text-sm font-light">
                        {post.date}
                        {post.author?.name ? ` · ${post.author.name}` : ""}
                      </p>
                      <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-white/85 text-sm md:text-base font-light line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {posts.length > 0 ? (
          <div className="mt-12 flex justify-center">
            <Button
              asChild
              variant="whiteCapsule"
              className="w-full sm:w-auto h-12 xl:h-15 font-medium text-base xl:text-lg px-6 group flex items-center justify-between sm:justify-center"
            >
              <Link href="/aktuality">
                <span>Všechny aktuality</span>
                <div className="flex h-8 w-8 xl:h-10 xl:w-10 ml-4 -mr-3 items-center justify-center rounded-full bg-custom-dark-red text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
