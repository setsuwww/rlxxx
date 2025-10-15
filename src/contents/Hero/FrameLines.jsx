

import { motion } from "framer-motion"
import React from "react"

const lineVariant = {
  hidden: { opacity: 0, x: 100, y: -100, scale: 0.9 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
}

const FrameLines = React.memo(() => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    variants={lineVariant}
    initial="hidden"
    animate="visible"
  >
    <div className="absolute inset-0 mx-6 my-6 lg:mx-20 lg:my-20 border border-white/10 rounded-4xl border-dotted" />

    {["top-1/3", "top-1/5 via-slate-700/20", "top-[120px] via-slate-500/20", "bottom-1/3", "bottom-1/5 via-slate-700/20", "bottom-[120px] via-slate-500/20"].map((pos, i) => (
      <div
        key={`h-${i}`}
        className={`absolute ${pos} left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent`}
      />
    ))}

    {["left-1/3 h-full via-slate-300/20", "left-1/5 h-1/3 via-slate-500/20", "left-1/9 h-1/5 via-slate-700/20", "right-1/3 h-full via-slate-300/20", "right-1/5 h-1/3 via-slate-500/20", "right-1/9 h-1/5 via-slate-700/20"].map((pos, i) => (
      <div
        key={`v-${i}`}
        className={`absolute top-0 ${pos} w-px bg-gradient-to-b from-transparent to-transparent`}
      />
    ))}
  </motion.div>
))

export default FrameLines
