import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts"

import StackedBarChart from "../../components/charts/StackedBarChart"
import { BarChartComponent } from "../../components/charts/BarChart"
import { LineChartComponent } from "../../components/charts/LineChart"
import { RadarChartComponent } from "../../components/charts/RadarChart"
import { ScatterChartComponent } from "../../components/charts/ScatterChart"
import { PieChartComponent } from "../../components/charts/PieChart"
import { StreamChartComponent } from "../../components/charts/StreamChart"

import { platformData } from "../../data/charts/platformData"
import { radarData } from "../../data/charts/radarData"
import { receitaDespesaLucroData } from "../../data/charts/receitaDespesaLucroData"
import { scatterData } from "../../data/charts/scatterData"
import { pieData } from "../../data/charts/pieData"
import { streamData } from "../../data/charts/streamData"

import { StepChartComponent } from "../../components/charts/StepChart"
import { stepData } from "../../data/charts/stepData"

import { CandlestickChartComponent } from "../../components/charts/CandlestickChart"
import { candleData } from "../../data/charts/candleData"

import { DonutChartComponent } from "../../components/charts/DonutChart"
import { donutData } from "../../data/charts/donutData"

import { TreemapChartComponent } from "../../components/charts/TreemapChart"
import { treemapData } from "../../data/charts/treemapData"

import { SunburstChartComponent } from "../../components/charts/SunburstChart"
import { innerData, outerData } from "../../data/charts/sunburstData"

import { HistogramChartComponent } from "../../components/charts/HistogramChart"
import { histogramData } from "../../data/charts/histogramData"

import { BoxPlotChartComponent } from "../../components/charts/BoxPlotChart"
import { boxPlotData } from "../../data/charts/boxPlotData"

import { ViolinChartComponent } from "../../components/charts/ViolinChart"
import { violinData } from "../../data/charts/violinData"

import { BubbleChartComponent } from "../../components/charts/BubbleChart"
import { bubbleData } from "../../data/charts/bubbleData"

import { HeatmapChartComponent } from "../../components/charts/HeatmapChart"
import { heatmapData } from "../../data/charts/heatmapData"

import { SankeyChartComponent } from "../../components/charts/SankeyChart"
import { sankeyData } from "../../data/charts/sankeyData"

import { FunnelChartComponent } from "../../components/charts/FunnelChart"
import { funnelData } from "../../data/charts/funnelData"

import { RadialGaugeChartComponent } from "../../components/charts/RadialGaugeChart"
import { ProgressRingComponent } from "../../components/charts/ProgressRing"

import { ChoroplethMapComponent } from "../../components/charts/ChoroplethMap"
import { choroplethData } from "../../data/charts/choroplethData"

import { GeoScatterChartComponent } from "../../components/charts/GeoScatterChart"
import { geoScatterData } from "../../data/charts/geoScatterData"

import ExpandableChartCard from "../../components/ui/ExpandableChartCard"


export default function Charts() {

    const card = "bg-white rounded-xl p-6 shadow-md border border-gray-300"

    return (
        <div className="bg-gray-100 min-h-screen p-10">

            {/* HEADER */}

            <div className="mb-14">

                <p className="text-blue-600 text-sm font-semibold tracking-wide">
                    VISUALIZAÇÃO DE DADOS
                </p>

                <h1 className="text-4xl font-bold mt-2">
                    Demonstração de Gráficos
                </h1>

                <p className="text-gray-500 mt-3 max-w-xl">
                    Exemplos de diferentes formas de visualizar dados em dashboards interativos.
                </p>

                <div className="flex gap-10 mt-6 text-blue-600 font-semibold">
                    <div>20+ Tipos de Gráficos</div>
                    <div>100+ Dados Simulados</div>
                    <div>100% Interativo</div>
                </div>

            </div>


            {/* TENDÊNCIA */}

            <h3 className="text-2xl font-bold mb-6">Análise de Tendência</h3>

            <div className="grid grid-cols-2 gap-8 mb-16">

                <ExpandableChartCard
                    title="Evolução de Receita, Despesas e Lucro"
                    description="Mostra a evolução mensal das principais métricas financeiras."
                >
                    <div className="h-full">
                        <LineChartComponent
                            data={receitaDespesaLucroData}
                            xKey="month"
                            lines={[
                                { key: "receita", color: "#2563eb" },
                                { key: "despesas", color: "#ef4444" },
                                { key: "lucro", color: "#10b981" }
                            ]}
                        />
                    </div>
                </ExpandableChartCard>


                <ExpandableChartCard
                    title="Crescimento Acumulado"
                    description="Visualização acumulada da evolução financeira."
                >

                    <div className="h-full">

                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={receitaDespesaLucroData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />

                                <Area
                                    type="monotone"
                                    dataKey="receita"
                                    stroke="#2563eb"
                                    fill="#2563eb33"
                                />

                                <Area
                                    type="monotone"
                                    dataKey="lucro"
                                    stroke="#10b981"
                                    fill="#10b98133"
                                />

                            </AreaChart>
                        </ResponsiveContainer>

                    </div>

                </ExpandableChartCard>


                <ExpandableChartCard
                    title="Mudanças por Etapas"
                    description="Mudanças discretas que acontecem em momentos específicos."
                >

                    <div className="h-full">

                        <StepChartComponent
                            data={stepData}
                            xKey="month"
                            steps={[
                                { key: "price", color: "#2563eb" }
                            ]}
                        />

                    </div>

                </ExpandableChartCard>


                <ExpandableChartCard
                    title="Tendência por Categoria"
                    description="Mostra evolução de categorias ao longo do tempo."
                >

                    <div className="h-full">

                        <StreamChartComponent
                            data={streamData}
                            xKey="month"
                            streams={[
                                { key: "rock", color: "#2563eb" },
                                { key: "pop", color: "#10b981" },
                                { key: "jazz", color: "#f59e0b" }
                            ]}
                        />

                    </div>

                </ExpandableChartCard>

            </div>


            {/* COMPARAÇÃO */}

            <h3 className="text-2xl font-bold mb-6">Comparação de Dados</h3>

            <div className="grid grid-cols-2 gap-8 mb-16">
                <ExpandableChartCard
                    title="Comparação de Valores"
                    description="Compara valores entre diferentes períodos."
                >

                    <div className="h-full">

                        <BarChartComponent
                            data={receitaDespesaLucroData}
                            xKey="month"
                            bars={[
                                { key: "receita", color: "#2563eb" },
                                { key: "despesas", color: "#ef4444" }
                            ]}
                        />

                    </div>

                </ExpandableChartCard>



                <ExpandableChartCard
                    title="Distribuição por Plataforma"
                    description="Mostra participação de plataformas ao longo do tempo."
                >

                    <div className="h-full">

                        <StackedBarChart
                            data={platformData}
                        />

                    </div>

                </ExpandableChartCard>



                <ExpandableChartCard
                    title="Análise de Correlação"
                    description="Avalia relação entre duas variáveis."
                >

                    <div className="h-full">

                        <ScatterChartComponent
                            xKey="x"
                            yKey="y"
                            series={[
                                {
                                    name: "Dataset",
                                    color: "#2563eb",
                                    data: scatterData
                                }
                            ]}
                        />

                    </div>

                </ExpandableChartCard>



                <ExpandableChartCard
                    title="Comparação Multidimensional"
                    description="Compara três dimensões ao mesmo tempo."
                >

                    <div className="h-full">

                        <BubbleChartComponent
                            data={bubbleData}
                            xKey="x"
                            yKey="y"
                            zKey="size"
                        />

                    </div>

                </ExpandableChartCard>

            </div>


            {/* DISTRIBUIÇÃO */}

            <h3 className="text-2xl font-bold mb-6">Distribuição de Dados</h3>

            <div className="grid grid-cols-2 gap-8 mb-16">

                <ExpandableChartCard
                    title="Distribuição por Categoria"
                    description="Mostra a proporção de cada categoria."
                >

                    <div className="h-full">
                        <PieChartComponent
                            data={pieData}
                            dataKey="value"
                            nameKey="name"
                        />
                    </div>

                </ExpandableChartCard>



                <ExpandableChartCard
                    title="Distribuição em Anel"
                    description="Versão alternativa do gráfico de pizza."
                >

                    <div className="h-full">
                        <DonutChartComponent
                            data={donutData}
                            dataKey="value"
                            nameKey="name"
                        />
                    </div>

                </ExpandableChartCard>



                <ExpandableChartCard
                    title="Mapa Hierárquico"
                    description="Representa dados hierárquicos em blocos."
                >

                    <div className="h-full">
                        <TreemapChartComponent
                            data={treemapData}
                            dataKey="value"
                        />
                    </div>

                </ExpandableChartCard>



                <ExpandableChartCard
                    title="Hierarquia Circular"
                    description="Mostra relações hierárquicas em formato circular."
                >

                    <div className="h-full">
                        <SunburstChartComponent
                            innerData={innerData}
                            outerData={outerData}
                        />
                    </div>

                </ExpandableChartCard>

            </div>


            {/* ESTATÍSTICA */}

            <h3 className="text-2xl font-bold mb-6">Análise Estatística</h3>

            <div className="grid grid-cols-2 gap-8 mb-16">

                <ExpandableChartCard
                    title="Distribuição de Frequência"
                    description="Mostra quantas vezes cada faixa aparece."
                >

                    <div className="h-full">

                        <HistogramChartComponent
                            data={histogramData}
                            xKey="range"
                            yKey="count"
                        />

                    </div>

                </ExpandableChartCard>



                <ExpandableChartCard
                    title="Distribuição Estatística"
                    description="Mostra quartis e dispersão dos dados."
                >

                    <div className="h-full">

                        <BoxPlotChartComponent
                            data={boxPlotData}
                        />

                    </div>

                </ExpandableChartCard>



                <ExpandableChartCard
                    title="Densidade de Distribuição"
                    description="Mostra a forma completa da distribuição."
                >

                    <div className="h-full">

                        <ViolinChartComponent
                            data={violinData}
                            xKey="value"
                            yKey="density"
                        />

                    </div>

                </ExpandableChartCard>


                <ExpandableChartCard
                    title="Mapa de Intensidade"
                    description="Representa intensidade de valores em matriz."
                >

                    <div className="h-full flex items-center justify-center">

                        <HeatmapChartComponent
                            data={heatmapData}
                        />

                    </div>

                </ExpandableChartCard>

            </div>


            {/* FLUXO */}

            <h3 className="text-2xl font-bold mb-6">Fluxo e Conversão</h3>

            <div className="grid grid-cols-2 gap-8 mb-16">

                <ExpandableChartCard
                    title="Fluxo entre Etapas"
                    description="Mostra movimento de dados entre etapas."
                >

                    <div className="h-full">
                        <SankeyChartComponent
                            data={sankeyData}
                        />
                    </div>

                </ExpandableChartCard>



                <ExpandableChartCard
                    title="Funil de Conversão"
                    description="Representa conversão entre etapas do processo."
                >

                    <div className="h-full">
                        <FunnelChartComponent
                            data={funnelData}
                            dataKey="value"
                            nameKey="name"
                        />
                    </div>

                </ExpandableChartCard>



                <ExpandableChartCard
                    title="Análise Multidimensional"
                    description="Comparação de métricas em múltiplas dimensões."
                >

                    <div className="h-full">
                        <RadarChartComponent
                            data={radarData}
                            angleKey="subject"
                            series={[
                                { key: "A", color: "#2563eb" },
                                { key: "B", color: "#9333ea" }
                            ]}
                        />
                    </div>

                </ExpandableChartCard>



                <ExpandableChartCard
                    title="Análise de Mercado"
                    description="Visualização típica de dados financeiros."
                >

                    <div className="h-full">
                        <CandlestickChartComponent
                            data={candleData}
                        />
                    </div>

                </ExpandableChartCard>

            </div>


            {/* INDICADORES */}

            <h3 className="text-2xl font-bold mb-6">Indicadores</h3>

            <div className="grid grid-cols-2 gap-8 mb-16">

                <ExpandableChartCard
                    title="Indicador de Meta"
                    description="Mostra progresso em relação à meta definida."
                >

                    <div className="h-full">
                        <RadialGaugeChartComponent
                            value={75}
                            max={100}
                        />
                    </div>

                </ExpandableChartCard>



                <ExpandableChartCard
                    title="Progresso Circular"
                    description="Indicador simples de progresso percentual."
                >

                    <div className="h-full flex items-center justify-center">
                        <ProgressRingComponent
                            value={72}
                            max={100}
                        />
                    </div>

                </ExpandableChartCard>

            </div>


            {/* GEOGRÁFICO */}

            <h3 className="text-2xl font-bold mb-6">
                Análise Geográfica
            </h3>

            <div className="grid grid-cols-2 gap-8 items-stretch min-h-0 h-full">

                <ExpandableChartCard
                    title="Distribuição por País"
                    description="Representa valores distribuídos no mapa."
                >

                    <div className="w-full h-full min-h-0 overflow-hidden">

                        <ChoroplethMapComponent
                            data={choroplethData}
                        />

                    </div>

                </ExpandableChartCard>



                <ExpandableChartCard
                    title="Eventos Geográficos"
                    description="Mostra pontos específicos no mapa mundial."
                >

                    <div className="w-full h-full min-h-0 overflow-hidden">

                        <GeoScatterChartComponent
                            data={geoScatterData}
                        />

                    </div>

                </ExpandableChartCard>

            </div>

        </div>
    )
}