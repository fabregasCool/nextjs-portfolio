export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="border p-4 rounded-lg shadow-md dark:bg-gray-800">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} className="text-blue-500">
        Voir plus
      </a>
    </div>
  );
}
