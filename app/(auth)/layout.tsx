import { Card } from "@/components/ui/card";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-neutral-950">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>{children}</Card>
        </div>
      </div>
    </div>
  );
}
