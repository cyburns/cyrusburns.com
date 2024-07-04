import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Mouse from "@/components/home/Mouse";
import { Raleway } from "next/font/google";
import Menu from "@/components/menu/Menu";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Cyrus | Portfolio",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="  example">
      <Mouse />
      <body className={`${raleway.className} `}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Menu />
            {children}
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
