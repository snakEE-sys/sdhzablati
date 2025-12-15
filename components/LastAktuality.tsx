"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getCategoryColor } from "@/utils/category-color";
import DeleteDialog from "@/components/DeleteDialog";
import { AddPostDialog } from "./AddPostDialog";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useGetDashboardPosts } from "@/app/hooks/useGetDashboardPosts";
import { useDate } from "@/app/hooks/useDate";

type Post = {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
  excerpt: string;
  featured: boolean;
  category: string | null;
};

export function LastAktuality() {
  const { data: posts } = useSuspenseQuery({
    queryKey: ["last-three-posts"],
    queryFn: useGetDashboardPosts,
  });

  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Poslední aktuality</CardTitle>
            <AddPostDialog />
          </div>
          <CardDescription>Nedávno přidané příspěvky</CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="space-y-4">
            {posts.map((post: Post) => (
              <div key={post.id} className="border rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    className={`${getCategoryColor(post.category)} rounded-full`}
                  >
                    {post.category}
                  </Badge>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-slate-500 hover:text-slate-700"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <DeleteDialog type={"posts"} itemIdSlug={post.id}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-slate-500 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </DeleteDialog>
                  </div>
                </div>
                <h4 className="font-medium mb-1">{post.title}</h4>
                <p className="text-sm text-slate-500 line-clamp-2 mb-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{useDate(post.date)}</span>
                  <span>{post.author}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full gap-1">
            Zobrazit všechny
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
