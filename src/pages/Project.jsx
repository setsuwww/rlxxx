import React from "react";
import LinuxWindow from "../contents/LinuxWindow";
import LinuxHeading from "../contents/LinuxHeading";

// Dummy data (di luar komponen biar nggak bikin rerender)
const PROJECTS = [
  {
    title: "Pymoney",
    description: "A cool machine learning project with Python.",
    image: "/pymoney.webp",
  },
  {
    title: "Project Beta",
    description: "A modern React dashboard UI for analytics.",
    image: "/pymoney.webp",
  },
  {
    title: "Project Gamma",
    description: "Automation script for daily tasks.",
    image: "/pymoney.webp",
  },
];

// Card component (memoized)
const ProjectCard = React.memo(function ProjectCard({ title, description, image }) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center">
      <img loading="lazy" src={image} alt={title} className="w-full h-24 object-cover rounded-t-lg mb-3"/>
      <h3 className="px-4 pb-2 font-semibold text-lg tracking-tight">{title}</h3>
      <p className="px-4 pb-4 text-sm text-gray-600 tracking-tighter">{description}</p>
    </div>
  );
});

export default function Project() {
  return (
    <section className="flex flex-col">
      <div className="text-center mb-6">
        <LinuxHeading
          title="Projects"
          description="Liat liat projek gw nih kalo minat sabi kali sini gw kerjain ofkors bayar"
        />
      </div>

      <div className="p-6 flex justify-center">
        <LinuxWindow dark={false} title="~/My-Project" showFooter footerContent="Machine Learning Projects">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
            {PROJECTS.map((p) => (
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
