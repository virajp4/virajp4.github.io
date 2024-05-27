import { Chivo } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

import "aos/dist/aos.css";
import "./globals.css";

import NavBar from "@/components/NavBar.jsx";
import Footer from "@/components/Footer.jsx";
import { ThemeProvider } from "@/components/theme-provider";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata = {
  title: "Viraj Patel",
  description: "Portfolio of Viraj Patel (virajp4) - Software Engineer",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      </Head>
      <body className={chivo.className + ` bg-black min-h-screen h-fit text-white flex flex-col justify-between`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavBar />
          <div className="max-w-screen-xl mx-auto w-11/12 xl:w-full p-4 mb-8">{children}</div>
          <Footer />
          <Script src="https://kit.fontawesome.com/f31009ec0d.js" crossOrigin="anonymous" />
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" />
        </ThemeProvider>
      </body>
    </html>
  );
}
