import { useState, useRef, type ReactNode } from "react"
import { Maximize2, Trash2, Download, Copy, Check } from "lucide-react"
import { toPng } from "html-to-image"

interface Props {
  title: string
  description: string
  children: ReactNode
  onDelete?: () => void
}

export default function ExpandableChartCard({
  title,
  description,
  children,
  onDelete
}: Props) {

  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const cardChartRef = useRef<HTMLDivElement>(null)
  const modalChartRef = useRef<HTMLDivElement>(null)

  function getActiveChartElement() {
    return open ? modalChartRef.current : cardChartRef.current
  }

  async function exportPNG() {

    const element = getActiveChartElement()
    if (!element) return

    const dataUrl = await toPng(element, {
      cacheBust: true,
      skipFonts: true,
      backgroundColor: "#ffffff"
    })

    const link = document.createElement("a")
    link.download = "grafico.png"
    link.href = dataUrl
    link.click()
  }

  async function copyChart() {

    const element = getActiveChartElement()
    if (!element) return

    try {

      const dataUrl = await toPng(element, {
        cacheBust: true,
        skipFonts: true,
        backgroundColor: "#ffffff"
      })

      const blob = await (await fetch(dataUrl)).blob()

      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob
        })
      ])

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)

    } catch (err) {
      console.error("Erro ao copiar gráfico", err)
    }

  }

  function Actions() {
    return (
      <div className="absolute top-3 right-3 flex gap-2">

        {onDelete && (
          <button
            onClick={onDelete}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-700 transition"
            title="Remover gráfico"
          >
            <Trash2 size={16} />
          </button>
        )}

        <button
          onClick={copyChart}
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black transition"
          title="Copiar gráfico"
        >
          {copied ? <Check size={16}/> : <Copy size={16}/>}
        </button>

        <button
          onClick={exportPNG}
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black transition"
          title="Exportar PNG"
        >
          <Download size={16} />
        </button>

        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black transition"
            title="Expandir gráfico"
          >
            <Maximize2 size={16} />
          </button>
        )}

      </div>
    )
  }

  return (
    <>
      {/* CARD NORMAL */}

      <div className="relative group bg-white rounded-xl p-6 shadow-md border border-gray-300 flex flex-col">

        <Actions/>

        {copied && (
          <div className="absolute bottom-3 right-3 text-xs bg-black text-white px-2 py-1 rounded-md">
            Copiado!
          </div>
        )}

        <h2 className="font-semibold mb-1">{title}</h2>

        <p className="text-sm text-gray-500 mb-4">{description}</p>

        <div
          ref={cardChartRef}
          className="h-[260px] w-full bg-white"
        >
          {children}
        </div>

      </div>


      {/* MODAL FULLSCREEN */}

      {open && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white w-[92vw] h-[92vh] p-8 rounded-xl relative flex flex-col">

            <div className="relative top-4 left-4">
              <Actions />
            </div>

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-lg hover:scale-110 transition"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-2">
              {title}
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              {description}
            </p>

            <div className="flex-1 w-full min-h-0">

              <div
                ref={modalChartRef}
                className="w-full h-full bg-white"
              >
                {children}
              </div>

            </div>

          </div>

        </div>

      )}

    </>
  )
}