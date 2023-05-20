import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OtofastProject",
  description: "Platform for digital contents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />

          {/* NavBar */}
          <NavBar />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
