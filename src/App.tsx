import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Index from "./pages";
import Futebol from "./pages/Futebol";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient()

const App = () => (

   <QueryClientProvider client={queryClient} >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/futebol" element={<Futebol />} />
                <Route path="/basquete" element={<Index />} />
                <Route path="/ranking" element={<Index />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
   </QueryClientProvider>
   

)

export default App;