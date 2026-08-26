"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  Zap,
  Settings,
  LucideIcon,
  ChevronRight,
  ArrowUpRight,
  Menu,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <>
      <header className="absolute top-8 h-16 z-50 w-full justify-around hidden lg:flex px-6 sm:px-6">
        <Image src="/logo.svg" alt="logo" height={32} width={146} />
        <div className="bg-white rounded-2xl w-xl xl:w-3xl flex items-center justify-around">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/aktuality">Aktuality</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Sbor</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[380px] gap-3 md:w-[380px]">
                    <ListItem href="/sbor/historie" title="Historie" icon={Zap}>
                      Historie našeho sboru od jeho založení.
                    </ListItem>
                    <ListItem href="/sbor/sport" title="Sport" icon={BookOpen}>
                      Naše sportovní úspěchy a soutěže.
                    </ListItem>
                    <ListItem
                      href="/sbor/sponzori"
                      title="Sponzoři"
                      icon={Settings}
                    >
                      Firmy, jednotlivci bez kterých by to nešlo.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Jednotka</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[380px] gap-3 md:w-[380px]">
                    <ListItem
                      href="/jednotka/informace"
                      title="Informace"
                      icon={Settings}
                    >
                      Informace o jednotce jako celku.
                    </ListItem>
                    <ListItem
                      href="/jednotka/technika"
                      title="Technika"
                      icon={Zap}
                    >
                      Naše technika a vybavení.
                    </ListItem>
                    <ListItem
                      href="/jednotka/vyjezdy"
                      title="Výjezdy"
                      icon={BookOpen}
                    >
                      Mimořádné události, které jsme řešili.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/galerie">Galerie</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/kontakt">Kontakt</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Link href="/instagram" className="flex size-6">
              <Image
                src="instagram.svg"
                width={18}
                height={18}
                alt="instagram"
              />
            </Link>
            <Link href="/facebook" className="flex size-6 items-center">
              <Image src="facebook.svg" width={18} height={18} alt="facebook" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button
            variant="redCapsule"
            className="h-10 xl:h-12 font-medium xl:text-base px-8"
          >
            <span>Chci se přidat</span>
            <div className="flex h-7 w-7 -mr-6 ml-2 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Button>
        </div>
      </header>
      <div className="lg:hidden absolute px-8 py-10 h-16 flex w-full justify-between items-center">
        <Image src="/logo.svg" alt="logo" height={24} width={110} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <Menu className="h-8! w-8! text-custom-dark-red" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white px-8 pt-12">
            <Image src="/logo.svg" alt="logo" height={24} width={110} />
            <div className="flex flex-col gap-4 py-8">
              <Link
                href="/aktuality"
                className="text-lg font-medium transition-colors hover:text-custom-dark-red"
              >
                Aktuality
              </Link>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="sbor" className="border-none">
                  <AccordionTrigger className="py-0 text-lg font-bold hover:no-underline">
                    Sbor
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2 mt-2">
                    <Link
                      href="/historie"
                      className="text-muted-foreground text-base"
                    >
                      Historie
                    </Link>
                    <Link
                      href="/sport"
                      className="text-muted-foreground text-base"
                    >
                      Sport
                    </Link>
                    <Link
                      href="/sponzori"
                      className="text-muted-foreground text-base"
                    >
                      Sponzoři
                    </Link>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="jednotka" className="border-none">
                  <AccordionTrigger className="pt-4 pb-0 text-lg font-bold hover:no-underline">
                    Jednotka
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2 mt-2">
                    <Link
                      href="/jednotka/informace"
                      className="text-muted-foreground text-base"
                    >
                      Základní informace
                    </Link>
                    <Link
                      href="/jednotka/technika"
                      className="text-muted-foreground text-base"
                    >
                      Technika a vybavení
                    </Link>
                    <Link
                      href="/jednotka/vyjezdy"
                      className="text-muted-foreground text-base"
                    >
                      Výjezdy
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href="/galerie"
                className="text-lg font-medium transition-colors hover:text-custom-dark-red"
              >
                Galerie
              </Link>

              <Link
                href="/kontakt"
                className="text-lg font-medium transition-colors hover:text-custom-dark-red"
              >
                Kontakt
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<typeof Link> {
  title: string;
  icon?: LucideIcon;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href, icon: Icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={cn(
              "group/link flex flex-row items-center gap-4 rounded-2xl! p-3 leading-none no-underline outline-none transition-colors hover:bg-custom-dark-red/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            {/* 1. Icon on the left */}
            {Icon && (
              <div className="flex h-10 w-10 shrink-0 ring-inset ring-1 ring-custom-dark-red group-hover/link:shadow items-center justify-center rounded-lg border bg-muted group-hover:bg-background transition-colors">
                <Icon className="h-5 w-5 transition-colors text-muted-foreground group-hover/link:text-custom-dark-red" />
              </div>
            )}

            {/* 2. Text container on the right */}
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-semibold leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover/link:text-gray-200">
                {children}
              </p>
            </div>
            <div className="absolute right-4">
              <ChevronRight className="group-hover/link:text-accent-foreground" />
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
