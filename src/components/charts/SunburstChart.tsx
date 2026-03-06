import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts"

interface Props {
  innerData: any[]
  outerData: any[]
}

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4"
]

export function SunburstChartComponent({ innerData, outerData }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">

      <PieChart>

        <Tooltip />

        {/* CENTRO */}

        <Pie
          data={innerData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius="0%"
          outerRadius="35%"
          paddingAngle={2}
        >
          {innerData.map((_, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        {/* ANEL EXTERNO */}

        <Pie
          data={outerData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="80%"
          paddingAngle={1}
        >
          {outerData.map((_, index) => (
            <Cell
              key={index}
              fill={COLORS[(index + 2) % COLORS.length]}
            />
          ))}
        </Pie>

      </PieChart>

    </ResponsiveContainer>
  )
}