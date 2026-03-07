import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"

interface Props {
  data: any[]
}

export default function StackedBarChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">

      <BarChart data={data}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Legend />

        <Bar
          dataKey="web"
          stackId="platform"
          fill="#2563eb"
        />

        <Bar
          dataKey="mobile"
          stackId="platform"
          fill="#10b981"
        />

        <Bar
          dataKey="desktop"
          stackId="platform"
          fill="#f97316"
          radius={[6, 6, 0, 0]}
        />

      </BarChart>

    </ResponsiveContainer>
  )
}