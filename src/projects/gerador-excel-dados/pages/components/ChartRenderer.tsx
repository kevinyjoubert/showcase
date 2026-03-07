import { BarChartComponent } from "../../../../components/charts/BarChart"
// import { LineChart } from "../../../../components/charts/LineChart"
// import { PieChart } from "../../../../components/charts/PieChart"

interface Props {
  config: {
    type: string
    x: string
    y: string
  }
  data: any[]
}

export default function ChartRenderer({ config, data }: Props) {

  if (config.type === "bar") {
    return (
      <div className="h-[300px] w-full bg-white rounded-lg border p-4">
        <BarChartComponent
          data={data}
          xKey={config.x}
          bars={[
            {
              key: config.y,
              color: "#2563eb"
            }
          ]}
        />
      </div>
    )
  }

  // if (config.type === "line") {
  //   return (
  //     <LineChart
  //       data={data}
  //       xKey={config.x}
  //       lines={[{ key: config.y, color: "#10b981" }]}
  //     />
  //   )
  // }

  // if (config.type === "pie") {
  //   return (
  //     <PieChart
  //       data={data}
  //       dataKey={config.y}
  //       nameKey={config.x}
  //     />
  //   )
  // }

  return null
}