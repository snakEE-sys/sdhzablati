import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone } from "lucide-react";

export function EmergencyContact() {
  return (
    <section className="py-8 bg-red-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-red-200 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/6 flex justify-center">
              <div className="bg-red-100 p-6 rounded-full">
                <AlertTriangle className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <div className="md:w-5/6">
              <h2 className="text-2xl font-bold mb-4">Tísňové volání</h2>
              <p className="text-slate-700 mb-6">
                V případě požáru, nehody nebo jiné mimořádné události volejte
                tísňovou linku hasičů.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white text-xl !px-8 py-6 h-auto">
                  <Phone className="mr-2 h-6 w-6" /> 150
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-red-600 text-red-600 hover:bg-red-100 text-xl !px-8 py-6 h-auto"
                >
                  <Phone className="mr-2 h-6 w-6" /> 112
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
