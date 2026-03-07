import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer
} from "recharts"

interface Props {
  value: number
  max?: number
}

export function RadialGaugeChartComponent({
  value,
  max = 100
}: Props) {

  const percentage = (value / max) * 100

  const data = [
    {
      name: "progress",
      value: percentage
    }
  ]

  return (
    <div className="relative w-full h-full">

      <ResponsiveContainer width="100%" height="100%">

        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          data={data}
          startAngle={180}
          endAngle={0}
        >

          <RadialBar
            dataKey="value"
            cornerRadius={10}
            fill="#6366f1"
          />

        </RadialBarChart>

      </ResponsiveContainer>

      <div className="absolute inset-0 flex items-center justify-center">

        <span className="text-xl font-semibold">
          {percentage.toFixed(0)}%
        </span>

      </div>

    </div>
  )
}