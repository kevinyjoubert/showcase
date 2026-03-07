import { useState, type ReactNode } from "react"
import { Maximize2 } from "lucide-react"

interface Props {
  title: string
  description: string
  children: ReactNode
}

export default function ExpandableChartCard({
  title,
  description,
  children
}: Props) {

  const [open, setOpen] = useState(false)

  return (
    <>
      {/* CARD NORMAL */}

      {/* <div className="relative bg-white rounded-xl p-6 shadow-md border border-gray-300 flex flex-col"> */}
        <div className="relative group bg-white rounded-xl p-6 shadow-md border border-gray-300 flex flex-col">

        <button
          onClick={() => setOpen(true)}
          className="
            absolute top-3 right-3
            w-9 h-9
            flex items-center justify-center
            rounded-lg
            bg-gray-100
            hover:bg-gray-200
            text-gray-600
            hover:text-black
            transition
          "
          title="Expandir gráfico"
        >
          <Maximize2 size={16} />
        </button>

        <h2 className="font-semibold mb-1">{title}</h2>

        <p className="text-sm text-gray-500 mb-4">
          {description}
        </p>

        {/* altura fixa do card */}

        <div className="h-[260px] w-full">
          {children}
        </div>

      </div>


      {/* MODAL FULLSCREEN */}

      {open && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white w-[92vw] h-[92vh] p-8 rounded-xl relative flex flex-col">

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

            {/* área real do gráfico */}

            <div className="flex-1 w-full min-h-0">

              <div className="w-full h-full">
                {children}
              </div>

            </div>

          </div>

        </div>

      )}

    </>
  )
}