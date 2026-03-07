import { BarChart3, PieChart, LineChart } from "lucide-react"

interface Props {
  data: any[]
}

export default function ChartSuggestions({ data }: Props) {

  return (
    <div className="p-4 space-y-3">

      <Suggestion
        icon={<BarChart3 size={18} />}
        title="Valores por categoria"
        description="Agrupar valores numéricos por texto"
      />

      <Suggestion
        icon={<LineChart size={18} />}
        title="Evolução ao longo do tempo"
        description="Detecta colunas de data automaticamente"
      />

      <Suggestion
        icon={<PieChart size={18} />}
        title="Distribuição de valores"
        description="Mostra participação percentual"
      />

    </div>
  )
}

function Suggestion({ icon, title, description }: any) {
  return (
    <button className="
        w-full text-left
        p-3
        rounded-lg
        border
        hover:bg-slate-50
        transition
      ">

      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="text-sm font-medium">{title}</span>
      </div>

      <p className="text-xs text-slate-500">
        {description}
      </p>

    </button>
  )
}