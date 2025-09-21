import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LinuxPopup({ open, onClose, message }) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  const isDayat = message?.toLowerCase().includes("dayat");

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
            className="bg-white text-gray-900 rounded-xl shadow-2xl border border-gray-300 w-[90%] max-w-md overflow-hidden"
            initial={{ scale: 0.7, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-2 border-b border-gray-300 bg-gray-100">
              <div className="flex items-center space-x-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 bg-red-500 rounded-full"
                ></button>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <span className="text-zinc-600">
                {isDayat ? "~/Error" : "~/Success"}
              </span>
            </div>

            {/* Body */}
            <div className="p-6 text-left flex flex-col items-center space-y-4">
              <img
                src={isDayat ? "/ambathink.jfif" : "/amba.jpg"}
                alt={isDayat ? "Error Icon" : "Success Icon"}
                className="w-32 h-32 rounded-lg"
              />
              <p
                className={`text-sm font-base p-4 rounded-md border ${
                  isDayat
                    ? "text-red-700 bg-red-100 border-red-400"
                    : "text-green-700 bg-green-100 border-green-400"
                }`}
              >
                {message}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
