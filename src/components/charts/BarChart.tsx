import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  LabelList
} from "recharts"

interface BarItem {
  key: string
  color: string
}

interface Props {
  data: any[]
  xKey: string
  bars: BarItem[]
  children?: React.ReactNode
}

export function BarChartComponent({ data, xKey, bars, children }: Props) {
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
          >

            {children}

            <LabelList
              dataKey={bar.key}
              position="top"
              fontSize={12}
              fill="#374151"
            />

          </Bar>
        ))}

      </BarChart>
    </ResponsiveContainer>
  )
}