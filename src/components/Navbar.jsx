import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const lastScroll = useRef(0);
  const ticking = useRef(false);

  const navLinks = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={clsx( "fixed top-0 left-0 right-0 z-50 text-white transition-[padding,background,box-shadow,backdrop-filter] duration-300 ease-in-out",
        scrolled ? "bg-black/40 shadow-md py-4 md:py-6 backdrop-blur" : "bg-transparent py-8"
      )}>
      <div className={clsx( "max-w-7xl mx-auto flex items-center justify-between text-sm font-medium transition-[padding] duration-300 ease-in-out",
          scrolled ? "md:px-6 px-4" : "md:px-10 px-8"
        )}>
        <div className="text-lg font-bold tracking-wide cursor-pointer transition-colors duration-300">
          Riinsss<span className="text-blue-500">.</span>
        </div>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <SmoothLink key={link.to} to={link.to}>
              {link.label}
            </SmoothLink>
          ))}
        </div>

        <div className="md:hidden">
          <button className="p-2 rounded hover:bg-white/10">
            <RxHamburgerMenu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

const SmoothLink = ({ to, children }) => (
  <Link to={to} smooth={true} duration={500} className="cursor-pointer transition-colors duration-200 hover:text-blue-400">
    {children}
  </Link>
);
