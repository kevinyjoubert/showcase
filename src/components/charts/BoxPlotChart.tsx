import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Bar
} from "recharts"

interface Props {
  data: any[]
}

export function BoxPlotChartComponent({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>

        <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="q1"
          fill="#93c5fd"
          stackId="a"
        />

        <Bar
          dataKey="median"
          fill="#2563eb"
          stackId="a"
        />

        <Bar
          dataKey="q3"
          fill="#1e40af"
          stackId="a"
        />

      </ComposedChart>
    </ResponsiveContainer>
  )
}