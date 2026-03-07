import { useState } from "react"

interface Props {
  columns: string[]
  onCreateChart: (config: {
    type: string
    dimensions: string[]
    metric: string
    aggregation: "sum" | "count" | "avg"
  }) => void
}

export default function ChartBuilder({ columns, onCreateChart }: Props) {

  const [dimensions, setDimensions] = useState<string[]>([])
  const [metric, setMetric] = useState("")
  const [aggregation, setAggregation] = useState<"sum" | "count" | "avg">("sum")
  const [type, setType] = useState("bar")

  function handleCreate() {
    if (dimensions.length === 0 || !metric) return

    onCreateChart({
      type,
      dimensions,
      metric,
      aggregation
    })
  }

  function handleDimensionChange(e: React.ChangeEvent<HTMLSelectElement>) {

    const selected = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    )

    setDimensions(selected)
  }

  return (
    <div className="p-5 space-y-5">

      <div>
        <h3 className="text-xl font-semibold text-slate-800">
          Criar gráfico
        </h3>

        <p className="text-xs text-slate-500 pl-1">
          Configure dimensões, métricas e agregação
        </p>
      </div>


      {/* DIMENSÕES */}
      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-600">
          Dimensões (agrupamento)
        </label>

        <select
          multiple
          value={dimensions}
          onChange={handleDimensionChange}
          className="
            w-full
            border border-slate-200
            rounded-lg
            p-2
            text-sm
            h-28
            bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          {columns.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <p className="text-[11px] text-slate-400">
          Segure CTRL para selecionar múltiplos
        </p>
      </div>


      {/* MÉTRICA */}
      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-600">
          Métrica
        </label>

        <select
          value={metric}
          onChange={(e) => setMetric(e.target.value)}
          className="
            w-full
            border border-slate-200
            rounded-lg
            p-2
            text-sm
            bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <option value="">Selecione uma métrica</option>

          {columns.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>


      {/* AGREGAÇÃO */}
      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-600">
          Tipo de agregação
        </label>

        <select
          value={aggregation}
          onChange={(e) =>
            setAggregation(e.target.value as "sum" | "count" | "avg")
          }
          className="
            w-full
            border border-slate-200
            rounded-lg
            p-2
            text-sm
            bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <option value="sum">Soma</option>
          <option value="count">Contagem</option>
          <option value="avg">Média</option>
        </select>
      </div>


      {/* TIPO DE GRÁFICO */}
      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-600">
          Tipo de gráfico
        </label>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="
            w-full
            border border-slate-200
            rounded-lg
            p-2
            text-sm
            bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <option value="bar">Barra</option>
          <option value="line">Linha</option>
          <option value="pie">Pizza</option>
        </select>
      </div>


      {/* BOTÃO */}
      <button
        onClick={handleCreate}
        disabled={!metric || dimensions.length === 0}
        className="
          w-full
          bg-blue-600
          text-white
          rounded-lg
          py-2.5
          text-sm
          font-medium
          hover:bg-blue-700
          transition
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
      >
        Gerar gráfico
      </button>

    </div>
  )
}