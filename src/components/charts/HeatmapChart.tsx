import { useState } from "react"

interface Props {
  data: any[]
}

function getColor(value: number) {
  if (value === 0) return "#f1f5f9"
  if (value < 20) return "#c7d2fe"
  if (value < 40) return "#a5b4fc"
  if (value < 60) return "#818cf8"
  if (value < 80) return "#6366f1"
  return "#4338ca"
}

export function HeatmapChartComponent({ data }: Props) {

  const cellSize = 28
  const gap = 4

  const width = data[0].values.length * (cellSize + gap)
  const height = data.length * (cellSize + gap)

  const [hover, setHover] = useState<any>(null)

  return (
    <div className="flex flex-col items-start">

      <div className="relative">

        <svg width={width} height={height}>

          {data.map((row, rowIndex) =>
            row.values.map((value: number, colIndex: number) => {

              const x = colIndex * (cellSize + gap)
              const y = rowIndex * (cellSize + gap)

              return (
                <rect
                  key={`${rowIndex}-${colIndex}`}
                  x={x}
                  y={y}
                  width={cellSize}
                  height={cellSize}
                  rx={6}
                  fill={getColor(value)}
                  className="transition-all hover:opacity-80 cursor-pointer"
                  onMouseEnter={() =>
                    setHover({
                      value,
                      x,
                      y
                    })
                  }
                  onMouseLeave={() => setHover(null)}
                />
              )
            })
          )}

        </svg>

        {hover && (
          <div
            style={{
              left: hover.x,
              top: hover.y - 40
            }}
            className="absolute bg-black text-white text-xs px-2 py-1 rounded shadow"
          >
            {hover.value}
          </div>
        )}

      </div>

      {/* legenda */}

      <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">

        <span>Low</span>

        {[0, 20, 40, 60, 80].map((v, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded"
            style={{ background: getColor(v) }}
          />
        ))}

        <span>High</span>

      </div>

    </div>
  )
}