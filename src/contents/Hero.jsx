'use client'

import { motion } from "framer-motion"
import FrameLines from "./Hero/FrameLines"
import LightOrbs from "./Hero/LightOrbs"
import Badge from "./Hero/Badge"
import HeroText from "./Hero/HeroText"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <FrameLines />
      <LightOrbs />
      <Badge />
      <HeroText />
    </div>
  )
}
