import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/modal";

const font = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Maxhouse",
  description: "Your convenient home ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${font.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ClientOnly>
          <Modal/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
