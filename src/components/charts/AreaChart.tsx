import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts"

interface AreaItem {
  key: string
  color: string
}

interface Props {
  data: any[]
  xKey: string
  areas: AreaItem[]
}

export function AreaChartComponent({ data, xKey, areas }: Props) {

  return (
    <ResponsiveContainer width="100%" height="100%">

      <AreaChart data={data}>

        {/* GRADIENTS */}
        <defs>
          {areas.map((area) => (
            <linearGradient
              key={area.key}
              id={`gradient-${area.key}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor={area.color} stopOpacity={0.35}/>
              <stop offset="95%" stopColor={area.color} stopOpacity={0}/>
            </linearGradient>
          ))}
        </defs>

        <CartesianGrid
          strokeDasharray="4 4"
          stroke="#e5e7eb"
        />

        <XAxis
          dataKey={xKey}
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          contentStyle={{
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />

        <Legend iconType="circle" />

        {areas.map((area) => (
          <Area
            key={area.key}
            type="monotone"
            dataKey={area.key}
            stroke={area.color}
            fill={`url(#gradient-${area.key})`}
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5 }}
          />
        ))}

      </AreaChart>

    </ResponsiveContainer>
  )
}