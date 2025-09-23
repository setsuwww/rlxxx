import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import clsx from "clsx";
import { navLinks } from "../constants/navLinks";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentScroll > 10 && lastScroll.current <= 10) {
            setScrolled(true);
          } else if (currentScroll <= 10 && lastScroll.current > 10) {
            setScrolled(false);
          }
          lastScroll.current = currentScroll;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={clsx( "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out mix-blend-difference",
          scrolled ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg py-3"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="text-lg font-semibold tracking-tight text-white">
            Rlxxx<span className="text-blue-400">.</span>
          </div>

          <button className="p-2 rounded-xl 
            bg-gradient-to-b from-gray-700 to-gray-600 hover:to-gray-400
            ring-1 ring-gray-700 inset-shadow-2xs inset-shadow-gray-500 hover:ring-gray-500
            backdrop-blur-sm
            border border-gray-600 hover:border-gray-400
            transition-all" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? (
              <RxCross2 size={22} className="text-white" />
            ) : (
              <RxHamburgerMenu size={22} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div key="menu" className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
          >
            <motion.div className="w-[90%] max-w-2xl bg-zinc-900 text-white rounded-xl shadow-2xl overflow-hidden border border-zinc-700" 
              initial={{ scale: 0.8, opacity: 0, y: -20 }}  animate={{ scale: 1, opacity: 1, y: 0 }}  exit={{ scale: 0.9, opacity: 0, y: 20 }}  transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="flex items-center justify-between bg-gradient-to-b from-zinc-700/60 to-zinc-700/80 border-b border-zinc-600 inset-shadow-sm inset-shadow-zinc-700 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <button onClick={() => setMenuOpen(false)} 
                    className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors" aria-label="Close menu">
                  </button>
                  <span className="w-3 h-3 bg-yellow-500/40 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500/40 rounded-full"></span>
                </div>

                <span className="text-xs text-zinc-400">~/Rlxxx@menu:~</span>
              </div>

              <div className="flex flex-col space-y-4 py-3 px-4 text-left">
                {navLinks.map((link, i) => (
                  <motion.div key={link.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <SmoothLink to={link.to} onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-400 flex items-center justify-between"
                    >
                      <span className="text-base font-light"><span className="text-yellow-500 mr-2">$</span>{link.label}</span>
                      <span className="hidden md:flex text-sm font-light text-gray-600">
                        {link.description}
                      </span>
                    </SmoothLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const SmoothLink = ({ to, children, onClick, className }) => (
  <Link to={to} smooth={true} duration={500} onClick={onClick}
    className={clsx(
      "cursor-pointer transition-colors duration-200",
      className
    )}
  >
    {children}
  </Link>
);
