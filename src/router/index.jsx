import { Route, Routes } from "react-router-dom";
import { Home, HomeUser } from '../pages'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home-user" element={<HomeUser />} />
        </Routes>
    )
}