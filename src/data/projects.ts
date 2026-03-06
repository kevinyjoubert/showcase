export type Project = {
  title: string
  description: string
  route: string
  techs: string[]
  image: string
}

export const projects: Project[] = [
  {
    title: "Sistema Linux",
    description: "Sistema desenvolvido 1",
    route: "/projects/sistema1",
    techs: ["React", "Java", "Oracle"],
    image: "/images/erp.jpg"
  },
  {
    title: "Gráficos",
    description: "Uma demonstração completa de visualizações de dados interativos em Dashboards.",
    route: "/projects/dashboards/Charts",
    techs: ["React", "ChartJS"],
    image: "/images/erp.jpg"
  },
  {
    title: "Sistema 3",
    description: "Sistema desenvolvido 3",
    route: "/projects/sistema3",
    techs: ["React", "AI"],
    image: "/images/erp.jpg"
  }
]