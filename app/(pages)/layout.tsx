import { Navbar } from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function PagesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
