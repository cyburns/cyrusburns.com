"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/hero/Hero";
import SplashScreen from "@/components/home/SplashScreen";
import { AnimatePresence } from "framer-motion";
import Menu from "@/components/menu/Menu";
import MenuButton from "@/components/menu/MenuButton";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <Menu isMobileMenuOpen={isMobileMenuOpen} />
      <Hero isMounted={isMounted} isMobileMenuOpen={isMobileMenuOpen} />
    </main>
  );
}
