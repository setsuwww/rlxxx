import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import clsx from "clsx";
import { navLinks } from "../constants/navLinks";

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

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={clsx("fixed top-0 left-0 right-0 z-50 text-white transition-[padding,background,box-shadow,backdrop-filter] duration-300 ease-in-out",
        scrolled ? "bg-black/40 shadow-md py-4 md:py-6 backdrop-blur" : "bg-transparent py-8"
      )}>
      <div className={clsx("max-w-7xl mx-auto flex items-center justify-between text-sm font-medium transition-[padding] duration-300 ease-in-out",
          scrolled ? "md:px-6 px-4" : "md:px-10 px-8"
        )}>
        <div className="hidden md:flex text-lg font-bold tracking-wide">
          Riinsss<span className="text-blue-500">.</span>
        </div>
        <div className="flex md:hidden text-lg font-bold tracking-wide">
          Rlx<span className="text-blue-500">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <SmoothLink key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
              {link.label}
            </SmoothLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button className="p-2 rounded hover:bg-white/10" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <RxCross2 size={20} /> : <RxHamburgerMenu size={20} />} 
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md py-4 px-6 flex flex-col space-y-3 text-center text-white font-semibold">
          {navLinks.map((link) => (
            <SmoothLink key={link.to} to={link.to} onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">
              {link.label}
            </SmoothLink>
          ))}
        </div>
      )}
    </nav>
  );
}

const SmoothLink = ({ to, children, onClick, className }) => (
  <Link to={to} smooth={true} duration={500} onClick={onClick} className={clsx("cursor-pointer transition-colors duration-200", className)}
  >
    {children}
  </Link>
);
