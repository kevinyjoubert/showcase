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
    title: "Dashboards Analíticos",
    description:
      "Dashboard interativo para exploração de dados em tempo real, com gráficos dinâmicos, filtros avançados e geração de relatórios. Projetado para transformar grandes volumes de dados em insights claros para tomada de decisão.",
    techs: ["React", "Recharts", "Node.js"],
    slug: "dashboards",
    image: "public/images/dashboards/dashboards.jpg",
  },
  {
    title: "Gerador de Dashboard a partir de Excel",
    description:
      "Envie um Excel e veja dashboards e insights sendo criados automaticamente..",
    techs: ["React", "Recharts", "Node.js"],
    slug: "gerador-excel-dados",
    image: "public/images/gerador-excel-dados/gerador-excel-dados.jpg",
  },
  {
    title: "API Gateway",
    description:
      "Gateway de APIs REST com autenticação, rate limiting e documentação automática.",
    techs: ["Node.js", "Docker", "PostgreSQL"],
    slug: "api-gateway",
    image: "/placeholder.svg",
  }
,
  {
    title: 'Análise de Contratos',
    description: 'Sistema de análise de contratos jurídicos com IA para identificar cláusulas, riscos e oportunidades de melhoria.',
    techs: ['IA', 'Jurídico', 'PDF', 'Gemini'],
    slug: 'contract-analysis',
    image: "/placeholder.svg",
  }
];