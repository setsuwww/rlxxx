
import { motion } from "framer-motion"
import React from "react"

const orbVariant = {
  animate: {
    y: [0, 20, -20, 0],
    x: [0, -15, 15, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
  }
}

const LightOrbs = React.memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      variants={orbVariant}
      animate="animate"
      className="absolute top-32 left-2 w-[25rem] h-[25rem] bg-red-500/20 rounded-full blur-3xl"
    />
    <motion.div
      variants={orbVariant}
      animate="animate"
      className="absolute bottom-24 left-[20%] w-[25rem] h-[25rem] bg-yellow-500/20 rounded-full blur-3xl"
    />
    <motion.div
      variants={orbVariant}
      animate="animate"
      className="absolute top-48 right-0 w-[24rem] h-[24rem] bg-green-500/20 rounded-full blur-3xl"
    />
  </div>
))

export default LightOrbs
