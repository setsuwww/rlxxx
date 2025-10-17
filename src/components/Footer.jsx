export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-zinc-950/80 backdrop-blur-md text-zinc-400">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Brand / Credit */}
        <div className="text-center md:text-left tracking-tight text-zinc-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors">
            Rlxxx
          </span>{" "}
          — All rights reserved.
        </div>
      </div>

      {/* Subtle glow strip at bottom */}
      <div className="h-[2px] w-full bg-gradient-to-r from-green-400/0 via-yellow-400/20 to-green-400/0" />
    </footer>
  )
}
