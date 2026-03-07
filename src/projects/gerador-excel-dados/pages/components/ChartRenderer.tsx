import { BarChartComponent } from "../../../../components/charts/BarChart"
import StackedBarChart from "../../../../components/charts/StackedBarChart"
import { LineChartComponent } from "../../../../components/charts/LineChart"

import ScrollReveal from "../../../../components/charts/ui/ScrollReveal"
import ExpandableChartCard from "../../../../components/charts/ui/ExpandableChartCard"

import { Cell } from "recharts"

interface Props {
  config: {
    type: string
    dimensions: string[]
    metric: string
    aggregation: "sum" | "count" | "avg"
  }
  data: any[]
}

/* ------------------------------------------------ */
/* AGGREGATION PARA 1 DIMENSÃO */
/* ------------------------------------------------ */

function aggregateSingleDimension(
  data: any[],
  dimension: string,
  metric: string,
  aggregation: "sum" | "count" | "avg"
) {

  const map: Record<string, number[]> = {}

  for (const row of data) {

    const key = row[dimension]

    if (!map[key]) map[key] = []

    const value = Number(row[metric]) || 0

    map[key].push(value)
  }

  return Object.entries(map).map(([key, values]) => {

    let result = 0

    if (aggregation === "sum")
      result = values.reduce((a, b) => a + b, 0)

    if (aggregation === "avg")
      result = values.reduce((a, b) => a + b, 0) / values.length

    if (aggregation === "count")
      result = values.length

    return {
      [dimension]: key,
      [metric]: result
    }

  })
}

/* ------------------------------------------------ */
/* AGGREGATION PARA STACKED BAR (2 DIMENSÕES) */
/* ------------------------------------------------ */

function aggregateStacked(
  data: any[],
  dimX: string,
  dimStack: string,
  metric: string,
  aggregation: "sum" | "count" | "avg"
) {

  const result: Record<string, any> = {}

  for (const row of data) {

    const x = row[dimX]
    const stack = row[dimStack]
    const value = Number(row[metric]) || 0

    if (!result[x]) {
      result[x] = { [dimX]: x }
    }

    if (!result[x][stack]) {
      result[x][stack] = []
    }

    result[x][stack].push(value)
  }

  return Object.values(result).map((row: any) => {

    const obj: any = { [dimX]: row[dimX] }

    for (const key in row) {

      if (key === dimX) continue

      const values = row[key]

      let resultValue = 0

      if (aggregation === "sum")
        resultValue = values.reduce((a: number, b: number) => a + b, 0)

      if (aggregation === "avg")
        resultValue = values.reduce((a: number, b: number) => a + b, 0) / values.length

      if (aggregation === "count")
        resultValue = values.length

      obj[key] = resultValue
    }

    return obj
  })
}

export default function ChartRenderer({ config, data }: Props) {

  const COLORS = [
    "#2563eb", // azul
    "#10b981", // verde
    "#f97316", // laranja
    "#8b5cf6", // roxo
    "#ef4444", // vermelho
    "#06b6d4", // ciano
    "#f59e0b", // amarelo
    "#14b8a6", // teal
    "#6366f1"  // indigo
  ]

  /* ------------------------------------------------ */
  /* BAR CHART NORMAL */
  /* ------------------------------------------------ */

  if (config.type === "bar" && config.dimensions.length === 1) {

    const dimension = config.dimensions[0]

    const chartData = aggregateSingleDimension(
      data,
      dimension,
      config.metric,
      config.aggregation
    )

    return (
      <ScrollReveal delay={0}>
        <ExpandableChartCard
          title={`${config.metric} por ${dimension}`}
          description={`Agregação (${config.aggregation}) de ${config.metric}.`}
        >

          <div className="h-full">

            <BarChartComponent
              data={chartData}
              xKey={dimension}
              bars={[
                {
                  key: config.metric,
                  color: "#2563eb"
                }
              ]}
            >
              {chartData.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </BarChartComponent>

          </div>

        </ExpandableChartCard>
      </ScrollReveal>
    )
  }

  /* ------------------------------------------------ */
  /* STACKED BAR */
  /* ------------------------------------------------ */

  if (config.type === "bar" && config.dimensions.length === 2) {

    const [dimX, dimStack] = config.dimensions

    const chartData = aggregateStacked(
      data,
      dimX,
      dimStack,
      config.metric,
      config.aggregation
    )

    return (
      <ScrollReveal delay={0}>
        <ExpandableChartCard
          title={`${config.metric} por ${dimX} / ${dimStack}`}
          description={`Agregação (${config.aggregation}) de ${config.metric}.`}
        >

          <div className="h-full">

            <StackedBarChart
              data={chartData}
              xKey={dimX}
            />

          </div>

        </ExpandableChartCard>
      </ScrollReveal>
    )
  }

  /* ------------------------------------------------ */
/* LINE CHART (1 DIMENSÃO) */
/* ------------------------------------------------ */

if (config.type === "line" && config.dimensions.length === 1) {

  const dimension = config.dimensions[0]

  const chartData = aggregateSingleDimension(
    data,
    dimension,
    config.metric,
    config.aggregation
  )

  return (
    <ScrollReveal delay={0}>
      <ExpandableChartCard
        title={`${config.metric} por ${dimension}`}
        description={`Evolução de ${config.metric} (${config.aggregation}).`}
      >

        <div className="h-full">

          <LineChartComponent
            data={chartData}
            xKey={dimension}
            lines={[
              {
                key: config.metric,
                color: COLORS[0]
              }
            ]}
          />

        </div>

      </ExpandableChartCard>
    </ScrollReveal>
  )
}

/* ------------------------------------------------ */
/* MULTI LINE (2 DIMENSÕES) */
/* ------------------------------------------------ */

if (config.type === "line" && config.dimensions.length === 2) {

  const [dimX, dimSeries] = config.dimensions

  const chartData = aggregateStacked(
    data,
    dimX,
    dimSeries,
    config.metric,
    config.aggregation
  )

  const seriesKeys = Object.keys(chartData[0] || {}).filter(
    key => key !== dimX
  )

  const lines = seriesKeys.map((key, index) => ({
    key,
    color: COLORS[index % COLORS.length]
  }))

  return (
    <ScrollReveal delay={0}>
      <ExpandableChartCard
        title={`${config.metric} por ${dimX} / ${dimSeries}`}
        description={`Comparação entre ${dimSeries}.`}
      >

        <div className="h-full">

          <LineChartComponent
            data={chartData}
            xKey={dimX}
            lines={lines}
          />

        </div>

      </ExpandableChartCard>
    </ScrollReveal>
  )
}



  return null
}