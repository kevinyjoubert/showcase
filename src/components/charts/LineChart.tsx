import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts"

interface LineItem {
  key: string
  color: string
}

interface Props {
  data: any[]
  xKey: string
  lines: LineItem[]
}

export function LineChartComponent({ data, xKey, lines }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>

        <CartesianGrid
          strokeDasharray="4 4"
          stroke="#e5e7eb"
        />

        <XAxis
          dataKey={xKey}
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          contentStyle={{
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />

        <Legend
          iconType="circle"
          wrapperStyle={{ fontSize: "13px" }}
        />

        {lines.map((line) => (
          <Line
            key={line.key}
            type="monotone"
            dataKey={line.key}
            stroke={line.color}
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        ))}

      </LineChart>
    </ResponsiveContainer>
  )
}