import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Syed Basit Ali | Frontend Developer",
  description: "Frontend Developer specializing in building high-performance web applications using React, Next.js, and Tailwind CSS.",
  icons: {
    icon: "/imagge.png"
  },
  verification: {
    google: "k8JSUpxTAAwsmoIJPvRxbGSlXbIipqrXEcQKypBjHAo", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header />
       
        {children}
        <Toaster position="top-center"/>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
