import { Route, Routes } from "react-router-dom";
import { FilteredProduct, FilterIngredient, FilterNoIngredient, FoodFilter, FoodFilterIngredient, FoodNoFilterIngredient, Home, HomeProducts, ProviderAdmin } from '../pages'
import { HomeAdmin } from '../pages'
import { UserAdmin} from '../pages'


export function Router() {
    return(
        <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/home-products" element={<HomeProducts />}/>
        <Route path="/home-products-filter-ingredient/:ingredient" element={<FilterIngredient />}/>
        <Route path="/home-products-no-ingredient/:ingredient" element={<FilterNoIngredient />}/>

        <Route path="/filtered-product/:product" element={<FilteredProduct/>}>
            <Route path="food-filter/:product/" element={<FoodFilter/>}/>
            <Route path="food-filter-ingredient/:ingredient" element={<FoodFilterIngredient />}/>
            <Route path="food-filter-no-ingredient/:ingredient" element={<FoodNoFilterIngredient />}/>
        </Route>

        <Route path="/home-admin" element={<HomeAdmin/>}/>
        <Route path="/home-admin/user-admin" element={<UserAdmin/>}/>
        <Route path="/home-admin/provider-admin" element={<ProviderAdmin/>}/>

        </Routes> 
    )
}