import { Chivo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata = {
  title: "Viraj Patel",
  description: "Portfolio of Viraj Patel (virajp4) - Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chivo.className + ` bg-black min-h-screen h-fit text-white flex flex-col justify-between`}>
        <Navbar />
        <div className="max-w-screen-xl mx-auto w-11/12 xl:w-full p-4 mb-8">{children}</div>
        <Footer />
        <Script src="https://kit.fontawesome.com/f31009ec0d.js" crossOrigin="anonymous" />
      </body>
    </html>
  );
}
