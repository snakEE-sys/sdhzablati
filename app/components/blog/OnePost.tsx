import { ArrowLeft, Calendar, Mail, Share2, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Post } from "@/app/components/blog/Post";
import { getCategoryColor } from "@/utils/category-color";

export function OnePost({ post, relatedPosts }) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <div className="container mt-8 mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-slate-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Zpět na všechny aktuality
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-3 mb-4 items-center">
              <Badge
                className={`${getCategoryColor(post.category)} rounded-full`}
              >
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
          </div>
        </section>

        {/* Featured Image */}
        <section className="mb-12">
          <div className="container mx-auto">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className="mb-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <article className="prose prose-slate max-w-none lg:prose-lg">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                {/* Social Sharing */}
                <div className="mt-12 pt-6 border-t">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-medium">Sdílet článek:</span>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        aria-label="Sdílet na Facebooku"
                      >
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Facebook</title>
                          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                        </svg>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        aria-label="Sdílet emailem"
                      >
                        <Mail className="h-5 w-5 text-slate-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        aria-label="Další možnosti sdílení"
                      >
                        <Share2 className="h-5 w-5 text-slate-600" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Autor</h3>
                  <Card className="border-none shadow-md rounded-2xl mb-8">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full overflow-hidden w-16 h-16 bg-slate-100 flex items-center justify-center">
                          <User className="h-8 w-8 text-slate-400" />
                        </div>
                        <div>
                          <h4 className="font-bold">{post.author}</h4>
                          <p className="text-sm text-slate-500">Člen SDH</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-slate-600">
                        Autor článků o činnosti našeho sboru a technickém
                        vybavení.
                      </p>
                    </CardContent>
                  </Card>

                  <h3 className="text-xl font-bold mb-4">Kategorie</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <Badge
                      className={`${getCategoryColor(post.category)} rounded-full`}
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8">Související články</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(
                (relatedPost) =>
                  relatedPost.id !== post.id && (
                    <Post post={relatedPost} key={relatedPost.id} />
                  )
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
