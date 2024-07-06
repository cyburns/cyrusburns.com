"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/hero/Hero";
import SplashScreen from "@/components/home/SplashScreen";
import { AnimatePresence } from "framer-motion";
import Menu from "@/components/menu/Menu";
import MenuButton from "@/components/menu/MenuButton";
import Contact from "@/components/contact/Contact";
import Info from "@/components/info/info";
import Works from "@/components/work/Works";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState({
    isMobileMenuOpen: false,
    index: null,
    prevIndex: null,
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
      <Works isMobileMenuOpen={isMobileMenuOpen} />
      <Contact
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Info isMobileMenuOpen={isMobileMenuOpen} />
    </main>
  );
}
