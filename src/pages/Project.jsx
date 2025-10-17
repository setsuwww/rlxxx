"use client"

import React, { useState } from "react"
import LinuxWindow from "../components/linux/LinuxWindow"
import { myProjects } from "../constants/myProjects"
import LinuxPopupProject from "../components/linux/LinuxPopupProject"
import { motion } from "framer-motion"
import GradientBg from './../components/linux/GradientBg';

export default function Project() {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleOpen = (index) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setCurrentIndex(null)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : myProjects.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < myProjects.length - 1 ? prev + 1 : 0))
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      <GradientBg />

      {/* 🧠 Heading + Description (rata kanan) */}
      <div className="z-10 w-full max-w-[78rem] px-6 md:px-12 flex justify-center md:justify-end mt-12 mb-12">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-right max-w-3xl"
        >
          <h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mt-10 lg:mt-0
            bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 bg-clip-text text-transparent"
          >
            My Projects
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl mt-4 leading-relaxed">
            Saya asli Tambun, Bekasi. Siswa SMK Telesandi, dari awal belajar
            programming saya tertarik pada bagian Frontend, bukan hanya bagian
            UI tapi juga API, optimalisasi performa, dan UX agar pengguna
            merasa nyaman menggunakan aplikasi yang saya buat.
          </p>
        </motion.div>
      </div>

      {/* 💻 Project Grid */}
      <div className="p-6 flex justify-end z-10 w-full max-w-7xl">
        <LinuxWindow
          dark={true}
          title="~/My-Project"
          showFooter
          footerContent="Machine Learning Projects"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {myProjects.map((p, idx) => (
              <motion.div
                key={p.title}
                onClick={() => handleOpen(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                viewport={{ once: true }}
                className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md 
                hover:ring-1 hover:ring-white/20 hover:bg-white/10 transition-all duration-200"
              >
                <img
                  loading="lazy"
                  src={p.image}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-white">{p.title}</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-300/20 border border-yellow-400/40 text-yellow-300">
                      Machine Learning
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </LinuxWindow>
      </div>

      {/* 🪟 Popup */}
      <LinuxPopupProject
        open={open}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
        project={currentIndex !== null ? myProjects[currentIndex] : null}
      />
    </section>
  )
}
