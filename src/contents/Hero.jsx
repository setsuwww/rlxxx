import { useState, useEffect } from "react";
import LinuxWindow from "../components/linux/LinuxWindow";
import TerminalLabel from "../components/terminal/TerminalLabel";
import TerminalInput from "../components/terminal/TerminalInput";
import TypingText from "../components/TypingText";
import LinuxHeading from "../components/linux/LinuxHeading";

export default function Hero() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [loadingDots, setLoadingDots] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmittedName(name.trim());
    }
  };

  useEffect(() => {
    if (!submittedName) return;

    let count = 0;
    const dotCycle = [".", "..", "..."];
    const interval = setInterval(() => {
      setLoadingDots(dotCycle[count % dotCycle.length]);
      count++;
      if (count > 5) {
        clearInterval(interval);
        setShowTyping(true);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [submittedName]);

return (
  <div className="bg-gradient-to-t from-sky-950 to-zinc-900 text-white p-6 min-h-screen flex flex-col items-center justify-center">
    <LinuxHeading title="Welcome" />

    <div className="w-full max-w-2xl">
      <LinuxWindow title="~/Welcome" showFooter={true} footerContent="© 2025 Riinsss">
        {!submittedName ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-zinc-400">
              <TerminalLabel>Who's your name?</TerminalLabel>
            </label>
            <TerminalInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" autoFocus/>
            <button type="submit" className="bg-zinc-600/20 hover:bg-zinc-700/20 px-4 py-2 rounded text-white">
              Submit
            </button>
          </form>
        ) : (
          <div className="space-y-2">
            <p className="text-white font-light">
              <span className="text-yellow-500">$ </span> 
              <span className="text-zinc-400">~ {submittedName}&gt; </span> 
              Hello {submittedName}
            </p>

            {!showTyping && <p className="text-zinc-400 animate-pulse">process{loadingDots}</p>}

            {showTyping && !showDesc && (
              <TypingText 
                key="intro" 
                text="Rifqi Synyster is Here" 
                speed={100} 
                onDone={() => { if (!showDesc) setShowDesc(true) }}
              />
            )}
          </div>
        )}
      </LinuxWindow>
    </div>
  </div>
);
}
