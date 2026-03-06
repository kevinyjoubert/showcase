import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

interface Props {
  data: any[]
  xKey: string
  yKey: string
}

export function HistogramChartComponent({ data, xKey, yKey }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>

        <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />

        <XAxis
          dataKey={xKey}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
        />

        <Tooltip />

        <Bar
          dataKey={yKey}
          fill="#2563eb"
          radius={[4, 4, 0, 0]}
        />

      </BarChart>
    </ResponsiveContainer>
  )
}