import { projects } from "../data/projects";
import ProjectCard from "../components/homepage/ProjectCard";
import ScrollReveal from "../components/homepage/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tighter">
            <span className="text-muted-foreground">SHOW</span>
            <span className="text-[hsl(var(--accent-indigo))]">CASE</span>
          </span>

          <div className="flex items-center gap-6">
            <a href="#projetos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Projetos
            </a>
            <a href="#sobre" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Sobre
            </a>
            <a
              href="mailto:contato@exemplo.com"
              className="rounded-full border border-[hsl(var(--accent-indigo)/0.3)] px-4 py-2 text-xs font-medium text-[hsl(var(--accent-indigo))] transition-all duration-200 hover:bg-[hsl(var(--accent-indigo-light))]"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-24">
        <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[hsl(var(--accent-indigo)/0.06)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[hsl(var(--accent-rose)/0.05)] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left column */}
            <div className="space-y-8">
              <ScrollReveal delay={0}>
                <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent-indigo)/0.2)] bg-[hsl(var(--accent-indigo-light))] px-4 py-1.5 text-sm">
                  <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent-indigo))]" />
                  <span className="text-[hsl(var(--accent-indigo))]">Portfólio Técnico</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Soluções digitais{" "}
                  <span className="bg-gradient-to-r from-[hsl(var(--accent-indigo))] to-[hsl(var(--accent-rose))] bg-clip-text text-transparent">
                    que funcionam.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="max-w-md text-lg text-muted-foreground">
                  Desenvolvemos interfaces, automações e sistemas sob medida.
                  Cada projeto construído com atenção a cada detalhe.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--accent-indigo))] text-xs font-bold text-white ring-2 ring-background">
                      KJ
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--accent-rose))] text-xs font-bold text-white ring-2 ring-background">
                      LG
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Keviny Joubert & Laryssa Gabriela
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projetos"
                    className="rounded-full bg-[hsl(var(--accent-indigo))] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[hsl(var(--accent-indigo)/0.9)]"
                  >
                    Ver Projetos
                  </a>
                  <a
                    href="#sobre"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    Sobre nós
                    <span className="text-[hsl(var(--accent-indigo))]">→</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right column — tech stack */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[hsl(var(--accent-rose)/0.6)]" />
                  <span className="h-3 w-3 rounded-full bg-[hsl(var(--accent-indigo)/0.4)]" />
                  <span className="ml-2 font-mono text-xs text-muted-foreground">stack.config</span>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {[
                    { icon: "⚛️", name: "React" },
                    { icon: "🔷", name: "TypeScript" },
                    { icon: "🟢", name: "Node.js" },
                    { icon: "🐍", name: "Python" },
                    { icon: "🗄️", name: "SQL" },
                    { icon: "🐳", name: "Docker" },
                    { icon: "☁️", name: "AWS" },
                    { icon: "🔌", name: "APIs REST" },
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-4 transition-colors hover:bg-accent"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-xs text-muted-foreground">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projetos" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-12 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Projetos
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="border-t border-border py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Quem fez isso
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Keviny & Laryssa
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Somos desenvolvedores apaixonados por criar experiências digitais
              que resolvem problemas reais. Este showcase reúne nossos projetos
              mais relevantes — cada um construído com cuidado e propósito.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 flex items-center justify-center gap-12">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(var(--accent-indigo))] text-lg font-bold text-white">
                  KJ
                </div>
                <span className="text-sm font-medium">Keviny Joubert</span>
                <span className="text-xs text-muted-foreground">Desenvolvedor</span>
              </div>

              <div className="h-12 w-px bg-border" />

              <div className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(var(--accent-rose))] text-lg font-bold text-white">
                  LG
                </div>
                <span className="text-sm font-medium">Laryssa Gabriela</span>
                <span className="text-xs text-muted-foreground">Desenvolvedora</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <span className="text-sm font-bold tracking-tighter">
            <span className="text-muted-foreground">SHOW</span>
            <span className="text-[hsl(var(--accent-indigo))]">CASE</span>
          </span>
          <span className="text-xs text-muted-foreground">
            © 2025 Keviny Joubert & Laryssa Gabriela
          </span>
        </div>
      </footer>
    </div>
  );
}
