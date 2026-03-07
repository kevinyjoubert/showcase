import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/homepage/ProjectCard";
import ScrollReveal from "../components/homepage/ScrollReveal";
import ContactModal from "../components/homepage/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

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
            <button
              onClick={() => setIsContactOpen(true)}
              className="rounded-full border border-[hsl(var(--accent-indigo)/0.3)] px-4 py-2 text-xs font-medium text-[hsl(var(--accent-indigo))] transition-all duration-200 hover:bg-[hsl(var(--accent-indigo-light))]"
            >
              Contato
            </button>
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
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--accent-purple-red))] text-xs font-bold text-white ring-2 ring-background">
                      BP
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Keviny Joubert, Laryssa Gabriela & Beatriz Paiva
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
            <div className="mb-16 text-center">
              <div className="mx-auto mb-4 h-px w-12 bg-gradient-to-r from-transparent via-[hsl(var(--accent-indigo))] to-transparent" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Projetos
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-[hsl(var(--accent-rose))] to-transparent" />
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
      <section id="sobre" className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-4 text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Quem fez isso
              </span>
            </div>
            <h2 className="mb-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Nossa Equipe
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
              Keviny e Laryssa cuidam do desenvolvimento, enquanto Beatriz cuida
              de toda a parte comercial — de clientes a contratos.
            </p>
          </ScrollReveal>

          

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Keviny */}
            <ScrollReveal delay={0.15}>
              <div className="group rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-[hsl(var(--accent-indigo)/0.4)] hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(var(--accent-indigo))] text-lg font-bold text-white ring-4 ring-[hsl(var(--accent-indigo)/0.15)]">
                  KJ
                </div>
                <h4 className="text-base font-semibold text-foreground">Keviny Joubert</h4>
                <p className="mt-1 text-sm text-[hsl(var(--accent-indigo))]">Desenvolvedor Full Stack</p>
              </div>
            </ScrollReveal>

            {/* Laryssa */}
            <ScrollReveal delay={0.25}>
              <div className="group rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-[hsl(var(--accent-rose)/0.4)] hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(var(--accent-rose))] text-lg font-bold text-white ring-4 ring-[hsl(var(--accent-rose)/0.15)]">
                  LG
                </div>
                <h4 className="text-base font-semibold text-foreground">Laryssa Gabriela</h4>
                <p className="mt-1 text-sm text-[hsl(var(--accent-rose))]">Desenvolvedora Full Stack</p>
              </div>
            </ScrollReveal>

            {/* Beatriz */}
            <ScrollReveal delay={0.35}>
              <div className="group rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-[hsl(var(--accent-purple-red)/0.4)] hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(var(--accent-purple-red))] text-lg font-bold text-white ring-4 ring-[hsl(var(--accent-purple-red)/0.15)]">
                  BP
                </div>
                <h4 className="text-base font-semibold text-foreground">Beatriz Paiva</h4>
                <p className="mt-1 text-sm text-[hsl(var(--accent-purple-red))]">Executiva Comercial</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Responsável por vendas, captação de clientes e gestão de contratos.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="relative overflow-hidden border-t border-border py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[hsl(var(--accent-purple-red)/0.06)] blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Vamos trabalhar juntos?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground">
                Entre em contato com a Beatriz para orçamentos, parcerias e contratos.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mx-auto mt-12 max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[hsl(var(--accent-purple-red))] text-xl font-bold text-white ring-4 ring-[hsl(var(--accent-purple-red)/0.2)]">
                BP
              </div>
              <h3 className="text-lg font-semibold text-foreground">Beatriz Paiva</h3>
              <p className="mt-1 text-sm text-[hsl(var(--accent-purple-red))]">Executiva Comercial</p>

              <div className="mt-6">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--accent-purple-red))] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  ✉️ Enviar mensagem
                </button>
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
            © 2025 Keviny Joubert, Laryssa Gabriela & Beatriz Paiva.
          </span>
        </div>
      </footer>
    </div>
  );
}