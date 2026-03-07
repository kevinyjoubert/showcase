import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"

interface Props {
  data: any[]
  xKey: string
  yKey: string
  zKey: string
}

export function BubbleChartComponent({ data, xKey, yKey, zKey }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart>

        <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />

        <XAxis
          type="number"
          dataKey={xKey}
          name="X"
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          type="number"
          dataKey={yKey}
          name="Y"
          axisLine={false}
          tickLine={false}
        />

        <ZAxis
          type="number"
          dataKey={zKey}
          range={[60, 400]}
          name="Size"
        />

        <Tooltip />

        <Legend />

        <Scatter
          name="Dataset"
          data={data}
          fill="#2563eb"
        />

      </ScatterChart>
    </ResponsiveContainer>
  )
}