import { BarChart3, PieChart, LineChart, ScatterChart } from "lucide-react"

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

    function detectColumnType(values: any[]) {

        let numberCount = 0
        let dateCount = 0
        let textCount = 0

        for (const v of values) {

            const value = String(v).trim()

            if (!value) continue

            const num = Number(value)

            if (!isNaN(num)) {
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

        if (!total) return "text"

        if (numberCount / total > 0.7) return "number"

        if (dateCount / total > 0.7) return "date"

        return "text"
    }

    function analyzeColumn(key: string) {

        const values = data
            .map(r => r[key])
            .filter(v => v !== null && v !== undefined && v !== "")

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

    const analysis = columns.map(analyzeColumn)

    const metrics = analysis.filter(c => c.isNumber)

    const dimensions = analysis.filter(
        c => c.isText && c.uniqueCount <= 30
    )

    const smallDimensions = analysis.filter(
        c => c.isText && c.uniqueCount <= 10
    )

    const dates = analysis.filter(c => c.isDate)

    const suggestions: SuggestionConfig[] = []

    function addSuggestion(s: SuggestionConfig) {

        const exists = suggestions.some(
            x => x.title === s.title
        )

        if (!exists && suggestions.length < 12) {
            suggestions.push(s)
        }
    }

    /*
    BAR CHARTS
    dimensão × métrica
    */

    for (const dim of dimensions) {

        for (const met of metrics) {

            addSuggestion({
                type: "bar",
                title: `${met.key} por ${dim.key}`,
                description: `Comparação de ${met.key} entre ${dim.key}`,
                icon: <BarChart3 size={18} />,
                config: {
                    type: "bar",
                    dimensions: [dim.key],
                    metric: met.key,
                    aggregation: "sum"
                }
            })

        }

    }

    /*
    COUNT por dimensão
    */

    for (const dim of dimensions) {

        addSuggestion({
            type: "count",
            title: `Quantidade por ${dim.key}`,
            description: "Contagem de registros",
            icon: <BarChart3 size={18} />,
            config: {
                type: "bar",
                dimensions: [dim.key],
                metric: dim.key,
                aggregation: "count"
            }
        })

    }

    /*
    PIE charts
    apenas para dimensões pequenas
    */

    for (const dim of smallDimensions) {

        for (const met of metrics) {

            addSuggestion({
                type: "pie",
                title: `Distribuição de ${met.key} por ${dim.key}`,
                description: "Participação percentual",
                icon: <PieChart size={18} />,
                config: {
                    type: "pie",
                    dimensions: [dim.key],
                    metric: met.key,
                    aggregation: "sum"
                }
            })

        }

    }

    /*
    STACKED BAR
    duas dimensões
    */

    for (let i = 0; i < dimensions.length; i++) {

        for (let j = i + 1; j < dimensions.length; j++) {

            for (const met of metrics) {

                addSuggestion({
                    type: "stacked",
                    title: `${met.key} por ${dimensions[i].key} e ${dimensions[j].key}`,
                    description: "Comparação entre duas dimensões",
                    icon: <BarChart3 size={18} />,
                    config: {
                        type: "bar",
                        dimensions: [
                            dimensions[i].key,
                            dimensions[j].key
                        ],
                        metric: met.key,
                        aggregation: "sum"
                    }
                })

            }

        }

    }

    /*
    LINE
    data × métrica
    */

    for (const d of dates) {

        for (const met of metrics) {

            addSuggestion({
                type: "line",
                title: `${met.key} ao longo de ${d.key}`,
                description: "Evolução temporal",
                icon: <LineChart size={18} />,
                config: {
                    type: "line",
                    dimensions: [d.key],
                    metric: met.key,
                    aggregation: "sum"
                }
            })

        }

    }

    /*
    SCATTER
    métrica × métrica
    */

    for (let i = 0; i < metrics.length; i++) {

        for (let j = i + 1; j < metrics.length; j++) {

            addSuggestion({
                type: "scatter",
                title: `${metrics[i].key} vs ${metrics[j].key}`,
                description: "Correlação entre métricas",
                icon: <ScatterChart size={18} />,
                config: {
                    type: "scatter",
                    dimensions: [],
                    metric: metrics[i].key,
                    aggregation: "avg"
                }
            })

        }

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
                <span className="text-sm font-medium">
                    {title}
                </span>
            </div>

            <p className="text-xs text-slate-500">
                {description}
            </p>

        </button>

    )

}