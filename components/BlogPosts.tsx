import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar } from "lucide-react";
import Image from "next/image";

export function BlogPosts() {
  const posts = [
    {
      id: 1,
      title: "Novoroční cvičení 2025",
      excerpt:
        "Zahájili jsme nový rok tradičním výcvikem s novými členy. Procvičovali jsme zásahové postupy a práci s technikou.",
      date: "15. leden 2025",
      category: "Výcvik",
      image:
        "https://images.pexels.com/photos/2306888/pexels-photo-2306888.jpeg",
      imageAlt:
        "Firefighters working together to spray water during outdoor training under a clear sky. (Photo by Denniz Futalan on Pexels)",
      featured: true,
    },
    {
      id: 2,
      title: "Výjezd k požáru v Ostravě",
      excerpt:
        "Naše jednotka zasahovala při velkém požáru průmyslového objektu společně s HZS Moravskoslezského kraje.",
      date: "10. leden 2025",
      category: "Zásah",
      image:
        "https://images.pexels.com/photos/19832611/pexels-photo-19832611.jpeg",
      imageAlt:
        "Firefighters working to extinguish a house fire, showcasing bravery and teamwork outdoors. (Photo by Oscar Sánchez on Pexels)",
      featured: false,
    },
    {
      id: 3,
      title: "Nová technika pro sbor",
      excerpt:
        "Získali jsme novou požární techniku díky dotaci z Moravskoslezského kraje. Modernizace pokračuje.",
      date: "5. leden 2025",
      category: "Aktuality",
      image:
        "https://images.unsplash.com/photo-1555578299-6b1ad0cfac76?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxmaXJlJTIwdHJ1Y2slMjBlbWVyZ2VuY3klMjB2ZWhpY2xlJTIwcmVkJTIwbW9kZXJuJTIwZXF1aXBtZW50fGVufDB8MHx8cmVkfDE3Njg0MzE4NDZ8MA&ixlib=rb-4.1.0&q=85",
      imageAlt:
        "a close-up of the front of a red truck (Photo by Roman Synkevych on Unsplash)",
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Poslední aktuality</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Sledujte naše akce, výjezdy a novinky ze sboru
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* Featured Post - Large */}
          <Card className="lg:col-span-3 lg:row-span-2 overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-80 overflow-hidden">
              <Image
                src={posts[0].image}
                alt={posts[0].imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {posts[0].category}
                </span>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4" />
                <span>{posts[0].date}</span>
              </div>
              <h3 className="heading-md mb-3">{posts[0].title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {posts[0].excerpt}
              </p>
              <Button variant="outline" className="group">
                Číst více
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Second Post */}
          <Card className="lg:col-span-3 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                <Image
                  src={posts[1].image}
                  alt={posts[1].imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="md:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-semibold">
                      {posts[1].category}
                    </span>
                    <span>{posts[1].date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{posts[1].title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {posts[1].excerpt}
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="self-start mt-3">
                  Číst více →
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Third Post */}
          <Card className="lg:col-span-3 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                <Image
                  src={posts[2].image}
                  alt={posts[2].imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="md:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="bg-brand-amber/20 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">
                      {posts[2].category}
                    </span>
                    <span>{posts[2].date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{posts[2].title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {posts[2].excerpt}
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="self-start mt-3">
                  Číst více →
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline">
            Všechny aktuality
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
