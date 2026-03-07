import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"

interface StepItem {
  key: string
  color: string
}

interface Props {
  data: any[]
  xKey: string
  steps: StepItem[]
}

export function StepChartComponent({ data, xKey, steps }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>

        <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />

        <XAxis
          dataKey={xKey}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
        />

        <Tooltip
          contentStyle={{
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />

        <Legend iconType="circle" />

        {steps.map((step) => (
          <Line
            key={step.key}
            type="stepAfter"
            dataKey={step.key}
            stroke={step.color}
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        ))}

      </LineChart>
    </ResponsiveContainer>
  )
}