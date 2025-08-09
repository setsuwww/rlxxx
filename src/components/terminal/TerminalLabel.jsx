import React from "react";

const TerminalLabel = React.memo(function TerminalLabel({ children }) {
  return (
    <p className="text-zinc-500 select-none">
      <span className="text-yellow-500">$</span> {children}
    </p>
  );
});

export default TerminalLabel;
