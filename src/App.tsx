
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import LinuxDesktop from "./projects/sistema1/LinuxDesktop";
import Dashboards from "./projects/dashboards/Charts"

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects/sistema1" element={<LinuxDesktop />} />
            <Route path="/projects/dashboards" element={<div><Dashboards /></div>} />
            <Route path="/projects/sistema3" element={<div>Sistema 3</div>} />
          </Routes>
        </BrowserRouter>
    </QueryClientProvider>
  )
}