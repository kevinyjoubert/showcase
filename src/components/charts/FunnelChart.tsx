import {
  FunnelChart,
  Funnel,
  LabelList,
  Tooltip,
  ResponsiveContainer
} from "recharts"

interface Props {
  data: any[]
  dataKey: string
  nameKey: string
}

export function FunnelChartComponent({ data, dataKey, nameKey }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">

      <FunnelChart>

        <Tooltip />

        <Funnel
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          isAnimationActive
          fill="#6366f1"
        >

          <LabelList
            position="right"
            fill="#111827"
            stroke="none"
            dataKey={nameKey}
          />

        </Funnel>

      </FunnelChart>

    </ResponsiveContainer>
  )
}