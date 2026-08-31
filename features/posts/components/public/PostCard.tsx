import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/app/hooks/formatDate";
import { Post } from "../../types";
import { getCategoryColor } from "@/utils/category-color";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const image =
    post.image && post.image.length > 0 ? post.image : "/images/landing.jpeg";

  return (
    <Link
      href={`/aktuality/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute top-4 left-4">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(post.category.name)}`}
          >
            {post.category.name}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 text-sm text-custom-light-grey">
          {formatDate(post.date)} · {post.author.name}
        </p>

        <h3 className="mb-3 text-xl font-semibold leading-snug">
          {post.title}
        </h3>

        <p className="line-clamp-3 text-sm text-custom-light-grey font-light">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6 flex justify-end">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-custom-dark-red text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
