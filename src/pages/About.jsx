import { useMemo } from "react";
import { aboutDescription } from "../constants/aboutDescription";
import AboutLinuxWindow from "../contents/AboutLinuxWindow";
import LinuxHeading from "../components/linux/LinuxHeading";
import { FaGithub } from "react-icons/fa";

export default function About() {
  const favorites = useMemo(() => [
      { label: "Person", value: "Her" },
      { label: "Band", value: "Avenged Sevenfold" },
      { label: "Song", value: "Bat Country" },
      { label: "Hobby", value: "Coding & Explore" },
      { label: "Makanan", value: "Mie Ayam" },
    ],[]
  );

  const favoriteString = useMemo(() => favorites.map(fav => `${fav.label} : ${fav.value}`).join("\n"),
    [favorites]
  );

  return (
    <div className="element-children p-6 bg-gradient-to-b from-sky-950 to-zinc-900 text-white">
      <LinuxHeading title="About" 
        description="Gw kasih tau sedikit info tentang biar lu tau, meski lu ga mau tau" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <div className="md:col-span-2">
          <AboutLinuxWindow title="~/About-Me"
            command="@ Introduction"
            description={aboutDescription}
            endcommand="@ End-Introduction"
          />
        </div>

        <div className="space-y-4">
          <AboutLinuxWindow title="~/Favorite"
            command="! Favorite"
            commandColor="text-yellow-400"
            description={favoriteString}
            endcommand="! End-Favorite"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <a href="https://github.com/setsuwww" target="_blank" rel="noopener noreferrer" className="border border-gray-600 border-dashed px-6 py-2 rounded-lg flex items-center gap-2 text-gray-400 hover:text-white hover:bg-white/5 hover:border-solid transition-colors">
          <FaGithub size={20} />
          <span className="text-sm font-mono">https://github.com/setsuwww</span>
        </a>
      </div>
    </div>
  );
}
