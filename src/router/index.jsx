import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register"; 
import { Home, HomeUser } from '../pages'

export function Router() {
    return (
        <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/home-user" element={<HomeUser />} />
        </Routes>
    )
}