import { Chivo } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

import "aos/dist/aos.css";
import "./globals.css";

import NavBar from "@/components/NavBar.jsx";
import Footer from "@/components/Footer.jsx";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata = {
  title: "Viraj Patel",
  description: "Portfolio of Viraj Patel (virajp4) - Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        <link href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={
          chivo.className +
          ` bg-black min-h-screen max-w-screen-xl mx-auto w-11/12 xl:w-full text-white flex flex-col justify-between px-4 cursor-default`
        }
      >
        <div className="fixed w-full left-0 z-50">
          <NavBar />
        </div>
        <div className="h-full mt-20" id="home">
          {children}
        </div>
        <Footer />
        <Script src="https://kit.fontawesome.com/f31009ec0d.js" crossOrigin="anonymous" />
        <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
      </body>
    </html>
  );
}
