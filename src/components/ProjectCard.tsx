import { Link } from "react-router-dom"
import type { Project } from "../data/projects"

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {

  return (

    <Link
      to={project.route}
      className="
      group
      bg-white
      rounded-xl
      shadow-sm
      hover:shadow-xl
      transition
      overflow-hidden
      border
      border-zinc-200
      "
    >

      <div className="overflow-hidden">

        <img
          src={project.image}
          className="
          w-full
          h-40
          object-cover
          group-hover:scale-110
          transition
          duration-500
          "
        />

      </div>

      <div className="p-4">

        <h3 className="font-semibold text-zinc-800 mb-1">
          {project.title}
        </h3>

        <p className="text-sm text-zinc-500">
          {project.description}
        </p>

      </div>

    </Link>

  )
}