import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "WEBAI - AI Image Detection ",
  description: "Matthew Roche - R014882K",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
