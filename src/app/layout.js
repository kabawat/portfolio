import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import LayoutHelper from "@/helper/layoutHelper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kabawat",
  description: "Welcome to Mukesh Singh Kabawat's portfolio website. As a skilled software engineer, I showcase my expertise through projects and achievements. Explore my work to witness innovation and excellence in action.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <LayoutHelper />
        {children}
      </body>
    </html>
  );
}
