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
import { Calendar, ChevronRight, Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useGetGallery } from "@/app/hooks/useGetAllImages";
import { useDate } from "@/app/hooks/useDate";
import { AddGalleryDialog } from "./AddGalleryDialog";

export const LastGalerie = () => {
  const { data: gallery } = useSuspenseQuery({
    queryKey: ["gallery"],
    queryFn: useGetGallery,
  });

  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Poslední galerie</CardTitle>
            <AddGalleryDialog />
          </div>
          <CardDescription>Nedávno přidané fotogalerie</CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="space-y-4">
            {gallery.map((gallery) => (
              <div key={gallery.folder} className="border rounded-lg p-3">
                <div className="flex gap-3">
                  <div className="w-26 h-26 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={gallery.images[0].secure_url || "/placeholder.svg"}
                      alt={gallery.folder}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{gallery.folder}</h4>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-slate-500 hover:text-slate-700"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-slate-500 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                      <Calendar className="h-3 w-3" />
                      <span>{useDate(gallery.images[0].created_at)}</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Počet fotografií: {gallery.images.length}
                    </div>
                  </div>
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
};
