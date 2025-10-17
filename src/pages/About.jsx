"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { FaGithub, FaDatabase, FaCode, FaPalette } from "react-icons/fa"
import { useRef } from "react"
import GradientBg from './../components/linux/GradientBg';

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const yText = useTransform(scrollYProgress, [0, 1], [0, -40])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  const cardData = [
    {
      icon: <FaCode className="text-red-400 w-6 h-6" />,
      title: "Technology",
      desc: "Nextjs, Laravel, React, dan Vue masih pemenang sebagai framework andalan saya untuk membuat sebuah aplikasi web",
    },
    {
      icon: <FaPalette className="text-yellow-400 w-6 h-6" />,
      title: "Frontend",
      desc: "Untuk Framework Frontend saya sedang mendalami Tailwindcss, Shadcn, Alpinejs, dan Framer-Motion untuk animasi",
    },
    {
      icon: <FaDatabase className="text-green-400 w-6 h-6" />,
      title: "API & Backend",
      desc: "Restful API, Axios, Prisma, Mysql dan Nodejs, itu adalah Backend stack favorite saya untuk membuat sebuah aplikasi web",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <motion.section ref={ref} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"
    >
      <GradientBg />

      <div className="relative z-10 max-w-6xl mx-auto text-center md:text-left px-6 lg:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mt-10 lg:mt-0
          bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 bg-clip-text text-transparent"
        >
          About Me
        </h1>

        <p className="max-w-3xl text-zinc-400 text-lg md:text-xl mt-4 leading-relaxed">
          Saya asli Tambun, Bekasi. Siswa SMK Telesandi, dari awal belajar programming saya tertarik pada bagian Frontend, bukan hanya bagian UI
          tapi juga bagian API, Optimalisasi performa, UIUX agar pengguna merasa nyaman menggunakan aplikasi yang saya buat.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-10 lg:mt-16">
          {cardData.map((item, i) => (
            <div key={i} className="group bg-neutral-900/60 backdrop-blur-lg border border-white/10 rounded-3xl p-8 
              text-left shadow-sm hover:shadow-lg hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="https://github.com/setsuwww"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white 
                       bg-gradient-to-r from-zinc-800 to-zinc-900 border border-white/10 
                       shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
            Sokin Github
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}
