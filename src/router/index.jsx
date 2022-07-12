import { Route, Routes } from "react-router-dom";
import { Home } from '../pages'
import Register from "../pages/Register"; 

export function Router() {
    return(
        <Routes>
        <Route path="/" element={<Register />}/>
        </Routes> 
    )
}