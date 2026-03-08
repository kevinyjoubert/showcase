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
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--accent-purple-red))] text-xs font-bold text-white ring-2 ring-background">
                                            BP
                                        </div>
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--accent-rose))] text-xs font-bold text-white ring-2 ring-background">
                                            LG
                                        </div>
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--accent-indigo))] text-xs font-bold text-white ring-2 ring-background">
                                            KJ
                                        </div>
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        Beatriz Paiva, Laryssa Gabriela & Keviny Joubert
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
                                        className="flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-[hsl(var(--accent-indigo)/0.3)] hover:bg-[hsl(var(--accent-indigo-light))]"
                                    >
                                        Sobre nós
                                        <span className="text-[hsl(var(--accent-indigo))]">→</span>
                                    </a>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right column — tech stack */}
                        <ScrollReveal delay={0.15} direction="right">
                            <div className="relative">
                                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[hsl(var(--accent-indigo)/0.3)] via-transparent to-[hsl(var(--accent-rose)/0.2)] blur-sm" />
                                <div className="relative rounded-2xl border border-border/60 bg-card p-6 shadow-xl shadow-[hsl(var(--accent-indigo)/0.06)]">
                                    <div className="mb-5 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <div className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--accent-rose)/0.7)]" />
                                            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                                        </div>
                                        <span className="font-mono text-[11px] text-muted-foreground/60">
                                            stack.config.ts
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-4 gap-2.5">
                                        {[
                                            { icon: "🤖", name: "IA & LLMs" },
                                            { icon: "📊", name: "Dashboards" },
                                            { icon: "⚙️", name: "Automações" },
                                            { icon: "🌐", name: "Web Apps" },
                                            { icon: "🔗", name: "APIs" },
                                            { icon: "🗄️", name: "Dados & SQL" },
                                            { icon: "☁️", name: "Cloud AWS" },
                                            { icon: "🐳", name: "DevOps" },
                                        ].map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="group flex flex-col items-center gap-1.5 rounded-xl border border-border/50 bg-[hsl(var(--bg))] p-3 transition-all duration-200 hover:border-[hsl(var(--accent-indigo)/0.4)] hover:bg-[hsl(var(--accent-indigo-light))] hover:shadow-sm"
                                            >
                                                <span className="text-xl">{tech.icon}</span>
                                                <span className="text-[10px] font-medium text-muted-foreground group-hover:text-[hsl(var(--accent-indigo))]">
                                                    {tech.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 rounded-lg bg-[hsl(var(--bg))] px-3 py-2.5 font-mono text-[11px] whitespace-nowrap">
                                        <span className="text-[hsl(var(--accent-rose))]">const</span>
                                        <span className="text-foreground/70"> team </span>
                                        <span className="text-[hsl(var(--accent-indigo))]">=</span>
                                        <span className="text-emerald-500"> ["Beatriz Paiva", "Laryssa Gabriela", "Keviny Joubert"]</span>
                                    </div>
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

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                        {[
                            {
                                initials: "BP",
                                name: "Beatriz Paiva",
                                role: "Executiva Comercial",
                                desc: "Vendas, captação de clientes e contratos.",
                                color: "var(--accent-purple-red)",
                                delay: 0.26,
                            },
                            {
                                initials: "LG",
                                name: "Laryssa Gabriela",
                                role: "Desenvolvedora Full Stack",
                                desc: "Arquitetura, integrações, UX e Banco de Dados.",
                                color: "var(--accent-rose)",
                                delay: 0.18,
                            },
                            {
                                initials: "KJ",
                                name: "Keviny Joubert",
                                role: "Desenvolvedor Full Stack",
                                desc: "Arquitetura, integrações, UX e Banco de Dados.",
                                color: "var(--accent-indigo)",
                                delay: 0.1,
                            },
                        ].map((member) => (
                            <ScrollReveal key={member.name} delay={member.delay}>
                                <div className="group relative h-full flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                                    {/* Corner accent */}
                                    <div
                                        className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-10 transition-opacity group-hover:opacity-20"
                                        style={{ backgroundColor: `hsl(${member.color})` }}
                                    />

                                    <div className="relative flex flex-col flex-1">

                                        <div
                                            className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-base font-black text-white"
                                            style={{
                                                background: `linear-gradient(135deg, hsl(${member.color}) 0%, hsl(${member.color} / 0.7) 100%)`,
                                                boxShadow: `0 8px 24px hsl(${member.color} / 0.3)`,
                                            }}
                                        >
                                            {member.initials}
                                        </div>

                                        <h4 className="text-base font-bold text-foreground">
                                            {member.name}
                                        </h4>

                                        <p
                                            className="mt-0.5 text-xs font-semibold"
                                            style={{ color: `hsl(${member.color})` }}
                                        >
                                            {member.role}
                                        </p>

                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                                            {member.desc}
                                        </p>

                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contato" className="relative border-t border-border py-28">
                <div className="mx-auto max-w-6xl px-6">
                    <ScrollReveal>
                        <div className="relative mx-auto max-w-2xl text-center">
                            {/* Subtle decorative line */}
                            <div className="mx-auto mb-8 h-16 w-px bg-gradient-to-b from-transparent via-[hsl(var(--accent-indigo)/0.4)] to-[hsl(var(--accent-indigo))]" />

                            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                                Próximo passo
                            </p>

                            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                                Vamos criar algo{" "}
                                <span className="bg-gradient-to-r from-[hsl(var(--accent-indigo))] to-[hsl(var(--accent-rose))] bg-clip-text text-transparent">
                                    incrível?
                                </span>
                            </h2>

                            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                                Converse com a Beatriz sobre seu projeto. Sem compromisso, sem burocracia.
                            </p>

                            <div className="mt-10">
                                <button
                                    onClick={() => setIsContactOpen(true)}
                                    className="group relative inline-flex items-center gap-3 rounded-full border border-[hsl(var(--accent-indigo)/0.2)] bg-background px-8 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:border-[hsl(var(--accent-indigo)/0.5)] hover:shadow-[0_0_40px_hsl(var(--accent-indigo)/0.1)]"
                                >
                                    <span
                                        className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(var(--accent-indigo)), hsl(var(--accent-rose)))",
                                        }}
                                    >
                                        BP
                                    </span>
                                    Falar com Beatriz Paiva
                                    <span className="text-[hsl(var(--accent-indigo))] transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </button>
                            </div>

                            {/* Subtle decorative line bottom */}
                            <div className="mx-auto mt-8 h-16 w-px bg-gradient-to-b from-[hsl(var(--accent-indigo))] via-[hsl(var(--accent-indigo)/0.4)] to-transparent" />
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
                        © 2026 Beatriz Paiva, Laryssa Gabriela & Keviny Joubert.
                    </span>
                </div>
            </footer>
        </div>
    );
}