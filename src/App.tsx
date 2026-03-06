import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import LinuxDesktop from "./projects/sistema1/LinuxDesktop"

import Charts from "./projects/dashboards/Charts"

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/projects/sistema1" element={<LinuxDesktop />} />

      <Route
        path="/projects/dashboards/Charts"
        element={<Charts />}
      />

      <Route path="/projects/sistema3" element={<div>Sistema 3</div>} />

    </Routes>
  )
}