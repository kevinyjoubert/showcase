import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"

interface SeriesItem {
  key?: string
  color: string
  name?: string
  data: any[]
}

interface Props {
  series: SeriesItem[]
  xKey: string
  yKey: string
}

export function ScatterChartComponent({ series, xKey, yKey }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart>

        <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />

        <XAxis
          type="number"
          dataKey={xKey}
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          type="number"
          dataKey={yKey}
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          contentStyle={{
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />

        <Legend iconType="circle" />

        {series.map((item, index) => (
          <Scatter
            key={index}
            name={item.name}
            data={item.data}
            fill={item.color}
          />
        ))}

      </ScatterChart>
    </ResponsiveContainer>
  )
}