"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { FaGithub, FaHeart, FaCode, FaLaptopCode } from "react-icons/fa"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const yText = useTransform(scrollYProgress, [0, 1], [0, -40])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden 
      bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-soft-light pointer-events-none" />

      {/* Soft glowing orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-[15%] left-[10%] w-[25rem] h-[25rem] bg-red-500 rounded-full blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="absolute bottom-[20%] right-[25%] w-[20rem] h-[20rem] bg-green-400 rounded-full blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute top-[35%] right-[50%] w-[22rem] h-[22rem] bg-yellow-400 rounded-full blur-[100px]"
      />

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 max-w-6xl mx-auto text-center md:text-left px-6 lg:px-12"
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r mt-10 lg:mt-0
          from-red-400 via-yellow-300 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-left text-zinc-400 text-lg md:text-xl mt-4 leading-relaxed mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl">
            Gw dimari asli bat orang bekasi sonoan dikit, 
            gw siswa SMK di Telesandi, 
            pas sekarang mah gw lagi demen bet baca bacain dokumentasi framework apalagi nextjs, 
            apabae dah yang gw minatin pasti bakal gw baca 
          </div>
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-6 lg:mt-20 relative items-start justify-center">
          {[
            {
              icon: <FaCode className="text-red-400 w-6 h-6" />,
              title: "Coding",
              desc: "Kegiatan sehari hari, ilokan gw kaga demen ama coding, gw kalo ga coding juga kaga bisa tidur",
              className: "scale-100 md:scale-100",
            },
            {
              icon: <FaLaptopCode className="text-yellow-400 w-6 h-6" />,
              title: "Disen",
              desc: "Ini Paporit gw bet inimah asli, ngedisen seru apalagi kalo imajinasi gw tiba tiba nyata",
              className: "scale-100 md:scale-125 md:-translate-y-[4.5px] z-20",
            },
            {
              icon: <FaHeart className="text-green-400 w-6 h-6" />,
              title: "Demen",
              desc: "Lagi demen bat baca gw, buku, artikel, dokumentasi, pokoknya ngebaca lagi demen bet gw",
              className: "scale-100 md:scale-100",
            },
          ].map((item, i) => (
            <motion.div
  key={i}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05, y: -5 }}
  transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
  viewport={{ once: true }}
  className={`group relative bg-neutral-900 backdrop-blur-xl border-0 border-t-4 border-neutral-400/50 
  ring ring-neutral-600/10 ring-offset-1 ring-offset-neutral-500/30
  rounded-3xl p-8 text-left hover:border-white/90 transition-all duration-500 -translate-y-1 ${item.className}`}
>
  <div className="flex items-center gap-4 mb-4">
    {item.icon}
    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
  </div>
  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
</motion.div>

          ))}
        </div>

        {/* GitHub Button */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/setsuwww"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-zinc-800 to-zinc-900 border border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-5 h-5" />
            Sokin Github
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
