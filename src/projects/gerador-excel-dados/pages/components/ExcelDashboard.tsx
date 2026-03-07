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
import { AG_GRID_PT_BR } from "@/lib/agGridPtBR"

import { Maximize2, Layout, ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  data: any[]
}

type ChartConfig = {
  id: string
  type: string
  dimensions: string[]
  metric: string
  aggregation: "sum" | "count" | "avg"
}

export default function ExcelDashboard({ data }: Props) {

  const [charts, setCharts] = useState<ChartConfig[]>([])
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const [layout, setLayout] = useState<
    "split" | "gridMax" | "chartsMax" | "chartsHidden"
  >("split")

  function addChart(config: Omit<ChartConfig, "id">) {
    setCharts((prev) => [
      ...prev,
      {
        ...config,
        id: crypto.randomUUID()
      }
    ])
  }

  const columns: ColDef[] =
    data.length > 0
      ? Object.keys(data[0]).map((key) => ({
          field: key,
          sortable: true,
          filter: true,
          resizable: true,
          editable: true
        }))
      : []

  const columnNames = data.length ? Object.keys(data[0]) : []

  return (
    <div className="h-screen w-screen flex bg-slate-50">

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col p-6 gap-4">

        {/* CONTROLES */}
        <div className="flex items-center gap-3">

          <div className="flex bg-white border border-slate-200 rounded-lg p-1 shadow-sm">

            <button
              onClick={() => setLayout("split")}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition
              ${layout === "split"
                ? "bg-blue-600 text-white shadow"
                : "text-slate-600 hover:bg-slate-100"}`}
            >
              <Layout size={14} />
              Dividir
            </button>

            <button
              onClick={() => setLayout("gridMax")}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition
              ${layout === "gridMax"
                ? "bg-blue-600 text-white shadow"
                : "text-slate-600 hover:bg-slate-100"}`}
            >
              <Maximize2 size={14} />
              Dashboard
            </button>

            <button
              onClick={() => setLayout("chartsMax")}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition
              ${layout === "chartsMax"
                ? "bg-blue-600 text-white shadow"
                : "text-slate-600 hover:bg-slate-100"}`}
            >
              <Maximize2 size={14} />
              Gráficos
            </button>

          </div>

        </div>

        {/* DASHBOARD */}
        {(layout === "split" || layout === "gridMax" || layout === "chartsHidden") && (
          <div
            className={`ag-theme-quartz rounded-lg border overflow-hidden ${
              layout === "split" ? "h-1/2" : "flex-1"
            }`}
          >

            <AgGridReact
              theme="legacy"
              localeText={AG_GRID_PT_BR}
              rowData={data}
              columnDefs={columns}
              animateRows
              rowHeight={38}
              headerHeight={50}
              defaultColDef={{
                flex: 1,
                minWidth: 120
              }}
              rowSelection={{
                mode: "multiRow",
                enableClickSelection: true
              }}
              rowClassRules={{
                "bg-blue-100": "node.isSelected()"
              }}
            />

          </div>
        )}

        {/* GRÁFICOS */}
        {(layout === "split" || layout === "chartsMax") && (
          <div
            className={`overflow-auto ${
              layout === "split" ? "h-1/2" : "flex-1"
            }`}
          >

            {charts.length === 0 && (
              <div className="text-center text-sm text-gray-400 mt-10">
                Nenhum gráfico criado ainda
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {charts.map((chart) => (
                <ChartRenderer key={chart.id} config={chart} data={data} />
              ))}
            </div>

          </div>
        )}

      </div>

      {/* CONTAINER SIDEBAR */}
      <div className="relative flex">

        {/* BOTÃO TOGGLE */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -left-4 top-1/2 -translate-y-1/2
                     bg-white border border-slate-200 shadow-md
                     rounded-full w-8 h-8 flex items-center justify-center
                     hover:bg-slate-100 transition z-10"
        >
          {sidebarOpen ? (
            <ChevronRight size={16} />
          ) : (
            <ChevronLeft size={16} />
          )}
        </button>

        {/* SIDEBAR */}
        <div
          className={`border-l bg-white flex flex-col transition-all duration-300
          ${sidebarOpen ? "w-[320px]" : "w-3 overflow-hidden"}`}
        >

          {/* HEADER */}
          <div className="p-4 border-b">
            <h2 className="font-semibold text-slate-800">
              Sugestões de Gráficos
            </h2>

            <p className="text-xs text-slate-500">
              Baseado nas colunas detectadas
            </p>
          </div>

          {/* SUGESTÕES */}
          <div className="flex-1 overflow-auto">
            <ChartSuggestions data={data} />
          </div>

          {/* BUILDER */}
          <div className="border-t">
            <ChartBuilder
              columns={columnNames}
              onCreateChart={addChart}
            />
          </div>

        </div>

      </div>

    </div>
  )
}