import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import ScrollReveal from "../../components/charts/ui/ScrollReveal"


// Charts
import StackedBarChart from "../../components/charts/StackedBarChart"
import { BarChartComponent } from "../../components/charts/BarChart"
import { LineChartComponent } from "../../components/charts/LineChart"
import { RadarChartComponent } from "../../components/charts/RadarChart"
import { ScatterChartComponent } from "../../components/charts/ScatterChart"
import { PieChartComponent } from "../../components/charts/PieChart"
import { StreamChartComponent } from "../../components/charts/StreamChart"
import { StepChartComponent } from "../../components/charts/StepChart"
import { CandlestickChartComponent } from "../../components/charts/CandlestickChart"
import { DonutChartComponent } from "../../components/charts/DonutChart"
import { TreemapChartComponent } from "../../components/charts/TreemapChart"
import { SunburstChartComponent } from "../../components/charts/SunburstChart"
import { HistogramChartComponent } from "../../components/charts/HistogramChart"
import { BoxPlotChartComponent } from "../../components/charts/BoxPlotChart"
import { ViolinChartComponent } from "../../components/charts/ViolinChart"
import { BubbleChartComponent } from "../../components/charts/BubbleChart"
import { HeatmapChartComponent } from "../../components/charts/HeatmapChart"
import { SankeyChartComponent } from "../../components/charts/SankeyChart"
import { FunnelChartComponent } from "../../components/charts/FunnelChart"
import { RadialGaugeChartComponent } from "../../components/charts/RadialGaugeChart"
import { ProgressRingComponent } from "../../components/charts/ProgressRing"
import { ChoroplethMapComponent } from "../../components/charts/ChoroplethMap"
import { GeoScatterChartComponent } from "../../components/charts/GeoScatterChart"


// Data
import { platformData } from "../../data/charts/platformData"
import { radarData } from "../../data/charts/radarData"
import { receitaDespesaLucroData } from "../../data/charts/receitaDespesaLucroData"
import { scatterData } from "../../data/charts/scatterData"
import { pieData } from "../../data/charts/pieData"
import { streamData } from "../../data/charts/streamData"
import { stepData } from "../../data/charts/stepData"
import { candleData } from "../../data/charts/candleData"
import { donutData } from "../../data/charts/donutData"
import { treemapData } from "../../data/charts/treemapData"
import { innerData, outerData } from "../../data/charts/sunburstData"
import { histogramData } from "../../data/charts/histogramData"
import { boxPlotData } from "../../data/charts/boxPlotData"
import { violinData } from "../../data/charts/violinData"
import { bubbleData } from "../../data/charts/bubbleData"
import { heatmapData } from "../../data/charts/heatmapData"
import { sankeyData } from "../../data/charts/sankeyData"
import { funnelData } from "../../data/charts/funnelData"
import { choroplethData } from "../../data/charts/choroplethData"
import { geoScatterData } from "../../data/charts/geoScatterData"


// UI
import ExpandableChartCard from "../../components/charts/ui/ExpandableChartCard"

export default function Charts() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            const isScrolled = window.scrollY > 44
            setScrolled(prev => (prev !== isScrolled ? isScrolled : prev))
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (
        <div className="bg-gray-100 min-h-screen">

            {/* HEADER FIXO */}
            <div
                className={`
                    fixed top-0 left-0 w-full z-50
                    transition-all duration-300
                    ${scrolled
                        ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 py-4"
                        : "bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-6"
                    }
                `}
            >

                {/* glow decorativo */}

                {!scrolled && (
                    <>
                        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>
                        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-400/20 blur-3xl rounded-full"></div>
                    </>
                )}

                <div className="max-w-7xl mx-auto px-10 relative">

                    {/* BARRA SUPERIOR */}

                    <div className="grid grid-cols-3 items-center">

                        {/* esquerda */}

                        <div className="flex items-center gap-3">

                            <Link
                                to="/home"
                                className="
                                    group inline-flex items-center gap-2
                                    px-3 py-1.5
                                    rounded-lg
                                    border border-gray-200
                                    bg-white/70 backdrop-blur
                                    text-sm font-medium text-gray-700
                                    hover:bg-gray-50
                                    hover:border-gray-300
                                    transition
                                "
                            >
                                <ArrowLeft
                                    size={16}
                                    className="transition-transform duration-200 group-hover:-translate-x-1"
                                />
                                Início
                            </Link>

                            {scrolled && (
                                <>
                                    <span className="px-2 py-1 text-[10px] font-semibold bg-blue-100 text-blue-700 rounded-full">
                                        Dashboards
                                    </span>

                                    <span className="px-2 py-1 text-[10px] bg-gray-100 text-gray-600 rounded-full">
                                        Showcase
                                    </span>
                                </>
                            )}

                        </div>

                        {/* centro */}

                        <div className="text-center">

                            {scrolled && (
                                <h1 className="text-lg font-semibold">
                                    Demonstração de Gráficos
                                </h1>
                            )}

                        </div>

                        {/* direita vazio */}

                        <div />

                    </div>


                    {/* HEADER EXPANDIDO */}

                    {!scrolled && (

                        <div className="mt-6 flex items-start justify-between gap-10">

                            {/* esquerda */}

                            <div className="flex flex-col gap-4 max-w-2xl">

                                <div className="flex items-center gap-4 flex-wrap">

                                    <h1 className="text-4xl font-bold tracking-tight">

                                        Demonstração de
                                        <span className="text-blue-600">
                                            {" "}Gráficos Interativos
                                        </span>

                                    </h1>

                                    <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                                        DASHBOARDS
                                    </span>

                                    <span className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                                        Showcase
                                    </span>

                                </div>

                                <p className="text-gray-600 text-base">
                                    Coleção de visualizações modernas que transformam grandes volumes de dados
                                    em insights claros. Ideal para dashboards analíticos que ajudam equipes a
                                    entender desempenho, identificar tendências e tomar decisões estratégicas.
                                </p>

                            </div>


                            {/* métricas */}

                            <div className="flex gap-10">

                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-blue-600">
                                        20+
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        Tipos de gráficos
                                    </span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-blue-600">
                                        100+
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        Dados simulados
                                    </span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-blue-600">
                                        100%
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        Interativo
                                    </span>
                                </div>

                            </div>

                        </div>

                    )}

                </div>

            </div>


            {/* CONTEUDO */}

            <div className="pt-60">
                <div className="p-10">

                    {/* TENDÊNCIA */}

                    <div className="flex items-center gap-4 mb-6">

                        <h2 className="text-2xl font-semibold text-gray-900">
                            Análise de Tendência
                        </h2>

                        <div className="flex-1 h-px bg-gray-300"></div>

                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-16">

                        <ScrollReveal delay={0}>
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
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
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
                        </ScrollReveal>

                        <ScrollReveal delay={0.6}>
                            <ExpandableChartCard
                                title="Mudanças por Etapas"
                                description="Mudanças discretas que acontecem em momentos específicos."
                            >
                                <div className="h-full">
                                    <StepChartComponent
                                        data={stepData}
                                        xKey="month"
                                        steps={[{ key: "price", color: "#2563eb" }]}
                                    />
                                </div>
                            </ExpandableChartCard>
                        </ScrollReveal>

                        <ScrollReveal delay={0.9}>
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
                        </ScrollReveal>

                    </div>


                    {/* COMPARAÇÃO */}

                    <div className="flex items-center gap-4 mb-6">

                        <h2 className="text-2xl font-semibold text-gray-900">
                            Comparação de Dados
                        </h2>

                        <div className="flex-1 h-px bg-gray-300"></div>

                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-16">

                        <ScrollReveal delay={0.2}>
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
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <ExpandableChartCard
                                title="Distribuição por Plataforma"
                                description="Mostra participação de plataformas ao longo do tempo."
                            >
                                <div className="h-full">
                                    <StackedBarChart data={platformData} />
                                </div>
                            </ExpandableChartCard>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
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
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
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
                        </ScrollReveal>

                    </div>


                    {/* DISTRIBUIÇÃO */}

                    <div className="flex items-center gap-4 mb-6">

                        <h2 className="text-2xl font-semibold text-gray-900">
                            Distribuição de Dados
                        </h2>

                        <div className="flex-1 h-px bg-gray-300"></div>

                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-16">

                        <ScrollReveal delay={0.2}>
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
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
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
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
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
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
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
                        </ScrollReveal>

                    </div>

                    {/* ANALISE ESTATISTICA */}

                    <div className="flex items-center gap-4 mb-6">

                        <h3 className="text-2xl font-semibold text-gray-900">
                            Análise Estatística
                        </h3>

                        <div className="flex-1 h-px bg-gray-300"></div>

                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-16">

                        <ScrollReveal delay={0.2}>
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
                        </ScrollReveal>


                        <ScrollReveal delay={0.4}>
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
                        </ScrollReveal>


                        <ScrollReveal delay={0.2}>
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
                        </ScrollReveal>


                        <ScrollReveal delay={0.4}>
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
                        </ScrollReveal>

                    </div>

                    {/* FLUXO */}

                    <h3 className="text-2xl font-bold mb-6">Fluxo e Conversão</h3>

                    <div className="grid grid-cols-2 gap-8 mb-16">

                        <ScrollReveal delay={0.2}>
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
                        </ScrollReveal>


                        <ScrollReveal delay={0.4}>
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
                        </ScrollReveal>


                        <ScrollReveal delay={0.2}>
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
                        </ScrollReveal>


                        <ScrollReveal delay={0.4}>
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
                        </ScrollReveal>

                    </div>


                    {/* INDICADORES */}

                    <div className="flex items-center gap-4 mb-6">

                        <h3 className="text-2xl font-semibold text-gray-900">
                            Indicadores
                        </h3>

                        <div className="flex-1 h-px bg-gray-300"></div>

                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-16">

                        <ScrollReveal delay={0.2}>
                            <ExpandableChartCard
                                title="Indicador de Meta"
                                description="Mostra progresso em relação à meta definida."
                            >
                                <div className="h-full">
                                    <RadialGaugeChartComponent value={75} max={100} />
                                </div>
                            </ExpandableChartCard>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <ExpandableChartCard
                                title="Progresso Circular"
                                description="Indicador simples de progresso percentual."
                            >
                                <div className="h-full flex items-center justify-center">
                                    <ProgressRingComponent value={72} max={100} />
                                </div>
                            </ExpandableChartCard>
                        </ScrollReveal>

                    </div>


                    {/* GEOGRÁFICO */}

                    <div className="flex items-center gap-4 mb-6">

                        <h3 className="text-2xl font-semibold text-gray-900">
                            Análise Geográfica
                        </h3>

                        <div className="flex-1 h-px bg-gray-300"></div>

                    </div>

                    <div className="grid grid-cols-2 gap-8 items-stretch min-h-0 h-full">

                        <ScrollReveal delay={0.2}>
                            <ExpandableChartCard
                                title="Distribuição por País"
                                description="Representa valores distribuídos no mapa."
                            >
                                <div className="w-full h-full min-h-0 overflow-hidden">
                                    <ChoroplethMapComponent data={choroplethData} />
                                </div>
                            </ExpandableChartCard>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <ExpandableChartCard
                                title="Eventos Geográficos"
                                description="Mostra pontos específicos no mapa mundial."
                            >
                                <div className="w-full h-full min-h-0 overflow-hidden">
                                    <GeoScatterChartComponent data={geoScatterData} />
                                </div>
                            </ExpandableChartCard>
                        </ScrollReveal>

                    </div>

                </div>
            </div>

        </div>
    )
}