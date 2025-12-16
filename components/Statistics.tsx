"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, FolderOpen, ImageIcon, Truck } from "lucide-react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useGetStatistics } from "@/app/hooks/useGetStatistics";

export function Statistics() {
  const { data: stats } = useSuspenseQuery({
    queryKey: ["statistics"],
    queryFn: useGetStatistics,
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Aktuality</p>
              <h3 className="text-3xl font-bold mt-1">{stats.postCount}</h3>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <FileText className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Výjezdy</p>
              <h3 className="text-3xl font-bold mt-1">{stats.vyjezdCount}</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Truck className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Složky galerie
              </p>
              <h3 className="text-3xl font-bold mt-1">{stats.galleryCount}</h3>
            </div>
            <div className="bg-amber-100 p-3 rounded-full">
              <FolderOpen className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Fotky v galerii
              </p>
              <h3 className="text-3xl font-bold mt-1">{stats.imagesCount}</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <ImageIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
