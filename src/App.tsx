import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import LinuxDesktop from "./projects/sistema1/LinuxDesktop"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/sistema1" element={<LinuxDesktop />} />
      <Route path="/projects/sistema2" element={<div>Sistema 2</div>} />
      <Route path="/projects/sistema3" element={<div>Sistema 3</div>} />
    </Routes>
  )
}