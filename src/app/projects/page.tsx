import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/data";


export default function ProjectsPage() {
  return (
    <section className="grid md:grid-cols-2 gap-4">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </section>
  );
}

