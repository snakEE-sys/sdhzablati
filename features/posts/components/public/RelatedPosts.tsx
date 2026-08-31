import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Post } from "../../types";
import { PostCard } from "./PostCard";

type RelatedPostsProps = {
  posts: Post[];
};

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="m-2 rounded-3xl bg-custom-pink py-16 md:m-4 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-lg text-custom-red">Další aktuality</p>

            <h2 className="text-3xl font-semibold text-custom-dark-grey md:text-4xl">
              Mohlo by vás zajímat
            </h2>
          </div>

          <Button
            asChild
            variant="whiteCapsule"
            className="group w-full sm:w-auto"
          >
            <Link href="/aktuality">
              Všechny aktuality
              <div className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-custom-dark-red text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
