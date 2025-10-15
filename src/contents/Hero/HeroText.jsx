import { motion } from "framer-motion"
import React from "react"

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" }
  })
}

const HeroText = React.memo(() => (
  <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 mt-8">
    <motion.h1
      variants={textVariant}
      initial="hidden"
      animate="visible"
      className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center space-x-4">
        <span className="relative bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_40%,rgba(255,255,255,0.3)_100%)] bg-clip-text text-transparent font-extrabold backdrop-blur-sm drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
          Hello
        </span>
        <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent font-extrabold drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] leading-tight pb-[2px]">
          Everyone
        </span>
      </div>
    </motion.h1>

    <motion.div variants={textVariant} initial="hidden" animate="visible" custom={0.2} className="text-xl md:text-2xl text-yellow-300 font-light">
      Gw Rifqi Ibrahim
    </motion.div>

    <motion.p
      variants={textVariant}
      initial="hidden"
      animate="visible"
      custom={0.3}
      className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed pt-2"
    >
        Selamat datang, dimari gw bakal jelasin ini paan si, 
        ini mah portofolio gw, 
        lu dimari cuma bakal liat liatin hasil gabut gw, 
        makasih dah udah mau mampir
    </motion.p>

    <motion.div variants={textVariant} initial="hidden" animate="visible" custom={0.4} className="flex items-center justify-center gap-4 pt-8">
      <button className="px-6 py-3 bg-white text-green-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
        Liat Karya
      </button>
      <button
        className="relative px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-zinc-300 font-medium transition-all duration-300 ease-out hover:scale-105 hover:text-white hover:border-t-white/30 hover:border-b-slate-800 hover:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_80%)]"
      >
        Contact gw
      </button>
    </motion.div>
  </div>
))

export default HeroText
