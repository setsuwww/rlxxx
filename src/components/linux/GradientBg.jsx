import React from "react"

export default function GradientBg({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* pola grid halus */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* cahaya soft ala traffic light mac */}
      <div className="absolute top-[18%] left-[12%] w-[13rem] h-[13rem] bg-red-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[12%] right-[14%] w-[17rem] h-[17rem] bg-green-400/25 rounded-full blur-[110px]" />
      <div className="absolute top-[38%] right-[42%] w-[20rem] h-[20rem] bg-yellow-400/20 rounded-full blur-[120px]" />
    </div>
  )
}
