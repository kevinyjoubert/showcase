import { useState } from "react"

interface Props {
  columns: string[]
  onCreateChart: (config: {
    type: string
    x: string
    y: string
  }) => void
}

export default function ChartBuilder({ columns, onCreateChart }: Props) {

  const [x, setX] = useState("")
  const [y, setY] = useState("")
  const [type, setType] = useState("bar")

  function handleCreate() {
    if (!x || !y) return

    onCreateChart({
      type,
      x,
      y
    })
  }

  return (
    <div className="p-4 space-y-3">

      <h3 className="text-sm font-semibold">
        Criar gráfico
      </h3>

      <select
        value={x}
        onChange={(e) => setX(e.target.value)}
        className="w-full border rounded-md p-2 text-sm"
      >
        <option value="">Eixo X</option>
        {columns.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select
        value={y}
        onChange={(e) => setY(e.target.value)}
        className="w-full border rounded-md p-2 text-sm"
      >
        <option value="">Eixo Y</option>
        {columns.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full border rounded-md p-2 text-sm"
      >
        <option value="bar">Barra</option>
        <option value="line">Linha</option>
        <option value="pie">Pizza</option>
      </select>

      <button
        onClick={handleCreate}
        className="w-full bg-blue-600 text-white rounded-md py-2 text-sm hover:bg-blue-700"
      >
        Gerar gráfico
      </button>

    </div>
  )
}