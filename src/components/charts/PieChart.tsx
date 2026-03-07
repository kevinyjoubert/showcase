import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"

interface Props {
  data: any[]
  dataKey: string
  nameKey: string
}

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4"
]

export function PieChartComponent({ data, dataKey, nameKey }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">

      <PieChart>

        <Tooltip
          contentStyle={{
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />

        <Legend iconType="circle" />

        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          innerRadius={0}
          outerRadius="80%"
          paddingAngle={3}
          label
        >
          {data.map((_, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

      </PieChart>

    </ResponsiveContainer>
  )
}