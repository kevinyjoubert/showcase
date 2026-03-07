import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"

interface StreamItem {
  key: string
  color: string
}

interface Props {
  data: any[]
  xKey: string
  streams: StreamItem[]
}

export function StreamChartComponent({ data, xKey, streams }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        stackOffset="wiggle"
        margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
      >
        <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />

        <XAxis
          dataKey={xKey}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
        />

        <YAxis hide />

        <Tooltip
          contentStyle={{
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />

        <Legend iconType="circle" />

        {streams.map((stream) => (
          <Area
            key={stream.key}
            type="monotone"
            dataKey={stream.key}
            stackId="1"
            stroke={stream.color}
            fill={stream.color}
            fillOpacity={0.8}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  )
}