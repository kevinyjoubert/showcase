import { BarChart3, PieChart, LineChart } from "lucide-react"

interface Props {
  data: any[]
  onCreateChart: (config: {
    type: string
    dimensions: string[]
    metric: string
    aggregation: "sum" | "count" | "avg"
  }) => void
}

type SuggestionConfig = {
  type: string
  title: string
  description: string
  icon: any
  config: {
    type: string
    dimensions: string[]
    metric: string
    aggregation: "sum" | "count" | "avg"
  }
}

export default function ChartSuggestions({ data, onCreateChart }: Props) {

  if (!data.length) return null

  const columns = Object.keys(data[0])

  function analyzeColumn(key: string) {

    const values = data
      .map(r => r[key])
      .filter(v => v !== null && v !== undefined)

    const unique = new Set(values)

    const type = detectColumnType(values)

    return {
      key,
      uniqueCount: unique.size,
      total: values.length,
      isNumber: type === "number",
      isDate: type === "date",
      isText: type === "text"
    }
  }

  function detectColumnType(values: any[]) {

    let numberCount = 0
    let dateCount = 0
    let textCount = 0

    for (const v of values) {

      if (v === null || v === undefined || v === "") continue

      const value = String(v).trim()

      const num = Number(value)

      if (!isNaN(num) && value !== "") {
        numberCount++
        continue
      }

      const date = Date.parse(value)

      if (!isNaN(date)) {
        dateCount++
        continue
      }

      textCount++
    }

    const total = numberCount + dateCount + textCount

    if (total === 0) return "text"

    if (numberCount / total > 0.7) return "number"

    if (dateCount / total > 0.7) return "date"

    return "text"
  }

  const analysis = columns.map(analyzeColumn)

  const metrics = analysis.filter(c => c.isNumber)

  const dimensions = analysis.filter(
    c => c.isText && c.uniqueCount < 20
  )

  const dates = analysis.filter(c => c.isDate)

  const suggestions: SuggestionConfig[] = []

  // BAR
  if (dimensions.length && metrics.length) {

    suggestions.push({
      type: "bar",
      title: `${metrics[0].key} por ${dimensions[0].key}`,
      description: "Agrupar valores numéricos por categoria",
      icon: <BarChart3 size={18} />,
      config: {
        type: "bar",
        dimensions: [dimensions[0].key],
        metric: metrics[0].key,
        aggregation: "sum"
      }
    })

  }

  // LINE
  if (dates.length && metrics.length) {

    suggestions.push({
      type: "line",
      title: `${metrics[0].key} ao longo do tempo`,
      description: "Evolução temporal",
      icon: <LineChart size={18} />,
      config: {
        type: "line",
        dimensions: [dates[0].key],
        metric: metrics[0].key,
        aggregation: "sum"
      }
    })

  }

  // PIE
  if (dimensions.length && metrics.length) {

    suggestions.push({
      type: "pie",
      title: `Distribuição de ${metrics[0].key}`,
      description: "Participação percentual",
      icon: <PieChart size={18} />,
      config: {
        type: "pie",
        dimensions: [dimensions[0].key],
        metric: metrics[0].key,
        aggregation: "sum"
      }
    })

  }

  // STACKED BAR
  if (dimensions.length > 1 && metrics.length) {

    suggestions.push({
      type: "stacked",
      title: `${metrics[0].key} por ${dimensions[0].key} e ${dimensions[1].key}`,
      description: "Comparação entre categorias",
      icon: <BarChart3 size={18} />,
      config: {
        type: "bar",
        dimensions: [dimensions[0].key, dimensions[1].key],
        metric: metrics[0].key,
        aggregation: "sum"
      }
    })

  }

  return (
    <div className="p-4 space-y-3">

      {suggestions.map((s, i) => (

        <Suggestion
          key={i}
          icon={s.icon}
          title={s.title}
          description={s.description}
          onClick={() => onCreateChart(s.config)}
        />

      ))}

      {!suggestions.length && (
        <p className="text-xs text-slate-400">
          Nenhuma sugestão automática encontrada
        </p>
      )}

    </div>
  )
}

function Suggestion({ icon, title, description, onClick }: any) {

  return (
    <button
      onClick={onClick}
      className="
        w-full text-left
        p-3
        rounded-lg
        border
        hover:bg-slate-50
        transition
      "
    >

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