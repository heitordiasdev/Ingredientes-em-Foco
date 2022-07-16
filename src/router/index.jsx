import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register"; 

export function Router() {
    return(
        <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login/>}/>
        </Routes> 
    )
}