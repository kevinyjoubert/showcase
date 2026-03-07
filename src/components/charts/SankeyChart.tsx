import {
  Sankey,
  Tooltip,
  ResponsiveContainer
} from "recharts"

interface Props {
  data: any
}

export function SankeyChartComponent({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <Sankey
        data={data}
        nodePadding={30}
        linkCurvature={0.5}
      >
        <Tooltip />
      </Sankey>
    </ResponsiveContainer>
  )
}