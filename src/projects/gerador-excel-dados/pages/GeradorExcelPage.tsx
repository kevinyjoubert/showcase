import UploadExcel from "./components/UploadExcel"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Upload, BarChart3, Zap, FileText } from "lucide-react"
import { useState } from "react"
import ExcelDashboard from "./components/ExcelDashboard"
import * as XLSX from "xlsx"
import { normalizeExcelData } from "@/utils/normalizeExcelData"


export default function GeradorExcelPage() {

    const [data, setData] = useState<any[] | null>(null)

    function handleFile(file: File) {
        const reader = new FileReader()

        reader.onload = (e) => {
            const data = new Uint8Array(e.target?.result as ArrayBuffer)

            const workbook = XLSX.read(data, { type: "array" })

            const sheetName = workbook.SheetNames[0]

            const sheet = workbook.Sheets[sheetName]

            const json = XLSX.utils.sheet_to_json(sheet, {
                raw: true
            })

            const normalized = normalizeExcelData(json as any[])

            setData(normalized)
        }

        reader.readAsArrayBuffer(file)
    }

    if (data) {
        return <ExcelDashboard data={data} />
    }

    return (
        <div className="h-screen w-screen bg-slate-50 flex items-center justify-center overflow-hidden">

            {/* BOTÃO VOLTAR */}
            <div className="absolute top-4 left-4 z-10">
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
            </div>


            {/* CONTEÚDO CENTRAL */}
            <div className="w-full max-w-6xl px-6 flex flex-col items-center text-center gap-14">

                {/* HERO */}
                <section className="flex flex-col items-center">

                    <h1 className="font-bold text-slate-900 leading-tight
                        text-[clamp(1.8rem,4vw,3.2rem)] max-w-4xl">
                        Transforme seus dados Excel em{" "}
                        <span className="text-blue-600">
                            decisões inteligentes.
                        </span>
                    </h1>

                    <p className="mt-4 text-slate-600 max-w-xl
                        text-[clamp(0.9rem,1.2vw,1.1rem)]">
                        Carregue suas planilhas e visualize dashboards profissionais,
                        insights automáticos e relatórios PDF completos.
                    </p>

                    <div className="mt-6 w-full max-w-xl">
                        <UploadExcel onFile={handleFile} />
                    </div>

                </section>


                {/* COMO FUNCIONA */}
                <section className="w-full">

                    <div className="text-center mb-8">
                        <h2 className="font-bold text-slate-800
                            text-[clamp(1.3rem,2vw,1.8rem)]">
                            Como funciona o fluxo
                        </h2>

                        <p className="text-slate-500 text-sm">
                            Do arquivo bruto ao relatório final em segundos.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

                        <FlowCard
                            icon={<Upload size={22} />}
                            bg="bg-blue-100"
                            color="text-blue-600"
                            title="Envie seu Excel"
                            description="Faça upload da sua planilha de vendas, estoque ou finanças em segundos."
                        />

                        <FlowCard
                            icon={<BarChart3 size={22} />}
                            bg="bg-indigo-100"
                            color="text-indigo-600"
                            title="Visualize o Dashboard"
                            description="Seus dados são transformados automaticamente em gráficos e painéis interativos."
                        />

                        <FlowCard
                            icon={<Zap size={22} />}
                            bg="bg-green-100"
                            color="text-green-600"
                            title="Descubra Insights"
                            description="Identifique tendências, padrões e oportunidades escondidas nos dados."
                        />

                        <FlowCard
                            icon={<FileText size={22} />}
                            bg="bg-red-100"
                            color="text-red-500"
                            title="Gere um Relatório"
                            description="Exporte um relatório profissional em PDF pronto para compartilhar."
                        />

                    </div>

                </section>

            </div>

        </div>
    )
}



interface FlowCardProps {
    icon: React.ReactNode
    bg: string
    color: string
    title: string
    description: string
}

function FlowCard({ icon, bg, color, title, description }: FlowCardProps) {
    return (
        <div className="flex flex-col items-center text-center">

            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${bg} ${color}`}>
                {icon}
            </div>

            <h3 className="font-semibold text-slate-800 text-sm">
                {title}
            </h3>

            <p className="text-xs text-slate-500 mt-1 max-w-[180px]">
                {description}
            </p>

        </div>
    )
}