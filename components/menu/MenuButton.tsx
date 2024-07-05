import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const textVariantsTwo = {
  hidden: {
    y: 100,
  },
  visible: (i: number) => ({
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.2,
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  }),
};

const MenuButton = ({ isMobileMenuOpen, setIsMobileMenuOpen }: any) => {
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container);
  return (
    <div
      ref={container}
      className="fixed top-5 right-5 text-white uppercase overflow-hidden z-[9999]"
    >
      <motion.button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={7}
        variants={textVariantsTwo}
      >
        {isMobileMenuOpen ? "CLOSE" : "MENU"}
      </motion.button>
    </div>
  );
};

export default MenuButton;
