import { motion, AnimatePresence } from "framer-motion";

export default function LinuxPopupProject({ open, onClose, project }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[1000] bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-gray-900 rounded-xl shadow-2xl border border-gray-300 w-[90%] max-w-2xl overflow-hidden"
            initial={{ scale: 0.8, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Header ala Linux */}
            <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b border-gray-300">
              <div className="flex items-center space-x-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 bg-red-500 rounded-full"
                />
                <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-sm text-zinc-700 truncate">
                ~/Project/{project.title}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col items-center space-y-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-[400px] object-contain rounded-md"
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
