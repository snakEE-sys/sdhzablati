import { formatDate } from "@/app/hooks/formatDate";
import Image from "next/image";
import { Post } from "../../types";

function postImageSrc(image?: string) {
  return image && image.length > 0
    ? image
    : "https://sdhzablati.cz/images/sponsors/nsa.png";
}

export function PostHero({ post }: { post: Post }) {
  return (
    <section className="m-2 overflow-hidden rounded-3xl bg-custom-dark-grey md:m-4">
      <div className="container mx-auto px-4 py-6 md:px-8 lg:px-16 xl:px-32 mt-16">
        <div className="grid min-h-[600px] grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 space-y-6 lg:order-1">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-custom-red px-4 py-1.5 font-medium text-white">
                {post.category.name}
              </span>

              <span className="text-white/60">{formatDate(post.date)}</span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="max-w-2xl text-lg font-light leading-relaxed text-white/70">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-custom-red text-sm font-semibold text-white">
                {post.author.name.charAt(0)}
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  {post.author.name}
                </p>

                <p className="text-xs text-white/50">Autor příspěvku</p>
              </div>
            </div>
          </div>

          <div className="relative order-1 min-h-[350px] overflow-hidden rounded-2xl lg:order-2 lg:min-h-[500px]">
            <Image
              src={postImageSrc(post.image)}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
