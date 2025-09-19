import React from "react";

function LinuxHeading({ title, description }) {
  return (
    <div className="mb-6 mt-10 py-6 text-center">
      <h1 className="text-4xl md:text-6xl mb-4 font-bold">
        <span className="dollar text-shadow-2xs text-shadow-yellow-400 text-yellow-300">$ </span>{title}
      </h1>
      <p className="tracking-tight text-gray-400 max-w-sm mx-auto">
        {description}
      </p>
    </div>
  );
}
export default React.memo(LinuxHeading);
