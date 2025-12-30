import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight, User } from "lucide-react";
import { getCategoryColor } from "@/utils/category-color";
import { Post } from "../types";

export function PostCard({ post }: { post: Post }) {
  return (
    <>
      <Card
        key={post.slug}
        className="overflow-hidden rounded-2xl border-none shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="relative h-48">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge
              className={`${getCategoryColor(post.category)} rounded-full`}
            >
              {post.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
            <span className="mx-1">•</span>
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
          <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Link
            href={`/blog/${post.slug}`}
            className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
          >
            Číst více <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
