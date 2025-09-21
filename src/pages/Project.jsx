import React from "react";
import LinuxWindow from "../components/linux/LinuxWindow";
import LinuxHeading from "../components/linux/LinuxHeading";
import { myProjects } from "../constants/myProjects";

const ProjectCard = React.memo(function ProjectCard({ title, description, image }) {
  return (
    <div className="group p-4 border border-dashed border-zinc-400 hover:border-solid hover:border-yellow-300 rounded-lg shadow-sm bg-white hover:shadow-yellow-200 transition-all flex flex-col items-center md:items-left hover:scale-95">
      <img loading="lazy" src={image} alt={title} className="w-full h-24 object-cover rounded-t-lg mb-3" />
      <div className="border-2 border-dotted border-zinc-300 transition delay-100 duration-100 ease-in-out group-hover:border-yellow-200 rounded-md py-2">
        <h3 className="px-4 max-w-xs font-bold text-lg text-zinc-700 group-hover:text-violet-700 transition delay-700 duration-100 ease-in-out tracking-tight text-center md:text-left">
          {title}
        </h3>
        <p className="px-4 text-sm text-zinc-400 tracking-tighter max-w-xs text-center md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
});

export default function Project() {
  return (
    <section className="flex flex-col w-full">
      <div className="text-center">
        <LinuxHeading
          title="Projects"
          description="Liat liat projek gw nih kalo minat sabi kali sini gw kerjain ofkors bayar"
        />
      </div>

      <div className="p-6 flex justify-center">
        <LinuxWindow dark={false} title="~/My-Project" showFooter footerContent="ML Projects">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {myProjects.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                description={p.description}
                image={p.image}
              />
            ))}
          </div>
        </LinuxWindow>
      </div>
    </section>
  );
}
