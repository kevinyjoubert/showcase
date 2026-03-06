export type Project = {
  title: string;
  description: string;
  techs: string[];
  slug: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Sistema Desktop Linux",
    description:
      "Simulação de um ambiente desktop Linux completo, com gerenciador de janelas, terminal e aplicativos integrados.",
    techs: ["React", "TypeScript", "Tailwind"],
    slug: "sistema1",
    image: "/placeholder.svg",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Painel de análise de dados com gráficos interativos, filtros dinâmicos e exportação de relatórios.",
    techs: ["React", "Recharts", "Node.js"],
    slug: "dashboard",
    image: "/placeholder.svg",
  },
  {
    title: "API Gateway",
    description:
      "Gateway de APIs REST com autenticação, rate limiting e documentação automática.",
    techs: ["Node.js", "Docker", "PostgreSQL"],
    slug: "api-gateway",
    image: "/placeholder.svg",
  }
];
