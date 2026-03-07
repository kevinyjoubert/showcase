import { useState } from "react"

import ChartSuggestions from "./ChartSuggestions"
import ChartBuilder from "./ChartBuilder"
import ChartRenderer from "./ChartRenderer"

import type { ColDef } from "ag-grid-community"

import { AgGridReact } from "ag-grid-react"

import { ModuleRegistry, AllCommunityModule } from "ag-grid-community"

ModuleRegistry.registerModules([AllCommunityModule])

import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"

interface Props {
  data: any[]
}

type ChartConfig = {
  type: string
  x: string
  y: string
}

export default function ExcelDashboard({ data }: Props) {

  const [charts, setCharts] = useState<ChartConfig[]>([])

  function addChart(config: ChartConfig) {
    setCharts((prev) => [...prev, config])
  }

  const columns: ColDef[] =
    data.length > 0
      ? Object.keys(data[0]).map((key) => ({
        field: key,
        sortable: true,
        filter: true,
        resizable: true
      }))
      : []

  const columnNames = data.length ? Object.keys(data[0]) : []

  return (
    <div className="h-screen w-screen flex bg-slate-50">

      {/* SIDEBAR */}
      <div className="w-[320px] border-r bg-white flex flex-col">

        <div className="p-4 border-b">
          <h2 className="font-semibold text-slate-800">
            Sugestões de Gráficos
          </h2>
          <p className="text-xs text-slate-500">
            Baseado nas colunas detectadas
          </p>
        </div>

        <div className="flex-1 overflow-auto">
          <ChartSuggestions data={data} />
        </div>

        <div className="border-t">
          <ChartBuilder
            columns={columnNames}
            onCreateChart={addChart}
          />
        </div>

      </div>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col p-6 gap-6">

        {/* GRÁFICOS GERADOS */}
        {charts.length > 0 && (
          <div className="grid grid-cols-2 gap-6">
            {charts.map((chart, i) => (
              <ChartRenderer
                key={i}
                config={chart}
                data={data}
              />
            ))}
          </div>
        )}

        {/* GRID */}
        <div className="flex-1 ag-theme-quartz rounded-lg overflow-hidden border">

          <AgGridReact
            theme="legacy"
            rowData={data}
            columnDefs={columns}
            pagination
            animateRows
            rowHeight={38}
            headerHeight={50}
            defaultColDef={{
              flex: 1,
              minWidth: 120
            }}
          />

        </div>

      </div>

    </div>
  )
}