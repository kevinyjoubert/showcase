import {
  AreaChart,
  Area,
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

export function ViolinChartComponent({ data, xKey, yKey }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>

        <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />

        <XAxis dataKey={xKey} />

        <YAxis />

        <Tooltip />

        <Area
          type="monotone"
          dataKey={yKey}
          stroke="#9333ea"
          fill="#9333ea55"
        />

      </AreaChart>
    </ResponsiveContainer>
  )
}