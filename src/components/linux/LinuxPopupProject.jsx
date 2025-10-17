"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function LinuxPopupProject({ open, onClose, project, onPrev, onNext }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[1000] bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-[90%] max-w-2xl rounded-2xl overflow-hidden 
            border border-white/10 bg-zinc-900/70 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.4)]"
            initial={{ scale: 0.8, y: -40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
          >
            <div className="flex items-center justify-between px-4 py-2 
              bg-zinc-800/70 
              border-b border-white/10"
            >
              {/* Traffic Light */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3 md:w-3.5 h-3 md:h-3.5 rounded-full bg-red-500 hover:bg-red-500/80"
                />
                <span className="w-3 md:w-3.5 h-3 md:h-3.5 rounded-full bg-yellow-400 hover:bg-yellow-300" />
                <span className="w-3 md:w-3.5 h-3 md:h-3.5 rounded-full bg-green-500 hover:bg-green-400" />
              </div>

              <span
                className="px-4 py-0.5 rounded-lg text-xs md:text-sm font-medium 
                bg-zinc-800/70 border border-white/10 text-zinc-300 truncate"
              >
                {project.title}
              </span>

              <div className="flex items-center space-x-1">
                <button
                  onClick={onPrev}
                  className="p-1 rounded-md bg-zinc-800/70 border border-white/10 hover:bg-zinc-700/80 active:scale-95 transition"
                >
                  <ChevronLeft className="w-4 h-4 text-zinc-300" />
                </button>
                <button
                  onClick={onNext}
                  className="p-1 rounded-md bg-zinc-800/70 border border-white/10 hover:bg-zinc-700/80 active:scale-95 transition"
                >
                  <ChevronRight className="w-4 h-4 text-zinc-300" />
                </button>
              </div>
            </div>

            {/* 📦 Content */}
            <div className="p-6 flex flex-col items-center space-y-5">
              <motion.img
                src={project.image}
                alt={project.title}
                loading="lazy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-[180px] md:h-[220px] object-contain rounded-lg bg-zinc-800/50 border border-white/5"
              />

              <div className="text-left w-full space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* ✨ Subtle glow bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default React.memo(LinuxPopupProject);
