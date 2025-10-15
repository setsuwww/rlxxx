

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-scroll"
import clsx from "clsx"
import { navLinks } from "../constants/navLinks"
import { AnimatePresence, motion } from "framer-motion"

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
      {/* ===== NAVBAR ===== */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          scrolled
            ? "bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg font-semibold tracking-tight text-white"
          >
            Rlxxx<span className="text-blue-400">.</span>
          </motion.div>

          {/* Menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle menu"
            className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 
                       text-white transition-all duration-200 hover:bg-white/20"
          >
            <RxHamburgerMenu size={22} />
          </motion.button>
        </div>
      </motion.nav>

      {/* ===== DRAWER MENU ===== */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
  key="drawer"
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{ type: "spring", stiffness: 120, damping: 18 }}
  className={clsx(
    "fixed right-0 h-[98%] w-[80%] max-w-sm z-50 mr-2 mb-10",
    "bg-zinc-900/90 backdrop-blur-2xl border-l border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.05)] flex flex-col transition-all duration-100",
    scrolled ? "mt-[9px]" : "mt-3.5" // ganti dari mt ke top
  )}
>

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="text-base text-white font-medium">
                  <span className="text-blue-400">Rlxxx</span> Menu
                </div>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <RxCross2 size={22} />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <SmoothLink
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between text-zinc-300 hover:text-white 
                                 transition-all text-lg font-light"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-yellow-400">$</span>
                        {link.label}
                      </span>
                      <motion.span
                        initial={{ opacity: 0, x: 10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-zinc-500 group-hover:text-zinc-300"
                      >
                        {link.description}
                      </motion.span>
                    </SmoothLink>
                  </motion.div>
                ))}
              </div>
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
    smooth={true}
    duration={500}
    onClick={onClick}
    className={clsx("cursor-pointer transition-colors duration-200", className)}
  >
    {children}
  </Link>
)
