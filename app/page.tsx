"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/hero/Hero";
import SplashScreen from "@/components/home/SplashScreen";
import { AnimatePresence } from "framer-motion";
import Menu from "@/components/menu/Menu";
import MenuButton from "@/components/menu/MenuButton";
import WorksHeader from "@/components/home/WorksHeader";
import Contact from "@/components/contact/Contact";
import Info from "@/components/info/info";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState({
    isMobileMenuOpen: false,
    index: null,
  });

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({});
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && (
          <SplashScreen
            setIsLoading={setIsLoading}
            setIsMounted={setIsMounted}
          />
        )}
      </AnimatePresence>
      <MenuButton
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Menu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Hero isMounted={isMounted} isMobileMenuOpen={isMobileMenuOpen} />

      <WorksHeader
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <Contact
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <Info isMobileMenuOpen={isMobileMenuOpen} />
    </main>
  );
}
