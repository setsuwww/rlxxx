import React from "react"

const Badge = React.memo(() => (
  <div
    className="absolute top-[6rem] sm:top-[7rem] md:top-[8rem] lg:top-[10rem] xl:top-[12rem] left-1/2 -translate-x-1/2 z-20"
  >
    <div className="flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full 
                    bg-white/10 backdrop-blur-xl border border-white/20 
                    shadow-[0_0_20px_rgba(255,255,255,0.05)]">
      <span className="relative flex w-2.5 h-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full w-2.5 h-2.5 
                         bg-gradient-to-r from-green-400 to-green-600 
                         shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
      </span>
      <span className="text-xs md:text-sm font-medium text-white/90 tracking-wide">
        Available
      </span>
    </div>
  </div>
))

export default Badge
