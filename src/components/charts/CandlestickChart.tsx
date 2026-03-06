import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Bar,
  Cell
} from "recharts"

interface Candle {
  date: string
  open: number
  close: number
  high: number
  low: number
}

interface Props {
  data: Candle[]
}

export function CandlestickChartComponent({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>

        <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />

        <XAxis
          dataKey="date"
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

        <Bar dataKey="close">

          {data.map((entry, index) => {
            const color = entry.close >= entry.open
              ? "#10b981"
              : "#ef4444"

            return <Cell key={index} fill={color} />
          })}

        </Bar>

      </ComposedChart>
    </ResponsiveContainer>
  )
}