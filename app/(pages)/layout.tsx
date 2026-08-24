import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PagesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
