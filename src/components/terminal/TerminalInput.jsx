import React from "react";

const TerminalInput = React.memo(function TerminalInput({
  value,
  onChange,
  placeholder = "Enter...",
  ...props
}) {
  return (
    <div className="flex items-center space-x-2 bg-transparent">
      <span className="text-green-500 select-none">>></span>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent text-white flex-1 py-2 focus:outline-none placeholder:text-zinc-600 placeholder:text-sm"
        {...props}
      />
    </div>
  );
});

export default TerminalInput;
