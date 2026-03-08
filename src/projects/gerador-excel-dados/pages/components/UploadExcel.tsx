import { useRef } from "react"

import { CloudUpload } from "lucide-react"

interface Props {
    onFile: (file: File) => void
}

export default function UploadExcel({ onFile }: Props) {

    const inputRef = useRef<HTMLInputElement>(null)

    function openFile() {
        inputRef.current?.click()
    }

    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (!file) return

        onFile(file)
    }

    return (
        <div
            onClick={openFile}
            className="border-2 border-dashed border-blue-200 rounded-2xl p-12 bg-white hover:border-blue-500 transition cursor-pointer max-w-xl mx-auto"
        >

            <input
                type="file"
                accept=".xlsx,.xls,.csv"
                ref={inputRef}
                onChange={handleFile}
                className="hidden"
            />

            <div className="flex flex-col items-center">

                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <CloudUpload
                        size={36}
                        className="text-blue-600"
                        strokeWidth={2.2}
                    />
                </div>

                <p className="font-medium text-slate-800">
                    Envie o teu arquivo excel com seus dados
                </p>

                <p className="text-sm text-slate-500 mt-1">
                    Ou arraste e solte aqui (.xlsx, .xls, .csv)
                </p>

                <button
                    className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-lg text-sm hover:bg-slate-700 transition"
                >
                    Selecionar Arquivo
                </button>

                <p className="text-xs text-slate-400 mt-4">
                    Seus dados estão seguros e criptografados.
                </p>

            </div>

        </div>
    )
}