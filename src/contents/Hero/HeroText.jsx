import React from "react"

const HeroText = React.memo(() => (
  <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 mt-8">
    <h1
      className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center space-x-4">
        <span className="hallo relative bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_40%,rgba(255,255,255,0.3)_100%)] bg-clip-text text-transparent font-extrabold backdrop-blur-sm drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
          Hello
        </span>
        <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent font-extrabold drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] leading-tight pb-[2px]">
          Everyone
        </span>
      </div>
    </h1>

    <div>
      <span className="text-center text-lg md:text-xl text-yellow-300 bg-yellow-500/10 font-light px-6 py-1">
        Iam Rifqi Ibrahim
      </span>
    </div>

    <p
      className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed pt-2"
    >
      Selamat datang di portofolio saya yang ke sekian kalinya, saya sedang memperdalam keahlian saya dalam membuat web design frontend yang menarik
    </p>

    <div className="flex items-center justify-center gap-4 pt-8">
      <button className="px-6 py-3 bg-white text-green-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
        Lihat Karya
      </button>
      <button
        className="relative px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-zinc-300 font-medium transition-all duration-300 ease-out hover:scale-105 hover:text-white hover:border-t-white/30 hover:border-b-slate-800 hover:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_80%)]"
      >
        Contact 
      </button>
    </div>
  </div>
))

export default HeroText
