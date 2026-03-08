import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell
} from "recharts"

interface Props {
  data: any[]
  xKey?: string
}

export default function StackedBarChart({
  data,
  xKey = "month"
}: Props) {

  const COLORS = [
    "#2563eb",
    "#10b981",
    "#f97316",
    "#8b5cf6",
    "#06b6d4",
    "#22c55e"
  ]

  if (!data?.length) return null

  const bars = Object.keys(data[0]).filter(
    key => key !== xKey
  )

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey={xKey} />

        <YAxis />

        <Tooltip />

        <Legend />

        {bars.map((bar, barIndex) => (
          <Bar
            key={bar}
            dataKey={bar}
            stackId="stack"
            fill={COLORS[barIndex % COLORS.length]}
          >
            {data.map((row, rowIndex) => {

              const visibleBars = bars.filter(b => row[b] > 0)
              const topBar = visibleBars[visibleBars.length - 1]

              const isTop = bar === topBar

              return (
                <Cell
                  key={`${rowIndex}-${bar}`}
                  radius={(isTop ? [6, 6, 0, 0] : [0, 0, 0, 0]) as any}
                />
              )

            })}
          </Bar>
        ))}

      </BarChart>
    </ResponsiveContainer>
  )
}