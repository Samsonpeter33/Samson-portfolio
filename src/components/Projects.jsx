
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-10 py-20">
      <h2 className="text-title font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p) => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            className="group relative bg-white shadow-xl rounded-xl overflow-hidden"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-52 w-full object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center p-6">
              <h3 className="text-white font-bold text-xl mb-3">
                {p.title}
              </h3>
              <p className="text-gray-200 text-sm mb-4">
                {p.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {p.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Default Title */}
            <div className="p-5">
              <h3 className="font-bold text-blue-800">{p.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
