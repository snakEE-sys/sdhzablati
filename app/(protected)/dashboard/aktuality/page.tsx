"use client";

import { useDate } from "@/app/hooks/useDate";
import { useGetPosts } from "@/app/hooks/useGetPosts";
import { AddPostDialog } from "@/components/AddPostDialog";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCategoryColor } from "@/utils/category-color";
import { PostsSchema } from "@/utils/posts-schema";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Search, Calendar, Edit, Trash2, ChevronRight } from "lucide-react";
import DeleteDialog from "@/components/DeleteDialog";
import { Suspense } from "react";
import { DashboardSuspense } from "@/components/DashboardSuspense";

const Aktuality = () => {
  const {
    data: posts,
    isPending,
    error,
  } = useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: useGetPosts,
  });
  return (
    <Suspense fallback={<DashboardSuspense />}>
      <div className="flex min-h-[100dvh] bg-slate-50">
        <Sidebar />
        <div className="flex-1 md:ml-64 pt-16 md:pt-0">
          <main className="p-4 md:p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Aktuality</h1>
                <AddPostDialog />
              </div>
            </div>
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input placeholder="Hledat aktuality..." className="pl-9" />
                  </div>
                  <div className="flex gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Všechny kategorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Všechny kategorie</SelectItem>
                        <SelectItem value="novinky">Novinky</SelectItem>
                        <SelectItem value="skoleni">Školení</SelectItem>
                        <SelectItem value="udalosti">Události</SelectItem>
                        <SelectItem value="jednotka">Jednotka</SelectItem>
                        <SelectItem value="mladez">Mládež</SelectItem>
                        <SelectItem value="pozvanky">Pozvánky</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="newest">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Řazení" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Nejnovější</SelectItem>
                        <SelectItem value="oldest">Nejstarší</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-4">
              {posts.map((post: PostsSchema) => (
                <Card key={post.id}>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <Badge
                            className={`${getCategoryColor(post.category)} rounded-full`}
                          >
                            {post.category}
                          </Badge>
                          <div className="flex items-center text-sm text-slate-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {useDate(post.date)}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                        <p className="text-slate-600 mb-2">{post.excerpt}..</p>
                        <div className="text-sm text-slate-500">
                          Autor: {post.author}
                        </div>
                      </div>
                      <div className="flex md:flex-col gap-2 md:justify-center">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Edit className="h-4 w-4" />
                          <span className="hidden sm:inline">Upravit</span>
                        </Button>
                        <DeleteDialog type={"posts"} itemIdSlug={post.id}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 gap-1"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="hidden sm:inline">Smazat</span>
                          </Button>
                        </DeleteDialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <Button variant="outline" className="gap-1">
                Načíst další
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </main>
        </div>
      </div>
    </Suspense>
  );
};
export default Aktuality;
