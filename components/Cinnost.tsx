import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Calendar,
  FireExtinguisher,
  MapPin,
  Shield,
  Users,
} from "lucide-react";

export function Cinnost() {
  return (
    <>
      <section id="cinnost" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Naše činnost</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                  <FireExtinguisher className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Zásahová činnost</h3>
                <p className="text-slate-600">
                  Likvidace požárů, technická pomoc při likvidaci obtížného
                  hmyzu, pomoc při živelních pohromách a dalších mimořádných
                  událostech.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Prevence</h3>
                <p className="text-slate-600">
                  Preventivní a výchovná činnost v oblasti požární ochrany,
                  přednášky pro školy a veřejnost.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Práce s mládeží</h3>
                <p className="text-slate-600">
                  Vedení kroužku mladých hasičů, účast na soutěžích, výchova
                  budoucí generace hasičů.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Soutěže</h3>
                <p className="text-slate-600">
                  Účast na hasičských soutěžích v požárním sportu, reprezentace
                  obce na regionálních i celostátních akcích.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Kulturní akce</h3>
                <p className="text-slate-600">
                  Pořádání společenských a kulturních akcí pro veřejnost,
                  hasičské plesy, dětské dny.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pomoc obci</h3>
                <p className="text-slate-600">
                  Spolupráce s obecním úřadem, pomoc při údržbě obce, zajištění
                  bezpečnosti při veřejných akcích.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
