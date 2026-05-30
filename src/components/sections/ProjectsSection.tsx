import porto1 from "../../assets/portofolio/Portfolio1.png"
import porto2 from "../../assets/portofolio/Portfolio2.png"
import porto3 from "../../assets/portofolio/Portfolio3.png"

type Project = {
  title: string;
  category: string;
  img: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Portofolio 1",
    category: "Landing Page",
    img: porto1,
  },
  {
    title: "Portofolio 2",
    category: "Landing Page",
    img: porto2,
  },
  {
    title: "Portofolio 3",
    category: "Landing Page",
    img: porto3,
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            From Vision to Launch! Projects We're Proud Of
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        {/* Grid 3 card */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* Card gambar */}
              <div className=" rounded-2xl overflow-hidden mb-4 transition-transform group-hover:scale-105 duration-300">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Label + judul */}
              <p className="text-orange-500 text-sm font-medium mb-1">
                {project.category}
              </p>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
