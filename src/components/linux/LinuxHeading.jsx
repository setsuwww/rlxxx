import React from "react";
import clsx from "clsx";

function LinuxHeading({ title, description, dark = false }) {
  return (
    <div
      className={clsx(
        "mb-6 mt-10 py-6 text-center transition-colors duration-300 bg-transparent",
        dark ? "text-white" : "text-black"
      )}
    >
      <h1 className="text-4xl md:text-6xl mb-4 font-extrabold">
        <span
          className={clsx(
            " text-shadow-2xs",
            dark
              ? "dollar text-shadow-yellow-300 text-yellow-200"
              : "text-shadow-sky-400 text-sky-300"
          )}
        >
          ${" "}
        </span>
        <span
          className={clsx(
            "bg-clip-text text-transparent tracking-wide",
            dark
              ? "dollar-title bg-gradient-to-b from-zinc-200 to-white"
              : "bg-gradient-to-b from-zinc-700 to-zinc-500"
          )}
        >
          {title}
        </span>
      </h1>
      <p
        className={clsx(
          "tracking-tight max-w-sm mx-auto",
          dark ? "text-gray-300" : "text-gray-500"
        )}
      >
        {description}
      </p>
    </div>
  );
}

export default React.memo(LinuxHeading);
