import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden flex items-center justify-center p-6">
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 0.1 : 0 }}
          transition={{ duration: 2 }}
          className="absolute top-20 -left-10 w-[28rem] h-[28rem] bg-red-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 0.1 : 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute  bottom-20 left-1/3 w-[28rem] h-[28rem] bg-yellow-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 0.12 : 0 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="absolute top-40 right-10 w-[26rem] h-[26rem] bg-green-500 rounded-full blur-3xl"
        />
      </div>

      {/* ===== Badge at top ===== */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="absolute top-[10rem] lg:top-[11rem] left-1/2 -translate-x-1/2 z-20"
>
  <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
    {/* Pulse indicator */}
    <span className="relative flex w-2 lg:w-2.5 h-2 lg:h-2.5">
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
      <span className="relative inline-flex rounded-full w-2 lg:h-2.5 h-2 lg:w-2.5 bg-gradient-to-r from-green-400 to-green-600 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
    </span>

    {/* Text */}
    <span className="text-sm font-medium text-white/90 tracking-wide">
  <span className="block md:hidden">Available</span>
  <span className="hidden md:block">Available for Freelance</span>
</span>
  </div>
</motion.div>


      {/* ===== Main content ===== */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-2 mt-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center space-x-4 overflow-visible leading-none py-2">
  <span
    className="hallo relative bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_40%,rgba(255,255,255,0.3)_100%)]
    bg-clip-text text-transparent font-extrabold backdrop-blur-sm drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
  >
    Hello
  </span>

  <span
    className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500
    bg-clip-text text-transparent font-extrabold drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
  >
    Everyone
  </span>
</div>

        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-200 font-light"
        >
          Nama saya Rifqi Ibrahim
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed pt-2"
        >
          saya seorang pelajar SMK yang memiliki minat besar dalam bidang teknologi, terutama dalam pengembangan web dan desain grafis. 
          Saya senang belajar hal-hal baru dan untuk meningkatkan keterampilan saya di bidang ini.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 pt-8"
        >
          <button className="px-6 py-3 hover:bg-radial hover:from-green-100 bg-white rounded-lg text-green-700 font-bold shadow-lg hover:shadow-xl transition-all">
            View Projects
          </button>
          <button className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-zinc-300 font-medium hover:bg-white/10 transition-colors">
            Contact Me
          </button>
        </motion.div>
      </div>
    </div>
  );
}
