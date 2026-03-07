import {
  Treemap,
  ResponsiveContainer,
  Tooltip
} from "recharts"

interface Props {
  data: any[]
  dataKey: string
}

export function TreemapChartComponent({ data, dataKey }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <Treemap
        data={data}
        dataKey={dataKey}
        stroke="#fff"
        fill="#2563eb"
      >
        <Tooltip
          contentStyle={{
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />
      </Treemap>
    </ResponsiveContainer>
  )
}