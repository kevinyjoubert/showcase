import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-50 to-zinc-100">

      {/* NAVBAR */}
      <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-center">
          <h1 className="text-xl font-semibold tracking-wider text-zinc-800">
            SHOW<span className="text-blue-600">CASE</span>
          </h1>
        </div>
      </header>


      {/* MAIN CONTENT */}
      <main className="flex-1">

        {/* HERO */}
        <section className="text-center pt-20 pb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Projetos e Experimentos
          </h2>

          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Um laboratório de ideias, interfaces e soluções.
            Cada projeto demonstra conceitos, arquitetura e experiências digitais.
          </p>

          <div className="mt-6 text-sm text-zinc-400">
            {projects.length} projetos disponíveis
          </div>
        </section>


        {/* GRID DE PROJETOS */}
        <section className="max-w-7xl mx-auto px-8 pb-24">
          <div
            className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-8
            "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.route}
                project={project}
              />
            ))}
          </div>
        </section>

      </main>


      {/* FOOTER */}
      <footer className="text-center text-sm text-zinc-400 border-t py-8">

        <p>
          Desenvolvido por{" "}
          <span className="font-medium text-zinc-600">
            Keviny Joubert
          </span>
            {" "}e{" "}
          <span className="font-medium text-zinc-600">
            Laryssa Gabriela
          </span>
        </p>

      </footer>

    </div>
  )
}