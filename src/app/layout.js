// import { Inter } from "next/font/google";
import GreyStrip from "@/components/header/GreyStrip";
import "./globals.css";
import Footer from "@/components/footer/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "shopppsyy",
  description: "fashion, clothes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <GreyStrip />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
        </body>
    </html>
  );
}
