import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getCategoryColor } from "@/utils/category-color";
import type { Post } from "../types";

export function PostMeta({ post }: { post: Post }) {
  return (
    <>
      <div className="flex flex-wrap gap-3 mb-4 items-center">
        <Badge className={`${getCategoryColor(post.category)} rounded-full`}>
          {post.category}
        </Badge>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Calendar className="h-4 w-4" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <User className="h-4 w-4" />
          <span>{post.author}</span>
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        {post.title}
      </h1>
    </>
  );
}
export function PostHero({ post }: { post: Post }) {
  return (
    <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
export function PostArticle({ post }: { post: Post }) {
  return (
    <article className="prose prose-slate max-w-none lg:prose-lg">
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
