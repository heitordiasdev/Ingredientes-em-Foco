import { Route, Routes } from "react-router-dom";
import { Home } from '../pages'
import { Provider } from '../pages'
import { HomeAdmin } from '../pages'
import { UserAdmin} from '../pages'
import Login from "../pages/Login";
import Register from "../pages/Register"; 
import { HomeUser } from '../pages'

export function Router() {
    return (
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/provider" element={<Provider />}/>
        <Route path="/home-admin" element={<HomeAdmin/>}/>
        <Route path="/home-admin/user-admin" element={<UserAdmin/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home-user" element={<HomeUser />} />
        </Routes>
    )
}