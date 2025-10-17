"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import LinuxWindow from "../components/linux/LinuxWindow"
import LinuxPopup from "../components/linux/LinuxPopup"
import { BiSend } from "react-icons/bi"
import GradientBg from './../components/linux/GradientBg';

export default function Contact() {
  const [status, setStatus] = useState("")
  const [popupOpen, setPopupOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const message = formData.get("message") || ""

    if (containsDayat(message)) {
      setStatus('❌ Ga dikirim, ada kata terlarang. Ketahuan ya, Dayat 😏')
    } else {
      setStatus('✅ Makasih udah sempetin mampir sampe kirim pesan!')
    }

    setPopupOpen(true)
    e.target.reset()
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white px-6 py-20">
      <GradientBg />

      <div className="relative z-10 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-300 via-green-400 to-teal-400 bg-clip-text text-transparent">
          Contact Me
        </h1>
        <p className="mt-4 text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
          Tertarik bekerja sama dengan saya? Kirim pesan, kritik atau masukan demi perkembangan yang jauh lebih baik untuk saya dari sebelumnya, Terima kasih.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        <LinuxWindow dark={true} title="~/Contact-Me">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-4 md:p-6 text-gray-200"
          >
            {/* === Nama & Email sejajar === */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block mb-2 text-sm font-semibold text-gray-300">
                  Nama <span className="text-yellow-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-zinc-800 border border-white/10 rounded-xl
                             focus:ring-2 focus:ring-yellow-300/30 focus:outline-none transition-all"
                />
              </div>

              <div className="flex-1">
                <label className="block mb-2 text-sm font-semibold text-gray-300">
                  Email <span className="text-yellow-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-zinc-800 border border-white/10 rounded-xl
                             focus:ring-2 focus:ring-yellow-300/30 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* === Pesan === */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-300">
                Pesan <span className="text-yellow-400">*</span>
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 text-sm font-medium text-white bg-zinc-800 border border-white/10 rounded-xl
                           focus:ring-2 focus:ring-yellow-300/30 focus:outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* === Tombol Kirim === */}
            <button
              type="submit"
              className="w-full px-4 py-2.5 font-bold text-base border border-white/10 bg-white/5 
                         hover:bg-white/10 rounded-xl flex items-center justify-center gap-2
                         text-yellow-300 transition-all duration-150"
            >
              <span>Kirim Pesan</span>
              <BiSend className="text-yellow-300" />
            </button>
          </form>
        </LinuxWindow>
      </div>

      {/* === Popup === */}
      <LinuxPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        message={status}
      />
    </section>
  )
}
