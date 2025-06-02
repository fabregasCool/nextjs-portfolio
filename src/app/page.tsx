"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section className="text-center space-y-4">
      <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl font-bold"
>
  Bienvenue !
</motion.h1>
      <p className="text-lg">Je suis développeur frontend React / Next.js</p>
    </section>
  );
}
