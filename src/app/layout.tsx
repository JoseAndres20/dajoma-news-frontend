import "./globals.css";
import Navbar from "@/components/navar";
import Footer from "@/components/Footer";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        <Navbar />
        <main className="max-w-7xl mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
