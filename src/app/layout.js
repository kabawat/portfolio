import { Inter } from "next/font/google";
import LayoutHelper from "@/helper/layoutHelper";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  name: "theme-color",
  content: "#317EFB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutHelper />
        {children}
      </body>
    </html>
  );
}
