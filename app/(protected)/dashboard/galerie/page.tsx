import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  ChevronRight,
  Edit,
  ImageIcon,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import Image from "next/image";

const Galerie = () => {
  return (
    <div className="flex min-h-[100dvh] bg-slate-50">
      <Sidebar />
      <div className="flex-1 md:ml-64 pt-16 md:pt-0">
        <main className="p-4 md:p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Galerie</h1>
              <Button className="bg-red-600 hover:bg-red-700 text-white gap-2">
                <Plus className="h-4 w-4" />
                Nová galerie
              </Button>
            </div>
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input placeholder="Hledat galerie..." className="pl-9" />
                  </div>
                  <div className="flex gap-2">
                    <Select defaultValue="newest">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Řazení" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Nejnovější</SelectItem>
                        <SelectItem value="oldest">Nejstarší</SelectItem>
                        <SelectItem value="a-z">A-Z</SelectItem>
                        <SelectItem value="z-a">Z-A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((gallery) => (
                <Card key={gallery.id} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={gallery.thumbnail || "/placeholder.svg"}
                      alt={gallery.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 flex gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-white/80 hover:bg-white"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-white/80 hover:bg-white text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1">{gallery.title}</h3>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {gallery.date}
                      </div>
                      <div className="flex items-center">
                        <ImageIcon className="h-4 w-4 mr-1" />
                        {gallery.count} fotografií
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
          </div>
        </main>
      </div>
    </div>
  );
};
export default Galerie;
