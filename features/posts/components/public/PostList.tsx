"use client";

import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Category, Post } from "../../types";
import { PostSearch } from "./PostSearch";
import { PostCategoryFilter } from "./PostCategoryFilter";
import { FeaturedPost } from "./FeaturedPost";
import { PostCard } from "./PostCard";

type PostListProps = {
  posts: Post[];
  categories: Category[];
};

export function PostList({ posts, categories }: PostListProps) {
  const [category, setCategory] = useState("Všechny");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        category === "Všechny" || post.category.name === category;

      const search = searchTerm.toLowerCase();

      const matchesSearch =
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [posts, category, searchTerm]);

  const featured = filteredPosts.find((post) => post.featured);

  const rest = filteredPosts.filter((post) => post.id !== featured?.id);

  function resetFilters() {
    setCategory("Všechny");
    setSearchTerm("");
  }

  return (
    <>
      {/* Hero */}

      <section className="bg-custom-pink rounded-3xl m-2 md:m-4">
        <div className="container mx-auto px-4 py-20 md:px-8 lg:px-16 xl:px-32">
          <div className="max-w-3xl space-y-5 mt-12">
            <p className="text-custom-red text-lg">Aktuality</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Co se u nás děje
            </h1>

            <p className="text-custom-light-grey text-lg font-light max-w-2xl">
              Sledujte nejnovější informace z našeho sboru, zásahové jednotky,
              akcí a dalších aktivit.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}

      <section className="py-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="w-full lg:max-w-md">
              <PostSearch onSearchTermChange={setSearchTerm} />
            </div>

            <PostCategoryFilter
              categories={categories}
              value={category}
              onChange={setCategory}
            />
          </div>
        </div>
      </section>

      {/* Posts */}

      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
          {filteredPosts.length === 0 ? (
            <div className="py-24 text-center">
              <SearchX className="mx-auto mb-6 h-12 w-12 text-custom-light-grey" />

              <h2 className="text-3xl font-medium mb-3">Žádné výsledky</h2>

              <p className="text-custom-light-grey mb-8">
                Pro zadané vyhledávání jsme nenašli žádné aktuality.
              </p>

              <Button variant="outline" onClick={resetFilters}>
                Zobrazit všechny aktuality
              </Button>
            </div>
          ) : (
            <div className="space-y-16">
              {/* Featured */}

              {featured && <FeaturedPost post={featured} />}

              {/* Rest */}

              {rest.length > 0 && (
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-3xl md:text-4xl font-medium">
                      Všechny aktuality
                    </h2>

                    <span className="text-sm text-custom-light-grey">
                      {filteredPosts.length}{" "}
                      {filteredPosts.length === 1 ? "aktualita" : "aktualit"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rest.map((post) => (
                      <PostCard key={post.slug} post={post} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
