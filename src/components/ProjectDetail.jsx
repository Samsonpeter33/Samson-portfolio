
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="pt-32 text-center">Project not found</div>;

  return (
    <div className="min-h-screen px-10 py-24 max-w-4xl mx-auto">
      <img src={project.image} className="w-full rounded-xl mb-8" />
      <h1 className="font-bold text-title mb-6">{project.title}</h1>
      <p className="whitespace-pre-line text-gray-700">{project.description}</p>

      <Link to="/" className="inline-block mt-10 bg-primary text-white px-6 py-3 rounded-lg">
        ← Back to Home
      </Link>
    </div>
  );
}
