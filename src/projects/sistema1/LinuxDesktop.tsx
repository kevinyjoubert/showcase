import { useState, useEffect, useRef } from "react"
import Draggable from "react-draggable"

export default function LinuxDesktop() {

  const [openTerminal, setOpenTerminal] = useState(false)
  const [time, setTime] = useState("")

  const nodeRef = useRef(null)

  useEffect(() => {

    const update = () => {
      setTime(new Date().toLocaleTimeString())
    }

    update()

    const interval = setInterval(update, 1000)

    return () => clearInterval(interval)

  }, [])


  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/images/linux-wallpaper.jpg')" }}
    >

      {/* TOP BAR */}
      <div className="h-10 bg-black/80 text-white flex items-center justify-between px-4 text-sm">

        <div className="font-semibold">
          ReactOS
        </div>

        <div>
          {time}
        </div>

      </div>


      {/* DESKTOP */}
      <div className="flex-1 relative">

        {openTerminal && (

          <Draggable nodeRef={nodeRef} handle=".window-bar">

            <div
              ref={nodeRef}
              className="absolute top-20 left-20 w-[520px] h-[320px] bg-[#1e1e1e] rounded-lg shadow-2xl border border-zinc-700 flex flex-col overflow-hidden font-mono text-sm"
            >

              {/* WINDOW BAR */}
              <div className="window-bar cursor-move flex items-center justify-between px-3 py-2 bg-zinc-800 text-zinc-200">

                <div className="flex gap-2">

                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                </div>

                <span className="text-xs text-zinc-400">
                  user@react: ~
                </span>

                <button
                  onClick={() => setOpenTerminal(false)}
                  className="text-zinc-400 hover:text-white"
                >
                  ✕
                </button>

              </div>


              {/* TERMINAL CONTENT */}
              <div className="flex-1 p-4 text-green-400 overflow-auto">

                <div>
                  <span className="text-green-500">user@react</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$</span> hello world
                </div>

                <div>
                  <span className="text-green-500">user@react</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$</span> ls
                </div>

                <div className="text-zinc-300 ml-4">
                  Desktop Documents Downloads Projects
                </div>

                <div className="flex items-center mt-2">

                  <span className="text-green-500">user@react</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$</span>

                  <span className="ml-1 animate-pulse text-white">
                    ▌
                  </span>

                </div>

              </div>

            </div>

          </Draggable>

        )}

      </div>


      {/* DOCK */}
      <div className="h-16 bg-black/70 flex items-center justify-center gap-6">

        <button
          onClick={() => setOpenTerminal(true)}
          className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white hover:scale-110 transition"
        >
          &gt;
        </button>

        <button
          className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white hover:scale-110 transition"
        >
          ⚙
        </button>

        <button
          className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white hover:scale-110 transition"
        >
          📁
        </button>

      </div>

    </div>
  )
}