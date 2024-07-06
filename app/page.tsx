"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/hero/Hero";
import SplashScreen from "@/components/home/SplashScreen";
import { AnimatePresence } from "framer-motion";
import Menu from "@/components/menu/Menu";
import MenuButton from "@/components/menu/MenuButton";
import WorksHero from "@/components/home/HeroHero";

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
    <main className="-z-50 overflow-hidden max-w-[100%] bg-black">
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
      <WorksHero
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </main>
  );
}
