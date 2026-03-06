import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts"

interface RadarItem {
  key: string
  color: string
}

interface Props {
  data: any[]
  angleKey: string
  series: RadarItem[]
}

export function RadarChartComponent({ data, angleKey, series }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data}>

        <PolarGrid stroke="#e5e7eb" />

        <PolarAngleAxis
          dataKey={angleKey}
          tick={{ fontSize: 12 }}
        />

        <PolarRadiusAxis
          tick={{ fontSize: 10 }}
          axisLine={false}
        />

        <Tooltip
          contentStyle={{
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />

        <Legend iconType="circle" />

        {series.map((item) => (
          <Radar
            key={item.key}
            dataKey={item.key}
            stroke={item.color}
            fill={item.color}
            fillOpacity={0.25}
            strokeWidth={2}
          />
        ))}

      </RadarChart>
    </ResponsiveContainer>
  )
}