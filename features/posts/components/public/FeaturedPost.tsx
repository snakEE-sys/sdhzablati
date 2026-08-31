import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/app/hooks/formatDate";
import { Post } from "../../types";
import { getCategoryColor } from "@/utils/category-color";

type FeaturedPostProps = {
  post: Post;
};

export function FeaturedPost({ post }: FeaturedPostProps) {
  const image =
    post.image && post.image.length > 0 ? post.image : "/images/landing.jpeg";

  return (
    <Link
      href={`/aktuality/${post.slug}`}
      className="group relative block overflow-hidden rounded-3xl min-h-[500px] md:min-h-[600px]"
    >
      <Image
        src={image}
        alt={post.title}
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-75 transition duration-700 group-hover:scale-[1.02]"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

      <div className="absolute top-6 left-6">
        <span
          className={`rounded-full px-4 py-2 text-sm font-medium ${getCategoryColor(post.category.name)}`}
        >
          {post.category.name}
        </span>
      </div>

      <div className="absolute top-6 right-6 bg-custom-dark-red rounded-full p-3">
        <ArrowUpRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>

      <div className="absolute bottom-0 left-0 p-6 md:p-10 max-w-4xl">
        <p className="mb-3 text-sm text-white/70">
          {formatDate(post.date)} · {post.author.name}
        </p>

        <h2 className="mb-4 text-3xl md:text-5xl font-medium text-white">
          {post.title}
        </h2>

        <p className="max-w-2xl text-base md:text-lg text-white/80 font-light">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
