"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FeaturedPost } from "./FeaturedPost";
import { Post } from "../types";
import { PostCard } from "./PostCard";
import { PostCategoryFilter } from "./PostCategoryFilter";
import { PostSearch } from "./PostSearch";

export default function PostList({ posts }: { posts: Post[] }) {
  const [category, setCategory] = useState<string>("Všechny");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredPosts = category
    ? posts.filter(
        (p) => p.category === category || searchTerm === p.title.toLowerCase()
      )
    : null;

  return (
    <>
      <section className="py-8 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="w-full md:w-1/3 relative">
              <PostSearch onSearchTermChange={setSearchTerm} />
            </div>
            <div className="w-full md:w-2/3 flex flex-wrap gap-2 justify-center md:justify-end">
              <PostCategoryFilter onCategoryChange={setCategory} />
            </div>
          </div>
        </div>
      </section>
      {/* Posts */}
      <section className="py-16">
        <div className="container mx-auto">
          <FeaturedPost posts={posts} />
          <h2 className="text-2xl font-bold mb-6">Všechny aktuality</h2>
          {filteredPosts && filteredPosts.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((p: Post) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-2">Žádné výsledky</h3>
              <p className="text-slate-600 mb-6">
                Pro zadané vyhledávání nebyly nalezeny žádné aktuality.
              </p>
              <Button
                variant="outline"
                className="rounded-full border-red-600 text-red-600 hover:bg-red-50"
                onClick={() => {
                  setSearchTerm("");
                  setCategory("Všechny");
                }}
              >
                Zobrazit všechny aktuality
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
