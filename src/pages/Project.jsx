import React, { useState } from "react";
import LinuxWindow from "../components/linux/LinuxWindow";
import LinuxHeading from "../components/linux/LinuxHeading";
import { myProjects } from "../constants/myProjects";
import LinuxPopupProject from "../components/linux/LinuxPopupProject";

export default function Project() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentIndex(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : myProjects.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < myProjects.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <section className="flex flex-col w-full">
      <div className="text-center">
        <LinuxHeading
          title="Projects"
          description="Liat liat projek gw nih kalo minat sabi kali sini gw kerjain ofkors bayar"
        />
      </div>

      <div className="p-6 flex justify-center">
        <LinuxWindow dark={false} title="~/My-Project" showFooter footerContent="Machine Learning Projects">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {myProjects.map((p, idx) => (
              <div key={p.title} onClick={() => handleOpen(idx)} className="cursor-pointer border border-gray-200 rounded-lg">
                <img loading="lazy" src={p.image} alt={p.title}
                  className="w-full h-34 object-cover rounded-t-lg"
                />
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-zinc-600">
                      {p.title}
                    </h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 border border-yellow-300/30 text-yellow-700">
                      Machine Learning
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </LinuxWindow>
      </div>

      <LinuxPopupProject open={open} onClose={handleClose}
        onPrev={handlePrev} onNext={handleNext}
        project={currentIndex !== null ? myProjects[currentIndex] : null}
      />
    </section>
  );
}
