import React from "react";
import LinuxWindow from "../components/linux/LinuxWindow";
import { motion } from "framer-motion";

function AboutLinuxWindow({
  title,
  commandColor = "text-violet-400",
  command,
  description,
  endcommand,
}) {
  return (
    <div>
      <LinuxWindow title={title}>
        <div className="font-mono text-zinc-400">
          <pre className="text-sm whitespace-pre-wrap">
            {/* Command awal */}
            <motion.span
              className={`block mb-4 ${commandColor}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {command}
            </motion.span>

            {/* Description */}
            <motion.article
              className="p-4 border border-gray-700 border-dashed rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              {description}
            </motion.article>

            {/* End Command */}
            <motion.span
              className={`block mt-4 ${commandColor}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              {endcommand}
            </motion.span>
          </pre>
        </div>
      </LinuxWindow>
    </div>
  );
}

export default React.memo(AboutLinuxWindow);
