
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import ScrollToTop from "./components/ui/ScrollToTop";
import LinuxDesktop from "./projects/sistema1/LinuxDesktop";
import Dashboards from "./projects/dashboards/Charts"
import ContractAnalysis from "./projects/contract-analysis/ContractAnalysis";
import GeradorExcelPage from "@/projects/gerador-excel-dados/pages/GeradorExcelPage"

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route 
                        path="/" 
                        element={<Splash />} 
                    />
                    <Route 
                        path="/home" 
                        element={<Home />} 
                    />
                    <Route 
                        path="/projects/sistema1" 
                        element={<LinuxDesktop />} 
                    />
                    <Route
                        path="/projects/dashboards"
                        element={<Dashboards />}
                    />
                    <Route
                        path="/projects/gerador-excel-dados"
                        element={<GeradorExcelPage />}
                    />
                    <Route 
                        path="/projects/contract-analysis" 
                        element={<ContractAnalysis />} 
                    />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}