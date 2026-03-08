import { Link } from "react-router-dom";
import type { Project } from "../../data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[hsl(var(--accent-indigo-light))] to-[hsl(var(--accent-rose-light))]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const parent = e.currentTarget.parentElement;
            if (parent) {
              parent.style.background =
                "linear-gradient(135deg, hsl(226 100% 97%) 0%, hsl(355.7 100% 97.3%) 100%)";
            }
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[hsl(var(--accent-indigo)/0.6)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-col p-5">
        <div className="flex items-start justify-between">
          <h3 className="text-base font-semibold">{project.title}</h3>
          <span className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-accent px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}