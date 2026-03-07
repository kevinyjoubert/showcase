import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts"

interface BarItem {
  key: string
  color: string
}

interface Props {
  data: any[]
  xKey: string
  bars: BarItem[]
}

export function BarChartComponent({ data, xKey, bars }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey={xKey} />

        <YAxis />

        <Tooltip />

        <Legend />

        {bars.map((bar) => (
          <Bar
            key={bar.key}
            dataKey={bar.key}
            fill={bar.color}
            radius={[6, 6, 0, 0]}
          />
        ))}

      </BarChart>
    </ResponsiveContainer>
  )
}