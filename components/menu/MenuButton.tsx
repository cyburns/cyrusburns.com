import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const textVariantsTwo = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.7,
      ease: "easeInOut",
      stiffness: 50,
      damping: 50,
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.7,
      ease: "easeInOut",
      stiffness: 50,
      damping: 50,
    },
  },
};

const MenuButton = ({ isMobileMenuOpen, setIsMobileMenuOpen }: any) => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={container}
      className="fixed top-5 right-5 text-white uppercase overflow-hidden z-[9999]"
    >
      <AnimatePresence mode="wait">
        <motion.button
          key={isMobileMenuOpen.isMobileMenuOpen ? "close" : "menu"}
          onClick={() => {
            if (isMobileMenuOpen.isMobileMenuOpen) {
              setIsMobileMenuOpen({
                isMobileMenuOpen: false,
                index: null,
                prevIndex: isMobileMenuOpen.index,
              });
            } else {
              setIsMobileMenuOpen({
                isMobileMenuOpen: true,
                index: null,
                prevIndex: isMobileMenuOpen.index,
              });
            }
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={textVariantsTwo}
        >
          {isMobileMenuOpen.isMobileMenuOpen ? "CLOSE" : "MENU"}
        </motion.button>
      </AnimatePresence>
    </div>
  );
};

export default MenuButton;
