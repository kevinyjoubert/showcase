import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import ProposalPreview from "./PropostaPreview"
import type { ProposalData } from "./types"

import jsPDF from "jspdf"
import html2canvas from "html2canvas"

export default function GeradorProposta() {

    const [data, setData] = useState<ProposalData>({
        empresa: "",
        cliente: "",
        titulo: "",
        descricao: "",
        valor: "",
        prazo: "",
        responsavel: ""
    })

    function updateField(field: keyof ProposalData, value: string) {
        setData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    async function gerarPDF() {

        const element = document.getElementById("proposal-preview")

        if (!element) {
            console.error("Preview não encontrado")
            return
        }

        const canvas = await html2canvas(element, {
            scale: 2,
            backgroundColor: "#ffffff",
            useCORS: true
        })

        const imgData = canvas.toDataURL("image/png")

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
        })

        const imgWidth = 210
        const imgHeight = (canvas.height * imgWidth) / canvas.width

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)

        pdf.save("proposta-comercial.pdf")
    }

    return (
        <div className="w-screen h-screen bg-gray-100 flex flex-col">

            {/* HEADER */}
            <header className="p-4">

                <Link
                    to="/home"
                    className="
                        group inline-flex items-center gap-2
                        px-3 py-1.5
                        rounded-lg
                        border border-gray-200
                        bg-white
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

            </header>


            {/* CONTEÚDO */}
            <div className="flex-1 grid grid-cols-2 gap-8 px-10 pb-10 overflow-hidden">

                {/* FORMULÁRIO */}
                <div className="bg-white p-8  mt-2 rounded-xl shadow-md overflow-y-auto">

                    <h2 className="text-xl font-semibold mb-6">
                        Gerador de Proposta Comercial
                    </h2>

                    <div className="space-y-5">

                        <div className="flex flex-col gap-1">
                            <label htmlFor="empresa" className="text-sm font-medium">
                                Empresa
                            </label>
                            <input
                                id="empresa"
                                className="w-full border rounded-lg p-3"
                                value={data.empresa}
                                onChange={e => updateField("empresa", e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="cliente" className="text-sm font-medium">
                                Cliente
                            </label>
                            <input
                                id="cliente"
                                className="w-full border rounded-lg p-3"
                                value={data.cliente}
                                onChange={e => updateField("cliente", e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="titulo" className="text-sm font-medium">
                                Título da proposta
                            </label>
                            <input
                                id="titulo"
                                className="w-full border rounded-lg p-3"
                                value={data.titulo}
                                onChange={e => updateField("titulo", e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="descricao" className="text-sm font-medium">
                                Escopo do projeto
                            </label>
                            <textarea
                                id="descricao"
                                className="w-full border rounded-lg p-3 h-32"
                                value={data.descricao}
                                onChange={e => updateField("descricao", e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="prazo" className="text-sm font-medium">
                                Prazo
                            </label>
                            <input
                                id="prazo"
                                className="w-full border rounded-lg p-3"
                                value={data.prazo}
                                onChange={e => updateField("prazo", e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="valor" className="text-sm font-medium">
                                Valor
                            </label>
                            <input
                                id="valor"
                                className="w-full border rounded-lg p-3"
                                value={data.valor}
                                onChange={e => updateField("valor", e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="responsavel" className="text-sm font-medium">
                                Responsável
                            </label>
                            <input
                                id="responsavel"
                                className="w-full border rounded-lg p-3"
                                value={data.responsavel}
                                onChange={e => updateField("responsavel", e.target.value)}
                            />
                        </div>

                        <button
                            onClick={gerarPDF}
                            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 mt-4"
                        >
                            Gerar PDF
                        </button>

                    </div>
                </div>

                {/* PREVIEW */}
                <div className="overflow-y-auto flex justify-center p-2">
                    <ProposalPreview data={data} />
                </div>

            </div>

        </div>
    )
}