import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function TypingText() {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showFullstack, setShowFullstack] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowFrontend(true), 800),
      setTimeout(() => setShowFullstack(true), 1500),
      setTimeout(() => setShowDescription(true), 2200),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="space-y-2 font-mono">
      <p className="text-xl md:text-2xl text-green-400">
        <Typewriter words={["I'm Rifqi Synyster"]} typeSpeed={60}
          deleteSpeed={0}
          delaySpeed={200}
        />
      </p>

      {/* Profesi Pertama */}
      <div className={`border-t border-0 border-dashed border-sky-600 pt-4 transform transition-all duration-700 ease-in-out 
        ${showFrontend ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <p className="font-extralight text-sm text-sky-600 flex items-center space-x-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
          </span>
          <Typewriter words={['Frontend Develepor']}
            typeSpeed={70}
            deleteSpeed={0}
            delaySpeed={300}
          />
        </p>
      </div>

      {/* Profesi Kedua */}
      <div className={`border-b border-0 border-dashed border-sky-600 pb-4 transform transition-all duration-700 ease-in-out
        ${showFullstack ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        <p className="font-light text-sm text-sky-600 flex items-center space-x-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
          </span>
          <Typewriter words={['Fullstack Developer']}
            typeSpeed={70}
            deleteSpeed={0}
            delaySpeed={300}
          />
        </p>
      </div>

      {/* Deskripsi */}
      <p className={`text-sm text-zinc-400 pt-2 transition-all duration-700 ease-in-out transform ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        Selamat datang pendatang, 
        gw sambut dengan baik, kalo lu pergi gw relain, 
        fungsi web ini cuma buat ngasih tau hal hal random gajelas tentang gw
        lu dateng kesini cuma ngeliat hasil coding gabut gw
      </p>
      <span className='text-xs text-gray-600'> -- Terima kasih </span> 
    </div>
  );
}
