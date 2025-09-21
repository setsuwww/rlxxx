import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function LinuxPopupProject({ open, onClose, project, onPrev, onNext }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 flex items-center justify-center z-[1000] bg-black/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="relative bg-white text-zinc-900 rounded-xl shadow-2xl border border-zinc-300 w-[90%] max-w-2xl overflow-hidden"
            initial={{ scale: 0.8, y: -50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center justify-between bg-zinc-100 px-4 py-2 border-b border-zinc-300">
              <div className="flex items-center space-x-2">
                <button onClick={onClose} className="w-3 h-3 bg-red-500 hover:bg-red-700 rounded-full focus:scale-95"/>
                <span className="w-3 h-3 bg-yellow-500/50 rounded-full" />
                <span className="w-3 h-3 bg-green-500/50 rounded-full" />
              </div>
              <span className="bg-zinc-200 px-6 py-1 rounded-lg border border-zinc-400/20 font-semibold text-left text-sm text-zinc-700 truncate">
                {project.title}
              </span>
              <div className="flex items-center space-x-1">
                <button onClick={onPrev} className="p-1 rounded-md bg-white shadow-xs border border-gray-200 hover:bg-zinc-300 transition">
                  <ChevronLeft className="w-5 h-5 text-zinc-700" />
                </button>
                <button onClick={onNext} className="p-1 rounded-md bg-white shadow-xs border border-gray-200 hover:bg-zinc-300 transition">
                  <ChevronRight className="w-5 h-5 text-zinc-700" />
                </button>
              </div>
            </div>

            <div className="p-6 flex flex-col items-center space-y-4">
              <img src={project.image} alt={project.title}
                className="w-full h-[150px] md:h-[200px] object-contain rounded-md"
              />
              <div className="text-left w-full">
                <h2 className="text-lg font-bold text-zinc-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-zinc-600">{project.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default React.memo(LinuxPopupProject);
