import { Route, Routes } from "react-router-dom";
import { Home } from '../pages'
import { Provider } from '../pages'

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/fornecedor" element={<Provider />}/>
        </Routes> 
    )
}