import { Route, Routes } from "react-router-dom";
import { Home } from '../pages'
import { Provider } from '../pages'
import { HomeAdmin } from '../pages'
import { UserAdmin} from '../pages'


export function Router() {
    return(
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/fornecedor" element={<Provider />}/>
        <Route path="/home-admin" element={<HomeAdmin/>}/>
        <Route path="/home-admin/user-admin" element={<UserAdmin/>}/>
        </Routes> 
    )
}