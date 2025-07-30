import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Index from "./pages";


const queryClient = new QueryClient()

const App = () => (

   <QueryClientProvider client={queryClient} >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/futebol" element={<Index />} />
                <Route path="/basquete" element={<Index />} />
                <Route path="/ranking" element={<Index />} />
            </Routes>
        </BrowserRouter>
   </QueryClientProvider>
   

)

export default App;