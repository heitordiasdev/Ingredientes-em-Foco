import { Route, Routes } from "react-router-dom";
import { FilteredProduct, FoodFilter, FoodFilterIngredient, FoodNoFilterIngredient, Home } from '../pages'
import { HomeAdmin } from '../pages'
import { UserAdmin} from '../pages'


export function Router() {
    return(
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/filtered-product/:product" element={<FilteredProduct/>}>
            <Route path="food-filter" element={<FoodFilter/>}/>
            <Route path="food-filter-ingredient/:ingredient" element={<FoodFilterIngredient />}/>
            <Route path="food-filter-no-ingredient/:ingredient" element={<FoodNoFilterIngredient />}/>
        </Route>
        <Route path="/home-admin" element={<HomeAdmin/>}/>
        <Route path="/home-admin/user-admin" element={<UserAdmin/>}/>
        </Routes> 
    )
}