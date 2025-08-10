import React from "react";
import LinuxWindow from "../components/linux/LinuxWindow";

function AboutLinuxWindow({ title, commandColor = "text-violet-400", command, description, endcommand }) {
  return (
    <div>
      <LinuxWindow title={title}>
        <div className="font-mono text-zinc-400">
          <pre className="text-sm whitespace-pre-wrap">
            <span className={`block mb-4 ${commandColor}`}>{command}</span>
            <article className="p-4 border border-gray-600 border-dashed rounded-lg">
              {description}
            </article>
            <span className={`block text-violet-400 mt-4 ${commandColor}`}>{endcommand}</span>
          </pre>
        </div>
      </LinuxWindow>
    </div>
  );
}

export default React.memo(AboutLinuxWindow);
