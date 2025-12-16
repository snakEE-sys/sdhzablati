/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, CardContent } from "@/components/ui/card"


interface VyjezdyItem {
    id: string
    kategorieVyjezdu: string
    podKategorieVyjezdu: string
    techniky: string
    jednotky: string
    misto: string
    datum: Date
}

export default async function Vyjezdy() {
    //call function getData to get vyjezdy

    // Format date
    const formatDate = (dateString: Date) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("cs-CZ", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        })
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Vyjezdy</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/*vyjezdy.map((item) => (
                    <VyjezdyCard key={item.id} item={item} formatDate={formatDate} />
                ))*/}
            </div>
        </div>
    )
}
/*
async function getData() {
    try {
        const data = await getVyjezd();
        //reassign and return one simple object
        return data.map(item => {
            return {
                id: item.id,
                datum: item.datum,
                misto: item.misto,
                jednotky: item.jednotky.map(j => Array.isArray(j.nazev) ? j.nazev.join(", ") : j.nazev).join(" | "),
                techniky: item.jednotky.flatMap(j => j.techniky.flatMap(t => t.nazev)).join(", "),
                kategorieVyjezdu: item.kategorieVyjezdu.nazev,
                podKategorieVyjezdu: item.kategorieVyjezdu.podKategorieVyjezdu.map(p => p.nazev).join(", ")
            };
        });
    } catch (error) {
        return null;
    }
}
*/
function VyjezdyCard({
                         item,
                         formatDate,
                     }: {
    item: VyjezdyItem
    formatDate: (datum: Date) => string
}) {
    return (
        <Card className="w-full hover:shadow-md transition-shadow">
            <CardContent className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-xl font-semibold uppercase">
                            {item.kategorieVyjezdu} - {item.podKategorieVyjezdu}
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1"></p>
                    </div>
                    <div className="text-sm text-muted-foreground">{formatDate(item.datum)}</div>
                </div>
                <p className="mt-2 text-sm">{item.misto}</p>
                <p className="mt-2 text-sm">{item.jednotky}</p>
                <p className="mt-2 text-sm uppercase">{item.techniky}</p>
            </CardContent>
        </Card>
    )
}

