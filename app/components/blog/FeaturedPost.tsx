import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";
import { getCategoryColor } from "@/utils/category-color";

type FeaturedPostProps = {
  featuredPost?: {
    id: string;
    title: string;
    category: string;
    date: string;
    author: string;
    image?: string;
    content: string;
  };
};

export const FeaturedPost = ({ featuredPost }: FeaturedPostProps) => {
  return (
    <>
      {featuredPost && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Badge className="mr-3 bg-red-600 text-white rounded-full px-3 py-1">
              Hlavní zpráva
            </Badge>
            Nejdůležitější aktualita
          </h2>
          <Card className="overflow-hidden rounded-2xl border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative">
                <div className="aspect-[16/9] lg:aspect-auto lg:h-full">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${getCategoryColor(featuredPost.category)} rounded-full`}
                  >
                    {featuredPost.category}
                  </Badge>
                </div>
              </div>
              <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                  <span className="mx-1">•</span>
                  <User className="h-4 w-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  {featuredPost.content}
                </p>
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium mt-auto"
                >
                  Přečíst celý článek <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};
