import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Index from "./pages";
import Futebol from "./pages/Futebol";
import NotFound from "./pages/NotFound";
import Basquete from "./pages/Basquete";
import Ranking from "./pages/Ranking";


const queryClient = new QueryClient()

const App = () => (

   <QueryClientProvider client={queryClient} >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/futebol" element={<Futebol />} />
                <Route path="/basquete" element={<Basquete />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
   </QueryClientProvider>
   

)

export default App;