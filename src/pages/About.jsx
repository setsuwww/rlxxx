"use client";

import { useMemo } from "react";
import { aboutDescription } from "../constants/aboutDescription";
import AboutLinuxWindow from "../contents/AboutLinuxWindow";
import LinuxHeading from "../components/linux/LinuxHeading";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const favorites = useMemo(() => [
      { label: "Person", value: "Her" },
      { label: "Band", value: "Avenged Sevenfold" },
      { label: "Song", value: "Bat Country" },
      { label: "Hobby", value: "Coding & Explore" },
      { label: "Makanan", value: "Mie Ayam" },
      { label: "Minuman", value: "Teh" },
    ],[]
  );

  const favoriteString = useMemo(() => favorites.map(fav => `${fav.label} : ${fav.value}`).join("\n"),
    [favorites]
  );

  return (
    <motion.div 
      className="element-children p-6 bg-gradient-to-b from-sky-950 to-zinc-900 text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <LinuxHeading title="About" dark={true}
        description="Gw kasih tau sedikit info tentang biar lu tau, meski lu ga mau tau" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <motion.div 
          className="md:col-span-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <AboutLinuxWindow title="~/About-Me"
            command="@ Introduction"
            description={aboutDescription}
            endcommand="@ End-Introduction"
          />
        </motion.div>

        <motion.div 
          className="space-y-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <AboutLinuxWindow title="~/Favorite"
            command="! Favorite"
            commandColor="text-yellow-400"
            description={favoriteString}
            endcommand="! End-Favorite"
          />
        </motion.div>
      </div>

      <motion.div 
        className="mt-8 flex justify-center"
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a 
          href="https://github.com/setsuwww" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="border border-gray-600 border-dashed px-6 py-2 rounded-lg flex items-center gap-2 text-gray-400 hover:text-white hover:bg-white/5 hover:border-solid transition-colors"
        >
          <FaGithub size={20} />
          <span className="text-sm font-mono">https://github.com/setsuwww</span>
        </a>
      </motion.div>
    </motion.div>
  );
}
