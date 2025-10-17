"use client"

import { useEffect, useRef, useState } from "react"
import { Link } from "react-scroll"
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"
import { AnimatePresence, motion } from "framer-motion"
import clsx from "clsx"
import { navLinks } from "../constants/navLinks"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScroll = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(currentScroll > 10)
          lastScroll.current = currentScroll
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(
          "fixed top-4 md:top-6 left-4 md:left-20 right-4 md:right-20 z-50 transition-all duration-300 ease-in-out rounded-full",
          scrolled
            ? "bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-xl font-semibold tracking-tight text-white"
          >
            <div className="flex items-center space-x-1">
              <span className="w-1 h-1 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
              <span className="w-1 h-1 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
              <span className="w-1 h-1 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
            </div>
            <span>
              Rlxxx<span className="text-blue-400">.</span>
            </span>
          </motion.div>

          <motion.button
  whileTap={{ scale: 0.9 }}
  whileHover={{ scale: 1.05 }}
  onClick={() => setMenuOpen(true)}
  aria-label="Toggle menu"
  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 shadow-md backdrop-blur-lg transition-all"
>
  <RxHamburgerMenu size={22} />
</motion.button>

        </div>
      </motion.nav>

      <AnimatePresence>
  {menuOpen && (
    <>
      {/* Overlay */}
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer */}
      <motion.div
        key="drawer"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={clsx(
          "fixed top-0 right-0 h-full w-[78%] max-w-sm z-50",
          "bg-zinc-900/85 backdrop-blur-xl border-l border-white/10",
          "shadow-[0_0_25px_rgba(255,255,255,0.05)] flex flex-col"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <span className="text-white/80 font-medium text-base">Menu</span>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <RxCross2 size={22} />
          </motion.button>
        </div>

        {/* Menu List */}
        <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <SmoothLink
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="block text-lg text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </SmoothLink>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </>
  )}
</AnimatePresence>

    </>
  )
}

const SmoothLink = ({ to, children, onClick, className }) => (
  <Link
    to={to}
    smooth
    duration={500}
    onClick={onClick}
    className={clsx("cursor-pointer transition-colors duration-200", className)}
  >
    {children}
  </Link>
)
