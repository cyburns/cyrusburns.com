"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/hero/Hero";
import SplashScreen from "@/components/home/SplashScreen";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({});
    })();
  }, []);

  return (
    <main className="-z-50 overflow-hidden max-w-[100%] bg-black">
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <Hero />
    </main>
  );
}
