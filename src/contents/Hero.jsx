'use client'

import { motion } from "framer-motion"
import FrameLines from "./Hero/FrameLines"
import LightOrbs from "./Hero/LightOrbs"
import Badge from "./Hero/Badge"
import HeroText from "./Hero/HeroText"

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative p-6 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <FrameLines />
      <LightOrbs />
      <div className="mb-16 sm:mb-20 md:mb-24">
        <Badge />
      </div>
      <HeroText />
    </div>
  )
}
