"use client";
import { motion, Variants } from "framer-motion";
import React, { ReactNode } from "react"; // MODIFICATION 1: Import React

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  // MODIFICATION 2: Remplacement du type problématique par React.ElementType
  as?: React.ElementType;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 18 },
  },
};

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: Props) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
