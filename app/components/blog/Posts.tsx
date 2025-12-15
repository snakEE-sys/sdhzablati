"use client";

import { Post } from "@/app/components/blog/Post";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FeaturedPost } from "@/app/components/blog/FeaturedPost";

interface IPost {
  id: string;
  title: string;
  category: string;
  content: string;
  createdAt: string;
  featured: boolean;
  excerpt: string;
  image: string;
  author: string;
}

const categories = [
  { value: "vsechny", label: "Všechny" },
  { value: "sbor", label: "Sbor" },
  { value: "jednotka", label: "Jednotka" },
  { value: "mladez", label: "Mládež" },
  { value: "soutez", label: "Soutěž" },
  { value: "pozvanka", label: "Pozvánka" },
];

export default function Posts({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Všechny");
  const [filteredPosts, setfilteredPosts] = useState<IPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [featuredPost, setFeaturedPost] = useState(
    posts.find((post) => post.featured)
  );

  useEffect(() => {
    const filtered = posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "Všechny" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Separate featured post from regular posts
    const featured = filtered.find((post) => post.featured);
    const regular = filtered.filter((post) => !post.featured);

    setFeaturedPost(featured);
    setfilteredPosts(regular);
  }, [selectedCategory, searchTerm]);

  return (
    <>
      {/* Category Tabs */}
      <section className="py-8 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="w-full md:w-1/3 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Hledat v aktualitách..."
                className="pl-10 rounded-full border-slate-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.label)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.label
                      ? "bg-gradient-to-r from-red-600 to-orange-500 text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="container mx-auto">
          {/* Featured Post */}
          <FeaturedPost featuredPost={featuredPost} />
          {/* Regular Posts */}
          <h2 className="text-2xl font-bold mb-6">Všechny aktuality</h2>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Post key={post.id} post={post} />
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
                  setSelectedCategory("Všechny");
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
