import { Route, Routes } from "react-router-dom";
import { FilteredProduct, FilterIngredient, FilterNoIngredient, FoodFilter, FoodFilterIngredient, FoodNoFilterIngredient, Home, HomeProducts, ProductAdmin, ProviderAdmin } from '../pages'
import { Provider } from '../pages'
import { HomeAdmin } from '../pages'
import { UserAdmin} from '../pages'
import Login from "../pages/Login";
import Register from "../pages/Register"; 
import { HomeUser } from '../pages'
import { RequireAuth } from "../contexts/RequireAuth";
import { NotFound } from '../pages'

export function Router() {
    return (
        <Routes>

            <Route path="/" element={<Home />}/>

            <Route path="/login" element={<Login/>}/>

            <Route path="/register" element={<Register />}/>

            <Route path="/home-products" element={<HomeProducts />}/>
            <Route path="/home-products-filter-ingredient/:ingredient" element={<FilterIngredient />}/>
            <Route path="/home-products-no-ingredient/:ingredient" element={<FilterNoIngredient />}/>

            <Route path="/filtered-product/:product" element={<FilteredProduct/>}>
                <Route path="food-filter" element={<FoodFilter/>}/>
                <Route path="food-filter-ingredient/:ingredient" element={<FoodFilterIngredient />}/>
                <Route path="food-filter-no-ingredient/:ingredient" element={<FoodNoFilterIngredient />}/>
            </Route>


            <Route path="/provider" element={<Provider />}/>

            <Route path="/home-admin" element={<RequireAuth><HomeAdmin /></RequireAuth>}>
                <Route path ="product-admin" element = { <ProductAdmin />}/>
                <Route path="user-admin" element={<UserAdmin/>}/>
                <Route path="provider-admin" element={<ProviderAdmin />}/>
            </Route>
            

            <Route path="/home-user" element={<RequireAuth><HomeUser /></RequireAuth>} />
  
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}